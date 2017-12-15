import debug from "debug";
import checkCondition from "./checkCondition/checkCondition";
import createElseAction from "./actions/createElseAction";
import createDoneAction from "./actions/createDoneAction";
import createTypeFactory from "./createTypeFactory";

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

export default class Overload {
    static NUMBER = createTypeFactory(numberCondition);
    static STRING = createTypeFactory(stringCondition);
    static OBJECT = createTypeFactory(objectCondition);
    static ARRAY = createTypeFactory(arrayCondition);
    static BOOLEAN = createTypeFactory(booleanCondition);
    static FUNCTION = createTypeFactory(functionCondition);
    static SYMBOL = createTypeFactory(symbolCondition);
    static UNDEFINED = createTypeFactory(undefinedCondition);
    static NULL = createTypeFactory(nullCondition);
    static ANY = createTypeFactory(anyCondition);
    static INSTANCE = createTypeFactory(instanceCondition);

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
        this.elseThrow = this.elseThrow.bind(this);
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
                    else: createElseAction({
                        testedArguments: this._args,
                        isEnabled: this._enabled,
                        result: this._result,
                        debug: this._debug
                    }),
                    elseThrow: this.elseThrow,
                    done: createDoneAction({ result: this._result, debug: this._debug })
                };
            }
        };
    }

    elseThrow() {
        this._debug("elseThrow");
        if (this._enabled) {
            this._enabled = false;
            throw TypeError("Wrong parameters", this._args);
        }
        return {
            done: createDoneAction({ result: this._result, debug: this._debug })
        };
    }
}
