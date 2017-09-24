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


## teaser

```
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

```
    const monster1 = new Monster ("hakuna", 3);
    monster1.addAttribute("happy", () => {});
    const attribute = new Attribute("sad", () => {});
    monster1.addAttribute(attribute);
    
    const monster2 = new Monster ({
        name: "froggy",
        level: 2
    });
```
