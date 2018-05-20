(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("check-complex-types"));
	else if(typeof define === 'function' && define.amd)
		define(["check-complex-types"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("check-complex-types")) : factory(root["check-complex-types"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_8__) {
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
exports.default = createExecuteAction;

var _checkCondition = __webpack_require__(6);

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

module.exports = __webpack_require__(2);


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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createWhenAction = __webpack_require__(4);

var _createWhenAction2 = _interopRequireDefault(_createWhenAction);

var _checkComplexTypes = __webpack_require__(8);

var _checkComplexTypes2 = _interopRequireDefault(_checkComplexTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _extends({}, _checkComplexTypes2.default, {
    when: function when() {
        var actions = [];
        var whenAction = (0, _createWhenAction2.default)(actions);
        return whenAction.apply(undefined, arguments);
    }
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createWhenAction;

var _createElseAction = __webpack_require__(5);

var _createElseAction2 = _interopRequireDefault(_createElseAction);

var _createElseThrowAction = __webpack_require__(7);

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
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = checkCondition;
function checkCondition(conditionArguments, testedArguments) {
    if (conditionArguments.length === testedArguments.length) {
        return conditionArguments.every(function (conditionArgument, index) {
            var testedArgument = testedArguments[index];
            return conditionArgument.test(testedArgument);
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
/* 8 */
/***/ (function(module, exports) {

module.exports = require("check-complex-types");

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map