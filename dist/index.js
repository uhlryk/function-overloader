(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("babel-polyfill"), require("debug"));
	else if(typeof define === 'function' && define.amd)
		define(["babel-polyfill", "debug"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("babel-polyfill"), require("debug")) : factory(root["babel-polyfill"], root["debug"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_5__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createDoneAcion;
function createDoneAcion(_ref) {
    var result = _ref.result,
        debug = _ref.debug;

    debug("call done with result", result);
    return function () {
        return result;
    };
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(3);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Overload = __webpack_require__(4);

var _Overload2 = _interopRequireDefault(_Overload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Overload2.default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _debug = __webpack_require__(5);

var _debug2 = _interopRequireDefault(_debug);

var _checkCondition = __webpack_require__(6);

var _checkCondition2 = _interopRequireDefault(_checkCondition);

var _createElseAction = __webpack_require__(8);

var _createElseAction2 = _interopRequireDefault(_createElseAction);

var _createDoneAction = __webpack_require__(0);

var _createDoneAction2 = _interopRequireDefault(_createDoneAction);

var _createTypeFactory = __webpack_require__(9);

var _createTypeFactory2 = _interopRequireDefault(_createTypeFactory);

var _number = __webpack_require__(10);

var _number2 = _interopRequireDefault(_number);

var _string = __webpack_require__(11);

var _string2 = _interopRequireDefault(_string);

var _object = __webpack_require__(12);

var _object2 = _interopRequireDefault(_object);

var _array = __webpack_require__(13);

var _array2 = _interopRequireDefault(_array);

var _boolean = __webpack_require__(14);

var _boolean2 = _interopRequireDefault(_boolean);

var _function = __webpack_require__(15);

var _function2 = _interopRequireDefault(_function);

var _symbol = __webpack_require__(16);

var _symbol2 = _interopRequireDefault(_symbol);

var _undefined = __webpack_require__(17);

var _undefined2 = _interopRequireDefault(_undefined);

var _instance = __webpack_require__(18);

var _instance2 = _interopRequireDefault(_instance);

var _null = __webpack_require__(19);

var _null2 = _interopRequireDefault(_null);

var _any = __webpack_require__(20);

var _any2 = _interopRequireDefault(_any);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
        this.elseThrow = this.elseThrow.bind(this);
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
            var conditionResult = (0, _checkCondition2.default)(arguments, this._args);
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
                        else: (0, _createElseAction2.default)({
                            testedArguments: _this._args,
                            isEnabled: _this._enabled,
                            result: _this._result,
                            debug: _this._debug
                        }),
                        elseThrow: _this.elseThrow,
                        done: (0, _createDoneAction2.default)({ result: _this._result, debug: _this._debug })
                    };
                }
            };
        }
    }, {
        key: "elseThrow",
        value: function elseThrow() {
            this._debug("elseThrow");
            if (this._enabled) {
                this._enabled = false;
                throw TypeError("Wrong parameters", this._args);
            }
            return {
                done: (0, _createDoneAction2.default)({ result: this._result, debug: this._debug })
            };
        }
    }]);

    return Overload;
}();

Overload.NUMBER = (0, _createTypeFactory2.default)(_number2.default);
Overload.STRING = (0, _createTypeFactory2.default)(_string2.default);
Overload.OBJECT = (0, _createTypeFactory2.default)(_object2.default);
Overload.ARRAY = (0, _createTypeFactory2.default)(_array2.default);
Overload.BOOLEAN = (0, _createTypeFactory2.default)(_boolean2.default);
Overload.FUNCTION = (0, _createTypeFactory2.default)(_function2.default);
Overload.SYMBOL = (0, _createTypeFactory2.default)(_symbol2.default);
Overload.UNDEFINED = (0, _createTypeFactory2.default)(_undefined2.default);
Overload.NULL = (0, _createTypeFactory2.default)(_null2.default);
Overload.ANY = (0, _createTypeFactory2.default)(_any2.default);
Overload.INSTANCE = (0, _createTypeFactory2.default)(_instance2.default);
exports.default = Overload;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = checkCondition;

var _checkTypeCondition = __webpack_require__(7);

var _checkTypeCondition2 = _interopRequireDefault(_checkTypeCondition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function checkCondition(conditionArguments, testedArguments) {
    if (conditionArguments.length === testedArguments.length) {
        return Array.from(conditionArguments).every(function (conditionArgument, index) {
            var testedArgument = testedArguments[index];
            return (0, _checkTypeCondition2.default)(conditionArgument, testedArgument, index, conditionArguments, testedArguments);
        });
    }
    return false;
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = checkTypeCondition;
function checkTypeCondition(conditionArgument, testedArgument, index, conditionArguments, testedArguments) {
    return [functionConditionArgument, objectConditionArgument, elseConditionArgument].map(function (conditionArgumentFactory) {
        return conditionArgumentFactory(conditionArgument, testedArgument, index, conditionArguments, testedArguments);
    }).find(function (conditionArgumentObject) {
        return conditionArgumentObject.test();
    }).execute();
}

function functionConditionArgument(conditionArgument, testedArgument, index, conditionArguments, testedArguments) {
    return {
        execute: function execute() {
            return conditionArgument().execute(testedArgument, index, conditionArguments, testedArguments);
        },
        test: function test() {
            return typeof conditionArgument === "function";
        }
    };
}

function objectConditionArgument(conditionArgument, testedArgument, index, conditionArguments, testedArguments) {
    return {
        execute: function execute() {
            return conditionArgument.execute(testedArgument, index, conditionArguments, testedArguments);
        },
        test: function test() {
            return (typeof conditionArgument === "undefined" ? "undefined" : _typeof(conditionArgument)) === "object";
        }
    };
}

function elseConditionArgument(conditionArgument) {
    return {
        execute: function execute() {
            throw TypeError("Wrong arguments", conditionArgument);
        },
        test: function test() {
            return true;
        }
    };
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createElseAcion;

var _createDoneAction = __webpack_require__(0);

var _createDoneAction2 = _interopRequireDefault(_createDoneAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function createElseAcion(_ref) {
    var testedArguments = _ref.testedArguments,
        result = _ref.result,
        isEnabled = _ref.isEnabled,
        debug = _ref.debug;

    return function (callback) {
        debug("call else");
        if (isEnabled) {
            debug("execute function");
            isEnabled = false;
            var _result = callback.apply(undefined, _toConsumableArray(testedArguments));
            debug("function sync result", _result);
        }
        return {
            done: (0, _createDoneAction2.default)({ result: result, debug: debug })
        };
    };
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createType;
function createType(typeCondition) {
    return function (typeInput) {
        return {
            execute: function execute(testedArgument, index, conditionArguments, testedArguments) {
                return typeCondition(testedArgument, typeInput, index, conditionArguments, testedArguments);
            }
        };
    };
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (arg) {
  return typeof arg === "number" || arg instanceof Number;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (arg) {
  return typeof arg === "string" || arg instanceof String;
};

/***/ }),
/* 12 */
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
/* 13 */
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (arg) {
  return typeof arg === "boolean" || arg instanceof Boolean;
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (arg) {
  return typeof arg === "function";
};

/***/ }),
/* 16 */
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (arg) {
  return typeof arg === "undefined";
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (arg, targetClass) {
  return arg instanceof targetClass;
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (arg) {
  return arg === null;
};

/***/ }),
/* 20 */
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