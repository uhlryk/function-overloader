(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("babel-polyfill"), require("debug"));
	else if(typeof define === 'function' && define.amd)
		define(["babel-polyfill", "debug"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("babel-polyfill"), require("debug")) : factory(root["babel-polyfill"], root["debug"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Overload = __webpack_require__(3);

var _Overload2 = _interopRequireDefault(_Overload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Overload2.default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _debug = __webpack_require__(4);

var _debug2 = _interopRequireDefault(_debug);

var _number = __webpack_require__(5);

var _number2 = _interopRequireDefault(_number);

var _string = __webpack_require__(6);

var _string2 = _interopRequireDefault(_string);

var _object = __webpack_require__(7);

var _object2 = _interopRequireDefault(_object);

var _array = __webpack_require__(8);

var _array2 = _interopRequireDefault(_array);

var _boolean = __webpack_require__(9);

var _boolean2 = _interopRequireDefault(_boolean);

var _function = __webpack_require__(10);

var _function2 = _interopRequireDefault(_function);

var _symbol = __webpack_require__(11);

var _symbol2 = _interopRequireDefault(_symbol);

var _undefined = __webpack_require__(12);

var _undefined2 = _interopRequireDefault(_undefined);

var _instance = __webpack_require__(13);

var _instance2 = _interopRequireDefault(_instance);

var _null = __webpack_require__(14);

var _null2 = _interopRequireDefault(_null);

var _any = __webpack_require__(15);

var _any2 = _interopRequireDefault(_any);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function createType(typeCondition) {
    return function (input) {
        return { execute: function execute(arg) {
                return typeCondition(arg, input);
            } };
    };
}

var Overload = function () {
    _createClass(Overload, null, [{
        key: "set",
        value: function set() {
            return new (Function.prototype.bind.apply(Overload, [null].concat(Array.prototype.slice.call(arguments))))();
        }
        /**
        * @param {any} args any arguments which overloaded function get
        */

    }]);

    function Overload() {
        _classCallCheck(this, Overload);

        this._debug = (0, _debug2.default)("overloader");
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


    _createClass(Overload, [{
        key: "when",
        value: function when() {
            var _this = this;

            this._debug("when", Array.from(arguments));
            var conditionResult = checkCondition(arguments, this._args);
            this._debug("result", conditionResult);
            return {
                do: function _do(callback) {
                    _this._debug("do");
                    if (conditionResult && _this._enabled) {
                        _this._debug("execute function");
                        _this._enabled = false;
                        var result = callback.apply(undefined, _toConsumableArray(_this._args));
                        _this._debug("function sync result", result);
                        _this._result = result;
                    }
                    return {
                        when: _this.when,
                        else: _this.else,
                        elseThrow: _this.elseThrow,
                        done: _this.done
                    };
                }
            };
        }
    }, {
        key: "else",
        value: function _else(callback) {
            this._debug("else");
            if (this._enabled) {
                this._debug("execute function");
                this._enabled = false;
                var result = callback.apply(undefined, _toConsumableArray(this._args));
                this._debug("function sync result", result);
                this._result = result;
            }
            return {
                done: this.done
            };
        }
    }, {
        key: "elseThrow",
        value: function elseThrow() {
            this._debug("elseThrow");
            if (this._enabled) {
                this._enabled = false;
                throw TypeError();
            }
            return {
                done: this.done
            };
        }

        /**
        * Should be called at the end. It will return result from called use callback
        * @returns {*}
        */

    }, {
        key: "done",
        value: function done() {
            return this._result;
        }
    }]);

    return Overload;
}();

Overload.NUMBER = createType(_number2.default);
Overload.STRING = createType(_string2.default);
Overload.OBJECT = createType(_object2.default);
Overload.ARRAY = createType(_array2.default);
Overload.BOOLEAN = createType(_boolean2.default);
Overload.FUNCTION = createType(_function2.default);
Overload.SYMBOL = createType(_symbol2.default);
Overload.UNDEFINED = createType(_undefined2.default);
Overload.NULL = createType(_null2.default);
Overload.ANY = createType(_any2.default);
Overload.INSTANCE = createType(_instance2.default);
exports.default = Overload;


function checkCondition(conditionArguments, testedArguments) {
    if (conditionArguments.length === testedArguments.length) {
        return Array.from(conditionArguments).every(function (typeFunction, index) {
            var testedArgument = testedArguments[index];
            return checkTypeCondition(typeFunction, testedArgument);
        });
    }
    return false;
}

function checkTypeCondition(typeFunction, testedArgument) {
    switch (typeof typeFunction === "undefined" ? "undefined" : _typeof(typeFunction)) {
        case "function":
            return typeFunction().execute(testedArgument);
        case "object":
            return typeFunction.execute(testedArgument);
        default:
            throw TypeError("Wrong arguments", typeFunction);
    }
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (arg) {
  return typeof arg === "number" || arg instanceof Number;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (arg) {
  return typeof arg === "string" || arg instanceof String;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = function (arg) {
    return (typeof arg === "undefined" ? "undefined" : _typeof(arg)) === "object" && arg !== null && arg instanceof String === false && arg instanceof Number === false && arg instanceof Boolean === false;
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = function (arg) {
  return (typeof arg === "undefined" ? "undefined" : _typeof(arg)) === "object" && arg instanceof Array;
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (arg) {
  return typeof arg === "boolean" || arg instanceof Boolean;
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (arg) {
  return typeof arg === "function";
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = function (arg) {
  return (typeof arg === "undefined" ? "undefined" : _typeof(arg)) === "symbol";
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (arg) {
  return typeof arg === "undefined";
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (arg, targetClass) {
  return arg instanceof targetClass;
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (arg) {
  return arg === null;
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (arg) {
  return true;
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map