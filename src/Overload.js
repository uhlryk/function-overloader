import debug from "debug";

import numberCondition from "./types/number";
import stringCondition from "./types/string";
import objectCondition from "./types/object";
import arrayCondition from "./types/array";
import booleanCondition from "./types/boolean";
import functionCondition from "./types/function";
import symbolCondition from "./types/symbol";
import undefinedCondition from "./types/undefined";
import instanceCondition from "./types/instance";
import nullCondition from "./types/null";
import anyCondition from "./types/any";

function createType(typeCondition) {
    return input => ({ execute: arg => typeCondition(arg, input) });
}

export default class Overload {
    static NUMBER = createType(numberCondition);
    static STRING = createType(stringCondition);
    static OBJECT = createType(objectCondition);
    static ARRAY = createType(arrayCondition);
    static BOOLEAN = createType(booleanCondition);
    static FUNCTION = createType(functionCondition);
    static SYMBOL = createType(symbolCondition);
    static UNDEFINED = createType(undefinedCondition);
    static NULL = createType(nullCondition);
    static ANY = createType(anyCondition);
    static INSTANCE = createType(instanceCondition);

    static set() {
        return new Overload(...arguments);
    }
    /**
   * @param {any} args any arguments which overloaded function get
   */
    constructor() {
        this._debug = debug("overloader");
        this._args = Array.from(arguments);
        this._debug("constructor get arguments ", this._args);
        this._enabled = true;
        this._result = null;

        this.when = this.when.bind(this);
        this.else = this.else.bind(this);
        this.elseThrow = this.elseThrow.bind(this);
        this.done = this.done.bind(this);
    }

    /**
   * accept any number of arguments
   * each argument can be :
   *  * string - which check it type of tested argument is equal to this value
   *  * function - which will be called with tested argument and list with all arguments. True means that this is expected argument
   * @returns {{then}|*}
   */
    when() {
        this._debug("when", Array.from(arguments));
        let conditionResult = checkCondition(arguments, this._args);
        this._debug("result", conditionResult);
        return {
            do: callback => {
                this._debug("do");
                if (conditionResult && this._enabled) {
                    this._debug("execute function");
                    this._enabled = false;
                    let result = callback(...this._args);
                    this._debug("function sync result", result);
                    this._result = result;
                }
                return {
                    when: this.when,
                    else: this.else,
                    elseThrow: this.elseThrow,
                    done: this.done
                };
            }
        };
    }

    else(callback) {
        this._debug("else");
        if (this._enabled) {
            this._debug("execute function");
            this._enabled = false;
            let result = callback(...this._args);
            this._debug("function sync result", result);
            this._result = result;
        }
        return {
            done: this.done
        };
    }

    elseThrow() {
        this._debug("elseThrow");
        if (this._enabled) {
            this._enabled = false;
            throw TypeError("Wrong parameters", this._args);
        }
        return {
            done: this.done
        };
    }

    /**
   * Should be called at the end. It will return result from called use callback
   * @returns {*}
   */
    done() {
        return this._result;
    }
}

function checkCondition(conditionArguments, testedArguments) {
    if (conditionArguments.length === testedArguments.length) {
        return Array.from(conditionArguments).every((typeFunction, index) => {
            const testedArgument = testedArguments[index];
            return checkTypeCondition(typeFunction, testedArgument);
        });
    }
    return false;
}

function checkTypeCondition(typeFunction, testedArgument) {
    switch (typeof typeFunction) {
        case "function":
            return typeFunction().execute(testedArgument);
        case "object":
            return typeFunction.execute(testedArgument);
        default:
            throw TypeError("Wrong arguments", typeFunction);
    }
}
