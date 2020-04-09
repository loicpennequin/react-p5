'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var p5 = _interopDefault(require('p5'));

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var PropTypes_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// array function should not be used here so that we can the local this
var addPropTypeDocumentationField = function addPropTypeDocumentationField(fieldName) {
  return function addFieldToReactDesc(value) {
    if (!this.reactDesc) {
      this.reactDesc = {};
    }
    this.reactDesc[fieldName] = value;
    return this;
  };
};

var documentedPropType = {
  defaultValue: addPropTypeDocumentationField('defaultValue'),
  description: addPropTypeDocumentationField('description'),
  deprecated: addPropTypeDocumentationField('deprecated'),
  format: addPropTypeDocumentationField('format')
};

var createPropType = function createPropType(type) {
  var propTypeObj = _extends({
    type: type
  }, documentedPropType);
  Object.defineProperty(propTypeObj, 'isRequired', {
    get: function getRequired() {
      if (!this.reactDesc) {
        this.reactDesc = {};
      }
      this.reactDesc.required = true;
      return this;
    },
    enumerable: true,
    configurable: true
  });
  return propTypeObj;
};

var createPropTypeWithArgs = function createPropTypeWithArgs(type) {
  return function (args) {
    var propTypeObj = _extends({
      args: args,
      type: type
    }, documentedPropType);
    Object.defineProperty(propTypeObj, 'isRequired', {
      get: function getRequired() {
        if (!this.reactDesc) {
          this.reactDesc = {};
        }
        this.reactDesc.required = true;
        return this;
      },
      enumerable: true,
      configurable: true
    });
    return propTypeObj;
  };
};

var PropTypes = {
  custom: function custom(callback) {
    var target = callback.bind(null);
    target.type = 'func';
    Object.keys(documentedPropType).forEach(function (fieldName) {
      target[fieldName] = documentedPropType[fieldName];
    });
    return target;
  }
};

function definePropType(type) {
  Object.defineProperty(PropTypes, type, {
    get: function getPropType() {
      return createPropType(type);
    },
    enumerable: true,
    configurable: true
  });
}

function definePropTypeWithArgs(type) {
  Object.defineProperty(PropTypes, type, {
    get: function getPropType() {
      return createPropTypeWithArgs(type);
    },
    enumerable: true,
    configurable: true
  });
}

definePropType('any');
definePropType('array');
definePropType('bool');
definePropType('element');
definePropType('func');
definePropType('node');
definePropType('number');
definePropType('object');
definePropType('symbol');
definePropType('string');

definePropTypeWithArgs('arrayOf');
definePropTypeWithArgs('instanceOf');
definePropTypeWithArgs('objectOf');
definePropTypeWithArgs('oneOfType');
definePropTypeWithArgs('oneOf');
definePropTypeWithArgs('shape');

exports.default = PropTypes;
});

unwrapExports(PropTypes_1);

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});
var reactIs_development_1 = reactIs_development.AsyncMode;
var reactIs_development_2 = reactIs_development.ConcurrentMode;
var reactIs_development_3 = reactIs_development.ContextConsumer;
var reactIs_development_4 = reactIs_development.ContextProvider;
var reactIs_development_5 = reactIs_development.Element;
var reactIs_development_6 = reactIs_development.ForwardRef;
var reactIs_development_7 = reactIs_development.Fragment;
var reactIs_development_8 = reactIs_development.Lazy;
var reactIs_development_9 = reactIs_development.Memo;
var reactIs_development_10 = reactIs_development.Portal;
var reactIs_development_11 = reactIs_development.Profiler;
var reactIs_development_12 = reactIs_development.StrictMode;
var reactIs_development_13 = reactIs_development.Suspense;
var reactIs_development_14 = reactIs_development.isAsyncMode;
var reactIs_development_15 = reactIs_development.isConcurrentMode;
var reactIs_development_16 = reactIs_development.isContextConsumer;
var reactIs_development_17 = reactIs_development.isContextProvider;
var reactIs_development_18 = reactIs_development.isElement;
var reactIs_development_19 = reactIs_development.isForwardRef;
var reactIs_development_20 = reactIs_development.isFragment;
var reactIs_development_21 = reactIs_development.isLazy;
var reactIs_development_22 = reactIs_development.isMemo;
var reactIs_development_23 = reactIs_development.isPortal;
var reactIs_development_24 = reactIs_development.isProfiler;
var reactIs_development_25 = reactIs_development.isStrictMode;
var reactIs_development_26 = reactIs_development.isSuspense;
var reactIs_development_27 = reactIs_development.isValidElementType;
var reactIs_development_28 = reactIs_development.typeOf;

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

var descToJSON_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = descToJSON;

var arrayFormat = function arrayFormat(array, prefix) {
  return array.map(function (propType) {
    return propTypeFormat(propType, prefix);
  });
};

var shapeFormat = function shapeFormat(shape, prefix) {
  var props = Object.keys(shape).map(function (key) {
    var value = shape[key];
    var valueFormat = void 0;
    if (value.type && (value.type === 'arrayOf' || value.type === 'oneOfType' || value.type === 'oneOf') && Array.isArray(value.args)) {
      valueFormat = '\n' + propTypeFormat(value, prefix + '    ');
    } else if (value.type === 'shape') {
      valueFormat = '\n' + propTypeFormat(value, prefix + '    ');
    } else {
      valueFormat = propTypeFormat(value);
    }
    return prefix + '  ' + key + ': ' + valueFormat;
  });
  return prefix + '{\n' + props.join(',\n') + '\n' + prefix + '}';
};

var propTypeFormat = function propTypeFormat(propType) {
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var result = void 0;
  if (propType.type) {
    switch (propType.type) {
      case 'arrayOf':
        if (Array.isArray(propType.args)) {
          result = prefix + '[\n' + arrayFormat(propType.args, prefix + '  ').join('\n') + '\n' + prefix + ']';
        } else if (propType.args.type === 'oneOfType') {
          result = prefix + '[\n' + propTypeFormat(propType.args, prefix + '  ') + '\n' + prefix + ']';
        } else {
          result = prefix + '[' + propTypeFormat(propType.args) + ']';
        }
        break;
      case 'bool':
        result = prefix + 'boolean';
        break;
      case 'func':
        result = prefix + 'function';
        break;
      case 'instanceOf':
        result = prefix + 'new ' + propType.args.name + '(...)';
        break;
      case 'objectOf':
        result = prefix + '{ test: ' + propType.args.type + ', ... }';
        break;
      case 'oneOf':
        result = propType.args.map(function (a) {
          return '' + prefix + a;
        }).join('\n');
        break;
      case 'oneOfType':
        if (Array.isArray(propType.args)) {
          result = arrayFormat(propType.args, prefix).join('\n');
        } else {
          result = '' + prefix + propTypeFormat(propType.args);
        }
        break;
      case 'shape':
        result = '' + shapeFormat(propType.args, prefix);
        break;
      default:
        result = '' + prefix + propType.type;
        break;
    }
  } else {
    result = prefix + 'custom';
  }
  return result;
};

var propTypeAsJson = function propTypeAsJson(propType, propName, defaultValue) {
  var documentation = _extends({}, propType.reactDesc, {
    name: propName
  });

  if (defaultValue) {
    documentation.defaultValue = defaultValue;
  }

  documentation.format = documentation.format || propTypeFormat(propType);

  return documentation;
};

function descToJSON(component) {
  var reactDesc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!component) {
    throw new Error('react-desc: component is required');
  }

  var documentation = _extends({
    name: component.displayName || component.name
  }, reactDesc);
  if (reactDesc) {
    delete documentation.propTypes;

    if (reactDesc.propTypes) {
      var propTypes = [];
      Object.keys(reactDesc.propTypes).forEach(function (propName) {
        var propType = reactDesc.propTypes[propName];
        propTypes.push(propTypeAsJson(propType, propName, (component.defaultProps || {})[propName]));
      });
      if (propTypes.length > 0) {
        documentation.properties = propTypes;
      }
    }
  }
  return documentation;
}
});

unwrapExports(descToJSON_1);

var descToMarkdown_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = descToMarkdown;



var _descToJSON2 = _interopRequireDefault(descToJSON_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var code = '```';

function parseAvailableAt(_ref) {
  var badge = _ref.badge,
      url = _ref.url;

  return '[![](' + badge + ')](' + url + ')';
}

function getAvailableAt(_ref2) {
  var availableAt = _ref2.availableAt;

  if (!availableAt) {
    return '';
  }
  var availableAtStr = void 0;
  if (Array.isArray(availableAt)) {
    availableAtStr = availableAt.map(function (currentAvailable) {
      return parseAvailableAt(currentAvailable);
    }).join(' ');
  } else {
    availableAtStr = parseAvailableAt(availableAt);
  }
  return '\n' + availableAtStr;
}

function getHeader(_ref3) {
  var description = _ref3.description,
      details = _ref3.details,
      deprecated = _ref3.deprecated,
      name = _ref3.name;

  return '## ' + (deprecated ? '~~' + name + '~~' : name) + (deprecated ? ' (' + deprecated + ')' : '') + '\n' + description + (details ? '\n\n' + details : '') + '\n';
}

function getUsage(_ref4) {
  var usage = _ref4.usage;

  return usage ? '\n## Usage\n\n' + code + 'javascript\n' + usage + '\n' + code : '';
}

function getDefaultValue(defaultValue) {
  var defaultValueString = (typeof defaultValue === 'undefined' ? 'undefined' : _typeof(defaultValue)) === 'object' ? JSON.stringify(defaultValue, undefined, 2) : defaultValue;

  return ' Defaults to `' + defaultValueString + '`.';
}

function getProperties(_ref5) {
  var _ref5$properties = _ref5.properties,
      properties = _ref5$properties === undefined ? [] : _ref5$properties;

  var props = properties.map(function (_ref6) {
    var defaultValue = _ref6.defaultValue,
        deprecated = _ref6.deprecated,
        description = _ref6.description,
        format = _ref6.format,
        name = _ref6.name,
        required = _ref6.required;
    return '\n' + (deprecated ? '**~~' + name + '~~**' : '**' + name + '**') + (deprecated ? ' (' + deprecated + ')' : '') + '\n\n' + (required ? 'Required. ' : '') + description + (defaultValue ? getDefaultValue(defaultValue) : '') + '\n\n' + code + '\n' + format + '\n' + code;
  });
  return '\n\n## Properties\n' + props.join('\n') + '\n  ';
}

function getIntrinsicElement(_ref7) {
  var intrinsicElement = _ref7.intrinsicElement;

  return intrinsicElement ? '\n## Intrinsic element\n\n' + code + '\n' + intrinsicElement + '\n' + code : '';
}

function descToMarkdown(component, reactDesc) {
  if (!component) {
    throw new Error('react-desc: component is required');
  }

  var documentation = (0, _descToJSON2.default)(component, reactDesc);
  var availableAt = getAvailableAt(documentation);
  var header = getHeader(documentation);
  var usage = getUsage(documentation);
  var properties = getProperties(documentation);
  var intrinsicElement = getIntrinsicElement(documentation);
  return '' + header + availableAt + usage + properties + intrinsicElement;
}
});

unwrapExports(descToMarkdown_1);

var descToTypescript_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = descToTypescript;

var arrayFormat = function arrayFormat(array) {
  return array.map(function (propType) {
    return propTypeFormat(propType);
  });
};

var shapeFormat = function shapeFormat(shape) {
  var props = Object.keys(shape).map(function (key) {
    var value = shape[key];
    var valueFormat = void 0;
    if (value.type && (value.type === 'arrayOf' || value.type === 'oneOfType' || value.type === 'oneOf') && Array.isArray(value.args)) {
      valueFormat = '' + propTypeFormat(value);
    } else if (value.type === 'shape') {
      valueFormat = '' + propTypeFormat(value);
    } else {
      valueFormat = propTypeFormat(value);
    }
    return '' + key + (value.reactDesc && value.reactDesc.required ? '' : '?') + ': ' + valueFormat;
  });
  return '{' + props.join(',') + '}';
};

var propTypeFormat = function propTypeFormat(propType, joinWith) {
  var result = void 0;
  if (Array.isArray(propType)) {
    result = arrayFormat(propType).join(joinWith);
  } else if (typeof propType !== 'function' && propType.type) {
    switch (propType.type) {
      case 'array':
        result = 'any[]';
        break;
      case 'arrayOf':
        if (propType.args.type === 'oneOfType') {
          result = '(' + propTypeFormat(propType.args, ' | ') + ')[]';
        } else {
          result = propTypeFormat(propType.args, '\n') + '[]';
        }
        break;
      case 'bool':
        result = 'boolean';
        break;
      case 'func':
        result = '((...args: any[]) => any)';
        break;
      case 'node':
        result = 'React.ReactNode';
        break;
      case 'element':
        result = 'JSX.Element';
        break;
      case 'instanceOf':
        result = 'any';
        break;
      case 'symbol':
        result = 'any';
        break;
      case 'objectOf':
        result = '{ [key: string]: ' + propTypeFormat(propType.args) + ' }';
        break;
      case 'oneOf':
        result = propType.args.map(function (a) {
          return '"' + a + '"';
        }).join(' | ');
        break;
      case 'oneOfType':
        result = '' + propTypeFormat(propType.args, ' | ');
        break;
      case 'shape':
        result = '' + shapeFormat(propType.args);
        break;
      default:
        result = '' + propType.type;
        break;
    }
  } else {
    result = 'any';
  }
  return result;
};

var propTypeAsTypescript = function propTypeAsTypescript(propType, propName) {
  var documentation = _extends({}, propType.reactDesc, {
    name: propName
  });

  documentation.format = propTypeFormat(propType);

  return documentation;
};

function descToTypescript(component) {
  var reactDesc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!component) {
    throw new Error('react-desc: component is required');
  }

  var documentation = _extends({
    name: component.displayName || component.name
  }, reactDesc);
  if (reactDesc) {
    delete documentation.propTypes;

    if (reactDesc.propTypes) {
      var propTypes = [];
      Object.keys(reactDesc.propTypes).forEach(function (propName) {
        var propType = reactDesc.propTypes[propName];
        propTypes.push(propTypeAsTypescript(propType, propName));
      });
      if (propTypes.length > 0) {
        documentation.properties = propTypes;
      }
    }
  }
  return documentation;
}
});

unwrapExports(descToTypescript_1);

var describe_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = describe;



var _propTypes2 = _interopRequireDefault(propTypes);



var _descToJSON2 = _interopRequireDefault(descToJSON_1);



var _descToMarkdown2 = _interopRequireDefault(descToMarkdown_1);



var _descToTypescript2 = _interopRequireDefault(descToTypescript_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var convertArray = function convertArray(array) {
  return array.map(function (type) {
    return convertPropType(type);
  });
};

var convertShape = function convertShape(shape) {
  var result = {};
  Object.keys(shape).forEach(function (key) {
    result[key] = convertPropType(shape[key]);
  });
  return result;
};

var convertPropType = function convertPropType(propType) {
  var result = void 0;
  if (propType && propType.type) {
    if (!_propTypes2.default[propType.type]) {
      throw new Error('react-desc: unknown type ' + propType.type);
    }
    if (propType.args) {
      if (propType.type === 'oneOfType' || propType.type === 'arrayOf') {
        if (Array.isArray(propType.args)) {
          result = _propTypes2.default[propType.type](convertArray(propType.args));
        } else {
          result = _propTypes2.default[propType.type](convertPropType(propType.args));
        }
      } else if (propType.type === 'shape') {
        result = _propTypes2.default[propType.type](convertShape(propType.args));
      } else {
        result = _propTypes2.default[propType.type](propType.args);
      }
    } else {
      result = _propTypes2.default[propType.type];
    }
  } else {
    result = propType;
  }
  return result;
};

function describe(ComponentInstance) {
  if (!ComponentInstance) {
    throw new Error('react-desc: component is required');
  }

  var documentation = {
    propTypes: {}
  };

  var DocumentedComponent = ComponentInstance;

  var addDocumentationProp = function addDocumentationProp(propName) {
    return function (value) {
      documentation[propName] = value;
      return DocumentedComponent;
    };
  };

  DocumentedComponent.availableAt = addDocumentationProp('availableAt');
  DocumentedComponent.description = addDocumentationProp('description');
  DocumentedComponent.details = addDocumentationProp('details');
  DocumentedComponent.deprecated = addDocumentationProp('deprecated');
  DocumentedComponent.usage = addDocumentationProp('usage');
  DocumentedComponent.intrinsicElement = addDocumentationProp('intrinsicElement');

  DocumentedComponent.toJSON = _descToJSON2.default.bind(null, ComponentInstance, documentation);
  DocumentedComponent.toTypescript = _descToTypescript2.default.bind(null, ComponentInstance, documentation);
  DocumentedComponent.toMarkdown = _descToMarkdown2.default.bind(null, ComponentInstance, documentation);

  Object.defineProperty(DocumentedComponent, 'propTypes', {
    get: function get() {
      return DocumentedComponent.propTypesValue;
    },
    set: function set(value) {
      if (!DocumentedComponent.propTypesValue) {
        DocumentedComponent.propTypesValue = {};
      }
      Object.keys(value).forEach(function (name) {
        var propType = value[name];
        if (propType.type) {
          documentation.propTypes[name] = propType;
          propType = convertPropType(propType);
          if (value[name].reactDesc.required) {
            propType = propType.isRequired;
          }
        }
        DocumentedComponent.propTypesValue[name] = propType;
        return propType;
      });
    },
    enumerable: true,
    configurable: true
  });

  return DocumentedComponent;
}
});

unwrapExports(describe_1);

var lib = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});



var _PropTypes2 = _interopRequireDefault(PropTypes_1);



var _describe2 = _interopRequireDefault(describe_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.PropTypes = _PropTypes2.default;
exports.describe = _describe2.default;

exports.default = {
  describe: _describe2.default,
  PropTypes: _PropTypes2.default
};
});

unwrapExports(lib);
var lib_1 = lib.PropTypes;
var lib_2 = lib.describe;

function CommandComponent(_ref) {
  var command = _ref.command,
      p = _ref.p;
  var renderContext = React.useContext(P5RenderContext);
  var commandIndex = React.useRef(null);
  React.useEffect(function () {
    var clear = renderContext.defineCommand(command, function () {
      return p || renderContext.p5Instance;
    }, commandIndex.current);
    return function () {
      commandIndex.current = clear();
    };
  }, [command, p, renderContext]);
  return null;
}

CommandComponent.displayName = 'Command';
var Command = lib_2(CommandComponent).description("The most low-level P5-react component to interact with your sketch. Under the hood, almost every P5-react component uses it\n\nIt gets passed a command as a prop, which is a function recieving the p5 instance as an argument, and will get executed during setup or draw depending on where the component is placed.\nBasically, your Sketch will be a queue of `Command />` component that will get executed in the same order on each draw cycle.\n\nThe command prop may be updated at any time, and the result will appear on your sketch accordingly. The new command will take place at the same position in the commands queue, instead of being pushed at the end.");
Command.propTypes = {
  command: lib_1.func.description('The command to be executed on the p5 Sketch. It takes the p5 instance as a prop').isRequired,
  p: lib_1.object.description('The p5 instance to be drawn onto by the command. If non is specified, it will draw on the current p5 Instance. see Layers for more informations on p5 instances.')
};

function Debug() {
  var ctx = React.useContext(P5Context);
  var frameRateHistory = React.useRef([]);
  var displayDebugInfo = React.useCallback(function (p) {
    p.push();
    p.fill(0, 100);
    p.noStroke();
    p.rect(0, 0, 185, 100);
    p.fill(255);
    p.textFont('Courier');
    p.textSize(12);
    p.textLeading(18);
    var fr = Math.round(p.frameRate());
    var avgFr = frameRateHistory.current.reduce(function (total, curr) {
      return total + curr;
    }, 0) / frameRateHistory.current.length;
    frameRateHistory.current.push(fr);
    if (fr > 200) fr.shift();
    var text = "Current frame rate: ".concat(fr, "\nAverage frame rate: ").concat(Math.round(avgFr), "\nPixel density: ").concat(p.pixelDensity(), "\nSetup commands: ").concat(ctx.getRootState().setup.length, "\nDraw commands: ").concat(ctx.getRootState().draw.length, "\n        ");
    p.text(text, 8, 18);
    p.pop();
  }, [ctx]);
  return /*#__PURE__*/React__default.createElement(Command, {
    command: displayDebugInfo
  });
}

var P5RenderContext = React.createContext(null);
var RenderContextProvider = function RenderContextProvider(_ref) {
  var step = _ref.step,
      children = _ref.children;

  var _useContext = React.useContext(P5Context),
      p5Instance = _useContext.p5Instance,
      defineCommandFactory = _useContext.defineCommandFactory,
      ctx = _objectWithoutProperties(_useContext, ["p5Instance", "defineCommandFactory"]);

  var api = _objectSpread2({
    defineCommand: defineCommandFactory(step),
    rootP5Instance: p5Instance,
    p5Instance: p5Instance
  }, ctx);

  if (!p5Instance) return null;
  return /*#__PURE__*/React__default.createElement(P5RenderContext.Provider, {
    value: api
  }, children);
};
var Setup = function Setup(_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/React__default.createElement(RenderContextProvider, {
    step: SETUP
  }, children);
};
var Draw = function Draw(_ref3) {
  var children = _ref3.children;

  var _useContext2 = React.useContext(P5Context),
      getOptions = _useContext2.getOptions;

  return /*#__PURE__*/React__default.createElement(RenderContextProvider, {
    step: DRAW
  }, children, getOptions().debug && /*#__PURE__*/React__default.createElement(Debug, null));
};

p5.disableFriendlyErrors = true;
var SETUP = 'setup';
var DRAW = 'draw';
var PRELOAD = 'preload';
var P5Context = React.createContext(null);
var useP5 = function useP5() {
  var context = React.useContext(P5RenderContext);
  return {
    p: context.p5Instance,
    root: context.rootP5Instance,
    draw: context.defineCommand
  };
};
var useDraw = function useDraw(command) {
  var _useP = useP5(),
      draw = _useP.draw;

  React.useEffect(function () {
    var clear = draw(command);
    return function () {
      return clear();
    };
  }, [draw, command]);
};
var DEFAULT_OPTIONS = {
  clearOnDraw: false,
  frameRate: 60,
  debug: false,
  pixelDensity: 1
};
var P5 = function P5(_ref) {
  var _useRef;

  var options = _ref.options,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["options", "children"]);

  var _useState = React.useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      p5Instance = _useState2[0],
      setP5Instance = _useState2[1];

  var __ready = React.useRef(false);

  var canvasOptions = React.useMemo(function () {
    return _objectSpread2({}, DEFAULT_OPTIONS, {}, options);
  }, [options]);
  var rootState = React.useRef((_useRef = {}, _defineProperty(_useRef, SETUP, []), _defineProperty(_useRef, DRAW, []), _defineProperty(_useRef, PRELOAD, []), _defineProperty(_useRef, "layers", []), _useRef));
  React.useEffect(function () {
    return function () {
      if (p5Instance) p5Instance.remove();
    };
  }, [p5Instance]);
  React.useEffect(function () {
    if (!p5Instance) {
      setP5Instance(new p5(function (p) {
        p.__id = 'ROOT';

        p.setup = function () {
          p.pixelDensity(canvasOptions.pixelDensity);
          p.frameRate(canvasOptions.frameRate); // Basically I don't understand why I need to do this...
          // When Loading the component containing the sketch asynchronously via React.lazy(),
          // the setup function is executed before the <Commands /> inside <Setup /> had time to define the commands
          // There is probably a better workaround, but this will do for now...

          setTimeout(function () {
            rootState.current[SETUP].forEach(function (command) {
              return command();
            });
            __ready.current = true;
          });
        };

        p.draw = function () {
          if (__ready.current !== true) return;

          if (canvasOptions.clearOnDraw) {
            p.clear();
          }

          rootState.current[DRAW].forEach(function (command) {
            command();
          });
        };
      }));
    }
  }, [canvasOptions.clearOnDraw, canvasOptions.frameRate, canvasOptions.pixelDensity, p5Instance]);
  var api = {
    p5Instance: p5Instance,
    getOptions: function getOptions() {
      return canvasOptions;
    },
    getRootState: function getRootState() {
      return rootState.current;
    },
    findLayer: function findLayer(id) {
      return rootState.current.layers.find(function (layer) {
        return layer.__id === id;
      });
    },
    defineCommandFactory: function defineCommandFactory(key) {
      return function (command) {
        var ctx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : p5Instance;
        var idx = arguments.length > 2 ? arguments[2] : undefined;

        if (typeof idx !== 'number') {
          idx = rootState.current[key].length;
        }

        var handler = function handler() {
          return command(typeof ctx === 'function' ? ctx() : ctx);
        };

        handler.__type = command.__type;

        if (rootState.current[key].length <= 0) {
          rootState.current[key].push(handler);
        } else {
          rootState.current[key].splice(idx, 0, handler);
        }

        return function () {
          var index = rootState.current[key].indexOf(handler);
          rootState.current[key] = rootState.current[key].filter(function (c) {
            return c !== handler;
          });
          return index;
        };
      };
    }
  };
  return /*#__PURE__*/React__default.createElement(P5Context.Provider, {
    value: api
  }, children);
};

function CanvasComponent(_ref) {
  var width = _ref.width,
      height = _ref.height,
      _ref$renderer = _ref.renderer,
      renderer = _ref$renderer === void 0 ? 'P2D' : _ref$renderer,
      children = _ref.children,
      canvasClassName = _ref.canvasClassName,
      canvasStyle = _ref.canvasStyle,
      props = _objectWithoutProperties(_ref, ["width", "height", "renderer", "children", "canvasClassName", "canvasStyle"]);

  var _useContext = React.useContext(P5RenderContext),
      rp = _useContext.rootP5Instance;

  var canvasContainerRef = React.useRef(null);
  var command = React.useCallback(function () {
    var canvas = rp.createCanvas(width, height, renderer);
    canvas.elt.className = canvasClassName;
    canvas.elt.style = canvasStyle;
    canvas.parent(canvasContainerRef.current);
  }, [canvasClassName, canvasStyle, height, renderer, rp, width]);
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", _extends({
    ref: canvasContainerRef
  }, props)), /*#__PURE__*/React__default.createElement(Command, {
    command: command
  }, children));
}

CanvasComponent.displayName = 'Canvas';
var Canvas = lib_2(CanvasComponent).description("The `<Canvas>` component will create a new canvas for you to draw things on.\n\nIt is the equivalent of calling [p5.createCanvas()](https://p5js.org/reference/#/p5/createCanvas)\n");
Canvas.propTypes = {
  width: lib_1.oneOfType([lib_1.func, lib_1.number]).description('The width of the canvas in pixels').isRequired,
  height: lib_1.oneOfType([lib_1.func, lib_1.number]).description('The width of the canvas in pixels').isRequired,
  renderer: lib_1.oneOf(['P2D', 'WEBGL']).description('The renderer to be used for the canvas. Defaults to P2D'),
  canvasClassName: lib_1.string.description('The classname passed to created the canvas DOM element'),
  canvasStyle: lib_1.object.description('The stylepassed to the createdcanvas DOM element')
};

var handleValueOrFunction = function handleValueOrFunction(p) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  var returnValue = values.map(function (value) {
    return typeof value === 'function' ? value(p) : value;
  });
  if (returnValue.length <= 1) return returnValue[0];
  return returnValue;
};

function Background(_ref) {
  var color = _ref.color,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["color", "children"]);

  var command = React.useCallback(function (p) {
    p.background(handleValueOrFunction(p, color));
  }, [color]);
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Command, {
    command: command
  }), children);
}

var EMPTY_ARRAY = Object.freeze([]);

function LayerComponent(_ref) {
  var _ref$autoClear = _ref.autoClear,
      autoClear = _ref$autoClear === void 0 ? true : _ref$autoClear,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? null : _ref$children,
      _ref$blendMode = _ref.blendMode,
      blendMode = _ref$blendMode === void 0 ? 'BLEND' : _ref$blendMode,
      opacity = _ref.opacity,
      _ref$filters = _ref.filters,
      filters = _ref$filters === void 0 ? EMPTY_ARRAY : _ref$filters,
      _ref$isStatic = _ref.isStatic,
      isStatic = _ref$isStatic === void 0 ? false : _ref$isStatic,
      applyFunction = _ref.applyFunction,
      _ref$x = _ref.x,
      x = _ref$x === void 0 ? 0 : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === void 0 ? 0 : _ref$y,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? function (p) {
    return p.width;
  } : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? function (p) {
    return p.height;
  } : _ref$height,
      id = _ref.id;

  var _useState = React.useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      layerImage = _useState2[0],
      setLayerImage = _useState2[1];

  var pg = React.useRef(null);
  var applyCallbacks = React.useRef([]);
  var ctx = React.useContext(P5RenderContext);
  var globalCtx = React.useContext(P5Context);
  React.useEffect(function () {
    if (isStatic) {
      setLayerImage(null);
    }
  }, [children, opacity, blendMode, isStatic]);
  React.useEffect(function () {
    return function () {
      ctx.getRootState().layers = ctx.getRootState().layers.filter(function (layer) {
        return layer.__id !== id;
      });
    };
  }, [ctx, id]);

  var api = _objectSpread2({}, ctx, {
    get p5Instance() {
      return pg.current;
    }

  });

  var applyLayer = React.useCallback(function () {
    var p = ctx.p5Instance;

    var doApply = function doApply(content) {
      p.blendMode(p[blendMode]); // only tint if needed because it is a costly operation

      if (opacity) {
        p.tint(255, opacity);
      }

      p.image(content, handleValueOrFunction(p, x), handleValueOrFunction(p, y), handleValueOrFunction(p, width), handleValueOrFunction(p, height));
    };

    if (layerImage && isStatic) {
      doApply(layerImage);
      return;
    }

    if (!pg.current || pg.current.width <= 0 || pg.current.height <= 0) {
      return;
    }

    pg.current.mouseX = p.mouseX + handleValueOrFunction(p, x);
    pg.current.mouseY = p.mouseY + handleValueOrFunction(p, y);
    pg.current.pmouseX = p.pmouseX + handleValueOrFunction(p, x);
    pg.current.pmouseY = p.pmouseY + handleValueOrFunction(p, y);
    var contentToApply = pg.current;

    if (applyCallbacks.current.length > 0) {
      var _contentToApply;

      var copyParams = [0, 0, pg.current.width, pg.current.height];
      contentToApply = p.createImage(pg.current.width, pg.current.height);

      (_contentToApply = contentToApply).copy.apply(_contentToApply, [pg.current].concat(copyParams, copyParams));

      applyCallbacks.current.forEach(function (cb) {
        return cb(pg.current, contentToApply);
      });
    }

    if (applyFunction) applyFunction(pg.current);else doApply(contentToApply);

    if (isStatic) {
      setLayerImage(contentToApply);
    }
  }, [ctx.p5Instance, layerImage, isStatic, applyFunction, blendMode, opacity, x, y, width, height]);
  var applyFilters = React.useCallback(function () {
    if (!pg.current) return;
    filters.forEach(function (filter) {
      if (Array.isArray(filter)) {
        var _pg$current;

        (_pg$current = pg.current).filter.apply(_pg$current, _toConsumableArray(filter));
      } else {
        pg.current.filter(filter);
      }
    });
  }, [filters]);
  var applyAutoClear = React.useCallback(function () {
    if (!pg.current) return;
    pg.current.clear();
  }, []);
  var createLayer = React.useCallback(function (p) {
    if (!pg.current) {
      pg.current = ctx.rootP5Instance.createGraphics(handleValueOrFunction(ctx.rootP5Instance, width), handleValueOrFunction(ctx.rootP5Instance, height));

      pg.current.on = function (event, cb) {
        switch (event) {
          case 'apply':
            applyCallbacks.current.push(cb);
            return function () {
              applyCallbacks.current.splice(applyCallbacks.current.indexOf(cb), 1);
            };

          default:
            console.error('Unknow layer event', event);
        }
      };
    }

    pg.current.__isLayer = true;
    pg.current.__isStatic = isStatic;
    pg.current.__id = id;
    ctx.getRootState().layers.push(pg.current);
  }, [ctx.rootP5Instance, height, id, isStatic, width]);
  return /*#__PURE__*/React__default.createElement(P5RenderContext.Provider, {
    value: api
  }, /*#__PURE__*/React__default.createElement(React__default.Fragment, null, !layerImage && /*#__PURE__*/React__default.createElement(Command, {
    command: createLayer
  }), !layerImage && autoClear && /*#__PURE__*/React__default.createElement(Command, {
    command: applyAutoClear
  }), !layerImage && children, !layerImage && filters.length > 0 && /*#__PURE__*/React__default.createElement(Command, {
    command: applyFilters
  }), /*#__PURE__*/React__default.createElement(Command, {
    command: applyLayer
  })));
}

LayerComponent.displayName = 'Layer';
var Layer = lib_2(LayerComponent).description('Todo Layer description');
Layer.propTypes = {
  autoClear: lib_1.bool.description('todo'),
  blendMode: lib_1.oneOfType([lib_1.func, lib_1.string]).description('todo'),
  opacity: lib_1.number.description('todo'),
  filters: lib_1.array.description('todo'),
  isStatic: lib_1.bool.description('todo'),
  applyFunction: lib_1.func.description('todo'),
  id: lib_1.string.description('todo'),
  x: lib_1.oneOfType([lib_1.number, lib_1.func]).description('The x-coordinate of the shape'),
  y: lib_1.oneOfType([lib_1.number, lib_1.func]).description('The y-coordinate of the shape'),
  size: lib_1.oneOfType([lib_1.number, lib_1.func]).description('The size of the shape in pixels')
};

function MaskComponent(_ref) {
  var id = _ref.id,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["id", "children"]);

  var ctx = React.useContext(P5RenderContext);
  var mask = React.useRef(null);
  var applyFunction = React.useCallback(function (layer) {
    var apply = function apply(parentLayer, parentImg) {
      parentImg.mask(layer);
    };

    if (mask.current) mask.current();
    mask.current = ctx.p5Instance.on('apply', apply);
  }, [ctx.p5Instance]);
  return /*#__PURE__*/React__default.createElement(Layer, _extends({
    id: id,
    applyFunction: applyFunction
  }, props), children);
}

MaskComponent.displayName = 'Mask';
var Mask = lib_2(MaskComponent).description('todo');
Mask.propTypes = {
  autoClear: lib_1.bool.description('todo'),
  blendMode: lib_1.oneOfType([lib_1.func, lib_1.string]).description('todo'),
  opacity: lib_1.number.description('todo'),
  filters: lib_1.array.description('todo'),
  isStatic: lib_1.bool.description('todo'),
  applyFunction: lib_1.func.description('todo'),
  id: lib_1.string.description('todo'),
  x: lib_1.oneOfType([lib_1.number, lib_1.func]).description('The x-coordinate of the shape').isRequired,
  y: lib_1.oneOfType([lib_1.number, lib_1.func]).description('The y-coordinate of the shape').isRequired,
  size: lib_1.oneOfType([lib_1.number, lib_1.func]).description('The size of the shape in pixels').isRequired
};

function handleCommonProps(props, p) {
  var applyProp = function applyProp(propName) {
    if (!props.hasOwnProperty(propName)) return;
    var value = handleValueOrFunction(p, props[propName]);
    if (Array.isArray(value)) p[propName].apply(p, _toConsumableArray(value));else p[propName](value);
  };

  if (props.noFill) p.noFill();
  if (props.noStroke) p.noStroke();
  applyProp('ellipseMode');
  applyProp('rectMode');
  applyProp('angleMode');
  applyProp('colorMode');
  applyProp('fill');
  applyProp('stroke');
  applyProp('strokeJoin');
  applyProp('strokeCap');
  applyProp('strokeWeight');
  applyProp('translate');
  applyProp('rotate');
  applyProp('scale');
  applyProp('shearX');
  applyProp('shearY');
  applyProp('applyMatrix');
}

var generate = function generate(name) {
  for (var _len = arguments.length, propTypes = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    propTypes[_key - 1] = arguments[_key];
  }

  return _defineProperty({}, name, lib_1.oneOfType([lib_1.func].concat(propTypes)).description("See [".concat(name, "](https://p5js.org/reference/#/p5/").concat(name, ")")));
};

var commonPropTypes = Object.assign({}, generate('ellipseMode', lib_1.oneOf(['center', 'radius', 'corner', 'corners'])), generate('rectMode', lib_1.oneOf(['center', 'radius', 'corner', 'corners'])), generate('angleMode', lib_1.oneOf(['degrees', 'radians'])), generate('colorMode', lib_1.array, lib_1.oneOf(['rgb', 'hsb', 'hsl'])), generate('fill', lib_1.oneOfType([lib_1.array, lib_1.number, lib_1.string])), generate('stroke', lib_1.oneOfType([lib_1.array, lib_1.number, lib_1.string])), {
  noFill: lib_1.bool.description("See [noFill](https://p5js.org/reference/#/p5/noFill)"),
  noStroke: lib_1.bool.description("See [noStroke](https://p5js.org/reference/#/p5/noStroke)")
}, generate('strokeJoin', lib_1.oneOf(['miter', 'bevel', 'round'])), generate('strokeJoin', lib_1.oneOf(['round', 'square', 'project'])), generate('strokeWeight', lib_1.number), generate('translate', lib_1.array), generate('rotate', lib_1.number, lib_1.array), generate('scale', lib_1.number, lib_1.array), generate('shearX', lib_1.number), generate('shearY', lib_1.number), generate('applyMatrix', lib_1.array));

function PushPopComponent(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  var push = React.useCallback(function (p) {
    p.push();
    handleCommonProps(props, p);
  }, [props]);
  var pop = React.useCallback(function (p) {
    p.pop();
  }, []);
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Command, {
    command: push
  }), children, /*#__PURE__*/React__default.createElement(Command, {
    command: pop
  }));
}

PushPopComponent.displayName = 'PushPop';
var PushPop = lib_2(PushPopComponent).description('Todo');
PushPop.propTypes = commonPropTypes;

function RectangleComponent(_ref) {
  var x = _ref.x,
      y = _ref.y,
      width = _ref.width,
      height = _ref.height,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["x", "y", "width", "height", "children"]);

  var command = React.useCallback(function (p) {
    handleCommonProps(props, p);
    p.rect.apply(p, _toConsumableArray(handleValueOrFunction(p, x, y, width, height)));
  }, [props, x, y, width, height]);
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Command, {
    command: command
  }), children);
}

RectangleComponent.displayName = 'Rectangle';
var Rectangle = lib_2(RectangleComponent).description("The `<Rectangle>` component allows you to draw an rectangle to the screen. \n\nIt is the equivalent of calling [p5.rectangle()](https://p5js.org/reference/#/p5/rectangle).");
Rectangle.propTypes = _objectSpread2({
  x: lib_1.oneOfType([lib_1.number, lib_1.func]).description('The x-coordinate of the shape').isRequired,
  y: lib_1.oneOfType([lib_1.number, lib_1.func]).description('The y-coordinate of the shape').isRequired,
  width: lib_1.oneOfType([lib_1.number, lib_1.func]).description('The width of the shape in pixels').isRequired,
  height: lib_1.oneOfType([lib_1.number, lib_1.func]).description('The width of the shape in pixels').isRequired
}, commonPropTypes);

var FullCanvasRectangle = function FullCanvasRectangle() {
  return /*#__PURE__*/React__default.createElement(Rectangle, {
    x: 0,
    y: 0,
    width: function width(p) {
      return p.width;
    },
    height: function height(p) {
      return p.height;
    },
    noStroke: true
  });
};

function LinearGradientComponent(_ref) {
  var _ref$x = _ref.x,
      x = _ref$x === void 0 ? 0 : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === void 0 ? 0 : _ref$y,
      width = _ref.width,
      height = _ref.height,
      _ref$colors = _ref.colors,
      colors = _ref$colors === void 0 ? ['black', 'white'] : _ref$colors,
      angle = _ref.angle,
      angleMode = _ref.angleMode,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["x", "y", "width", "height", "colors", "angle", "angleMode", "children"]);

  var _useContext = React.useContext(P5RenderContext),
      rp = _useContext.rootP5Instance;

  var command = React.useCallback(function (p) {
    handleCommonProps(props, p);
    var params = {
      x: handleValueOrFunction(rp, x),
      y: handleValueOrFunction(rp, y),
      width: handleValueOrFunction(rp, width) || p.width,
      height: handleValueOrFunction(rp, height) || p.height,
      angle: handleValueOrFunction(rp, angle) || 0,
      angleMode: handleValueOrFunction(rp, angleMode) || p.RADIANS,
      colors: handleValueOrFunction.apply(void 0, [rp].concat(_toConsumableArray(colors)))
    };

    if (params.angleMode !== p.RADIANS) {
      params.angle = p.radians(params.angle);
    }

    p.push();
    p.angleMode(p.DEGREES);
    var angleInDegrees = p.degrees(params.angle) % 360;
    var endVectorAngle = p.degrees(params.angle) % 180;

    if (endVectorAngle > 45 && endVectorAngle <= 90) {
      endVectorAngle = 90 - endVectorAngle;
    } else if (endVectorAngle > 90 && endVectorAngle <= 135) {
      endVectorAngle -= 90;
    } else if (endVectorAngle > 135 && endVectorAngle <= 180) {
      endVectorAngle = 90 - (endVectorAngle - 90);
    }

    var startVector = p.createVector(params.x, params.y);
    var endVector = p5.Vector.fromAngle(params.angle);
    endVector.setMag(params.width / p.sin(90 - endVectorAngle));

    if (angleInDegrees > 270) {
      startVector.y += params.height;
      endVector.y += params.height;
    } else if (angleInDegrees > 180) {
      startVector.x += params.width;
      endVector.x += params.width;
      startVector.y += params.height;
      endVector.y += params.height;
    } else if (angleInDegrees > 90) {
      startVector.x += params.width;
      endVector.x += params.width;
    }

    p.pop();
    var gradient = p.drawingContext.createLinearGradient(startVector.x, startVector.y, params.x + endVector.x, params.y + endVector.y);
    params.colors.forEach(function (color, i) {
      var stop = i / (params.colors.length - 1);
      gradient.addColorStop(stop, p.color(color).toString());
    });
    p.drawingContext.fillStyle = gradient; // UNCOMMENT TO DEBUG
    // p.push();
    // p.rect(0, 0, p.width, p.height);
    // p.fill(0);
    // p.text(`angle: ${Math.round(p.degrees(params.angle))}`, 15, 15);
    // p.noFill();
    // p.stroke(128);
    // p.rect(params.x, params.y, params.width, params.height);
    // p.rectMode(p.CORNERS);
    // p.stroke(255);
    // p.line(
    //     startVector.x,
    //     startVector.y,
    //     params.x + endVector.x,
    //     params.y + endVector.y
    // );
    // p.pop();
  }, [props, rp, x, y, width, height, angle, angleMode, colors]);
  return /*#__PURE__*/React__default.createElement(PushPop, null, /*#__PURE__*/React__default.createElement(Command, {
    command: command
  }), children || /*#__PURE__*/React__default.createElement(FullCanvasRectangle, null));
}

LinearGradientComponent.displayName = 'LinearGradient';
var LinearGradient = lib_2(LinearGradientComponent).description('todo');
LinearGradient.propTypes = _objectSpread2({
  x: lib_1.oneOfType([lib_1.number, lib_1.func]).description('The x-coordinate of the shape').isRequired,
  y: lib_1.oneOfType([lib_1.number, lib_1.func]).description('The y-coordinate of the shape').isRequired,
  width: lib_1.oneOfType([lib_1.number, lib_1.func]).description('The width of the shape in pixels').isRequired,
  height: lib_1.oneOfType([lib_1.number, lib_1.func]).description('The width of the shape in pixels').isRequired,
  colors: lib_1.oneOfType([lib_1.func, lib_1.array]).description('todo'),
  angle: lib_1.oneOfType([lib_1.func, lib_1.number]).description('todo')
}, commonPropTypes);

function BodyComponent(_ref) {
  var model = _ref.model,
      children = _ref.children;

  var _useP = useP5(),
      p = _useP.p;

  var _model = React.useRef(null);

  var _useState = React.useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      objectState = _useState2[0],
      setObjectState = _useState2[1];

  var command = React.useCallback(function (p) {
    if (objectState) {
      _model.current.update(p);

      setObjectState({
        state: _model.current
      });
    }
  }, [objectState]);
  React.useEffect(function () {
    // We need to wait for the next tick before initializing the model
    // This is because it could happend that setup commands such as createCanvas have not been run yet, potentially forwarding wrong values into the model
    if (!_model.current) {
      setTimeout(function () {
        _model.current = model(p, _model.current);
        setObjectState({
          state: _model.current
        });
      }, 25);
    } else {
      _model.current = model(p, _model.current);
      setObjectState({
        state: _model.current
      });
    }
  }, [model, p]);
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Command, {
    command: command
  }), objectState && children(objectState.state));
}
BodyComponent.displayName = 'Body';
var Body = lib_2(BodyComponent).description("The `<Body>` component allows you to easily render moving object, \nby providing a constructor function via the `model` prop that contains an `update()` method. \nThe update method will be called on every `draw` cycle by the P5 Instance.");
Body.propTypes = {
  model: lib_1.func.description('a constructor function that takes the p5 instance as a parameter. It must return an object containing the `update()` method').isRequired
};

function ArcComponent(_ref) {
  var x = _ref.x,
      y = _ref.y,
      height = _ref.height,
      width = _ref.width,
      start = _ref.start,
      stop = _ref.stop,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["x", "y", "height", "width", "start", "stop", "children"]);

  var command = React.useCallback(function (p) {
    handleCommonProps(props, p);
    p.arc.apply(p, _toConsumableArray(handleValueOrFunction(p, x, y, width, height, start, stop)));
  }, [props, x, y, width, height, start, stop]);
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Command, {
    command: command
  }), children);
}

ArcComponent.displayName = 'Arc';
var Arc = lib_2(ArcComponent).description("The `<Arc>` component allows you to draw an arc to the screen. \n\nIt is the equivalent of calling [p5.arc()](https://p5js.org/reference/#/p5/arc).");
Arc.propTypes = _objectSpread2({
  x: lib_1.oneOfType([lib_1.number, lib_1.func]).description('The x-coordinate of the shape').isRequired,
  y: lib_1.oneOfType([lib_1.number, lib_1.func]).description('The y-coordinate of the shape').isRequired,
  width: lib_1.oneOfType([lib_1.number, lib_1.func]).description('The width of the shape in pixels').isRequired,
  height: lib_1.oneOfType([lib_1.number, lib_1.func]).description('The width of the shape in pixels').isRequired,
  start: lib_1.oneOfType([lib_1.number, lib_1.func]).description('The angle to start the arc').isRequired,
  stop: lib_1.oneOfType([lib_1.number, lib_1.func]).description('The angle to stop the arc').isRequired
}, commonPropTypes);

function CircleComponent(_ref) {
  var x = _ref.x,
      y = _ref.y,
      size = _ref.size,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["x", "y", "size", "children"]);

  var command = React.useCallback(function (p) {
    handleCommonProps(props, p);
    p.circle.apply(p, _toConsumableArray(handleValueOrFunction(p, x, y, size)));
  }, [props, x, y, size]);
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Command, {
    command: command
  }), children);
}

CircleComponent.displayName = 'Circle';
var Circle = lib_2(CircleComponent).description("The `<Circle>` component allows you to draw a circle to the screen. \n\nIt is the equivalent of calling [p5.circle()](https://p5js.org/reference/#/p5/circle).");
Circle.propTypes = _objectSpread2({
  x: lib_1.oneOfType([lib_1.number, lib_1.func]).description('The x-coordinate of the shape').isRequired,
  y: lib_1.oneOfType([lib_1.number, lib_1.func]).description('The y-coordinate of the shape').isRequired,
  size: lib_1.oneOfType([lib_1.number, lib_1.func]).description('The size of the shape in pixels').isRequired
}, commonPropTypes);

function EllipseComponent(_ref) {
  var x = _ref.x,
      y = _ref.y,
      width = _ref.width,
      height = _ref.height,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["x", "y", "width", "height", "children"]);

  var command = React.useCallback(function (p) {
    handleCommonProps(props, p);
    p.ellipse.apply(p, _toConsumableArray(handleValueOrFunction(p, x, y, width, height)));
  }, [props, x, y, width, height]);
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Command, {
    command: command
  }), children);
}

EllipseComponent.displayName = 'Ellipse';
var Ellipse = lib_2(EllipseComponent).description("The `<Ellipse>` component allows you to draw an ellipse to the screen. \n\nIt is the equivalent of calling [p5.ellipse()](https://p5js.org/reference/#/p5/ellipse).");
Ellipse.propTypes = _objectSpread2({
  x: lib_1.oneOfType([lib_1.number, lib_1.func]).description('The x-coordinate of the shape').isRequired,
  y: lib_1.oneOfType([lib_1.number, lib_1.func]).description('The y-coordinate of the shape').isRequired,
  width: lib_1.oneOfType([lib_1.number, lib_1.func]).description('The width of the shape in pixels').isRequired,
  height: lib_1.oneOfType([lib_1.number, lib_1.func]).description('The width of the shape in pixels').isRequired
}, commonPropTypes);

function LineComponent(_ref) {
  var from = _ref.from,
      to = _ref.to,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["from", "to", "children"]);

  var command = React.useCallback(function (p) {
    handleCommonProps(props, p);
    p.line.apply(p, _toConsumableArray(handleValueOrFunction(p, from, to).flat()));
  }, [props, from, to]);
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Command, {
    command: command
  }), children);
}

LineComponent.displayName = 'Line';
var Line = lib_2(LineComponent).description("The `<Line>` component allows you to draw a line to the screen. \n\nIt is the equivalent of calling [p5.line()](https://p5js.org/reference/#/p5/line).");
Line.propTypes = _objectSpread2({
  from: lib_1.oneOfType([lib_1.number, lib_1.func]).description('An array of two numbers contaiing the x and y coordinates for the start of the line').isRequired,
  to: lib_1.oneOfType([lib_1.number, lib_1.func]).description('An array of two numbers contaiing the x and y coordinates for the end of the line').isRequired
}, commonPropTypes);

function PointComponent(_ref) {
  var x = _ref.x,
      y = _ref.y,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["x", "y", "children"]);

  var command = React.useCallback(function (p) {
    handleCommonProps(props, p);
    p.point.apply(p, _toConsumableArray(handleValueOrFunction(p, x, y)));
  }, [props, x, y]);
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Command, {
    command: command
  }), children);
}

PointComponent.displayName = 'Point';
var Point = lib_2(PointComponent).description("The `<Point>` component allows you to draw a point to the screen. \n\nIt is the equivalent of calling [p5.point()](https://p5js.org/reference/#/p5/point).");
Point.propTypes = _objectSpread2({
  x: lib_1.oneOfType([lib_1.number, lib_1.func]).description('The x-coordinate of the shape').isRequired,
  y: lib_1.oneOfType([lib_1.number, lib_1.func]).description('The y-coordinate of the shape').isRequired
}, commonPropTypes);

function SquareComponent(_ref) {
  var x = _ref.x,
      y = _ref.y,
      size = _ref.size,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["x", "y", "size", "children"]);

  var command = React.useCallback(function (p) {
    handleCommonProps(props, p);
    p.square.apply(p, _toConsumableArray(handleValueOrFunction(p, x, y, size)));
  }, [props, x, y, size]);
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Command, {
    command: command
  }), children);
}

SquareComponent.displayName = 'Square';
var Square = lib_2(SquareComponent).description("The `<Square>` component allows you to draw a square to the screen. \n\nIt is the equivalent of calling [p5.square()](https://p5js.org/reference/#/p5/square).");
Square.propTypes = _objectSpread2({
  x: lib_1.oneOfType([lib_1.number, lib_1.func]).description('The x-coordinate of the shape').isRequired,
  y: lib_1.oneOfType([lib_1.number, lib_1.func]).description('The y-coordinate of the shape').isRequired,
  size: lib_1.oneOfType([lib_1.number, lib_1.func]).description('The size of the shape in pixels').isRequired
}, commonPropTypes);

exports.Arc = Arc;
exports.Background = Background;
exports.Body = Body;
exports.Canvas = Canvas;
exports.Circle = Circle;
exports.Command = Command;
exports.Debug = Debug;
exports.Draw = Draw;
exports.Ellipse = Ellipse;
exports.Layer = Layer;
exports.Line = Line;
exports.LinearGradient = LinearGradient;
exports.Mask = Mask;
exports.P5 = P5;
exports.P5Context = P5Context;
exports.P5RenderContext = P5RenderContext;
exports.Point = Point;
exports.PushPop = PushPop;
exports.Rectangle = Rectangle;
exports.Setup = Setup;
exports.Square = Square;
exports.useDraw = useDraw;
exports.useP5 = useP5;
//# sourceMappingURL=index.js.map
