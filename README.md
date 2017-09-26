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
            .when("string", "number")
            .do((monsterName, level) => {
                this.name = monsterName;
                this.level = level;
            })
            .when("object")
            .do(monsterData => {
                this.name = monsterData.name;
                this.level = monsterData.level;
            })
            .when()
            .do(() => {
                throw Error("Wrong attributes);
            })
            .done();
        console.log(`Monster ${this.name}` level ${this.level} created`);
    }
    
    addAttribute() {
        return Overload.set(...arguments)
            .when(Attribute)
            .do(this.addExisitingAttribute)
            .when("string", "function")
            .do(this.addNewAttribute)
            .when()
            .do(() => {
                throw Error("Wrong attributes);
            })
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
        .when("sometypeA1", "sometypeA2")
        .do(someFunctionHandlingFirstCase)
        .when("sometypeB1", "sometypeB2")
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
And it will also return `Condition Object`

### Condition Response

It has methods:

```javascript
.when()
```

Which accept description of arguments and return `Function Response`

```javascript
.done()
```
should be called at the end to mark that now we should get chosen function response
 
No arguments. Will return funtion response

### Function Respons

Has one method 
```javascript
.do()
```

Accept function which should be called if previous `.when` match arguments.
Will respond with `Condition Object`

## License

MIT
