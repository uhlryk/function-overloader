# FUNCTION OVERLOADER
[![Build Status](https://travis-ci.org/uhlryk/function-overloader.svg)](https://travis-ci.org/uhlryk/function-overloader)
[![Downloads](https://img.shields.io/npm/dt/function-overloader.svg)](https://www.npmjs.com/package/function-overloader)
[![Downloads](https://img.shields.io/npm/dm/function-overloader.svg)](https://www.npmjs.com/package/function-overloader)
[![NPM version](https://img.shields.io/npm/v/function-overloader.svg)](https://www.npmjs.com/package/function-overloader)

This library/helper is solution for lack of function overloading in javascript.
You can define different behaviours depending on provided arguments to the function.

## install

```
npm install function-overloader
```

## usage


First import/require this library

```javascript
import Overload from "function-overloader";
```

then for function or method define rules and callbacks

```javascript
const rulesForSomeFunction = 
    Overload
       .when(<list of rules>)
       .do(<callback called when above rules pass>)
       .when(<list of other rules>)
       .do(<callback called when above rules pass>)
       // you can add as many rules as you need
  ```     
      
Next we call `rulesForSomeFunction.execute(...arguments)` inside overloaded function or method  
       
```javascript
function someOverloadedFunction() {
    return rulesForSomeFunction
        .execute(...arguments);
}
```

Right when you call `someOverloadedFunction` with different arguments it will call correct callback


## example

### First example

Lets assume that we need function which can
  * accept object with properties `name` and `age` where `name` is string and `age` a number.
  * accept two arguments where former is a string and second a number.
  * accept two arguments where former is a number and second a string.

All variants should return string with format name_age

```javascript

import Overload from "function-overloader";

function joinNameAndAge() {
    return Overload
       .when(Overload.Interface({
           name: Overload.STRING,
           age: Overload.NUMBER
       }))
       .do(objWithNameAndAge => objWithNameAndAge.name + objWithNameAndAge.age)
       .when(Overload.String, Overload.NUMBER)
       .do((name, age) => name + age)
       .when(Overlod.Number, Overload.String)
       .do((age, name) => name + age)
       .execute(...arguments);
}

joinNameAndAge({
    name: "Test",
    age: 1
}); // Test1
joinNameAndAge("Test", 2); // Test2
joinNameAndAge(3, "Test"); // Test3
```

## API

### .when()

```javascript
.when()
```

It is for describe when to run related `do` method.
Return object with `do` method

Accept multiple values that will descibe function.

There is lot of possible values, Some with additional params. All of them are available here [https://github.com/uhlryk/check-complex-types](https://github.com/uhlryk/check-complex-types)

All of them are available in `Overload` object. e.g. `Overload.ANY()`

### .do()

Is accessible only from object returned from `.when` method

```javascript
.do()
```

Accept callback function which should be called if previous `.when` match arguments.

### .else()

```javascript
.else()
```
Accept callback function. Will invoke it when other criteria are not met.

### .elseThrow()

```javascript
.elseThrow()
```
Throws TypeError if not any above condition met

### .execute()

```javascript
.execute()
```
accept function arguments. It is possible by passing them one by one, but preferred why is to just pass spread `...arguments`.

## License

MIT
