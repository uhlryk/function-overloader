(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createExecuteAction;

var _checkCondition = __webpack_require__(7);

var _checkCondition2 = _interopRequireDefault(_checkCondition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createExecuteAction(actions) {
    return function () {
        for (var _len = arguments.length, testedArguments = Array(_len), _key = 0; _key < _len; _key++) {
            testedArguments[_key] = arguments[_key];
        }

        var chosenCondition = actions.filter(function (condition) {
            return condition.conditionArguments;
        }).find(function (condition) {
            return (0, _checkCondition2.default)(condition.conditionArguments, testedArguments);
        });
        if (!chosenCondition) {
            chosenCondition = actions.find(function (condition) {
                return !condition.conditionArguments;
            });
        }
        if (chosenCondition) {
            var _chosenCondition;

            return (_chosenCondition = chosenCondition).callback.apply(_chosenCondition, testedArguments);
        }
        return null;
    };
}

/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


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

var _createWhenAction = __webpack_require__(5);

var _createWhenAction2 = _interopRequireDefault(_createWhenAction);

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

var _interface = __webpack_require__(19);

var _interface2 = _interopRequireDefault(_interface);

var _null = __webpack_require__(21);

var _null2 = _interopRequireDefault(_null);

var _any = __webpack_require__(22);

var _any2 = _interopRequireDefault(_any);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Overload = function () {
    function Overload() {
        _classCallCheck(this, Overload);
    }

    _createClass(Overload, null, [{
        key: "when",
        value: function when() {
            var actions = [];
            var whenAction = (0, _createWhenAction2.default)(actions);
            return whenAction.apply(undefined, arguments);
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
Overload.INTERFACE = (0, _createTypeFactory2.default)(_interface2.default);
exports.default = Overload;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createWhenAction;

var _createElseAction = __webpack_require__(6);

var _createElseAction2 = _interopRequireDefault(_createElseAction);

var _createElseThrowAction = __webpack_require__(8);

var _createElseThrowAction2 = _interopRequireDefault(_createElseThrowAction);

var _createExecuteAction = __webpack_require__(0);

var _createExecuteAction2 = _interopRequireDefault(_createExecuteAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createWhenAction(actions) {
    var newActions = actions.slice();
    return function () {
        for (var _len = arguments.length, conditionArguments = Array(_len), _key = 0; _key < _len; _key++) {
            conditionArguments[_key] = arguments[_key];
        }

        return {
            do: function _do(callback) {
                newActions.push({
                    conditionArguments: conditionArguments,
                    callback: callback
                });
                return {
                    when: createWhenAction(newActions),
                    else: (0, _createElseAction2.default)(newActions),
                    elseThrow: (0, _createElseThrowAction2.default)(newActions),
                    execute: (0, _createExecuteAction2.default)(newActions)
                };
            }
        };
    };
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createElseAction;

var _createExecuteAction = __webpack_require__(0);

var _createExecuteAction2 = _interopRequireDefault(_createExecuteAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createElseAction(actions) {
    var newActions = actions.slice();
    return function (callback) {
        newActions.push({
            callback: callback
        });
        return {
            execute: (0, _createExecuteAction2.default)(newActions)
        };
    };
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = checkCondition;

var _checkTypeCondition = __webpack_require__(1);

var _checkTypeCondition2 = _interopRequireDefault(_checkTypeCondition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function checkCondition(conditionArguments, testedArguments) {
    if (conditionArguments.length === testedArguments.length) {
        return conditionArguments.every(function (conditionArgument, index) {
            var testedArgument = testedArguments[index];
            return (0, _checkTypeCondition2.default)(conditionArgument, testedArgument, index, conditionArguments, testedArguments);
        });
    }
    return false;
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createElseThrowAction;

var _createExecuteAction = __webpack_require__(0);

var _createExecuteAction2 = _interopRequireDefault(_createExecuteAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createElseThrowAction(actions) {
    var newActions = actions.slice();
    return function () {
        newActions.push({
            callback: function callback() {
                for (var _len = arguments.length, testedArguments = Array(_len), _key = 0; _key < _len; _key++) {
                    testedArguments[_key] = arguments[_key];
                }

                throw TypeError("Wrong parameters", testedArguments);
            }
        });
        return {
            execute: (0, _createExecuteAction2.default)(newActions)
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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _checkSingleCondition = __webpack_require__(20);

var _checkSingleCondition2 = _interopRequireDefault(_checkSingleCondition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arg) {
    var targetInterface = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return (typeof arg === "undefined" ? "undefined" : _typeof(arg)) === "object" && Object.keys(targetInterface).every(function (key) {
        return (0, _checkSingleCondition2.default)(targetInterface[key], arg[key]);
    });
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = checkSingleCondition;

var _checkTypeCondition = __webpack_require__(1);

var _checkTypeCondition2 = _interopRequireDefault(_checkTypeCondition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function checkSingleCondition(conditionArgument, testedArgument) {
    return (0, _checkTypeCondition2.default)(conditionArgument, testedArgument, 1, [conditionArgument], [testedArgument]);
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (arg) {
  return arg === null;
};

/***/ }),
/* 22 */
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