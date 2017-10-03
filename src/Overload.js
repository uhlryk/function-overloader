import debug from "debug";

import numberCondition from "./types/number";
import stringCondition from "./types/string";
import objectCondition from "./types/object";
import booleanCondition from "./types/boolean";
import functionCondition from "./types/function";
import symbolCondition from "./types/symbol";
import undefinedCondition from "./types/undefined";
import instanceCondition from "./types/instance";

function createType(typeCondition) {
    return input => ({ execute: arg => typeCondition(arg, input) });
}

export default class Overload {
    static NUMBER = createType(numberCondition);
    static STRING = createType(stringCondition);
    static OBJECT = createType(objectCondition);
    static BOOLEAN = createType(booleanCondition);
    static FUNCTION = createType(functionCondition);
    static SYMBOL = createType(symbolCondition);
    static UNDEFINED = createType(undefinedCondition);
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
        let checkCondition = false;
        if (arguments.length === 0 && this._args.length === 0) {
            checkCondition = true;
        } else if (arguments.length === this._args.length) {
            checkCondition = Array.from(arguments).every((typeFunction, index) => {
                switch (typeof typeFunction) {
                    case "function":
                        return typeFunction().execute(this._args[index]);
                    case "object":
                        return typeFunction.execute(this._args[index]);
                    default:
                        throw TypeError("Wrong arguments", typeFunction);
                }
            });
        }
        this._debug("result", checkCondition);
        return {
            do: callback => {
                this._debug("do");
                if (checkCondition && this._enabled) {
                    this._debug("execute function");
                    this._enabled = false;
                    let result = callback(...this._args);
                    this._debug("function sync result", result);
                    this._result = result;
                }
                return {
                    when: this.when,
                    else: this.else,
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

    /**
   * Should be called at the end. It will return result from called use callback
   * @returns {*}
   */
    done() {
        return this._result;
    }
}
