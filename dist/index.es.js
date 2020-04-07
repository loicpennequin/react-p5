import React, { useContext, useRef, useEffect, useCallback, createContext, useState, useMemo } from 'react';
import p5 from 'p5';

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

var Command = function Command(_ref) {
  var command = _ref.command,
      p = _ref.p;
  var renderContext = useContext(P5RenderContext);
  var commandIndex = useRef(null);
  useEffect(function () {
    var clear = renderContext.defineCommand(command, function () {
      return p || renderContext.p5Instance;
    }, commandIndex.current);
    return function () {
      commandIndex.current = clear();
    };
  }, [command, p, renderContext]);
  return null;
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

function PushPop(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  var push = useCallback(function (p) {
    p.push();
    handleCommonProps(props, p);
  }, [props]);
  var pop = useCallback(function (p) {
    p.pop();
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Command, {
    command: push
  }), children, /*#__PURE__*/React.createElement(Command, {
    command: pop
  }));
}

function Debug() {
  var ctx = useContext(P5Context);
  var frameRateHistory = useRef([]);
  var displayDebugInfo = useCallback(function (p) {
    p.fill(0, 80);
    p.noStroke();
    p.rect(0, 0, 185, 95);
    p.fill(255);
    p.textFont('Courier');
    p.textLeading(20);
    var fr = Math.round(p.frameRate());
    var avgFr = frameRateHistory.current.reduce(function (total, curr) {
      return total + curr;
    }, 0) / frameRateHistory.current.length;
    frameRateHistory.current.push(fr);
    if (fr > 200) fr.shift();
    var text = "Current frame rate: ".concat(fr, "\nAverage frame rate: ").concat(Math.round(avgFr), "\nSetup commands: ").concat(ctx.getCommands().setup.length, "\nDraw commands: ").concat(ctx.getCommands().draw.length, "\n        ");
    p.text(text, 8, 18);
  }, [ctx]);
  return /*#__PURE__*/React.createElement(PushPop, null, /*#__PURE__*/React.createElement(Command, {
    command: displayDebugInfo
  }));
}

var P5RenderContext = createContext(null);
var RenderContextProvider = function RenderContextProvider(_ref) {
  var step = _ref.step,
      children = _ref.children;

  var _useContext = useContext(P5Context),
      p5Instance = _useContext.p5Instance,
      defineCommandFactory = _useContext.defineCommandFactory,
      getOptions = _useContext.getOptions;

  var api = {
    defineCommand: defineCommandFactory(step),
    rootP5Instance: p5Instance,
    p5Instance: p5Instance,
    getOptions: getOptions
  };
  if (!p5Instance) return null;
  return /*#__PURE__*/React.createElement(P5RenderContext.Provider, {
    value: api
  }, children);
};
var Setup = function Setup(_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/React.createElement(RenderContextProvider, {
    step: SETUP
  }, children);
};
var Draw = function Draw(_ref3) {
  var children = _ref3.children;

  var _useContext2 = useContext(P5Context),
      getOptions = _useContext2.getOptions;

  return /*#__PURE__*/React.createElement(RenderContextProvider, {
    step: DRAW
  }, children, getOptions().debug && /*#__PURE__*/React.createElement(Debug, null));
};

p5.disableFriendlyErrors = true;
var SETUP = 'setup';
var DRAW = 'draw';
var PRELOAD = 'preload';
var P5Context = createContext(null);
var useP5 = function useP5() {
  var context = useContext(P5RenderContext);
  return {
    p: context.p5Instance,
    root: context.rootP5Instance,
    draw: context.defineCommand
  };
};
var useDraw = function useDraw(command) {
  var _useP = useP5(),
      draw = _useP.draw;

  useEffect(function () {
    var clear = draw(command);
    return function () {
      return clear();
    };
  }, [draw, command]);
};
var DEFAULT_OPTIONS = {
  clearOnDraw: false,
  frameRate: 60,
  debug: false
};
var P5 = function P5(_ref) {
  var _useRef;

  var options = _ref.options,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["options", "children"]);

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      p5Instance = _useState2[0],
      setP5Instance = _useState2[1];

  var __ready = useRef(false);

  var canvasOptions = useMemo(function () {
    return _objectSpread2({}, DEFAULT_OPTIONS, {}, options);
  }, [options]);
  var commands = useRef((_useRef = {}, _defineProperty(_useRef, SETUP, []), _defineProperty(_useRef, DRAW, []), _defineProperty(_useRef, PRELOAD, []), _useRef));
  useEffect(function () {
    return function () {
      if (p5Instance) p5Instance.remove();
    };
  }, [p5Instance]);
  useEffect(function () {
    if (!p5Instance) {
      setP5Instance(new p5(function (p) {
        p.__id = 'ROOT';

        p.setup = function () {
          p.frameRate(canvasOptions.frameRate); // Basically I don't understand why I need to do this...
          // When Loading the component containing the sketch asynchronously via React.lazy(),
          // the setup function is executed before the <Commands /> inside <Setup /> had time to define the commands
          // There is probably a better workaround, but this will do for now...

          setTimeout(function () {
            commands.current[SETUP].forEach(function (command) {
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

          commands.current[DRAW].forEach(function (command) {
            command();
          });
        };
      }));
    }
  }, [canvasOptions.clearOnDraw, canvasOptions.frameRate, p5Instance]);
  var api = {
    p5Instance: p5Instance,
    getOptions: function getOptions() {
      return canvasOptions;
    },
    getCommands: function getCommands() {
      return commands.current;
    },
    defineCommandFactory: function defineCommandFactory(key) {
      return function (command) {
        var ctx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : p5Instance;
        var idx = arguments.length > 2 ? arguments[2] : undefined;

        if (typeof idx !== 'number') {
          idx = commands.current[key].length;
        }

        var handler = function handler() {
          return command(typeof ctx === 'function' ? ctx() : ctx);
        };

        handler.__type = command.__type;

        if (commands.current[key].length <= 0) {
          commands.current[key].push(handler);
        } else {
          commands.current[key].splice(idx, 0, handler);
        }

        return function () {
          var index = commands.current[key].indexOf(handler);
          commands.current[key] = commands.current[key].filter(function (c) {
            return c !== handler;
          });
          return index;
        };
      };
    }
  };
  return /*#__PURE__*/React.createElement(P5Context.Provider, {
    value: api
  }, children);
};

var EMPTY_ARRAY = Object.freeze([]);
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

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      layerImage = _useState2[0],
      setLayerImage = _useState2[1];

  var pg = useRef(null);
  var applyCallbacks = useRef([]);
  var ctx = useContext(P5RenderContext);
  useEffect(function () {
    if (isStatic) {
      setLayerImage(null);
    }
  }, [children, opacity, blendMode, isStatic]);

  var api = _objectSpread2({}, ctx, {
    get p5Instance() {
      return pg.current;
    }

  });

  var applyLayer = useCallback(function () {
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
  var applyFilters = useCallback(function () {
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
  var applyAutoClear = useCallback(function () {
    if (!pg.current) return;
    pg.current.clear();
  }, []);
  var createLayer = useCallback(function (p) {
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
    pg.current.__id = id;
  }, [ctx.rootP5Instance, height, id, width]);
  return /*#__PURE__*/React.createElement(P5RenderContext.Provider, {
    value: api
  }, /*#__PURE__*/React.createElement(React.Fragment, null, !layerImage && /*#__PURE__*/React.createElement(Command, {
    command: createLayer
  }), !layerImage && autoClear && /*#__PURE__*/React.createElement(Command, {
    command: applyAutoClear
  }), !layerImage && children, !layerImage && filters.length > 0 && /*#__PURE__*/React.createElement(Command, {
    command: applyFilters
  }), /*#__PURE__*/React.createElement(Command, {
    command: applyLayer
  })));
}

function Mask(_ref) {
  var id = _ref.id,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["id", "children"]);

  var ctx = useContext(P5RenderContext);
  var mask = useRef(null);
  var applyFunction = useCallback(function (layer) {
    var apply = function apply(parentLayer, parentImg) {
      parentImg.mask(layer);
    };

    if (mask.current) mask.current();
    mask.current = ctx.p5Instance.on('apply', apply);
  }, [ctx.p5Instance]);
  return /*#__PURE__*/React.createElement(Layer, _extends({
    id: id,
    applyFunction: applyFunction
  }, props), children);
}

function Canvas(_ref) {
  var width = _ref.width,
      height = _ref.height,
      _ref$renderer = _ref.renderer,
      renderer = _ref$renderer === void 0 ? 'P2D' : _ref$renderer,
      children = _ref.children,
      canvasClassName = _ref.canvasClassName,
      canvasStyle = _ref.canvasStyle,
      props = _objectWithoutProperties(_ref, ["width", "height", "renderer", "children", "canvasClassName", "canvasStyle"]);

  var _useContext = useContext(P5RenderContext),
      rp = _useContext.rootP5Instance;

  var canvasContainerRef = useRef(null);
  var command = useCallback(function () {
    var canvas = rp.createCanvas(width, height, renderer);
    canvas.elt.className = canvasClassName;
    canvas.elt.style = canvasStyle;
    canvas.parent(canvasContainerRef.current);
  }, [canvasClassName, canvasStyle, height, renderer, rp, width]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", _extends({
    ref: canvasContainerRef
  }, props)), /*#__PURE__*/React.createElement(Command, {
    command: command
  }, children));
}

function Rectangle(_ref) {
  var p = _ref.p,
      x = _ref.x,
      y = _ref.y,
      width = _ref.width,
      height = _ref.height,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["p", "x", "y", "width", "height", "children"]);

  var command = useCallback(function (p) {
    handleCommonProps(props, p);
    p.rect.apply(p, _toConsumableArray(handleValueOrFunction(p, x, y, width, height)));
  }, [props, x, y, width, height]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Command, {
    command: command
  }), children);
}

var FullCanvasRectangle = function FullCanvasRectangle() {
  return /*#__PURE__*/React.createElement(Rectangle, {
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

  var _useContext = useContext(P5RenderContext),
      rp = _useContext.rootP5Instance;

  var command = useCallback(function (p) {
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
  return /*#__PURE__*/React.createElement(PushPop, null, /*#__PURE__*/React.createElement(Command, {
    command: command
  }), children || /*#__PURE__*/React.createElement(FullCanvasRectangle, null));
}

function Body(_ref) {
  var model = _ref.model,
      children = _ref.children;

  var _useP = useP5(),
      p = _useP.p;

  var _model = useRef(null);

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      objectState = _useState2[0],
      setObjectState = _useState2[1];

  var command = useCallback(function (p) {
    if (objectState) {
      _model.current.update(p);

      setObjectState({
        state: _model.current
      });
    }
  }, [objectState]);
  useEffect(function () {
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Command, {
    command: command
  }), objectState && children(objectState.state));
}

function Arc(_ref) {
  var p = _ref.p,
      x = _ref.x,
      y = _ref.y,
      height = _ref.height,
      width = _ref.width,
      start = _ref.start,
      stop = _ref.stop,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["p", "x", "y", "height", "width", "start", "stop", "children"]);

  var command = useCallback(function (p) {
    handleCommonProps(props, p);
    p.arc.apply(p, _toConsumableArray(handleValueOrFunction(p, x, y, width, height, start, stop)));
  }, [props, x, y, width, height, start, stop]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Command, {
    command: command
  }), children);
}

function Background(_ref) {
  var color = _ref.color,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["color", "children"]);

  var command = useCallback(function (p) {
    p.background(handleValueOrFunction(p, color));
  }, [color]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Command, {
    command: command
  }), children);
}

function Circle(_ref) {
  var p = _ref.p,
      x = _ref.x,
      y = _ref.y,
      size = _ref.size,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["p", "x", "y", "size", "children"]);

  var command = useCallback(function (p) {
    handleCommonProps(props, p);
    p.circle.apply(p, _toConsumableArray(handleValueOrFunction(p, x, y, size)));
  }, [props, x, y, size]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Command, {
    command: command
  }), children);
}

function Ellipse(_ref) {
  var p = _ref.p,
      x = _ref.x,
      y = _ref.y,
      width = _ref.width,
      height = _ref.height,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["p", "x", "y", "width", "height", "children"]);

  var command = useCallback(function (p) {
    handleCommonProps(props, p);
    p.ellipse.apply(p, _toConsumableArray(handleValueOrFunction(p, x, y, width, height)));
  }, [props, x, y, width, height]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Command, {
    command: command
  }), children);
}

function Line(_ref) {
  var p = _ref.p,
      from = _ref.from,
      to = _ref.to,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["p", "from", "to", "children"]);

  var command = useCallback(function (p) {
    handleCommonProps(props, p);
    p.line.apply(p, _toConsumableArray(handleValueOrFunction(p, from, to).flat()));
  }, [props, from, to]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Command, {
    command: command
  }), children);
}

function Point(_ref) {
  var p = _ref.p,
      x = _ref.x,
      y = _ref.y,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["p", "x", "y", "children"]);

  var command = useCallback(function (p) {
    handleCommonProps(props, p);
    p.point.apply(p, _toConsumableArray(handleValueOrFunction(p, x, y)));
  }, [props, x, y]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Command, {
    command: command
  }), children);
}

function Square(_ref) {
  var p = _ref.p,
      x = _ref.x,
      y = _ref.y,
      size = _ref.size,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["p", "x", "y", "size", "children"]);

  var command = useCallback(function (p) {
    handleCommonProps(props, p);
    p.square.apply(p, _toConsumableArray(handleValueOrFunction(p, x, y, size)));
  }, [props, x, y, size]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Command, {
    command: command
  }), children);
}

export { Arc, Background, Body, Canvas, Circle, Command, Debug, Draw, Ellipse, Layer, Line, LinearGradient, Mask, P5, P5Context, P5RenderContext, Point, PushPop, Rectangle, Setup, Square, useDraw, useP5 };
//# sourceMappingURL=index.es.js.map
