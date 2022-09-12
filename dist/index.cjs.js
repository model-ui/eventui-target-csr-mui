'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Avatar$1 = require('@mui/material/Avatar');
var AvatarGroup = require('@mui/lab/AvatarGroup');
var Tooltip = require('@mui/material/Tooltip');
var styles = require('@mui/styles');
require('font-awesome/css/font-awesome.min.css');
var produce = require('immer');
require('object-hash');
require('lodash');
var Card$1 = require('@mui/material/Card');
var CardHeader = require('@mui/material/CardHeader');
var CardMedia = require('@mui/material/CardMedia');
var CardActions = require('@mui/material/CardActions');
var List$1 = require('@mui/material/List');
var ListItem = require('@mui/material/ListItem');
var ListItemText = require('@mui/material/ListItemText');
var ListItemAvatar = require('@mui/material/ListItemAvatar');
var ListItemSecondaryAction = require('@mui/material/ListItemSecondaryAction');
var TextField = require('@mui/material/TextField');
var Autocomplete = require('@mui/lab/Autocomplete');
var Box = require('@mui/material/Box');
var Table$1 = require('@mui/material/Table');
var TableBody = require('@mui/material/TableBody');
var TableCell = require('@mui/material/TableCell');
var TableContainer = require('@mui/material/TableContainer');
var TableHead = require('@mui/material/TableHead');
var TableRow = require('@mui/material/TableRow');
var xDataGrid = require('@mui/x-data-grid');
var Typography = require('@mui/material/Typography');
var ImageList = require('@mui/material/ImageList');
var ImageListItem = require('@mui/material/ImageListItem');
var FormLabel = require('@mui/material/FormLabel');
var FormControl = require('@mui/material/FormControl');
var FormGroup = require('@mui/material/FormGroup');
var FormControlLabel = require('@mui/material/FormControlLabel');
var FormHelperText = require('@mui/material/FormHelperText');
var Checkbox$1 = require('@mui/material/Checkbox');
var Button$1 = require('@mui/material/Button');
var Dialog$1 = require('@mui/material/Dialog');
var DialogActions = require('@mui/material/DialogActions');
var DialogContent = require('@mui/material/DialogContent');
var DialogContentText = require('@mui/material/DialogContentText');
var MuiDialogTitle = require('@mui/material/DialogTitle');
var IconButton = require('@mui/material/IconButton');
var CloseIcon = require('@mui/icons-material/Close');
var Snackbar = require('@mui/material/Snackbar');
var MuiAlert = require('@mui/lab/Alert');
var AppBar = require('@mui/material/AppBar');
var Tabs$1 = require('@mui/material/Tabs');
var Tab = require('@mui/material/Tab');
var Grid$1 = require('@mui/material/Grid');
var Accordion$1 = require('@mui/material/Accordion');
var AccordionSummary = require('@mui/material/AccordionSummary');
var AccordionDetails = require('@mui/material/AccordionDetails');
var ExpandMoreIcon = require('@mui/icons-material/ExpandMore');
var Fab = require('@mui/material/Fab');
var ButtonGroup = require('@mui/material/ButtonGroup');
var Icon = require('@mui/material/Icon');
var TreeView = require('@mui/lab/TreeView');
var ChevronRightIcon = require('@mui/icons-material/ChevronRight');
var TreeItem = require('@mui/lab/TreeItem');
var Stack = require('@mui/material/Stack');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var React__namespace = /*#__PURE__*/_interopNamespace(React);
var Avatar__default = /*#__PURE__*/_interopDefaultLegacy(Avatar$1);
var AvatarGroup__default = /*#__PURE__*/_interopDefaultLegacy(AvatarGroup);
var Tooltip__default = /*#__PURE__*/_interopDefaultLegacy(Tooltip);
var produce__default = /*#__PURE__*/_interopDefaultLegacy(produce);
var Card__default = /*#__PURE__*/_interopDefaultLegacy(Card$1);
var CardHeader__default = /*#__PURE__*/_interopDefaultLegacy(CardHeader);
var CardMedia__default = /*#__PURE__*/_interopDefaultLegacy(CardMedia);
var CardActions__default = /*#__PURE__*/_interopDefaultLegacy(CardActions);
var List__default = /*#__PURE__*/_interopDefaultLegacy(List$1);
var ListItem__default = /*#__PURE__*/_interopDefaultLegacy(ListItem);
var ListItemText__default = /*#__PURE__*/_interopDefaultLegacy(ListItemText);
var ListItemAvatar__default = /*#__PURE__*/_interopDefaultLegacy(ListItemAvatar);
var ListItemSecondaryAction__default = /*#__PURE__*/_interopDefaultLegacy(ListItemSecondaryAction);
var TextField__default = /*#__PURE__*/_interopDefaultLegacy(TextField);
var Autocomplete__default = /*#__PURE__*/_interopDefaultLegacy(Autocomplete);
var Box__default = /*#__PURE__*/_interopDefaultLegacy(Box);
var Table__default = /*#__PURE__*/_interopDefaultLegacy(Table$1);
var TableBody__default = /*#__PURE__*/_interopDefaultLegacy(TableBody);
var TableCell__default = /*#__PURE__*/_interopDefaultLegacy(TableCell);
var TableContainer__default = /*#__PURE__*/_interopDefaultLegacy(TableContainer);
var TableHead__default = /*#__PURE__*/_interopDefaultLegacy(TableHead);
var TableRow__default = /*#__PURE__*/_interopDefaultLegacy(TableRow);
var Typography__default = /*#__PURE__*/_interopDefaultLegacy(Typography);
var ImageList__default = /*#__PURE__*/_interopDefaultLegacy(ImageList);
var ImageListItem__default = /*#__PURE__*/_interopDefaultLegacy(ImageListItem);
var FormLabel__default = /*#__PURE__*/_interopDefaultLegacy(FormLabel);
var FormControl__default = /*#__PURE__*/_interopDefaultLegacy(FormControl);
var FormGroup__default = /*#__PURE__*/_interopDefaultLegacy(FormGroup);
var FormControlLabel__default = /*#__PURE__*/_interopDefaultLegacy(FormControlLabel);
var FormHelperText__default = /*#__PURE__*/_interopDefaultLegacy(FormHelperText);
var Checkbox__default = /*#__PURE__*/_interopDefaultLegacy(Checkbox$1);
var Button__default = /*#__PURE__*/_interopDefaultLegacy(Button$1);
var Dialog__default = /*#__PURE__*/_interopDefaultLegacy(Dialog$1);
var DialogActions__default = /*#__PURE__*/_interopDefaultLegacy(DialogActions);
var DialogContent__default = /*#__PURE__*/_interopDefaultLegacy(DialogContent);
var DialogContentText__default = /*#__PURE__*/_interopDefaultLegacy(DialogContentText);
var MuiDialogTitle__default = /*#__PURE__*/_interopDefaultLegacy(MuiDialogTitle);
var IconButton__default = /*#__PURE__*/_interopDefaultLegacy(IconButton);
var CloseIcon__default = /*#__PURE__*/_interopDefaultLegacy(CloseIcon);
var Snackbar__default = /*#__PURE__*/_interopDefaultLegacy(Snackbar);
var MuiAlert__default = /*#__PURE__*/_interopDefaultLegacy(MuiAlert);
var AppBar__default = /*#__PURE__*/_interopDefaultLegacy(AppBar);
var Tabs__default = /*#__PURE__*/_interopDefaultLegacy(Tabs$1);
var Tab__default = /*#__PURE__*/_interopDefaultLegacy(Tab);
var Grid__default = /*#__PURE__*/_interopDefaultLegacy(Grid$1);
var Accordion__default = /*#__PURE__*/_interopDefaultLegacy(Accordion$1);
var AccordionSummary__default = /*#__PURE__*/_interopDefaultLegacy(AccordionSummary);
var AccordionDetails__default = /*#__PURE__*/_interopDefaultLegacy(AccordionDetails);
var ExpandMoreIcon__default = /*#__PURE__*/_interopDefaultLegacy(ExpandMoreIcon);
var Fab__default = /*#__PURE__*/_interopDefaultLegacy(Fab);
var ButtonGroup__default = /*#__PURE__*/_interopDefaultLegacy(ButtonGroup);
var Icon__default = /*#__PURE__*/_interopDefaultLegacy(Icon);
var TreeView__default = /*#__PURE__*/_interopDefaultLegacy(TreeView);
var ChevronRightIcon__default = /*#__PURE__*/_interopDefaultLegacy(ChevronRightIcon);
var TreeItem__default = /*#__PURE__*/_interopDefaultLegacy(TreeItem);
var Stack__default = /*#__PURE__*/_interopDefaultLegacy(Stack);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

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
  _extends = Object.assign ? Object.assign.bind() : function (target) {
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

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
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

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
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
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
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
  if (n === "Map" || n === "Set") return Array.from(o);
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

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

/***
https://stackoverflow.com/questions/44719103/singleton-object-in-react-native 

import EventManager from './EventManager';

// When storing data.
let commonData = EventManager.getInstance();
commonData.setUserID("User1");

// When retrieving stored data.
let commonData = EventManager.getInstance();
let userId = commonData.getUserID();
console.log(userId);

*/
var EventManager = /*#__PURE__*/function () {
  function EventManager() {
    _classCallCheck(this, EventManager);

    this._events = {};
    this._watching = {};
    this._actions = {};
    this._components = {};
    this._component_instance_type = {};
  }

  _createClass(EventManager, [{
    key: "getType",
    value: /////////////////////////////////////////////////
    /// Utility functions
    /////////////////////////////////////////////////
    function getType(oObj) {
      var res = false;

      if (_typeof(oObj) === "object") {
        res = oObj === null ? 'null' : // Check if it is an alien object, for example created as {world:'hello'}
        typeof oObj.constructor !== "function" ? 'object' : // else return object name (string)
        oObj.constructor.name;
      } else {
        // Test simple types (not constructed types)
        res = typeof oObj === "boolean" ? 'boolean' : typeof oObj === "number" ? 'number' : typeof oObj === "string" ? 'string' : typeof oObj === "function" ? 'function' : false;
      }

      return (res + '').toLowerCase();
    }
  }, {
    key: "clearAll",
    value: function clearAll() {
      this._events = {};
      this._watching = {};
      this._actions = {};
      this._component_instance_type = {};
    }
  }, {
    key: "warnRegistration",
    value: function warnRegistration(input_type, component_id, event_name, msg) {
      console.warn('Update registration for ' + input_type + ' ' + component_id + '.' + event_name + ' : ' + msg); // TODO: should notify the UI
    }
  }, {
    key: "warnInfoRegistration",
    value: function warnInfoRegistration(component_id, msg) {
      console.warn('Update registration for ' + component_id + ': ' + msg); // TODO: should notify the UI
    }
  }, {
    key: "valid",
    value: function valid(obj, attr, type, default_value, component_id, key, input_type) {
      if (!obj.hasOwnProperty(attr)) {
        obj[attr] = default_value;
        this.warnRegistration(input_type, component_id, key, 'Attribute ' + attr + ' missing. Using default value.');
      }

      if (this.getType(obj[attr]) !== type) {
        this.warnRegistration(input_type, component_id, key, 'Attribute ' + attr + ' should be of type ' + type + ' but is ' + this.getType(obj[attr]) + ' using default values.');
      }
    }
  }, {
    key: "validInputsForUI",
    value: function validInputsForUI(obj, input_type, component_id, key) {
      // check if schema is specified. Used by UI and validating inputs during runtime
      this.valid(obj, 'schema', 'object', {
        type: 'object',
        title: component_id + '-' + key,
        description: 'Auto generated'
      }, component_id, key, input_type);
    }
  }, {
    key: "capitalize",
    value: function capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    } /////////////////////////////////////////////////
    /// Component self registering (is called in component)
    /////////////////////////////////////////////////

  }, {
    key: "register",
    value: function register(component_id, actions, events, component_info) {
      var _this = this;

      // TODO: validate input action
      if (!component_info) {
        console.warn("Component info is missing for " + component_id); //throw "Component info is missing";
      } else {
        this._components[component_info.type] = component_info;
        this._components[component_info.type].actions = actions;
        this._components[component_info.type].events = events;
        this._component_instance_type[component_id] = component_info.type;
      }

      this._actions[component_id] = {};
      this._events[component_id] = events || {}; // lets save our actions

      Object.keys(actions).forEach(function (key) {
        // validate the action registration
        var action = actions[key]; // if we only specify function, lets refactor

        if (typeof action === 'function') {
          action = {
            handler: action
          };

          _this.warnRegistration(component_id, key, 'Function handler should be defined as handler in an object. Auto refactoring done.');
        }

        _this.validInputsForUI(action, 'action', component_id, key);

        _this._actions[component_id][key] = action;
      });
      var event_map = {}; // used to return the event mapping id
      // lets assign ids to the events

      Object.keys(this._events[component_id]).forEach(function (key) {
        var key_id = key; // TODO: should be random

        if (!_this._events[component_id][key].id) {
          // if undefined, null or 0
          _this._events[component_id][key].id = key_id;
          event_map[key] = {
            id: key_id
          }; // REMOVE ME when refactoring this
        } else {
          event_map[key] = {
            id: _this._events[component_id][key].id
          }; // TODO: EVENT HAS CALLABLE HANDLER
        }

        _this.validInputsForUI(_this._events[component_id][key], 'event', component_id, key);
      });
      return event_map;
    } /////////////////////////////////////////////////
    /// Eventfull core functions 
    /////////////////////////////////////////////////

  }, {
    key: "addToWatchList",
    value: function addToWatchList(cid, evt, trigger_id, trigger_action, transform) {
      if (!this._watching[cid]) {
        this._watching[cid] = {};
      }

      if (this._watching[cid][evt] === undefined) {
        this._watching[cid][evt] = []; // add a trigger array for component
      } // add to trigger array an action to perform


      this._watching[cid][evt].push({
        'tid': trigger_id,
        // trigger id
        'act': trigger_action,
        // trigger event
        'transf': transform // transformation function (TODO: if not set find one!!!)

      });
    }
  }, {
    key: "watch",
    value: function watch(W) {
      var _this2 = this;

      // TODO: validate W against registered
      if (Array.isArray(W) === false) {
        W = [W];
      }

      var _loop = function _loop(i) {
        var w = W[i];
        var cid = w['component']['id'];
        var evt = w['component']['event'];

        if (w['component'].filter) {
          // if this is a filtered watch
          if (!w['component']['regex']) {
            // only compile expression if missing
            w['component']['regex'] = new RegExp(w['component']['filter']);
          }

          Object.entries(_this2._actions).forEach(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                cid_key = _ref2[0];
                _ref2[1];

            if (w['component']['regex'].exec(cid_key)) {
              _this2.addToWatchList(cid_key, evt, w.trigger.id, w.trigger.action, w.transform);
            }
          });
        } else {
          // lets add the id to watch list instead
          if (cid) {
            _this2.addToWatchList(cid, evt, w.trigger.id, w.trigger.action, w.transform);
          }
        }
      };

      for (var i = 0; i < W.length; i++) {
        _loop(i);
      }
    }
  }, {
    key: "addEvent",
    value: function addEvent(cid, event_name, data, evt) {
      // are we watching this component
      if (this._watching[cid]) {
        console.info("--> event " + cid + " :" + event_name); // are we watching this component event

        var actions = this._watching[cid][event_name] || [];

        for (var a in actions) {
          var act = actions[a];
          this.addAction(act.tid, act.act, data, act.transf, evt);
        }
      }
    }
  }, {
    key: "addAction",
    value: function addAction(component_id, action_name, data, transform, evt) {
      if (this._actions[component_id]) {
        console.info("--> action " + component_id + " :" + action_name);

        if (this._actions[component_id][action_name]) {
          console.info("--> xx ");
          var transformed_data = data;

          if (transform) {
            try {
              transformed_data = transform(data);
            } catch (e) {
              console.error("Transform failed", e);
            }
          }

          if (transformed_data) {
            // only apply action if data is available
            this._actions[component_id][action_name].handler(transformed_data, evt);
          }
        }
      }
    } /////////////////////////////////////////////////
    /// Debugging
    /////////////////////////////////////////////////

  }, {
    key: "getCopyOfEvents",
    value: function getCopyOfEvents() {
      return Object.assign({}, this._events);
    }
  }, {
    key: "getCopyOfWatchers",
    value: function getCopyOfWatchers() {
      return Object.assign({}, this._watching);
    }
  }, {
    key: "getCopyOfActions",
    value: function getCopyOfActions() {
      return Object.assign({}, this._actions);
    } /////////////////////////////////////////////////
    /// Modeller UI related functions
    /////////////////////////////////////////////////

  }, {
    key: "collectComponentInventory",
    value: function collectComponentInventory() {
      var store = {};

      for (var _i = 0, _Object$entries = Object.entries(this._components); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            comp = _Object$entries$_i[1];

        var parents = "";

        if (comp.relation) {
          parents = comp.relation.within;
        }

        store[key] = {
          id: comp.type,
          title: comp.name,
          type: comp.type,
          parent: parents
        };
      }

      return store;
    }
  }, {
    key: "getComponentSchema",
    value: function getComponentSchema(type) {
      return this._components[type].options;
    }
  }, {
    key: "getComponentByType",
    value: function getComponentByType(type) {
      return this._components[type];
    }
  }, {
    key: "getComponentsRegistered",
    value: function getComponentsRegistered() {
      return Object.keys(this._component_instance_type);
    }
  }, {
    key: "getComponentType",
    value: function getComponentType(component_id) {
      return this._component_instance_type[component_id];
    }
  }], [{
    key: "getInstance",
    value:
    /**
     * @returns {EventManager}
     */
    function getInstance() {
      if (EventManager._instance === null) {
        EventManager._instance = new EventManager();
      }

      return this._instance;
    }
  }]);

  return EventManager;
}();

EventManager._instance = null;

var StateManager = /*#__PURE__*/function () {
  function StateManager() {
    _classCallCheck(this, StateManager);

    this._states = {};
  }

  _createClass(StateManager, [{
    key: "getManager",
    value: function getManager(state_id) {
      return this._states[state_id];
    }
  }, {
    key: "clearAll",
    value: function clearAll() {}
  }, {
    key: "createState",
    value: function createState(props) {
      return this.createManager(props.id, props);
    }
  }, {
    key: "createStates",
    value: function createStates(props_array) {
      var _iterator = _createForOfIteratorHelper(props_array),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var props = _step.value;
          this.createManager(props.id, props);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "createManager",
    value: function createManager(state_id, props) {
      var _component = ComponentManager.getInstance().getComponent(props.type);

      if (_component) {
        var config = _component.config;
        var state_inst = this.getManager(state_id);

        if (state_inst) {
          // TODO: warn that we are trying to create a manager that exists
          return state_inst;
        } else {
          if (config.state) {
            state_inst = this.createStateByClass(config.state, props);

            if (state_inst.registerComponent) {
              state_inst.registerComponent({}, {}, config);
            }

            this._states[state_id] = state_inst;
          }

          return state_inst;
        }
      } else {
        throw new Error("Component type does not exist: " + props.type);
      }
    }
  }, {
    key: "createStateByClass",
    value: function createStateByClass(stateClass, props) {
      if (stateClass) {
        return new stateClass(props);
      }

      return null;
    } //TODO: create state statemanagers from layout tree

  }, {
    key: "createLayoutState",
    value: function createLayoutState(layout_tree) {
      var _this = this;

      walkLayout(layout_tree, function (props) {
        if (props.type && props.id && props.config && (props.data || props.content || props.actions)) {
          _this.createState(props);
        }
      });
    }
  }], [{
    key: "getInstance",
    value:
    /**
     * @returns {StateManager}
     */
    function getInstance() {
      if (StateManager._instance === null) {
        StateManager._instance = new StateManager();
      }

      return this._instance;
    }
  }]);

  return StateManager;
}();
StateManager._instance = null;
var walkLayout = function walkLayout(layt, callback) {
  var _walk = function _walk(_layt) {
    for (var d in _layt) {
      if (callback && _layt[d]) {
        callback(_layt[d]);
      }

      if (_layt[d].data) {
        _walk(_layt[d].data);
      }

      if (_layt[d].content) {
        _walk([_layt[d].content]);
      }

      if (_layt[d].actions) {
        _walk([_layt[d].actions]);
      }
    }
  };

  _walk(layt);
};

var ComponentManager = /*#__PURE__*/function () {
  function ComponentManager() {
    _classCallCheck(this, ComponentManager);

    this._components = {};
  }

  _createClass(ComponentManager, [{
    key: "getEventManager",
    value: function getEventManager() {
      return this._event_manager;
    }
  }, {
    key: "getStateFactory",
    value: function getStateFactory() {
      return this._state_factory;
    }
  }, {
    key: "clearAll",
    value: function clearAll() {
      this._components = {};
    }
  }, {
    key: "registerComponent",
    value: function registerComponent(component) {
      /**
       * Adds component to layout manager of any type.
       * Specific types in TYPES are specifically used when automatically generating the layout using AI.
       */
      // attach managers and factory
      component.manager = this;

      if (typeof component.component === "function") {
        this._components[component.type] = component;
      } else {
        console.error("Could not register " + component.type + " since it was not a function");
      }
    }
  }, {
    key: "getComponentTypes",
    value: function getComponentTypes() {
      return Object.keys(this._components);
    }
  }, {
    key: "getComponents",
    value: function getComponents() {
      return this._components;
    }
  }, {
    key: "getComponent",
    value: function getComponent(component_type) {
      return this._components[component_type];
    }
  }, {
    key: "getComponentInstance",
    value: function getComponentInstance(component_type, parameters) {
      // validate parameter inputs
      console.info(component_type, parameters); // paramters

      parameters.manager = this; // create component

      var c = this._components[component_type];

      if (c) {
        // if React component is of type class
        if (c.is_withclass) {
          return c.component;
        } else {
          // if React component is of type function
          return new c.component(parameters);
        }
      } else {
        console.warn("Component instance not registered of type: " + component_type);
      }
    }
  }, {
    key: "collectComponentInventory",
    value: function collectComponentInventory() {
      var store = {};

      for (var _i = 0, _Object$entries = Object.entries(this._components); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            comp = _Object$entries$_i[1];

        var cfg = comp.config;

        if (cfg && key && cfg.type) {
          var parents = "";

          if (cfg.relation) {
            parents = cfg.relation.within;
          }

          store[cfg.type] = {
            id: cfg.type,
            title: cfg.name,
            type: cfg.type,
            events: comp.events,
            actions: comp.triggers,
            category: 'TBD',
            parent: parents,
            schema: cfg.options
          }; // also add the children

          if (cfg.contains) {
            for (var _i2 = 0, _Object$entries2 = Object.entries(cfg.contains); _i2 < _Object$entries2.length; _i2++) {
              var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
                  key_itm = _Object$entries2$_i[0],
                  _comp = _Object$entries2$_i[1];

              var itm = cfg.contains[key_itm];
              store[key_itm] = {
                id: key_itm,
                title: itm.title || itm.id,
                category: 'TBD',
                type: key_itm,
                parent: cfg.type,
                schema: _comp
              };
            }
          }
        }
      }

      return store;
    }
  }], [{
    key: "getInstance",
    value:
    /**
     * @returns {ComponentManager}
     */
    function getInstance() {
      if (ComponentManager._instance === null) {
        ComponentManager._instance = new ComponentManager();
        ComponentManager._instance._event_manager = EventManager.getInstance();
        ComponentManager._instance._state_factory = StateManager.getInstance();
      }

      return this._instance;
    }
  }]);

  return ComponentManager;
}();

ComponentManager._instance = null;
window.componentManager = ComponentManager;

var LIB_FONT_AWESOME = "font-awesome"; // https://fontawesome.com/v4.7.0/icons/

var LIB_MATERIAL_UI = "material-ui"; // https://material-ui.com/components/material-icons/

function getIcon(icon_name) {
  /*
      Examples:
          'font-awesome:fa fa-spinner fa-sm fa-spin'
  */
  if (!icon_name) return undefined;

  if (icon_name.indexOf(LIB_FONT_AWESOME) === 0) {
    icon_name = icon_name.replace(LIB_FONT_AWESOME + ":", "").trim();
    return /*#__PURE__*/React__default["default"].createElement("i", {
      className: icon_name
    });
  } else if (icon_name.indexOf(LIB_MATERIAL_UI) === 0) {
    icon_name = icon_name.replace(LIB_MATERIAL_UI + ":", "").trim(); // examle Star, Add

    return MaterialIcon(icon_name);
  }
}
/**/
// https://kamranicus.com/posts/2017-09-02-dynamic-import-material-icons-react

var MaterialIcon = function MaterialIcon(icon) {
  var iconName = icon.replace(/Icon$/, '');

  var resolved = require("@mui/icons-material/".concat(iconName)).default;

  if (!resolved) {
    throw Error("Could not find @mui/icons-material/".concat(iconName));
  }

  return /*#__PURE__*/React__default["default"].createElement(resolved);
};
/**/

var StateInstance = /*#__PURE__*/function () {
  function StateInstance() {
    _classCallCheck(this, StateInstance);

    this.state = {};
    this.mount = null;
  }

  _createClass(StateInstance, [{
    key: "__updateObject",
    value: /////////////////////////////////////////////////
    /// Internal helper functions
    /////////////////////////////////////////////////
    function __updateObject(target, update) {
      // applies the changes
      // for each key/value pair in update object
      for (var _i = 0, _Object$entries = Object.entries(update); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        // if target has the relevant key and
        // the type in target and update is the same
        if (target.hasOwnProperty(key) && _typeof(value) === _typeof(target[key])) {
          // update value if string,number or boolean
          if (['string', 'number', 'boolean'].includes(_typeof(value)) || Array.isArray(value) || Object.prototype.toString.call(value) === '[object Date]') {
            target[key] = value;
          } else {
            // if type is object then go one level deeper
            if (_typeof(value) === 'object') {
              this.__updateObject(target[key], value);
            }
          }
        }
      }
    } /////////////////////////////////////////////////
    // State functions
    /////////////////////////////////////////////////

  }, {
    key: "getState",
    value: function getState() {
      return this.state;
    }
  }, {
    key: "setState",
    value: function setState(updated_state, skip_component_update) {
      // Depricated: replace the current state with this one (legacy support)
      this.state = updated_state;

      if (skip_component_update) {
        return;
      }

      if (this.mount) {
        if (this.mount.setState) {
          // make sure this mounted component has setState
          this.mount.setState(updated_state);
        }
      }
    }
  }, {
    key: "getActionState",
    value: function getActionState(action, callback) {
      if (this.mount) {
        if (this.mount.getActionState) {
          // make sure this mounted component has setState
          this.mount.getActionState(action, callback);
        } else {
          callback();
        }
      } else {
        callback();
      }
    }
  }, {
    key: "alterState",
    value: function alterState(change, skip_component_update) {
      var _this = this;

      // does some immer magic (and calls setState)
      if (change === undefined) {
        return this.state;
      }

      if (_typeof(change) === 'object') {
        var changed = produce__default["default"](this.state, function (draft) {
          _this.__updateObject(draft, change);
        });
        this.setState(changed, skip_component_update);
        return changed;
      } else {
        var _changed = produce__default["default"](this.state, change);

        this.setState(_changed, skip_component_update);
        return _changed;
      }
    } /////////////////////////////////////////////////
    /// Mounting functions used by visual components
    /////////////////////////////////////////////////

  }, {
    key: "doMount",
    value: function doMount(component_instance) {
      this.mount = component_instance;
    }
  }, {
    key: "unMount",
    value: function unMount(component_instance) {
      this.mount = null;
    }
  }, {
    key: "updateView",
    value: function updateView(action, arr, updated, data) {
      // if the component is mounted we notify it to update its view
      if (this.mount) {
        if (this.mount.updateView) {
          this.mount.updateView(action, arr, updated, data);
        }
      }

      return true;
    }
  }]);

  return StateInstance;
}();

var StateBaseComponent = /*#__PURE__*/function (_Component) {
  _inherits(StateBaseComponent, _Component);

  var _super = _createSuper(StateBaseComponent);

  /**
   * Used to manage internal state of avatars
   */
  function StateBaseComponent(props) {
    var _this;

    _classCallCheck(this, StateBaseComponent);

    _this = _super.call(this, props);

    _this.componentDidMount = function () {
      if (_this.stateManager) {
        _this.stateManager.doMount(_assertThisInitialized(_this));
      }
    };

    _this.componentWillUnmount = function () {
      if (_this.stateManager) {
        _this.stateManager.unMount(_assertThisInitialized(_this));
      }
    };

    _this.updateView = function (action, arr, updated, data) {
      // extend by parent
      return true;
    };

    _this.props = props; // check for component manager

    if (!_this.props.manager) {
      throw "Manager was not provided through props for component " + _this.props.id;
    } // make sure the manager is of correct type


    if (_this.props.manager.constructor.name !== 'ComponentManager') {
      throw "Constructor must be component manager. Got '" + _this.props.manager.constructor.name + "' for component " + _this.props.id;
    } // get the state memory manager


    _this.stateManager = _this.props.manager.getStateFactory().getManager(_this.props.id);

    if (!_this.stateManager) {
      throw new Error("State manager is missing for component '" + _this.props.id + "'. Should have been created by traversing layout tree");
    }

    if (_this.stateManager) {
      // apply initial state
      _this.state = _this.stateManager.getState();
    }

    return _this;
  }

  _createClass(StateBaseComponent, [{
    key: "triggerEvent",
    value: function triggerEvent(event, data, evt) {
      this.props.manager.getEventManager().addEvent(this.props.id, event, data, evt);
    }
  }, {
    key: "triggerAction",
    value: function triggerAction(action, data, evt) {
      this.props.manager.getEventManager().addAction(this.props.id, action, data, null, evt);
    }
  }, {
    key: "setInstanceState",
    value: function setInstanceState(state) {
      if (this.stateManager) {
        this.stateManager.setState(state);
      }
    }
  }]);

  return StateBaseComponent;
}(React.Component);

var isObject = function isObject(obj) {
  if (_typeof(obj) === 'object') {
    if (!Array.isArray(obj)) {
      return true;
    }
  }

  return false;
};
var findItemIndexById = function findItemIndexById(identifier, items) {
  // TODO: use filter instead
  var index = null;

  for (var idx in items) {
    var itm = items[idx];

    if (itm.id === identifier) {
      index = idx;
      break;
    }
  }

  if (index !== null) {
    index = parseInt(index);
  }

  return index;
};
var removeItemIndexByIndex = function removeItemIndexByIndex(idx, items) {
  if (items && items.length) {
    return items.filter(function (_, i) {
      return i !== idx;
    }) || [];
  }

  return [];
}; // https://stackoverflow.com/questions/14733374/how-to-generate-an-md5-file-hash-in-javascript
/* NOTUSED
export const deepCopy = (inObject) => {
    let outObject, value, key
    if (typeof inObject !== "object" || inObject === null) {
      return inObject; // Return the value if inObject is not an object
    }
    // Create an array or object to hold the values
    outObject = Array.isArray(inObject) ? [] : {}
    for (key in inObject) {
      value = inObject[key];
      // Recursively (deep) copy for nested objects, including arrays
      outObject[key] = deepCopy(value);
    }
    return outObject
}

/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */

function mergeDeep(target) {
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  if (!sources.length) return target;
  var source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (var key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, _defineProperty({}, key, {}));
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, _defineProperty({}, key, source[key]));
      }
    }
  }

  return mergeDeep.apply(void 0, [target].concat(sources));
}

var schema_only_id = {
  // "$schema": "http://json-schema.org/draft-06/schema#",
  "$id": "v1/listbase/..",
  "type": "array",
  "items": {
    "$ref": "#/definitions/identifier"
  },
  "definitions": {
    "identifier": {
      "type": "object",
      "additionalProperties": true,
      "properties": {
        "id": {
          "type": "string"
        }
      },
      "required": ["id"],
      "title": "Identifier with additional properties"
    }
  }
};
var triggers$q = {
  submit: {
    alias: [],
    info: {
      name: 'Submit',
      description: 'Submit entire list'
    },
    schema: {}
  },
  replace: {
    alias: [],
    info: {
      name: 'Replace',
      description: 'Replace data'
    },
    schema: {}
  },
  push: {
    alias: [],
    info: {
      name: 'Push',
      description: 'Adds data at the end to component'
    },
    schema: {}
  },
  push_front: {
    alias: [],
    info: {
      name: 'Push front',
      description: 'Adds data to the front of the component'
    },
    schema: {}
  },
  delete: {
    alias: [],
    info: {
      name: 'Delete data instance',
      description: 'Removes data from the component'
    },
    schema: _objectSpread2(_objectSpread2({}, schema_only_id), {}, {
      '$id': 'v1/listbase/delete'
    })
  },
  pop: {
    alias: [],
    info: {
      name: 'Pop back item',
      description: 'Deletes / removes back data item'
    },
    schema: {}
  },
  pop_front: {
    alias: [],
    info: {
      name: 'Pop front item',
      description: 'Deletes / removes front data item'
    },
    schema: {}
  },
  select: {
    alias: [],
    info: {
      name: 'Select item',
      description: 'Selects the data item'
    },
    schema: _objectSpread2(_objectSpread2({}, schema_only_id), {}, {
      '$id': 'v1/listbase/select'
    })
  },
  clear: {
    alias: [],
    info: {
      name: 'Clear items',
      description: 'Removes all items from list'
    },
    schema: {}
  }
};
var events$q = {
  changed: {
    alias: [],
    info: {
      name: 'changed',
      description: 'Changed size'
    },
    schema: {}
  },
  replacing: {
    alias: [],
    info: {
      name: 'replacing',
      description: 'Replacing content'
    },
    schema: {}
  },
  replaced: {
    alias: [],
    info: {
      name: 'replaced',
      description: 'Replace content'
    },
    schema: {}
  },
  submitted: {
    alias: [],
    info: {
      name: 'Submitted',
      description: 'Subbited all items in list'
    },
    schema: {}
  },
  deleted: {
    alias: [],
    info: {
      name: 'Deleted',
      description: 'Deleted specified items'
    },
    schema: {}
  },
  pushing: {
    alias: [],
    info: {
      name: 'Pusing',
      description: 'Pushing item in front of list'
    },
    schema: {}
  },
  pushed: {
    alias: [],
    info: {
      name: 'Pushed',
      description: 'Pushed item in front of list'
    },
    schema: {}
  },
  selected: {
    alias: [],
    info: {
      name: 'Selected',
      description: 'Selecting item'
    },
    schema: _objectSpread2(_objectSpread2({}, schema_only_id), {}, {
      '$id': 'v1/listbase/selected'
    })
  },
  deselected: {
    alias: [],
    info: {
      name: 'De-Selected',
      description: 'Unselecting item'
    },
    schema: {}
  },
  clearing: {
    alias: [],
    info: {
      name: 'Clearing',
      description: 'Removing all items'
    },
    schema: {}
  },
  cleared: {
    alias: [],
    info: {
      name: 'Cleared',
      description: 'Removed all items'
    },
    schema: {}
  }
};
var StateList = /*#__PURE__*/function (_StateInstance) {
  _inherits(StateList, _StateInstance);

  var _super = _createSuper(StateList);

  function StateList(props) {
    var _this;

    _classCallCheck(this, StateList);

    _this = _super.call(this, props);

    _initialiseProps.call(_assertThisInitialized(_this));

    _this.props = props; // ensure array

    var _data = [];

    if (props.data) {
      if (Array.isArray(props.data)) {
        _data = props.data;
      } else {
        // check if this is an empty object
        if (_typeof(props.data) == 'object') {
          // objects should not be empty
          if (props.data.length) {
            _data = [props.data];
          }
        } else {
          _data = [props.data];
        }
      }
    } // apply default values


    _this.state = {
      data: _data || [],
      selectedIndex: 0,
      selectedId: null
    };
    return _this;
  }

  return _createClass(StateList);
}(StateInstance);

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.findItemIndexById = function (id, data) {
    return findItemIndexById(id, data);
  };

  this.updateItem = function (id, props) {
    var idx = _this3.findItemIndexById(id, _this3.state.data);

    var updated = _toConsumableArray(_this3.state.data); // copy
    // TODO: validate props against schema


    if (idx >= 0) {
      for (var _i = 0, _Object$entries = Object.entries(props); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        updated[idx][key] = value;
      }

      _this3.setState(_objectSpread2(_objectSpread2({}, _this3.state), {}, {
        data: updated
      }));
    }
  };

  this.registerComponent = function (actionHandlers, eventHandlers, component_info) {
    actionHandlers = actionHandlers || {};
    eventHandlers = eventHandlers || {}; // add our known handlers

    var dataActionHandlers = {
      submit: {
        schema: {},
        handler: function handler(objs) {
          // submit
          EventManager.getInstance().addEvent(_this3.props.id, 'submitted', {
            count: _this3.state.data.length,
            items: _this3.state.data
          }, {});
        }
      },
      replace: {
        schema: {},
        handler: function handler(objs) {
          // append
          var data_state = _this3.state.data || []; // want an array

          if (!Array.isArray(objs)) {
            objs = [objs];
          }

          EventManager.getInstance().addEvent(_this3.props.id, 'replacing', {
            count: data_state.length,
            old: data_state,
            new: objs
          }, {});
          var data = objs;

          if (_this3.updateView("replace", [], [], data)) {
            _this3.setState(_objectSpread2(_objectSpread2({}, _this3.state), {}, {
              data: data
            }));
          }

          EventManager.getInstance().addEvent(_this3.props.id, 'replaced', {
            count: data.length,
            items: data
          }, {});
          EventManager.getInstance().addEvent(_this3.props.id, 'changed', {
            count: data.length,
            items: data
          }, {});
        }
      },
      push: {
        schema: {},
        handler: function handler(objs) {
          // append
          var data_added = [];
          var data_updated = []; // contains ids

          var data_state = _this3.state.data || [];
          var selected = {}; // want an array

          if (!Array.isArray(objs)) {
            objs = [objs];
          }

          objs.forEach(function (obj) {
            var idx = _this3.findItemIndexById(obj.id, data_state);

            if (idx === null) {
              data_added.push(obj);
            } else {
              // update the index
              data_state[idx] = mergeDeep(data_state[idx], obj); // TODO: fetch from utils

              data_updated.push(idx);
            }

            if (obj.selected) {
              // TODO: test that we can push items that are selected
              selected = {
                selectedId: obj.id,
                selectedIndex: idx
              };
            }
          });
          var data = [].concat(_toConsumableArray(data_state), data_added); // notify parent class of push event

          try {
            EventManager.getInstance().addEvent(_this3.props.id, 'pushing', data_added, {});

            if (_this3.updateView("push", data_added, data_updated, data)) {
              _this3.setState(_objectSpread2(_objectSpread2(_objectSpread2({}, _this3.state), selected), {}, {
                data: data
              }));
            }
          } catch (e) {
            _this3.exceptionCatched("push", e);
          }

          EventManager.getInstance().addEvent(_this3.props.id, 'pushed', {
            count: data.length,
            items: data,
            added: data_added
          }, {});
          EventManager.getInstance().addEvent(_this3.props.id, 'changed', {
            count: data.length,
            items: data,
            added: data_added,
            updated: data_updated
          }, {}); // FIXME: this.showSelected(selected.selectedId, selected.selectedIndex || -1);
        }
      },
      push_front: {
        schema: {},
        handler: function handler(objs) {
          var data_added = [];
          var data_updated = [];
          var data_state = _this3.state.data || [];
          var selected = {}; // want an array

          if (!Array.isArray(objs)) {
            objs = [objs];
          }

          objs.forEach(function (obj) {
            var idx = _this3.findItemIndexById(obj.id, _this3.state.data);

            if (idx === null) {
              data_added.push(obj);
            } else {
              // update the index
              data_state[idx] = obj;
              data_updated.push(idx);
            }

            if (obj.selected) {
              // TODO: test that we can push items that are selected
              selected = {
                selectedId: obj.id,
                selectedIndex: idx || data_added.length - 1
              };
            }
          });
          var data = [].concat(data_added, _toConsumableArray(data_state));

          if (_this3.updateView("push_front", [], data_updated, data)) {
            _this3.setState(_objectSpread2(_objectSpread2(_objectSpread2({}, _this3.state), selected), {}, {
              data: data
            }));
          }

          EventManager.getInstance().addEvent(_this3.props.id, 'changed', {
            count: data.length,
            items: data
          }, {}); // FIXME: this.showSelected(selected.selectedId, selected.selectedIndex || -1);
        }
      },
      delete: {
        schema: {},
        handler: function handler(objs) {
          // want an array
          if (!Array.isArray(objs)) {
            objs = [objs];
          }

          var data = _this3.state.data;
          var data_updated = [];
          var deleting = [];
          objs.forEach(function (obj) {
            if (obj.id) {
              // requires array
              var idx = _this3.findItemIndexById(obj.id, data);

              if (idx !== null) {
                deleting.push(obj.id);
                data = removeItemIndexByIndex(idx, data);
                data_updated.push(idx);
              }
            }
          });

          try {
            if (_this3.updateView("delete", [], data_updated, data)) {
              _this3.setState(_objectSpread2(_objectSpread2({}, _this3.state), {}, {
                data: data
              }));
            }
          } catch (e) {
            _this3.exceptionCatched("delete", e);
          }

          EventManager.getInstance().addEvent(_this3.props.id, 'changed', {
            count: data.length,
            items: data,
            deleted: deleting
          }, {});
          EventManager.getInstance().addEvent(_this3.props.id, 'deleted', {
            count: deleting.length,
            items: data,
            deleted: deleting
          }, {});
        }
      },
      pop: {
        schema: {},
        handler: function handler(obj) {
          if (_this3.state.data.length > 0) {
            _this3.state.data.splice(_this3.state.data.length - 1, 1);

            if (_this3.updateView("pop", [], [], _this3.state.data)) {
              _this3.setState(_objectSpread2(_objectSpread2({}, _this3.state), {}, {
                data: _this3.state.data
              }));

              EventManager.getInstance().addEvent(_this3.props.id, 'changed', {
                count: _this3.state.data.length,
                items: _this3.state.data
              }, {});
            }
          }
        }
      },
      pop_front: {
        schema: {},
        handler: function handler(obj) {
          _this3.state.data.splice(0, 1);

          if (_this3.updateView("pop_front", [], [], _this3.state.data)) {
            _this3.setState(_objectSpread2(_objectSpread2({}, _this3.state), {}, {
              data: _this3.state.data
            }));

            EventManager.getInstance().addEvent(_this3.props.id, 'changed', {
              count: _this3.state.data.length,
              items: _this3.state.data
            }, {});
          }
        }
      },
      select: {
        schema: {},
        handler: function handler(objs) {
          var data_updated = [];
          var selected = []; // want an array

          if (!Array.isArray(objs)) {
            objs = [objs];
          } // allow only one selection


          {
            for (var i = 0; i < _this3.state.data.length; i++) {
              _this3.state.data[i].selected = false;
            }
          } // find selected


          objs.forEach(function (obj) {
            if (obj.id) {
              // requires array
              var idx = _this3.findItemIndexById(obj.id, _this3.state.data);

              if (idx !== null) {
                _this3.state.data[idx].selected = !_this3.state.data[idx].selected;
                _this3.state.selectedId = _this3.state.data[idx].id;
                _this3.state.selectedIndex = idx;
                data_updated.push(idx);
                selected.push(_this3.state.data[idx]);
              }
            }
          }); // for now we just replace the state

          _this3.setState(_objectSpread2(_objectSpread2({}, _this3.state), {}, {
            data: _this3.state.data
          }));

          EventManager.getInstance().addEvent(_this3.props.id, 'selecting', objs, null);

          if (_this3.updateView("select", objs, data_updated, _this3.state)) {
            EventManager.getInstance().addEvent(_this3.props.id, 'selected', selected, null);
          }
        }
      },
      clear: {
        schema: {},
        handler: function handler(obj) {
          EventManager.getInstance().addEvent(_this3.props.id, 'clearing', {
            count: _this3.state.data.length,
            items: _this3.state.data
          }, {});

          _this3.setState(_objectSpread2(_objectSpread2({}, _this3.state), {}, {
            data: []
          }));

          EventManager.getInstance().addEvent(_this3.props.id, 'cleared', {
            count: _this3.state.data.length,
            items: _this3.state.data
          }, {});
          EventManager.getInstance().addEvent(_this3.props.id, 'changed', {
            count: _this3.state.data.length,
            items: _this3.state.data
          }, {});

          _this3.updateView("clear", [], [], []);
        }
      }
    }; // register componenet overiding or adding new event handlers

    _this3.ddEvent = EventManager.getInstance().register(_this3.props.id, _objectSpread2(_objectSpread2({}, dataActionHandlers), actionHandlers), _objectSpread2(_objectSpread2({}, events$q), eventHandlers), component_info);
    return _this3.ddEvent;
  };
};

var ListBase = /*#__PURE__*/function (_StateBaseComponent) {
  _inherits(ListBase, _StateBaseComponent);

  var _super2 = _createSuper(ListBase);

  /**
   * Used to manage internal state of avatars
   */
  function ListBase(props) {
    var _this2;

    _classCallCheck(this, ListBase);

    if (!props.config.options) {
      props.config.options = {};
    }

    _this2 = _super2.call(this, props);

    _initialiseProps2.call(_assertThisInitialized(_this2));

    _this2.props = props;
    return _this2;
  }

  _createClass(ListBase, [{
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return ListBase;
}(StateBaseComponent);

var _initialiseProps2 = function _initialiseProps2() {
  var _this4 = this;

  this.updateView = function (action, arr, updated, data) {
    // extend by parent
    return true;
  };

  this.exceptionCatched = function (action_name, event_object) {
    debugger;
    console.info("ListBase: " + action_name + " --> ", event_object);
  };

  this.findItemIndexById = function (id, data) {
    if (_this4.stateManager) {
      return _this4.stateManager.findItemIndexById(id, data);
    }
  };

  this.updateItem = function (id, props, silent) {
    if (silent) {
      return _this4.updateItemSilent(id, props);
    } else {
      return _this4.triggerAction("push", _objectSpread2(_objectSpread2({}, props), {}, {
        id: id
      }));
    }
  };

  this.updateItemSilent = function (id, props) {
    if (_this4.stateManager) {
      return _this4.stateManager.updateItem(id, props);
    }
  };

  this.getData = function () {
    return _this4.state.data;
  };

  this.showSelectedRow = function (row) {
    if (_this4.props.config.options.select) {
      return row.selected;
    }

    return false;
  };

  this.showSelected = function (id, idx) {
    // parent implementation to update the visual representation
    return true; // returns true to update state. Else do not update state.
  };

  this.setSelectedId = function (id, evt, selected) {
    // EventManager.getInstance().addAction(this.props.id, 'select', { id: id });
    _this4.triggerAction('select', {
      id: id
    });
  };

  this.getSelectedId = function () {
    var selected = [];

    _this4.state.data.forEach(function (itm) {
      if (itm.selected) {
        selected.push(itm.id);
      }
    });

    return selected;
  };

  this.getItemTreeState = function () {
    var selected = [];
    var expanded = [];

    _this4.state.data.forEach(function (itm) {
      if (itm.selected) {
        selected.push(itm.id);
      }

      if (itm.expanded) {
        expanded.push(itm.id);
      }
    });

    return {
      selected: selected,
      expanded: expanded,
      focused: _this4.state.selectedId
    };
  };

  this.handleSelect = function (key, data, index, evt) {
    if (!evt) {
      _this4.setSelectedId(data.id, evt);
    }
  };
};

var options$l = {
  "id": "avatars",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Avatars",
  "description": "Avatar options",
  "x-layout": "component",
  "type": "object",
  "version": 0.1,
  "properties": {
    "select": {
      "title": "Select",
      "description": "Selectable avatar",
      "type": "boolean",
      "default": false
    },
    "shape": {
      "title": "Shape",
      "description": "The shape around our picture",
      "type": "string",
      "enum": ['circular', 'rounded', 'square'],
      "default": "circular"
    },
    "max_count": {
      "title": "Max count",
      "description": "Number of showing images, hiding rest behind number",
      "type": "number",
      "default": 4,
      "minimum": 1
    }
  },
  "required": ["shape", "max_count"]
};
var events$p = events$q;
var triggers$p = triggers$q;
var config$l = {
  name: "Avatars",
  type: "avatars",
  author: "Kjartan Jónsson",
  description: "Avatar component",
  version: 0.1,
  relation: {
    contains: [],
    within: "component" // parent

  },
  options: options$l,
  state: StateList
};

var style$h = function style(theme) {
  return {};
};

function AvatarRender(props) {
  if (!props.data) {
    return null;
  } // merge items with config


  var onAvatarClick = props.onAvatarClick || null;
  var items = props.data || [];
  var config = props.config || {};

  if (!config.options) {
    config.options = {};
  }

  if (items.length === 1) {
    return /*#__PURE__*/React__default["default"].createElement(AvatarSingleRender, {
      name: items[0].id,
      key: items[0].id,
      data: items[0],
      config: props.config,
      onClick: onAvatarClick
    });
  } else {
    return /*#__PURE__*/React__default["default"].createElement(AvatarGroup__default["default"], {
      max: config.options.max
    }, items.map(function (itm) {
      return /*#__PURE__*/React__default["default"].createElement(AvatarSingleRender, {
        name: itm.id,
        key: itm.id,
        data: itm,
        config: config,
        onClick: onAvatarClick
      });
    }));
  }
}
function AvatarSingleRender(props) {
  var classes = {}; //useStyles();

  var config = props.data;

  if (!config) {
    return null;
  } // if no avatar exists we return nothing


  var config_text = config.title;
  var options = props.config.options || {};

  if (config.image) {
    // return image with title
    if (config.title) {
      return /*#__PURE__*/React__default["default"].createElement(Tooltip__default["default"], {
        title: config.title
      }, /*#__PURE__*/React__default["default"].createElement(Avatar__default["default"], {
        name: props.name,
        key: config.name,
        alt: config.title,
        variant: options.shape,
        className: classes.config,
        src: config.image,
        onClick: props.onClick
      }));
    } else {
      return /*#__PURE__*/React__default["default"].createElement(Avatar__default["default"], {
        name: props.name,
        key: config.name,
        alt: config.title,
        variant: options.shape,
        className: classes.config,
        src: config.image
      });
    }
  } else if (config.icon) {
    if (config.title) {
      return /*#__PURE__*/React__default["default"].createElement(Tooltip__default["default"], {
        title: config.title
      }, /*#__PURE__*/React__default["default"].createElement(Avatar__default["default"], {
        name: props.name,
        key: config.name,
        alt: config.title,
        variant: options.shape,
        className: classes.avatar,
        onClick: props.onClick
      }, getIcon(config.icon)));
    } else {
      return /*#__PURE__*/React__default["default"].createElement(Avatar__default["default"], {
        name: props.name,
        key: config.name,
        alt: config.title,
        variant: options.shape,
        className: classes.avatar,
        onClick: props.onClick
      }, getIcon(config.icon));
    }
  } else {
    if (config_text.length > 1) {
      config_text = config_text.charAt(1).toLocaleUpperCase();
    }

    return /*#__PURE__*/React__default["default"].createElement(Tooltip__default["default"], {
      title: config.title
    }, /*#__PURE__*/React__default["default"].createElement(Avatar__default["default"], {
      name: config.name,
      key: config.name,
      alt: config.title,
      variant: options.shape,
      className: classes.avatar,
      onClick: props.onClick
    }, config_text));
  }
}

var AvatarComponent = /*#__PURE__*/function (_ListBase) {
  _inherits(AvatarComponent, _ListBase);

  var _super = _createSuper(AvatarComponent);

  function AvatarComponent() {
    var _this;

    _classCallCheck(this, AvatarComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_this = _super.call.apply(_super, [this].concat(args)), _this.getData = function () {
      return _this.data;
    }, _this.onAvatarClick = function (evt) {
      if (_this.props.config.options.select) {
        var name = evt.target.parentElement.getAttribute("name"); // click
        // EventManager.getInstance().addEvent(name, 'selected', this.props.data || {}, evt);

        _this.setSelectedId(name);
      }
    }, _assertThisInitialized(_this)));
  }

  _createClass(AvatarComponent, [{
    key: "render",
    value: function render() {
      // if (!this.props.data){ return null; }
      // merge items with config
      var onAvatarClick = this.props.onAvatarClick || this.onAvatarClick;
      var items = this.state.data || [];
      var config = this.props.config || {};

      if (!config.options) {
        config.options = {};
      }

      if (!items) {
        return null;
      }

      if (items.length === 1) {
        return /*#__PURE__*/React__default["default"].createElement(AvatarSingleRender, {
          name: items[0].id,
          key: items[0].id,
          data: items[0],
          config: this.props.config,
          onClick: onAvatarClick
        });
      } else {
        if (!items.map) {
          return null;
        }

        if (!config.options) {
          return null;
        }

        return /*#__PURE__*/React__default["default"].createElement(AvatarGroup__default["default"], {
          max: config.options.max_count
        }, items.map(function (itm) {
          return /*#__PURE__*/React__default["default"].createElement(AvatarSingleRender, {
            name: itm.id,
            key: itm.id,
            data: itm,
            config: config,
            onClick: onAvatarClick
          });
        }));
      }
    }
  }]);

  return AvatarComponent;
}(ListBase);

var AvatarComponent$1 = styles.withStyles(style$h, {
  withTheme: true
})(AvatarComponent);

function Avatar(props) {
  // lets enumerate schema to extract uiSchema and validation
  return /*#__PURE__*/React__default["default"].createElement(AvatarComponent$1, props);
}
function register(component_manager) {
  // self register component to layout manager
  component_manager.registerComponent({
    component: Avatar,
    type: config$l.type,
    events: events$p,
    triggers: triggers$p,
    config: config$l
  });
}

function renderContent(classes, item) {
  var content = item.content;

  var content_type = _typeof(content);

  if (content_type === 'object') {
    content = ComponentManager.getInstance().getComponentInstance(content.type, content || {});
  } else {
    if (content_type !== 'string') {
      content = "Expected object for content having id " + item.id;
    }
  }

  return content;
}

// import DDAvatar from '../Avatar/Avatar';
// import { LayoutRender } from '../Layout/Layout';
// import CardContent from '@mui/material/CardContent';

var events$o = events$q;
var triggers$o = triggers$q;
var options$k = {
  "id": "cards",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "Card options",
  "x-layout": "component",
  "type": "object",
  "version": 0.1,
  "properties": {},
  "required": []
};
var config$k = {
  name: "Cards",
  type: "cards",
  author: "Kjartan Jónsson",
  description: "Card component",
  version: 0.1,
  relation: {
    contains: [],
    within: "component" // parent

  },
  options: options$k,
  state: StateList
};

var style$g = function style(theme) {
  return {
    list: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginBottom: 25,
      width: '102.04082%'
    },

    /*
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: "white",
    }, 
    */
    root: {
      maxWidth: 345,
      minWidth: 345,
      marginRight: 17,
      marginLeft: 17,
      marginTop: '2%',
      margin: 0
    },
    media: {
      height: 0,
      paddingTop: '56.25%',
      // 16:9
      backgroundSize: 'contain',
      marginTop: 4,
      marginBottom: 4
    },
    header: {
      fontSize: 'small' // backgroundColor: theme.palette.info.light,
      // maxHeight: 10,
      // color: theme.palette.gray

    }
  };
};

function CardComponentHeader(props) {
  var ddAvatar = null;
  var action = null;

  if (props.data) ;

  if (props.data.actions) {
    // if layout is defined we are adding actions
    action = CardComponentActions({
      'data': props.data.actions,
      'view': props.view
    });
  }

  if (props.data.title) {
    return /*#__PURE__*/React__default["default"].createElement(CardHeader__default["default"], {
      className: props.classes // classes={props.classes}
      ,
      avatar: ddAvatar,
      action: action,
      title: props.data.title,
      subheader: props.data.subheader
    });
  } else {
    return null;
  }
}
/*
function CardComponentContent(props) {
  let data = { ...props.data }; // default value
  let layout = props.layout || [{ type: 'text' }];
  if (props.pick) { // lets pick data elseware
    data = { description: props.data[props.pick.description] }
  }
  if (props.override) { // lets pick data elseware
    data = { description: props.override.description }
  }
  if (!data) return null;
  const content = LayoutRender(props.id, data, props.classes, { layout: layout }, 'card_content', ['card', 'table', 'layout']);
  return <CardContent>{content}</CardContent>;
}

function findItemIndexById(identifier, items) {
  let index = null;
  for (let idx in items) {
    const itm = items[idx];
    if (itm.id === identifier) { index = idx; break; }
  }
  return index;
}
*/


function CardComponentMedia(props) {
  var image_source = props.data.media;
  var click_event_data = null; // image with link

  if (isObject(props.data.media)) {
    image_source = props.data.media.image;

    if (props.data.media.data) {
      click_event_data = props.data.media.data;
    }
  }

  return /*#__PURE__*/React__default["default"].createElement(CardMedia__default["default"], {
    onClick: function onClick(event) {
      if (click_event_data) {
        EventManager.getInstance().addEvent(props.data.component_id, 'selected', click_event_data, null);
      }
    },
    key: props.id + "media",
    className: props.classes // content={component}
    ,
    image: image_source,
    title: props.data.title
  });
}

function CardComponentActions(action_content) {
  //if (!props.view) { return null; }
  var actions = renderContent({}, {
    content: action_content.data
  }); //LayoutRender(content.id, content.data, content.classes, content.view, 'card_actions', ['card', 'menu', 'list', 'form', 'graph', 'table', 'layout']);

  return /*#__PURE__*/React__default["default"].createElement(CardActions__default["default"], {
    disableSpacing: true
  }, actions);
}

function CardComponentRender(card_id, item, classes, view, component_id) {
  var content = [];
  var id = item.id;
  item.component_id = component_id;
  var data = item;

  if (item.title || item.actions) {
    content.push( /*#__PURE__*/React__default["default"].createElement(CardComponentHeader, {
      id: id + "header",
      key: id + "header",
      classes: classes.header,
      data: data,
      view: item.view
    }));
  }

  if (item.media) {
    content.push( /*#__PURE__*/React__default["default"].createElement(CardComponentMedia, {
      id: id + "media",
      key: id + "media",
      classes: classes.media,
      data: data
    }));
  }
  /*
  if (item.type === 'content') {
    content.push(<CardComponentContent id={id} key={id} classes={classes} data={data} pick={item.pick} override={item.data} layout={item.layout} view={item.view} />)
  }
  if (item.type === 'actions') {
    content.push(<CardComponentActions id={id} key={id} classes={classes} data={data} />)
  }
  */


  return /*#__PURE__*/React__default["default"].createElement(Card__default["default"], {
    id: card_id,
    key: card_id,
    className: classes.root
  }, content);
}

var CardComponent = /*#__PURE__*/function (_ListBase) {
  _inherits(CardComponent, _ListBase);

  var _super = _createSuper(CardComponent);

  function CardComponent(props) {
    var _this;

    _classCallCheck(this, CardComponent);

    _this = _super.call(this, props);
    _this.container_id = props.id + '_container';
    return _this;
  }

  _createClass(CardComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      // style
      var classes = this.props.classes; // render
      // {this.data.map((itm_props, idx) => (CardComponentRender(this.props.id + '_card_' + idx, itm_props, classes, this.view)))}

      return /*#__PURE__*/React__default["default"].createElement("div", {
        id: this.container_id,
        key: this.container_id,
        className: classes.list
      }, this.state.data.map(function (itm_props, idx) {
        return CardComponentRender(idx, itm_props, classes, _this2.view, _this2.props.id);
      }));
    }
    /**
          <CardActions>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
            {getIcon('font-awesome:fa fa-spinner')}
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>                                
          </CardActions>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
     */

  }]);

  return CardComponent;
}(ListBase);

var CardComponent$1 = styles.withStyles(style$g, {
  withTheme: true
})(CardComponent);

function Card(props) {
  // lets enumerate schema to extract uiSchema and validation
  return /*#__PURE__*/React__default["default"].createElement(CardComponent$1, props);
}
function registerCard(component_manager) {
  // self register component to layout manager
  component_manager.registerComponent({
    component: Card,
    type: config$k.type,
    events: events$o,
    triggers: triggers$o,
    config: config$k
  });
}

var events$n = events$q;
var triggers$n = triggers$q;
var options$j = {
  "id": "list",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "List options",
  "x-layout": "component",
  "type": "object",
  "version": 0.1,
  "properties": {
    "select": {
      "title": "Select",
      "description": "Shows selected rows highlighted",
      "type": "boolean",
      "default": false
    }
  },
  "required": []
};
var item$9 = {
  "id": "list-item",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "List item",
  "description": "Placed in list",
  "x-layout": "component-item",
  "type": "object",
  "version": 0.1,
  "properties": {
    "id": {
      "description": "identifier",
      "type": "string",
      "readOnly": false,
      "writeOnly": false
    },
    "title": {
      "description": "Title",
      "type": "string",
      "default": "Option"
    },
    "subtitle": {
      "description": "Sub title",
      "type": "string",
      "default": ""
    }
  },
  "required": ["title"]
};
var config$j = {
  name: "List",
  type: "list",
  author: "Kjartan Jónsson",
  description: "List component",
  version: 0.1,
  relation: {
    contains: ["list-item"],
    within: "component" // parent

  },
  contains: {
    "list-item": item$9
  },
  options: options$j,
  state: StateList
};

var style$f = function style(theme) {
  return {
    root: {
      width: '100%'
    }
  };
};

function ListAvatar(props) {
  if (!props.avatar) return null;
  return (
    /*#__PURE__*/
    // render array of avatars
    React__default["default"].createElement(ListItemAvatar__default["default"], null, /*#__PURE__*/React__default["default"].createElement(AvatarRender, {
      config: props.avatar.config,
      data: props.avatar.data
    }))
  );
}

var ListComponent = /*#__PURE__*/function (_ListBase) {
  _inherits(ListComponent, _ListBase);

  var _super = _createSuper(ListComponent);

  function ListComponent() {
    var _this;

    _classCallCheck(this, ListComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_this = _super.call.apply(_super, [this].concat(args)), _this.secondaryAction = function (itm, classes) {
      if (itm.secondary) {
        var action = renderContent(classes, {
          "content": itm.secondary
        });

        if (action) {
          return /*#__PURE__*/React__default["default"].createElement(ListItemSecondaryAction__default["default"], null, action);
        }
      }

      return null;
    }, _assertThisInitialized(_this)));
  }

  _createClass(ListComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      return /*#__PURE__*/React__default["default"].createElement(List__default["default"], {
        className: classes.root
      }, this.state.data.map(function (itm, idx) {
        return /*#__PURE__*/React__default["default"].createElement(ListItem__default["default"], {
          key: itm.id,
          selected: _this2.showSelectedRow(itm),
          onClick: function onClick(event) {
            return _this2.handleSelect(itm[idx], itm, idx);
          }
        }, /*#__PURE__*/React__default["default"].createElement(ListAvatar, {
          avatar: itm.avatar
        }), /*#__PURE__*/React__default["default"].createElement(ListItemText__default["default"], {
          primary: itm.title,
          secondary: itm.subtitle
        }), _this2.secondaryAction(itm, classes));
      }));
    }
  }]);

  return ListComponent;
}(ListBase);

var ListComponent$1 = styles.withStyles(style$f, {
  withTheme: true
})(ListComponent);

var events$m = events$q;
var triggers$m = triggers$q;
var options$i = {
  "id": "dropdown",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Dropdown",
  "description": "Dropdown",
  "x-layout": "component",
  "type": "object",
  "version": 0.1,
  "properties": {
    "variant": {
      "title": "variant",
      "description": "variant",
      "type": "string",
      "enum": ['standard', 'outlined', 'filled'],
      "default": "standard"
    },
    "color": {
      "title": "color",
      "description": "color",
      "type": "string",
      "enum": ['initial', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary', 'error'],
      "default": "primary"
    },
    "label": {
      "title": "label",
      "description": "label",
      "type": "string",
      "default": "contained"
    }
  },
  "required": ["buttonVariant", "color", "label"]
};
var item$8 = {
  "id": "dropdown-item",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Dropdown item",
  "description": "Placed in dropdown",
  "x-layout": "component-item",
  "type": "object",
  "version": 0.1,
  "properties": {
    "id": {
      "description": "identifier",
      "type": "string",
      "readOnly": false,
      "writeOnly": false
    },
    "title": {
      "description": "Title",
      "type": "string",
      "default": "Option"
    }
  },
  "required": ["title", "disabled"]
};
var config$i = {
  name: "Dropdown",
  type: "dropdown",
  author: "Kjartan Jónsson",
  description: "Dropdown component",
  version: 0.1,
  relation: {
    contains: ["dropdown-item"],
    within: "component" // parent

  },
  contains: {
    "dropdown-item": item$8
  },
  options: options$i,
  state: StateList
};

var style$e = function style(theme) {
  return {
    root: {
      width: '100%',
      minWidth: 160
    },
    list: undefined,
    //  --> results in styles reference warnings??
    media: undefined,
    expand: undefined,
    expandOpen: undefined,
    avatar: undefined
  };
};

var DropdownComponent = /*#__PURE__*/function (_ListBase) {
  _inherits(DropdownComponent, _ListBase);

  var _super = _createSuper(DropdownComponent);

  /**
   * Used to manage internal state of avatars
   */
  function DropdownComponent(props) {
    var _this;

    _classCallCheck(this, DropdownComponent);

    if (!props.config.options) {
      props.config.options = {
        label: 'Dropdown',
        variant: 'outlined'
      };
    }

    _this = _super.call(this, props);

    _this.handleEventOnChange = function (evt, newValue, oldValue) {
      if (newValue) {
        _this.handleSelect(newValue, {
          id: newValue.id
        }, -1);
      }
    };

    _this.updateView = function (action, arr, updated, data) {
      // extend by parent
      if (action === 'select') {
        this.setState(data);
      }

      return true;
    };

    _this.getDefaultOption = function () {
      if (_this.state.selectedId !== -1) {
        return _this.state.data[_this.state.selectedIndex];
      }
    };

    _this.getOptionSelected = function (opt, val) {
      // FIXME: key to select
      if (_this.state.data && opt) {
        if (_this.state.selectedId === opt.id) {
          return _this.state.data[_this.state.selectedIndex];
        }
      }

      return null;
    };

    _this.user_typing = false;
    return _this;
  }

  _createClass(DropdownComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      // NOT USED const { classes } = this.props;
      return /*#__PURE__*/React__default["default"].createElement(Box__default["default"], {
        display: "block",
        style: {
          width: "100%"
        }
      }, /*#__PURE__*/React__default["default"].createElement(Autocomplete__default["default"], {
        id: this.props.id,
        options: this.state.data || [],
        getOptionLabel: function getOptionLabel(option) {
          return option.title;
        },
        defaultValue: this.getDefaultOption,
        getOptionSelected: this.getOptionSelected // FIXME: key to select
        ,
        onChange: this.handleEventOnChange,
        onFocus: function onFocus(evt) {
          _this2.user_typing = true;
        },
        onBlur: function onBlur(evt) {
          _this2.user_typing = false;
        },
        renderInput: function renderInput(params) {
          if (_this2.user_typing === false) {
            var selected_item = _this2.getDefaultOption();

            if (selected_item) {
              params.inputProps.value = selected_item.title; // FIXME: trying to select dynamically. This is what I came up with
            } else {
              params.inputProps.value = "";
            }
          }

          return /*#__PURE__*/React__default["default"].createElement(TextField__default["default"], _extends({
            fullWidth: true
          }, params, {
            label: _this2.props.config.options.label,
            variant: _this2.props.config.options.variant
          }));
        }
      }));
    }
  }]);

  return DropdownComponent;
}(ListBase);

var DropdownComponent$1 = styles.withStyles(style$e, {
  withTheme: true
})(DropdownComponent);

function List(props) {
  // lets enumerate schema to extract uiSchema and validation
  return /*#__PURE__*/React__default["default"].createElement(ListComponent$1, props);
}
function Dropdown(props) {
  // lets enumerate schema to extract uiSchema and validation
  return /*#__PURE__*/React__default["default"].createElement(DropdownComponent$1, props);
}
function registerList(component_manager) {
  // self register component to layout manager
  component_manager.registerComponent({
    component: List,
    type: config$j.type,
    events: events$n,
    triggers: triggers$n,
    config: config$j
  });
}
function registerDropdown(component_manager) {
  // self register component to layout manager
  component_manager.registerComponent({
    component: Dropdown,
    type: config$i.type,
    events: events$m,
    triggers: triggers$m,
    config: config$i
  });
}

var triggers$l = triggers$q;
var events$l = events$q;
var schema_with_ids = {
  "$id": "identifiers",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "Identifiers",
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    }
  },
  "required": ["id"]
};
var StateSchemaList = /*#__PURE__*/function (_StateList) {
  _inherits(StateSchemaList, _StateList);

  var _super = _createSuper(StateSchemaList);

  function StateSchemaList(props) {
    var _this;

    _classCallCheck(this, StateSchemaList);

    _this = _super.call(this, props);

    _this.findItemIndexById = function (id, data) {
      return findItemIndexById(id, data);
    };

    _this.registerComponent = function (actionHandlers, eventHandlers, component_info) {
      actionHandlers = actionHandlers || {};
      eventHandlers = eventHandlers || {}; // add our known handlers

      var dataActionHandlers = {
        submit: {
          schema: {},
          handler: function handler(objs) {
            // submit
            EventManager.getInstance().addEvent(_this.props.id, 'submitted', {
              count: _this.state.data.length,
              items: _this.state.data,
              schema: _this.state.schema
            }, {});
          }
        },
        replace: {
          // is the only way to change the schema
          schema: {},
          handler: function handler(objs) {
            // replace content
            // make sure we get items and / or schema properties
            var data_state = _this.state;

            if (objs.schema) ; // TODO: validate schema


            if (objs.items) {
              if (!Array.isArray(objs.items)) {
                objs.items = [objs.items];
              } // TODO: validate data (new or old) against new schema

            }
            EventManager.getInstance().addEvent(_this.props.id, 'replacing', {
              old: data_state,
              new: objs
            }, {});
            var data = objs;

            if (_this.updateView("replace", [], [], data.items)) {
              _this.setState(_objectSpread2(_objectSpread2({}, _this.state), {}, {
                data: data.items || _this.state.data,
                schema: data.schema || _this.state.schema
              }));
            }

            EventManager.getInstance().addEvent(_this.props.id, 'replaced', {
              count: _this.state.data.length,
              items: _this.state.data,
              schema: _this.state.schema
            }, {});
            EventManager.getInstance().addEvent(_this.props.id, 'changed', {
              count: _this.state.data.length,
              items: _this.state.data,
              schema: _this.state.schema
            }, {});
          }
        },
        push: {
          schema: {},
          handler: function handler(objs) {
            // append
            var data_added = [];
            var data_updated = []; // contains ids

            var data_state = _toConsumableArray(_this.state.data || []); // FIXME: use better way


            var selected = {}; // want an array

            if (!Array.isArray(objs)) {
              objs = [objs];
            }

            objs.forEach(function (obj) {
              var idx = _this.findItemIndexById(obj.id, data_state);

              if (idx === null) {
                data_added.push(obj);
              } else {
                // update the index
                data_state[idx] = mergeDeep(data_state[idx], obj);
                data_updated.push(idx);
              }

              if (obj.selected) {
                // TODO: test that we can push items that are selected
                selected = {
                  selectedId: obj.id,
                  selectedIndex: idx
                };
              }
            });
            var data = [].concat(_toConsumableArray(data_state), data_added); // notify parent class of push event

            try {
              EventManager.getInstance().addEvent(_this.props.id, 'pushing', data_added, {});

              if (_this.updateView("push", data_added, data_updated, data)) {
                _this.setState(_objectSpread2(_objectSpread2(_objectSpread2({}, _this.state), selected), {}, {
                  data: data
                }));
              }
            } catch (e) {
              _this.exceptionCatched("push", e);
            }

            EventManager.getInstance().addEvent(_this.props.id, 'pushed', {
              count: data.length,
              items: data,
              added: data_added
            }, {});
            EventManager.getInstance().addEvent(_this.props.id, 'changed', {
              count: data.length,
              items: data,
              added: data_added,
              updated: data_updated
            }, {}); // FIXME: this.showSelected(selected.selectedId, selected.selectedIndex || -1);
          }
        },
        push_front: {
          schema: {},
          handler: function handler(objs) {
            var data_added = [];
            var data_updated = [];

            var data_state = _toConsumableArray(_this.state.data || []); // FIXME: use better way


            var selected = {}; // want an array

            if (!Array.isArray(objs)) {
              objs = [objs];
            }

            objs.forEach(function (obj) {
              var idx = _this.findItemIndexById(obj.id, _this.state.data);

              if (idx === null) {
                data_added.push(obj);
              } else {
                // update the index
                data_state[idx] = obj;
                data_updated.push(idx);
              }

              if (obj.selected) {
                // TODO: test that we can push items that are selected
                selected = {
                  selectedId: obj.id,
                  selectedIndex: idx || data_added.length - 1
                };
              }
            });
            var data = [].concat(data_added, _toConsumableArray(data_state));

            if (_this.updateView("push_front", [], data_updated, data)) {
              _this.setState(_objectSpread2(_objectSpread2(_objectSpread2({}, _this.state), selected), {}, {
                data: data
              }));
            }

            EventManager.getInstance().addEvent(_this.props.id, 'changed', {
              count: data.length,
              items: data
            }, {}); // FIXME: this.showSelected(selected.selectedId, selected.selectedIndex || -1);
          }
        },
        delete: {
          schema: {},
          handler: function handler(objs) {
            // want an array
            if (!Array.isArray(objs)) {
              objs = [objs];
            }

            var data = _this.state.data;
            var data_updated = [];
            var deleting = [];
            objs.forEach(function (obj) {
              if (obj.id) {
                // requires array
                var idx = _this.findItemIndexById(obj.id, data);

                if (idx !== null) {
                  deleting.push(obj.id);
                  data = removeItemIndexByIndex(idx, data);
                  data_updated.push(idx);
                }
              }
            });

            try {
              if (_this.updateView("delete", [], data_updated, data)) {
                _this.setState(_objectSpread2(_objectSpread2({}, _this.state), {}, {
                  data: data
                }));
              }
            } catch (e) {
              _this.exceptionCatched("delete", e);
            }

            EventManager.getInstance().addEvent(_this.props.id, 'changed', {
              count: data.length,
              items: data,
              deleted: deleting
            }, {});
            EventManager.getInstance().addEvent(_this.props.id, 'deleted', {
              count: deleting.length,
              items: data,
              deleted: deleting
            }, {});
          }
        },
        pop: {
          schema: {},
          handler: function handler(obj) {
            if (_this.state.data.length > 0) {
              _this.state.data.splice(_this.state.data.length - 1, 1);

              if (_this.updateView("pop", [], [], _this.state.data)) {
                _this.setState(_objectSpread2(_objectSpread2({}, _this.state), {}, {
                  data: _this.state.data
                }));

                EventManager.getInstance().addEvent(_this.props.id, 'changed', {
                  count: _this.state.data.length,
                  items: _this.state.data
                }, {});
              }
            }
          }
        },
        pop_front: {
          schema: {},
          handler: function handler(obj) {
            _this.state.data.splice(0, 1);

            if (_this.updateView("pop_front", [], [], _this.state.data)) {
              _this.setState(_objectSpread2(_objectSpread2({}, _this.state), {}, {
                data: _this.state.data
              }));

              EventManager.getInstance().addEvent(_this.props.id, 'changed', {
                count: _this.state.data.length,
                items: _this.state.data
              }, {});
            }
          }
        },
        select: {
          schema: {},
          handler: function handler(objs) {
            var data_updated = [];
            var selected = []; // want an array

            if (!Array.isArray(objs)) {
              objs = [objs];
            } // allow only one selection


            {
              for (var i = 0; i < _this.state.data.length; i++) {
                _this.state.data[i].selected = false;
              }
            } // find selected


            objs.forEach(function (obj) {
              if (obj.id) {
                // requires array
                var idx = _this.findItemIndexById(obj.id, _this.state.data);

                if (idx !== null) {
                  _this.state.data[idx].selected = !_this.state.data[idx].selected;
                  _this.state.selectedId = _this.state.data[idx].id;
                  _this.state.selectedIndex = idx;
                  data_updated.push(idx);
                  selected.push(_this.state.data[idx]);
                }
              }
            }); // for now we just replace the state

            _this.setState(_objectSpread2(_objectSpread2({}, _this.state), {}, {
              data: _this.state.data
            }));

            EventManager.getInstance().addEvent(_this.props.id, 'selecting', objs, null);

            if (_this.updateView("select", objs, data_updated, _this.state)) {
              EventManager.getInstance().addEvent(_this.props.id, 'selected', selected, null);
            }
          }
        },
        clear: {
          schema: {},
          handler: function handler(obj) {
            EventManager.getInstance().addEvent(_this.props.id, 'clearing', {
              count: _this.state.data.length,
              items: _this.state.data
            }, {});

            _this.setState(_objectSpread2(_objectSpread2({}, _this.state), {}, {
              data: []
            }));

            EventManager.getInstance().addEvent(_this.props.id, 'cleared', {
              count: _this.state.data.length,
              items: _this.state.data
            }, {});
            EventManager.getInstance().addEvent(_this.props.id, 'changed', {
              count: _this.state.data.length,
              items: _this.state.data
            }, {});

            _this.updateView("clear", [], [], []);
          }
        }
      }; // register componenet overiding or adding new event handlers

      _this.ddEvent = EventManager.getInstance().register(_this.props.id, _objectSpread2(_objectSpread2({}, dataActionHandlers), actionHandlers), _objectSpread2(_objectSpread2({}, events$l), eventHandlers), component_info);
      return _this.ddEvent;
    };

    _this.props = props; // ensure array

    var _data = [];

    var _schema = props.data.schema || _this.props.schema || schema_with_ids; // expect ids


    if (props.data) {
      // make sure we have at least a data property
      if (!props.data.items) {
        throw "Expecting data property in data object";
      }

      if (Array.isArray(props.data.items)) {
        _data = props.data.items;
      } else {
        // check if this is an empty object
        if (_typeof(props.data.items) == 'object') {
          // objects should not be empty
          if (props.data.items.length) {
            _data = [props.data.items];
          }
        } else {
          _data = [props.data.items];
        }
      }
    } // apply default values


    _this.state = {
      schema: _schema,
      data: _data || [],
      selectedIndex: 0,
      selectedId: null
    };
    return _this;
  }

  return _createClass(StateSchemaList);
}(StateList);
var ListSchemaBase = /*#__PURE__*/function (_StateBaseComponent) {
  _inherits(ListSchemaBase, _StateBaseComponent);

  var _super2 = _createSuper(ListSchemaBase);

  /**
   * Used to manage internal state of avatars
   */
  function ListSchemaBase(props) {
    var _this2;

    _classCallCheck(this, ListSchemaBase);

    if (!props.config.options) {
      props.config.options = {};
    }

    _this2 = _super2.call(this, props);

    _this2.updateData = function (change, object_id, silent) {
      //const change_row_idx = this.findItemIndexById(object_id.id, this.state.data);
      // console.info(change_row_idx);
      // do the update 


      _this2.triggerAction('push', [change]); // this.state.data[change_row_idx] = mergeDeep (this.state.data[change_row_idx], change)

    };

    _this2.updateView = function (action, arr, updated, data) {
      // extend by parent
      return true;
    };

    _this2.exceptionCatched = function (action_name, event_object) {
      debugger;
      console.info("ListBase: " + action_name + " --> ", event_object);
    };

    _this2.findItemIndexById = function (id, data) {
      if (_this2.stateManager) {
        return _this2.stateManager.findItemIndexById(id, data);
      }
    };

    _this2.getData = function () {
      return _this2.state.data;
    };

    _this2.showSelectedRow = function (row) {
      if (_this2.props.config.options.select) {
        return row.selected;
      }

      return false;
    };

    _this2.showSelected = function (id, idx) {
      // parent implementation to update the visual representation
      return true; // returns true to update state. Else do not update state.
    };

    _this2.setSelectedId = function (id, evt, selected) {
      // EventManager.getInstance().addAction(this.props.id, 'select', { id: id });
      _this2.triggerAction('select', {
        id: id
      });
    };

    _this2.handleSelect = function (key, data, index, evt) {
      if (!evt) {
        _this2.setSelectedId(data.id, evt);
      }
    };

    _this2.props = props;
    return _this2;
  }

  _createClass(ListSchemaBase, [{
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return ListSchemaBase;
}(StateBaseComponent);

var events$k = events$l;
var triggers$k = triggers$l;
var options$h = {
  "id": "table",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "Table options",
  "x-layout": "component",
  "type": "object",
  "version": 0.1,
  "properties": {
    "_$data": {
      "title": "Data",
      "description": "Data properties displayed in table",
      "type": "string",
      "enum": [],
      "default": ""
    },
    "size": {
      "title": "Size",
      "description": "The height of the row",
      "type": "string",
      "enum": ['small', 'medium'],
      "default": "medium"
    },
    "select": {
      "title": "Select",
      "description": "Shows selected rows highlighted",
      "type": "boolean",
      "default": false
    }
  },
  "required": ["size", "_$data", "select"]
};
var config$h = {
  name: "Table",
  type: "table",
  author: "Kjartan Jónsson",
  description: "Table component",
  version: 0.1,
  relation: {
    contains: [],
    within: "component" // parent

  },
  options: options$h,
  state: StateSchemaList
}; // https://mui.com/material-ui/api/table-row/#css

var style$d = function style(theme) {
  return {
    root: {
      width: '100%'
    }
  };
};

var TableComponent = /*#__PURE__*/function (_ListSchemaBase) {
  _inherits(TableComponent, _ListSchemaBase);

  var _super = _createSuper(TableComponent);

  /**
   * Used to manage internal state of avatars
   */
  function TableComponent(props) {
    var _this;

    _classCallCheck(this, TableComponent);

    _this = _super.call(this, props);

    _this.getSchemaColumns = function (schema) {
      var columns = [];

      if (!schema) {
        schema = {};
      }

      if (!schema.properties) {
        schema.properties = {};
      }

      for (var prop_name in schema.properties) {
        var prop = schema.properties[prop_name];
        var format = undefined; // by default treat everything as string

        if (prop['type'] === 'number') {
          format = function format(value) {
            return value;
          };
        } // FIXME: local locale


        if (prop['format'] === 'date') {
          format = function format(value) {
            return value;
          };
        } // FIXME: handle date 


        if (prop['type'] === 'date-time') {
          format = function format(value) {
            return value;
          };
        } // FIXME: handle date-time


        var column = {
          id: prop_name,
          label: prop['title'] || prop_name,
          align: prop['type'] === 'number' ? 'right' : 'left',
          style: {
            minWidth: 170
          },
          format: format
        };
        var hidden = prop['readOnly'] === true && prop['writeOnly'] === true;

        if (!hidden) {
          columns.push(column);
        }
      }

      return columns;
    };

    _this.handleEventOnChange = function (evt, newValue, oldValue) {
      _this.handleSelect(newValue, {
        id: newValue.id
      }, -1);
    };

    _this.handleRowSelect = function (key, row, row_index, evt) {
      _this.setSelectedId(key);
    };

    _this.renderTableRowCell = function (column, row, row_index) {
      var value = row[column.id];
      return /*#__PURE__*/React__default["default"].createElement(TableCell__default["default"], {
        key: column.id + '-' + row_index,
        align: column.align
      }, column.format ? column.format(value) : value);
    };

    if (!props.config.options) {
      props.config.options = {
        size: options$h.properties.size.default,
        select: options$h.properties.select.default
      };
    }

    return _this;
  }

  _createClass(TableComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      var key = "id";
      var columns = this.getSchemaColumns(this.state.schema);
      var rows = this.state.data; // render table

      return /*#__PURE__*/React__default["default"].createElement(TableContainer__default["default"], null, /*#__PURE__*/React__default["default"].createElement(Table__default["default"], {
        className: classes.table,
        size: this.props.config.options.size
      }, /*#__PURE__*/React__default["default"].createElement(TableHead__default["default"], null, /*#__PURE__*/React__default["default"].createElement(TableRow__default["default"], null, columns.map(function (column, idx) {
        return /*#__PURE__*/React__default["default"].createElement(TableCell__default["default"], {
          key: column.id,
          align: column.align,
          style: {
            minWidth: column.style.minWidth,
            textAlign: column.align
          }
        }, column.label);
      }))), /*#__PURE__*/React__default["default"].createElement(TableBody__default["default"], null, rows.map(function (row, row_index) {
        //this.state.data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, row_index) => {
        return /*#__PURE__*/React__default["default"].createElement(TableRow__default["default"], {
          hover: true,
          selected: _this2.showSelectedRow(row),
          tabIndex: -1,
          key: row[key],
          onClick: function onClick(evt) {
            return _this2.handleRowSelect(row[key], row, row_index, evt);
          }
        }, columns.map(function (column) {
          return _this2.renderTableRowCell(column, row, row_index);
        }));
      }))));
    }
  }]);

  return TableComponent;
}(ListSchemaBase);

var TableComponent$1 = styles.withStyles(style$d, {
  withTheme: true
})(TableComponent);

var events$j = events$l;
var triggers$j = triggers$l;
var options$g = {
  "id": "datagrid",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "Data Grid options",
  "x-layout": "component",
  "type": "object",
  "version": 0.1,
  "properties": {
    "schema": {
      "title": "Schema",
      "description": "Schema properties displayed in table",
      "type": "string",
      "enum": [],
      "default": ""
    },
    "size": {
      "title": "Size",
      "description": "The height of the row",
      "type": "string",
      "enum": ['small', 'medium'],
      "default": "medium"
    },
    "select": {
      "title": "Select",
      "description": "Shows selected rows highlighted",
      "type": "boolean",
      "default": false
    }
  },
  "required": ["size", "schema", "select"]
};
var config$g = {
  name: "DataGrid",
  type: "datagrid",
  author: "Kjartan Jónsson",
  description: "Data Grid component",
  version: 0.1,
  relation: {
    contains: [],
    within: "component" // parent

  },
  options: options$g,
  state: StateSchemaList
}; // https://mui.com/material-ui/api/table-row/#css

var style$c = function style(theme) {
  return {
    root: {
      width: '100%'
    }
  };
};

var DataGridComponent = /*#__PURE__*/function (_ListSchemaBase) {
  _inherits(DataGridComponent, _ListSchemaBase);

  var _super = _createSuper(DataGridComponent);

  /**
   * Used to manage internal state of avatars
   */
  function DataGridComponent(props) {
    var _this;

    _classCallCheck(this, DataGridComponent);

    _this = _super.call(this, props);

    _this.getSchemaColumns = function (schema) {
      var columns = [];

      if (!schema) {
        schema = {};
      }

      if (!schema.properties) {
        schema.properties = {};
      }

      for (var prop_name in schema.properties) {
        var prop = schema.properties[prop_name];

        if (prop['type'] === 'number') ; // FIXME: local locale


        if (prop['format'] === 'date') ; // FIXME: handle date 


        if (prop['type'] === 'date-time') ; // FIXME: handle date-time


        var column = {
          field: prop_name,
          headerName: prop['title'] || prop_name,
          // align: prop['type'] === 'number' ? 'right' : 'left',
          // width: 150,
          description: prop['description'] || undefined,
          sortable: false,
          editable: true
        };
        var hidden = prop['readOnly'] === true && prop['writeOnly'] === true;

        if (!hidden) {
          columns.push(column);
        }
      }

      return columns;
    };

    _this.handleEventOnChange = function (newValue, evt, oldValue) {
      var change = {
        id: newValue.id
      };
      change[newValue.field] = newValue.value;

      _this.updateData(change, change, true);
    };

    _this.updateView = function (action, obj, idxs) {
      if (action === "select") {
        if (_this._ref) {
          _this._ref.selectRow(1);
        }

        return true;
      }
    };

    if (!props.config.options) {
      props.config.options = {
        size: options$g.properties.size.default,
        select: options$g.properties.select.default
      };
    }

    return _this;
  }

  _createClass(DataGridComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      this.props.classes;
      var columns = this.getSchemaColumns(this.state.schema);

      return /*#__PURE__*/React__default["default"].createElement("div", {
        style: {
          height: 400,
          width: '100%'
        }
      }, /*#__PURE__*/React__default["default"].createElement(xDataGrid.DataGrid, {
        rows: this.state.data,
        columns: columns,
        pageSize: 5,
        rowsPerPageOptions: [5] // onRowClick={this.handleRowSelect}
        // onRowEditCommit={this.handleRowSelect}
        ,
        selectionChange: this.handleRowSelect,
        onCellEditCommit: this.handleEventOnChange,
        editMode: "cell",
        checkboxSelection: true,
        disableSelectionOnClick: true,
        ref: function ref(instance) {
          _this2._ref = instance;
        }
      }));
    }
  }]);

  return DataGridComponent;
}(ListSchemaBase);

var DataGridComponent$1 = styles.withStyles(style$c, {
  withTheme: true
})(DataGridComponent);

function Table(props) {
  // lets enumerate schema to extract uiSchema and validation
  return /*#__PURE__*/React__default["default"].createElement(TableComponent$1, props);
}
function registerTable(component_manager) {
  // self register component to layout manager
  component_manager.registerComponent({
    component: Table,
    type: config$h.type,
    events: events$k,
    triggers: triggers$k,
    config: config$h
  });
}
function DataGrid(props) {
  // lets enumerate schema to extract uiSchema and validation
  return /*#__PURE__*/React__default["default"].createElement(DataGridComponent$1, props);
}
function registerDataGrid(component_manager) {
  // self register component to layout manager
  component_manager.registerComponent({
    component: DataGrid,
    type: config$g.type,
    events: events$j,
    triggers: triggers$j,
    config: config$g
  });
}

var events$i = events$q;
var triggers$i = triggers$q;
var options$f = {
  "id": "texts",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Texts",
  "description": "Texts section options",
  "x-layout": "component",
  "type": "object",
  "version": 0.1,
  "properties": {
    "color": {
      "title": "color",
      "description": "color",
      "type": "string",
      "enum": ['initial', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary', 'error'],
      "default": "primary"
    }
  },
  "required": ["color"]
};
var item$7 = {
  "id": "text",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Text",
  "description": "Text",
  "x-layout": "component-item",
  "type": "object",
  "version": 0.1,
  "properties": {
    "id": {
      "description": "identifier",
      "type": "string",
      "readOnly": false,
      "writeOnly": false
    },
    "typography": {
      "description": "Typography",
      "type": "string",
      "enum": ["heading", "section", "part", "chapters", "title", "subtitle", "caption", "subtitle", "description", "text"],
      "default": "text"
    },
    "text": {
      "description": "text",
      "type": "string",
      "default": ""
    }
  },
  "required": ["typography", "text"]
};
var config$f = {
  name: "Texts",
  type: "texts",
  author: "Kjartan Jónsson",
  description: "Texts component",
  version: 0.1,
  relation: {
    contains: ["text"],
    within: "component" // parent

  },
  options: options$f,
  contains: {
    "text": item$7
  },
  state: StateList
};

var style$b = function style(theme) {
  return {};
};

var TextComponent = /*#__PURE__*/function (_ListBase) {
  _inherits(TextComponent, _ListBase);

  var _super = _createSuper(TextComponent);

  function TextComponent(props) {
    var _this;

    _classCallCheck(this, TextComponent);

    if (!props.config.options) {
      props.config.options = {};
    }

    _this = _super.call(this, props);
    /*
    heading = h1
      section = h2
        part = h3
          chapters = h4
            title = h5
              subtitle = h6
                caption = subtitle
                  subtitle = subtitle2
                    description = body1
                      text = body2
    */

    _this.configs = {
      heading: {
        variant: 'h1',
        component: 'h1'
      },
      section: {
        variant: 'h2',
        component: 'h2'
      },
      part: {
        variant: 'h3',
        component: 'h3'
      },
      chapter: {
        variant: 'h4',
        component: 'h4'
      },
      title: {
        variant: 'h5',
        component: 'h5'
      },
      subtitle: {
        variant: 'h6',
        component: 'h6'
      },
      caption: {
        variant: 'subtitle',
        component: 'p'
      },
      summary: {
        variant: 'subtitle2',
        component: 'p'
      },
      description: {
        variant: 'body1',
        component: 'p'
      },
      text: {
        variant: 'body2',
        component: 'p'
      }
    };
    return _this;
  }

  _createClass(TextComponent, [{
    key: "getText",
    value: function getText(itm) {
      return itm.text || '--missing text--';
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, this.state.data.map(function (itm, idx) {
        var config = _this2.configs[itm.typography || 'text'];
        return /*#__PURE__*/React__default["default"].createElement(Typography__default["default"], {
          key: _this2.props.id + idx,
          variant: config.variant,
          color: _this2.props.config.options.color,
          component: config.component
        }, _this2.getText(itm));
      }));
    }
  }]);

  return TextComponent;
}(ListBase);

var TextComponent$1 = styles.withStyles(style$b, {
  withTheme: true
})(TextComponent);
/*
const input_schema = {
  "$id": "https://example.com/address.schema.json",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "Text Component",
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "typography": {
      "type": "string" // one of
    },
    "text": {
      "type": "string"
    }
  }
}
*/

function Text(props) {
  // lets enumerate schema to extract uiSchema and validation
  return /*#__PURE__*/React__default["default"].createElement(TextComponent$1, props);
} ////////////////////////////////////////////////

function registerText(component_manager) {
  // self register component to layout manager
  component_manager.registerComponent({
    component: Text,
    type: config$f.type,
    events: events$i,
    triggers: triggers$i,
    config: config$f
  });
}

var events$h = events$q;
var triggers$h = triggers$q;
var options$e = {
  "id": "images",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "Image options",
  "x-layout": "component",
  "type": "object",
  "version": 0.1,
  "properties": {},
  "required": []
};
var item$6 = {
  "id": "image",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Image",
  "description": "Image option",
  "x-layout": "component-item",
  "type": "object",
  "version": 0.1,
  "properties": {
    "id": {
      "description": "identifier",
      "type": "string",
      "readOnly": false,
      "writeOnly": false
    },
    "url": {
      "description": "URL to image",
      "type": "string",
      "default": ""
    },
    "title": {
      "description": "Title of the image when missing or hovering",
      "type": "string",
      "default": ""
    },
    "cols": {
      "description": "Column",
      "type": "integer",
      "default": 1,
      "minimum": 1,
      "maximum": 3
    }
  },
  "required": ["title"]
};
var config$e = {
  name: "Images",
  type: "images",
  author: "Kjartan Jónsson",
  description: "Image component",
  version: 0.1,
  relation: {
    contains: ["image"],
    within: "component" // parent

  },
  contains: {
    "image": item$6
  },
  options: options$e,
  state: StateList
};

var style$a = function style(theme) {
  return {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden'
    },
    imageList: {
      width: 500,
      height: 450
    }
  };
};

var ImageComponent = /*#__PURE__*/function (_ListBase) {
  _inherits(ImageComponent, _ListBase);

  var _super = _createSuper(ImageComponent);

  function ImageComponent() {
    _classCallCheck(this, ImageComponent);

    return _super.apply(this, arguments);
  }

  _createClass(ImageComponent, [{
    key: "render",
    value: function render() {
      var classes = style$a;
      return /*#__PURE__*/React__default["default"].createElement("div", {
        className: classes.root
      }, /*#__PURE__*/React__default["default"].createElement(ImageList__default["default"], {
        rowHeight: 360,
        className: classes.imageList,
        cols: 3
      }, this.state.data.map(function (item) {
        return /*#__PURE__*/React__default["default"].createElement(ImageListItem__default["default"], {
          key: item.url,
          cols: item.cols || 1
        }, /*#__PURE__*/React__default["default"].createElement("img", {
          src: item.url,
          alt: item.title
        }));
      })));
    }
  }]);

  return ImageComponent;
}(ListBase);

var ImageComponent$1 = styles.withStyles(style$a, {
  withTheme: true
})(ImageComponent);

function Image(props) {
  // lets enumerate schema to extract uiSchema and validation
  return /*#__PURE__*/React__default["default"].createElement(ImageComponent$1, props);
} ////////////////////////////////////////////////

function registerImage(component_manager) {
  // self register component to layout manager
  component_manager.registerComponent({
    component: Image,
    type: config$e.type,
    events: events$h,
    triggers: triggers$h,
    config: config$e
  });
}

var events$g = {
  changed: {
    alias: [],
    info: {
      name: 'Changed',
      description: 'Input value changed'
    },
    schema: {}
  },
  enabled: {
    alias: [],
    info: {
      name: 'Enabled',
      description: 'Enabled input'
    },
    schema: {}
  },
  disabled: {
    alias: [],
    info: {
      name: 'Disabled',
      description: 'Disabled input'
    },
    schema: {}
  },
  submitted: {
    alias: [],
    info: {
      name: 'Submitted',
      description: 'Submitted value'
    },
    schema: {}
  },
  cleared: {
    alias: [],
    info: {
      name: 'Cleared',
      description: 'Cleared value'
    },
    schema: {}
  },
  populated: {
    alias: [],
    info: {
      name: 'Populated',
      description: 'Populated value'
    },
    schema: {}
  },
  replaced: {
    alias: [],
    info: {
      name: 'Replaced',
      description: 'Replaced value'
    },
    schema: {}
  },
  invalidated: {
    alias: [],
    info: {
      name: 'In-validated',
      description: 'Unselecting item'
    },
    schema: {}
  },
  validated: {
    alias: [],
    info: {
      name: 'De-Selected',
      description: 'Unselecting item'
    },
    schema: {}
  }
};
var triggers$g = {
  submit: {
    info: {
      name: 'Submit',
      description: 'Submits the form data'
    },
    schema: {},
    alias: []
  },
  enable: {
    info: {
      name: 'Enables',
      description: 'Enables the form so that we can change form inputs'
    },
    schema: {},
    alias: []
  },
  disable: {
    info: {
      name: 'Disable',
      description: 'Disables the form so that we can not change input value'
    },
    schema: {},
    alias: []
  },
  // change: { info: { name: 'Change', description: 'Changes' }, schema: {}, alias: [] },
  clear: {
    info: {
      name: 'Clear',
      description: 'Removes all input values clearing the form'
    },
    schema: {},
    alias: []
  },
  populate: {
    info: {
      name: 'Populate',
      description: 'Fills the form with specified data'
    },
    schema: {},
    alias: []
  },
  replace: {
    info: {
      name: 'Replace',
      description: 'Replaces the form with specified data'
    },
    schema: {},
    alias: []
  }
};
var StateInput = /*#__PURE__*/function (_StateInstance) {
  _inherits(StateInput, _StateInstance);

  var _super = _createSuper(StateInput);

  function StateInput(props) {
    var _this;

    _classCallCheck(this, StateInput);

    _this = _super.call(this, props);

    _this.registerComponent = function (actionHandlers, eventHandlers, component_info) {
      var self = _assertThisInitialized(_this);

      actionHandlers = actionHandlers || {};
      eventHandlers = eventHandlers || {}; // add our known handlers
      // register componenet overiding or adding new event handlers

      var dataActionHandlers = {
        submit: {
          schema: {},
          handler: function handler(obj) {
            EventManager.getInstance().addEvent(_this.props.id, 'submitting', obj, null);

            _this.getActionState('submit', function (change) {
              var update = self.alterState(change);
              EventManager.getInstance().addEvent(self.props.id, 'submitted', update.data, null);
            });
          }
        },
        enable: {
          schema: {},
          handler: function handler(obj) {
            var change = {
              disabled: false
            };
            self.alterState(change);

            if (_this.updateView("enable", obj, obj, _this.state.data)) {
              EventManager.getInstance().addEvent(_this.props.id, 'enabled', change, null);
            }
          }
        },
        disable: {
          schema: {},
          handler: function handler(obj) {
            var change = {
              disabled: true
            };
            self.alterState(change);

            if (_this.updateView("disable", obj, obj, _this.state.data)) {
              EventManager.getInstance().addEvent(_this.props.id, 'disabled', change, null);
            }
          }
        },
        clear: {
          schema: {},
          handler: function handler(obj) {
            var change = {
              data: {
                value: ""
              }
            }; //getSchemaDefaults(this.state.data.schema || this.state.schema);

            var update = self.alterState(change);
            EventManager.getInstance().addEvent(_this.props.id, 'clearing', change, {});

            if (_this.updateView("clear", obj, obj, update)) {
              EventManager.getInstance().addEvent(_this.props.id, 'cleared', update.data, null);
            }

            EventManager.getInstance().addEvent(_this.props.id, 'changed', update.data, null);
          }
        },
        populate: {
          schema: {},
          handler: function handler(obj) {
            var change = {
              data: {
                value: obj.value,
                id: obj.id
              }
            };
            self.alterState(change);

            if (_this.updateView("populate", obj, obj, _this.state.data)) {
              EventManager.getInstance().addEvent(_this.props.id, 'populated', obj, null);
            }

            EventManager.getInstance().addEvent(_this.props.id, 'changed', obj, null);
          }
        },
        replace: {
          schema: {},
          handler: function handler(obj) {
            var replaced = _objectSpread2(_objectSpread2({}, _this.state), {}, {
              data: _objectSpread2(_objectSpread2({}, obj), {}, {
                id: obj.id,
                value: obj.value || _this.state.data.value,
                schema: obj.schema || _this.state.data.schema
              })
            });

            self.setState(replaced);

            if (_this.updateView("replace", obj, obj, _this.state.data)) {
              EventManager.getInstance().addEvent(_this.props.id, 'replaced', obj, null);
            }

            EventManager.getInstance().addEvent(_this.props.id, 'changed', obj, null);
          }
        }
      }; // register componenet overiding or adding new event handlers

      _this.ddEvent = EventManager.getInstance().register(_this.props.id, _objectSpread2(_objectSpread2({}, dataActionHandlers), actionHandlers), _objectSpread2(_objectSpread2({}, events$g), eventHandlers), component_info);
      return _this.ddEvent;
    };

    _this.props = props; // apply initial values

    _this.state = {
      data: {
        id: props.data.id || null,
        value: props.data.value,
        schema: props.data.schema || props.schema
      },
      enabled: (props.config || {}).enabled || true,
      schema: props.schema
    };
    return _this;
  }

  return _createClass(StateInput);
}(StateInstance);
var InputBase = /*#__PURE__*/function (_StateBaseComponent) {
  _inherits(InputBase, _StateBaseComponent);

  var _super2 = _createSuper(InputBase);

  /**
   * Used to manage internal state of avatars
   */
  function InputBase(props) {
    var _this2;

    _classCallCheck(this, InputBase);

    if (!props.config.options) {
      props.config.options = {};
    }

    _this2 = _super2.call(this, props);

    _this2.updateView = function (action, arr, updated, data) {
      // extend by parent
      return true;
    };

    _this2.props = props;
    return _this2;
  }

  _createClass(InputBase, [{
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return InputBase;
}(StateBaseComponent);

var events$f = events$g;
var triggers$f = triggers$g;
var options$d = {
  "id": "textfield",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Textfield",
  "description": "Textfield options",
  "x-layout": "component",
  "type": "object",
  "version": 0.1,
  "properties": {
    "variant": {
      "title": "variant",
      "description": "variant",
      "type": "string",
      "enum": ['standard', 'outlined', 'filled'],
      "default": "standard"
    },
    "color": {
      "title": "color",
      "description": "color",
      "type": "string",
      "enum": ['initial', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary', 'error'],
      "default": "primary"
    },
    "label": {
      "title": "label",
      "description": "label",
      "type": "string",
      "default": "Label text"
    },
    "placeholder": {
      "title": "Placeholder",
      "description": "placeholder",
      "type": "string",
      "default": ""
    }
  },
  "required": ["buttonVariant", "color"]
};
var config$d = {
  name: "Textfield",
  type: "textfield",
  author: "Kjartan Jónsson",
  description: "Text input component",
  version: 0.1,
  relation: {
    contains: [],
    within: "component" // parent

  },
  options: options$d,
  state: StateInput
};

var style$9 = function style(theme) {
  return {// https://material-ui.com/styles/basics/
  };
};

var TextfieldComponent = /*#__PURE__*/function (_InputBase) {
  _inherits(TextfieldComponent, _InputBase);

  var _super = _createSuper(TextfieldComponent);

  /**
   * Used to manage internal state of avatars
   */
  function TextfieldComponent(props) {
    var _this;

    _classCallCheck(this, TextfieldComponent);

    _this = _super.call(this, props);

    _this.updateView = function (action, val, updated, data) {
      // extend by parent
      if (this.input_ref) {
        if (action === 'enable') {
          this.input_ref.disabled = false;
        }

        if (action === 'disable') {
          this.input_ref.disabled = true;
        }

        if (action === 'populate') {
          this.input_ref.value = val.value;
        }

        if (action === 'clear') {
          this.input_ref.value = "";
        }
      }

      return true;
    };

    _this.getUISchema = function (schema) {
      // enumerates schema and extracts uiSchema from ui-schema keywords
      // TODO: make this recursive for sub propertis
      var propAttributes = ["enumNames", "minLength", "maxLength"];
      var uiSchema = {};

      if (!schema) {
        schema = {};
      }

      if (!schema.properties) {
        schema.properties = {};
      }

      for (var prop in schema.properties) {
        for (var attr in schema.properties[prop]) {
          if (attr === "edit") {
            // rename this attribute to ui:options
            uiSchema[prop] = {};

            for (var p in schema.properties[prop][attr]) {
              uiSchema[prop]["ui:" + p] = schema.properties[prop][attr][p];
            }

            for (var i in propAttributes) {
              var move_attr = propAttributes[i];

              if (schema.properties[prop][attr][move_attr]) {
                schema.properties[prop][move_attr] = schema.properties[prop][attr][move_attr];
              }
            }
          }
        }
      }

      return uiSchema;
    };

    _this.onChanged = function (evt) {
      // schema: formatData (only if valid)
      EventManager.getInstance().addEvent(_this.props.id, "changed", {
        value: evt.target.value
      }, evt);
    };

    _this.onKeyUp = function (evt) {
      if (evt.key === "Enter") {
        EventManager.getInstance().addEvent(_this.props.id, "submitted", {
          value: evt.target.value
        }, evt);
      }
    };

    _this.input_ref = null;
    return _this;
  }

  _createClass(TextfieldComponent, [{
    key: "getActionState",
    value: function getActionState(action, callback) {
      if (this.input_ref) {
        if (action === 'submit') {
          callback({
            data: {
              value: this.input_ref.value
            }
          });
        } else {
          callback();
        }
      } else {
        callback();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      this.OnInvalid; // forward custom uiSchema if defined

      if (this.props.uiSchema) {
        this.props.uiSchema;
      } else {
        this.getUISchema(this.props.schema);
      }

      return /*#__PURE__*/React__default["default"].createElement(TextField__default["default"], {
        id: this.props.id,
        onChange: this.onChanged,
        onKeyUp: this.onKeyUp,
        type: "text",
        fullWidth: true,
        variant: this.props.config.options.variant,
        placeholder: this.props.config.options.placeholder,
        inputRef: function inputRef(instance) {
          _this2.input_ref = instance;
        }
      });
    }
  }]);

  return TextfieldComponent;
}(InputBase);

var TextfieldComponent$1 = styles.withStyles(style$9, {
  withTheme: true
})(TextfieldComponent);

var events$e = events$q;
var triggers$e = triggers$q;
var options$c = {
  "id": "checkboxes",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Checkboxes",
  "description": "Checkbox options",
  "x-layout": "component",
  "type": "object",
  "version": 0.1,
  "properties": {
    "iconIsSelected": {
      "title": "iconIsSelected",
      "description": "iconIsSelected",
      "type": "string",
      "default": "material-ui:Star"
    },
    "iconUnSelected": {
      "title": "iconUnSelected",
      "description": "iconUnSelected",
      "type": "string",
      "default": "material-ui:StarOutline"
    },
    "labelPlacement": {
      "title": "labelPlacement",
      "description": "labelPlacement",
      "type": "string",
      "enum": ["bottom", "end", "start", "top"],
      "default": "bottom"
    },
    "size": {
      "title": "size",
      "description": "size",
      "type": "string",
      "enum": ['small', 'large', 'medium'],
      "default": "medium"
    },
    "color": {
      "title": "color",
      "description": "color",
      "type": "string",
      "enum": ['initial', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary', 'error'],
      "default": "primary"
    },
    "direction": {
      "title": "direction",
      "description": "direction",
      "type": "string",
      "enum": ['row', 'row-reverse', 'column', 'column-reverse'],
      "default": "row"
    }
  },
  "required": ["iconIsSelected", "iconUnSelected", "labelPlacement", "size", "color", "direction"]
};
var item$5 = {
  "id": "checkbox",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Checkbox",
  "description": "Checkbox item",
  "x-layout": "component-item",
  "type": "object",
  "version": 0.1,
  "properties": {
    "id": {
      "description": "identifier",
      "type": "string",
      "readOnly": false,
      "writeOnly": false
    },
    "title": {
      "description": "title",
      "type": "string",
      "default": "Checkbox"
    },
    "selected": {
      "description": "Selected",
      "type": "boolean",
      "default": false
    }
  },
  "required": []
};
var config$c = {
  name: "Checkboxes",
  type: "checkboxes",
  author: "Kjartan Jónsson",
  description: "Checkbox component",
  version: 0.1,
  relation: {
    contains: ["checkbox"],
    within: "component" // parent

  },
  options: options$c,
  contains: {
    "checkbox": item$5
  },
  state: StateList
};

var style$8 = function style(theme) {
  return {
    root: {
      justifyContent: 'center'
    }
  };
};

var CheckboxComponent = /*#__PURE__*/function (_ListBase) {
  _inherits(CheckboxComponent, _ListBase);

  var _super = _createSuper(CheckboxComponent);

  function CheckboxComponent() {
    var _this;

    _classCallCheck(this, CheckboxComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_this = _super.call.apply(_super, [this].concat(args)), _this.handleSelect = function (item, idx, evt) {
      _this.setSelectedId(item.id, evt, !item.selected);
    }, _this.renderFormLabel = function (legend_text) {
      if (legend_text) {
        return /*#__PURE__*/React__default["default"].createElement(FormLabel__default["default"], {
          component: "legend"
        }, legend_text);
      }
    }, _this.renderFormHelperText = function (helper_text) {
      if (helper_text) {
        return /*#__PURE__*/React__default["default"].createElement(FormHelperText__default["default"], null, helper_text);
      }
    }, _this.updateView = function (action, arr, updated, data) {
      // extend by parent
      if (action === 'select') {
        this.setState(data);
      }

      return true;
    }, _assertThisInitialized(_this)));
  }

  _createClass(CheckboxComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          classes = _this$props.classes,
          config = _this$props.config; // defaults

      var options = _objectSpread2(_objectSpread2({}, {
        direction: 'column',
        size: undefined,
        color: "secondary",
        labelPlacement: "start",
        iconIsSelected: undefined,
        iconUnSelected: undefined
      }), config.options);

      var helper_text = '';
      var legend_text = '';
      var error = '';
      var iconIsSelected = undefined;
      var iconUnSelected = undefined; // TODO: use other pallet instead of this hack

      if (options.color.includes("text")) {
        options.color = options.color.replace("text", "").toLowerCase();
      } // If icons are use lets look them up


      if (options.iconIsSelected) {
        iconIsSelected = getIcon(options.iconIsSelected);
      }

      if (options.iconUnSelected) {
        iconUnSelected = getIcon(options.iconUnSelected);
      } // should we display error text

      return /*#__PURE__*/React__default["default"].createElement(FormControl__default["default"], {
        required: true,
        error: error !== '',
        component: "fieldset",
        className: classes.formControl
      }, this.renderFormLabel(legend_text), /*#__PURE__*/React__default["default"].createElement(FormGroup__default["default"], {
        style: {
          justifyContent: 'center'
        },
        row: options.direction.includes('row')
      }, this.state.data.map(function (itm, idx) {
        return /*#__PURE__*/React__default["default"].createElement(FormControlLabel__default["default"], {
          labelPlacement: options.labelPlacement,
          key: "form-control-label-" + itm.id,
          control: /*#__PURE__*/React__default["default"].createElement(Checkbox__default["default"], {
            key: itm.id,
            onChange: function onChange(event) {
              return _this2.handleSelect(itm, idx, event);
            },
            name: itm.id,
            color: options.color,
            size: options.size,
            disabled: itm.disabled || false,
            icon: iconUnSelected,
            checkedIcon: iconIsSelected
          }),
          checked: itm.selected,
          label: itm.title
        });
      })), this.renderFormHelperText(helper_text));
    }
  }]);

  return CheckboxComponent;
}(ListBase);

var CheckboxComponent$1 = styles.withStyles(style$8, {
  withTheme: true
})(CheckboxComponent);

function Textfield(props) {
  // lets enumerate schema to extract uiSchema and validation
  return /*#__PURE__*/React__default["default"].createElement(TextfieldComponent$1, props);
}
function Checkbox(props) {
  // lets enumerate schema to extract uiSchema and validation
  return /*#__PURE__*/React__default["default"].createElement(CheckboxComponent$1, props);
}
function registerTextfield(component_manager) {
  // self register component to layout manager
  component_manager.registerComponent({
    component: Textfield,
    type: config$d.type,
    events: events$f,
    triggers: triggers$f,
    config: config$d
  });
}
function registerCheckbox(component_manager) {
  // self register component to layout manager
  component_manager.registerComponent({
    component: Checkbox,
    type: config$c.type,
    events: events$e,
    triggers: triggers$e,
    config: config$c
  });
}

var _excluded = ["children", "classes", "onClose"];
var triggers$d = {
  show: {
    alias: [],
    info: {
      name: 'Show',
      description: 'Show dialog'
    },
    schema: {}
  },
  close: {
    alias: [],
    info: {
      name: 'Close',
      description: 'Close dialog'
    },
    schema: {}
  }
};
var events$d = {
  showing: {
    alias: [],
    info: {
      name: 'Showing',
      description: 'Showing Dialog'
    },
    schema: {}
  },
  closed: {
    alias: [],
    info: {
      name: 'Closed',
      description: 'Closed Dialog'
    },
    schema: {}
  },
  confirmed: {
    alias: [],
    info: {
      name: 'Confirmed',
      description: 'User confirmed action'
    },
    schema: {}
  }
};
var options$b = {
  "id": "dialog",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "Dialog options",
  "x-layout": "component",
  "type": "object",
  "version": 0.1,
  "properties": {
    "modalType": {
      "title": "modalType",
      "description": "modalType",
      "type": "string",
      "enum": ["alert", "dialog", "modal"],
      "default": 1
    }
  },
  "required": ["modalType"]
};
var config$b = {
  name: "Dialog",
  type: "dialog",
  author: "Kjartan Jónsson",
  description: "Dialog component",
  version: 0.1,
  relation: {
    contains: [],
    within: "component" // parent

  },
  options: options$b
};

var modalStyles = function modalStyles(theme) {
  return {
    root: {},
    closeButton: {
      position: 'absolute',
      color: theme.palette.grey[500]
    }
  };
};

var DialogTitleClosable = styles.withStyles(modalStyles)(function (props) {
  var children = props.children,
      classes = props.classes,
      onClose = props.onClose,
      other = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/React__default["default"].createElement(MuiDialogTitle__default["default"], _extends({
    disableTypography: true,
    className: classes.root
  }, other), /*#__PURE__*/React__default["default"].createElement(Typography__default["default"], {
    variant: "h6"
  }, children), onClose ? /*#__PURE__*/React__default["default"].createElement(IconButton__default["default"], {
    "aria-label": "close",
    className: classes.closeButton,
    onClick: onClose
  }, /*#__PURE__*/React__default["default"].createElement(CloseIcon__default["default"], null)) : null);
});

function DialogRender(id, data, classes, config_render, open, setOpen, modal_body) {
  if (!config_render.options) {
    config_render.options = {};
  }

  config_render.options.modalType = config_render.options.modalType || 'alert';
  config_render.options.labelCancel = config_render.options.labelCancel || 'Cancel'; // default cancel button label is cancel

  var handleClose = function handleClose(opt) {
    setOpen(false);
    EventManager.getInstance().addEvent(id, 'closed', opt || {}, {});

    if (opt && opt.confirm) {
      EventManager.getInstance().addEvent(id, 'confirmed', opt || {}, {});
    }
  };

  var handleDone = function handleDone() {
    handleClose();
  };

  if (config_render.options.modalType === 'modal') {
    // A Modal is a mode of a UI (commonly that of a Dialog Box) that makes the user's response a requirement. 
    // In other words, the user is required to choose an action and there is no option to ignore or dismiss the message.
    return /*#__PURE__*/React__default["default"].createElement(Dialog__default["default"], {
      open: open,
      "aria-labelledby": "form-dialog-title",
      "aria-describedby": "form-dialog-description"
    }, /*#__PURE__*/React__default["default"].createElement(MuiDialogTitle__default["default"], null, data.title), /*#__PURE__*/React__default["default"].createElement(DialogContent__default["default"], null, modal_body), /*#__PURE__*/React__default["default"].createElement(DialogActions__default["default"], null, /*#__PURE__*/React__default["default"].createElement(Button__default["default"], {
      onClick: handleDone,
      color: "primary",
      autoFocus: true
    }, data.label)));
  } else if (config_render.options.modalType === 'dialog') {
    // A Dialog or Dialog Box is a type of UI that speaks to the user and requests for the user's response. 
    // User could opt to ignore or dismiss the message.
    var _DialogTitle = DialogTitleClosable;
    return /*#__PURE__*/React__default["default"].createElement(Dialog__default["default"], {
      open: open,
      onClose: handleClose,
      "aria-labelledby": "form-dialog-title",
      "aria-describedby": "form-dialog-description"
    }, /*#__PURE__*/React__default["default"].createElement(_DialogTitle, null, data.title), /*#__PURE__*/React__default["default"].createElement(DialogContent__default["default"], null, /*#__PURE__*/React__default["default"].createElement(DialogContentText__default["default"], {
      id: "alert-dialog-description"
    }, data.description), modal_body), /*#__PURE__*/React__default["default"].createElement(DialogActions__default["default"], null, /*#__PURE__*/React__default["default"].createElement(Button__default["default"], {
      onClick: function onClick() {
        handleClose({
          'confirm': true
        });
      },
      color: "primary",
      autoFocus: true
    }, data.label)));
  } else if (config_render.options.modalType === 'confirm') {
    // A Dialog box with yes or no option 
    // User could opt to ignore or dismiss the message.
    var _DialogTitle2 = DialogTitleClosable;
    return /*#__PURE__*/React__default["default"].createElement(Dialog__default["default"], {
      open: open,
      onClose: handleClose,
      "aria-labelledby": "form-dialog-title",
      "aria-describedby": "form-dialog-description"
    }, /*#__PURE__*/React__default["default"].createElement(_DialogTitle2, null, data.title), /*#__PURE__*/React__default["default"].createElement(DialogContent__default["default"], null, /*#__PURE__*/React__default["default"].createElement(DialogContentText__default["default"], {
      id: "alert-dialog-description"
    }, data.description), modal_body), /*#__PURE__*/React__default["default"].createElement(DialogActions__default["default"], null, /*#__PURE__*/React__default["default"].createElement(Button__default["default"], {
      onClick: function onClick() {
        handleClose({
          'confirm': false
        });
      },
      color: "secondary"
    }, config_render.options.labelCancel), /*#__PURE__*/React__default["default"].createElement(Button__default["default"], {
      onClick: function onClick() {
        handleClose({
          'confirm': true
        });
      },
      color: "primary",
      autoFocus: true
    }, data.label)));
  } else {
    // Alerts only contains text and and dismiss button
    var _DialogTitle3 = DialogTitleClosable;
    return /*#__PURE__*/React__default["default"].createElement(Dialog__default["default"], {
      open: open,
      onClose: handleClose,
      "aria-labelledby": "alert-dialog-title",
      "aria-describedby": "alert-dialog-description"
    }, /*#__PURE__*/React__default["default"].createElement(_DialogTitle3, {
      id: "alert-dialog-title"
    }, data.title), /*#__PURE__*/React__default["default"].createElement(DialogContent__default["default"], null, /*#__PURE__*/React__default["default"].createElement(DialogContentText__default["default"], {
      id: "alert-dialog-description"
    }, data.description), modal_body), /*#__PURE__*/React__default["default"].createElement(DialogActions__default["default"], null, /*#__PURE__*/React__default["default"].createElement(Button__default["default"], {
      onClick: handleClose,
      color: "primary",
      autoFocus: true
    }, data.label)));
  }
}

function DialogComponent(props) {
  // events
  var _React$useState = React__default["default"].useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var handleOpen = function handleOpen() {
    setOpen(true);
    setTimeout(function () {
      EventManager.getInstance().addEvent(props.id, 'showing', {}, {});
    }, 100); // add delay since dialog content is not ready
  };

  var handleClose = function handleClose() {
    setOpen(false);
    EventManager.getInstance().addEvent(props.id, 'closed', {}, {});
  }; // options


  var classes = {}; //useStyles();
  // register componenet

  EventManager.getInstance().register(props.id, {
    'show': {
      schema: {},
      handler: function handler(obj) {
        handleOpen();
      }
    },
    'close': {
      schema: {},
      handler: function handler(obj) {
        handleClose();
      }
    }
  }, {}, config$b);
  var body = null; // set defaults

  var dialogConfig = props.config || {}; // FIXME: SEE IF THIS CHANGED ANYTING -- config.options = props.config.options || {};
  // special case variants

  if (props.data.content) {
    body = renderContent(classes, props.data);
  }

  return DialogRender(props.id, props.data, classes, dialogConfig, open, setOpen, body);
}

var events$c = {
  // copy from DialogComponents
  showing: {
    alias: [],
    info: {
      name: 'Showing',
      description: 'Showing snackbar'
    },
    schema: {}
  },
  closed: {
    alias: [],
    info: {
      name: 'Closed',
      description: 'Closed snackbar'
    },
    schema: {}
  },
  closing: {
    alias: [],
    info: {
      name: 'Closing',
      description: 'Closing through user interaction'
    },
    schema: {}
  }
};
var triggers$c = {
  show: {
    alias: [],
    info: {
      name: 'Show',
      description: 'Shows snackbar'
    },
    schema: {}
  },
  close: {
    alias: [],
    info: {
      name: 'Close',
      description: 'Close snackbar'
    },
    schema: {}
  }
};
var options$a = {
  "id": "popup-toaster",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "Sortable Tree options",
  "x-layout": "component",
  "type": "object",
  "version": 0.1,
  "properties": {
    "severity": {
      "title": "Severity",
      "description": "Severity",
      "type": "string",
      "enum": ['error', 'warning', 'info', 'success'],
      "default": "info"
    },
    "duration": {
      "title": "Duration",
      "description": "Duration",
      "type": "number",
      "default": 6000
    },
    "vertical": {
      "title": "Vertical",
      "description": "Vertical",
      "type": "string",
      "enum": ['top', 'bottom'],
      "default": "top"
    },
    "horizontal": {
      "title": "Horizontal",
      "description": "Horizontal",
      "type": "string",
      "enum": ['left', 'center', 'right'],
      "default": "center"
    }
  },
  "required": ["severity", "color", "vertical", "horizontal"]
};
var config$a = {
  name: "Snackbar",
  type: "popup-toaster",
  author: "Kjartan Jónsson",
  description: "Snack bar component",
  version: 0.1,
  relation: {
    contains: [],
    within: "component" // parent

  },
  options: options$a
};

var style$7 = function style(theme) {
  return {
    root: {
      width: '100%'
    }
  };
};

function Alert(props) {
  return /*#__PURE__*/React__default["default"].createElement(MuiAlert__default["default"], _extends({
    elevation: 6
  }, props));
}

var SnackbarComponent = /*#__PURE__*/function (_Component) {
  _inherits(SnackbarComponent, _Component);

  var _super = _createSuper(SnackbarComponent);

  /**
   * Used to manage internal state of avatars
   */
  function SnackbarComponent(props) {
    var _this;

    _classCallCheck(this, SnackbarComponent);

    _this = _super.call(this, props);

    _this._getStateValues = function (open, obj) {
      return {
        vertical: _this.viewStyle.vertical || 'top',
        // top, bottom,
        horizontal: _this.viewStyle.horizontal || 'center',
        // left, center, right
        severity: obj.severity || _this.viewStyle.severity || 'info',
        // error, warning, info, success
        duration: obj.duration || _this.viewStyle.duration || 6000,
        variant: 'filled',
        // always use filled
        open: open
      };
    };

    _this.showSnackbar = function (obj, open) {
      var state = _this._getStateValues(open, obj);

      if (open) {
        state.message = obj.title || '!';

        _this.setState(state);

        EventManager.getInstance().addEvent(_this.props.id, _this.events['showing'].id, _objectSpread2({}, state), null);
      } else {
        _this.setState(_objectSpread2(_objectSpread2({}, _this.state), {
          open: open
        }));

        EventManager.getInstance().addEvent(_this.props.id, _this.events['closed'].id, _objectSpread2({}, state), null);
      }
    };

    _this.handleClose = function (evt, reason) {
      if (reason === 'clickaway') {
        return;
      }

      EventManager.getInstance().addEvent(_this.props.id, _this.events['closing'].id, _objectSpread2({}, _this.state), null);

      _this.showSnackbar(_this.state, false);
    };

    _this.props = props;
    _this.viewStyle = props.config.options || {};
    _this.state = _this._getStateValues(false, {}); // register componenet overiding or adding new event handlers

    _this.events = EventManager.getInstance().register(_this.props.id, {
      show: {
        schema: {},
        handler: function handler(obj) {
          _this.showSnackbar(obj, true);
        }
      },
      close: {
        schema: {},
        handler: function handler(obj) {
          _this.showSnackbar(obj, false);
        }
      }
    }, events$c, config$a);
    return _this;
  }

  _createClass(SnackbarComponent, [{
    key: "render",
    value: function render() {
      var key = this.state.vertical + this.state.horizontal;
      this.viewStyle = this.props.config.options;
      return /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Snackbar__default["default"], {
        key: key,
        open: this.state.open,
        autoHideDuration: this.state.duration,
        anchorOrigin: {
          vertical: this.state.vertical,
          horizontal: this.state.horizontal
        },
        onClose: this.handleClose
      }, /*#__PURE__*/React__default["default"].createElement(Alert, {
        onClose: this.handleClose,
        variant: this.state.variant,
        severity: this.state.severity,
        sx: {
          width: '100%'
        }
      }, this.state.message))));
    }
  }]);

  return SnackbarComponent;
}(React.Component);

var SnackbarComponent$1 = styles.withStyles(style$7, {
  withTheme: true
})(SnackbarComponent);

function Dialog(props) {
  // FIXME ---> Note we are using Dialog as root (just like view)
  // lets enumerate schema to extract uiSchema and validation
  return /*#__PURE__*/React__default["default"].createElement(DialogComponent, props);
}
function PopupToaster(props) {
  // lets enumerate schema to extract uiSchema and validation
  return /*#__PURE__*/React__default["default"].createElement(SnackbarComponent$1, props);
}
function registerDialog(component_manager) {
  // self register component to layout manager
  component_manager.registerComponent({
    component: DialogComponent,
    // FIXME ---> Note we are using Dialog as root (just like view)
    type: config$b.type,
    events: events$d,
    triggers: triggers$d,
    config: config$b
  });
}
function registerPopup(component_manager) {
  // self register component to layout manager
  component_manager.registerComponent({
    component: PopupToaster,
    type: config$a.type,
    events: events$c,
    triggers: triggers$c,
    config: config$a
  });
}

var triggers$b = triggers$q;
var events$b = events$q;
var StateLayout = StateList;
var LayoutBase = /*#__PURE__*/function (_ListBase) {
  _inherits(LayoutBase, _ListBase);

  var _super = _createSuper(LayoutBase);

  function LayoutBase() {
    var _this;

    _classCallCheck(this, LayoutBase);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_this = _super.call.apply(_super, [this].concat(args)), _this.renderContent = renderContent, _assertThisInitialized(_this)));
  }

  return _createClass(LayoutBase);
}(ListBase);

var events$a = events$b;
var triggers$a = triggers$b;
var options$9 = {
  "id": "container",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "Container options",
  "x-layout": "component",
  "type": "object",
  "version": 0.1,
  "properties": {},
  "required": []
};
var config$9 = {
  name: "Containers",
  type: "container",
  author: "Kjartan Jónsson",
  description: "Container component",
  version: 0.1,
  relation: {
    contains: [],
    within: "component" // parent

  },
  contains: {},
  options: options$9,
  state: StateLayout
};

var style$6 = function style(theme) {
  return {};
};

var ContainerComponent = /*#__PURE__*/function (_LayoutBase) {
  _inherits(ContainerComponent, _LayoutBase);

  var _super = _createSuper(ContainerComponent);

  /**
   * Displays one rendered content at a time.
   */
  function ContainerComponent(props) {
    _classCallCheck(this, ContainerComponent);

    props.config.options = _objectSpread2(_objectSpread2({}, {}), props.config.options);
    return _super.call(this, props);
  }

  _createClass(ContainerComponent, [{
    key: "render",
    value: function render() {
      var _this = this;

      var classes = this.props.classes; // FIXME: render all views (do we need this)?

      this.state.data.forEach(function (itm, idx, arr) {
        arr[idx].__render = _this.renderContent(classes, itm);
        arr[idx].__visible = false;
      });

      if (0 <= this.state.selectedIndex && this.state.selectedIndex < this.state.data.length) {
        this.state.data[this.state.selectedIndex].__visible = true;
      }

      return /*#__PURE__*/React__default["default"].createElement("div", {
        className: classes.root,
        style: {
          overflow: 'scroll',
          whiteSpace: 'nowrap'
        }
      }, this.state.data.map(function (itm, idx) {
        return /*#__PURE__*/React__default["default"].createElement("div", {
          key: itm.id,
          style: {
            display: itm.__visible ? 'block' : 'none'
          }
        }, itm.__render);
      }));
      /*
      return (
        <div className={classes.root}>
          {itm.__render}
        </div>
      )
      */
    }
  }]);

  return ContainerComponent;
}(LayoutBase);

var ContainerComponent$1 = styles.withStyles(style$6, {
  withTheme: true
})(ContainerComponent);

var events$9 = events$b;
var triggers$9 = triggers$b;
var options$8 = {
  "id": "tabs",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Tabs",
  "description": "Tabs options",
  "x-layout": "component",
  "type": "object",
  "version": 0.1,
  "properties": {
    "textColor": {
      "title": "textColor",
      "description": "textColor",
      "type": "string",
      "enum": ["inherit", "primary", "secondary"],
      "default": "inherit"
    },
    "indicatorColor": {
      "title": "indicatorColor",
      "description": "indicatorColor",
      "type": "string",
      "enum": ['initial', 'inherit', 'primary', 'secondary'],
      "default": "secondary"
    },
    "tabVariant": {
      "title": "tabVariant",
      "description": "tabVariant",
      "type": "string",
      "enum": ["fullWidth", "scrollable", "standard"],
      "default": "standard"
    },
    "contentMargin": {
      "title": "contentMargin",
      "description": "contentMargin",
      "type": "number",
      "default": 1
    }
  },
  "required": ["textColor", "indicatorColor", "tabVariant", "contentMargin"]
};
var item$4 = {
  "id": "tab",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Tab",
  "description": "Tab",
  "x-layout": "component-item",
  "type": "object",
  "version": 0.1,
  "properties": {
    "id": {
      "description": "identifier",
      "type": "string",
      "readOnly": false,
      "writeOnly": false
    },
    "title": {
      "description": "Title",
      "type": "string",
      "default": "Tab"
    },
    "icon": {
      "description": "Icon",
      "type": "string",
      "default": ""
    },
    "disabled": {
      "description": "Disabled",
      "type": "boolean",
      "default": false
    },
    "content": {
      "title": "content",
      "description": "TBD",
      "readOnly": false,
      "writeOnly": false,
      "type": "object",
      "default": {}
    }
  },
  "required": ["title", "disabled"]
};
var config$8 = {
  name: "Tabs",
  type: "tabs",
  author: "Kjartan Jónsson",
  description: "Tabs component",
  version: 0.1,
  relation: {
    contains: ["tab"],
    within: "component" // parent

  },
  options: options$8,
  contains: {
    'tab': item$4
  },
  state: StateLayout
};

var style$5 = function style(theme) {
  return {};
};

var TabsComponent = /*#__PURE__*/function (_LayoutBase) {
  _inherits(TabsComponent, _LayoutBase);

  var _super = _createSuper(TabsComponent);

  /**
   * Used to manage internal state of avatars
   */
  function TabsComponent(props) {
    var _this;

    _classCallCheck(this, TabsComponent);

    _this = _super.call(this, props); // props.config = props.config || {};

    props.config.options = _objectSpread2(_objectSpread2({}, {}), props.config.options);
    props.config.options.contentMargin = props.config.options.contentMargin || 3;
    return _this;
  }

  _createClass(TabsComponent, [{
    key: "a11yProps",
    value: function a11yProps(index) {
      return {
        id: "".concat(this.props.id, "-tab-").concat(index),
        'aria-controls': "".concat(this.props.id, "-tabpanel-").concat(index)
      };
    }
  }, {
    key: "handleChange",
    value: function handleChange(evt, idx) {
      this.setSelectedId(this.state.data[idx].id);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var state = this.state;
      var _this$props = this.props,
          classes = _this$props.classes,
          config = _this$props.config;
      return /*#__PURE__*/React__default["default"].createElement("div", {
        className: classes.root
      }, /*#__PURE__*/React__default["default"].createElement(AppBar__default["default"], {
        position: "static"
      }, /*#__PURE__*/React__default["default"].createElement(Tabs__default["default"], {
        textColor: config.options.textColor,
        indicatorColor: config.options.indicatorColor,
        variant: config.options.tabVariant,
        value: this.state.selectedIndex,
        onChange: function onChange(evt, idx) {
          _this2.handleChange(evt, idx);
        }
      }, state.data.map(function (itm, idx) {
        return /*#__PURE__*/React__default["default"].createElement(Tab__default["default"], _extends({
          key: "".concat(_this2.props.id, "-tabpanel-").concat(idx),
          icon: getIcon(itm.icon),
          disabled: itm.disabled || false,
          label: itm.title
        }, _this2.a11yProps(idx)));
      }))), state.data.map(function (itm, idx) {
        return /*#__PURE__*/React__default["default"].createElement("div", {
          key: "".concat(_this2.props.id, "-tabpanel-").concat(idx),
          role: "tabpanel",
          hidden: state.selectedIndex !== idx,
          id: "".concat(_this2.props.id, "-tabpanel-").concat(idx),
          "aria-labelledby": "".concat(_this2.props.id, "-tab-").concat(idx)
        }, state.selectedIndex === idx && /*#__PURE__*/React__default["default"].createElement(Box__default["default"], {
          p: config.options.contentMargin
        }, /*#__PURE__*/React__default["default"].createElement("div", null, _this2.renderContent(classes, itm))));
      }));
    }
  }]);

  return TabsComponent;
}(LayoutBase);

TabsComponent.propTypes = {//data: PropTypes.instanceOf(Array).isRequired,
};
var TabsComponent$1 = styles.withStyles(style$5, {
  withTheme: true
})(TabsComponent);

var events$8 = events$b;
var triggers$8 = triggers$b;
var options$7 = {
  "id": "grid-columns",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "Grid",
  "x-layout": "component",
  "type": "object",
  "version": 0.1,
  "properties": {
    "spacing": {
      "title": "spacing",
      "description": "Space between the grid items",
      "type": "number",
      "default": 1
    },
    "direction": {
      "description": "Grid item direction",
      "type": "string",
      "enum": ["row", "column"],
      "default": "row"
    },
    "alignItems": {
      "description": "Align content",
      "type": "string",
      "enum": ["stretch"],
      "default": "stretch"
    },
    "justifyContent": {
      "description": "Justify content",
      "type": "string",
      "enum": ["center", "left", "right"],
      "default": "center"
    },
    "gridXS": {
      "title": "gridXS",
      "description": "gridXS",
      "type": "number",
      "default": 2
    },
    "gridSM": {
      "title": "gridSM",
      "description": "gridSM",
      "type": "number",
      "default": 2
    }
  },
  "required": ["spacing", "direction", "alignItems", "justifyContent"]
};
var config$7 = {
  name: "Grid columns",
  type: "grid-columns",
  author: "Kjartan Jónsson",
  description: "Grid component",
  version: 0.1,
  relation: {
    contains: ["grid-column"],
    within: "component" // parent

  },
  options: options$7,
  state: StateLayout // styles

};

var style$4 = function style(theme) {
  return {};
};

var StateGrid = StateLayout;
var GridComponent = /*#__PURE__*/function (_LayoutBase) {
  _inherits(GridComponent, _LayoutBase);

  var _super = _createSuper(GridComponent);

  /**
   * Used to manage internal state of avatars
   */
  function GridComponent(props) {
    var _this;

    _classCallCheck(this, GridComponent);

    props.config.options = props.config.options || {};
    props.config.options = _objectSpread2(_objectSpread2({}, {
      spacing: 1,
      direction: 'row',
      justifyContent: 'center',
      alignItems: 'stretch',
      gridXS: 12,
      gridSM: 12
    }), props.config.options);
    _this = _super.call(this, props);

    _this.renderGrid = function (itm, idx, classes) {
      if (!itm.hidden) {
        return /*#__PURE__*/React__default["default"].createElement(Grid__default["default"], {
          item: true,
          key: itm.id,
          xs: itm.gridXS || _this.props.config.options.gridXS || 12,
          sm: itm.gridSM || _this.props.config.options.gridSM || 12,
          style: {
            textAlign: itm.justifyContent || 'inherit'
          }
        }, _this.renderContent(classes, itm));
      }
    };

    return _this;
  }

  _createClass(GridComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      return /*#__PURE__*/React__default["default"].createElement(Grid__default["default"], {
        container: true,
        spacing: this.props.config.options.spacing,
        direction: this.props.config.options.direction,
        justifyContent: this.props.config.options.justifyContent // missmatch storybook vs app
        ,
        alignItems: this.props.config.options.alignItems
      }, this.state.data.map(function (itm, idx) {
        return _this2.renderGrid(itm, idx, classes);
      }));
    }
  }]);

  return GridComponent;
}(LayoutBase);
var GridComponent$1 = styles.withStyles(style$4, {
  withTheme: true
})(GridComponent);

var events$7 = events$8;
var triggers$7 = triggers$8;
var options$6 = {
  "id": "grid-rows",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Grid Row",
  "description": "Grid",
  "x-layout": "component",
  "type": "object",
  "version": 0.1,
  "properties": {
    "spacing": {
      "title": "spacing",
      "description": "Space between the grid items",
      "type": "number",
      "default": 1
    },
    "alignItems": {
      "description": "Align content",
      "type": "string",
      "enum": ["stretch"],
      "default": "stretch"
    },
    "justifyContent": {
      "description": "Justify content",
      "type": "string",
      "enum": ["center", "left", "right"],
      "default": "center"
    },
    "gridXS": {
      "title": "gridXS",
      "description": "gridXS",
      "type": "number",
      "default": 2
    },
    "gridSM": {
      "title": "gridSM",
      "description": "gridSM",
      "type": "number",
      "default": 2
    }
  },
  "required": ["spacing", "alignItems", "justifyContent"]
};
var item$3 = {
  "id": "grid-row",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Grid row",
  "description": "Grid row",
  "x-layout": "component-item",
  "type": "object",
  "version": 0.1,
  "properties": {
    "id": {
      "readOnly": false,
      "writeOnly": false,
      "description": "TBD",
      "type": "string"
    },
    "gridXS": {
      "title": "gridXS",
      "description": "TBD",
      "type": "number",
      "default": 4
    },
    "gridSM": {
      "title": "gridSM",
      "description": "TBD",
      "type": "number",
      "default": 4
    },
    "hidden": {
      "title": "hidden",
      "description": "TBD",
      "type": "boolean",
      "default": false
    },
    "content": {
      "title": "content",
      "description": "TBD",
      "readOnly": false,
      "writeOnly": false,
      "type": "object",
      "default": {}
    }
  },
  "required": ["gridXS", "gridSM"]
};
var config$6 = {
  name: "Grid rows",
  type: "grid-rows",
  author: "Kjartan Jónsson",
  description: "Grid component",
  version: 0.1,
  relation: {
    contains: ["grid-row"],
    within: "component" // parent

  },
  options: options$6,
  contains: {
    'grid-row': item$3
  },
  state: StateGrid // styles

};

var style$3 = function style(theme) {
  return {};
};

var GridRowComponent = /*#__PURE__*/function (_GridComponent) {
  _inherits(GridRowComponent, _GridComponent);

  var _super = _createSuper(GridRowComponent);

  /**
   * Used to manage internal state of avatars
   */
  function GridRowComponent(props) {
    _classCallCheck(this, GridRowComponent);

    props.config.options = props.config.options || {};
    props.config.options = _objectSpread2(_objectSpread2(_objectSpread2({}, {
      spacing: 1,
      justifyContent: 'center',
      alignItems: 'stretch',
      gridXS: 12,
      gridSM: 12
    }), props.config.options), {
      direction: 'column'
    });
    return _super.call(this, props);
  }

  return _createClass(GridRowComponent);
}(GridComponent);
var GridRowComponent$1 = styles.withStyles(style$3, {
  withTheme: true
})(GridRowComponent);

var events$6 = events$8;
var triggers$6 = triggers$8;
var options$5 = {
  "id": "grid-columns",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Grid columns",
  "description": "Grid columns options",
  "x-layout": "component",
  "type": "object",
  "version": 0.1,
  "properties": {
    "spacing": {
      "title": "spacing",
      "description": "Space between the grid items",
      "type": "number",
      "default": 1
    },
    "alignItems": {
      "description": "Align content",
      "type": "string",
      "enum": ["stretch"],
      "default": "stretch"
    },
    "justifyContent": {
      "description": "Justify content",
      "type": "string",
      "enum": ["center", "left", "right"],
      "default": "center"
    },
    "gridXS": {
      "title": "gridXS",
      "description": "gridXS",
      "type": "number",
      "default": 2
    },
    "gridSM": {
      "title": "gridSM",
      "description": "gridSM",
      "type": "number",
      "default": 2
    }
  },
  "required": ["spacing", "alignItems", "justifyContent"]
};
var item$2 = {
  "id": "grid-column",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Grid column",
  "description": "Grid column",
  "x-layout": "component-item",
  "type": "object",
  "version": 0.1,
  "properties": {
    "id": {
      "readOnly": false,
      "writeOnly": false,
      "description": "TBD",
      "type": "string"
    },
    "gridXS": {
      "title": "gridXS",
      "description": "TBD",
      "type": "number",
      "default": 4
    },
    "gridSM": {
      "title": "gridSM",
      "description": "TBD",
      "type": "number",
      "default": 4
    },
    "hidden": {
      "title": "hidden",
      "description": "TBD",
      "type": "boolean",
      "default": false
    },
    "content": {
      "title": "content",
      "description": "TBD",
      "readOnly": false,
      "writeOnly": false,
      "type": "object",
      "default": {}
    }
  },
  "required": ["gridXS", "gridSM"]
};
var config$5 = {
  name: "Grid columns",
  type: "grid-columns",
  author: "Kjartan Jónsson",
  description: "Grid component",
  version: 0.1,
  relation: {
    contains: ["grid-column"],
    within: "component" // parent

  },
  options: options$5,
  contains: {
    'grid-column': item$2
  },
  state: StateGrid // styles

};

var style$2 = function style(theme) {
  return {};
};

var GridColumnComponent = /*#__PURE__*/function (_GridComponent) {
  _inherits(GridColumnComponent, _GridComponent);

  var _super = _createSuper(GridColumnComponent);

  /**
   * Used to manage internal state of avatars
   */
  function GridColumnComponent(props) {
    _classCallCheck(this, GridColumnComponent);

    props.config.options = props.config.options || {};
    props.config.options = _objectSpread2(_objectSpread2(_objectSpread2({}, {
      spacing: 1,
      justifyContent: 'center',
      alignItems: 'stretch',
      gridXS: 12,
      gridSM: 12
    }), props.config.options), {
      direction: 'row'
    });
    return _super.call(this, props);
  }

  return _createClass(GridColumnComponent);
}(GridComponent);

var GridColumnComponent$1 = styles.withStyles(style$2, {
  withTheme: true
})(GridColumnComponent);

var events$5 = events$b;
var triggers$5 = triggers$b;
var options$4 = {
  "id": "accordion",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Accordion",
  "description": "Accordion options",
  "x-layout": "component",
  "type": "object",
  "version": 0.1,
  "properties": {},
  "required": []
};
var item$1 = {
  "id": "accordion-section",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Accordion section",
  "description": "Accordion section",
  "x-layout": "component-item",
  "type": "object",
  "version": 0.1,
  "properties": {
    "id": {
      "readOnly": false,
      "writeOnly": false,
      "description": "TBD",
      "type": "string"
    },
    "title": {
      "title": "Title",
      "description": "Title shown",
      "type": "string",
      "default": "Section"
    },
    "subtitle": {
      "title": "Sub heading",
      "description": "Additional information",
      "type": "string",
      "default": ""
    },
    "disabled": {
      "title": "disabled",
      "description": "Is this accorion item diabled",
      "type": "boolean",
      "default": false
    },
    "content": {
      "title": "content",
      "description": "TBD",
      "readOnly": false,
      "writeOnly": false,
      "type": "object",
      "default": {}
    }
  },
  "required": ["title", "disabled"]
};
var config$4 = {
  name: "Accordion",
  type: "accordion",
  author: "Kjartan Jónsson",
  description: "Accordion component",
  version: 0.1,
  relation: {
    contains: ["accordion-section"],
    within: "component" // parent

  },
  contains: {
    "accordion-section": item$1
  },
  options: options$4,
  state: StateLayout
};

var style$1 = function style(theme) {
  return {
    root: {
      width: '100%'
    },
    heading: {
      flexBasis: '33.33%',
      flexShrink: 0
    },
    secondaryHeading: {
      color: 'gray',
      textAlign: 'right',
      width: '100%'
    }
  };
};

var AccordionComponent = /*#__PURE__*/function (_LayoutBase) {
  _inherits(AccordionComponent, _LayoutBase);

  var _super = _createSuper(AccordionComponent);

  /**
   * Used to manage internal state of avatars
   */
  function AccordionComponent(props) {
    var _this;

    _classCallCheck(this, AccordionComponent);

    props.config.options = _objectSpread2(_objectSpread2({}, {}), props.config.options);
    _this = _super.call(this, props);

    _this.renderTextDetails = function (classes, itm) {
      var secondaryHeading = itm.subtitle;

      if (secondaryHeading) {
        return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Typography__default["default"], {
          className: classes.heading
        }, itm.title), /*#__PURE__*/React__default["default"].createElement(Typography__default["default"], {
          className: classes.secondaryHeading
        }, secondaryHeading));
      }

      return /*#__PURE__*/React__default["default"].createElement(Typography__default["default"], {
        className: classes.heading
      }, itm.title);
    };

    return _this;
  }

  _createClass(AccordionComponent, [{
    key: "handleChange",
    value: function handleChange(itm_id, idx) {
      /* TODO
      const items = this.state.data;
      
      // if only one open at once
      for (let item_idx in items){
        items[item_idx].expanded = false;
      }
      */
      // toggle
      // items[idx].expanded = !items[idx].expanded; // toggle mode
      //this.setState({...this.state, ...{data: items}})
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      return /*#__PURE__*/React__default["default"].createElement("div", {
        className: classes.root
      }, this.state.data.map(function (itm, idx) {
        return (
          /*#__PURE__*/
          // <Accordion key={itm.id + idx} disabled={itm.disabled || false} expanded={this.showSelectedRow(itm)} onSelect={(evt) => this.handleSelect(itm.id, itm, idx, evt)} onChange={this.handleChange(itm.id, idx)}>
          React__default["default"].createElement(Accordion__default["default"], {
            key: itm.id + idx,
            disabled: itm.disabled || false,
            onChange: _this2.handleChange(itm.id, idx)
          }, /*#__PURE__*/React__default["default"].createElement(AccordionSummary__default["default"], {
            expandIcon: /*#__PURE__*/React__default["default"].createElement(ExpandMoreIcon__default["default"], null),
            "aria-controls": "panel1a-content",
            id: "panel1a-header"
          }, _this2.renderTextDetails(classes, itm)), /*#__PURE__*/React__default["default"].createElement(AccordionDetails__default["default"], null, /*#__PURE__*/React__default["default"].createElement("div", null, _this2.renderContent(classes, itm))))
        );
      }));
    }
  }]);

  return AccordionComponent;
}(LayoutBase);

var AccordionComponent$1 = styles.withStyles(style$1, {
  withTheme: true
})(AccordionComponent);

function LayoutRender(container_id, data, classes, config) {
  var ignore = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];
  var content = []; // rendered content

  console.info("-----------FIXME: TODO: IS THIS CODE USED?-----------");

  var _iterator = _createForOfIteratorHelper(config.layout),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;

      if (!item) {
        continue;
      } // check if we should skip generating this item by request of the caller. Example dont allow card action to have another card


      if (ignore.indexOf(item.type) > -1) {
        console.warn('Using item type=' + item.type + ' not supported in layout for ' + container_id);
        continue;
      } // create a component identifier


      var id = container_id + (item.id || item.type); // build the component

      if (item.type === 'layout') {
        content.push( /*#__PURE__*/React__default["default"].createElement(Layouter, {
          id: id,
          key: id,
          classes: classes,
          data: data,
          config: item.config
        }));
      } else {
        var item_data = data || {};
        var params = {
          id: id,
          key: id,
          classes: classes,
          data: item.data || item_data[item.pick] || item_data,
          config: item.config
        };
        var component = ComponentManager.getInstance().getComponentInstance(item.type, params);

        if (component) {
          content.push(component);
        } else {// TODO: notify missing component with type
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return /*#__PURE__*/React__default["default"].createElement("div", null, content);
}
function Layouter(props) {
  // style
  var classes = {}; // recursive render

  return LayoutRender(props.id, props.data, classes, props.config, 'div');
}

var events$4 = events$b;
var triggers$4 = triggers$b;
var options$3 = {
  "id": "layout",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "View options",
  "x-layout": "component",
  "type": "object",
  "version": 0.1,
  "properties": {},
  "required": []
};
var config$3 = {
  name: "Layout",
  type: "layout",
  author: "Kjartan Jónsson",
  description: "LayoutComponent component",
  version: 0.1,
  relation: {
    contains: [],
    within: "component" // parent

  },
  options: options$3,
  state: StateLayout
};

var LayoutComponent = /*#__PURE__*/function (_LayoutBase) {
  _inherits(LayoutComponent, _LayoutBase);

  var _super = _createSuper(LayoutComponent);

  /**
   * Used to manage layout
   */
  function LayoutComponent(props) {
    _classCallCheck(this, LayoutComponent);

    props.config.options = props.config.options || {};
    return _super.call(this, props);
  }

  _createClass(LayoutComponent, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes; //return LayoutRender(this.props.id, this.props.data, classes, config, 'div');

      var container_id = this.props.id;
      var data = this.props.data;
      var ignore = [];
      var content = []; // rendered content

      var _iterator = _createForOfIteratorHelper(this.props.data),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;

          // check if we should skip generating this item by request of the caller. Example dont allow card action to have another card
          if (ignore.indexOf(item.type) > -1) {
            console.warn('Using item type=' + item.type + ' not supported in layout for ' + container_id);
            continue;
          } // create a component identifier


          var id = item.id; // build the component

          if (item.type === 'layout') {
            content.push( /*#__PURE__*/React__default["default"].createElement(Layouter, {
              id: id,
              key: id,
              classes: classes,
              data: data,
              config: item.config,
              manager: this.props.manager
            }));
          } else {
            var item_data = data || {};
            var params = {
              id: id,
              key: id,
              classes: classes,
              data: item.data || item_data[item.pick] || item_data,
              config: item.config,
              manager: this.props.manager
            };
            var component = this.props.manager.getComponentInstance(item.type, params);

            if (component) {
              content.push(component);
            } else {// TODO: notify missing component with type
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return /*#__PURE__*/React__default["default"].createElement("div", null, content);
    }
  }]);

  return LayoutComponent;
}(LayoutBase);

var events$3 = events$b;
var triggers$3 = triggers$b;
var options$2 = {
  "id": "view",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "View",
  "x-layout": "component",
  "type": "object",
  "properties": {
    "id": {
      "readOnly": false,
      "writeOnly": false,
      "description": "TBD",
      "type": "string"
    },
    "content": {
      "title": "content",
      "description": "TBD",
      "readOnly": false,
      "writeOnly": false,
      "type": "object",
      "default": {}
    }
  },
  "required": []
};
var config$2 = {
  name: "View",
  type: "view",
  author: "Kjartan Jónsson",
  description: "ViewComponent component",
  version: 0.1,
  relation: {
    contains: [],
    within: "component" // parent

  },
  options: options$2
};

var ViewComponent = /*#__PURE__*/function (_LayoutBase) {
  _inherits(ViewComponent, _LayoutBase);

  var _super = _createSuper(ViewComponent);

  /**
   * Used to manage layout
   */
  function ViewComponent(props) {
    var _this;

    _classCallCheck(this, ViewComponent);

    props.config.options = props.config.options || {};
    _this = _super.call(this, props);
    _this.eventDD = _this.registerComponent({}, {}, config$2);
    return _this;
  }

  _createClass(ViewComponent, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes; //return LayoutRender(this.props.id, this.props.data, classes, config, 'div');

      var container_id = this.props.id;
      var data = this.props.data;
      var ignore = [];
      var content = []; // rendered content

      var _iterator = _createForOfIteratorHelper(this.props.data),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;

          // check if we should skip generating this item by request of the caller. Example dont allow card action to have another card
          if (ignore.indexOf(item.type) > -1) {
            console.warn('Using item type=' + item.type + ' not supported in layout for ' + container_id);
            continue;
          } // create a component identifier


          var id = container_id + (item.id || item.type);
          console.info("ID: " + id); // build the component

          if (item.type === 'layout') {
            content.push( /*#__PURE__*/React__default["default"].createElement(Layouter, {
              id: id,
              key: id,
              classes: classes,
              data: data,
              config: item.config,
              manager: this.props.manager
            }));
          } else {
            var item_data = data || {};
            var params = {
              id: id,
              key: id,
              classes: classes,
              data: item.data || item_data[item.pick] || item_data,
              config: item.config,
              manager: this.props.manager
            };
            var component = this.props.manager.getComponentInstance(item.type, params);

            if (component) {
              content.push(component);
            } else {// TODO: notify missing component with type
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return /*#__PURE__*/React__default["default"].createElement("div", null, content);
    }
  }]);

  return ViewComponent;
}(LayoutBase);

function View(props) {
  // TODO: wrap in separate component that supports routing
  return /*#__PURE__*/React__default["default"].createElement(ViewComponent, props);
}
function Layout(props) {
  // lets enumerate schema to extract uiSchema and validation
  return /*#__PURE__*/React__default["default"].createElement(LayoutComponent, props);
}
function Container(props) {
  // lets enumerate schema to extract uiSchema and validation
  return /*#__PURE__*/React__default["default"].createElement(ContainerComponent$1, props);
}
function Grid(props) {
  // lets enumerate schema to extract uiSchema and validation
  return /*#__PURE__*/React__default["default"].createElement(GridComponent$1, props);
}
function GridColumn(props) {
  // lets enumerate schema to extract uiSchema and validation
  return /*#__PURE__*/React__default["default"].createElement(GridColumnComponent$1, props);
}
function GridRow(props) {
  // lets enumerate schema to extract uiSchema and validation
  return /*#__PURE__*/React__default["default"].createElement(GridRowComponent$1, props);
}
function Accordion(props) {
  // lets enumerate schema to extract uiSchema and validation
  return /*#__PURE__*/React__default["default"].createElement(AccordionComponent$1, props);
}
function Tabs(props) {
  // lets enumerate schema to extract uiSchema and validation
  return /*#__PURE__*/React__default["default"].createElement(TabsComponent$1, props);
}
function registerView(component_manager) {
  // self register component to layout manager
  component_manager.registerComponent({
    component: View,
    type: config$2.type,
    events: events$3,
    triggers: triggers$3,
    config: config$2
  });
}
function registerContainer(component_manager) {
  // self register component to layout manager
  component_manager.registerComponent({
    component: Container,
    type: config$9.type,
    events: events$a,
    triggers: triggers$a,
    config: config$9
  });
}
function registerGrid(component_manager) {
  // self register component to layout manager
  component_manager.registerComponent({
    component: Grid,
    type: 'grid',
    // configGrid.type,
    events: events$8,
    triggers: triggers$8,
    config: config$7
  });
}
function registerGridColumn(component_manager) {
  // self register component to layout manager
  component_manager.registerComponent({
    component: GridColumn,
    type: config$5.type,
    events: events$6,
    triggers: triggers$6,
    config: config$5
  });
}
function registerGridRow(component_manager) {
  // self register component to layout manager
  component_manager.registerComponent({
    component: GridRow,
    type: config$6.type,
    events: events$7,
    triggers: triggers$7,
    config: config$6
  });
}
function registerAccordion(component_manager) {
  // self register component to layout manager
  component_manager.registerComponent({
    component: Accordion,
    type: config$4.type,
    events: events$5,
    triggers: triggers$5,
    config: config$4
  });
}
function registerTabs(component_manager) {
  // self register component to layout manager
  component_manager.registerComponent({
    component: Tabs,
    type: config$8.type,
    events: events$9,
    triggers: triggers$9,
    config: config$8
  });
}
function registerLayout(component_manager) {
  // self register component to layout manager
  component_manager.registerComponent({
    component: Layout,
    type: config$3.type,
    events: events$4,
    triggers: triggers$4,
    config: config$3
  });
}

var events$2 = events$q;
var triggers$2 = triggers$q;
var options$1 = {
  "id": "buttons",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Buttons",
  "description": "Button options",
  "x-layout": "component",
  "type": "object",
  "version": 0.1,
  "properties": {
    "buttonVariant": {
      "title": "Variant",
      "description": "The button variants available",
      "type": "string",
      "enum": ['contained', 'outlined', 'text', 'fab'],
      "default": "contained"
    },
    "size": {
      "description": "Button size",
      "type": "string",
      "enum": ['small', 'large', 'medium'],
      "default": "medium"
    },
    "color": {
      "description": "Button color",
      "type": "string",
      "enum": ["primary", "secondary"],
      "default": "primary"
    }
  },
  "required": ["buttonVariant", "size", "color"]
};
var item = {
  "id": "button",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Button",
  "description": "Button",
  "x-layout": "component-item",
  "type": "object",
  "version": 0.1,
  "properties": {
    "id": {
      "description": "identifier",
      "type": "string",
      "readOnly": false,
      "writeOnly": false
    },
    "title": {
      "description": "Title",
      "type": "string",
      "default": "Button"
    },
    "disabled": {
      "description": "Disabled",
      "type": "boolean",
      "default": false
    },
    "icon": {
      "description": "Button icon 'font-awesome:fa fa-heart-o' or 'material-ui:Star'",
      "type": "string",
      "default": "font-awesome:fa fa-heart-o"
    }
  },
  "required": ["title", "disabled", "icon"]
};
var config$1 = {
  name: "Buttons",
  type: "buttons",
  author: "Kjartan Jónsson",
  description: "Button component",
  version: 0.1,
  relation: {
    contains: ["button"],
    within: "component" // parent

  },
  contains: {
    "button": item
  },
  options: options$1,
  state: StateList
};
var useStyles = styles.makeStyles(function (theme) {
  return {};
});

function ButtonRegular(props) {
  var classes = useStyles();
  var data = props.data;
  var options = props.config.options;

  if (!data) {
    return;
  }

  function handleClick(e) {
    props.callback('click', data, e);
  }

  var link = data.link || {};

  if (data.title) {
    return /*#__PURE__*/React__default["default"].createElement(Button__default["default"], {
      key: data.id,
      variant: data.variant || options.buttonVariant,
      color: data.color || options.color,
      size: data.size || options.size,
      disabled: data.disabled || false,
      className: classes.button,
      href: link.url,
      target: link.target,
      startIcon: getIcon(data.icon) // button events 
      ,
      onClick: handleClick
    }, data.title);
  } else {
    return /*#__PURE__*/React__default["default"].createElement(IconButton__default["default"], {
      key: data.id,
      variant: data.variant || options.buttonVariant,
      color: data.color || options.color,
      disabled: data.disabled || false,
      className: classes.button,
      href: link.url,
      target: link.target,
      alt: data.title // button events 
      ,
      onClick: handleClick
    }, /*#__PURE__*/React__default["default"].createElement(Icon__default["default"], null, getIcon(data.icon)));
  }
}

function ButtonFab(props) {
  var classes = useStyles();
  var options = props.config.options;
  var data = props.data;

  if (!data) {
    return;
  } // if no button exists we return nothing


  var size = data.size || options.size;
  var variant = data.variant || options.buttonVariant || 'circular';

  function handleClick(e) {
    props.callback('click', data, e);
    /*e.preventDefault();*/
  }

  if (data.title) {
    variant = "extended";
  }

  if (size === 'large') {
    size = undefined;
  }

  return /*#__PURE__*/React__default["default"].createElement(Fab__default["default"], {
    key: data.id,
    variant: variant,
    color: data.color || options.color,
    disabled: data.disabled || false,
    size: size // button events 
    ,
    onClick: handleClick
  }, getIcon(data.icon, classes.extendedIcon), data.title);
}

function ButtonSingle(props) {
  if ((props.data.variant || props.config.options.buttonVariant) === "fab") {
    return ButtonFab(props);
  } else {
    return ButtonRegular(props);
  }
} ////////////////////////////////////////////////
////////////////////////////////////////////////


var ButtonComponent = /*#__PURE__*/function (_ListBase) {
  _inherits(ButtonComponent, _ListBase);

  var _super = _createSuper(ButtonComponent);

  function ButtonComponent() {
    var _this;

    _classCallCheck(this, ButtonComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_this = _super.call.apply(_super, [this].concat(args)), _this.setSelectedId = function (id) {
      EventManager.getInstance().addEvent(_this.props.id, 'selected', {
        id: id
      }, null);
    }, _this.updateView = function (action, arr, updated, data) {
      // extend by parent
      return true;
    }, _assertThisInitialized(_this)));
  }

  _createClass(ButtonComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var content = [];
      var items = this.state.data; // options

      var classes = this.props.classes;

      if (items.length === 1) {
        var itm = items[0];
        content.push( /*#__PURE__*/React__default["default"].createElement(ButtonSingle, {
          key: itm.id,
          data: itm,
          config: this.props.config,
          callback: function callback(event, data, evt) {
            EventManager.getInstance().addEvent(_this2.props.id, 'selected', data, evt);
          }
        }));
      } else {
        if (this.props.config.options.variant === 'fab') {
          // special case if this is multiple fabs
          items.map(function (itm) {
            return content.push( /*#__PURE__*/React__default["default"].createElement(ButtonFab, {
              key: itm.id,
              data: itm,
              config: _this2.props.config,
              callback: function callback(event, data, evt) {
                EventManager.getInstance().addEvent(_this2.props.id, 'selected', data, evt);
              }
            }));
          });
        } else {
          // return regular button group
          var _options = this.props.config.options;
          content.push( /*#__PURE__*/React__default["default"].createElement(ButtonGroup__default["default"], {
            key: this.props.id,
            variant: _options.x,
            color: _options.color,
            size: _options.size
          }, items.map(function (itm) {
            var disabled = itm.disabled || false;
            var variant = itm.variant || _options.buttonVariant;
            var link = itm.link || {};
            var size = itm.size || _options.size;

            if (size === 'large') {
              size = undefined;
            }

            if (itm.icon && !itm.title) {
              return /*#__PURE__*/React__default["default"].createElement(IconButton__default["default"], {
                key: itm.id,
                variant: variant,
                color: itm.color || _options.color,
                disabled: disabled,
                className: classes.button,
                size: size,
                alt: itm.title,
                href: link.url,
                target: link.target // button events 
                ,
                onClick: function onClick(evt) {
                  EventManager.getInstance().addEvent(_this2.props.id, 'selected', itm, evt);
                }
              }, /*#__PURE__*/React__default["default"].createElement(Icon__default["default"], null, getIcon(itm.icon)));
            } else {
              return /*#__PURE__*/React__default["default"].createElement(Button__default["default"], {
                key: itm.id,
                variant: variant,
                color: itm.color || _options.color,
                disabled: disabled,
                size: itm.size || _options.size,
                href: link.url,
                target: link.target,
                className: classes.button,
                startIcon: getIcon(itm.icon),
                onClick: function onClick(evt) {
                  EventManager.getInstance().addEvent(_this2.props.id, 'selected', itm, evt);
                }
              }, itm.title || itm.label);
            }
          })));
        }
      }

      return content;
    }
  }]);

  return ButtonComponent;
}(ListBase);

var ButtonComponent$1 = styles.withStyles(useStyles, {
  withTheme: true
})(ButtonComponent);

function Button(props) {
  // lets enumerate schema to extract uiSchema and validation
  return /*#__PURE__*/React__default["default"].createElement(ButtonComponent$1, props);
}
function registerButton(component_manager) {
  // self register component to layout manager
  component_manager.registerComponent({
    component: Button,
    type: config$1.type,
    events: events$2,
    triggers: triggers$2,
    config: config$1
  });
}

/**
 * Walk all descendants of the given node, depth-first
 *
 * @param {Object} args - Function parameters
 * @param {function} args.callback - Function to call on each node
 * @param {function} args.getNodeKey - Function to get the key from the nodeData and tree index
 * @param {boolean} args.ignoreCollapsed - Ignore children of nodes without `expanded` set to `true`
 * @param {boolean=} args.isPseudoRoot - If true, this node has no real data, and only serves
 *                                        as the parent of all the nodes in the tree
 * @param {Object} args.node - A tree node
 * @param {Object=} args.parentNode - The parent node of `node`
 * @param {number} args.currentIndex - The treeIndex of `node`
 * @param {number[]|string[]} args.path - Array of keys leading up to node to be changed
 * @param {number[]} args.lowerSiblingCounts - An array containing the count of siblings beneath the
 *                                             previous nodes in this path
 *
 * @return {number|false} nextIndex - Index of the next sibling of `node`,
 *                                    or false if the walk should be terminated
 */

function walkDescendants(_ref3) {
  var callback = _ref3.callback,
      getNodeKey = _ref3.getNodeKey,
      ignoreCollapsed = _ref3.ignoreCollapsed,
      _ref3$isPseudoRoot = _ref3.isPseudoRoot,
      isPseudoRoot = _ref3$isPseudoRoot === void 0 ? false : _ref3$isPseudoRoot,
      node = _ref3.node,
      _ref3$parentNode = _ref3.parentNode,
      parentNode = _ref3$parentNode === void 0 ? null : _ref3$parentNode,
      currentIndex = _ref3.currentIndex,
      _ref3$path = _ref3.path,
      path = _ref3$path === void 0 ? [] : _ref3$path,
      _ref3$lowerSiblingCou = _ref3.lowerSiblingCounts,
      lowerSiblingCounts = _ref3$lowerSiblingCou === void 0 ? [] : _ref3$lowerSiblingCou;
  // The pseudo-root is not considered in the path
  var selfPath = isPseudoRoot ? [] : [].concat(_toConsumableArray(path), [getNodeKey({
    node: node,
    treeIndex: currentIndex
  })]);
  var selfInfo = isPseudoRoot ? null : {
    node: node,
    parentNode: parentNode,
    path: selfPath,
    lowerSiblingCounts: lowerSiblingCounts,
    treeIndex: currentIndex
  };

  if (!isPseudoRoot) {
    var callbackResult = callback(selfInfo); // Cut walk short if the callback returned false

    if (callbackResult === false) {
      return false;
    }
  } // Return self on nodes with no children or hidden children


  if (!node.children || node.expanded !== true && ignoreCollapsed && !isPseudoRoot) {
    return currentIndex;
  } // Get all descendants


  var childIndex = currentIndex;
  var childCount = node.children.length;

  if (typeof node.children !== 'function') {
    for (var i = 0; i < childCount; i += 1) {
      childIndex = walkDescendants({
        callback: callback,
        getNodeKey: getNodeKey,
        ignoreCollapsed: ignoreCollapsed,
        node: node.children[i],
        parentNode: isPseudoRoot ? null : node,
        currentIndex: childIndex + 1,
        lowerSiblingCounts: [].concat(_toConsumableArray(lowerSiblingCounts), [childCount - i - 1]),
        path: selfPath
      }); // Cut walk short if the callback returned false

      if (childIndex === false) {
        return false;
      }
    }
  }

  return childIndex;
}
/**
 * Walk descendants depth-first and call a callback on each
 *
 * @param {!Object[]} treeData - Tree data
 * @param {!function} getNodeKey - Function to get the key from the nodeData and tree index
 * @param {function} callback - Function to call on each node
 * @param {boolean=} ignoreCollapsed - Ignore children of nodes without `expanded` set to `true`
 *
 * @return void
 */

function walk(_ref7) {
  var treeData = _ref7.treeData,
      getNodeKey = _ref7.getNodeKey,
      callback = _ref7.callback,
      _ref7$ignoreCollapsed = _ref7.ignoreCollapsed,
      ignoreCollapsed = _ref7$ignoreCollapsed === void 0 ? true : _ref7$ignoreCollapsed;

  if (!treeData || treeData.length < 1) {
    return;
  }

  walkDescendants({
    callback: callback,
    getNodeKey: getNodeKey,
    ignoreCollapsed: ignoreCollapsed,
    isPseudoRoot: true,
    node: {
      children: treeData
    },
    currentIndex: -1,
    path: [],
    lowerSiblingCounts: []
  });
}
/**
 * Get tree data flattened.
 *
 * @param {!Object[]} treeData - Tree data
 * @param {!function} getNodeKey - Function to get the key from the nodeData and tree index
 * @param {boolean=} ignoreCollapsed - Ignore children of nodes without `expanded` set to `true`
 *
 * @return {{
 *      node: Object,
 *      path: []string|[]number,
 *      lowerSiblingCounts: []number
 *  }}[] nodes - The node array
 */

function getFlatDataFromTree(_ref23) {
  var treeData = _ref23.treeData,
      getNodeKey = _ref23.getNodeKey,
      _ref23$ignoreCollapse = _ref23.ignoreCollapsed,
      ignoreCollapsed = _ref23$ignoreCollapse === void 0 ? true : _ref23$ignoreCollapse;

  if (!treeData || treeData.length < 1) {
    return [];
  }

  var flattened = [];
  walk({
    treeData: treeData,
    getNodeKey: getNodeKey,
    ignoreCollapsed: ignoreCollapsed,
    callback: function callback(nodeInfo) {
      flattened.push(nodeInfo);
    }
  });
  return flattened;
}
/**
 * Generate a tree structure from flat data.
 *
 * @param {!Object[]} flatData
 * @param {!function=} getKey - Function to get the key from the nodeData
 * @param {!function=} getParentKey - Function to get the parent key from the nodeData
 * @param {string|number=} rootKey - The value returned by `getParentKey` that corresponds to the root node.
 *                                  For example, if your nodes have id 1-99, you might use rootKey = 0
 *
 * @return {Object[]} treeData - The flat data represented as a tree
 */

function getTreeFromFlatData(_ref24) {
  var flatData = _ref24.flatData,
      _ref24$getKey = _ref24.getKey,
      getKey = _ref24$getKey === void 0 ? function (node) {
    return node.id;
  } : _ref24$getKey,
      _ref24$getParentKey = _ref24.getParentKey,
      getParentKey = _ref24$getParentKey === void 0 ? function (node) {
    return node.parentId;
  } : _ref24$getParentKey,
      _ref24$rootKey = _ref24.rootKey,
      rootKey = _ref24$rootKey === void 0 ? '0' : _ref24$rootKey;

  if (!flatData) {
    return [];
  }

  var childrenToParents = {};
  flatData.forEach(function (child) {
    var parentKey = getParentKey(child);

    if (parentKey in childrenToParents) {
      childrenToParents[parentKey].push(child);
    } else {
      childrenToParents[parentKey] = [child];
    }
  });

  if (!(rootKey in childrenToParents)) {
    return [];
  }

  var trav = function trav(parent) {
    var parentKey = getKey(parent);

    if (parentKey in childrenToParents) {
      return _objectSpread2(_objectSpread2({}, parent), {}, {
        children: childrenToParents[parentKey].map(function (child) {
          return trav(child);
        })
      });
    }

    return _objectSpread2({}, parent);
  };

  return childrenToParents[rootKey].map(function (child) {
    return trav(child);
  });
}

var treeTriggers = {
  /*
  expand: {
    alias: [],
    info: {
      name: 'Expand',
      description: 'Adds data at the end to component'
    },
    schema: {}
  },
  collapse: {
    alias: [],
    info: {
      name: 'Collapse',
      description: 'Adds data to the front of the component'
    },
    schema: {}
  }
  */
};
var treeEvents = {
  /*
  expanded: {
    alias: [],
    info: {
      name: 'Expanded',
      description: 'Expanded item'
    },
    schema: {} 
  },
  collapsed: {
    alias: [],
    info: {
      name: 'Collapsed',
      description: 'Collapsed item'
    },
    schema: {}
  }
  */
};
var events$1 = _objectSpread2(_objectSpread2({}, events$q), treeEvents);
var triggers$1 = _objectSpread2(_objectSpread2({}, triggers$q), treeTriggers);
var StateTree = StateList;
var TreeBase = /*#__PURE__*/function (_ListBase) {
  _inherits(TreeBase, _ListBase);

  var _super = _createSuper(TreeBase);

  function TreeBase(props) {
    var _this;

    _classCallCheck(this, TreeBase);

    _this = _super.call(this, props); // add a separate tree state

    _this.getTreeFromList = function (data) {
      var _data = data;

      if (!_data) {
        _data = _this.state.data;
      }

      return getTreeFromFlatData({
        flatData: _data,
        getKey: function getKey(itm) {
          return itm.id;
        },
        getParentKey: function getParentKey(itm) {
          return itm.parent;
        },
        rootKey: _this.props.config.options.rootId || null
      });
    };

    _this.getListFromTree = function (tree) {
      var _tree = tree;

      if (!_tree) {
        _tree = _this.state.tree;
      }

      var flatData = getFlatDataFromTree({
        treeData: _tree,
        getNodeKey: function getNodeKey(itm) {
          return itm.id;
        },
        ignoreCollapsed: false
      });
      var data = [];
      flatData.forEach(function (item) {
        var itm = _objectSpread2({}, item.node);

        if (item.parentNode === null) {
          itm.parent = null; // null;
        } else {
          itm.parent = item.parentNode.id;
        }

        delete itm.children;
        data.push(itm);
      });
      return data;
    };

    _this.getPathToNodeById = function (id) {
      var idx = _this.findItemIndexById(id);

      if (idx === null) ; else {
        var itm = _this.state.data[idx];

        if (itm.parent !== null) {
          return _this.getPathToNodeById(itm.parent);
        }
      }
    };

    _this.state.tree = _this.getTreeFromList();
    return _this;
  }

  return _createClass(TreeBase);
}(ListBase);

var events = events$1;
var triggers = triggers$1;
var options = {
  "id": "tree",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "Tree options",
  "x-layout": "component",
  "type": "object",
  "version": 0.1,
  "properties": {
    "multiSelect": {
      "title": "multiSelect",
      "description": "multiSelect",
      "type": "boolean",
      "default": false
    }
  },
  "required": ["multiSelect"]
};
var config = {
  name: "Tree",
  type: "tree",
  author: "Kjartan Jónsson",
  description: "Tree component",
  version: 0.1,
  relation: {
    contains: [],
    within: "component" // parent

  },
  options: options,
  state: StateTree
};

var style = function style(theme) {
  return {
    root: {
      width: '100%'
    }
  };
};

var TreeComponent = /*#__PURE__*/function (_TreeBase) {
  _inherits(TreeComponent, _TreeBase);

  var _super = _createSuper(TreeComponent);

  /**
   * Used to manage internal state of avatars
   */
  function TreeComponent(props) {
    var _this;

    _classCallCheck(this, TreeComponent);

    _this = _super.call(this, props);

    _this.showSelected = function (id, idx) {
      // parent implementation to update the visual representation
      return true; // returns true to update state. Else do not update state.
    };

    _this.updateView = function (action, arr, updated, data) {
      // extend by parent
      if (action === 'select') {
        this.setState(data);
      }

      return true;
    };

    _this.componentRef = /*#__PURE__*/React__default["default"].createRef();
    return _this;
  }

  _createClass(TreeComponent, [{
    key: "renderTree",
    value: function renderTree(nodes) {
      var _this2 = this;

      if (Array.isArray(nodes)) {
        return nodes.map(function (node) {
          return _this2.renderTree(node);
        });
      } else {
        return /*#__PURE__*/React__default["default"].createElement(TreeItem__default["default"], {
          key: nodes.id,
          disabled: nodes.disabled,
          nodeId: nodes.id,
          label: nodes.title,
          onClick: function onClick(event) {
            return _this2.handleSelect(nodes.id, nodes, nodes.id, null);
          }
        }, Array.isArray(nodes.children) ? nodes.children.map(function (node) {
          return _this2.renderTree(node);
        }) : null);
      }
    }
  }, {
    key: "render",
    value: function render() {
      //const classes = useStyles();
      var selected = [];
      var expanded = [];
      var viewStyle = this.props.config.options;
      var tree = this.getTreeFromList();

      if (this.state.selectedId) {
        selected.push(this.state.selectedId); // expanded.push(this.state.selectedId);
      }

      return /*#__PURE__*/React__default["default"].createElement(TreeView__default["default"], {
        ref: this.componentRef // configure
        ,
        multiSelect: viewStyle.multiSelect || false // config state
        ,
        selected: selected,
        defaultExpanded: expanded // design
        ,
        className: style.root,
        defaultCollapseIcon: /*#__PURE__*/React__default["default"].createElement(ExpandMoreIcon__default["default"], null),
        defaultExpandIcon: /*#__PURE__*/React__default["default"].createElement(ChevronRightIcon__default["default"], null)
      }, this.renderTree(tree));
    }
  }]);

  return TreeComponent;
}(TreeBase);

var TreeComponent$1 = styles.withStyles(style, {
  withTheme: true
})(TreeComponent);

function Tree(props) {
  // lets enumerate schema to extract uiSchema and validation
  return /*#__PURE__*/React__default["default"].createElement(TreeComponent$1, props);
}
function registerTree(component_manager) {
  // self register component to layout manager
  component_manager.registerComponent({
    component: Tree,
    type: config.type,
    events: events,
    triggers: triggers,
    config: config
  });
}

// Managers and factories
function registerComponents(component_manager) {
  if (!component_manager) {
    component_manager = ComponentManager.getInstance();
  }

  if (component_manager.constructor.name !== 'ComponentManager') {
    throw "Constructor must be component manager";
  }

  registerView(component_manager);
  registerCard(component_manager);
  registerButton(component_manager);
  register(component_manager);
  registerList(component_manager);
  registerTable(component_manager);
  registerDataGrid(component_manager);
  registerText(component_manager);
  registerImage(component_manager);
  registerDropdown(component_manager);
  registerContainer(component_manager);
  registerGrid(component_manager);
  registerGridColumn(component_manager);
  registerGridRow(component_manager);
  registerAccordion(component_manager);
  registerTabs(component_manager);
  registerLayout(component_manager);
  registerDialog(component_manager);
  registerPopup(component_manager);
  registerTree(component_manager);
  registerTextfield(component_manager);
  registerCheckbox(component_manager);
}

function World() {
  return /*#__PURE__*/React__namespace.createElement(Stack__default["default"], {
    spacing: 2,
    direction: "row"
  }, /*#__PURE__*/React__namespace.createElement(Button__default["default"], {
    variant: "text"
  }, "Text"), /*#__PURE__*/React__namespace.createElement(Button__default["default"], {
    variant: "contained"
  }, "Contained"), /*#__PURE__*/React__namespace.createElement(Button__default["default"], {
    variant: "outlined"
  }, "Outlined"));
}

exports.Dialog = Dialog;
exports.Layout = Layout;
exports.World = World;
exports.registerComponents = registerComponents;
