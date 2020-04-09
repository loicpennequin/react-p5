'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var p5 = _interopDefault(require('p5'));
var PropTypes = _interopDefault(require('prop-types'));

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
/**
 * Todo
 */

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
P5.displayName = 'P5';
P5.propTypes = {
  /** todo */
  options: PropTypes.shape({
    /** todo */
    clearOnDraw: PropTypes.bool,

    /** todo */
    frameRate: PropTypes.number,

    /** todo */
    debug: PropTypes.bool,

    /** todo */
    pixelDensity: PropTypes.number
  })
};

/**
 * The most low-level P5-react component to interact with your sketch. Under the hood, almost every P5-react component uses it internally.
 * It gets passed a command as a prop, which is a function recieving the p5 instance as an argument, and will get executed during setup or draw depending on where the component is placed.
 * Basically, your Sketch will be a queue of \`Command />\` component that will get executed in the same order on each draw cycle.
 *
 * The command prop may be updated at any time, and the result will appear on your sketch accordingly. The new command will take place at the same position in the commands queue, instead of being pushed at the end.
 */

function Command(_ref) {
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
Command.displayName = 'Command';
Command.propTypes = {
  /** The command to be executed on the p5 Sketch. It takes the p5 instance as a prop */
  command: PropTypes.func.isRequired,

  /** The p5 instance to be drawn onto by the command. If non is specified, it will draw on the current p5 Instance. see Layers for more informations on p5 instances. */
  p: PropTypes.object
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
/** Todo */

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
RenderContextProvider.displayName = 'RenderContextProvider';
RenderContextProvider.PropTypes = {
  /** Todo */
  step: PropTypes.string
};
/** todo */

var Setup = function Setup(_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/React__default.createElement(RenderContextProvider, {
    step: SETUP
  }, children);
};
Setup.displayName = 'Setup';
/** todo  */

var Draw = function Draw(_ref3) {
  var children = _ref3.children;

  var _useContext2 = React.useContext(P5Context),
      getOptions = _useContext2.getOptions;

  return /*#__PURE__*/React__default.createElement(RenderContextProvider, {
    step: DRAW
  }, children, getOptions().debug && /*#__PURE__*/React__default.createElement(Debug, null));
};
Draw.displayName = 'Draw';

/**
 * The <Canvas> component will create a new canvas for you to draw things on.
 * It is the equivalent of calling [p5.createCanvas()](https://p5js.org/reference/#/p5/createCanvas)
 */

function Canvas(_ref) {
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
Canvas.displayName = 'Canvas';
Canvas.propTypes = {
  /** The width of the canvas */
  width: PropTypes.oneOfType([PropTypes.func, PropTypes.number]).isRequired,

  /** The height of the canvas */
  height: PropTypes.oneOfType([PropTypes.func, PropTypes.number]).isRequired,

  /** The renderer to use. Defaults to `P2D` */
  renderer: PropTypes.oneOf(['P2D', 'WEBGL']),

  /** todo  */
  canvasClassName: PropTypes.string,

  /** todo  */
  canvasStyle: PropTypes.object
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

/** todo */

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
Background.displayName = 'Background';
Background.propTypes = {
  /** todo */
  color: PropTypes.oneOfType([PropTypes.func, PropTypes.number, PropTypes.array])
};

var EMPTY_ARRAY = Object.freeze([]);
/**
 * Todo
 */

function Layer(_ref) {
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
  }, [ctx, height, id, isStatic, width]);
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
Layer.displayName = 'Layer';
Layer.propTypes = {
  /** todo */
  autoClear: PropTypes.bool,

  /** todo */
  blendMode: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

  /** todo */
  opacity: PropTypes.number,

  /** todo */
  filters: PropTypes.array,

  /** todo */
  isStatic: PropTypes.bool,

  /** todo */
  applyFunction: PropTypes.func,

  /** todo */
  id: PropTypes.string,

  /** The x-coordinate of the layer */
  x: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),

  /** The y-coordinate of the layer */
  y: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),

  /** The width of the layer */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),

  /** The height of the layer */
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),

  /** The size of the shape in pixels */
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.func])
};

/**
 * Todo
 */

function Mask(_ref) {
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
Mask.displayName = 'Mask';
Mask.propTypes = Layer.propTypes;

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

  return _defineProperty({}, name, PropTypes.oneOfType([PropTypes.func].concat(propTypes)));
};

var commonPropTypes = Object.assign({}, generate('ellipseMode', PropTypes.oneOf(['center', 'radius', 'corner', 'corners'])), generate('rectMode', PropTypes.oneOf(['center', 'radius', 'corner', 'corners'])), generate('angleMode', PropTypes.oneOf(['degrees', 'radians'])), generate('colorMode', PropTypes.array, PropTypes.oneOf(['rgb', 'hsb', 'hsl'])), generate('fill', PropTypes.oneOfType([PropTypes.array, PropTypes.number, PropTypes.string])), generate('stroke', PropTypes.oneOfType([PropTypes.array, PropTypes.number, PropTypes.string])), {
  noFill: PropTypes.bool,
  noStroke: PropTypes.bool
}, generate('strokeJoin', PropTypes.oneOf(['miter', 'bevel', 'round'])), generate('strokeCap', PropTypes.oneOf(['round', 'square', 'project'])), generate('strokeWeight', PropTypes.number), generate('translate', PropTypes.array), generate('rotate', PropTypes.number, PropTypes.array), generate('scale', PropTypes.number, PropTypes.array), generate('shearX', PropTypes.number), generate('shearY', PropTypes.number), generate('applyMatrix', PropTypes.array));

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



var _propTypes2 = _interopRequireDefault(PropTypes);



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

/** Todo */

function PushPop(_ref) {
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
PushPop.propTypes = commonPropTypes;

/**
 * The `<Rectangle>` component allows you to draw a rectangle to the screen.
 * It is the equivalent of calling [p5.rectangle()](https://p5js.org/reference/#/p5/rectangle).`;
 */

function Rectangle(_ref) {
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
Rectangle.displayName = 'Rectangle';
Rectangle.propTypes = _objectSpread2({
  /** The x-coordinate of the shape */
  x: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,

  /** The Y-coordinate of the shape */
  y: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,

  /** The width of the shape in pixels */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,

  /** The height of the shape in pixels */
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired
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
/**
 * Todo
 */


function LinearGradient(_ref) {
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
LinearGradient.displayName = 'LinearGradient';
LinearGradient.propTypes = _objectSpread2({
  /** The x-coordinate of the shape */
  x: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,

  /** The Y-coordinate of the shape */
  y: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,

  /** The width of the shape in pixels */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,

  /** The height of the shape in pixels */
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,

  /** Todo */
  colors: PropTypes.oneOfType([PropTypes.func, PropTypes.array]),

  /** Todo */
  angle: PropTypes.oneOfType([PropTypes.func, PropTypes.number])
}, commonPropTypes);

/**
 * The `<Body>` component allows you to easily render a moving object, by providing a constructor function via the `model` prop that contains an `update()` method.
 * The update method will be called on every draw cycle by the P5 Instance.
 */

function Body(_ref) {
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
Body.displayName = 'Body';
Body.propTypes = {
  /** a constructor function that takes the p5 instance as a parameter. It must return an object containing the `update()  */
  model: PropTypes.func.isRequired
};

/**
 * The `<Arc>` component allows you to draw a arc to the screen.
 * It is the equivalent of calling [p5.arc()](https://p5js.org/reference/#/p5/arc).`;
 */

function Arc(_ref) {
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
Arc.displayName = 'Arc';
Arc.propTypes = _objectSpread2({
  /** The x-coordinate of the shape */
  x: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,

  /** The Y-coordinate of the shape */
  y: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,

  /** The width of the shape in pixels */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,

  /** The height of the shape in pixels */
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,

  /** The angle to start the arc */
  start: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,

  /** The angle to stop the arc */
  stop: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired
}, commonPropTypes);

/**
 * The `<Circle>` component allows you to draw a circle to the screen.
 * It is the equivalent of calling [p5.circle()](https://p5js.org/reference/#/p5/circle).`;
 */

function Circle(_ref) {
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
Circle.displayName = 'Circle';
Circle.propTypes = _objectSpread2({
  /** The x-coordinate of the shape */
  x: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,

  /** The y-coordinate of the shape */
  y: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,

  /** The size of the shape in pixels */
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired
}, commonPropTypes);

/**
 * The `<Ellipse>` component allows you to draw a ellipse to the screen.
 * It is the equivalent of calling [p5.ellipse()](https://p5js.org/reference/#/p5/ellipse).`;
 */

function Ellipse(_ref) {
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
Ellipse.displayName = 'Ellipse';
Ellipse.propTypes = _objectSpread2({
  /** The x-coordinate of the shape */
  x: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,

  /** The Y-coordinate of the shape */
  y: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,

  /** The width of the shape in pixels */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,

  /** The height of the shape in pixels */
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired
}, commonPropTypes);

/**
 * The `<Line>` component allows you to draw a line to the screen.
 * It is the equivalent of calling [p5.line()](https://p5js.org/reference/#/p5/line).`;
 */

function Line(_ref) {
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
Line.displayName = 'Line';
Line.propTypes = _objectSpread2({
  /** An array of two numbers contaiing the x and y coordinates for the start of the line */
  from: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,

  /** An array of two numbers contaiing the x and y coordinates for the end of the line */
  to: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired
}, commonPropTypes);

/**
 * The `<Point>` component allows you to draw a point to the screen.
 * It is the equivalent of calling [p5.point()](https://p5js.org/reference/#/p5/point).`;
 */

function Point(_ref) {
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
Point.displayName = 'Point';
Point.propTypes = _objectSpread2({
  /** The x-coordinate of the shape */
  x: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,

  /** The y-coordinate of the shape */
  y: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired
}, commonPropTypes);

/**
 * The `<Square>` component allows you to draw a square to the screen.
 * It is the equivalent of calling [p5.square()](https://p5js.org/reference/#/p5/square).`;
 */

function Square(_ref) {
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
Square.displayName = 'Square';
Square.propTypes = _objectSpread2({
  /** The x-coordinate of the shape */
  x: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,

  /** The y-coordinate of the shape */
  y: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,

  /** The size of the shape in pixels */
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired
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
