/**
 * Class representing helper for methods for simplify overloading
 */
export default class Overload {
    static set() {
        return new Overload(...arguments);
    }
    /**
   * @param {any} args any arguments which overloaded function get
   */
    constructor() {
        this._args = Array.from(arguments);
        this._enabled = true;
        this._result = null;
    }

    /**
   * accept any number of arguments
   * each argument can be :
   *  * string - which check it type of tested argument is equal to this value
   *  * function - which will be called with tested argument and list with all arguments. True means that this is expected argument
   * @returns {{then}|*}
   */
    when() {
        let checkCondition = Array.from(arguments).every((arg, index) => {
            switch (typeof arg) {
                // means that this is expected typeof argument
                case "string":
                    return typeof this._args[index] === arg;
                // means that this is function which positive result means that this is expected argument
                case "function":
                    return this._args[index] instanceof arg;
                default:
                    throw TypeError("Wrong arguments", arg);
            }
        });
        return {
            do: callback => {
                if (checkCondition && this._enabled) {
                    this._enabled = false;
                    this._result = callback(...this._args);
                }
                return this;
            }
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
