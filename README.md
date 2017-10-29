# FUNCTION OVERLOADER
[![Build Status](https://travis-ci.org/uhlryk/function-overloader.svg)](https://travis-ci.org/uhlryk/function-overloader)
[![Downloads](https://img.shields.io/npm/dt/function-overloader.svg)](https://www.npmjs.com/package/function-overloader)
[![Downloads](https://img.shields.io/npm/dm/function-overloader.svg)](https://www.npmjs.com/package/function-overloader)
[![NPM version](https://img.shields.io/npm/v/function-overloader.svg)](https://www.npmjs.com/package/function-overloader)

Introduce the mechanism for easy overloading functions and method.

## install

```
npm install function-overloader
```

## Introduction

This library/helper is solution for lack of function overloading in javascript. It will not introduce overloading for functions. But it will help handling multiple different arguments.

It will return response from correct `do` block.

### teaser

```javascript
import Overload from "function-overloader";
class Monster {

    constructor() {
        Overload.set(...arguments)
            .when(Overload.STRING, Overload.NUMBER)
            .do((monsterName, level) => {
                this.name = monsterName;
                this.level = level;
            })
            .when(Overload.OBJECT)
            .do(monsterData => {
                this.name = monsterData.name;
                this.level = monsterData.level;
            })
            .done();
        console.log(`Monster ${this.name} level ${this.level} created`);
    }
    
    addAttribute() {
        return Overload.set(...arguments)
            .when(Overload.INSTANCE(Attribute))
            .do(this.addExisitingAttribute)
            .when(Overload.STRING, Overload.FUNCTION)
            .do(this.addNewAttribute)
            .done();
    }
    
    addExisitingAttribute (attribute) {
        this.attributes.push(attribute);
        return attribute;
    }
    
    addNewAttribute (attributeName, attributeLogic) {
        const attribute = new Attribute(attributeName, attributeLogic);
        this.attributes.push(attribute);
        return attribute;
    }
}

```

Now it is possible:

```javascript
    const monster1 = new Monster ("hakuna", 3);
    monster1.addAttribute("happy", () => {});
    const attribute = new Attribute("sad", () => {});
    monster1.addAttribute(attribute);
    
    const monster2 = new Monster ({
        name: "froggy",
        level: 2
    });
```

### motivation

Decrease code complexity of overloaded functions and methods.

Old fashion:

```javascript
function someMethod () {
    if(arguments.length === 2 && typeof arguments[0] === "string" && typeof arguments[1] === "number") {
        //do some stuff when get string and number
    } else if (arguments.length === 1 && typeof arguments[0] === "object" && arguments[0] instanceof SomeCustomConstructor) {
        //do something else if one argument which is instance of SomeCustomConstructor
    } else {
        //do something else
    }
}

```

## usage

import/require this library

```javascript
import Overload from "function-overloader";
```

then:
 
```javascript
function someOverloadedFunction() {
    return Overload.set(...arguments)
        .when(<list of types>)
        .do(someFunctionHandlingFirstCase)
        .when(<list of types>)
        .do(someFunctionHandlingSecondCase)  
        .done();
}
```

## API

### init
```javascript
Overload.set(...arguments)
```
accept function arguments. It is possible by passing them one by one, but preffered why is to just pass spread `...arguments`.
It will return `Condition Response`

Another possibility is to :
```javascript
new Overload(...arguments);
```
And it will also return `Condition Response`

### .when()

```javascript
.when()
```

It is for describe when to run related `do` method.
Return object with `do` method

Accept multiple values that will descibe function.
Possible values:

 * **Overload.ANY** or **Overload.ANY()** for any type
 * **Overload.STRING** or **Overload.STRING()** for string primitive and string object
 * **Overload.ARRAY** or **Overload.ARRAY()** for arrays
 * **Overload.NUMBER** or **Overload.NUMBER()** for number primitive and number object
 * **Overload.OBJECT** or **Overload.OBJECT()** for objects with exception for null and primitive wrappers (primitive objects like Number, String, Boolean) 
 * **Overload.FUNCTION** or **Overload.FUNCTION()** for functions
 * **Overload.BOOLEAN** or **Overload.BOOLEAN()** for boolean primitive and boolean object
 * **Overload.SYMBOL** or **Overload.SYMBOL()** for symbols
 * **Overload.UNDEFINED** or **Overload.UNDEFINED()** for undefined
 * **Overload.NULL** or **Overload.NULL()** for null
 * **Overload.INSTANCE(class)** check if argument instance of `class`
 
if there is no arguments it means that it will resolve only when overloaded function doesn't get any arguments.  

### .else()

```javascript
.else()
```
Accept callback function. Will invoke it when other criteria are not met.

Return object with `done` method.

### .elseThrow()

```javascript
.elseThrow()
```
Throws TypeError if not any above condition met

Return object with `done` method.

### .done()

```javascript
.done()
```
should be called at the end to mark that now we should get chosen function response
 
No arguments. Will return funtion response

### .do()

Is accessible only from object returned from `.when` method

```javascript
.do()
```

Accept callback function which should be called if previous `.when` match arguments.
Will respond with `Condition Response`

## Debugger

For easy debug this library run your script with

```
DEBUG=Overloader <command to run>
```

## License

MIT
