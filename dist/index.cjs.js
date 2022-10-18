'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var eventfullCoreRuntime = require('eventfull-core-runtime');
var React = require('react');
var Avatar$1 = require('@mui/material/Avatar');
var AvatarGroup = require('@mui/lab/AvatarGroup');
var Tooltip = require('@mui/material/Tooltip');
var styles = require('@mui/styles');
require('font-awesome/css/font-awesome.min.css');
var Fab = require('@mui/material/Fab');
var Button$1 = require('@mui/material/Button');
var ButtonGroup = require('@mui/material/ButtonGroup');
var IconButton = require('@mui/material/IconButton');
var Icon = require('@mui/material/Icon');
var Card$1 = require('@mui/material/Card');
var CardHeader = require('@mui/material/CardHeader');
var CardMedia = require('@mui/material/CardMedia');
var CardActions = require('@mui/material/CardActions');
require('object-hash');
require('lodash');
var ImageList = require('@mui/material/ImageList');
var ImageListItem = require('@mui/material/ImageListItem');
var List$1 = require('@mui/material/List');
var ListItem = require('@mui/material/ListItem');
var ListItemText = require('@mui/material/ListItemText');
var ListItemAvatar = require('@mui/material/ListItemAvatar');
var ListItemSecondaryAction = require('@mui/material/ListItemSecondaryAction');
var TextField = require('@mui/material/TextField');
var Autocomplete = require('@mui/lab/Autocomplete');
var Box = require('@mui/material/Box');
var Typography = require('@mui/material/Typography');
var TreeView = require('@mui/lab/TreeView');
var ExpandMoreIcon = require('@mui/icons-material/ExpandMore');
var ChevronRightIcon = require('@mui/icons-material/ChevronRight');
var TreeItem = require('@mui/lab/TreeItem');
var Table$1 = require('@mui/material/Table');
var TableBody = require('@mui/material/TableBody');
var TableCell = require('@mui/material/TableCell');
var TableContainer = require('@mui/material/TableContainer');
var TableHead = require('@mui/material/TableHead');
var TableRow = require('@mui/material/TableRow');
var xDataGrid = require('@mui/x-data-grid');
var FormLabel = require('@mui/material/FormLabel');
var FormControl = require('@mui/material/FormControl');
var FormGroup = require('@mui/material/FormGroup');
var FormControlLabel = require('@mui/material/FormControlLabel');
var FormHelperText = require('@mui/material/FormHelperText');
var Checkbox$1 = require('@mui/material/Checkbox');
var AppBar = require('@mui/material/AppBar');
var Tabs$1 = require('@mui/material/Tabs');
var Tab = require('@mui/material/Tab');
var Grid$1 = require('@mui/material/Grid');
var Accordion$1 = require('@mui/material/Accordion');
var AccordionSummary = require('@mui/material/AccordionSummary');
var AccordionDetails = require('@mui/material/AccordionDetails');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Avatar__default = /*#__PURE__*/_interopDefaultLegacy(Avatar$1);
var AvatarGroup__default = /*#__PURE__*/_interopDefaultLegacy(AvatarGroup);
var Tooltip__default = /*#__PURE__*/_interopDefaultLegacy(Tooltip);
var Fab__default = /*#__PURE__*/_interopDefaultLegacy(Fab);
var Button__default = /*#__PURE__*/_interopDefaultLegacy(Button$1);
var ButtonGroup__default = /*#__PURE__*/_interopDefaultLegacy(ButtonGroup);
var IconButton__default = /*#__PURE__*/_interopDefaultLegacy(IconButton);
var Icon__default = /*#__PURE__*/_interopDefaultLegacy(Icon);
var Card__default = /*#__PURE__*/_interopDefaultLegacy(Card$1);
var CardHeader__default = /*#__PURE__*/_interopDefaultLegacy(CardHeader);
var CardMedia__default = /*#__PURE__*/_interopDefaultLegacy(CardMedia);
var CardActions__default = /*#__PURE__*/_interopDefaultLegacy(CardActions);
var ImageList__default = /*#__PURE__*/_interopDefaultLegacy(ImageList);
var ImageListItem__default = /*#__PURE__*/_interopDefaultLegacy(ImageListItem);
var List__default = /*#__PURE__*/_interopDefaultLegacy(List$1);
var ListItem__default = /*#__PURE__*/_interopDefaultLegacy(ListItem);
var ListItemText__default = /*#__PURE__*/_interopDefaultLegacy(ListItemText);
var ListItemAvatar__default = /*#__PURE__*/_interopDefaultLegacy(ListItemAvatar);
var ListItemSecondaryAction__default = /*#__PURE__*/_interopDefaultLegacy(ListItemSecondaryAction);
var TextField__default = /*#__PURE__*/_interopDefaultLegacy(TextField);
var Autocomplete__default = /*#__PURE__*/_interopDefaultLegacy(Autocomplete);
var Box__default = /*#__PURE__*/_interopDefaultLegacy(Box);
var Typography__default = /*#__PURE__*/_interopDefaultLegacy(Typography);
var TreeView__default = /*#__PURE__*/_interopDefaultLegacy(TreeView);
var ExpandMoreIcon__default = /*#__PURE__*/_interopDefaultLegacy(ExpandMoreIcon);
var ChevronRightIcon__default = /*#__PURE__*/_interopDefaultLegacy(ChevronRightIcon);
var TreeItem__default = /*#__PURE__*/_interopDefaultLegacy(TreeItem);
var Table__default = /*#__PURE__*/_interopDefaultLegacy(Table$1);
var TableBody__default = /*#__PURE__*/_interopDefaultLegacy(TableBody);
var TableCell__default = /*#__PURE__*/_interopDefaultLegacy(TableCell);
var TableContainer__default = /*#__PURE__*/_interopDefaultLegacy(TableContainer);
var TableHead__default = /*#__PURE__*/_interopDefaultLegacy(TableHead);
var TableRow__default = /*#__PURE__*/_interopDefaultLegacy(TableRow);
var FormLabel__default = /*#__PURE__*/_interopDefaultLegacy(FormLabel);
var FormControl__default = /*#__PURE__*/_interopDefaultLegacy(FormControl);
var FormGroup__default = /*#__PURE__*/_interopDefaultLegacy(FormGroup);
var FormControlLabel__default = /*#__PURE__*/_interopDefaultLegacy(FormControlLabel);
var FormHelperText__default = /*#__PURE__*/_interopDefaultLegacy(FormHelperText);
var Checkbox__default = /*#__PURE__*/_interopDefaultLegacy(Checkbox$1);
var AppBar__default = /*#__PURE__*/_interopDefaultLegacy(AppBar);
var Tabs__default = /*#__PURE__*/_interopDefaultLegacy(Tabs$1);
var Tab__default = /*#__PURE__*/_interopDefaultLegacy(Tab);
var Grid__default = /*#__PURE__*/_interopDefaultLegacy(Grid$1);
var Accordion__default = /*#__PURE__*/_interopDefaultLegacy(Accordion$1);
var AccordionSummary__default = /*#__PURE__*/_interopDefaultLegacy(AccordionSummary);
var AccordionDetails__default = /*#__PURE__*/_interopDefaultLegacy(AccordionDetails);

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

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
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

var options$j = {
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
var events$i = eventfullCoreRuntime.structs.ListBase.events;
var triggers$i = eventfullCoreRuntime.structs.ListBase.triggers;
var config$i = {
  name: "Avatars",
  type: "avatars",
  author: "Kjartan Jónsson",
  description: "Avatar component",
  version: 0.1,
  relation: {
    contains: [],
    within: "component" // parent

  },
  options: options$j,
  state: eventfullCoreRuntime.structs.ListBase.StateList
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

var AvatarComponent = /*#__PURE__*/function (_structs$ListBase$Lis) {
  _inherits(AvatarComponent, _structs$ListBase$Lis);

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
}(eventfullCoreRuntime.structs.ListBase.ListBase);

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
    type: config$i.type,
    events: events$i,
    triggers: triggers$i,
    config: config$i
  });
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

var events$h = eventfullCoreRuntime.structs.ListBase.events;
var triggers$h = eventfullCoreRuntime.structs.ListBase.triggers;
var options$i = {
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
var item$9 = {
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
var config$h = {
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
    "button": item$9
  },
  options: options$i,
  state: eventfullCoreRuntime.structs.ListBase.StateList
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


var ButtonComponent = /*#__PURE__*/function (_structs$ListBase$Lis) {
  _inherits(ButtonComponent, _structs$ListBase$Lis);

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
}(eventfullCoreRuntime.structs.ListBase.ListBase);

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
    type: config$h.type,
    events: events$h,
    triggers: triggers$h,
    config: config$h
  });
}

function renderContent(classes, item) {
  var content = item.content;

  var content_type = _typeof(content);

  if (content_type === 'object') {
    content = eventfullCoreRuntime.layout.Manager.ComponentManager.getInstance().getComponentInstance(content.type, content || {});
  } else {
    if (content_type !== 'string') {
      content = "Expected object for content having id " + item.id;
    }
  }

  return content;
}

var isObject = function isObject(obj) {
  if (_typeof(obj) === 'object') {
    if (!Array.isArray(obj)) {
      return true;
    }
  }

  return false;
};

// import DDAvatar from '../Avatar/Avatar';
// import { LayoutRender } from '../Layout/Layout';
// import CardContent from '@mui/material/CardContent';

var events$g = eventfullCoreRuntime.structs.ListBase.events;
var triggers$g = eventfullCoreRuntime.structs.ListBase.triggers;
var options$h = {
  "id": "cards",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "Card options",
  "x-layout": "component",
  "type": "object",
  "version": 0.1,
  "properties": {},
  "required": []
};
var config$g = {
  name: "Cards",
  type: "cards",
  author: "Kjartan Jónsson",
  description: "Card component",
  version: 0.1,
  relation: {
    contains: [],
    within: "component" // parent

  },
  options: options$h,
  state: eventfullCoreRuntime.structs.ListBase.StateList
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

var CardComponent = /*#__PURE__*/function (_structs$ListBase$Lis) {
  _inherits(CardComponent, _structs$ListBase$Lis);

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
}(eventfullCoreRuntime.structs.ListBase.ListBase);

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
    type: config$g.type,
    events: events$g,
    triggers: triggers$g,
    config: config$g
  });
}

var events$f = eventfullCoreRuntime.structs.ListBase.events;
var triggers$f = eventfullCoreRuntime.structs.ListBase.triggers;
var options$g = {
  "id": "images",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "Image options",
  "x-layout": "component",
  "type": "object",
  "version": 0.1,
  "properties": {},
  "required": []
};
var item$8 = {
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
var config$f = {
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
    "image": item$8
  },
  options: options$g,
  state: eventfullCoreRuntime.structs.ListBase.StateList
};

var style$f = function style(theme) {
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

var ImageComponent = /*#__PURE__*/function (_structs$ListBase$Lis) {
  _inherits(ImageComponent, _structs$ListBase$Lis);

  var _super = _createSuper(ImageComponent);

  function ImageComponent() {
    _classCallCheck(this, ImageComponent);

    return _super.apply(this, arguments);
  }

  _createClass(ImageComponent, [{
    key: "render",
    value: function render() {
      var classes = style$f;
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
}(eventfullCoreRuntime.structs.ListBase.ListBase);

var ImageComponent$1 = styles.withStyles(style$f, {
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
    type: config$f.type,
    events: events$f,
    triggers: triggers$f,
    config: config$f
  });
}

var events$e = eventfullCoreRuntime.structs.ListBase.events;
var triggers$e = eventfullCoreRuntime.structs.ListBase.triggers;
var options$f = {
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
var item$7 = {
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
var config$e = {
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
    "list-item": item$7
  },
  options: options$f,
  state: eventfullCoreRuntime.structs.ListBase.StateList
};

var style$e = function style(theme) {
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

var ListComponent = /*#__PURE__*/function (_structs$ListBase$Lis) {
  _inherits(ListComponent, _structs$ListBase$Lis);

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
}(eventfullCoreRuntime.structs.ListBase.ListBase);

var ListComponent$1 = styles.withStyles(style$e, {
  withTheme: true
})(ListComponent);

var events$d = eventfullCoreRuntime.structs.ListBase.events;
var triggers$d = eventfullCoreRuntime.structs.ListBase.triggers;
var options$e = {
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
var item$6 = {
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
var config$d = {
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
    "dropdown-item": item$6
  },
  options: options$e,
  state: eventfullCoreRuntime.structs.ListBase.StateList
};

var style$d = function style(theme) {
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

var DropdownComponent = /*#__PURE__*/function (_structs$ListBase$Lis) {
  _inherits(DropdownComponent, _structs$ListBase$Lis);

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
}(eventfullCoreRuntime.structs.ListBase.ListBase);

var DropdownComponent$1 = styles.withStyles(style$d, {
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
    type: config$e.type,
    events: events$e,
    triggers: triggers$e,
    config: config$e
  });
}
function registerDropdown(component_manager) {
  // self register component to layout manager
  component_manager.registerComponent({
    component: Dropdown,
    type: config$d.type,
    events: events$d,
    triggers: triggers$d,
    config: config$d
  });
}

var events$c = eventfullCoreRuntime.structs.ListBase.events;
var triggers$c = eventfullCoreRuntime.structs.ListBase.triggers;
var options$d = {
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
var item$5 = {
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
var config$c = {
  name: "Texts",
  type: "texts",
  author: "Kjartan Jónsson",
  description: "Texts component",
  version: 0.1,
  relation: {
    contains: ["text"],
    within: "component" // parent

  },
  options: options$d,
  contains: {
    "text": item$5
  },
  state: eventfullCoreRuntime.structs.ListBase.StateList
};

var style$c = function style(theme) {
  return {};
};

var TextComponent = /*#__PURE__*/function (_structs$ListBase$Lis) {
  _inherits(TextComponent, _structs$ListBase$Lis);

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
}(eventfullCoreRuntime.structs.ListBase.ListBase);

var TextComponent$1 = styles.withStyles(style$c, {
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
    type: config$c.type,
    events: events$c,
    triggers: triggers$c,
    config: config$c
  });
}

var events$b = eventfullCoreRuntime.structs.TreeBase.events;
var triggers$b = eventfullCoreRuntime.structs.TreeBase.triggers;
var options$c = {
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
var config$b = {
  name: "Tree",
  type: "tree",
  author: "Kjartan Jónsson",
  description: "Tree component",
  version: 0.1,
  relation: {
    contains: [],
    within: "component" // parent

  },
  options: options$c,
  state: eventfullCoreRuntime.structs.TreeBase.StateTree
};

var style$b = function style(theme) {
  return {
    root: {
      width: '100%'
    }
  };
};

var TreeComponent = /*#__PURE__*/function (_structs$TreeBase$Tre) {
  _inherits(TreeComponent, _structs$TreeBase$Tre);

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
        className: style$b.root,
        defaultCollapseIcon: /*#__PURE__*/React__default["default"].createElement(ExpandMoreIcon__default["default"], null),
        defaultExpandIcon: /*#__PURE__*/React__default["default"].createElement(ChevronRightIcon__default["default"], null)
      }, this.renderTree(tree));
    }
  }]);

  return TreeComponent;
}(eventfullCoreRuntime.structs.TreeBase.TreeBase);

var TreeComponent$1 = styles.withStyles(style$b, {
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
    type: config$b.type,
    events: events$b,
    triggers: triggers$b,
    config: config$b
  });
}

var events$a = eventfullCoreRuntime.structs.ListSchemaBase.events;
var triggers$a = eventfullCoreRuntime.structs.ListSchemaBase.triggers;
var options$b = {
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
var config$a = {
  name: "Table",
  type: "table",
  author: "Kjartan Jónsson",
  description: "Table component",
  version: 0.1,
  relation: {
    contains: [],
    within: "component" // parent

  },
  options: options$b,
  state: eventfullCoreRuntime.structs.ListSchemaBase.StateSchemaList
}; // https://mui.com/material-ui/api/table-row/#css

var style$a = function style(theme) {
  return {
    root: {
      width: '100%'
    }
  };
};

var TableComponent = /*#__PURE__*/function (_structs$ListSchemaBa) {
  _inherits(TableComponent, _structs$ListSchemaBa);

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
        size: options$b.properties.size.default,
        select: options$b.properties.select.default
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
}(eventfullCoreRuntime.structs.ListSchemaBase.ListSchemaBase);

var TableComponent$1 = styles.withStyles(style$a, {
  withTheme: true
})(TableComponent);

var events$9 = eventfullCoreRuntime.structs.ListSchemaBase.events;
var triggers$9 = eventfullCoreRuntime.structs.ListSchemaBase.triggers;
var options$a = {
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
var config$9 = {
  name: "DataGrid",
  type: "datagrid",
  author: "Kjartan Jónsson",
  description: "Data Grid component",
  version: 0.1,
  relation: {
    contains: [],
    within: "component" // parent

  },
  options: options$a,
  state: eventfullCoreRuntime.structs.ListSchemaBase.StateSchemaList
}; // https://mui.com/material-ui/api/table-row/#css

var style$9 = function style(theme) {
  return {
    root: {
      width: '100%'
    }
  };
};

var DataGridComponent = /*#__PURE__*/function (_structs$ListSchemaBa) {
  _inherits(DataGridComponent, _structs$ListSchemaBa);

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
        /*
        let format = undefined; // by default treat everything as string
        if (prop['type'] === 'number') { format = (value) => value; } // FIXME: local locale
        if (prop['format'] === 'date') { format = (value) => value; } // FIXME: handle date 
        if (prop['type'] === 'date-time') { format = (value) => value; } // FIXME: handle date-time
        */

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
        size: options$a.properties.size.default,
        select: options$a.properties.select.default
      };
    }

    return _this;
  }

  _createClass(DataGridComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var columns = this.getSchemaColumns(this.state.schema); // https://v4.mui.com/api/data-grid/data-grid/

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
}(eventfullCoreRuntime.structs.ListSchemaBase.ListSchemaBase);

var DataGridComponent$1 = styles.withStyles(style$9, {
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
    type: config$a.type,
    events: events$a,
    triggers: triggers$a,
    config: config$a
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
    type: config$9.type,
    events: events$9,
    triggers: triggers$9,
    config: config$9
  });
}

var events$8 = eventfullCoreRuntime.structs.InputBase.events;
var triggers$8 = eventfullCoreRuntime.structs.InputBase.triggers;
var options$9 = {
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
var config$8 = {
  name: "Textfield",
  type: "textfield",
  author: "Kjartan Jónsson",
  description: "Text input component",
  version: 0.1,
  relation: {
    contains: [],
    within: "component" // parent

  },
  options: options$9,
  state: eventfullCoreRuntime.structs.InputBase.StateInput
};

var style$8 = function style(theme) {
  return {// https://material-ui.com/styles/basics/
  };
};

var TextfieldComponent = /*#__PURE__*/function (_structs$InputBase$In) {
  _inherits(TextfieldComponent, _structs$InputBase$In);

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
}(eventfullCoreRuntime.structs.InputBase.InputBase);

var TextfieldComponent$1 = styles.withStyles(style$8, {
  withTheme: true
})(TextfieldComponent);

var events$7 = eventfullCoreRuntime.structs.ListBase.events;
var triggers$7 = eventfullCoreRuntime.structs.ListBase.triggers;
var options$8 = {
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
var item$4 = {
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
var config$7 = {
  name: "Checkboxes",
  type: "checkboxes",
  author: "Kjartan Jónsson",
  description: "Checkbox component",
  version: 0.1,
  relation: {
    contains: ["checkbox"],
    within: "component" // parent

  },
  options: options$8,
  contains: {
    "checkbox": item$4
  },
  state: eventfullCoreRuntime.structs.ListBase.StateList
};

var style$7 = function style(theme) {
  return {
    root: {
      justifyContent: 'center'
    }
  };
};

var CheckboxComponent = /*#__PURE__*/function (_structs$ListBase$Lis) {
  _inherits(CheckboxComponent, _structs$ListBase$Lis);

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
}(eventfullCoreRuntime.structs.ListBase.ListBase);

var CheckboxComponent$1 = styles.withStyles(style$7, {
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
    type: config$8.type,
    events: events$8,
    triggers: triggers$8,
    config: config$8
  });
}
function registerCheckbox(component_manager) {
  // self register component to layout manager
  component_manager.registerComponent({
    component: Checkbox,
    type: config$7.type,
    events: events$7,
    triggers: triggers$7,
    config: config$7
  });
}

eventfullCoreRuntime.layout.LayoutBase.events;
eventfullCoreRuntime.layout.LayoutBase.triggers;
var options$7 = {
  "id": "container",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "Container options",
  "x-layout": "component",
  "type": "object",
  "version": 0.1,
  "properties": {},
  "required": []
};
({
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
  options: options$7,
  state: eventfullCoreRuntime.layout.LayoutBase.StateLayout
});

var style$6 = function style(theme) {
  return {};
};

var ContainerComponent = /*#__PURE__*/function (_layout$LayoutBase$La) {
  _inherits(ContainerComponent, _layout$LayoutBase$La);

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
}(eventfullCoreRuntime.layout.LayoutBase.LayoutBase);

styles.withStyles(style$6, {
  withTheme: true
})(ContainerComponent);

var events$6 = eventfullCoreRuntime.layout.LayoutBase.events;
var triggers$6 = eventfullCoreRuntime.layout.LayoutBase.triggers;
var options$6 = {
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
var item$3 = {
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
var config$6 = {
  name: "Tabs",
  type: "tabs",
  author: "Kjartan Jónsson",
  description: "Tabs component",
  version: 0.1,
  relation: {
    contains: ["tab"],
    within: "component" // parent

  },
  options: options$6,
  contains: {
    'tab': item$3
  },
  state: eventfullCoreRuntime.layout.LayoutBase.StateLayout
};

var style$5 = function style(theme) {
  return {};
};

var TabsComponent = /*#__PURE__*/function (_layout$LayoutBase$La) {
  _inherits(TabsComponent, _layout$LayoutBase$La);

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
}(eventfullCoreRuntime.layout.LayoutBase.LayoutBase);

TabsComponent.propTypes = {//data: PropTypes.instanceOf(Array).isRequired,
};
var TabsComponent$1 = styles.withStyles(style$5, {
  withTheme: true
})(TabsComponent);

var events$5 = eventfullCoreRuntime.layout.LayoutBase.events;
var triggers$5 = eventfullCoreRuntime.layout.LayoutBase.triggers;
var options$5 = {
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
  state: eventfullCoreRuntime.layout.LayoutBase.StateLayout // styles

};

var style$4 = function style(theme) {
  return {};
};

var StateGrid = eventfullCoreRuntime.layout.LayoutBase.StateLayout;
var GridComponent = /*#__PURE__*/function (_layout$LayoutBase$La) {
  _inherits(GridComponent, _layout$LayoutBase$La);

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
}(eventfullCoreRuntime.layout.LayoutBase.LayoutBase);
var GridComponent$1 = styles.withStyles(style$4, {
  withTheme: true
})(GridComponent);

var events$4 = events$5;
var triggers$4 = triggers$5;
var options$4 = {
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
var item$2 = {
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
var config$4 = {
  name: "Grid rows",
  type: "grid-rows",
  author: "Kjartan Jónsson",
  description: "Grid component",
  version: 0.1,
  relation: {
    contains: ["grid-row"],
    within: "component" // parent

  },
  options: options$4,
  contains: {
    'grid-row': item$2
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

var events$3 = events$5;
var triggers$3 = triggers$5;
var options$3 = {
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
var item$1 = {
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
var config$3 = {
  name: "Grid columns",
  type: "grid-columns",
  author: "Kjartan Jónsson",
  description: "Grid component",
  version: 0.1,
  relation: {
    contains: ["grid-column"],
    within: "component" // parent

  },
  options: options$3,
  contains: {
    'grid-column': item$1
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

var events$2 = eventfullCoreRuntime.layout.LayoutBase.events;
var triggers$2 = eventfullCoreRuntime.layout.LayoutBase.triggers;
var options$2 = {
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
var item = {
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
var config$2 = {
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
    "accordion-section": item
  },
  options: options$2,
  state: eventfullCoreRuntime.layout.LayoutBase.StateLayout
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

var AccordionComponent = /*#__PURE__*/function (_layout$LayoutBase$La) {
  _inherits(AccordionComponent, _layout$LayoutBase$La);

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
}(eventfullCoreRuntime.layout.LayoutBase.LayoutBase);

var AccordionComponent$1 = styles.withStyles(style$1, {
  withTheme: true
})(AccordionComponent);

var events$1 = eventfullCoreRuntime.layout.LayoutBase.events;
var triggers$1 = eventfullCoreRuntime.layout.LayoutBase.triggers;
var options$1 = {
  "id": "layout",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "View options",
  "x-layout": "component",
  "type": "object",
  "version": 0.1,
  "properties": {},
  "required": []
};
var config$1 = {
  name: "Layout",
  type: "layout",
  author: "Kjartan Jónsson",
  description: "LayoutComponent component",
  version: 0.1,
  relation: {
    contains: [],
    within: "component" // parent

  },
  options: options$1,
  state: eventfullCoreRuntime.layout.LayoutBase.StateLayout
};

var style = function style(theme) {
  return {};
};

var LayoutComponent = /*#__PURE__*/function (_layout$LayoutBase$La) {
  _inherits(LayoutComponent, _layout$LayoutBase$La);

  var _super = _createSuper(LayoutComponent);

  /**
   * Used to manage layout
   */
  function LayoutComponent(props) {
    _classCallCheck(this, LayoutComponent);

    props.config.options = _objectSpread2(_objectSpread2({}, {}), props.config.options);
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
            content.push( /*#__PURE__*/React__default["default"].createElement(eventfullCoreRuntime.layout.Layout.Layouter, {
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
}(eventfullCoreRuntime.layout.LayoutBase.LayoutBase);

var LayoutComponent$1 = styles.withStyles(style, {
  withTheme: true
})(LayoutComponent);

var events = eventfullCoreRuntime.layout.LayoutBase.events;
var triggers = eventfullCoreRuntime.layout.LayoutBase.triggers;
var options = {
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
var config = {
  name: "View",
  type: "view",
  author: "Kjartan Jónsson",
  description: "ViewComponent component",
  version: 0.1,
  relation: {
    contains: [],
    within: "component" // parent

  },
  options: options
};

var ViewComponent = /*#__PURE__*/function (_layout$LayoutBase$La) {
  _inherits(ViewComponent, _layout$LayoutBase$La);

  var _super = _createSuper(ViewComponent);

  /**
   * Used to manage layout
   */
  function ViewComponent(props) {
    var _this;

    _classCallCheck(this, ViewComponent);

    props.config.options = props.config.options || {};
    _this = _super.call(this, props);
    _this.eventDD = _this.registerComponent({}, {}, config);
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
            content.push( /*#__PURE__*/React__default["default"].createElement(eventfullCoreRuntime.layout.Layout.Layouter, {
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
}(eventfullCoreRuntime.layout.LayoutBase.LayoutBase);

function View(props) {
  // TODO: wrap in separate component that supports routing
  return /*#__PURE__*/React__default["default"].createElement(ViewComponent, props);
}
function Layout(props) {
  // lets enumerate schema to extract uiSchema and validation
  return /*#__PURE__*/React__default["default"].createElement(LayoutComponent$1, props);
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
    type: config.type,
    events: events,
    triggers: triggers,
    config: config
  });
}
function registerGrid(component_manager) {
  // self register component to layout manager
  component_manager.registerComponent({
    component: Grid,
    type: 'grid',
    // configGrid.type,
    events: events$5,
    triggers: triggers$5,
    config: config$5
  });
}
function registerGridColumn(component_manager) {
  // self register component to layout manager
  component_manager.registerComponent({
    component: GridColumn,
    type: config$3.type,
    events: events$3,
    triggers: triggers$3,
    config: config$3
  });
}
function registerGridRow(component_manager) {
  // self register component to layout manager
  component_manager.registerComponent({
    component: GridRow,
    type: config$4.type,
    events: events$4,
    triggers: triggers$4,
    config: config$4
  });
}
function registerAccordion(component_manager) {
  // self register component to layout manager
  component_manager.registerComponent({
    component: Accordion,
    type: config$2.type,
    events: events$2,
    triggers: triggers$2,
    config: config$2
  });
}
function registerTabs(component_manager) {
  // self register component to layout manager
  component_manager.registerComponent({
    component: Tabs,
    type: config$6.type,
    events: events$6,
    triggers: triggers$6,
    config: config$6
  });
}
function registerLayout(component_manager) {
  // self register component to layout manager
  component_manager.registerComponent({
    component: Layout,
    type: config$1.type,
    events: events$1,
    triggers: triggers$1,
    config: config$1
  });
}

// Managers and factories

function registerComponents(component_manager) {
  if (!component_manager) {
    component_manager = eventfullCoreRuntime.layout.Manager.ComponentManager.getInstance();
  }
  /*
  if (component_manager.constructor.name !== 'ComponentManager') {
      throw `Constructor must be component manager. Got type ${component_manager.constructor.name}`;
  }
  */


  register(component_manager);
  registerButton(component_manager);
  registerCard(component_manager);
  registerImage(component_manager);
  registerList(component_manager);
  registerDropdown(component_manager);
  registerText(component_manager);
  registerTree(component_manager);
  registerTable(component_manager);
  registerDataGrid(component_manager);
  registerTextfield(component_manager);
  registerCheckbox(component_manager);
  registerAccordion(component_manager);
  registerTabs(component_manager);
  registerGrid(component_manager);
  registerGridColumn(component_manager);
  registerGridRow(component_manager);
  registerLayout(component_manager);
  registerView(component_manager);
  /*    
      registerContainer(component_manager);
      registerDialog(component_manager);
      registerPopup(component_manager);
  */
}

exports.Layout = Layout;
exports.registerComponents = registerComponents;
