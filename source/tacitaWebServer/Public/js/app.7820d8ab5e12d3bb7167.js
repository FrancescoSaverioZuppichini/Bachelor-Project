webpackJsonp([1],Array(25).concat([
/* 25 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(207)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(109),
  /* template */
  __webpack_require__(194),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/tacitaWebServer/tacitaWebAdmin/src/components/Resources/Resource.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Resource.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-670fae40", Component.options)
  } else {
    hotAPI.reload("data-v-670fae40", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_DashBoard_DashBoard_vue__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_DashBoard_DashBoard_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_DashBoard_DashBoard_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_DashBoard_DisplayPage_vue__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_DashBoard_DisplayPage_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_DashBoard_DisplayPage_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_DashBoard_BeaconPage_vue__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_DashBoard_BeaconPage_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_DashBoard_BeaconPage_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_DashBoard_ApplicationPage_vue__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_DashBoard_ApplicationPage_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_DashBoard_ApplicationPage_vue__);







__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/',
    name: 'DashBoard',
    component: __WEBPACK_IMPORTED_MODULE_2__components_DashBoard_DashBoard_vue___default.a,
    children: [{
      path: '/display',
      name: 'DisplayPage',
      component: __WEBPACK_IMPORTED_MODULE_3__components_DashBoard_DisplayPage_vue___default.a
    }, {
      path: '/beacon',
      name: 'BeaconPage',
      component: __WEBPACK_IMPORTED_MODULE_4__components_DashBoard_BeaconPage_vue___default.a
    }, {
      path: '/application',
      name: 'ApplicationPage',
      component: __WEBPACK_IMPORTED_MODULE_5__components_DashBoard_ApplicationPage_vue___default.a
    }]
  }]
}));

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_flue_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_flue_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_flue_vue__);


var ws = new WebSocket('wss://' + window.location.origin.split('/')[2].split(':')[0] + ':3443/ws');

ws.onmessage = function (msg) {
  var data = JSON.parse(msg.data);

  __WEBPACK_IMPORTED_MODULE_0_flue_vue__["SuperStore"].dispatcher.dispatch(data);
};

ws.onopen = function (event) {
  console.log("WS connect");
};

/* unused harmony default export */ var _unused_webpack_default_export = (ws);

/***/ }),
/* 28 */,
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);



var BASE_URL = '';
var TACITA_URL = '/tacita/api';
var APPLICATION_URL = '/application/api';

/* harmony default export */ __webpack_exports__["a"] = ({
  'application': {
    fetchApplications: function fetchApplications() {
      return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('' + BASE_URL + TACITA_URL + '/application');
    },
    createApplication: function createApplication(app) {
      return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('' + BASE_URL + TACITA_URL + '/application', app);
    },
    editApplication: function editApplication(app) {
      return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.put('' + BASE_URL + TACITA_URL + '/application/' + app.id, app);
    },
    removeApplication: function removeApplication(app) {
      return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.delete('' + BASE_URL + TACITA_URL + '/application/' + app.id);
    }
  },
  'display': {
    fetchDisplays: function fetchDisplays(context) {
      return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('' + BASE_URL + TACITA_URL + '/display?context=' + context);
    },
    fetchDisplay: function fetchDisplay(id, context) {
      return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('' + BASE_URL + TACITA_URL + '/display/' + id + '?context=' + context);
    },
    createDisplay: function createDisplay(display) {
      return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('' + BASE_URL + TACITA_URL + '/display/', { display: display });
    },
    deteleDisplay: function deteleDisplay(display) {
      return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.delete('' + BASE_URL + TACITA_URL + '/display/' + display.id);
    },
    changeApp: function changeApp(display, app) {
      return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.put('' + BASE_URL + TACITA_URL + '/display/' + display.id + '/app/' + app.id);
    }
  },
  'beacon': {
    fetchBeacons: function fetchBeacons() {
      return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('' + BASE_URL + TACITA_URL + '/beacon');
    },
    fetchByBeaconId: function fetchByBeaconId(beaconId) {
      return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('' + BASE_URL + TACITA_URL + '/beacon/find?beaconId=' + beaconId);
    },
    editBeacon: function editBeacon(beacon) {
      return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.put('' + BASE_URL + TACITA_URL + '/beacon/' + beacon.id, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, beacon));
    },
    createBeacon: function createBeacon(beacon) {
      return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('' + BASE_URL + TACITA_URL + '/beacon', beacon);
    },
    deleteBeacon: function deleteBeacon(beacon) {
      return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.delete('' + BASE_URL + TACITA_URL + '/beacon/' + beacon.id);
    }
  }
});

/***/ }),
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(213)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(108),
  /* template */
  __webpack_require__(200),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/tacitaWebServer/tacitaWebAdmin/src/components/Page/Page.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Page.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f9bd2452", Component.options)
  } else {
    hotAPI.reload("data-v-f9bd2452", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(208)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(110),
  /* template */
  __webpack_require__(195),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/tacitaWebServer/tacitaWebAdmin/src/components/Resources/ResourcesWrapper.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ResourcesWrapper.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-68e75580", Component.options)
  } else {
    hotAPI.reload("data-v-68e75580", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__router_index_js__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__socket_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_flue_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_flue_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_flue_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__api_js__ = __webpack_require__(29);















var BeaconStore = function (_Store) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(BeaconStore, _Store);

  function BeaconStore() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, BeaconStore);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (BeaconStore.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(BeaconStore)).call(this));

    _this.state.beacons = { data: [], error: {}, isLoading: false };
    _this.state.beaconsLinkTo = function (id) {
      return _this.state.beacons.data.filter(function (beacon) {
        return beacon.display_id == id;
      });
    };
    _this.state.freeBeacons = function () {
      return _this.state.beacons.data.filter(function (beacon) {
        return beacon.display_id == null;
      });
    };

    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(BeaconStore, [{
    key: 'find',
    value: function find(toFind) {
      return this.state.beacons.data.filter(function (beacon) {
        return beacon.id == toFind.id;
      })[0];
    }
  }, {
    key: 'onEditBeaconSuccess',
    value: function onEditBeaconSuccess(_ref) {
      var data = _ref.data,
          beacon = _ref.beacon;

      var oldBeacon = this.find(beacon);
      oldBeacon = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(oldBeacon, beacon);

      __WEBPACK_IMPORTED_MODULE_7_vue__["default"].set(oldBeacon, 'edit', false);
    }
  }, {
    key: 'onCreateBeaconSuccess',
    value: function onCreateBeaconSuccess(_ref2) {
      var data = _ref2.data;

      this.state.beacons.data.push(data);
      this.state.showCreateDisplayModal = false;
    }
  }, {
    key: 'reduce',
    value: function reduce(action) {
      var _this2 = this;

      this.reduceMap(action, {
        FETCH_BEACONS_SUCCESS: function FETCH_BEACONS_SUCCESS(_ref3) {
          var data = _ref3.data;
          return _this2.state.beacons.data = data;
        },
        EDIT_BEACON_SUCCESS: this.onEditBeaconSuccess,
        DELETE_BEACON_SUCCESS: function DELETE_BEACON_SUCCESS(_ref4) {
          var beacon = _ref4.beacon;
          return _this2.state.beacons.data.splice(_this2.state.beacons.data.indexOf(beacon), 1);
        },
        CREATE_BEACON_SUCCESS: this.onCreateBeaconSuccess
      });
    }
  }, {
    key: 'actions',
    value: function actions(dispatcher, ctx) {
      return {
        fetchBeacons: function fetchBeacons() {
          __WEBPACK_IMPORTED_MODULE_11__api_js__["a" /* default */].beacon.fetchBeacons().then(function (data) {
            return dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_10_flue_vue__["Action"]('FETCH_BEACONS_SUCCESS', data));
          });
        },
        editBeacon: function editBeacon(beacon) {
          __WEBPACK_IMPORTED_MODULE_11__api_js__["a" /* default */].beacon.editBeacon(beacon).then(function (_ref5) {
            var data = _ref5.data;
            return dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_10_flue_vue__["Action"]('EDIT_BEACON_SUCCESS', { data: data, beacon: beacon }));
          });
        },
        createBeacon: function createBeacon(beacon) {
          __WEBPACK_IMPORTED_MODULE_11__api_js__["a" /* default */].beacon.createBeacon(beacon).then(function (data) {
            return dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_10_flue_vue__["Action"]('CREATE_BEACON_SUCCESS', data));
          });
        },
        deleteBeacon: function deleteBeacon(beacon) {
          __WEBPACK_IMPORTED_MODULE_11__api_js__["a" /* default */].beacon.deleteBeacon(beacon).then(function (data) {
            return dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_10_flue_vue__["Action"]('DELETE_BEACON_SUCCESS', { beacon: beacon }));
          });
        }
      };
    }
  }]);

  return BeaconStore;
}(__WEBPACK_IMPORTED_MODULE_10_flue_vue__["Store"]);

var beaconStore = new BeaconStore();
/* harmony default export */ __webpack_exports__["a"] = (beaconStore);

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__router_index_js__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__socket_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_flue_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_flue_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_flue_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__api_js__ = __webpack_require__(29);















var DisplayStore = function (_Store) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(DisplayStore, _Store);

  function DisplayStore() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, DisplayStore);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (DisplayStore.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(DisplayStore)).call(this));

    _this.state.displays = { data: [], error: {}, isLoading: false };
    _this.state.isDraggingBeacons = false;
    _this.state.showCreateDisplayModal = false;
    _this.state.isDraggingBeacon = false;
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(DisplayStore, [{
    key: 'addBeacon',
    value: function addBeacon(display) {
      var _this2 = this;

      __WEBPACK_IMPORTED_MODULE_7_vue__["default"].set(display, 'beacons', function () {
        return _this2.sStore.state.beaconsLinkTo(display.id);
      });
    }
  }, {
    key: 'onFetchDisplaysSuccess',
    value: function onFetchDisplaysSuccess(_ref) {
      var _this3 = this;

      var data = _ref.data;

      this.state.displays.data = data;
      this.state.displays.isLoading = false;

      this.state.displays.data.forEach(function (display) {
        return _this3.addBeacon(display);
      });
    }
  }, {
    key: 'onCreateDisplaySuccess',
    value: function onCreateDisplaySuccess(_ref2) {
      var data = _ref2.data;

      this.state.showCreateDisplayModal = false;
      this.addBeacon(data);
      this.state.displays.data.push(data);
    }
  }, {
    key: 'onDisplayChangeApp',
    value: function onDisplayChangeApp(_ref3) {
      var data = _ref3.data;

      console.log(data);
    }
  }, {
    key: 'onChangeDisplayAppSuccess',
    value: function onChangeDisplayAppSuccess(_ref4) {
      var display = _ref4.display,
          app = _ref4.app;

      display.apps = [app];
      this.onToogleDisplayApplicationsEdit({ display: display });
    }
  }, {
    key: 'onToogleDisplayApplicationsEdit',
    value: function onToogleDisplayApplicationsEdit(_ref5) {
      var display = _ref5.display;

      if (display.editApplications == undefined) __WEBPACK_IMPORTED_MODULE_7_vue__["default"].set(display, 'editApplications', false);
      display.editApplications = !display.editApplications;
    }
  }, {
    key: 'onEditDisplay',
    value: function onEditDisplay(display) {
      this.onToogleDisplayApplicationsEdit(display);
    }
  }, {
    key: 'reduce',
    value: function reduce(action) {
      var _this4 = this;

      this.reduceMap(action, {
        FETCH_DISPLAYS_SUCCESS: this.onFetchDisplaysSuccess,
        DELETE_DISPLAY_SUCCESS: function DELETE_DISPLAY_SUCCESS(_ref6) {
          var display = _ref6.display;
          return _this4.state.displays.data.splice(_this4.state.displays.data.indexOf(display), 1);
        },
        CREATE_DISPLAY_SUCCESS: this.onCreateDisplaySuccess,
        DISPLAY_CHANGE_APP: this.onDisplayChangeApp,
        CHANGE_DISPLAY_APP_SUCCESS: this.onChangeDisplayAppSuccess,
        TOOGLE_DISPLAY_APPLICATIONS_EDIT: this.onToogleDisplayApplicationsEdit,
        TOOGLE_EDIT_DISPLAY: this.onEditDisplay

      });
    }
  }, {
    key: 'actions',
    value: function actions(dispatcher, ctx) {
      return {
        fetchDisplays: function fetchDisplays() {
          __WEBPACK_IMPORTED_MODULE_11__api_js__["a" /* default */].display.fetchDisplays('all').then(function (data) {
            return dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_10_flue_vue__["Action"]('FETCH_DISPLAYS_SUCCESS', data));
          });
        },
        createDisplay: function createDisplay(display) {
          __WEBPACK_IMPORTED_MODULE_11__api_js__["a" /* default */].display.createDisplay(display).then(function (data) {
            return dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_10_flue_vue__["Action"]('CREATE_DISPLAY_SUCCESS', data));
          });
        },
        deleteDisplay: function deleteDisplay(display) {
          __WEBPACK_IMPORTED_MODULE_11__api_js__["a" /* default */].display.deteleDisplay(display).then(function () {
            return dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_10_flue_vue__["Action"]('DELETE_DISPLAY_SUCCESS', { display: display }));
          });
        },
        changeApp: function changeApp(display, app) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(display.apps), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var dispApp = _step.value;

              if (dispApp.id == app.id) return dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_10_flue_vue__["Action"]("CHANGE_DISPLAY_APP_SUCCESS", { display: display, app: app }));
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          return __WEBPACK_IMPORTED_MODULE_11__api_js__["a" /* default */].display.changeApp(display, app).then(function (data) {
            return dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_10_flue_vue__["Action"]("CHANGE_DISPLAY_APP_SUCCESS", { display: display, app: app }));
          }).catch(function (err) {
            return console.log(err);
          });
        },
        toogleDisplayApplicationsEdit: function toogleDisplayApplicationsEdit(display) {
          dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_10_flue_vue__["Action"]('TOOGLE_DISPLAY_APPLICATIONS_EDIT', { display: display }));
        },
        editDisplay: function editDisplay(display) {
          dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_10_flue_vue__["Action"]('TOOGLE_EDIT_DISPLAY', { display: display }));
        }
      };
    }
  }]);

  return DisplayStore;
}(__WEBPACK_IMPORTED_MODULE_10_flue_vue__["Store"]);

var displayStore = new DisplayStore();
/* harmony default export */ __webpack_exports__["a"] = (displayStore);

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_flue_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_flue_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_flue_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_axios__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__api_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_vue__ = __webpack_require__(7);











var ApplicationStore = function (_Store) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(ApplicationStore, _Store);

  function ApplicationStore() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, ApplicationStore);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ApplicationStore.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(ApplicationStore)).call(this));

    _this.state = {};
    _this.state.applications = { data: [], error: {}, isLoading: false };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(ApplicationStore, [{
    key: 'fetchApplicationsLoading',
    value: function fetchApplicationsLoading() {
      this.state.applications.isLoading = true;
      this.state.applications.data = [];
    }
  }, {
    key: 'fetchApplicationsSuccess',
    value: function fetchApplicationsSuccess(_ref) {
      var data = _ref.data;

      this.state.applications.data = data;
      this.state.applications.isLoading = false;
    }
  }, {
    key: 'find',
    value: function find(toFind) {
      return this.state.applications.data.filter(function (app) {
        return app.id == toFind.id;
      })[0];
    }
  }, {
    key: 'onEditApplicationSuccess',
    value: function onEditApplicationSuccess(_ref2) {
      var data = _ref2.data,
          app = _ref2.app;

      var oldApp = this.find(app);
      oldApp = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(oldApp, app);
      __WEBPACK_IMPORTED_MODULE_9_vue__["default"].set(oldApp, 'edit', false);
    }
  }, {
    key: 'onCreateApplicationSuccess',
    value: function onCreateApplicationSuccess(_ref3) {
      var data = _ref3.data;

      this.state.applications.data.push(data);
      this.state.showCreateDisplayModal = false;
    }
  }, {
    key: 'reduce',
    value: function reduce(action) {
      var _this2 = this;

      this.reduceMap(action, {
        FETCH_APPLICATION_LOADING: this.fetchApplicationsLoading,
        FETCH_APPLICATION_SUCCESS: this.fetchApplicationsSuccess,
        FETCH_APPLICATION_FAILURE: function FETCH_APPLICATION_FAILURE(_ref4) {
          var err = _ref4.err;
          _this2.state.applications.error = err;
        },
        CREATE_APPLICATION_SUCCESS: this.onCreateApplicationSuccess,
        EDIT_APPLICATION_SUCCESS: this.onEditApplicationSuccess,
        DELETE_APPLICATION_SUCCESS: function DELETE_APPLICATION_SUCCESS(_ref5) {
          var app = _ref5.app;
          return _this2.state.applications.data.splice(_this2.state.applications.data.indexOf(app), 1);
        }

      });
    }
  }, {
    key: 'actions',
    value: function actions(dispatcher, context) {
      return {
        fetchApplications: function fetchApplications() {
          dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_6_flue_vue__["Action"]("FETCH_APPLICATION_LOADING"));
          return __WEBPACK_IMPORTED_MODULE_8__api_js__["a" /* default */].application.fetchApplications().then(function (data) {
            return dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_6_flue_vue__["Action"]("FETCH_APPLICATION_SUCCESS", data));
          }).catch(function (err) {
            return console.log(err);
          });
        },
        createApplication: function createApplication(app) {
          return __WEBPACK_IMPORTED_MODULE_8__api_js__["a" /* default */].application.createApplication(app).then(function (data) {
            dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_6_flue_vue__["Action"]("CREATE_APPLICATION_SUCCESS", data));
            app.toogle = false;
          }).catch(function (err) {
            return console.log(err);
          });
        },
        editApplication: function editApplication(app) {
          return __WEBPACK_IMPORTED_MODULE_8__api_js__["a" /* default */].application.editApplication(app).then(function (_ref6) {
            var data = _ref6.data;
            return dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_6_flue_vue__["Action"]("EDIT_APPLICATION_SUCCESS", { data: data, app: app }));
          }).catch(function (err) {
            return console.log(err);
          });
        },
        removeApplication: function removeApplication(app) {
          return __WEBPACK_IMPORTED_MODULE_8__api_js__["a" /* default */].application.removeApplication(app).then(function (data) {
            return dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_6_flue_vue__["Action"]("DELETE_APPLICATION_SUCCESS", { app: app }));
          }).catch(function (err) {
            return console.log(err);
          });
        }
      };
    }
  }]);

  return ApplicationStore;
}(__WEBPACK_IMPORTED_MODULE_6_flue_vue__["Store"]);

var applicationStore = new ApplicationStore();
/* harmony default export */ __webpack_exports__["a"] = (applicationStore);

/***/ }),
/* 79 */,
/* 80 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(206)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(99),
  /* template */
  __webpack_require__(193),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/tacitaWebServer/tacitaWebAdmin/src/App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] App.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-42fa2d10", Component.options)
  } else {
    hotAPI.reload("data-v-42fa2d10", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_NavBar_NavBar_vue__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_NavBar_NavBar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_NavBar_NavBar_vue__);




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    NavBar: __WEBPACK_IMPORTED_MODULE_0__components_NavBar_NavBar_vue___default.a
  },
  name: 'app'
});

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Resources_Resource_vue__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Resources_Resource_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Resources_Resource_vue__);





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Beacon",
  components: {
    Resource: __WEBPACK_IMPORTED_MODULE_1__Resources_Resource_vue___default.a
  },
  props: ['data'],
  data: function data() {
    return {
      edit: false,
      editApplication: {}
    };
  },
  methods: {
    toogleEdit: function toogleEdit() {
      if (!this.data.edit) this.$set(this.data, 'edit', false);

      this.data.edit = !this.data.edit;
      if (this.data.edit) {
        this.editApplication = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, this.data);
      }
    }
  }
});

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Resources_Resource_vue__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Resources_Resource_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Resources_Resource_vue__);





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Beacon",
  components: {
    Resource: __WEBPACK_IMPORTED_MODULE_1__Resources_Resource_vue___default.a
  },
  props: ['data'],
  data: function data() {
    return {
      edit: false,
      editBeacon: {}
    };
  },
  methods: {
    toogleEdit: function toogleEdit() {
      if (!this.data.edit) this.$set(this.data, 'edit', false);

      this.data.edit = !this.data.edit;
      if (this.data.edit) {
        this.editBeacon = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, this.data);
      }
    }
  }
});

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Page_Page_vue__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Page_Page_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Page_Page_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Application_Application_vue__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Application_Application_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Application_Application_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Resources_ResourcesWrapper_vue__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Resources_ResourcesWrapper_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Resources_ResourcesWrapper_vue__);






/* harmony default export */ __webpack_exports__["default"] = ({
  name: "",
  components: {
    ResourcesWrapper: __WEBPACK_IMPORTED_MODULE_2__Resources_ResourcesWrapper_vue___default.a,
    Application: __WEBPACK_IMPORTED_MODULE_1__Application_Application_vue___default.a,
    Page: __WEBPACK_IMPORTED_MODULE_0__Page_Page_vue___default.a
  },
  watch: {
    '$store.state.showCreateDisplayModal': function $storeStateShowCreateDisplayModal(from, to) {
      this.newApplication = {
        application_id: null,
        toogle: false,
        name: null,
        material_icon: null,
        url: null

      };
    }
  },
  data: function data() {
    return {
      newApplication: {
        application_id: null,
        toogle: false

      },
      toogle: false

    };
  },
  methods: {
    createApplication: function createApplication() {
      this.newApplication.toogle = true;

      this.$store.actions.createApplication(this.newApplication);
    }
  }
});

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Page_Page_vue__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Page_Page_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Page_Page_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Beacon_Beacon_vue__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Beacon_Beacon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Beacon_Beacon_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Resources_ResourcesWrapper_vue__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Resources_ResourcesWrapper_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Resources_ResourcesWrapper_vue__);






/* harmony default export */ __webpack_exports__["default"] = ({
  name: "",
  components: {
    ResourcesWrapper: __WEBPACK_IMPORTED_MODULE_2__Resources_ResourcesWrapper_vue___default.a,
    Beacon: __WEBPACK_IMPORTED_MODULE_1__Beacon_Beacon_vue___default.a,
    Page: __WEBPACK_IMPORTED_MODULE_0__Page_Page_vue___default.a
  },
  watch: {
    '$store.state.showCreateDisplayModal': function $storeStateShowCreateDisplayModal(from, to) {
      this.newBeacon = {};
    }
  },
  data: function data() {
    return {
      newBeacon: {
        beacon_id: null
      }
    };
  }
});

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "DashBoard",
  components: {},
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    this.$store.actions.fetchDisplays();
    this.$store.actions.fetchBeacons();
    this.$store.actions.fetchApplications();
  }
});

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuedraggable__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuedraggable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vuedraggable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Resources_ResourcesWrapper_vue__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Resources_ResourcesWrapper_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Resources_ResourcesWrapper_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Display_Display_vue__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Display_Display_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Display_Display_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Page_Page_vue__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Page_Page_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Page_Page_vue__);









/* harmony default export */ __webpack_exports__["default"] = ({
  name: "DashBoard",
  components: {
    ResourcesWrapper: __WEBPACK_IMPORTED_MODULE_3__Resources_ResourcesWrapper_vue___default.a,
    Display: __WEBPACK_IMPORTED_MODULE_4__Display_Display_vue___default.a,
    Page: __WEBPACK_IMPORTED_MODULE_5__Page_Page_vue___default.a,
    draggable: __WEBPACK_IMPORTED_MODULE_2_vuedraggable___default.a
  },
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    this.$store.actions.fetchDisplays();
    this.$store.actions.fetchBeacons();
  },

  computed: {
    beacons: {
      get: function get() {
        return this.$store.state.freeBeacons();
      },
      set: function set(value) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default()(value), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var beacon = _step.value;

            if (beacon.display_id != null) {
              var newBeacon = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, beacon);
              newBeacon.display_id = null;
              this.$store.actions.editBeacon(newBeacon);
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }
  }
});

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuedraggable__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuedraggable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vuedraggable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Resources_Resource_vue__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Resources_Resource_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Resources_Resource_vue__);






/* harmony default export */ __webpack_exports__["default"] = ({
  name: "",
  components: {
    Resource: __WEBPACK_IMPORTED_MODULE_3__Resources_Resource_vue___default.a,
    draggable: __WEBPACK_IMPORTED_MODULE_2_vuedraggable___default.a
  },
  props: ['data'],
  data: function data() {
    return {
      drag: false,
      editApplication: false
    };
  },
  methods: {
    start: function start() {
      console.log('is dragging out');
      this.$store.state.isDraggingBeacon = true;
    },
    end: function end() {
      console.log('end');

      this.$store.state.isDraggingBeacon = false;
    }
  },
  computed: {
    beacons: {
      get: function get() {
        return this.data.beacons();
      },
      set: function set(value) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default()(value), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var beacon = _step.value;

            if (beacon.display_id == null) {
              var newBeacon = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, beacon);
              newBeacon.display_id = this.data.id;
              this.$store.actions.editBeacon(newBeacon);
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }
  }
});

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "navbar",
  data: function data() {
    return {};
  }
});

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Page",
  props: ["title"],
  data: function data() {
    return {};
  }
});

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Resource",
  data: function data() {
    return {};
  }
});

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Resource_vue__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Resource_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Resource_vue__);




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Resource: __WEBPACK_IMPORTED_MODULE_0__Resource_vue___default.a
  },
  name: "",
  props: ['data'],
  data: function data() {
    return {};
  }
});

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuetify__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuetify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vuetify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_flue_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_flue_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_flue_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_uikit__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_uikit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_uikit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stores_DisplayStore_js__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stores_BeaconStore_js__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__stores_applicationStore_js__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__socket_js__ = __webpack_require__(27);





__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_3_vuetify___default.a);
window.jQuery = window.$ = __webpack_require__(53);





window.UIkit = __WEBPACK_IMPORTED_MODULE_5_uikit___default.a;


__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_4_flue_vue__["flueVue"]);







__WEBPACK_IMPORTED_MODULE_4_flue_vue__["SuperStore"].addStores([__WEBPACK_IMPORTED_MODULE_6__stores_DisplayStore_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_7__stores_BeaconStore_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_8__stores_applicationStore_js__["a" /* default */]]);

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;

new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ }),
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n\n/*!\n * animate.css -http://daneden.me/animate\n * Version - 3.5.1\n * Licensed under the MIT license - http://opensource.org/licenses/MIT\n *\n * Copyright (c) 2016 Daniel Eden\n */\n\n.animated {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n.animated.infinite {\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n}\n\n.animated.hinge {\n  -webkit-animation-duration: 2s;\n  animation-duration: 2s;\n}\n\n.animated.flipOutX,\n.animated.flipOutY,\n.animated.bounceIn,\n.animated.bounceOut {\n  -webkit-animation-duration: .75s;\n  animation-duration: .75s;\n}\n\n@-webkit-keyframes bounce {\n  from, 20%, 53%, 80%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    -webkit-transform: translate3d(0,0,0);\n    transform: translate3d(0,0,0);\n  }\n\n  40%, 43% {\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    -webkit-transform: translate3d(0, -30px, 0);\n    transform: translate3d(0, -30px, 0);\n  }\n\n  70% {\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    -webkit-transform: translate3d(0, -15px, 0);\n    transform: translate3d(0, -15px, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0,-4px,0);\n    transform: translate3d(0,-4px,0);\n  }\n}\n\n@keyframes bounce {\n  from, 20%, 53%, 80%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    -webkit-transform: translate3d(0,0,0);\n    transform: translate3d(0,0,0);\n  }\n\n  40%, 43% {\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    -webkit-transform: translate3d(0, -30px, 0);\n    transform: translate3d(0, -30px, 0);\n  }\n\n  70% {\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    -webkit-transform: translate3d(0, -15px, 0);\n    transform: translate3d(0, -15px, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0,-4px,0);\n    transform: translate3d(0,-4px,0);\n  }\n}\n\n.bounce {\n  -webkit-animation-name: bounce;\n  animation-name: bounce;\n  -webkit-transform-origin: center bottom;\n  transform-origin: center bottom;\n}\n\n@-webkit-keyframes flash {\n  from, 50%, to {\n    opacity: 1;\n  }\n\n  25%, 75% {\n    opacity: 0;\n  }\n}\n\n@keyframes flash {\n  from, 50%, to {\n    opacity: 1;\n  }\n\n  25%, 75% {\n    opacity: 0;\n  }\n}\n\n.flash {\n  -webkit-animation-name: flash;\n  animation-name: flash;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@-webkit-keyframes pulse {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  50% {\n    -webkit-transform: scale3d(1.05, 1.05, 1.05);\n    transform: scale3d(1.05, 1.05, 1.05);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes pulse {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  50% {\n    -webkit-transform: scale3d(1.05, 1.05, 1.05);\n    transform: scale3d(1.05, 1.05, 1.05);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.pulse {\n  -webkit-animation-name: pulse;\n  animation-name: pulse;\n}\n\n@-webkit-keyframes rubberBand {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  30% {\n    -webkit-transform: scale3d(1.25, 0.75, 1);\n    transform: scale3d(1.25, 0.75, 1);\n  }\n\n  40% {\n    -webkit-transform: scale3d(0.75, 1.25, 1);\n    transform: scale3d(0.75, 1.25, 1);\n  }\n\n  50% {\n    -webkit-transform: scale3d(1.15, 0.85, 1);\n    transform: scale3d(1.15, 0.85, 1);\n  }\n\n  65% {\n    -webkit-transform: scale3d(.95, 1.05, 1);\n    transform: scale3d(.95, 1.05, 1);\n  }\n\n  75% {\n    -webkit-transform: scale3d(1.05, .95, 1);\n    transform: scale3d(1.05, .95, 1);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes rubberBand {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  30% {\n    -webkit-transform: scale3d(1.25, 0.75, 1);\n    transform: scale3d(1.25, 0.75, 1);\n  }\n\n  40% {\n    -webkit-transform: scale3d(0.75, 1.25, 1);\n    transform: scale3d(0.75, 1.25, 1);\n  }\n\n  50% {\n    -webkit-transform: scale3d(1.15, 0.85, 1);\n    transform: scale3d(1.15, 0.85, 1);\n  }\n\n  65% {\n    -webkit-transform: scale3d(.95, 1.05, 1);\n    transform: scale3d(.95, 1.05, 1);\n  }\n\n  75% {\n    -webkit-transform: scale3d(1.05, .95, 1);\n    transform: scale3d(1.05, .95, 1);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.rubberBand {\n  -webkit-animation-name: rubberBand;\n  animation-name: rubberBand;\n}\n\n@-webkit-keyframes shake {\n  from, to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  10%, 30%, 50%, 70%, 90% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  20%, 40%, 60%, 80% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0);\n  }\n}\n\n@keyframes shake {\n  from, to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  10%, 30%, 50%, 70%, 90% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  20%, 40%, 60%, 80% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0);\n  }\n}\n\n.shake {\n  -webkit-animation-name: shake;\n  animation-name: shake;\n}\n\n@-webkit-keyframes headShake {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  6.5% {\n    -webkit-transform: translateX(-6px) rotateY(-9deg);\n    transform: translateX(-6px) rotateY(-9deg);\n  }\n\n  18.5% {\n    -webkit-transform: translateX(5px) rotateY(7deg);\n    transform: translateX(5px) rotateY(7deg);\n  }\n\n  31.5% {\n    -webkit-transform: translateX(-3px) rotateY(-5deg);\n    transform: translateX(-3px) rotateY(-5deg);\n  }\n\n  43.5% {\n    -webkit-transform: translateX(2px) rotateY(3deg);\n    transform: translateX(2px) rotateY(3deg);\n  }\n\n  50% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n@keyframes headShake {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  6.5% {\n    -webkit-transform: translateX(-6px) rotateY(-9deg);\n    transform: translateX(-6px) rotateY(-9deg);\n  }\n\n  18.5% {\n    -webkit-transform: translateX(5px) rotateY(7deg);\n    transform: translateX(5px) rotateY(7deg);\n  }\n\n  31.5% {\n    -webkit-transform: translateX(-3px) rotateY(-5deg);\n    transform: translateX(-3px) rotateY(-5deg);\n  }\n\n  43.5% {\n    -webkit-transform: translateX(2px) rotateY(3deg);\n    transform: translateX(2px) rotateY(3deg);\n  }\n\n  50% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n.headShake {\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-name: headShake;\n  animation-name: headShake;\n}\n\n@-webkit-keyframes swing {\n  20% {\n    -webkit-transform: rotate3d(0, 0, 1, 15deg);\n    transform: rotate3d(0, 0, 1, 15deg);\n  }\n\n  40% {\n    -webkit-transform: rotate3d(0, 0, 1, -10deg);\n    transform: rotate3d(0, 0, 1, -10deg);\n  }\n\n  60% {\n    -webkit-transform: rotate3d(0, 0, 1, 5deg);\n    transform: rotate3d(0, 0, 1, 5deg);\n  }\n\n  80% {\n    -webkit-transform: rotate3d(0, 0, 1, -5deg);\n    transform: rotate3d(0, 0, 1, -5deg);\n  }\n\n  to {\n    -webkit-transform: rotate3d(0, 0, 1, 0deg);\n    transform: rotate3d(0, 0, 1, 0deg);\n  }\n}\n\n@keyframes swing {\n  20% {\n    -webkit-transform: rotate3d(0, 0, 1, 15deg);\n    transform: rotate3d(0, 0, 1, 15deg);\n  }\n\n  40% {\n    -webkit-transform: rotate3d(0, 0, 1, -10deg);\n    transform: rotate3d(0, 0, 1, -10deg);\n  }\n\n  60% {\n    -webkit-transform: rotate3d(0, 0, 1, 5deg);\n    transform: rotate3d(0, 0, 1, 5deg);\n  }\n\n  80% {\n    -webkit-transform: rotate3d(0, 0, 1, -5deg);\n    transform: rotate3d(0, 0, 1, -5deg);\n  }\n\n  to {\n    -webkit-transform: rotate3d(0, 0, 1, 0deg);\n    transform: rotate3d(0, 0, 1, 0deg);\n  }\n}\n\n.swing {\n  -webkit-transform-origin: top center;\n  transform-origin: top center;\n  -webkit-animation-name: swing;\n  animation-name: swing;\n}\n\n@-webkit-keyframes tada {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  10%, 20% {\n    -webkit-transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);\n  }\n\n  30%, 50%, 70%, 90% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n  }\n\n  40%, 60%, 80% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes tada {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  10%, 20% {\n    -webkit-transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);\n  }\n\n  30%, 50%, 70%, 90% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n  }\n\n  40%, 60%, 80% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.tada {\n  -webkit-animation-name: tada;\n  animation-name: tada;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@-webkit-keyframes wobble {\n  from {\n    -webkit-transform: none;\n    transform: none;\n  }\n\n  15% {\n    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n  }\n\n  30% {\n    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n  }\n\n  45% {\n    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n  }\n\n  60% {\n    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n  }\n\n  75% {\n    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes wobble {\n  from {\n    -webkit-transform: none;\n    transform: none;\n  }\n\n  15% {\n    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n  }\n\n  30% {\n    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n  }\n\n  45% {\n    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n  }\n\n  60% {\n    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n  }\n\n  75% {\n    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.wobble {\n  -webkit-animation-name: wobble;\n  animation-name: wobble;\n}\n\n@-webkit-keyframes jello {\n  from, 11.1%, to {\n    -webkit-transform: none;\n    transform: none;\n  }\n\n  22.2% {\n    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);\n    transform: skewX(-12.5deg) skewY(-12.5deg);\n  }\n\n  33.3% {\n    -webkit-transform: skewX(6.25deg) skewY(6.25deg);\n    transform: skewX(6.25deg) skewY(6.25deg);\n  }\n\n  44.4% {\n    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);\n    transform: skewX(-3.125deg) skewY(-3.125deg);\n  }\n\n  55.5% {\n    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);\n    transform: skewX(1.5625deg) skewY(1.5625deg);\n  }\n\n  66.6% {\n    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);\n    transform: skewX(-0.78125deg) skewY(-0.78125deg);\n  }\n\n  77.7% {\n    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);\n    transform: skewX(0.390625deg) skewY(0.390625deg);\n  }\n\n  88.8% {\n    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n  }\n}\n\n@keyframes jello {\n  from, 11.1%, to {\n    -webkit-transform: none;\n    transform: none;\n  }\n\n  22.2% {\n    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);\n    transform: skewX(-12.5deg) skewY(-12.5deg);\n  }\n\n  33.3% {\n    -webkit-transform: skewX(6.25deg) skewY(6.25deg);\n    transform: skewX(6.25deg) skewY(6.25deg);\n  }\n\n  44.4% {\n    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);\n    transform: skewX(-3.125deg) skewY(-3.125deg);\n  }\n\n  55.5% {\n    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);\n    transform: skewX(1.5625deg) skewY(1.5625deg);\n  }\n\n  66.6% {\n    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);\n    transform: skewX(-0.78125deg) skewY(-0.78125deg);\n  }\n\n  77.7% {\n    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);\n    transform: skewX(0.390625deg) skewY(0.390625deg);\n  }\n\n  88.8% {\n    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n  }\n}\n\n.jello {\n  -webkit-animation-name: jello;\n  animation-name: jello;\n  -webkit-transform-origin: center;\n  transform-origin: center;\n}\n\n@-webkit-keyframes bounceIn {\n  from, 20%, 40%, 60%, 80%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n\n  20% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  40% {\n    -webkit-transform: scale3d(.9, .9, .9);\n    transform: scale3d(.9, .9, .9);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.03, 1.03, 1.03);\n    transform: scale3d(1.03, 1.03, 1.03);\n  }\n\n  80% {\n    -webkit-transform: scale3d(.97, .97, .97);\n    transform: scale3d(.97, .97, .97);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes bounceIn {\n  from, 20%, 40%, 60%, 80%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n\n  20% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  40% {\n    -webkit-transform: scale3d(.9, .9, .9);\n    transform: scale3d(.9, .9, .9);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.03, 1.03, 1.03);\n    transform: scale3d(1.03, 1.03, 1.03);\n  }\n\n  80% {\n    -webkit-transform: scale3d(.97, .97, .97);\n    transform: scale3d(.97, .97, .97);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.bounceIn {\n  -webkit-animation-name: bounceIn;\n  animation-name: bounceIn;\n}\n\n@-webkit-keyframes bounceInDown {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -3000px, 0);\n    transform: translate3d(0, -3000px, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 25px, 0);\n    transform: translate3d(0, 25px, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0, 5px, 0);\n    transform: translate3d(0, 5px, 0);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes bounceInDown {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -3000px, 0);\n    transform: translate3d(0, -3000px, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 25px, 0);\n    transform: translate3d(0, 25px, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0, 5px, 0);\n    transform: translate3d(0, 5px, 0);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.bounceInDown {\n  -webkit-animation-name: bounceInDown;\n  animation-name: bounceInDown;\n}\n\n@-webkit-keyframes bounceInLeft {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-3000px, 0, 0);\n    transform: translate3d(-3000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(25px, 0, 0);\n    transform: translate3d(25px, 0, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(5px, 0, 0);\n    transform: translate3d(5px, 0, 0);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes bounceInLeft {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-3000px, 0, 0);\n    transform: translate3d(-3000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(25px, 0, 0);\n    transform: translate3d(25px, 0, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(5px, 0, 0);\n    transform: translate3d(5px, 0, 0);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.bounceInLeft {\n  -webkit-animation-name: bounceInLeft;\n  animation-name: bounceInLeft;\n}\n\n@-webkit-keyframes bounceInRight {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(3000px, 0, 0);\n    transform: translate3d(3000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(-25px, 0, 0);\n    transform: translate3d(-25px, 0, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(-5px, 0, 0);\n    transform: translate3d(-5px, 0, 0);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes bounceInRight {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(3000px, 0, 0);\n    transform: translate3d(3000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(-25px, 0, 0);\n    transform: translate3d(-25px, 0, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(-5px, 0, 0);\n    transform: translate3d(-5px, 0, 0);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.bounceInRight {\n  -webkit-animation-name: bounceInRight;\n  animation-name: bounceInRight;\n}\n\n@-webkit-keyframes bounceInUp {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 3000px, 0);\n    transform: translate3d(0, 3000px, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0, -5px, 0);\n    transform: translate3d(0, -5px, 0);\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes bounceInUp {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 3000px, 0);\n    transform: translate3d(0, 3000px, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0, -5px, 0);\n    transform: translate3d(0, -5px, 0);\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.bounceInUp {\n  -webkit-animation-name: bounceInUp;\n  animation-name: bounceInUp;\n}\n\n@-webkit-keyframes bounceOut {\n  20% {\n    -webkit-transform: scale3d(.9, .9, .9);\n    transform: scale3d(.9, .9, .9);\n  }\n\n  50%, 55% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n}\n\n@keyframes bounceOut {\n  20% {\n    -webkit-transform: scale3d(.9, .9, .9);\n    transform: scale3d(.9, .9, .9);\n  }\n\n  50%, 55% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n}\n\n.bounceOut {\n  -webkit-animation-name: bounceOut;\n  animation-name: bounceOut;\n}\n\n@-webkit-keyframes bounceOutDown {\n  20% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0);\n  }\n\n  40%, 45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n\n@keyframes bounceOutDown {\n  20% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0);\n  }\n\n  40%, 45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n\n.bounceOutDown {\n  -webkit-animation-name: bounceOutDown;\n  animation-name: bounceOutDown;\n}\n\n@-webkit-keyframes bounceOutLeft {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(20px, 0, 0);\n    transform: translate3d(20px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n\n@keyframes bounceOutLeft {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(20px, 0, 0);\n    transform: translate3d(20px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n\n.bounceOutLeft {\n  -webkit-animation-name: bounceOutLeft;\n  animation-name: bounceOutLeft;\n}\n\n@-webkit-keyframes bounceOutRight {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(-20px, 0, 0);\n    transform: translate3d(-20px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n\n@keyframes bounceOutRight {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(-20px, 0, 0);\n    transform: translate3d(-20px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n\n.bounceOutRight {\n  -webkit-animation-name: bounceOutRight;\n  animation-name: bounceOutRight;\n}\n\n@-webkit-keyframes bounceOutUp {\n  20% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0);\n  }\n\n  40%, 45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 20px, 0);\n    transform: translate3d(0, 20px, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n\n@keyframes bounceOutUp {\n  20% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0);\n  }\n\n  40%, 45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 20px, 0);\n    transform: translate3d(0, 20px, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n\n.bounceOutUp {\n  -webkit-animation-name: bounceOutUp;\n  animation-name: bounceOutUp;\n}\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n.fadeIn {\n  -webkit-animation-name: fadeIn;\n  animation-name: fadeIn;\n}\n\n@-webkit-keyframes fadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n}\n\n@-webkit-keyframes fadeInDownBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInDownBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInDownBig {\n  -webkit-animation-name: fadeInDownBig;\n  animation-name: fadeInDownBig;\n}\n\n@-webkit-keyframes fadeInLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInLeft {\n  -webkit-animation-name: fadeInLeft;\n  animation-name: fadeInLeft;\n}\n\n@-webkit-keyframes fadeInLeftBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInLeftBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInLeftBig {\n  -webkit-animation-name: fadeInLeftBig;\n  animation-name: fadeInLeftBig;\n}\n\n@-webkit-keyframes fadeInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInRight {\n  -webkit-animation-name: fadeInRight;\n  animation-name: fadeInRight;\n}\n\n@-webkit-keyframes fadeInRightBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInRightBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInRightBig {\n  -webkit-animation-name: fadeInRightBig;\n  animation-name: fadeInRightBig;\n}\n\n@-webkit-keyframes fadeInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInUp {\n  -webkit-animation-name: fadeInUp;\n  animation-name: fadeInUp;\n}\n\n@-webkit-keyframes fadeInUpBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInUpBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInUpBig {\n  -webkit-animation-name: fadeInUpBig;\n  animation-name: fadeInUpBig;\n}\n\n@-webkit-keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n.fadeOut {\n  -webkit-animation-name: fadeOut;\n  animation-name: fadeOut;\n}\n\n@-webkit-keyframes fadeOutDown {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n}\n\n@keyframes fadeOutDown {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n}\n\n.fadeOutDown {\n  -webkit-animation-name: fadeOutDown;\n  animation-name: fadeOutDown;\n}\n\n@-webkit-keyframes fadeOutDownBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n\n@keyframes fadeOutDownBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n\n.fadeOutDownBig {\n  -webkit-animation-name: fadeOutDownBig;\n  animation-name: fadeOutDownBig;\n}\n\n@-webkit-keyframes fadeOutLeft {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n@keyframes fadeOutLeft {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n.fadeOutLeft {\n  -webkit-animation-name: fadeOutLeft;\n  animation-name: fadeOutLeft;\n}\n\n@-webkit-keyframes fadeOutLeftBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n\n@keyframes fadeOutLeftBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n\n.fadeOutLeftBig {\n  -webkit-animation-name: fadeOutLeftBig;\n  animation-name: fadeOutLeftBig;\n}\n\n@-webkit-keyframes fadeOutRight {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n@keyframes fadeOutRight {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n.fadeOutRight {\n  -webkit-animation-name: fadeOutRight;\n  animation-name: fadeOutRight;\n}\n\n@-webkit-keyframes fadeOutRightBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n\n@keyframes fadeOutRightBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n\n.fadeOutRightBig {\n  -webkit-animation-name: fadeOutRightBig;\n  animation-name: fadeOutRightBig;\n}\n\n@-webkit-keyframes fadeOutUp {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n}\n\n@keyframes fadeOutUp {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n}\n\n.fadeOutUp {\n  -webkit-animation-name: fadeOutUp;\n  animation-name: fadeOutUp;\n}\n\n@-webkit-keyframes fadeOutUpBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n\n@keyframes fadeOutUpBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n\n.fadeOutUpBig {\n  -webkit-animation-name: fadeOutUpBig;\n  animation-name: fadeOutUpBig;\n}\n\n@-webkit-keyframes flip {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n\n  50% {\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) scale3d(.95, .95, .95);\n    transform: perspective(400px) scale3d(.95, .95, .95);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n}\n\n@keyframes flip {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n\n  50% {\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) scale3d(.95, .95, .95);\n    transform: perspective(400px) scale3d(.95, .95, .95);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n}\n\n.animated.flip {\n  -webkit-backface-visibility: visible;\n  backface-visibility: visible;\n  -webkit-animation-name: flip;\n  animation-name: flip;\n}\n\n@-webkit-keyframes flipInX {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n  }\n\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n}\n\n@keyframes flipInX {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n  }\n\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n}\n\n.flipInX {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipInX;\n  animation-name: flipInX;\n}\n\n@-webkit-keyframes flipInY {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n  }\n\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n}\n\n@keyframes flipInY {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n  }\n\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n}\n\n.flipInY {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipInY;\n  animation-name: flipInY;\n}\n\n@-webkit-keyframes flipOutX {\n  from {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    opacity: 0;\n  }\n}\n\n@keyframes flipOutX {\n  from {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    opacity: 0;\n  }\n}\n\n.flipOutX {\n  -webkit-animation-name: flipOutX;\n  animation-name: flipOutX;\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n}\n\n@-webkit-keyframes flipOutY {\n  from {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    opacity: 0;\n  }\n}\n\n@keyframes flipOutY {\n  from {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    opacity: 0;\n  }\n}\n\n.flipOutY {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipOutY;\n  animation-name: flipOutY;\n}\n\n@-webkit-keyframes lightSpeedIn {\n  from {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);\n    transform: translate3d(100%, 0, 0) skewX(-30deg);\n    opacity: 0;\n  }\n\n  60% {\n    -webkit-transform: skewX(20deg);\n    transform: skewX(20deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: skewX(-5deg);\n    transform: skewX(-5deg);\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n@keyframes lightSpeedIn {\n  from {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);\n    transform: translate3d(100%, 0, 0) skewX(-30deg);\n    opacity: 0;\n  }\n\n  60% {\n    -webkit-transform: skewX(20deg);\n    transform: skewX(20deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: skewX(-5deg);\n    transform: skewX(-5deg);\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.lightSpeedIn {\n  -webkit-animation-name: lightSpeedIn;\n  animation-name: lightSpeedIn;\n  -webkit-animation-timing-function: ease-out;\n  animation-timing-function: ease-out;\n}\n\n@-webkit-keyframes lightSpeedOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);\n    transform: translate3d(100%, 0, 0) skewX(30deg);\n    opacity: 0;\n  }\n}\n\n@keyframes lightSpeedOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);\n    transform: translate3d(100%, 0, 0) skewX(30deg);\n    opacity: 0;\n  }\n}\n\n.lightSpeedOut {\n  -webkit-animation-name: lightSpeedOut;\n  animation-name: lightSpeedOut;\n  -webkit-animation-timing-function: ease-in;\n  animation-timing-function: ease-in;\n}\n\n@-webkit-keyframes rotateIn {\n  from {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, -200deg);\n    transform: rotate3d(0, 0, 1, -200deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n@keyframes rotateIn {\n  from {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, -200deg);\n    transform: rotate3d(0, 0, 1, -200deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateIn {\n  -webkit-animation-name: rotateIn;\n  animation-name: rotateIn;\n}\n\n@-webkit-keyframes rotateInDownLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n@keyframes rotateInDownLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateInDownLeft {\n  -webkit-animation-name: rotateInDownLeft;\n  animation-name: rotateInDownLeft;\n}\n\n@-webkit-keyframes rotateInDownRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n@keyframes rotateInDownRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateInDownRight {\n  -webkit-animation-name: rotateInDownRight;\n  animation-name: rotateInDownRight;\n}\n\n@-webkit-keyframes rotateInUpLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n@keyframes rotateInUpLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateInUpLeft {\n  -webkit-animation-name: rotateInUpLeft;\n  animation-name: rotateInUpLeft;\n}\n\n@-webkit-keyframes rotateInUpRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -90deg);\n    transform: rotate3d(0, 0, 1, -90deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n@keyframes rotateInUpRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -90deg);\n    transform: rotate3d(0, 0, 1, -90deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateInUpRight {\n  -webkit-animation-name: rotateInUpRight;\n  animation-name: rotateInUpRight;\n}\n\n@-webkit-keyframes rotateOut {\n  from {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, 200deg);\n    transform: rotate3d(0, 0, 1, 200deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOut {\n  from {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, 200deg);\n    transform: rotate3d(0, 0, 1, 200deg);\n    opacity: 0;\n  }\n}\n\n.rotateOut {\n  -webkit-animation-name: rotateOut;\n  animation-name: rotateOut;\n}\n\n@-webkit-keyframes rotateOutDownLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOutDownLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutDownLeft {\n  -webkit-animation-name: rotateOutDownLeft;\n  animation-name: rotateOutDownLeft;\n}\n\n@-webkit-keyframes rotateOutDownRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOutDownRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutDownRight {\n  -webkit-animation-name: rotateOutDownRight;\n  animation-name: rotateOutDownRight;\n}\n\n@-webkit-keyframes rotateOutUpLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOutUpLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutUpLeft {\n  -webkit-animation-name: rotateOutUpLeft;\n  animation-name: rotateOutUpLeft;\n}\n\n@-webkit-keyframes rotateOutUpRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 90deg);\n    transform: rotate3d(0, 0, 1, 90deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOutUpRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 90deg);\n    transform: rotate3d(0, 0, 1, 90deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutUpRight {\n  -webkit-animation-name: rotateOutUpRight;\n  animation-name: rotateOutUpRight;\n}\n\n@-webkit-keyframes hinge {\n  0% {\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  20%, 60% {\n    -webkit-transform: rotate3d(0, 0, 1, 80deg);\n    transform: rotate3d(0, 0, 1, 80deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  40%, 80% {\n    -webkit-transform: rotate3d(0, 0, 1, 60deg);\n    transform: rotate3d(0, 0, 1, 60deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 700px, 0);\n    transform: translate3d(0, 700px, 0);\n    opacity: 0;\n  }\n}\n\n@keyframes hinge {\n  0% {\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  20%, 60% {\n    -webkit-transform: rotate3d(0, 0, 1, 80deg);\n    transform: rotate3d(0, 0, 1, 80deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  40%, 80% {\n    -webkit-transform: rotate3d(0, 0, 1, 60deg);\n    transform: rotate3d(0, 0, 1, 60deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 700px, 0);\n    transform: translate3d(0, 700px, 0);\n    opacity: 0;\n  }\n}\n\n.hinge {\n  -webkit-animation-name: hinge;\n  animation-name: hinge;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@-webkit-keyframes rollIn {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes rollIn {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.rollIn {\n  -webkit-animation-name: rollIn;\n  animation-name: rollIn;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@-webkit-keyframes rollOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n  }\n}\n\n@keyframes rollOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n  }\n}\n\n.rollOut {\n  -webkit-animation-name: rollOut;\n  animation-name: rollOut;\n}\n\n@-webkit-keyframes zoomIn {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n\n  50% {\n    opacity: 1;\n  }\n}\n\n@keyframes zoomIn {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n\n  50% {\n    opacity: 1;\n  }\n}\n\n.zoomIn {\n  -webkit-animation-name: zoomIn;\n  animation-name: zoomIn;\n}\n\n@-webkit-keyframes zoomInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n@keyframes zoomInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomInDown {\n  -webkit-animation-name: zoomInDown;\n  animation-name: zoomInDown;\n}\n\n@-webkit-keyframes zoomInLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);\n    transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n@keyframes zoomInLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);\n    transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomInLeft {\n  -webkit-animation-name: zoomInLeft;\n  animation-name: zoomInLeft;\n}\n\n@-webkit-keyframes zoomInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);\n    transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n@keyframes zoomInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);\n    transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomInRight {\n  -webkit-animation-name: zoomInRight;\n  animation-name: zoomInRight;\n}\n\n@-webkit-keyframes zoomInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n@keyframes zoomInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomInUp {\n  -webkit-animation-name: zoomInUp;\n  animation-name: zoomInUp;\n}\n\n@-webkit-keyframes zoomOut {\n  from {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n@keyframes zoomOut {\n  from {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n.zoomOut {\n  -webkit-animation-name: zoomOut;\n  animation-name: zoomOut;\n}\n\n@-webkit-keyframes zoomOutDown {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n@keyframes zoomOutDown {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomOutDown {\n  -webkit-animation-name: zoomOutDown;\n  animation-name: zoomOutDown;\n}\n\n@-webkit-keyframes zoomOutLeft {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale(.1) translate3d(-2000px, 0, 0);\n    transform: scale(.1) translate3d(-2000px, 0, 0);\n    -webkit-transform-origin: left center;\n    transform-origin: left center;\n  }\n}\n\n@keyframes zoomOutLeft {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale(.1) translate3d(-2000px, 0, 0);\n    transform: scale(.1) translate3d(-2000px, 0, 0);\n    -webkit-transform-origin: left center;\n    transform-origin: left center;\n  }\n}\n\n.zoomOutLeft {\n  -webkit-animation-name: zoomOutLeft;\n  animation-name: zoomOutLeft;\n}\n\n@-webkit-keyframes zoomOutRight {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale(.1) translate3d(2000px, 0, 0);\n    transform: scale(.1) translate3d(2000px, 0, 0);\n    -webkit-transform-origin: right center;\n    transform-origin: right center;\n  }\n}\n\n@keyframes zoomOutRight {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale(.1) translate3d(2000px, 0, 0);\n    transform: scale(.1) translate3d(2000px, 0, 0);\n    -webkit-transform-origin: right center;\n    transform-origin: right center;\n  }\n}\n\n.zoomOutRight {\n  -webkit-animation-name: zoomOutRight;\n  animation-name: zoomOutRight;\n}\n\n@-webkit-keyframes zoomOutUp {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n@keyframes zoomOutUp {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomOutUp {\n  -webkit-animation-name: zoomOutUp;\n  animation-name: zoomOutUp;\n}\n\n@-webkit-keyframes slideInDown {\n  from {\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes slideInDown {\n  from {\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInDown {\n  -webkit-animation-name: slideInDown;\n  animation-name: slideInDown;\n}\n\n@-webkit-keyframes slideInLeft {\n  from {\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes slideInLeft {\n  from {\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInLeft {\n  -webkit-animation-name: slideInLeft;\n  animation-name: slideInLeft;\n}\n\n@-webkit-keyframes slideInRight {\n  from {\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes slideInRight {\n  from {\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInRight {\n  -webkit-animation-name: slideInRight;\n  animation-name: slideInRight;\n}\n\n@-webkit-keyframes slideInUp {\n  from {\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes slideInUp {\n  from {\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInUp {\n  -webkit-animation-name: slideInUp;\n  animation-name: slideInUp;\n}\n\n@-webkit-keyframes slideOutDown {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n}\n\n@keyframes slideOutDown {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n}\n\n.slideOutDown {\n  -webkit-animation-name: slideOutDown;\n  animation-name: slideOutDown;\n}\n\n@-webkit-keyframes slideOutLeft {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n@keyframes slideOutLeft {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n.slideOutLeft {\n  -webkit-animation-name: slideOutLeft;\n  animation-name: slideOutLeft;\n}\n\n@-webkit-keyframes slideOutRight {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n@keyframes slideOutRight {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n.slideOutRight {\n  -webkit-animation-name: slideOutRight;\n  animation-name: slideOutRight;\n}\n\n@-webkit-keyframes slideOutUp {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n}\n\n@keyframes slideOutUp {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n}\n\n.slideOutUp {\n  -webkit-animation-name: slideOutUp;\n  animation-name: slideOutUp;\n}\n", ""]);

// exports


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "html{font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.5;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;background:#fff;color:#666}body{margin:0}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline:0}.uk-link,a{color:#1e87f0;text-decoration:none;cursor:pointer}.uk-link:hover,a:hover{color:#0f6ecd;text-decoration:underline}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit}b,strong{font-weight:bolder}:not(pre)>code,:not(pre)>kbd,:not(pre)>samp{font-size:.875rem;font-family:Consolas,monaco,monospace;color:#f0506e;white-space:nowrap;padding:2px 6px;background:#f8f8f8}em{color:#f0506e}ins{background:#ffd;color:#666;text-decoration:none}mark{background:#ffd;color:#666}q{font-style:italic}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}audio,canvas,iframe,img,svg,video{vertical-align:middle}audio,canvas,img,video{max-width:100%;height:auto;box-sizing:border-box}img{border-style:none}svg:not(:root){overflow:hidden}address,dl,fieldset,figure,ol,p,pre,ul{margin:0 0 20px 0}*+address,*+dl,*+fieldset,*+figure,*+ol,*+p,*+pre,*+ul{margin-top:20px}.uk-h1,.uk-h2,.uk-h3,.uk-h4,.uk-h5,.uk-h6,h1,h2,h3,h4,h5,h6{margin:0 0 20px 0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;font-weight:400;color:#333;text-transform:none}*+.uk-h1,*+.uk-h2,*+.uk-h3,*+.uk-h4,*+.uk-h5,*+.uk-h6,*+h1,*+h2,*+h3,*+h4,*+h5,*+h6{margin-top:40px}.uk-h1,h1{font-size:2.625rem;line-height:1.2}.uk-h2,h2{font-size:2rem;line-height:1.3}.uk-h3,h3{font-size:1.5rem;line-height:1.4}.uk-h4,h4{font-size:1.25rem;line-height:1.4}.uk-h5,h5{font-size:16px;line-height:1.4}.uk-h6,h6{font-size:.875rem;line-height:1.4}ol,ul{padding-left:30px}ol>li>ol,ol>li>ul,ul>li>ol,ul>li>ul{margin:0}dt{font-weight:700}dd{margin-left:0}.uk-hr,hr{box-sizing:content-box;height:0;overflow:visible;margin:0 0 20px 0;border:0;border-top:1px solid #e5e5e5}*+.uk-hr,*+hr{margin-top:20px}address{font-style:normal}blockquote{margin:0 0 20px 0;font-size:1.25rem;line-height:1.5;font-style:italic;color:#333}*+blockquote{margin-top:20px}blockquote p:last-of-type{margin-bottom:0}blockquote footer{margin-top:10px;font-size:.875rem;line-height:1.5;color:#666}blockquote footer::before{content:\"\\2014   \"}pre{font:.875rem/1.5 Consolas,monaco,monospace;color:#666;-moz-tab-size:4;tab-size:4;overflow:auto;padding:10px;border:1px solid #e5e5e5;border-radius:3px;background:#fff}pre code{font-family:Consolas,monaco,monospace}::-moz-selection{background:#39f;color:#fff;text-shadow:none}::selection{background:#39f;color:#fff;text-shadow:none}article,aside,details,figcaption,figure,footer,header,main,nav,section,summary{display:block}progress{vertical-align:baseline}[hidden],template{display:none}iframe{border:0}a,area,button,input,label,select,summary,textarea{touch-action:manipulation}.var-media-s:before{content:'640px'}.var-media-m:before{content:'960px'}.var-media-l:before{content:'1200px'}.var-media-xl:before{content:'1600px'}.uk-link-muted a,a.uk-link-muted{color:#999}.uk-link-muted a:hover,a.uk-link-muted:hover{color:#666}.uk-link-reset a,.uk-link-reset a:focus,.uk-link-reset a:hover,a.uk-link-reset,a.uk-link-reset:focus,a.uk-link-reset:hover{color:inherit!important;text-decoration:none!important}.uk-heading-primary{font-size:2.625rem;line-height:1.2}@media (min-width:960px){.uk-heading-primary{font-size:3.75rem;line-height:1.1}}.uk-heading-hero{font-size:4rem;line-height:1.1}@media (min-width:640px){.uk-heading-hero{font-size:6rem;line-height:1}}@media (min-width:960px){.uk-heading-hero{font-size:8rem;line-height:1}}.uk-heading-divider{padding-bottom:10px;border-bottom:1px solid #e5e5e5}.uk-heading-bullet{position:relative}.uk-heading-bullet::before{content:\"\";display:inline-block;position:relative;top:calc(-.1 * 1em);vertical-align:middle;height:.9em;margin-right:10px;border-left:5px solid #e5e5e5}.uk-heading-line{overflow:hidden}.uk-heading-line>*{display:inline-block;position:relative}.uk-heading-line>:after,.uk-heading-line>:before{content:\"\";position:absolute;top:calc(50% - (1px / 2));width:2000px;border-bottom:1px solid #e5e5e5}.uk-heading-line>:before{right:100%;margin-right:.6em}.uk-heading-line>:after{left:100%;margin-left:.6em}[class*=uk-divider]{border:none;margin-bottom:20px}*+[class*=uk-divider]{margin-top:20px}.uk-divider-icon{position:relative;height:20px;background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22none%22%20stroke%3D%22%23e5e5e5%22%20stroke-width%3D%222%22%20cx%3D%2210%22%20cy%3D%2210%22%20r%3D%227%22%3E%3C%2Fcircle%3E%0A%3C%2Fsvg%3E%0A\");background-repeat:no-repeat;background-position:50% 50%}.uk-divider-icon::after,.uk-divider-icon::before{content:\"\";position:absolute;top:50%;max-width:calc(50% - (50px / 2));border-bottom:1px solid #e5e5e5}.uk-divider-icon::before{right:calc(50% + (50px / 2));width:100%}.uk-divider-icon::after{left:calc(50% + (50px / 2));width:100%}.uk-divider-small{line-height:0}.uk-divider-small::after{content:\"\";display:inline-block;width:100px;max-width:100%;border-top:1px solid #e5e5e5;vertical-align:top}.uk-list{padding:0;list-style:none}.uk-list>li::after,.uk-list>li::before{content:\"\";display:table}.uk-list>li::after{clear:both}.uk-list>li>:last-child{margin-bottom:0}.uk-list ul{margin:0;padding-left:30px;list-style:none}.uk-list>li:nth-child(n+2),.uk-list>li>ul{margin-top:10px}.uk-list-divider>li:nth-child(n+2){margin-top:10px;padding-top:10px;border-top:1px solid #e5e5e5}.uk-list-striped>li{padding:10px 10px}.uk-list-striped>li:nth-of-type(odd){border-top:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5}.uk-list-striped>li:nth-of-type(odd){background:#f8f8f8}.uk-list-striped>li:nth-child(n+2){margin-top:0}.uk-list-bullet>li{position:relative;padding-left:calc(1.5em + 10px)}.uk-list-bullet>li::before{content:\"\";position:absolute;top:0;left:0;width:1.5em;height:1.5em;background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%226%22%20height%3D%226%22%20viewBox%3D%220%200%206%206%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22%23666%22%20cx%3D%223%22%20cy%3D%223%22%20r%3D%223%22%3E%3C%2Fcircle%3E%0A%3C%2Fsvg%3E\");background-repeat:no-repeat;background-position:50% 50%;float:left}.uk-list-large>li:nth-child(n+2),.uk-list-large>li>ul{margin-top:20px}.uk-list-large.uk-list-divider>li:nth-child(n+2){margin-top:20px;padding-top:20px}.uk-list-large.uk-list-striped>li{padding:20px 10px}.uk-list-large.uk-list-striped>li:nth-of-type(odd){border-top:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5}.uk-list-large.uk-list-striped>li:nth-child(n+2){margin-top:0}.uk-description-list>dt{color:#333;font-size:.875rem;font-weight:400;text-transform:uppercase}.uk-description-list>dt:nth-child(n+2){margin-top:20px}.uk-description-list-divider>dt:nth-child(n+2){margin-top:20px;padding-top:20px;border-top:1px solid #e5e5e5}.uk-table{border-collapse:collapse;border-spacing:0;width:100%;margin-bottom:20px}*+.uk-table{margin-top:20px}.uk-table th{padding:16px 12px;text-align:left;vertical-align:bottom;font-size:.875rem;font-weight:400;color:#999;text-transform:uppercase}.uk-table td{padding:16px 12px;vertical-align:top}.uk-table td>:last-child{margin-bottom:0}.uk-table tfoot{font-size:.875rem}.uk-table caption{font-size:.875rem;text-align:left;color:#999}.uk-table tbody tr.uk-active,.uk-table>tr.uk-active{background:#ffd}.uk-table-middle,.uk-table-middle td{vertical-align:middle!important}.uk-table-divider>:first-child>tr:not(:first-child),.uk-table-divider>:not(:first-child)>tr,.uk-table-divider>tr:not(:first-child){border-top:1px solid #e5e5e5}.uk-table-striped tbody tr:nth-of-type(odd),.uk-table-striped>tr:nth-of-type(odd){background:#f8f8f8;border-top:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5}.uk-table-hover tbody tr:hover,.uk-table-hover>tr:hover{background:#ffd}.uk-table-small td,.uk-table-small th{padding:10px 12px}.uk-table-justify td:first-child,.uk-table-justify th:first-child{padding-left:0}.uk-table-justify td:last-child,.uk-table-justify th:last-child{padding-right:0}.uk-table-shrink{width:1px}.uk-table-expand{min-width:300px}.uk-table-link{padding:0!important}.uk-table-link>a{display:block;padding:16px 12px}.uk-table-small .uk-table-link>a{padding:10px 12px}@media (max-width:959px){.uk-table-responsive,.uk-table-responsive tbody,.uk-table-responsive td,.uk-table-responsive th,.uk-table-responsive tr{display:block}.uk-table-responsive thead{display:none}.uk-table-responsive td,.uk-table-responsive th{width:auto!important;max-width:none!important;min-width:0!important;overflow:visible!important;white-space:normal!important}.uk-table-responsive .uk-table-link:not(:first-child)>a,.uk-table-responsive td:not(:first-child):not(.uk-table-link),.uk-table-responsive th:not(:first-child):not(.uk-table-link){padding-top:5px!important}.uk-table-responsive .uk-table-link:not(:last-child)>a,.uk-table-responsive td:not(:last-child):not(.uk-table-link),.uk-table-responsive th:not(:last-child):not(.uk-table-link){padding-bottom:5px!important}.uk-table-justify.uk-table-responsive td,.uk-table-justify.uk-table-responsive th{padding-left:0;padding-right:0}}.uk-table tbody tr{-webkit-transition:background-color .1s linear;transition:background-color .1s linear}.uk-icon{margin:0;border:none;overflow:visible;font:inherit;color:inherit;text-transform:none;padding:0;background-color:transparent;cursor:pointer;display:inline-block;fill:currentcolor;line-height:0}.uk-icon::-moz-focus-inner{border:0;padding:0}.uk-icon [fill*='#']:not(.uk-preserve){fill:currentcolor}.uk-icon [stroke*='#']:not(.uk-preserve){stroke:currentcolor}.uk-icon>*{transform:translate(0,0)}.uk-icon-image{width:20px;height:20px;background-position:50% 50%;background-repeat:no-repeat;background-size:contain;vertical-align:middle}.uk-icon-link{color:#999}.uk-icon-link:focus,.uk-icon-link:hover{color:#666;outline:0}.uk-active>.uk-icon-link,.uk-icon-link:active{color:#595959}.uk-icon-button{box-sizing:border-box;width:36px;height:36px;border-radius:500px;background:#f8f8f8;color:#999;vertical-align:middle;display:-ms-inline-flexbox;display:-webkit-inline-flex;display:inline-flex;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;-webkit-transition:.1s ease-in-out;transition:.1s ease-in-out;-webkit-transition-property:color,background-color;transition-property:color,background-color}.uk-icon-button:focus,.uk-icon-button:hover{background-color:#ebebeb;color:#666;outline:0}.uk-active>.uk-icon-button,.uk-icon-button:active{background-color:#dfdfdf;color:#666}.uk-range{box-sizing:border-box;margin:0;vertical-align:middle;max-width:100%;width:100%;-webkit-appearance:none;background:0 0;padding:0}.uk-range:focus{outline:0}.uk-range::-moz-focus-outer{border:none}.uk-range::-ms-track{height:15px;background:0 0;border-color:transparent;color:transparent}.uk-range:not(:disabled)::-webkit-slider-thumb{cursor:pointer}.uk-range:not(:disabled)::-moz-range-thumb{cursor:pointer}.uk-range:not(:disabled)::-ms-thumb{cursor:pointer}.uk-range::-webkit-slider-thumb{-webkit-appearance:none;margin-top:-7px;height:15px;width:15px;border-radius:500px;background:#fff;border:1px solid #ccc}.uk-range::-moz-range-thumb{border:none;height:15px;width:15px;border-radius:500px;background:#fff;border:1px solid #ccc}.uk-range::-ms-thumb{margin-top:0}.uk-range::-ms-thumb{border:none;height:15px;width:15px;border-radius:500px;background:#fff;border:1px solid #ccc}.uk-range::-ms-tooltip{display:none}.uk-range::-webkit-slider-runnable-track{height:3px;background:#ebebeb;border-radius:500px}.uk-range:active::-webkit-slider-runnable-track,.uk-range:focus::-webkit-slider-runnable-track{background:#d2d2d2}.uk-range::-moz-range-track{height:3px;background:#ebebeb;border-radius:500px}.uk-range:focus::-moz-range-track{background:#d2d2d2}.uk-range::-ms-fill-lower,.uk-range::-ms-fill-upper{height:3px;background:#ebebeb;border-radius:500px}.uk-range:focus::-ms-fill-lower,.uk-range:focus::-ms-fill-upper{background:#d2d2d2}.uk-checkbox,.uk-input,.uk-radio,.uk-select,.uk-textarea{box-sizing:border-box;margin:0;border-radius:0;font:inherit}.uk-input{overflow:visible}.uk-select{text-transform:none}.uk-select optgroup{font:inherit;font-weight:700}.uk-textarea{overflow:auto}.uk-input[type=search]::-webkit-search-cancel-button,.uk-input[type=search]::-webkit-search-decoration{-webkit-appearance:none}.uk-input[type=number]::-webkit-inner-spin-button,.uk-input[type=number]::-webkit-outer-spin-button{height:auto}.uk-input::-moz-placeholder,.uk-textarea::-moz-placeholder{opacity:1}.uk-checkbox,.uk-radio{padding:0}.uk-checkbox:not(:disabled),.uk-radio:not(:disabled){cursor:pointer}.uk-fieldset{border:none;margin:0;padding:0}.uk-input,.uk-textarea{-webkit-appearance:none}.uk-input,.uk-select,.uk-textarea{max-width:100%;width:100%;border:0 none;padding:0 6px;background:#fff;color:#666;border:1px solid #e5e5e5;-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;-webkit-transition-property:color,background-color,border;transition-property:color,background-color,border}.uk-input,.uk-select:not([multiple]):not([size]){height:40px;vertical-align:middle;display:inline-block;line-height:38px}.uk-select[multiple],.uk-select[size],.uk-textarea{padding-top:4px;padding-bottom:4px;vertical-align:top}.uk-input:focus,.uk-select:focus,.uk-textarea:focus{outline:0;background-color:#fff;color:#666;border-color:#1e87f0}.uk-input:disabled,.uk-select:disabled,.uk-textarea:disabled{background-color:#f8f8f8;color:#999;border-color:#e5e5e5}.uk-input:-ms-input-placeholder{color:#999!important}.uk-input::-moz-placeholder{color:#999}.uk-input::-webkit-input-placeholder{color:#999}.uk-textarea:-ms-input-placeholder{color:#999!important}.uk-textarea::-moz-placeholder{color:#999}.uk-textarea::-webkit-input-placeholder{color:#999}.uk-form-small{font-size:.875rem}.uk-form-small:not(textarea):not([multiple]):not([size]){height:30px;line-height:28px}.uk-form-large{font-size:1.25rem}.uk-form-large:not(textarea):not([multiple]):not([size]){height:55px;line-height:53px}.uk-form-danger,.uk-form-danger:focus{color:#f0506e;border-color:#f0506e}.uk-form-success,.uk-form-success:focus{color:#32d296;border-color:#32d296}.uk-form-blank{background:0 0;border-color:transparent}.uk-form-blank:focus{border-color:#e5e5e5;border-style:dashed}input.uk-form-width-xsmall{width:40px}select.uk-form-width-xsmall{width:65px}.uk-form-width-small{width:130px}.uk-form-width-medium{width:200px}.uk-form-width-large{width:500px}.uk-select:not([multiple]):not([size]){-webkit-appearance:none;-moz-appearance:none;padding-right:20px;background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2224%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23666%22%20points%3D%2212%201%209%206%2015%206%22%3E%3C%2Fpolygon%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23666%22%20points%3D%2212%2013%209%208%2015%208%22%3E%3C%2Fpolygon%3E%0A%3C%2Fsvg%3E%0A\");background-repeat:no-repeat;background-position:100% 50%}.uk-select:not([multiple]):not([size])::-ms-expand{display:none}.uk-select:not([multiple]):not([size]):disabled{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2224%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23999%22%20points%3D%2212%201%209%206%2015%206%22%3E%3C%2Fpolygon%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23999%22%20points%3D%2212%2013%209%208%2015%208%22%3E%3C%2Fpolygon%3E%0A%3C%2Fsvg%3E%0A\")}.uk-checkbox,.uk-radio{display:inline-block;height:16px;width:16px;overflow:hidden;margin-top:-4px;vertical-align:middle;-webkit-appearance:none;background-color:transparent;background-repeat:no-repeat;background-position:50% 50%;border:1px solid #ccc;-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;-webkit-transition-property:background-color,border;transition-property:background-color,border}.uk-radio{border-radius:50%}.uk-checkbox:focus,.uk-radio:focus{outline:0;border-color:#1e87f0}.uk-checkbox:checked,.uk-checkbox:indeterminate,.uk-radio:checked{background-color:#1e87f0;border-color:transparent}.uk-checkbox:checked:focus,.uk-checkbox:indeterminate:focus,.uk-radio:checked:focus{background-color:#0e6dcd}.uk-radio:checked{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22%23fff%22%20cx%3D%228%22%20cy%3D%228%22%20r%3D%222%22%3E%3C%2Fcircle%3E%0A%3C%2Fsvg%3E\")}.uk-checkbox:checked{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2214%22%20height%3D%2211%22%20viewBox%3D%220%200%2014%2011%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23fff%22%20points%3D%2212%201%205%207.5%202%205%201%205.5%205%2010%2013%201.5%22%2F%3E%0A%3C%2Fsvg%3E\")}.uk-checkbox:indeterminate{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Crect%20fill%3D%22%23fff%22%20x%3D%223%22%20y%3D%228%22%20width%3D%2210%22%20height%3D%221%22%3E%3C%2Frect%3E%0A%3C%2Fsvg%3E\")}.uk-checkbox:disabled,.uk-radio:disabled{background-color:#f8f8f8;border-color:#e5e5e5}.uk-radio:disabled:checked{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22%23999%22%20cx%3D%228%22%20cy%3D%228%22%20r%3D%222%22%3E%3C%2Fcircle%3E%0A%3C%2Fsvg%3E\")}.uk-checkbox:disabled:checked{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2214%22%20height%3D%2211%22%20viewBox%3D%220%200%2014%2011%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23999%22%20points%3D%2212%201%205%207.5%202%205%201%205.5%205%2010%2013%201.5%22%2F%3E%0A%3C%2Fsvg%3E\")}.uk-checkbox:disabled:indeterminate{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Crect%20fill%3D%22%23999%22%20x%3D%223%22%20y%3D%228%22%20width%3D%2210%22%20height%3D%221%22%3E%3C%2Frect%3E%0A%3C%2Fsvg%3E\")}.uk-legend{width:100%;color:inherit;padding:0;font-size:1.5rem;line-height:1.4}.uk-form-custom{display:inline-block;position:relative;max-width:100%;vertical-align:middle}.uk-form-custom input[type=file],.uk-form-custom select{position:absolute;top:0;z-index:1;width:100%;height:100%;left:0;-webkit-appearance:none;opacity:0;cursor:pointer}.uk-form-custom input[type=file]{font-size:500px;overflow:hidden}.uk-form-label{color:#333;font-size:.875rem}.uk-form-stacked .uk-form-label{display:block;margin-bottom:5px}@media (max-width:959px){.uk-form-horizontal .uk-form-label{display:block;margin-bottom:5px}}@media (min-width:960px){.uk-form-horizontal .uk-form-label{width:200px;margin-top:7px;float:left}.uk-form-horizontal .uk-form-controls{margin-left:215px}.uk-form-horizontal .uk-form-controls-text{padding-top:7px}}.uk-form-icon{position:absolute;top:0;bottom:0;left:0;width:30px;display:-ms-inline-flexbox;display:-webkit-inline-flex;display:inline-flex;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;color:#999}.uk-form-icon:hover{color:#666}.uk-form-icon:not(a):not(button):not(input){pointer-events:none}.uk-form-icon:not(.uk-form-icon-flip)+.uk-input{padding-left:30px}.uk-form-icon-flip{right:0;left:auto}.uk-form-icon-flip+.uk-input{padding-right:30px}.uk-button{margin:0;border:none;overflow:visible;font:inherit;color:inherit;text-transform:none;display:inline-block;box-sizing:border-box;padding:0 30px;vertical-align:middle;font-size:.875rem;line-height:38px;text-align:center;text-decoration:none;text-transform:uppercase;-webkit-transition:.1s ease-in-out;transition:.1s ease-in-out;-webkit-transition-property:color,background-color,border-color;transition-property:color,background-color,border-color}.uk-button:not(:disabled){cursor:pointer}.uk-button::-moz-focus-inner{border:0;padding:0}.uk-button:hover{text-decoration:none}.uk-button:focus{outline:0}.uk-button-default{background-color:transparent;color:#333;border:1px solid #e5e5e5}.uk-button-default:focus,.uk-button-default:hover{background-color:transparent;color:#333;border-color:#b2b2b2}.uk-button-default.uk-active,.uk-button-default:active{background-color:transparent;color:#333;border-color:#999}.uk-button-primary{background-color:#1e87f0;color:#fff;border:1px solid transparent}.uk-button-primary:focus,.uk-button-primary:hover{background-color:#0f7ae5;color:#fff}.uk-button-primary.uk-active,.uk-button-primary:active{background-color:#0e6dcd;color:#fff}.uk-button-secondary{background-color:#222;color:#fff;border:1px solid transparent}.uk-button-secondary:focus,.uk-button-secondary:hover{background-color:#151515;color:#fff}.uk-button-secondary.uk-active,.uk-button-secondary:active{background-color:#080808;color:#fff}.uk-button-danger{background-color:#f0506e;color:#fff;border:1px solid transparent}.uk-button-danger:focus,.uk-button-danger:hover{background-color:#ee395b;color:#fff}.uk-button-danger.uk-active,.uk-button-danger:active{background-color:#ec2147;color:#fff}.uk-button-danger:disabled,.uk-button-default:disabled,.uk-button-primary:disabled,.uk-button-secondary:disabled{background-color:transparent;color:#999;border-color:#e5e5e5}.uk-button-small{padding:0 15px;line-height:28px;font-size:.875rem}.uk-button-large{padding:0 40px;line-height:53px;font-size:.875rem}.uk-button-text{padding:0;line-height:1.5;background:0 0;color:#333;position:relative}.uk-button-text::before{content:\"\";position:absolute;bottom:0;left:0;right:100%;border-bottom:1px solid #333;-webkit-transition:right .3s ease-out;transition:right .3s ease-out}.uk-button-text:focus,.uk-button-text:hover{color:#333}.uk-button-text:focus::before,.uk-button-text:hover::before{right:0}.uk-button-text:disabled{color:#999}.uk-button-text:disabled::before{display:none}.uk-button-link{padding:0;line-height:1.5;background:0 0;color:#1e87f0}.uk-button-link:focus,.uk-button-link:hover{color:#0f6ecd;text-decoration:underline}.uk-button-link:disabled{color:#999;text-decoration:none}.uk-button-group{display:-ms-inline-flexbox;display:-webkit-inline-flex;display:inline-flex;vertical-align:middle;position:relative}.uk-button-group>.uk-button:nth-child(n+2),.uk-button-group>div:nth-child(n+2) .uk-button{margin-left:-1px}.uk-button-group .uk-button.uk-active,.uk-button-group .uk-button:active,.uk-button-group .uk-button:focus,.uk-button-group .uk-button:hover{position:relative;z-index:1}.uk-section{box-sizing:border-box;padding-top:40px;padding-bottom:40px}@media (min-width:960px){.uk-section{padding-top:70px;padding-bottom:70px}}.uk-section::after,.uk-section::before{content:\"\";display:table}.uk-section::after{clear:both}.uk-section>:last-child{margin-bottom:0}.uk-section-xsmall{padding-top:20px;padding-bottom:20px}.uk-section-small{padding-top:40px;padding-bottom:40px}.uk-section-large{padding-top:70px;padding-bottom:70px}@media (min-width:960px){.uk-section-large{padding-top:140px;padding-bottom:140px}}.uk-section-xlarge{padding-top:140px;padding-bottom:140px}@media (min-width:960px){.uk-section-xlarge{padding-top:210px;padding-bottom:210px}}.uk-section-default{background:#fff}.uk-section-muted{background:#f8f8f8}.uk-section-primary{background:#1e87f0}.uk-section-secondary{background:#222}.uk-container{box-sizing:content-box;max-width:1200px;margin-left:auto;margin-right:auto;padding-left:15px;padding-right:15px}@media (min-width:640px){.uk-container{padding-left:30px;padding-right:30px}}@media (min-width:960px){.uk-container{padding-left:40px;padding-right:40px}}.uk-container::after,.uk-container::before{content:\"\";display:table}.uk-container::after{clear:both}.uk-container>:last-child{margin-bottom:0}.uk-container .uk-container{padding-left:0;padding-right:0}.uk-container-small{max-width:900px}.uk-container-large{max-width:1600px}.uk-container-expand{max-width:none}.uk-grid{display:-ms-flexbox;display:-webkit-flex;display:flex;-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap;margin:0;padding:0;list-style:none}.uk-grid>*{margin:0}.uk-grid>*>:last-child{margin-bottom:0}.uk-grid{margin-left:-30px}.uk-grid>*{padding-left:30px}*+.uk-grid-margin,.uk-grid+.uk-grid,.uk-grid>.uk-grid-margin{margin-top:30px}@media (min-width:1200px){.uk-grid{margin-left:-40px}.uk-grid>*{padding-left:40px}*+.uk-grid-margin,.uk-grid+.uk-grid,.uk-grid>.uk-grid-margin{margin-top:40px}}.uk-grid-small{margin-left:-15px}.uk-grid-small>*{padding-left:15px}*+.uk-grid-margin-small,.uk-grid+.uk-grid-small,.uk-grid-small>.uk-grid-margin{margin-top:15px}.uk-grid-medium{margin-left:-30px}.uk-grid-medium>*{padding-left:30px}*+.uk-grid-margin-medium,.uk-grid+.uk-grid-medium,.uk-grid-medium>.uk-grid-margin{margin-top:30px}.uk-grid-large{margin-left:-40px}.uk-grid-large>*{padding-left:40px}*+.uk-grid-margin-large,.uk-grid+.uk-grid-large,.uk-grid-large>.uk-grid-margin{margin-top:40px}@media (min-width:1200px){.uk-grid-large{margin-left:-70px}.uk-grid-large>*{padding-left:70px}*+.uk-grid-margin-large,.uk-grid+.uk-grid-large,.uk-grid-large>.uk-grid-margin{margin-top:70px}}.uk-grid-collapse{margin-left:0}.uk-grid-collapse>*{padding-left:0}.uk-grid+.uk-grid-collapse,.uk-grid-collapse>.uk-grid-margin{margin-top:0}.uk-grid-divider>*{position:relative}.uk-grid-divider>:not(.uk-first-column)::before{content:\"\";position:absolute;top:0;bottom:0;border-left:1px solid #e5e5e5}.uk-grid-divider.uk-grid-stack>.uk-grid-margin::before{content:\"\";position:absolute;left:0;right:0;border-top:1px solid #e5e5e5}.uk-grid-divider{margin-left:-60px}.uk-grid-divider>*{padding-left:60px}.uk-grid-divider>:not(.uk-first-column)::before{left:30px}.uk-grid-divider.uk-grid-stack>.uk-grid-margin{margin-top:60px}.uk-grid-divider.uk-grid-stack>.uk-grid-margin::before{top:-30px;left:60px}@media (min-width:1200px){.uk-grid-divider{margin-left:-80px}.uk-grid-divider>*{padding-left:80px}.uk-grid-divider>:not(.uk-first-column)::before{left:40px}.uk-grid-divider.uk-grid-stack>.uk-grid-margin{margin-top:80px}.uk-grid-divider.uk-grid-stack>.uk-grid-margin::before{top:-40px;left:80px}}.uk-grid-divider.uk-grid-small{margin-left:-30px}.uk-grid-divider.uk-grid-small>*{padding-left:30px}.uk-grid-divider.uk-grid-small>:not(.uk-first-column)::before{left:15px}.uk-grid-divider.uk-grid-small.uk-grid-stack>.uk-grid-margin{margin-top:30px}.uk-grid-divider.uk-grid-small.uk-grid-stack>.uk-grid-margin::before{top:-15px;left:30px}.uk-grid-divider.uk-grid-medium{margin-left:-60px}.uk-grid-divider.uk-grid-medium>*{padding-left:60px}.uk-grid-divider.uk-grid-medium>:not(.uk-first-column)::before{left:30px}.uk-grid-divider.uk-grid-medium.uk-grid-stack>.uk-grid-margin{margin-top:60px}.uk-grid-divider.uk-grid-medium.uk-grid-stack>.uk-grid-margin::before{top:-30px;left:60px}.uk-grid-divider.uk-grid-large{margin-left:-80px}.uk-grid-divider.uk-grid-large>*{padding-left:80px}.uk-grid-divider.uk-grid-large>:not(.uk-first-column)::before{left:40px}.uk-grid-divider.uk-grid-large.uk-grid-stack>.uk-grid-margin{margin-top:80px}.uk-grid-divider.uk-grid-large.uk-grid-stack>.uk-grid-margin::before{top:-40px;left:80px}@media (min-width:1200px){.uk-grid-divider.uk-grid-large{margin-left:-140px}.uk-grid-divider.uk-grid-large>*{padding-left:140px}.uk-grid-divider.uk-grid-large>:not(.uk-first-column)::before{left:70px}.uk-grid-divider.uk-grid-large.uk-grid-stack>.uk-grid-margin{margin-top:140px}.uk-grid-divider.uk-grid-large.uk-grid-stack>.uk-grid-margin::before{top:-70px;left:140px}}.uk-grid-item-match,.uk-grid-match>*{display:-ms-flexbox;display:-webkit-flex;display:flex;-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap}.uk-grid-item-match>:not([class*=uk-width]),.uk-grid-match>*>:not([class*=uk-width]){box-sizing:border-box;width:100%;-ms-flex:auto;-webkit-flex:auto;flex:auto}.uk-tile{position:relative;box-sizing:border-box;padding:30px 30px}@media (min-width:1200px){.uk-tile{padding:40px 40px}}.uk-tile::after,.uk-tile::before{content:\"\";display:table}.uk-tile::after{clear:both}.uk-tile>:last-child{margin-bottom:0}.uk-tile-default{background:#fff}.uk-tile-muted{background:#f8f8f8}.uk-tile-primary{background:#1e87f0}.uk-tile-secondary{background:#222}.uk-card{position:relative;box-sizing:border-box;-webkit-transition:box-shadow .1s ease-in-out;transition:box-shadow .1s ease-in-out}.uk-card-body{padding:30px 30px}.uk-card-header{padding:15px 30px}.uk-card-footer{padding:15px 30px}@media (min-width:1200px){.uk-card-body{padding:40px 40px}.uk-card-header{padding:20px 40px}.uk-card-footer{padding:20px 40px}}.uk-card-body::after,.uk-card-body::before,.uk-card-footer::after,.uk-card-footer::before,.uk-card-header::after,.uk-card-header::before{content:\"\";display:table}.uk-card-body::after,.uk-card-footer::after,.uk-card-header::after{clear:both}.uk-card-body>:last-child,.uk-card-footer>:last-child,.uk-card-header>:last-child{margin-bottom:0}.uk-card-title{font-size:1.5rem;line-height:1.4}.uk-card-badge{position:absolute;top:30px;right:30px;z-index:1}.uk-card-badge:first-child+*{margin-top:0}.uk-card-hover:not(.uk-card-default):not(.uk-card-primary):not(.uk-card-secondary):hover{background:#fff;box-shadow:0 14px 25px rgba(0,0,0,.16)}.uk-card-default{background:#fff;color:#666;box-shadow:0 5px 15px rgba(0,0,0,.08)}.uk-card-default .uk-card-title{color:#333}.uk-card-default.uk-card-hover:hover{background-color:#fff;box-shadow:0 14px 25px rgba(0,0,0,.16)}.uk-card-default .uk-card-header{border-bottom:1px solid #e5e5e5}.uk-card-default .uk-card-footer{border-top:1px solid #e5e5e5}.uk-card-primary{background:#1e87f0;color:#fff;box-shadow:0 5px 15px rgba(0,0,0,.08)}.uk-card-primary .uk-card-title{color:#fff}.uk-card-primary.uk-card-hover:hover{background-color:#1e87f0;box-shadow:0 14px 25px rgba(0,0,0,.16)}.uk-card-secondary{background:#222;color:#fff;box-shadow:0 5px 15px rgba(0,0,0,.08)}.uk-card-secondary .uk-card-title{color:#fff}.uk-card-secondary.uk-card-hover:hover{background-color:#222;box-shadow:0 14px 25px rgba(0,0,0,.16)}.uk-card-small .uk-card-body,.uk-card-small.uk-card-body{padding:20px 20px}.uk-card-small .uk-card-header{padding:13px 20px}.uk-card-small .uk-card-footer{padding:13px 20px}@media (min-width:1200px){.uk-card-large .uk-card-body,.uk-card-large.uk-card-body{padding:70px 70px}.uk-card-large .uk-card-header{padding:35px 70px}.uk-card-large .uk-card-footer{padding:35px 70px}}.uk-card-body .uk-nav-default{margin:-15px -30px}.uk-card-title+.uk-nav-default{margin-top:0}.uk-card-body .uk-nav-default .uk-nav-divider,.uk-card-body .uk-nav-default .uk-nav-header,.uk-card-body .uk-nav-default>li>a{padding-left:30px;padding-right:30px}.uk-card-body .uk-nav-default .uk-nav-sub{padding-left:45px}@media (min-width:1200px){.uk-card-body .uk-nav-default{margin:-25px -40px}.uk-card-title+.uk-nav-default{margin-top:0}.uk-card-body .uk-nav-default .uk-nav-divider,.uk-card-body .uk-nav-default .uk-nav-header,.uk-card-body .uk-nav-default>li>a{padding-left:40px;padding-right:40px}.uk-card-body .uk-nav-default .uk-nav-sub{padding-left:55px}}.uk-card-small .uk-nav-default{margin:-5px -20px}.uk-card-small .uk-card-title+.uk-nav-default{margin-top:0}.uk-card-small .uk-nav-default .uk-nav-divider,.uk-card-small .uk-nav-default .uk-nav-header,.uk-card-small .uk-nav-default>li>a{padding-left:20px;padding-right:20px}.uk-card-small .uk-nav-default .uk-nav-sub{padding-left:35px}@media (min-width:1200px){.uk-card-large .uk-nav-default{margin:-55px -70px}.uk-card-large .uk-card-title+.uk-nav-default{margin-top:0}}.uk-close{color:#999;-webkit-transition:.1s ease-in-out;transition:.1s ease-in-out;-webkit-transition-property:color,opacity;transition-property:color,opacity}.uk-close:focus,.uk-close:hover{color:#666;outline:0}.uk-spinner>*{-webkit-animation:uk-spinner-rotate 1.4s linear infinite;animation:uk-spinner-rotate 1.4s linear infinite}@-webkit-keyframes uk-spinner-rotate{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(270deg)}}@keyframes uk-spinner-rotate{0%{transform:rotate(0)}100%{transform:rotate(270deg)}}.uk-spinner>*>*{stroke-dasharray:88px;stroke-dashoffset:0;transform-origin:center;-webkit-animation:uk-spinner-dash 1.4s ease-in-out infinite;animation:uk-spinner-dash 1.4s ease-in-out infinite;stroke-width:1;stroke-linecap:round}@-webkit-keyframes uk-spinner-dash{0%{stroke-dashoffset:88px}50%{stroke-dashoffset:22px;-webkit-transform:rotate(135deg)}100%{stroke-dashoffset:88px;-webkit-transform:rotate(450deg)}}@keyframes uk-spinner-dash{0%{stroke-dashoffset:88px}50%{stroke-dashoffset:22px;transform:rotate(135deg)}100%{stroke-dashoffset:88px;transform:rotate(450deg)}}.uk-totop{padding:5px;color:#999;-webkit-transition:color .1s ease-in-out;transition:color .1s ease-in-out}.uk-totop:focus,.uk-totop:hover{color:#666;outline:0}.uk-totop:active{color:#333}.uk-marker{padding:5px;background:#222;color:#fff;border-radius:500px}.uk-marker:focus,.uk-marker:hover{color:#fff;outline:0}.uk-alert{position:relative;margin-bottom:20px;padding:15px 29px 15px 15px;background:#f8f8f8;color:#666}*+.uk-alert{margin-top:20px}.uk-alert>:last-child{margin-bottom:0}.uk-alert-close{position:absolute;top:20px;right:15px;color:inherit;opacity:.4}.uk-alert-close:first-child+*{margin-top:0}.uk-alert-close:focus,.uk-alert-close:hover{color:inherit;opacity:.8}.uk-alert-primary{background:#d8eafc;color:#1e87f0}.uk-alert-success{background:#edfbf6;color:#32d296}.uk-alert-warning{background:#fff6ee;color:#faa05a}.uk-alert-danger{background:#fef4f6;color:#f0506e}.uk-alert h1,.uk-alert h2,.uk-alert h3,.uk-alert h4,.uk-alert h5,.uk-alert h6{color:inherit}.uk-alert a:not([class]){color:inherit;text-decoration:underline}.uk-alert a:not([class]):hover{color:inherit;text-decoration:underline}.uk-badge{box-sizing:border-box;min-width:22px;height:22px;line-height:22px;padding:0 5px;border-radius:500px;vertical-align:middle;background:#1e87f0;color:#fff;font-size:.875rem;display:-ms-inline-flexbox;display:-webkit-inline-flex;display:inline-flex;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center}.uk-badge:focus,.uk-badge:hover{color:#fff;text-decoration:none;outline:0}.uk-label{display:inline-block;padding:0 10px;background:#1e87f0;line-height:1.5;font-size:.875rem;color:#fff;vertical-align:middle;white-space:nowrap;border-radius:2px;text-transform:uppercase}.uk-label-success{background-color:#32d296;color:#fff}.uk-label-warning{background-color:#faa05a;color:#fff}.uk-label-danger{background-color:#f0506e;color:#fff}.uk-overlay{padding:30px 30px}.uk-overlay>:last-child{margin-bottom:0}.uk-overlay-default{background:rgba(255,255,255,.8)}.uk-overlay-primary{background:rgba(34,34,34,.8)}.uk-article::after,.uk-article::before{content:\"\";display:table}.uk-article::after{clear:both}.uk-article>:last-child{margin-bottom:0}.uk-article+.uk-article{margin-top:70px}.uk-article-title{font-size:2.625rem;line-height:1.2}.uk-article-meta{font-size:.875rem;line-height:1.4;color:#999}.uk-article-meta a{color:#999}.uk-article-meta a:hover{color:#666;text-decoration:none}.uk-comment-header{margin-bottom:20px}.uk-comment-body::after,.uk-comment-body::before,.uk-comment-header::after,.uk-comment-header::before{content:\"\";display:table}.uk-comment-body::after,.uk-comment-header::after{clear:both}.uk-comment-body>:last-child,.uk-comment-header>:last-child{margin-bottom:0}.uk-comment-title{font-size:1.25rem;line-height:1.4}.uk-comment-meta{font-size:.875rem;line-height:1.4;color:#999}.uk-comment-list{padding:0;list-style:none}.uk-comment-list>:nth-child(n+2){margin-top:70px}.uk-comment-list .uk-comment~ul{margin:70px 0 0 0;padding-left:30px;list-style:none}@media (min-width:960px){.uk-comment-list .uk-comment~ul{padding-left:100px}}.uk-comment-list .uk-comment~ul>:nth-child(n+2){margin-top:70px}.uk-comment-primary{padding:30px;background-color:#f8f8f8}.uk-search{display:inline-block;position:relative;max-width:100%;margin:0}.uk-search-input::-webkit-search-cancel-button,.uk-search-input::-webkit-search-decoration{-webkit-appearance:none}.uk-search-input::-moz-placeholder{opacity:1}.uk-search-input{box-sizing:border-box;margin:0;border-radius:0;font:inherit;overflow:visible;-webkit-appearance:none;vertical-align:middle;width:100%;border:none;color:#666}.uk-search-input:focus{outline:0}.uk-search-input:-ms-input-placeholder{color:#999!important}.uk-search-input::-moz-placeholder{color:#999}.uk-search-input::-webkit-input-placeholder{color:#999}.uk-search-icon{margin:0;border:none;overflow:visible;font:inherit;color:inherit;text-transform:none;padding:0;background-color:transparent;cursor:pointer}.uk-search-icon::-moz-focus-inner{border:0;padding:0}.uk-search-icon:focus{outline:0}.uk-search .uk-search-icon{position:absolute;top:0;bottom:0;left:0;display:-ms-inline-flexbox;display:-webkit-inline-flex;display:inline-flex;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;color:#999}.uk-search .uk-search-icon:hover{color:#999}.uk-search .uk-search-icon:not(a):not(button):not(input){pointer-events:none}.uk-search .uk-search-icon-flip{right:0;left:auto}.uk-search-default{width:180px}.uk-search-default .uk-search-input{height:40px;padding-left:6px;padding-right:6px;background:0 0;border:1px solid #e5e5e5}.uk-search-default .uk-search-input:focus{background-color:transparent}.uk-search-default .uk-search-icon{width:40px}.uk-search-default .uk-search-icon:not(.uk-search-icon-flip)+.uk-search-input{padding-left:40px}.uk-search-default .uk-search-icon-flip+.uk-search-input{padding-right:40px}.uk-search-navbar{width:400px}.uk-search-navbar .uk-search-input{height:40px;background:0 0;font-size:1.5rem}.uk-search-navbar .uk-search-icon{width:40px}.uk-search-navbar .uk-search-icon:not(.uk-search-icon-flip)+.uk-search-input{padding-left:40px}.uk-search-navbar .uk-search-icon-flip+.uk-search-input{padding-right:40px}.uk-search-large{width:500px}.uk-search-large .uk-search-input{height:80px;background:0 0;font-size:2.625rem}.uk-search-large .uk-search-icon{width:80px}.uk-search-large .uk-search-icon:not(.uk-search-icon-flip)+.uk-search-input{padding-left:80px}.uk-search-large .uk-search-icon-flip+.uk-search-input{padding-right:80px}.uk-search-toggle{color:#999}.uk-search-toggle:focus,.uk-search-toggle:hover{color:#666}.uk-nav,.uk-nav ul{margin:0;padding:0;list-style:none}.uk-nav li>a{display:block;text-decoration:none}.uk-nav li>a:focus{outline:0}.uk-nav>li>a{padding:5px 0}ul.uk-nav-sub{padding:5px 0 5px 15px}.uk-nav-sub ul{padding-left:15px}.uk-nav-sub a{padding:2px 0}.uk-nav-parent-icon>.uk-parent>a::after{content:\"\";width:1.5em;height:1.5em;float:right;background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%23666%22%20stroke-width%3D%221.1%22%20points%3D%2210%201%204%207%2010%2013%22%3E%3C%2Fpolyline%3E%0A%3C%2Fsvg%3E\");background-repeat:no-repeat;background-position:50% 50%}.uk-nav-parent-icon>.uk-parent.uk-open>a::after{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%23666%22%20stroke-width%3D%221.1%22%20points%3D%221%204%207%2010%2013%204%22%3E%3C%2Fpolyline%3E%0A%3C%2Fsvg%3E\")}.uk-nav-header{padding:5px 0;text-transform:uppercase;font-size:.875rem}.uk-nav-header:not(:first-child){margin-top:20px}.uk-nav-divider{margin:5px 0}.uk-nav-default{font-size:.875rem}.uk-nav-default>li>a{color:#999}.uk-nav-default>li>a:focus,.uk-nav-default>li>a:hover{color:#666}.uk-nav-default>li.uk-active>a{color:#333}.uk-nav-default .uk-nav-header{color:#333}.uk-nav-default .uk-nav-divider{border-top:1px solid #e5e5e5}.uk-nav-default .uk-nav-sub a{color:#999}.uk-nav-default .uk-nav-sub a:focus,.uk-nav-default .uk-nav-sub a:hover{color:#666}.uk-nav-primary>li>a{font-size:1.5rem;line-height:1.5;color:#999}.uk-nav-primary>li>a:focus,.uk-nav-primary>li>a:hover{color:#666}.uk-nav-primary>li.uk-active>a{color:#333}.uk-nav-primary .uk-nav-header{color:#333}.uk-nav-primary .uk-nav-divider{border-top:1px solid #e5e5e5}.uk-nav-primary .uk-nav-sub a{color:#999}.uk-nav-primary .uk-nav-sub a:focus,.uk-nav-primary .uk-nav-sub a:hover{color:#666}.uk-nav-center{text-align:center}.uk-nav-center .uk-nav-sub,.uk-nav-center .uk-nav-sub ul{padding-left:0}.uk-nav-center.uk-nav-parent-icon>.uk-parent>a::after{position:absolute}.uk-navbar{display:-ms-flexbox;display:-webkit-flex;display:flex;position:relative}.uk-navbar-container:not(.uk-navbar-transparent){background:#f8f8f8}.uk-navbar-container>::after,.uk-navbar-container>::before{display:none!important}.uk-navbar-center,.uk-navbar-center-left>*,.uk-navbar-center-right>*,.uk-navbar-left,.uk-navbar-right{display:-ms-flexbox;display:-webkit-flex;display:flex;-ms-flex-align:center;-webkit-align-items:center;align-items:center}.uk-navbar-right{margin-left:auto}.uk-navbar-center:only-child{margin-left:auto;margin-right:auto;position:relative}.uk-navbar-center:not(:only-child){position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:990}.uk-navbar-center:not(:only-child) .uk-navbar-item,.uk-navbar-center:not(:only-child) .uk-navbar-nav>li>a,.uk-navbar-center:not(:only-child) .uk-navbar-toggle{white-space:nowrap}.uk-navbar-center-left,.uk-navbar-center-right{position:absolute;top:0}.uk-navbar-center-left{right:100%}.uk-navbar-center-right{left:100%}[class*=uk-navbar-center-] .uk-navbar-item,[class*=uk-navbar-center-] .uk-navbar-nav>li>a,[class*=uk-navbar-center-] .uk-navbar-toggle{white-space:nowrap}.uk-navbar-nav{display:-ms-flexbox;display:-webkit-flex;display:flex;margin:0;padding:0;list-style:none}.uk-navbar-center:only-child,.uk-navbar-left,.uk-navbar-right{-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap}.uk-navbar-item,.uk-navbar-nav>li>a,.uk-navbar-toggle{display:-ms-flexbox;display:-webkit-flex;display:flex;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;box-sizing:border-box;height:80px;padding:0 15px;font-size:.875rem;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;text-decoration:none}.uk-navbar-nav>li>a{color:#999;text-transform:uppercase;-webkit-transition:.1s ease-in-out;transition:.1s ease-in-out;-webkit-transition-property:color,background-color;transition-property:color,background-color}.uk-navbar-nav>li:hover>a,.uk-navbar-nav>li>a.uk-open,.uk-navbar-nav>li>a:focus{color:#666;outline:0}.uk-navbar-nav>li>a:active{color:#333}.uk-navbar-nav>li.uk-active>a{color:#333}.uk-navbar-item{color:#666}.uk-navbar-toggle{color:#999}.uk-navbar-toggle.uk-open,.uk-navbar-toggle:focus,.uk-navbar-toggle:hover{color:#666;outline:0;text-decoration:none}.uk-navbar-subtitle{font-size:.875rem}.uk-navbar-dropdown{display:none;position:absolute;z-index:1020;box-sizing:border-box;width:200px;padding:25px;background:#fff;color:#666;box-shadow:0 5px 12px rgba(0,0,0,.15)}.uk-navbar-dropdown.uk-open{display:block}[class*=uk-navbar-dropdown-top]{margin-top:-15px}[class*=uk-navbar-dropdown-bottom]{margin-top:15px}[class*=uk-navbar-dropdown-left]{margin-left:-15px}[class*=uk-navbar-dropdown-right]{margin-left:15px}.uk-navbar-dropdown-grid{margin-left:-50px}.uk-navbar-dropdown-grid>*{padding-left:50px}.uk-navbar-dropdown-grid>.uk-grid-margin{margin-top:50px}.uk-navbar-dropdown-stack .uk-navbar-dropdown-grid>*{width:100%!important}.uk-navbar-dropdown-width-2:not(.uk-navbar-dropdown-stack){width:400px}.uk-navbar-dropdown-width-3:not(.uk-navbar-dropdown-stack){width:600px}.uk-navbar-dropdown-width-4:not(.uk-navbar-dropdown-stack){width:800px}.uk-navbar-dropdown-width-5:not(.uk-navbar-dropdown-stack){width:1000px}.uk-navbar-dropdown-dropbar{margin-bottom:30px;box-shadow:none}.uk-navbar-dropdown-nav{font-size:.875rem}.uk-navbar-dropdown-nav>li>a{color:#999}.uk-navbar-dropdown-nav>li>a:focus,.uk-navbar-dropdown-nav>li>a:hover{color:#666}.uk-navbar-dropdown-nav>li.uk-active>a{color:#333}.uk-navbar-dropdown-nav .uk-nav-header{color:#333}.uk-navbar-dropdown-nav .uk-nav-divider{border-top:1px solid #e5e5e5}.uk-navbar-dropdown-nav .uk-nav-sub a{color:#999}.uk-navbar-dropdown-nav .uk-nav-sub a:focus,.uk-navbar-dropdown-nav .uk-nav-sub a:hover{color:#666}.uk-navbar-dropbar{position:relative;background:#fff;overflow:hidden}.uk-navbar-dropbar-slide{position:absolute;z-index:1020;left:0;right:0}.uk-navbar-container>.uk-container .uk-navbar-left{margin-left:-15px;margin-right:-15px}.uk-navbar-container>.uk-container .uk-navbar-right{margin-right:-15px}.uk-navbar-dropdown-grid>*{position:relative}.uk-navbar-dropdown-grid>:not(.uk-first-column)::before{content:\"\";position:absolute;top:0;bottom:0;left:25px;border-left:1px solid #e5e5e5}.uk-navbar-dropdown-grid.uk-grid-stack>.uk-grid-margin::before{content:\"\";position:absolute;top:-25px;left:50px;right:0;border-top:1px solid #e5e5e5}.uk-subnav{display:-ms-flexbox;display:-webkit-flex;display:flex;-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap;margin-left:-20px;padding:0;list-style:none}.uk-subnav>*{-ms-flex:none;-webkit-flex:none;flex:none;padding-left:20px;position:relative}.uk-subnav>*>:first-child{display:block;color:#999;font-size:.875rem;text-transform:uppercase;-webkit-transition:.1s ease-in-out;transition:.1s ease-in-out;-webkit-transition-property:color,background-color;transition-property:color,background-color}.uk-subnav>*>a:focus,.uk-subnav>*>a:hover{color:#666;text-decoration:none;outline:0}.uk-subnav>.uk-active>a{color:#333}.uk-subnav-divider>*{display:-ms-flexbox;display:-webkit-flex;display:flex;-ms-flex-align:center;-webkit-align-items:center;align-items:center}.uk-subnav-divider>:nth-child(n+2):not(.uk-first-column)::before{content:\"\";height:1.5em;margin-left:0;margin-right:20px;border-left:1px solid #e5e5e5}.uk-subnav-pill>*>:first-child{padding:5px 10px;background:0 0;color:#999}.uk-subnav-pill>*>a:focus,.uk-subnav-pill>*>a:hover{background-color:#f8f8f8;color:#666}.uk-subnav-pill>*>a:active{background-color:#f8f8f8;color:#666}.uk-subnav-pill>.uk-active>a{background-color:#1e87f0;color:#fff}.uk-subnav>.uk-disabled>a{color:#999}.uk-breadcrumb{display:-ms-flexbox;display:-webkit-flex;display:flex;-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:0;list-style:none}.uk-breadcrumb>*{-ms-flex:none;-webkit-flex:none;flex:none}.uk-breadcrumb>*>*{display:inline-block;font-size:.875rem;color:#999}.uk-breadcrumb>*>:focus,.uk-breadcrumb>*>:hover{color:#666;text-decoration:none}.uk-breadcrumb>:last-child>*{color:#666}.uk-breadcrumb>:nth-child(n+2):not(.uk-first-column)::before{content:\"/\";display:inline-block;margin:0 20px;color:#999}.uk-pagination{display:-ms-flexbox;display:-webkit-flex;display:flex;-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap;margin-left:-20px;padding:0;list-style:none}.uk-pagination>*{-ms-flex:none;-webkit-flex:none;flex:none;padding-left:20px;position:relative}.uk-pagination>*>*{display:block;color:#999;-webkit-transition:color .1s ease-in-out;transition:color .1s ease-in-out}.uk-pagination>*>:focus,.uk-pagination>*>:hover{color:#666;text-decoration:none}.uk-pagination>.uk-active>*{color:#666}.uk-pagination>.uk-disabled>*{color:#999}.uk-tab{display:-ms-flexbox;display:-webkit-flex;display:flex;-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap;margin-left:-20px;padding:0;list-style:none;position:relative}.uk-tab::before{content:\"\";position:absolute;bottom:0;left:20px;right:0;border-bottom:1px solid #e5e5e5}.uk-tab>*{-ms-flex:none;-webkit-flex:none;flex:none;padding-left:20px;position:relative}.uk-tab>*>a{display:block;text-align:center;padding:5px 10px;color:#999;border-bottom:1px solid transparent;font-size:.875rem;text-transform:uppercase;-webkit-transition:color .1s ease-in-out;transition:color .1s ease-in-out}.uk-tab>*>a:focus,.uk-tab>*>a:hover{color:#666;text-decoration:none}.uk-tab>.uk-active>a{color:#333;border-color:#1e87f0}.uk-tab>.uk-disabled>a{color:#999}.uk-tab-bottom::before{top:0;bottom:auto}.uk-tab-bottom>*>a{border-top:1px solid transparent;border-bottom:none}.uk-tab-left,.uk-tab-right{-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column;margin-left:0}.uk-tab-left>*,.uk-tab-right>*{padding-left:0}.uk-tab-left::before{top:0;bottom:0;left:auto;right:0;border-left:1px solid #e5e5e5;border-bottom:none}.uk-tab-right::before{top:0;bottom:0;left:0;right:auto;border-left:1px solid #e5e5e5;border-bottom:none}.uk-tab-left>*>a{text-align:right;border-right:1px solid transparent;border-bottom:none}.uk-tab-right>*>a{text-align:left;border-left:1px solid transparent;border-bottom:none}.uk-tab .uk-dropdown{margin-left:30px}.uk-slidenav{padding:5px;color:rgba(102,102,102,.6);-webkit-transition:color .1s ease-in-out;transition:color .1s ease-in-out}.uk-slidenav:focus,.uk-slidenav:hover{color:rgba(102,102,102,.8);outline:0}.uk-slidenav:active{color:rgba(102,102,102,.9)}.uk-slidenav-container{display:-ms-flexbox;display:-webkit-flex;display:flex}.uk-dotnav{display:-ms-flexbox;display:-webkit-flex;display:flex;-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap;margin:0;padding:0;list-style:none;margin-left:-15px}.uk-dotnav>*{-ms-flex:none;-webkit-flex:none;flex:none;padding-left:15px}.uk-dotnav>*>*{display:block;box-sizing:content-box;width:16px;height:16px;border-radius:50%;background:rgba(102,102,102,.1);text-indent:100%;overflow:hidden;white-space:nowrap;-webkit-transition:background-color .2s ease-in-out;transition:background-color .2s ease-in-out}.uk-dotnav>*>:focus,.uk-dotnav>*>:hover{background-color:rgba(102,102,102,.4);outline:0}.uk-dotnav>*>:active{background-color:rgba(102,102,102,.6)}.uk-dotnav>.uk-active>*{background-color:rgba(102,102,102,.4)}.uk-dotnav-vertical{-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column;margin-left:0;margin-top:-15px}.uk-dotnav-vertical>*{padding-left:0;padding-top:15px}.uk-accordion{padding:0;list-style:none}.uk-accordion>:nth-child(n+2){margin-top:20px}.uk-accordion-title{margin:0;font-size:1.25rem;line-height:1.4;cursor:pointer;overflow:hidden}.uk-accordion-title::after{content:\"\";width:1.4em;height:1.4em;float:right;background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2213%22%20height%3D%2213%22%20viewBox%3D%220%200%2013%2013%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Crect%20fill%3D%22%23666%22%20width%3D%2213%22%20height%3D%221%22%20x%3D%220%22%20y%3D%226%22%3E%3C%2Frect%3E%0A%20%20%20%20%3Crect%20fill%3D%22%23666%22%20width%3D%221%22%20height%3D%2213%22%20x%3D%226%22%20y%3D%220%22%3E%3C%2Frect%3E%0A%3C%2Fsvg%3E\");background-repeat:no-repeat;background-position:50% 50%}.uk-open>.uk-accordion-title::after{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2213%22%20height%3D%2213%22%20viewBox%3D%220%200%2013%2013%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Crect%20fill%3D%22%23666%22%20width%3D%2213%22%20height%3D%221%22%20x%3D%220%22%20y%3D%226%22%3E%3C%2Frect%3E%0A%3C%2Fsvg%3E\")}.uk-accordion-content{margin-top:20px}.uk-accordion-content:after,.uk-accordion-content:before{content:\"\";display:table}.uk-accordion-content:after{clear:both}.uk-accordion-content>:last-child{margin-bottom:0}.uk-drop{display:none;position:absolute;z-index:1020;box-sizing:border-box;width:300px}.uk-drop.uk-open{display:block}[class*=uk-drop-top]{margin-top:-20px}[class*=uk-drop-bottom]{margin-top:20px}[class*=uk-drop-left]{margin-left:-20px}[class*=uk-drop-right]{margin-left:20px}.uk-drop-stack .uk-drop-grid>*{width:100%!important}.uk-dropdown{display:none;position:absolute;z-index:1020;box-sizing:border-box;min-width:200px;padding:25px;background:#fff;color:#666;box-shadow:0 5px 12px rgba(0,0,0,.15)}.uk-dropdown.uk-open{display:block}.uk-dropdown-nav{white-space:nowrap;font-size:.875rem}.uk-dropdown-nav>li>a{color:#999}.uk-dropdown-nav>li.uk-active>a,.uk-dropdown-nav>li>a:focus,.uk-dropdown-nav>li>a:hover{color:#666}.uk-dropdown-nav .uk-nav-header{color:#333}.uk-dropdown-nav .uk-nav-divider{border-top:1px solid #e5e5e5}.uk-dropdown-nav .uk-nav-sub a{color:#999}.uk-dropdown-nav .uk-nav-sub a:focus,.uk-dropdown-nav .uk-nav-sub a:hover{color:#666}[class*=uk-dropdown-top]{margin-top:-10px}[class*=uk-dropdown-bottom]{margin-top:10px}[class*=uk-dropdown-left]{margin-left:-10px}[class*=uk-dropdown-right]{margin-left:10px}.uk-dropdown-stack .uk-dropdown-grid>*{width:100%!important}.uk-modal{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:1010;overflow-y:auto;-webkit-overflow-scrolling:touch;padding-left:15px;padding-right:15px;background:rgba(0,0,0,.6);opacity:0;-webkit-transition:opacity .15s linear;transition:opacity .15s linear}@media (min-width:640px){.uk-modal{padding-left:30px;padding-right:30px}}@media (min-width:960px){.uk-modal{padding-left:40px;padding-right:40px}}.uk-modal.uk-open{opacity:1}.uk-modal-page{overflow:hidden}.uk-modal-dialog{position:relative;box-sizing:border-box;margin:50px auto;width:600px;max-width:100%;background:#fff;opacity:0;-webkit-transform:translateY(-100px);transform:translateY(-100px);-webkit-transition:opacity .3s linear,-webkit-transform .3s ease-out;transition:opacity .3s linear,transform .3s ease-out}@media (max-width:639px){.uk-modal-dialog{margin-top:15px;margin-bottom:15px}}.uk-open>.uk-modal-dialog{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}.uk-modal-container .uk-modal-dialog{width:1200px}.uk-modal-full{padding:0;background:0 0}.uk-modal-full .uk-modal-dialog{margin:0;width:100%;max-width:100%;-webkit-transform:translateY(0);transform:translateY(0)}.uk-modal-lightbox{background:rgba(0,0,0,.9)}.uk-modal-lightbox .uk-modal-dialog{margin-left:15px;margin-right:15px}.uk-modal-body{padding:30px 30px}.uk-modal-header{padding:15px 30px;background:#fff;border-bottom:1px solid #e5e5e5}.uk-modal-footer{padding:15px 30px;background:#fff;border-top:1px solid #e5e5e5}.uk-modal-body::after,.uk-modal-body::before,.uk-modal-footer::after,.uk-modal-footer::before,.uk-modal-header::after,.uk-modal-header::before{content:\"\";display:table}.uk-modal-body::after,.uk-modal-footer::after,.uk-modal-header::after{clear:both}.uk-modal-body>:last-child,.uk-modal-footer>:last-child,.uk-modal-header>:last-child{margin-bottom:0}.uk-modal-title{font-size:2rem;line-height:1.3}[class*=uk-modal-close-]{position:absolute;z-index:1010;top:10px;right:10px;padding:5px}[class*=uk-modal-close-]:first-child+*{margin-top:0}.uk-modal-close-outside{top:0;right:0;-webkit-transform:translate(100%,-100%);transform:translate(100%,-100%);color:#fff}.uk-modal-close-outside:hover{color:#fff}.uk-modal-close-full{top:0;right:0;padding:20px;background:#fff}.uk-modal-caption{position:absolute;left:0;right:0;top:100%;margin-top:20px;color:#fff;text-align:center}.uk-sticky-fixed{z-index:980;box-sizing:border-box;margin:0!important;-webkit-backface-visibility:hidden;backface-visibility:hidden}.uk-sticky[class*=uk-animation-]{-webkit-animation-duration:.2s;animation-duration:.2s}.uk-sticky.uk-animation-reverse{-webkit-animation-duration:.2s;animation-duration:.2s}.uk-offcanvas{display:none;position:fixed;top:0;bottom:0;left:0;z-index:1000}.uk-offcanvas-flip .uk-offcanvas{right:0;left:auto}.uk-offcanvas-bar{position:absolute;top:0;bottom:0;left:0;box-sizing:border-box;width:270px;padding:20px 20px;background:#222;overflow-y:auto;-webkit-overflow-scrolling:touch;-webkit-transform:translateX(-100%);transform:translateX(-100%)}@media (min-width:960px){.uk-offcanvas-bar{width:350px;padding:40px 40px}}.uk-offcanvas-flip .uk-offcanvas-bar{left:auto;right:0;-webkit-transform:translateX(100%);transform:translateX(100%)}.uk-open>.uk-offcanvas-bar{-webkit-transform:translateX(0);transform:translateX(0)}.uk-offcanvas-bar-animation{-webkit-transition:-webkit-transform .3s ease-out;transition:transform .3s ease-out}.uk-offcanvas-reveal{position:absolute;top:0;bottom:0;left:0;width:0;overflow:hidden;-webkit-transition:width .3s ease-out;transition:width .3s ease-out}.uk-offcanvas-reveal .uk-offcanvas-bar{-webkit-transform:translateX(0);transform:translateX(0)}.uk-open>.uk-offcanvas-reveal{width:270px}@media (min-width:960px){.uk-open>.uk-offcanvas-reveal{width:350px}}.uk-offcanvas-flip .uk-offcanvas-reveal{right:0;left:auto}.uk-offcanvas-close{position:absolute;z-index:1000;top:20px;right:20px;padding:5px}.uk-offcanvas-overlay{width:100vw;touch-action:none}.uk-offcanvas-overlay::before{content:\"\";position:absolute;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.1);opacity:0;-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.uk-offcanvas-overlay.uk-open::before{opacity:1}.uk-offcanvas-container,.uk-offcanvas-page{overflow-x:hidden}.uk-offcanvas-container-overlay{overflow:hidden}.uk-offcanvas-container .uk-offcanvas-content{position:relative;left:0;-webkit-transition:left .3s ease-out;transition:left .3s ease-out;-webkit-overflow-scrolling:touch}.uk-offcanvas-overlay .uk-offcanvas-content{overflow-y:hidden}:not(.uk-offcanvas-flip)>.uk-offcanvas-content-animation{left:270px}.uk-offcanvas-flip>.uk-offcanvas-content-animation{left:-270px}@media (min-width:960px){:not(.uk-offcanvas-flip)>.uk-offcanvas-content-animation{left:350px}.uk-offcanvas-flip>.uk-offcanvas-content-animation{left:-350px}}.uk-switcher{margin:0;padding:0;list-style:none}.uk-switcher>:not(.uk-active){display:none}.uk-switcher>*>:last-child{margin-bottom:0}.uk-iconnav{display:-ms-flexbox;display:-webkit-flex;display:flex;-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap;margin:0;padding:0;list-style:none;margin-left:-10px}.uk-iconnav>*{-ms-flex:none;-webkit-flex:none;flex:none;padding-left:10px}.uk-iconnav>*>*{display:block;color:#999}.uk-iconnav>*>:focus,.uk-iconnav>*>:hover{color:#666;outline:0}.uk-iconnav>.uk-active>*{color:#666}.uk-iconnav-vertical{-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column;margin-left:0;margin-top:-10px}.uk-iconnav-vertical>*{padding-left:0;padding-top:10px}.uk-notification{position:fixed;top:10px;left:10px;z-index:1040;box-sizing:border-box;width:350px}.uk-notification-bottom-right,.uk-notification-top-right{left:auto;right:10px}.uk-notification-bottom-center,.uk-notification-top-center{left:50%;margin-left:-175px}.uk-notification-bottom-center,.uk-notification-bottom-left,.uk-notification-bottom-right{top:auto;bottom:10px}@media (max-width:639px){.uk-notification{left:10px;right:10px;width:auto;margin:0}}.uk-notification-message{position:relative;margin-bottom:10px;padding:15px;background:#f8f8f8;color:#666;font-size:1.25rem;line-height:1.4;cursor:pointer}.uk-notification-close{display:none;position:absolute;top:20px;right:15px}.uk-notification-message:hover .uk-notification-close{display:block}.uk-notification-message-primary{color:#1e87f0}.uk-notification-message-success{color:#32d296}.uk-notification-message-warning{color:#faa05a}.uk-notification-message-danger{color:#f0506e}.uk-tooltip{display:none;position:absolute;z-index:1030;box-sizing:border-box;max-width:200px;padding:3px 6px;background:#666;border-radius:2px;color:#fff;font-size:12px}.uk-tooltip.uk-active{display:block}[class*=uk-tooltip-top]{margin-top:-10px}[class*=uk-tooltip-bottom]{margin-top:10px}[class*=uk-tooltip-left]{margin-left:-10px}[class*=uk-tooltip-right]{margin-left:10px}.uk-placeholder{margin-bottom:20px;padding:30px 30px;background:0 0;border:1px dashed #e5e5e5}*+.uk-placeholder{margin-top:20px}.uk-placeholder>:last-child{margin-bottom:0}.uk-progress{-webkit-appearance:none;-moz-appearance:none;display:block;width:100%;border:0;background-color:#f8f8f8;margin-bottom:20px;height:15px;border-radius:500px;overflow:hidden}*+.uk-progress{margin-top:20px}.uk-progress:indeterminate{color:transparent}.uk-progress::-webkit-progress-bar{background-color:#f8f8f8;border-radius:500px;overflow:hidden}.uk-progress:indeterminate::-moz-progress-bar{width:0}.uk-progress::-webkit-progress-value{background-color:#1e87f0;transition:width .6s ease}.uk-progress::-moz-progress-bar{background-color:#1e87f0}.uk-progress::-ms-fill{background-color:#1e87f0;transition:width .6s ease;border:0}.uk-sortable{position:relative}.uk-sortable>*{touch-action:none}.uk-sortable svg{pointer-events:none}.uk-sortable>:last-child{margin-bottom:0}.uk-sortable-drag{position:absolute!important;z-index:1050!important;pointer-events:none}.uk-sortable-placeholder{opacity:0}.uk-sortable-empty{min-height:50px}.uk-sortable-handle:hover{cursor:move}.uk-countdown-number,.uk-countdown-separator{line-height:70px}.uk-countdown-number{font-size:2rem}@media (min-width:640px){.uk-countdown-number{font-size:4rem}}@media (min-width:960px){.uk-countdown-number{font-size:6rem}}.uk-countdown-separator{font-size:1rem}@media (min-width:640px){.uk-countdown-separator{font-size:2rem}}@media (min-width:960px){.uk-countdown-separator{font-size:3rem}}[class*=uk-animation-]{-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}.uk-animation-reverse{-webkit-animation-direction:reverse;animation-direction:reverse;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}.uk-animation-fade{-webkit-animation-name:uk-fade;animation-name:uk-fade;-webkit-animation-duration:.8s;animation-duration:.8s;-webkit-animation-timing-function:linear;animation-timing-function:linear}.uk-animation-scale-up{-webkit-animation-name:uk-fade-scale-02;animation-name:uk-fade-scale-02}.uk-animation-scale-down{-webkit-animation-name:uk-fade-scale-18;animation-name:uk-fade-scale-18}.uk-animation-slide-top{-webkit-animation-name:uk-fade-top;animation-name:uk-fade-top}.uk-animation-slide-bottom{-webkit-animation-name:uk-fade-bottom;animation-name:uk-fade-bottom}.uk-animation-slide-left{-webkit-animation-name:uk-fade-left;animation-name:uk-fade-left}.uk-animation-slide-right{-webkit-animation-name:uk-fade-right;animation-name:uk-fade-right}.uk-animation-slide-top-small{-webkit-animation-name:uk-fade-top-small;animation-name:uk-fade-top-small}.uk-animation-slide-bottom-small{-webkit-animation-name:uk-fade-bottom-small;animation-name:uk-fade-bottom-small}.uk-animation-slide-left-small{-webkit-animation-name:uk-fade-left-small;animation-name:uk-fade-left-small}.uk-animation-slide-right-small{-webkit-animation-name:uk-fade-right-small;animation-name:uk-fade-right-small}.uk-animation-slide-top-medium{-webkit-animation-name:uk-fade-top-medium;animation-name:uk-fade-top-medium}.uk-animation-slide-bottom-medium{-webkit-animation-name:uk-fade-bottom-medium;animation-name:uk-fade-bottom-medium}.uk-animation-slide-left-medium{-webkit-animation-name:uk-fade-left-medium;animation-name:uk-fade-left-medium}.uk-animation-slide-right-medium{-webkit-animation-name:uk-fade-right-medium;animation-name:uk-fade-right-medium}.uk-animation-kenburns{-webkit-animation-name:uk-scale-kenburns;animation-name:uk-scale-kenburns;-webkit-animation-duration:15s;animation-duration:15s}.uk-animation-shake{-webkit-animation-name:uk-shake;animation-name:uk-shake}.uk-animation-fast{-webkit-animation-duration:.1s;animation-duration:.1s}.uk-animation-toggle:not(:hover):not(.uk-hover) [class*=uk-animation-]{-webkit-animation-name:none;animation-name:none}@-webkit-keyframes uk-fade{0%{opacity:0}100%{opacity:1}}@keyframes uk-fade{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes uk-fade-top{0%{opacity:0;-webkit-transform:translateY(-100%)}100%{opacity:1;-webkit-transform:translateY(0)}}@keyframes uk-fade-top{0%{opacity:0;transform:translateY(-100%)}100%{opacity:1;transform:translateY(0)}}@-webkit-keyframes uk-fade-bottom{0%{opacity:0;-webkit-transform:translateY(100%)}100%{opacity:1;-webkit-transform:translateY(0)}}@keyframes uk-fade-bottom{0%{opacity:0;transform:translateY(100%)}100%{opacity:1;transform:translateY(0)}}@-webkit-keyframes uk-fade-left{0%{opacity:0;-webkit-transform:translateX(-100%)}100%{opacity:1;-webkit-transform:translateX(0)}}@keyframes uk-fade-left{0%{opacity:0;transform:translateX(-100%)}100%{opacity:1;transform:translateX(0)}}@-webkit-keyframes uk-fade-right{0%{opacity:0;-webkit-transform:translateX(100%)}100%{opacity:1;-webkit-transform:translateX(0)}}@keyframes uk-fade-right{0%{opacity:0;transform:translateX(100%)}100%{opacity:1;transform:translateX(0)}}@-webkit-keyframes uk-fade-top-small{0%{opacity:0;-webkit-transform:translateY(-10px)}100%{opacity:1;-webkit-transform:translateY(0)}}@keyframes uk-fade-top-small{0%{opacity:0;transform:translateY(-10px)}100%{opacity:1;transform:translateY(0)}}@-webkit-keyframes uk-fade-bottom-small{0%{opacity:0;-webkit-transform:translateY(10px)}100%{opacity:1;-webkit-transform:translateY(0)}}@keyframes uk-fade-bottom-small{0%{opacity:0;transform:translateY(10px)}100%{opacity:1;transform:translateY(0)}}@-webkit-keyframes uk-fade-left-small{0%{opacity:0;-webkit-transform:translateX(-10px)}100%{opacity:1;-webkit-transform:translateX(0)}}@keyframes uk-fade-left-small{0%{opacity:0;transform:translateX(-10px)}100%{opacity:1;transform:translateX(0)}}@-webkit-keyframes uk-fade-right-small{0%{opacity:0;-webkit-transform:translateX(10px)}100%{opacity:1;-webkit-transform:translateX(0)}}@keyframes uk-fade-right-small{0%{opacity:0;transform:translateX(10px)}100%{opacity:1;transform:translateX(0)}}@-webkit-keyframes uk-fade-top-medium{0%{opacity:0;-webkit-transform:translateY(-50px)}100%{opacity:1;-webkit-transform:translateY(0)}}@keyframes uk-fade-top-medium{0%{opacity:0;transform:translateY(-50px)}100%{opacity:1;transform:translateY(0)}}@-webkit-keyframes uk-fade-bottom-medium{0%{opacity:0;-webkit-transform:translateY(50px)}100%{opacity:1;-webkit-transform:translateY(0)}}@keyframes uk-fade-bottom-medium{0%{opacity:0;transform:translateY(50px)}100%{opacity:1;transform:translateY(0)}}@-webkit-keyframes uk-fade-left-medium{0%{opacity:0;-webkit-transform:translateX(-50px)}100%{opacity:1;-webkit-transform:translateX(0)}}@keyframes uk-fade-left-medium{0%{opacity:0;transform:translateX(-50px)}100%{opacity:1;transform:translateX(0)}}@-webkit-keyframes uk-fade-right-medium{0%{opacity:0;-webkit-transform:translateX(50px)}100%{opacity:1;-webkit-transform:translateX(0)}}@keyframes uk-fade-right-medium{0%{opacity:0;transform:translateX(50px)}100%{opacity:1;transform:translateX(0)}}@-webkit-keyframes uk-fade-scale-02{0%{opacity:0;-webkit-transform:scale(.2)}100%{opacity:1;-webkit-transform:scale(1)}}@keyframes uk-fade-scale-02{0%{opacity:0;transform:scale(.2)}100%{opacity:1;transform:scale(1)}}@-webkit-keyframes uk-fade-scale-18{0%{opacity:0;-webkit-transform:scale(1.8)}100%{opacity:1;-webkit-transform:scale(1)}}@keyframes uk-fade-scale-18{0%{opacity:0;transform:scale(1.8)}100%{opacity:1;transform:scale(1)}}@-webkit-keyframes uk-scale-kenburns{0%{-webkit-transform:scale(1)}100%{-webkit-transform:scale(1.2)}}@keyframes uk-scale-kenburns{0%{transform:scale(1)}100%{transform:scale(1.2)}}@-webkit-keyframes uk-shake{0%,100%{-webkit-transform:translateX(0)}10%{-webkit-transform:translateX(-9px)}20%{-webkit-transform:translateX(8px)}30%{-webkit-transform:translateX(-7px)}40%{-webkit-transform:translateX(6px)}50%{-webkit-transform:translateX(-5px)}60%{-webkit-transform:translateX(4px)}70%{-webkit-transform:translateX(-3px)}80%{-webkit-transform:translateX(2px)}90%{-webkit-transform:translateX(-1px)}}@keyframes uk-shake{0%,100%{transform:translateX(0)}10%{transform:translateX(-9px)}20%{transform:translateX(8px)}30%{transform:translateX(-7px)}40%{transform:translateX(6px)}50%{transform:translateX(-5px)}60%{transform:translateX(4px)}70%{transform:translateX(-3px)}80%{transform:translateX(2px)}90%{transform:translateX(-1px)}}[class*=uk-child-width]>*{box-sizing:border-box;width:100%}.uk-child-width-1-2>*{width:50%}.uk-child-width-1-3>*{width:calc(100% * 1 / 3.001)}.uk-child-width-1-4>*{width:25%}.uk-child-width-1-5>*{width:20%}.uk-child-width-1-6>*{width:calc(100% * 1 / 6.001)}.uk-child-width-auto>*{width:auto}.uk-child-width-expand>*{width:1px}.uk-child-width-expand>:not([class*=uk-width]){-ms-flex:1;-webkit-flex:1;flex:1;min-width:0;flex-basis:1px}@media (min-width:640px){.uk-child-width-1-1\\@s>*{width:100%}.uk-child-width-1-2\\@s>*{width:50%}.uk-child-width-1-3\\@s>*{width:calc(100% * 1 / 3.001)}.uk-child-width-1-4\\@s>*{width:25%}.uk-child-width-1-5\\@s>*{width:20%}.uk-child-width-1-6\\@s>*{width:calc(100% * 1 / 6.001)}.uk-child-width-auto\\@s>*{width:auto}.uk-child-width-expand\\@s>*{width:1px}.uk-child-width-expand\\@s>:not([class*=uk-width]){-ms-flex:1;-webkit-flex:1;flex:1;min-width:0;flex-basis:1px}}@media (min-width:960px){.uk-child-width-1-1\\@m>*{width:100%}.uk-child-width-1-2\\@m>*{width:50%}.uk-child-width-1-3\\@m>*{width:calc(100% * 1 / 3.001)}.uk-child-width-1-4\\@m>*{width:25%}.uk-child-width-1-5\\@m>*{width:20%}.uk-child-width-1-6\\@m>*{width:calc(100% * 1 / 6.001)}.uk-child-width-auto\\@m>*{width:auto}.uk-child-width-expand\\@m>*{width:1px}.uk-child-width-expand\\@m>:not([class*=uk-width]){-ms-flex:1;-webkit-flex:1;flex:1;min-width:0;flex-basis:1px}}@media (min-width:1200px){.uk-child-width-1-1\\@l>*{width:100%}.uk-child-width-1-2\\@l>*{width:50%}.uk-child-width-1-3\\@l>*{width:calc(100% * 1 / 3.001)}.uk-child-width-1-4\\@l>*{width:25%}.uk-child-width-1-5\\@l>*{width:20%}.uk-child-width-1-6\\@l>*{width:calc(100% * 1 / 6.001)}.uk-child-width-auto\\@l>*{width:auto}.uk-child-width-expand\\@l>*{width:1px}.uk-child-width-expand\\@l>:not([class*=uk-width]){-ms-flex:1;-webkit-flex:1;flex:1;min-width:0;flex-basis:1px}}@media (min-width:1600px){.uk-child-width-1-1\\@xl>*{width:100%}.uk-child-width-1-2\\@xl>*{width:50%}.uk-child-width-1-3\\@xl>*{width:calc(100% * 1 / 3.001)}.uk-child-width-1-4\\@xl>*{width:25%}.uk-child-width-1-5\\@xl>*{width:20%}.uk-child-width-1-6\\@xl>*{width:calc(100% * 1 / 6.001)}.uk-child-width-auto\\@xl>*{width:auto}.uk-child-width-expand\\@xl>*{width:1px}.uk-child-width-expand\\@xl>:not([class*=uk-width]){-ms-flex:1;-webkit-flex:1;flex:1;min-width:0;flex-basis:1px}}[class*=uk-width]{box-sizing:border-box;width:100%;max-width:100%}.uk-width-1-2{width:50%}.uk-width-1-3{width:calc(100% * 1 / 3.001)}.uk-width-2-3{width:calc(100% * 2 / 3.001)}.uk-width-1-4{width:25%}.uk-width-3-4{width:75%}.uk-width-1-5{width:20%}.uk-width-2-5{width:40%}.uk-width-3-5{width:60%}.uk-width-4-5{width:80%}.uk-width-1-6{width:calc(100% * 1 / 6.001)}.uk-width-5-6{width:calc(100% * 5 / 6.001)}.uk-width-small{width:150px}.uk-width-medium{width:300px}.uk-width-large{width:450px}.uk-width-xlarge{width:600px}.uk-width-xxlarge{width:750px}.uk-width-auto{width:auto}.uk-width-expand{width:1px;-ms-flex:1;-webkit-flex:1;flex:1;min-width:0;flex-basis:1px}@media (min-width:640px){.uk-width-1-1\\@s{width:100%}.uk-width-1-2\\@s{width:50%}.uk-width-1-3\\@s{width:calc(100% * 1 / 3.001)}.uk-width-2-3\\@s{width:calc(100% * 2 / 3.001)}.uk-width-1-4\\@s{width:25%}.uk-width-3-4\\@s{width:75%}.uk-width-1-5\\@s{width:20%}.uk-width-2-5\\@s{width:40%}.uk-width-3-5\\@s{width:60%}.uk-width-4-5\\@s{width:80%}.uk-width-1-6\\@s{width:calc(100% * 1 / 6.001)}.uk-width-5-6\\@s{width:calc(100% * 5 / 6.001)}.uk-width-small\\@s{width:150px}.uk-width-medium\\@s{width:300px}.uk-width-large\\@s{width:450px}.uk-width-xlarge\\@s{width:600px}.uk-width-xxlarge\\@s{width:750px}.uk-width-auto\\@s{width:auto}.uk-width-expand\\@s{width:1px;-ms-flex:1;-webkit-flex:1;flex:1;min-width:0;flex-basis:1px}}@media (min-width:960px){.uk-width-1-1\\@m{width:100%}.uk-width-1-2\\@m{width:50%}.uk-width-1-3\\@m{width:calc(100% * 1 / 3.001)}.uk-width-2-3\\@m{width:calc(100% * 2 / 3.001)}.uk-width-1-4\\@m{width:25%}.uk-width-3-4\\@m{width:75%}.uk-width-1-5\\@m{width:20%}.uk-width-2-5\\@m{width:40%}.uk-width-3-5\\@m{width:60%}.uk-width-4-5\\@m{width:80%}.uk-width-1-6\\@m{width:calc(100% * 1 / 6.001)}.uk-width-5-6\\@m{width:calc(100% * 5 / 6.001)}.uk-width-small\\@m{width:150px}.uk-width-medium\\@m{width:300px}.uk-width-large\\@m{width:450px}.uk-width-xlarge\\@m{width:600px}.uk-width-xxlarge\\@m{width:750px}.uk-width-auto\\@m{width:auto}.uk-width-expand\\@m{width:1px;-ms-flex:1;-webkit-flex:1;flex:1;min-width:0;flex-basis:1px}}@media (min-width:1200px){.uk-width-1-1\\@l{width:100%}.uk-width-1-2\\@l{width:50%}.uk-width-1-3\\@l{width:calc(100% * 1 / 3.001)}.uk-width-2-3\\@l{width:calc(100% * 2 / 3.001)}.uk-width-1-4\\@l{width:25%}.uk-width-3-4\\@l{width:75%}.uk-width-1-5\\@l{width:20%}.uk-width-2-5\\@l{width:40%}.uk-width-3-5\\@l{width:60%}.uk-width-4-5\\@l{width:80%}.uk-width-1-6\\@l{width:calc(100% * 1 / 6.001)}.uk-width-5-6\\@l{width:calc(100% * 5 / 6.001)}.uk-width-small\\@l{width:150px}.uk-width-medium\\@l{width:300px}.uk-width-large\\@l{width:450px}.uk-width-xlarge\\@l{width:600px}.uk-width-xxlarge\\@l{width:750px}.uk-width-auto\\@l{width:auto}.uk-width-expand\\@l{width:1px;-ms-flex:1;-webkit-flex:1;flex:1;min-width:0;flex-basis:1px}}@media (min-width:1600px){.uk-width-1-1\\@xl{width:100%}.uk-width-1-2\\@xl{width:50%}.uk-width-1-3\\@xl{width:calc(100% * 1 / 3.001)}.uk-width-2-3\\@xl{width:calc(100% * 2 / 3.001)}.uk-width-1-4\\@xl{width:25%}.uk-width-3-4\\@xl{width:75%}.uk-width-1-5\\@xl{width:20%}.uk-width-2-5\\@xl{width:40%}.uk-width-3-5\\@xl{width:60%}.uk-width-4-5\\@xl{width:80%}.uk-width-1-6\\@xl{width:calc(100% * 1 / 6.001)}.uk-width-5-6\\@xl{width:calc(100% * 5 / 6.001)}.uk-width-small\\@xl{width:150px}.uk-width-medium\\@xl{width:300px}.uk-width-large\\@xl{width:450px}.uk-width-xlarge\\@xl{width:600px}.uk-width-xxlarge\\@xl{width:750px}.uk-width-auto\\@xl{width:auto}.uk-width-expand\\@xl{width:1px;-ms-flex:1;-webkit-flex:1;flex:1;min-width:0;flex-basis:1px}}.uk-text-lead{font-size:1.5rem;line-height:1.5;color:#333}.uk-text-meta{font-size:.875rem;line-height:1.4;color:#999}.uk-text-meta a{color:#999}.uk-text-meta a:hover{color:#666;text-decoration:none}.uk-text-small{font-size:.875rem;line-height:1.5}.uk-text-large{font-size:1.5rem;line-height:1.5}.uk-text-bold{font-weight:bolder}.uk-text-uppercase{text-transform:uppercase!important}.uk-text-capitalize{text-transform:capitalize!important}.uk-text-lowercase{text-transform:lowercase!important}.uk-text-muted{color:#999!important}.uk-text-primary{color:#1e87f0!important}.uk-text-success{color:#32d296!important}.uk-text-warning{color:#faa05a!important}.uk-text-danger{color:#f0506e!important}.uk-text-background{-webkit-background-clip:text;-webkit-text-fill-color:transparent;display:inline-block;color:#1e87f0!important}@supports (-webkit-background-clip:text){.uk-text-background{background-color:#1e87f0}}.uk-text-left{text-align:left!important}.uk-text-right{text-align:right!important}.uk-text-center{text-align:center!important}.uk-text-justify{text-align:justify!important}@media (min-width:640px){.uk-text-left\\@s{text-align:left!important}.uk-text-right\\@s{text-align:right!important}.uk-text-center\\@s{text-align:center!important}}@media (min-width:960px){.uk-text-left\\@m{text-align:left!important}.uk-text-right\\@m{text-align:right!important}.uk-text-center\\@m{text-align:center!important}}@media (min-width:1200px){.uk-text-left\\@l{text-align:left!important}.uk-text-right\\@l{text-align:right!important}.uk-text-center\\@l{text-align:center!important}}@media (min-width:1600px){.uk-text-left\\@xl{text-align:left!important}.uk-text-right\\@xl{text-align:right!important}.uk-text-center\\@xl{text-align:center!important}}.uk-text-top{vertical-align:top!important}.uk-text-middle{vertical-align:middle!important}.uk-text-bottom{vertical-align:bottom!important}.uk-text-baseline{vertical-align:baseline!important}.uk-text-nowrap{white-space:nowrap}.uk-text-truncate{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}td.uk-text-truncate,th.uk-text-truncate{max-width:0}.uk-text-break{overflow-wrap:break-word;word-wrap:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;-moz-hyphens:auto;hyphens:auto}td.uk-text-break,th.uk-text-break{word-break:break-all}[class*=uk-column-]{-webkit-column-gap:30px;-moz-column-gap:30px;column-gap:30px}@media (min-width:1200px){[class*=uk-column-]{-webkit-column-gap:40px;-moz-column-gap:40px;column-gap:40px}}[class*=uk-column-] img{transform:translate3d(0,0,0)}.uk-column-divider{-webkit-column-rule:1px solid #e5e5e5;-moz-column-rule:1px solid #e5e5e5;column-rule:1px solid #e5e5e5;-webkit-column-gap:60px;-moz-column-gap:60px;column-gap:60px}@media (min-width:1200px){.uk-column-divider{-webkit-column-gap:80px;-moz-column-gap:80px;column-gap:80px}}.uk-column-1-2{-webkit-column-count:2;-moz-column-count:2;column-count:2}.uk-column-1-3{-webkit-column-count:3;-moz-column-count:3;column-count:3}.uk-column-1-4{-webkit-column-count:4;-moz-column-count:4;column-count:4}.uk-column-1-5{-webkit-column-count:5;-moz-column-count:5;column-count:5}.uk-column-1-6{-webkit-column-count:6;-moz-column-count:6;column-count:6}@media (min-width:640px){.uk-column-1-2\\@s{-webkit-column-count:2;-moz-column-count:2;column-count:2}.uk-column-1-3\\@s{-webkit-column-count:3;-moz-column-count:3;column-count:3}.uk-column-1-4\\@s{-webkit-column-count:4;-moz-column-count:4;column-count:4}.uk-column-1-5\\@s{-webkit-column-count:5;-moz-column-count:5;column-count:5}.uk-column-1-6\\@s{-webkit-column-count:6;-moz-column-count:6;column-count:6}}@media (min-width:960px){.uk-column-1-2\\@m{-webkit-column-count:2;-moz-column-count:2;column-count:2}.uk-column-1-3\\@m{-webkit-column-count:3;-moz-column-count:3;column-count:3}.uk-column-1-4\\@m{-webkit-column-count:4;-moz-column-count:4;column-count:4}.uk-column-1-5\\@m{-webkit-column-count:5;-moz-column-count:5;column-count:5}.uk-column-1-6\\@m{-webkit-column-count:6;-moz-column-count:6;column-count:6}}@media (min-width:1200px){.uk-column-1-2\\@l{-webkit-column-count:2;-moz-column-count:2;column-count:2}.uk-column-1-3\\@l{-webkit-column-count:3;-moz-column-count:3;column-count:3}.uk-column-1-4\\@l{-webkit-column-count:4;-moz-column-count:4;column-count:4}.uk-column-1-5\\@l{-webkit-column-count:5;-moz-column-count:5;column-count:5}.uk-column-1-6\\@l{-webkit-column-count:6;-moz-column-count:6;column-count:6}}@media (min-width:1600px){.uk-column-1-2\\@xl{-webkit-column-count:2;-moz-column-count:2;column-count:2}.uk-column-1-3\\@xl{-webkit-column-count:3;-moz-column-count:3;column-count:3}.uk-column-1-4\\@xl{-webkit-column-count:4;-moz-column-count:4;column-count:4}.uk-column-1-5\\@xl{-webkit-column-count:5;-moz-column-count:5;column-count:5}.uk-column-1-6\\@xl{-webkit-column-count:6;-moz-column-count:6;column-count:6}}.uk-column-span{-webkit-column-span:all;-moz-column-span:all;column-span:all}.uk-cover{max-width:none;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.uk-cover-container{overflow:hidden;position:relative}.uk-background-default{background-color:#fff}.uk-background-muted{background-color:#f8f8f8}.uk-background-primary{background-color:#1e87f0}.uk-background-secondary{background-color:#222}.uk-background-contain,.uk-background-cover{background-position:50% 50%;background-repeat:no-repeat}.uk-background-cover{background-size:cover}.uk-background-contain{background-size:contain}.uk-background-top-left{background-position:0 0}.uk-background-top-center{background-position:50% 0}.uk-background-top-right{background-position:100% 0}.uk-background-center-left{background-position:0 50%}.uk-background-center-center{background-position:50% 50%}.uk-background-center-right{background-position:100% 50%}.uk-background-bottom-left{background-position:0 100%}.uk-background-bottom-center{background-position:50% 100%}.uk-background-bottom-right{background-position:100% 100%}.uk-background-norepeat{background-repeat:no-repeat}.uk-background-fixed{background-attachment:fixed}@media (pointer:coarse){.uk-background-fixed{background-attachment:scroll}}@media (max-width:639px){.uk-background-image\\@s{background-image:none!important}}@media (max-width:959px){.uk-background-image\\@m{background-image:none!important}}@media (max-width:1199px){.uk-background-image\\@l{background-image:none!important}}@media (max-width:1599px){.uk-background-image\\@xl{background-image:none!important}}.uk-background-blend-multiply{background-blend-mode:multiply}.uk-background-blend-screen{background-blend-mode:screen}.uk-background-blend-overlay{background-blend-mode:overlay}.uk-background-blend-darken{background-blend-mode:darken}.uk-background-blend-lighten{background-blend-mode:lighten}.uk-background-blend-color-dodge{background-blend-mode:color-dodge}.uk-background-blend-color-burn{background-blend-mode:color-burn}.uk-background-blend-hard-light{background-blend-mode:hard-light}.uk-background-blend-soft-light{background-blend-mode:soft-light}.uk-background-blend-difference{background-blend-mode:difference}.uk-background-blend-exclusion{background-blend-mode:exclusion}.uk-background-blend-hue{background-blend-mode:hue}.uk-background-blend-saturation{background-blend-mode:saturation}.uk-background-blend-color{background-blend-mode:color}.uk-background-blend-luminosity{background-blend-mode:luminosity}[class*=uk-align]{display:block;margin-bottom:30px}*+[class*=uk-align]{margin-top:30px}.uk-align-center{margin-left:auto;margin-right:auto}.uk-align-left{margin-top:0;margin-right:30px;float:left}.uk-align-right{margin-top:0;margin-left:30px;float:right}@media (min-width:640px){.uk-align-left\\@s{margin-top:0;margin-right:30px;float:left}.uk-align-right\\@s{margin-top:0;margin-left:30px;float:right}}@media (min-width:960px){.uk-align-left\\@m{margin-top:0;margin-right:30px;float:left}.uk-align-right\\@m{margin-top:0;margin-left:30px;float:right}}@media (min-width:1200px){.uk-align-left\\@l{margin-top:0;float:left}.uk-align-right\\@l{margin-top:0;float:right}.uk-align-left,.uk-align-left\\@l,.uk-align-left\\@m,.uk-align-left\\@s{margin-right:40px}.uk-align-right,.uk-align-right\\@l,.uk-align-right\\@m,.uk-align-right\\@s{margin-left:40px}}@media (min-width:1600px){.uk-align-left\\@xl{margin-top:0;margin-right:40px;float:left}.uk-align-right\\@xl{margin-top:0;margin-left:40px;float:right}}.uk-panel{position:relative;box-sizing:border-box}.uk-panel::after,.uk-panel::before{content:\"\";display:table}.uk-panel::after{clear:both}.uk-panel>:last-child{margin-bottom:0}.uk-panel-scrollable{height:170px;padding:10px;border:1px solid #e5e5e5;overflow:auto;-webkit-overflow-scrolling:touch;resize:both}.uk-clearfix::before{content:\"\";display:table-cell}.uk-clearfix::after{content:\"\";display:table;clear:both}.uk-float-left{float:left}.uk-float-right{float:right}[class*=uk-float-]{max-width:100%}.uk-overflow-hidden{overflow:hidden}.uk-overflow-auto{overflow:auto;-webkit-overflow-scrolling:touch}.uk-overflow-auto>:last-child{margin-bottom:0}.uk-resize{resize:both}.uk-resize-vertical{resize:vertical}.uk-display-block{display:block!important}.uk-display-inline{display:inline!important}.uk-display-inline-block{display:inline-block!important}[class*=uk-inline]{display:inline-block;position:relative;max-width:100%;vertical-align:middle}.uk-inline-clip{overflow:hidden}[class*=uk-height]{box-sizing:border-box}.uk-height-1-1{height:100%}.uk-height-viewport{min-height:100vh}.uk-height-small{height:150px}.uk-height-medium{height:300px}.uk-height-large{height:450px}.uk-height-max-small{max-height:150px}.uk-height-max-medium{max-height:300px}.uk-height-max-large{max-height:450px}.uk-preserve-width,.uk-preserve-width audio,.uk-preserve-width canvas,.uk-preserve-width img,.uk-preserve-width svg,.uk-preserve-width video{max-width:none}.uk-responsive-height,.uk-responsive-width{box-sizing:border-box}.uk-responsive-width{max-width:100%!important;height:auto}.uk-responsive-height{max-height:100%;width:auto;max-width:none}.uk-border-circle{border-radius:50%}.uk-border-rounded{border-radius:5px}.uk-inline-clip[class*=uk-border-]{-webkit-transform:translateZ(0)}.uk-box-shadow-small{box-shadow:0 2px 8px rgba(0,0,0,.08)}.uk-box-shadow-medium{box-shadow:0 5px 15px rgba(0,0,0,.08)}.uk-box-shadow-large{box-shadow:0 14px 25px rgba(0,0,0,.16)}.uk-box-shadow-xlarge{box-shadow:0 28px 50px rgba(0,0,0,.16)}[class*=uk-box-shadow-hover]{-webkit-transition:box-shadow .1s ease-in-out;transition:box-shadow .1s ease-in-out}.uk-box-shadow-hover-small:hover{box-shadow:0 2px 8px rgba(0,0,0,.08)}.uk-box-shadow-hover-medium:hover{box-shadow:0 5px 15px rgba(0,0,0,.08)}.uk-box-shadow-hover-large:hover{box-shadow:0 14px 25px rgba(0,0,0,.16)}.uk-box-shadow-hover-xlarge:hover{box-shadow:0 28px 50px rgba(0,0,0,.16)}@supports (filter:blur(0)) or (-webkit-filter:blur(0)){.uk-box-shadow-bottom{display:inline-block;position:relative;max-width:100%;vertical-align:middle}.uk-box-shadow-bottom::before{content:'';position:absolute;bottom:-30px;left:0;right:0;height:30px;border-radius:100%;background:#444;-webkit-filter:blur(20px);filter:blur(20px)}.uk-box-shadow-bottom>*{position:relative}}.uk-dropcap::first-letter,.uk-dropcap>p:first-of-type::first-letter{display:block;margin-right:10px;float:left;font-size:4.5em;line-height:1;margin-bottom:-2px}.uk-leader{overflow:hidden}.uk-leader-fill::after{display:inline-block;margin-left:15px;width:0;content:attr(data-fill);white-space:nowrap}.uk-leader-fill.uk-leader-hide::after{display:none}.var-leader-fill:before{content:'.'}.uk-logo{font-size:1.5rem;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;color:#666;text-decoration:none}.uk-logo:focus,.uk-logo:hover{color:#666;outline:0;text-decoration:none}.uk-logo-inverse{display:none}.uk-svg,.uk-svg:not(.uk-preserve) [fill*='#']:not(.uk-preserve){fill:currentcolor}.uk-svg:not(.uk-preserve) [stroke*='#']:not(.uk-preserve){stroke:currentcolor}.uk-svg{transform:translate(0,0)}.uk-disabled{pointer-events:none}.uk-drag,.uk-drag *{cursor:move}.uk-drag iframe{pointer-events:none}.uk-dragover{box-shadow:0 0 20px rgba(100,100,100,.3)}.uk-blend-multiply{mix-blend-mode:multiply}.uk-blend-screen{mix-blend-mode:screen}.uk-blend-overlay{mix-blend-mode:overlay}.uk-blend-darken{mix-blend-mode:darken}.uk-blend-lighten{mix-blend-mode:lighten}.uk-blend-color-dodge{mix-blend-mode:color-dodge}.uk-blend-color-burn{mix-blend-mode:color-burn}.uk-blend-hard-light{mix-blend-mode:hard-light}.uk-blend-soft-light{mix-blend-mode:soft-light}.uk-blend-difference{mix-blend-mode:difference}.uk-blend-exclusion{mix-blend-mode:exclusion}.uk-blend-hue{mix-blend-mode:hue}.uk-blend-saturation{mix-blend-mode:saturation}.uk-blend-color{mix-blend-mode:color}.uk-blend-luminosity{mix-blend-mode:luminosity}.uk-transform-center{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.uk-transform-origin-top-left{-webkit-transform-origin:0 0;transform-origin:0 0}.uk-transform-origin-top-center{-webkit-transform-origin:50% 0;transform-origin:50% 0}.uk-transform-origin-top-right{-webkit-transform-origin:100% 0;transform-origin:100% 0}.uk-transform-origin-center-left{-webkit-transform-origin:0 50%;transform-origin:0 50%}.uk-transform-origin-center-right{-webkit-transform-origin:100% 50%;transform-origin:100% 50%}.uk-transform-origin-bottom-left{-webkit-transform-origin:0 100%;transform-origin:0 100%}.uk-transform-origin-bottom-center{-webkit-transform-origin:50% 100%;transform-origin:50% 100%}.uk-transform-origin-bottom-right{-webkit-transform-origin:100% 100%;transform-origin:100% 100%}.uk-flex{display:-ms-flexbox;display:-webkit-flex;display:flex}.uk-flex-inline{display:-ms-inline-flexbox;display:-webkit-inline-flex;display:inline-flex}.uk-flex-inline::after,.uk-flex-inline::before,.uk-flex::after,.uk-flex::before{display:none}.uk-flex-left{-ms-flex-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.uk-flex-center{-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center}.uk-flex-right{-ms-flex-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.uk-flex-between{-ms-flex-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.uk-flex-around{-ms-flex-pack:distribute;-webkit-justify-content:space-around;justify-content:space-around}@media (min-width:640px){.uk-flex-left\\@s{-ms-flex-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.uk-flex-center\\@s{-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center}.uk-flex-right\\@s{-ms-flex-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.uk-flex-between\\@s{-ms-flex-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.uk-flex-around\\@s{-ms-flex-pack:distribute;-webkit-justify-content:space-around;justify-content:space-around}}@media (min-width:960px){.uk-flex-left\\@m{-ms-flex-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.uk-flex-center\\@m{-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center}.uk-flex-right\\@m{-ms-flex-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.uk-flex-between\\@m{-ms-flex-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.uk-flex-around\\@m{-ms-flex-pack:distribute;-webkit-justify-content:space-around;justify-content:space-around}}@media (min-width:1200px){.uk-flex-left\\@l{-ms-flex-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.uk-flex-center\\@l{-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center}.uk-flex-right\\@l{-ms-flex-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.uk-flex-between\\@l{-ms-flex-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.uk-flex-around\\@l{-ms-flex-pack:distribute;-webkit-justify-content:space-around;justify-content:space-around}}@media (min-width:1600px){.uk-flex-left\\@xl{-ms-flex-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.uk-flex-center\\@xl{-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center}.uk-flex-right\\@xl{-ms-flex-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.uk-flex-between\\@xl{-ms-flex-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.uk-flex-around\\@xl{-ms-flex-pack:distribute;-webkit-justify-content:space-around;justify-content:space-around}}.uk-flex-stretch{-ms-flex-align:stretch;-webkit-align-items:stretch;align-items:stretch}.uk-flex-top{-ms-flex-align:start;-webkit-align-items:flex-start;align-items:flex-start}.uk-flex-middle{-ms-flex-align:center;-webkit-align-items:center;align-items:center}.uk-flex-bottom{-ms-flex-align:end;-webkit-align-items:flex-end;align-items:flex-end}.uk-flex-row{-ms-flex-direction:row;-webkit-flex-direction:row;flex-direction:row}.uk-flex-row-reverse{-ms-flex-direction:row-reverse;-webkit-flex-direction:row-reverse;flex-direction:row-reverse}.uk-flex-column{-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column}.uk-flex-column-reverse{-ms-flex-direction:column-reverse;-webkit-flex-direction:column-reverse;flex-direction:column-reverse}.uk-flex-nowrap{-ms-flex-wrap:nowrap;-webkit-flex-wrap:nowrap;flex-wrap:nowrap}.uk-flex-wrap{-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap}.uk-flex-wrap-reverse{-ms-flex-wrap:wrap-reverse;-webkit-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse}.uk-flex-wrap-stretch{-ms-flex-line-pack:stretch;-webkit-align-content:stretch;align-content:stretch}.uk-flex-wrap-top{-ms-flex-line-pack:start;-webkit-align-content:flex-start;align-content:flex-start}.uk-flex-wrap-middle{-ms-flex-line-pack:center;-webkit-align-content:center;align-content:center}.uk-flex-wrap-bottom{-ms-flex-line-pack:end;-webkit-align-content:flex-end;align-content:flex-end}.uk-flex-wrap-between{-ms-flex-line-pack:justify;-webkit-align-content:space-between;align-content:space-between}.uk-flex-wrap-around{-ms-flex-line-pack:distribute;-webkit-align-content:space-around;align-content:space-around}.uk-flex-first{-ms-flex-order:-1;-webkit-order:-1;order:-1}.uk-flex-last{-ms-flex-order:99;-webkit-order:99;order:99}@media (min-width:640px){.uk-flex-first\\@s{-ms-flex-order:-1;-webkit-order:-1;order:-1}.uk-flex-last\\@s{-ms-flex-order:99;-webkit-order:99;order:99}}@media (min-width:960px){.uk-flex-first\\@m{-ms-flex-order:-1;-webkit-order:-1;order:-1}.uk-flex-last\\@m{-ms-flex-order:99;-webkit-order:99;order:99}}@media (min-width:1200px){.uk-flex-first\\@l{-ms-flex-order:-1;-webkit-order:-1;order:-1}.uk-flex-last\\@l{-ms-flex-order:99;-webkit-order:99;order:99}}@media (min-width:1600px){.uk-flex-first\\@xl{-ms-flex-order:-1;-webkit-order:-1;order:-1}.uk-flex-last\\@xl{-ms-flex-order:99;-webkit-order:99;order:99}}.uk-flex-none{-ms-flex:none;-webkit-flex:none;flex:none}.uk-flex-auto{-ms-flex:auto;-webkit-flex:auto;flex:auto}.uk-flex-1{-ms-flex:1;-webkit-flex:1;flex:1}.uk-margin{margin-bottom:20px}*+.uk-margin{margin-top:20px!important}.uk-margin-top{margin-top:20px!important}.uk-margin-bottom{margin-bottom:20px!important}.uk-margin-left{margin-left:20px!important}.uk-margin-right{margin-right:20px!important}.uk-margin-small{margin-bottom:10px}*+.uk-margin-small{margin-top:10px!important}.uk-margin-small-top{margin-top:10px!important}.uk-margin-small-bottom{margin-bottom:10px!important}.uk-margin-small-left{margin-left:10px!important}.uk-margin-small-right{margin-right:10px!important}.uk-margin-medium{margin-bottom:40px}*+.uk-margin-medium{margin-top:40px!important}.uk-margin-medium-top{margin-top:40px!important}.uk-margin-medium-bottom{margin-bottom:40px!important}.uk-margin-medium-left{margin-left:40px!important}.uk-margin-medium-right{margin-right:40px!important}.uk-margin-large{margin-bottom:40px}*+.uk-margin-large{margin-top:40px!important}.uk-margin-large-top{margin-top:40px!important}.uk-margin-large-bottom{margin-bottom:40px!important}.uk-margin-large-left{margin-left:40px!important}.uk-margin-large-right{margin-right:40px!important}@media (min-width:1200px){.uk-margin-large{margin-bottom:70px}*+.uk-margin-large{margin-top:70px!important}.uk-margin-large-top{margin-top:70px!important}.uk-margin-large-bottom{margin-bottom:70px!important}.uk-margin-large-left{margin-left:70px!important}.uk-margin-large-right{margin-right:70px!important}}.uk-margin-xlarge{margin-bottom:70px}*+.uk-margin-xlarge{margin-top:70px!important}.uk-margin-xlarge-top{margin-top:70px!important}.uk-margin-xlarge-bottom{margin-bottom:70px!important}.uk-margin-xlarge-left{margin-left:70px!important}.uk-margin-xlarge-right{margin-right:70px!important}@media (min-width:1200px){.uk-margin-xlarge{margin-bottom:140px}*+.uk-margin-xlarge{margin-top:140px!important}.uk-margin-xlarge-top{margin-top:140px!important}.uk-margin-xlarge-bottom{margin-bottom:140px!important}.uk-margin-xlarge-left{margin-left:140px!important}.uk-margin-xlarge-right{margin-right:140px!important}}.uk-margin-remove{margin:0!important}.uk-margin-remove-top{margin-top:0!important}.uk-margin-remove-bottom{margin-bottom:0!important}.uk-margin-remove-left{margin-left:0!important}.uk-margin-remove-right{margin-right:0!important}.uk-margin-remove-vertical{margin-top:0!important;margin-bottom:0!important}.uk-margin-remove-adjacent+*{margin-top:0!important}.uk-margin-auto{margin-left:auto!important;margin-right:auto!important}.uk-margin-auto-top{margin-top:auto!important}.uk-margin-auto-bottom{margin-bottom:auto!important}.uk-margin-auto-left{margin-left:auto!important}.uk-margin-auto-right{margin-right:auto!important}.uk-margin-auto-vertical{margin-top:auto!important;margin-bottom:auto!important}.uk-padding{padding:30px}@media (min-width:1200px){.uk-padding{padding:40px}}.uk-padding-small{padding:15px}.uk-padding-large{padding:30px}@media (min-width:1200px){.uk-padding-large{padding:70px}}.uk-padding-xlarge{padding:30px}@media (min-width:960px){.uk-padding-xlarge{padding:70px}}@media (min-width:1200px){.uk-padding-xlarge{padding:140px}}.uk-padding-remove{padding:0!important}.uk-padding-remove-top{padding-top:0!important}.uk-padding-remove-bottom{padding-bottom:0!important}.uk-padding-remove-left{padding-left:0!important}.uk-padding-remove-right{padding-right:0!important}.uk-padding-remove-vertical{padding-top:0!important;padding-bottom:0!important}.uk-padding-remove-horizontal{padding-left:0!important;padding-right:0!important}[class*=uk-position-bottom],[class*=uk-position-center],[class*=uk-position-left],[class*=uk-position-right],[class*=uk-position-top]{position:absolute!important}.uk-position-top{top:0;left:0;right:0}.uk-position-bottom{bottom:0;left:0;right:0}.uk-position-left{top:0;bottom:0;left:0}.uk-position-right{top:0;bottom:0;right:0}.uk-position-top-left{top:0;left:0}.uk-position-top-right{top:0;right:0}.uk-position-bottom-left{bottom:0;left:0}.uk-position-bottom-right{bottom:0;right:0}.uk-position-center{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:table;width:-moz-max-content;max-width:100%}.uk-position-center-left,.uk-position-center-right{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.uk-position-center-left{left:0}.uk-position-center-right{right:0}.uk-position-bottom-center,.uk-position-top-center{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);display:table}.uk-position-top-center{top:0}.uk-position-bottom-center{bottom:0}.uk-position-cover{position:absolute;top:0;bottom:0;left:0;right:0}.uk-position-relative{position:relative!important}.uk-position-absolute{position:absolute!important}.uk-position-fixed{position:fixed!important}.uk-position-z-index{z-index:1}.uk-position-small{margin:15px}.uk-position-small.uk-position-center{-webkit-transform:translate(calc(-50% - 15px),calc(-50% - 15px));transform:translate(calc(-50% - 15px),calc(-50% - 15px))}.uk-position-small.uk-position-center-left,.uk-position-small.uk-position-center-right{-webkit-transform:translateY(calc(-50% - 15px));transform:translateY(calc(-50% - 15px))}.uk-position-small.uk-position-bottom-center,.uk-position-small.uk-position-top-center{-webkit-transform:translateX(calc(-50% - 15px));transform:translateX(calc(-50% - 15px))}.uk-position-medium{margin:30px}.uk-position-medium.uk-position-center{-webkit-transform:translate(calc(-50% - 30px),calc(-50% - 30px));transform:translate(calc(-50% - 30px),calc(-50% - 30px))}.uk-position-medium.uk-position-center-left,.uk-position-medium.uk-position-center-right{-webkit-transform:translateY(calc(-50% - 30px));transform:translateY(calc(-50% - 30px))}.uk-position-medium.uk-position-bottom-center,.uk-position-medium.uk-position-top-center{-webkit-transform:translateX(calc(-50% - 30px));transform:translateX(calc(-50% - 30px))}.uk-transition-fade,[class*=uk-transition-scale],[class*=uk-transition-slide]{-webkit-transition:.3s ease-out;transition:.3s ease-out;-webkit-transition-property:opacity,transform,filter;transition-property:opacity,transform,filter}.uk-transition-fade{opacity:0}.uk-transition-toggle.uk-hover [class*=uk-transition-fade],.uk-transition-toggle:hover [class*=uk-transition-fade]{opacity:1}[class*=uk-transition-scale]{opacity:0}.uk-transition-scale-up{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}.uk-transition-toggle.uk-hover .uk-transition-scale-up,.uk-transition-toggle:hover .uk-transition-scale-up{opacity:1;-webkit-transform:scale3d(1.1,1.1,1);transform:scale3d(1.1,1.1,1)}.uk-transition-scale-down{-webkit-transform:scale3d(1.1,1.1,1);transform:scale3d(1.1,1.1,1)}.uk-transition-toggle.uk-hover .uk-transition-scale-down,.uk-transition-toggle:hover .uk-transition-scale-down{opacity:1;-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}[class*=uk-transition-slide]{opacity:0}.uk-transition-slide-top{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.uk-transition-slide-bottom{-webkit-transform:translateY(100%);transform:translateY(100%)}.uk-transition-slide-left{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.uk-transition-slide-right{-webkit-transform:translateX(100%);transform:translateX(100%)}.uk-transition-slide-top-small{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.uk-transition-slide-bottom-small{-webkit-transform:translateY(10px);transform:translateY(10px)}.uk-transition-slide-left-small{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.uk-transition-slide-right-small{-webkit-transform:translateX(10px);transform:translateX(10px)}.uk-transition-slide-top-medium{-webkit-transform:translateY(-50px);transform:translateY(-50px)}.uk-transition-slide-bottom-medium{-webkit-transform:translateY(50px);transform:translateY(50px)}.uk-transition-slide-left-medium{-webkit-transform:translateX(-50px);transform:translateX(-50px)}.uk-transition-slide-right-medium{-webkit-transform:translateX(50px);transform:translateX(50px)}.uk-transition-toggle.uk-hover [class*=uk-transition-slide],.uk-transition-toggle:hover [class*=uk-transition-slide]{opacity:1;-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0)}.uk-transition-opaque{opacity:1}.uk-transition-slow{transition-duration:.7s}.uk-hidden,[hidden]{display:none!important}@media (min-width:640px){.uk-hidden\\@s{display:none!important}}@media (min-width:960px){.uk-hidden\\@m{display:none!important}}@media (min-width:1200px){.uk-hidden\\@l{display:none!important}}@media (min-width:1600px){.uk-hidden\\@xl{display:none!important}}@media (max-width:639px){.uk-visible\\@s{display:none!important}}@media (max-width:959px){.uk-visible\\@m{display:none!important}}@media (max-width:1199px){.uk-visible\\@l{display:none!important}}@media (max-width:1599px){.uk-visible\\@xl{display:none!important}}.uk-invisible{visibility:hidden!important}.uk-visible-toggle:not(:hover):not(.uk-hover) .uk-hidden-hover{display:none!important}.uk-visible-toggle:not(:hover):not(.uk-hover) .uk-invisible-hover{visibility:hidden!important}@media (pointer:coarse){.uk-hidden-touch{display:none!important}}.uk-hidden-notouch{display:none!important}@media (pointer:coarse){.uk-hidden-notouch{display:block!important}}.uk-card-primary.uk-card-body,.uk-card-primary>:not([class*=uk-card-media]),.uk-card-secondary.uk-card-body,.uk-card-secondary>:not([class*=uk-card-media]),.uk-light,.uk-offcanvas-bar,.uk-overlay-primary,.uk-section-primary:not(.uk-preserve-color),.uk-section-secondary:not(.uk-preserve-color),.uk-tile-primary:not(.uk-preserve-color),.uk-tile-secondary:not(.uk-preserve-color){color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-link,.uk-card-primary.uk-card-body a,.uk-card-primary>:not([class*=uk-card-media]) .uk-link,.uk-card-primary>:not([class*=uk-card-media]) a,.uk-card-secondary.uk-card-body .uk-link,.uk-card-secondary.uk-card-body a,.uk-card-secondary>:not([class*=uk-card-media]) .uk-link,.uk-card-secondary>:not([class*=uk-card-media]) a,.uk-light .uk-link,.uk-light a,.uk-offcanvas-bar .uk-link,.uk-offcanvas-bar a,.uk-overlay-primary .uk-link,.uk-overlay-primary a,.uk-section-primary:not(.uk-preserve-color) .uk-link,.uk-section-primary:not(.uk-preserve-color) a,.uk-section-secondary:not(.uk-preserve-color) .uk-link,.uk-section-secondary:not(.uk-preserve-color) a,.uk-tile-primary:not(.uk-preserve-color) .uk-link,.uk-tile-primary:not(.uk-preserve-color) a,.uk-tile-secondary:not(.uk-preserve-color) .uk-link,.uk-tile-secondary:not(.uk-preserve-color) a{color:#fff}.uk-card-primary.uk-card-body .uk-link:hover,.uk-card-primary.uk-card-body a:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-link:hover,.uk-card-primary>:not([class*=uk-card-media]) a:hover,.uk-card-secondary.uk-card-body .uk-link:hover,.uk-card-secondary.uk-card-body a:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-link:hover,.uk-card-secondary>:not([class*=uk-card-media]) a:hover,.uk-light .uk-link:hover,.uk-light a:hover,.uk-offcanvas-bar .uk-link:hover,.uk-offcanvas-bar a:hover,.uk-overlay-primary .uk-link:hover,.uk-overlay-primary a:hover,.uk-section-primary:not(.uk-preserve-color) .uk-link:hover,.uk-section-primary:not(.uk-preserve-color) a:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-link:hover,.uk-section-secondary:not(.uk-preserve-color) a:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-link:hover,.uk-tile-primary:not(.uk-preserve-color) a:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-link:hover,.uk-tile-secondary:not(.uk-preserve-color) a:hover{color:#fff}.uk-card-primary.uk-card-body :not(pre)>code,.uk-card-primary.uk-card-body :not(pre)>kbd,.uk-card-primary.uk-card-body :not(pre)>samp,.uk-card-primary>:not([class*=uk-card-media]) :not(pre)>code,.uk-card-primary>:not([class*=uk-card-media]) :not(pre)>kbd,.uk-card-primary>:not([class*=uk-card-media]) :not(pre)>samp,.uk-card-secondary.uk-card-body :not(pre)>code,.uk-card-secondary.uk-card-body :not(pre)>kbd,.uk-card-secondary.uk-card-body :not(pre)>samp,.uk-card-secondary>:not([class*=uk-card-media]) :not(pre)>code,.uk-card-secondary>:not([class*=uk-card-media]) :not(pre)>kbd,.uk-card-secondary>:not([class*=uk-card-media]) :not(pre)>samp,.uk-light :not(pre)>code,.uk-light :not(pre)>kbd,.uk-light :not(pre)>samp,.uk-offcanvas-bar :not(pre)>code,.uk-offcanvas-bar :not(pre)>kbd,.uk-offcanvas-bar :not(pre)>samp,.uk-overlay-primary :not(pre)>code,.uk-overlay-primary :not(pre)>kbd,.uk-overlay-primary :not(pre)>samp,.uk-section-primary:not(.uk-preserve-color) :not(pre)>code,.uk-section-primary:not(.uk-preserve-color) :not(pre)>kbd,.uk-section-primary:not(.uk-preserve-color) :not(pre)>samp,.uk-section-secondary:not(.uk-preserve-color) :not(pre)>code,.uk-section-secondary:not(.uk-preserve-color) :not(pre)>kbd,.uk-section-secondary:not(.uk-preserve-color) :not(pre)>samp,.uk-tile-primary:not(.uk-preserve-color) :not(pre)>code,.uk-tile-primary:not(.uk-preserve-color) :not(pre)>kbd,.uk-tile-primary:not(.uk-preserve-color) :not(pre)>samp,.uk-tile-secondary:not(.uk-preserve-color) :not(pre)>code,.uk-tile-secondary:not(.uk-preserve-color) :not(pre)>kbd,.uk-tile-secondary:not(.uk-preserve-color) :not(pre)>samp{color:rgba(255,255,255,.7);background:rgba(255,255,255,.1)}.uk-card-primary.uk-card-body em,.uk-card-primary>:not([class*=uk-card-media]) em,.uk-card-secondary.uk-card-body em,.uk-card-secondary>:not([class*=uk-card-media]) em,.uk-light em,.uk-offcanvas-bar em,.uk-overlay-primary em,.uk-section-primary:not(.uk-preserve-color) em,.uk-section-secondary:not(.uk-preserve-color) em,.uk-tile-primary:not(.uk-preserve-color) em,.uk-tile-secondary:not(.uk-preserve-color) em{color:#fff}.uk-card-primary.uk-card-body .uk-h1,.uk-card-primary.uk-card-body .uk-h2,.uk-card-primary.uk-card-body .uk-h3,.uk-card-primary.uk-card-body .uk-h4,.uk-card-primary.uk-card-body .uk-h5,.uk-card-primary.uk-card-body .uk-h6,.uk-card-primary.uk-card-body h1,.uk-card-primary.uk-card-body h2,.uk-card-primary.uk-card-body h3,.uk-card-primary.uk-card-body h4,.uk-card-primary.uk-card-body h5,.uk-card-primary.uk-card-body h6,.uk-card-primary>:not([class*=uk-card-media]) .uk-h1,.uk-card-primary>:not([class*=uk-card-media]) .uk-h2,.uk-card-primary>:not([class*=uk-card-media]) .uk-h3,.uk-card-primary>:not([class*=uk-card-media]) .uk-h4,.uk-card-primary>:not([class*=uk-card-media]) .uk-h5,.uk-card-primary>:not([class*=uk-card-media]) .uk-h6,.uk-card-primary>:not([class*=uk-card-media]) h1,.uk-card-primary>:not([class*=uk-card-media]) h2,.uk-card-primary>:not([class*=uk-card-media]) h3,.uk-card-primary>:not([class*=uk-card-media]) h4,.uk-card-primary>:not([class*=uk-card-media]) h5,.uk-card-primary>:not([class*=uk-card-media]) h6,.uk-card-secondary.uk-card-body .uk-h1,.uk-card-secondary.uk-card-body .uk-h2,.uk-card-secondary.uk-card-body .uk-h3,.uk-card-secondary.uk-card-body .uk-h4,.uk-card-secondary.uk-card-body .uk-h5,.uk-card-secondary.uk-card-body .uk-h6,.uk-card-secondary.uk-card-body h1,.uk-card-secondary.uk-card-body h2,.uk-card-secondary.uk-card-body h3,.uk-card-secondary.uk-card-body h4,.uk-card-secondary.uk-card-body h5,.uk-card-secondary.uk-card-body h6,.uk-card-secondary>:not([class*=uk-card-media]) .uk-h1,.uk-card-secondary>:not([class*=uk-card-media]) .uk-h2,.uk-card-secondary>:not([class*=uk-card-media]) .uk-h3,.uk-card-secondary>:not([class*=uk-card-media]) .uk-h4,.uk-card-secondary>:not([class*=uk-card-media]) .uk-h5,.uk-card-secondary>:not([class*=uk-card-media]) .uk-h6,.uk-card-secondary>:not([class*=uk-card-media]) h1,.uk-card-secondary>:not([class*=uk-card-media]) h2,.uk-card-secondary>:not([class*=uk-card-media]) h3,.uk-card-secondary>:not([class*=uk-card-media]) h4,.uk-card-secondary>:not([class*=uk-card-media]) h5,.uk-card-secondary>:not([class*=uk-card-media]) h6,.uk-light .uk-h1,.uk-light .uk-h2,.uk-light .uk-h3,.uk-light .uk-h4,.uk-light .uk-h5,.uk-light .uk-h6,.uk-light h1,.uk-light h2,.uk-light h3,.uk-light h4,.uk-light h5,.uk-light h6,.uk-offcanvas-bar .uk-h1,.uk-offcanvas-bar .uk-h2,.uk-offcanvas-bar .uk-h3,.uk-offcanvas-bar .uk-h4,.uk-offcanvas-bar .uk-h5,.uk-offcanvas-bar .uk-h6,.uk-offcanvas-bar h1,.uk-offcanvas-bar h2,.uk-offcanvas-bar h3,.uk-offcanvas-bar h4,.uk-offcanvas-bar h5,.uk-offcanvas-bar h6,.uk-overlay-primary .uk-h1,.uk-overlay-primary .uk-h2,.uk-overlay-primary .uk-h3,.uk-overlay-primary .uk-h4,.uk-overlay-primary .uk-h5,.uk-overlay-primary .uk-h6,.uk-overlay-primary h1,.uk-overlay-primary h2,.uk-overlay-primary h3,.uk-overlay-primary h4,.uk-overlay-primary h5,.uk-overlay-primary h6,.uk-section-primary:not(.uk-preserve-color) .uk-h1,.uk-section-primary:not(.uk-preserve-color) .uk-h2,.uk-section-primary:not(.uk-preserve-color) .uk-h3,.uk-section-primary:not(.uk-preserve-color) .uk-h4,.uk-section-primary:not(.uk-preserve-color) .uk-h5,.uk-section-primary:not(.uk-preserve-color) .uk-h6,.uk-section-primary:not(.uk-preserve-color) h1,.uk-section-primary:not(.uk-preserve-color) h2,.uk-section-primary:not(.uk-preserve-color) h3,.uk-section-primary:not(.uk-preserve-color) h4,.uk-section-primary:not(.uk-preserve-color) h5,.uk-section-primary:not(.uk-preserve-color) h6,.uk-section-secondary:not(.uk-preserve-color) .uk-h1,.uk-section-secondary:not(.uk-preserve-color) .uk-h2,.uk-section-secondary:not(.uk-preserve-color) .uk-h3,.uk-section-secondary:not(.uk-preserve-color) .uk-h4,.uk-section-secondary:not(.uk-preserve-color) .uk-h5,.uk-section-secondary:not(.uk-preserve-color) .uk-h6,.uk-section-secondary:not(.uk-preserve-color) h1,.uk-section-secondary:not(.uk-preserve-color) h2,.uk-section-secondary:not(.uk-preserve-color) h3,.uk-section-secondary:not(.uk-preserve-color) h4,.uk-section-secondary:not(.uk-preserve-color) h5,.uk-section-secondary:not(.uk-preserve-color) h6,.uk-tile-primary:not(.uk-preserve-color) .uk-h1,.uk-tile-primary:not(.uk-preserve-color) .uk-h2,.uk-tile-primary:not(.uk-preserve-color) .uk-h3,.uk-tile-primary:not(.uk-preserve-color) .uk-h4,.uk-tile-primary:not(.uk-preserve-color) .uk-h5,.uk-tile-primary:not(.uk-preserve-color) .uk-h6,.uk-tile-primary:not(.uk-preserve-color) h1,.uk-tile-primary:not(.uk-preserve-color) h2,.uk-tile-primary:not(.uk-preserve-color) h3,.uk-tile-primary:not(.uk-preserve-color) h4,.uk-tile-primary:not(.uk-preserve-color) h5,.uk-tile-primary:not(.uk-preserve-color) h6,.uk-tile-secondary:not(.uk-preserve-color) .uk-h1,.uk-tile-secondary:not(.uk-preserve-color) .uk-h2,.uk-tile-secondary:not(.uk-preserve-color) .uk-h3,.uk-tile-secondary:not(.uk-preserve-color) .uk-h4,.uk-tile-secondary:not(.uk-preserve-color) .uk-h5,.uk-tile-secondary:not(.uk-preserve-color) .uk-h6,.uk-tile-secondary:not(.uk-preserve-color) h1,.uk-tile-secondary:not(.uk-preserve-color) h2,.uk-tile-secondary:not(.uk-preserve-color) h3,.uk-tile-secondary:not(.uk-preserve-color) h4,.uk-tile-secondary:not(.uk-preserve-color) h5,.uk-tile-secondary:not(.uk-preserve-color) h6{color:#fff}.uk-card-primary.uk-card-body blockquote,.uk-card-primary>:not([class*=uk-card-media]) blockquote,.uk-card-secondary.uk-card-body blockquote,.uk-card-secondary>:not([class*=uk-card-media]) blockquote,.uk-light blockquote,.uk-offcanvas-bar blockquote,.uk-overlay-primary blockquote,.uk-section-primary:not(.uk-preserve-color) blockquote,.uk-section-secondary:not(.uk-preserve-color) blockquote,.uk-tile-primary:not(.uk-preserve-color) blockquote,.uk-tile-secondary:not(.uk-preserve-color) blockquote{color:#fff}.uk-card-primary.uk-card-body blockquote footer,.uk-card-primary>:not([class*=uk-card-media]) blockquote footer,.uk-card-secondary.uk-card-body blockquote footer,.uk-card-secondary>:not([class*=uk-card-media]) blockquote footer,.uk-light blockquote footer,.uk-offcanvas-bar blockquote footer,.uk-overlay-primary blockquote footer,.uk-section-primary:not(.uk-preserve-color) blockquote footer,.uk-section-secondary:not(.uk-preserve-color) blockquote footer,.uk-tile-primary:not(.uk-preserve-color) blockquote footer,.uk-tile-secondary:not(.uk-preserve-color) blockquote footer{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body hr,.uk-card-primary>:not([class*=uk-card-media]) hr,.uk-card-secondary.uk-card-body hr,.uk-card-secondary>:not([class*=uk-card-media]) hr,.uk-light hr,.uk-offcanvas-bar hr,.uk-overlay-primary hr,.uk-section-primary:not(.uk-preserve-color) hr,.uk-section-secondary:not(.uk-preserve-color) hr,.uk-tile-primary:not(.uk-preserve-color) hr,.uk-tile-secondary:not(.uk-preserve-color) hr{border-top-color:rgba(255,255,255,.2)}.uk-card-primary.uk-card-body .uk-link-muted a,.uk-card-primary.uk-card-body a.uk-link-muted,.uk-card-primary>:not([class*=uk-card-media]) .uk-link-muted a,.uk-card-primary>:not([class*=uk-card-media]) a.uk-link-muted,.uk-card-secondary.uk-card-body .uk-link-muted a,.uk-card-secondary.uk-card-body a.uk-link-muted,.uk-card-secondary>:not([class*=uk-card-media]) .uk-link-muted a,.uk-card-secondary>:not([class*=uk-card-media]) a.uk-link-muted,.uk-light .uk-link-muted a,.uk-light a.uk-link-muted,.uk-offcanvas-bar .uk-link-muted a,.uk-offcanvas-bar a.uk-link-muted,.uk-overlay-primary .uk-link-muted a,.uk-overlay-primary a.uk-link-muted,.uk-section-primary:not(.uk-preserve-color) .uk-link-muted a,.uk-section-primary:not(.uk-preserve-color) a.uk-link-muted,.uk-section-secondary:not(.uk-preserve-color) .uk-link-muted a,.uk-section-secondary:not(.uk-preserve-color) a.uk-link-muted,.uk-tile-primary:not(.uk-preserve-color) .uk-link-muted a,.uk-tile-primary:not(.uk-preserve-color) a.uk-link-muted,.uk-tile-secondary:not(.uk-preserve-color) .uk-link-muted a,.uk-tile-secondary:not(.uk-preserve-color) a.uk-link-muted{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-link-muted a:hover,.uk-card-primary.uk-card-body a.uk-link-muted:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-link-muted a:hover,.uk-card-primary>:not([class*=uk-card-media]) a.uk-link-muted:hover,.uk-card-secondary.uk-card-body .uk-link-muted a:hover,.uk-card-secondary.uk-card-body a.uk-link-muted:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-link-muted a:hover,.uk-card-secondary>:not([class*=uk-card-media]) a.uk-link-muted:hover,.uk-light .uk-link-muted a:hover,.uk-light a.uk-link-muted:hover,.uk-offcanvas-bar .uk-link-muted a:hover,.uk-offcanvas-bar a.uk-link-muted:hover,.uk-overlay-primary .uk-link-muted a:hover,.uk-overlay-primary a.uk-link-muted:hover,.uk-section-primary:not(.uk-preserve-color) .uk-link-muted a:hover,.uk-section-primary:not(.uk-preserve-color) a.uk-link-muted:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-link-muted a:hover,.uk-section-secondary:not(.uk-preserve-color) a.uk-link-muted:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-link-muted a:hover,.uk-tile-primary:not(.uk-preserve-color) a.uk-link-muted:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-link-muted a:hover,.uk-tile-secondary:not(.uk-preserve-color) a.uk-link-muted:hover{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-heading-divider,.uk-card-primary>:not([class*=uk-card-media]) .uk-heading-divider,.uk-card-secondary.uk-card-body .uk-heading-divider,.uk-card-secondary>:not([class*=uk-card-media]) .uk-heading-divider,.uk-light .uk-heading-divider,.uk-offcanvas-bar .uk-heading-divider,.uk-overlay-primary .uk-heading-divider,.uk-section-primary:not(.uk-preserve-color) .uk-heading-divider,.uk-section-secondary:not(.uk-preserve-color) .uk-heading-divider,.uk-tile-primary:not(.uk-preserve-color) .uk-heading-divider,.uk-tile-secondary:not(.uk-preserve-color) .uk-heading-divider{border-bottom-color:rgba(255,255,255,.2)}.uk-card-primary.uk-card-body .uk-heading-bullet::before,.uk-card-primary>:not([class*=uk-card-media]) .uk-heading-bullet::before,.uk-card-secondary.uk-card-body .uk-heading-bullet::before,.uk-card-secondary>:not([class*=uk-card-media]) .uk-heading-bullet::before,.uk-light .uk-heading-bullet::before,.uk-offcanvas-bar .uk-heading-bullet::before,.uk-overlay-primary .uk-heading-bullet::before,.uk-section-primary:not(.uk-preserve-color) .uk-heading-bullet::before,.uk-section-secondary:not(.uk-preserve-color) .uk-heading-bullet::before,.uk-tile-primary:not(.uk-preserve-color) .uk-heading-bullet::before,.uk-tile-secondary:not(.uk-preserve-color) .uk-heading-bullet::before{border-left-color:rgba(255,255,255,.2)}.uk-card-primary.uk-card-body .uk-heading-line>:after,.uk-card-primary.uk-card-body .uk-heading-line>:before,.uk-card-primary>:not([class*=uk-card-media]) .uk-heading-line>:after,.uk-card-primary>:not([class*=uk-card-media]) .uk-heading-line>:before,.uk-card-secondary.uk-card-body .uk-heading-line>:after,.uk-card-secondary.uk-card-body .uk-heading-line>:before,.uk-card-secondary>:not([class*=uk-card-media]) .uk-heading-line>:after,.uk-card-secondary>:not([class*=uk-card-media]) .uk-heading-line>:before,.uk-light .uk-heading-line>:after,.uk-light .uk-heading-line>:before,.uk-offcanvas-bar .uk-heading-line>:after,.uk-offcanvas-bar .uk-heading-line>:before,.uk-overlay-primary .uk-heading-line>:after,.uk-overlay-primary .uk-heading-line>:before,.uk-section-primary:not(.uk-preserve-color) .uk-heading-line>:after,.uk-section-primary:not(.uk-preserve-color) .uk-heading-line>:before,.uk-section-secondary:not(.uk-preserve-color) .uk-heading-line>:after,.uk-section-secondary:not(.uk-preserve-color) .uk-heading-line>:before,.uk-tile-primary:not(.uk-preserve-color) .uk-heading-line>:after,.uk-tile-primary:not(.uk-preserve-color) .uk-heading-line>:before,.uk-tile-secondary:not(.uk-preserve-color) .uk-heading-line>:after,.uk-tile-secondary:not(.uk-preserve-color) .uk-heading-line>:before{border-bottom-color:rgba(255,255,255,.2)}.uk-card-primary.uk-card-body .uk-divider-icon,.uk-card-primary>:not([class*=uk-card-media]) .uk-divider-icon,.uk-card-secondary.uk-card-body .uk-divider-icon,.uk-card-secondary>:not([class*=uk-card-media]) .uk-divider-icon,.uk-light .uk-divider-icon,.uk-offcanvas-bar .uk-divider-icon,.uk-overlay-primary .uk-divider-icon,.uk-section-primary:not(.uk-preserve-color) .uk-divider-icon,.uk-section-secondary:not(.uk-preserve-color) .uk-divider-icon,.uk-tile-primary:not(.uk-preserve-color) .uk-divider-icon,.uk-tile-secondary:not(.uk-preserve-color) .uk-divider-icon{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22none%22%20stroke%3D%22rgba%28255,%20255,%20255,%200.2%29%22%20stroke-width%3D%222%22%20cx%3D%2210%22%20cy%3D%2210%22%20r%3D%227%22%3E%3C%2Fcircle%3E%0A%3C%2Fsvg%3E%0A\")}.uk-card-primary.uk-card-body .uk-divider-icon::after,.uk-card-primary.uk-card-body .uk-divider-icon::before,.uk-card-primary>:not([class*=uk-card-media]) .uk-divider-icon::after,.uk-card-primary>:not([class*=uk-card-media]) .uk-divider-icon::before,.uk-card-secondary.uk-card-body .uk-divider-icon::after,.uk-card-secondary.uk-card-body .uk-divider-icon::before,.uk-card-secondary>:not([class*=uk-card-media]) .uk-divider-icon::after,.uk-card-secondary>:not([class*=uk-card-media]) .uk-divider-icon::before,.uk-light .uk-divider-icon::after,.uk-light .uk-divider-icon::before,.uk-offcanvas-bar .uk-divider-icon::after,.uk-offcanvas-bar .uk-divider-icon::before,.uk-overlay-primary .uk-divider-icon::after,.uk-overlay-primary .uk-divider-icon::before,.uk-section-primary:not(.uk-preserve-color) .uk-divider-icon::after,.uk-section-primary:not(.uk-preserve-color) .uk-divider-icon::before,.uk-section-secondary:not(.uk-preserve-color) .uk-divider-icon::after,.uk-section-secondary:not(.uk-preserve-color) .uk-divider-icon::before,.uk-tile-primary:not(.uk-preserve-color) .uk-divider-icon::after,.uk-tile-primary:not(.uk-preserve-color) .uk-divider-icon::before,.uk-tile-secondary:not(.uk-preserve-color) .uk-divider-icon::after,.uk-tile-secondary:not(.uk-preserve-color) .uk-divider-icon::before{border-bottom-color:rgba(255,255,255,.2)}.uk-card-primary.uk-card-body .uk-divider-small::after,.uk-card-primary>:not([class*=uk-card-media]) .uk-divider-small::after,.uk-card-secondary.uk-card-body .uk-divider-small::after,.uk-card-secondary>:not([class*=uk-card-media]) .uk-divider-small::after,.uk-light .uk-divider-small::after,.uk-offcanvas-bar .uk-divider-small::after,.uk-overlay-primary .uk-divider-small::after,.uk-section-primary:not(.uk-preserve-color) .uk-divider-small::after,.uk-section-secondary:not(.uk-preserve-color) .uk-divider-small::after,.uk-tile-primary:not(.uk-preserve-color) .uk-divider-small::after,.uk-tile-secondary:not(.uk-preserve-color) .uk-divider-small::after{border-top-color:rgba(255,255,255,.2)}.uk-card-primary.uk-card-body .uk-list-divider>li:nth-child(n+2),.uk-card-primary>:not([class*=uk-card-media]) .uk-list-divider>li:nth-child(n+2),.uk-card-secondary.uk-card-body .uk-list-divider>li:nth-child(n+2),.uk-card-secondary>:not([class*=uk-card-media]) .uk-list-divider>li:nth-child(n+2),.uk-light .uk-list-divider>li:nth-child(n+2),.uk-offcanvas-bar .uk-list-divider>li:nth-child(n+2),.uk-overlay-primary .uk-list-divider>li:nth-child(n+2),.uk-section-primary:not(.uk-preserve-color) .uk-list-divider>li:nth-child(n+2),.uk-section-secondary:not(.uk-preserve-color) .uk-list-divider>li:nth-child(n+2),.uk-tile-primary:not(.uk-preserve-color) .uk-list-divider>li:nth-child(n+2),.uk-tile-secondary:not(.uk-preserve-color) .uk-list-divider>li:nth-child(n+2){border-top-color:rgba(255,255,255,.2)}.uk-card-primary.uk-card-body .uk-list-striped>li:nth-of-type(odd),.uk-card-primary>:not([class*=uk-card-media]) .uk-list-striped>li:nth-of-type(odd),.uk-card-secondary.uk-card-body .uk-list-striped>li:nth-of-type(odd),.uk-card-secondary>:not([class*=uk-card-media]) .uk-list-striped>li:nth-of-type(odd),.uk-light .uk-list-striped>li:nth-of-type(odd),.uk-offcanvas-bar .uk-list-striped>li:nth-of-type(odd),.uk-overlay-primary .uk-list-striped>li:nth-of-type(odd),.uk-section-primary:not(.uk-preserve-color) .uk-list-striped>li:nth-of-type(odd),.uk-section-secondary:not(.uk-preserve-color) .uk-list-striped>li:nth-of-type(odd),.uk-tile-primary:not(.uk-preserve-color) .uk-list-striped>li:nth-of-type(odd),.uk-tile-secondary:not(.uk-preserve-color) .uk-list-striped>li:nth-of-type(odd){border-top-color:rgba(255,255,255,.2);border-bottom-color:rgba(255,255,255,.2)}.uk-card-primary.uk-card-body .uk-list-striped>li:nth-of-type(odd),.uk-card-primary>:not([class*=uk-card-media]) .uk-list-striped>li:nth-of-type(odd),.uk-card-secondary.uk-card-body .uk-list-striped>li:nth-of-type(odd),.uk-card-secondary>:not([class*=uk-card-media]) .uk-list-striped>li:nth-of-type(odd),.uk-light .uk-list-striped>li:nth-of-type(odd),.uk-offcanvas-bar .uk-list-striped>li:nth-of-type(odd),.uk-overlay-primary .uk-list-striped>li:nth-of-type(odd),.uk-section-primary:not(.uk-preserve-color) .uk-list-striped>li:nth-of-type(odd),.uk-section-secondary:not(.uk-preserve-color) .uk-list-striped>li:nth-of-type(odd),.uk-tile-primary:not(.uk-preserve-color) .uk-list-striped>li:nth-of-type(odd),.uk-tile-secondary:not(.uk-preserve-color) .uk-list-striped>li:nth-of-type(odd){background-color:rgba(255,255,255,.1)}.uk-card-primary.uk-card-body .uk-list-bullet>li::before,.uk-card-primary>:not([class*=uk-card-media]) .uk-list-bullet>li::before,.uk-card-secondary.uk-card-body .uk-list-bullet>li::before,.uk-card-secondary>:not([class*=uk-card-media]) .uk-list-bullet>li::before,.uk-light .uk-list-bullet>li::before,.uk-offcanvas-bar .uk-list-bullet>li::before,.uk-overlay-primary .uk-list-bullet>li::before,.uk-section-primary:not(.uk-preserve-color) .uk-list-bullet>li::before,.uk-section-secondary:not(.uk-preserve-color) .uk-list-bullet>li::before,.uk-tile-primary:not(.uk-preserve-color) .uk-list-bullet>li::before,.uk-tile-secondary:not(.uk-preserve-color) .uk-list-bullet>li::before{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%226%22%20height%3D%226%22%20viewBox%3D%220%200%206%206%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22rgba%28255,%20255,%20255,%200.7%29%22%20cx%3D%223%22%20cy%3D%223%22%20r%3D%223%22%3E%3C%2Fcircle%3E%0A%3C%2Fsvg%3E\")}.uk-card-primary.uk-card-body .uk-table th,.uk-card-primary>:not([class*=uk-card-media]) .uk-table th,.uk-card-secondary.uk-card-body .uk-table th,.uk-card-secondary>:not([class*=uk-card-media]) .uk-table th,.uk-light .uk-table th,.uk-offcanvas-bar .uk-table th,.uk-overlay-primary .uk-table th,.uk-section-primary:not(.uk-preserve-color) .uk-table th,.uk-section-secondary:not(.uk-preserve-color) .uk-table th,.uk-tile-primary:not(.uk-preserve-color) .uk-table th,.uk-tile-secondary:not(.uk-preserve-color) .uk-table th{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-table caption,.uk-card-primary>:not([class*=uk-card-media]) .uk-table caption,.uk-card-secondary.uk-card-body .uk-table caption,.uk-card-secondary>:not([class*=uk-card-media]) .uk-table caption,.uk-light .uk-table caption,.uk-offcanvas-bar .uk-table caption,.uk-overlay-primary .uk-table caption,.uk-section-primary:not(.uk-preserve-color) .uk-table caption,.uk-section-secondary:not(.uk-preserve-color) .uk-table caption,.uk-tile-primary:not(.uk-preserve-color) .uk-table caption,.uk-tile-secondary:not(.uk-preserve-color) .uk-table caption{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-table tbody tr.uk-active,.uk-card-primary.uk-card-body .uk-table>tr.uk-active,.uk-card-primary>:not([class*=uk-card-media]) .uk-table tbody tr.uk-active,.uk-card-primary>:not([class*=uk-card-media]) .uk-table>tr.uk-active,.uk-card-secondary.uk-card-body .uk-table tbody tr.uk-active,.uk-card-secondary.uk-card-body .uk-table>tr.uk-active,.uk-card-secondary>:not([class*=uk-card-media]) .uk-table tbody tr.uk-active,.uk-card-secondary>:not([class*=uk-card-media]) .uk-table>tr.uk-active,.uk-light .uk-table tbody tr.uk-active,.uk-light .uk-table>tr.uk-active,.uk-offcanvas-bar .uk-table tbody tr.uk-active,.uk-offcanvas-bar .uk-table>tr.uk-active,.uk-overlay-primary .uk-table tbody tr.uk-active,.uk-overlay-primary .uk-table>tr.uk-active,.uk-section-primary:not(.uk-preserve-color) .uk-table tbody tr.uk-active,.uk-section-primary:not(.uk-preserve-color) .uk-table>tr.uk-active,.uk-section-secondary:not(.uk-preserve-color) .uk-table tbody tr.uk-active,.uk-section-secondary:not(.uk-preserve-color) .uk-table>tr.uk-active,.uk-tile-primary:not(.uk-preserve-color) .uk-table tbody tr.uk-active,.uk-tile-primary:not(.uk-preserve-color) .uk-table>tr.uk-active,.uk-tile-secondary:not(.uk-preserve-color) .uk-table tbody tr.uk-active,.uk-tile-secondary:not(.uk-preserve-color) .uk-table>tr.uk-active{background:rgba(255,255,255,.08)}.uk-card-primary.uk-card-body .uk-table-divider>:first-child>tr:not(:first-child),.uk-card-primary.uk-card-body .uk-table-divider>:not(:first-child)>tr,.uk-card-primary.uk-card-body .uk-table-divider>tr:not(:first-child),.uk-card-primary>:not([class*=uk-card-media]) .uk-table-divider>:first-child>tr:not(:first-child),.uk-card-primary>:not([class*=uk-card-media]) .uk-table-divider>:not(:first-child)>tr,.uk-card-primary>:not([class*=uk-card-media]) .uk-table-divider>tr:not(:first-child),.uk-card-secondary.uk-card-body .uk-table-divider>:first-child>tr:not(:first-child),.uk-card-secondary.uk-card-body .uk-table-divider>:not(:first-child)>tr,.uk-card-secondary.uk-card-body .uk-table-divider>tr:not(:first-child),.uk-card-secondary>:not([class*=uk-card-media]) .uk-table-divider>:first-child>tr:not(:first-child),.uk-card-secondary>:not([class*=uk-card-media]) .uk-table-divider>:not(:first-child)>tr,.uk-card-secondary>:not([class*=uk-card-media]) .uk-table-divider>tr:not(:first-child),.uk-light .uk-table-divider>:first-child>tr:not(:first-child),.uk-light .uk-table-divider>:not(:first-child)>tr,.uk-light .uk-table-divider>tr:not(:first-child),.uk-offcanvas-bar .uk-table-divider>:first-child>tr:not(:first-child),.uk-offcanvas-bar .uk-table-divider>:not(:first-child)>tr,.uk-offcanvas-bar .uk-table-divider>tr:not(:first-child),.uk-overlay-primary .uk-table-divider>:first-child>tr:not(:first-child),.uk-overlay-primary .uk-table-divider>:not(:first-child)>tr,.uk-overlay-primary .uk-table-divider>tr:not(:first-child),.uk-section-primary:not(.uk-preserve-color) .uk-table-divider>:first-child>tr:not(:first-child),.uk-section-primary:not(.uk-preserve-color) .uk-table-divider>:not(:first-child)>tr,.uk-section-primary:not(.uk-preserve-color) .uk-table-divider>tr:not(:first-child),.uk-section-secondary:not(.uk-preserve-color) .uk-table-divider>:first-child>tr:not(:first-child),.uk-section-secondary:not(.uk-preserve-color) .uk-table-divider>:not(:first-child)>tr,.uk-section-secondary:not(.uk-preserve-color) .uk-table-divider>tr:not(:first-child),.uk-tile-primary:not(.uk-preserve-color) .uk-table-divider>:first-child>tr:not(:first-child),.uk-tile-primary:not(.uk-preserve-color) .uk-table-divider>:not(:first-child)>tr,.uk-tile-primary:not(.uk-preserve-color) .uk-table-divider>tr:not(:first-child),.uk-tile-secondary:not(.uk-preserve-color) .uk-table-divider>:first-child>tr:not(:first-child),.uk-tile-secondary:not(.uk-preserve-color) .uk-table-divider>:not(:first-child)>tr,.uk-tile-secondary:not(.uk-preserve-color) .uk-table-divider>tr:not(:first-child){border-top-color:rgba(255,255,255,.2)}.uk-card-primary.uk-card-body .uk-table-striped tbody tr:nth-of-type(odd),.uk-card-primary.uk-card-body .uk-table-striped>tr:nth-of-type(odd),.uk-card-primary>:not([class*=uk-card-media]) .uk-table-striped tbody tr:nth-of-type(odd),.uk-card-primary>:not([class*=uk-card-media]) .uk-table-striped>tr:nth-of-type(odd),.uk-card-secondary.uk-card-body .uk-table-striped tbody tr:nth-of-type(odd),.uk-card-secondary.uk-card-body .uk-table-striped>tr:nth-of-type(odd),.uk-card-secondary>:not([class*=uk-card-media]) .uk-table-striped tbody tr:nth-of-type(odd),.uk-card-secondary>:not([class*=uk-card-media]) .uk-table-striped>tr:nth-of-type(odd),.uk-light .uk-table-striped tbody tr:nth-of-type(odd),.uk-light .uk-table-striped>tr:nth-of-type(odd),.uk-offcanvas-bar .uk-table-striped tbody tr:nth-of-type(odd),.uk-offcanvas-bar .uk-table-striped>tr:nth-of-type(odd),.uk-overlay-primary .uk-table-striped tbody tr:nth-of-type(odd),.uk-overlay-primary .uk-table-striped>tr:nth-of-type(odd),.uk-section-primary:not(.uk-preserve-color) .uk-table-striped tbody tr:nth-of-type(odd),.uk-section-primary:not(.uk-preserve-color) .uk-table-striped>tr:nth-of-type(odd),.uk-section-secondary:not(.uk-preserve-color) .uk-table-striped tbody tr:nth-of-type(odd),.uk-section-secondary:not(.uk-preserve-color) .uk-table-striped>tr:nth-of-type(odd),.uk-tile-primary:not(.uk-preserve-color) .uk-table-striped tbody tr:nth-of-type(odd),.uk-tile-primary:not(.uk-preserve-color) .uk-table-striped>tr:nth-of-type(odd),.uk-tile-secondary:not(.uk-preserve-color) .uk-table-striped tbody tr:nth-of-type(odd),.uk-tile-secondary:not(.uk-preserve-color) .uk-table-striped>tr:nth-of-type(odd){background:rgba(255,255,255,.1);border-top-color:rgba(255,255,255,.2);border-bottom-color:rgba(255,255,255,.2)}.uk-card-primary.uk-card-body .uk-table-hover tbody tr:hover,.uk-card-primary.uk-card-body .uk-table-hover>tr:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-table-hover tbody tr:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-table-hover>tr:hover,.uk-card-secondary.uk-card-body .uk-table-hover tbody tr:hover,.uk-card-secondary.uk-card-body .uk-table-hover>tr:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-table-hover tbody tr:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-table-hover>tr:hover,.uk-light .uk-table-hover tbody tr:hover,.uk-light .uk-table-hover>tr:hover,.uk-offcanvas-bar .uk-table-hover tbody tr:hover,.uk-offcanvas-bar .uk-table-hover>tr:hover,.uk-overlay-primary .uk-table-hover tbody tr:hover,.uk-overlay-primary .uk-table-hover>tr:hover,.uk-section-primary:not(.uk-preserve-color) .uk-table-hover tbody tr:hover,.uk-section-primary:not(.uk-preserve-color) .uk-table-hover>tr:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-table-hover tbody tr:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-table-hover>tr:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-table-hover tbody tr:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-table-hover>tr:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-table-hover tbody tr:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-table-hover>tr:hover{background:rgba(255,255,255,.08)}.uk-card-primary.uk-card-body .uk-icon-link,.uk-card-primary>:not([class*=uk-card-media]) .uk-icon-link,.uk-card-secondary.uk-card-body .uk-icon-link,.uk-card-secondary>:not([class*=uk-card-media]) .uk-icon-link,.uk-light .uk-icon-link,.uk-offcanvas-bar .uk-icon-link,.uk-overlay-primary .uk-icon-link,.uk-section-primary:not(.uk-preserve-color) .uk-icon-link,.uk-section-secondary:not(.uk-preserve-color) .uk-icon-link,.uk-tile-primary:not(.uk-preserve-color) .uk-icon-link,.uk-tile-secondary:not(.uk-preserve-color) .uk-icon-link{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-icon-link:focus,.uk-card-primary.uk-card-body .uk-icon-link:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-icon-link:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-icon-link:hover,.uk-card-secondary.uk-card-body .uk-icon-link:focus,.uk-card-secondary.uk-card-body .uk-icon-link:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-icon-link:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-icon-link:hover,.uk-light .uk-icon-link:focus,.uk-light .uk-icon-link:hover,.uk-offcanvas-bar .uk-icon-link:focus,.uk-offcanvas-bar .uk-icon-link:hover,.uk-overlay-primary .uk-icon-link:focus,.uk-overlay-primary .uk-icon-link:hover,.uk-section-primary:not(.uk-preserve-color) .uk-icon-link:focus,.uk-section-primary:not(.uk-preserve-color) .uk-icon-link:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-icon-link:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-icon-link:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-icon-link:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-icon-link:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-icon-link:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-icon-link:hover{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-active>.uk-icon-link,.uk-card-primary.uk-card-body .uk-icon-link:active,.uk-card-primary>:not([class*=uk-card-media]) .uk-active>.uk-icon-link,.uk-card-primary>:not([class*=uk-card-media]) .uk-icon-link:active,.uk-card-secondary.uk-card-body .uk-active>.uk-icon-link,.uk-card-secondary.uk-card-body .uk-icon-link:active,.uk-card-secondary>:not([class*=uk-card-media]) .uk-active>.uk-icon-link,.uk-card-secondary>:not([class*=uk-card-media]) .uk-icon-link:active,.uk-light .uk-active>.uk-icon-link,.uk-light .uk-icon-link:active,.uk-offcanvas-bar .uk-active>.uk-icon-link,.uk-offcanvas-bar .uk-icon-link:active,.uk-overlay-primary .uk-active>.uk-icon-link,.uk-overlay-primary .uk-icon-link:active,.uk-section-primary:not(.uk-preserve-color) .uk-active>.uk-icon-link,.uk-section-primary:not(.uk-preserve-color) .uk-icon-link:active,.uk-section-secondary:not(.uk-preserve-color) .uk-active>.uk-icon-link,.uk-section-secondary:not(.uk-preserve-color) .uk-icon-link:active,.uk-tile-primary:not(.uk-preserve-color) .uk-active>.uk-icon-link,.uk-tile-primary:not(.uk-preserve-color) .uk-icon-link:active,.uk-tile-secondary:not(.uk-preserve-color) .uk-active>.uk-icon-link,.uk-tile-secondary:not(.uk-preserve-color) .uk-icon-link:active{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-icon-button,.uk-card-primary>:not([class*=uk-card-media]) .uk-icon-button,.uk-card-secondary.uk-card-body .uk-icon-button,.uk-card-secondary>:not([class*=uk-card-media]) .uk-icon-button,.uk-light .uk-icon-button,.uk-offcanvas-bar .uk-icon-button,.uk-overlay-primary .uk-icon-button,.uk-section-primary:not(.uk-preserve-color) .uk-icon-button,.uk-section-secondary:not(.uk-preserve-color) .uk-icon-button,.uk-tile-primary:not(.uk-preserve-color) .uk-icon-button,.uk-tile-secondary:not(.uk-preserve-color) .uk-icon-button{background-color:rgba(255,255,255,.1);color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-icon-button:focus,.uk-card-primary.uk-card-body .uk-icon-button:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-icon-button:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-icon-button:hover,.uk-card-secondary.uk-card-body .uk-icon-button:focus,.uk-card-secondary.uk-card-body .uk-icon-button:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-icon-button:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-icon-button:hover,.uk-light .uk-icon-button:focus,.uk-light .uk-icon-button:hover,.uk-offcanvas-bar .uk-icon-button:focus,.uk-offcanvas-bar .uk-icon-button:hover,.uk-overlay-primary .uk-icon-button:focus,.uk-overlay-primary .uk-icon-button:hover,.uk-section-primary:not(.uk-preserve-color) .uk-icon-button:focus,.uk-section-primary:not(.uk-preserve-color) .uk-icon-button:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-icon-button:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-icon-button:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-icon-button:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-icon-button:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-icon-button:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-icon-button:hover{background-color:rgba(242,242,242,.1);color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-icon-button:active,.uk-card-primary>:not([class*=uk-card-media]) .uk-icon-button:active,.uk-card-secondary.uk-card-body .uk-icon-button:active,.uk-card-secondary>:not([class*=uk-card-media]) .uk-icon-button:active,.uk-light .uk-icon-button:active,.uk-offcanvas-bar .uk-icon-button:active,.uk-overlay-primary .uk-icon-button:active,.uk-section-primary:not(.uk-preserve-color) .uk-icon-button:active,.uk-section-secondary:not(.uk-preserve-color) .uk-icon-button:active,.uk-tile-primary:not(.uk-preserve-color) .uk-icon-button:active,.uk-tile-secondary:not(.uk-preserve-color) .uk-icon-button:active{background-color:rgba(230,230,230,.1);color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-input,.uk-card-primary.uk-card-body .uk-select,.uk-card-primary.uk-card-body .uk-textarea,.uk-card-primary>:not([class*=uk-card-media]) .uk-input,.uk-card-primary>:not([class*=uk-card-media]) .uk-select,.uk-card-primary>:not([class*=uk-card-media]) .uk-textarea,.uk-card-secondary.uk-card-body .uk-input,.uk-card-secondary.uk-card-body .uk-select,.uk-card-secondary.uk-card-body .uk-textarea,.uk-card-secondary>:not([class*=uk-card-media]) .uk-input,.uk-card-secondary>:not([class*=uk-card-media]) .uk-select,.uk-card-secondary>:not([class*=uk-card-media]) .uk-textarea,.uk-light .uk-input,.uk-light .uk-select,.uk-light .uk-textarea,.uk-offcanvas-bar .uk-input,.uk-offcanvas-bar .uk-select,.uk-offcanvas-bar .uk-textarea,.uk-overlay-primary .uk-input,.uk-overlay-primary .uk-select,.uk-overlay-primary .uk-textarea,.uk-section-primary:not(.uk-preserve-color) .uk-input,.uk-section-primary:not(.uk-preserve-color) .uk-select,.uk-section-primary:not(.uk-preserve-color) .uk-textarea,.uk-section-secondary:not(.uk-preserve-color) .uk-input,.uk-section-secondary:not(.uk-preserve-color) .uk-select,.uk-section-secondary:not(.uk-preserve-color) .uk-textarea,.uk-tile-primary:not(.uk-preserve-color) .uk-input,.uk-tile-primary:not(.uk-preserve-color) .uk-select,.uk-tile-primary:not(.uk-preserve-color) .uk-textarea,.uk-tile-secondary:not(.uk-preserve-color) .uk-input,.uk-tile-secondary:not(.uk-preserve-color) .uk-select,.uk-tile-secondary:not(.uk-preserve-color) .uk-textarea{background-color:rgba(255,255,255,.1);color:rgba(255,255,255,.7);background-clip:padding-box;border-color:rgba(255,255,255,.2)}.uk-card-primary.uk-card-body .uk-input:focus,.uk-card-primary.uk-card-body .uk-select:focus,.uk-card-primary.uk-card-body .uk-textarea:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-input:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-select:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-textarea:focus,.uk-card-secondary.uk-card-body .uk-input:focus,.uk-card-secondary.uk-card-body .uk-select:focus,.uk-card-secondary.uk-card-body .uk-textarea:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-input:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-select:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-textarea:focus,.uk-light .uk-input:focus,.uk-light .uk-select:focus,.uk-light .uk-textarea:focus,.uk-offcanvas-bar .uk-input:focus,.uk-offcanvas-bar .uk-select:focus,.uk-offcanvas-bar .uk-textarea:focus,.uk-overlay-primary .uk-input:focus,.uk-overlay-primary .uk-select:focus,.uk-overlay-primary .uk-textarea:focus,.uk-section-primary:not(.uk-preserve-color) .uk-input:focus,.uk-section-primary:not(.uk-preserve-color) .uk-select:focus,.uk-section-primary:not(.uk-preserve-color) .uk-textarea:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-input:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-select:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-textarea:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-input:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-select:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-textarea:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-input:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-select:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-textarea:focus{background-color:rgba(255,255,255,.1);color:rgba(255,255,255,.7);border-color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-input:-ms-input-placeholder,.uk-card-primary>:not([class*=uk-card-media]) .uk-input:-ms-input-placeholder,.uk-card-secondary.uk-card-body .uk-input:-ms-input-placeholder,.uk-card-secondary>:not([class*=uk-card-media]) .uk-input:-ms-input-placeholder,.uk-light .uk-input:-ms-input-placeholder,.uk-offcanvas-bar .uk-input:-ms-input-placeholder,.uk-overlay-primary .uk-input:-ms-input-placeholder,.uk-section-primary:not(.uk-preserve-color) .uk-input:-ms-input-placeholder,.uk-section-secondary:not(.uk-preserve-color) .uk-input:-ms-input-placeholder,.uk-tile-primary:not(.uk-preserve-color) .uk-input:-ms-input-placeholder,.uk-tile-secondary:not(.uk-preserve-color) .uk-input:-ms-input-placeholder{color:rgba(255,255,255,.5)!important}.uk-card-primary.uk-card-body .uk-input::-moz-placeholder,.uk-card-primary>:not([class*=uk-card-media]) .uk-input::-moz-placeholder,.uk-card-secondary.uk-card-body .uk-input::-moz-placeholder,.uk-card-secondary>:not([class*=uk-card-media]) .uk-input::-moz-placeholder,.uk-light .uk-input::-moz-placeholder,.uk-offcanvas-bar .uk-input::-moz-placeholder,.uk-overlay-primary .uk-input::-moz-placeholder,.uk-section-primary:not(.uk-preserve-color) .uk-input::-moz-placeholder,.uk-section-secondary:not(.uk-preserve-color) .uk-input::-moz-placeholder,.uk-tile-primary:not(.uk-preserve-color) .uk-input::-moz-placeholder,.uk-tile-secondary:not(.uk-preserve-color) .uk-input::-moz-placeholder{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-input::-webkit-input-placeholder,.uk-card-primary>:not([class*=uk-card-media]) .uk-input::-webkit-input-placeholder,.uk-card-secondary.uk-card-body .uk-input::-webkit-input-placeholder,.uk-card-secondary>:not([class*=uk-card-media]) .uk-input::-webkit-input-placeholder,.uk-light .uk-input::-webkit-input-placeholder,.uk-offcanvas-bar .uk-input::-webkit-input-placeholder,.uk-overlay-primary .uk-input::-webkit-input-placeholder,.uk-section-primary:not(.uk-preserve-color) .uk-input::-webkit-input-placeholder,.uk-section-secondary:not(.uk-preserve-color) .uk-input::-webkit-input-placeholder,.uk-tile-primary:not(.uk-preserve-color) .uk-input::-webkit-input-placeholder,.uk-tile-secondary:not(.uk-preserve-color) .uk-input::-webkit-input-placeholder{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-textarea:-ms-input-placeholder,.uk-card-primary>:not([class*=uk-card-media]) .uk-textarea:-ms-input-placeholder,.uk-card-secondary.uk-card-body .uk-textarea:-ms-input-placeholder,.uk-card-secondary>:not([class*=uk-card-media]) .uk-textarea:-ms-input-placeholder,.uk-light .uk-textarea:-ms-input-placeholder,.uk-offcanvas-bar .uk-textarea:-ms-input-placeholder,.uk-overlay-primary .uk-textarea:-ms-input-placeholder,.uk-section-primary:not(.uk-preserve-color) .uk-textarea:-ms-input-placeholder,.uk-section-secondary:not(.uk-preserve-color) .uk-textarea:-ms-input-placeholder,.uk-tile-primary:not(.uk-preserve-color) .uk-textarea:-ms-input-placeholder,.uk-tile-secondary:not(.uk-preserve-color) .uk-textarea:-ms-input-placeholder{color:rgba(255,255,255,.5)!important}.uk-card-primary.uk-card-body .uk-textarea::-moz-placeholder,.uk-card-primary>:not([class*=uk-card-media]) .uk-textarea::-moz-placeholder,.uk-card-secondary.uk-card-body .uk-textarea::-moz-placeholder,.uk-card-secondary>:not([class*=uk-card-media]) .uk-textarea::-moz-placeholder,.uk-light .uk-textarea::-moz-placeholder,.uk-offcanvas-bar .uk-textarea::-moz-placeholder,.uk-overlay-primary .uk-textarea::-moz-placeholder,.uk-section-primary:not(.uk-preserve-color) .uk-textarea::-moz-placeholder,.uk-section-secondary:not(.uk-preserve-color) .uk-textarea::-moz-placeholder,.uk-tile-primary:not(.uk-preserve-color) .uk-textarea::-moz-placeholder,.uk-tile-secondary:not(.uk-preserve-color) .uk-textarea::-moz-placeholder{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-textarea::-webkit-input-placeholder,.uk-card-primary>:not([class*=uk-card-media]) .uk-textarea::-webkit-input-placeholder,.uk-card-secondary.uk-card-body .uk-textarea::-webkit-input-placeholder,.uk-card-secondary>:not([class*=uk-card-media]) .uk-textarea::-webkit-input-placeholder,.uk-light .uk-textarea::-webkit-input-placeholder,.uk-offcanvas-bar .uk-textarea::-webkit-input-placeholder,.uk-overlay-primary .uk-textarea::-webkit-input-placeholder,.uk-section-primary:not(.uk-preserve-color) .uk-textarea::-webkit-input-placeholder,.uk-section-secondary:not(.uk-preserve-color) .uk-textarea::-webkit-input-placeholder,.uk-tile-primary:not(.uk-preserve-color) .uk-textarea::-webkit-input-placeholder,.uk-tile-secondary:not(.uk-preserve-color) .uk-textarea::-webkit-input-placeholder{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-select:not([multiple]):not([size]),.uk-card-primary>:not([class*=uk-card-media]) .uk-select:not([multiple]):not([size]),.uk-card-secondary.uk-card-body .uk-select:not([multiple]):not([size]),.uk-card-secondary>:not([class*=uk-card-media]) .uk-select:not([multiple]):not([size]),.uk-light .uk-select:not([multiple]):not([size]),.uk-offcanvas-bar .uk-select:not([multiple]):not([size]),.uk-overlay-primary .uk-select:not([multiple]):not([size]),.uk-section-primary:not(.uk-preserve-color) .uk-select:not([multiple]):not([size]),.uk-section-secondary:not(.uk-preserve-color) .uk-select:not([multiple]):not([size]),.uk-tile-primary:not(.uk-preserve-color) .uk-select:not([multiple]):not([size]),.uk-tile-secondary:not(.uk-preserve-color) .uk-select:not([multiple]):not([size]){background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2224%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22rgba%28255,%20255,%20255,%200.7%29%22%20points%3D%2212%201%209%206%2015%206%22%3E%3C%2Fpolygon%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22rgba%28255,%20255,%20255,%200.7%29%22%20points%3D%2212%2013%209%208%2015%208%22%3E%3C%2Fpolygon%3E%0A%3C%2Fsvg%3E%0A\")}.uk-card-primary.uk-card-body .uk-checkbox,.uk-card-primary.uk-card-body .uk-radio,.uk-card-primary>:not([class*=uk-card-media]) .uk-checkbox,.uk-card-primary>:not([class*=uk-card-media]) .uk-radio,.uk-card-secondary.uk-card-body .uk-checkbox,.uk-card-secondary.uk-card-body .uk-radio,.uk-card-secondary>:not([class*=uk-card-media]) .uk-checkbox,.uk-card-secondary>:not([class*=uk-card-media]) .uk-radio,.uk-light .uk-checkbox,.uk-light .uk-radio,.uk-offcanvas-bar .uk-checkbox,.uk-offcanvas-bar .uk-radio,.uk-overlay-primary .uk-checkbox,.uk-overlay-primary .uk-radio,.uk-section-primary:not(.uk-preserve-color) .uk-checkbox,.uk-section-primary:not(.uk-preserve-color) .uk-radio,.uk-section-secondary:not(.uk-preserve-color) .uk-checkbox,.uk-section-secondary:not(.uk-preserve-color) .uk-radio,.uk-tile-primary:not(.uk-preserve-color) .uk-checkbox,.uk-tile-primary:not(.uk-preserve-color) .uk-radio,.uk-tile-secondary:not(.uk-preserve-color) .uk-checkbox,.uk-tile-secondary:not(.uk-preserve-color) .uk-radio{background-color:rgba(242,242,242,.1);border-color:rgba(255,255,255,.2)}.uk-card-primary.uk-card-body .uk-checkbox:focus,.uk-card-primary.uk-card-body .uk-radio:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-checkbox:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-radio:focus,.uk-card-secondary.uk-card-body .uk-checkbox:focus,.uk-card-secondary.uk-card-body .uk-radio:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-checkbox:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-radio:focus,.uk-light .uk-checkbox:focus,.uk-light .uk-radio:focus,.uk-offcanvas-bar .uk-checkbox:focus,.uk-offcanvas-bar .uk-radio:focus,.uk-overlay-primary .uk-checkbox:focus,.uk-overlay-primary .uk-radio:focus,.uk-section-primary:not(.uk-preserve-color) .uk-checkbox:focus,.uk-section-primary:not(.uk-preserve-color) .uk-radio:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-checkbox:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-radio:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-checkbox:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-radio:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-checkbox:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-radio:focus{border-color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-checkbox:checked,.uk-card-primary.uk-card-body .uk-checkbox:indeterminate,.uk-card-primary.uk-card-body .uk-radio:checked,.uk-card-primary>:not([class*=uk-card-media]) .uk-checkbox:checked,.uk-card-primary>:not([class*=uk-card-media]) .uk-checkbox:indeterminate,.uk-card-primary>:not([class*=uk-card-media]) .uk-radio:checked,.uk-card-secondary.uk-card-body .uk-checkbox:checked,.uk-card-secondary.uk-card-body .uk-checkbox:indeterminate,.uk-card-secondary.uk-card-body .uk-radio:checked,.uk-card-secondary>:not([class*=uk-card-media]) .uk-checkbox:checked,.uk-card-secondary>:not([class*=uk-card-media]) .uk-checkbox:indeterminate,.uk-card-secondary>:not([class*=uk-card-media]) .uk-radio:checked,.uk-light .uk-checkbox:checked,.uk-light .uk-checkbox:indeterminate,.uk-light .uk-radio:checked,.uk-offcanvas-bar .uk-checkbox:checked,.uk-offcanvas-bar .uk-checkbox:indeterminate,.uk-offcanvas-bar .uk-radio:checked,.uk-overlay-primary .uk-checkbox:checked,.uk-overlay-primary .uk-checkbox:indeterminate,.uk-overlay-primary .uk-radio:checked,.uk-section-primary:not(.uk-preserve-color) .uk-checkbox:checked,.uk-section-primary:not(.uk-preserve-color) .uk-checkbox:indeterminate,.uk-section-primary:not(.uk-preserve-color) .uk-radio:checked,.uk-section-secondary:not(.uk-preserve-color) .uk-checkbox:checked,.uk-section-secondary:not(.uk-preserve-color) .uk-checkbox:indeterminate,.uk-section-secondary:not(.uk-preserve-color) .uk-radio:checked,.uk-tile-primary:not(.uk-preserve-color) .uk-checkbox:checked,.uk-tile-primary:not(.uk-preserve-color) .uk-checkbox:indeterminate,.uk-tile-primary:not(.uk-preserve-color) .uk-radio:checked,.uk-tile-secondary:not(.uk-preserve-color) .uk-checkbox:checked,.uk-tile-secondary:not(.uk-preserve-color) .uk-checkbox:indeterminate,.uk-tile-secondary:not(.uk-preserve-color) .uk-radio:checked{background-color:#fff;border-color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-checkbox:checked:focus,.uk-card-primary.uk-card-body .uk-checkbox:indeterminate:focus,.uk-card-primary.uk-card-body .uk-radio:checked:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-checkbox:checked:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-checkbox:indeterminate:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-radio:checked:focus,.uk-card-secondary.uk-card-body .uk-checkbox:checked:focus,.uk-card-secondary.uk-card-body .uk-checkbox:indeterminate:focus,.uk-card-secondary.uk-card-body .uk-radio:checked:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-checkbox:checked:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-checkbox:indeterminate:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-radio:checked:focus,.uk-light .uk-checkbox:checked:focus,.uk-light .uk-checkbox:indeterminate:focus,.uk-light .uk-radio:checked:focus,.uk-offcanvas-bar .uk-checkbox:checked:focus,.uk-offcanvas-bar .uk-checkbox:indeterminate:focus,.uk-offcanvas-bar .uk-radio:checked:focus,.uk-overlay-primary .uk-checkbox:checked:focus,.uk-overlay-primary .uk-checkbox:indeterminate:focus,.uk-overlay-primary .uk-radio:checked:focus,.uk-section-primary:not(.uk-preserve-color) .uk-checkbox:checked:focus,.uk-section-primary:not(.uk-preserve-color) .uk-checkbox:indeterminate:focus,.uk-section-primary:not(.uk-preserve-color) .uk-radio:checked:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-checkbox:checked:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-checkbox:indeterminate:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-radio:checked:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-checkbox:checked:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-checkbox:indeterminate:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-radio:checked:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-checkbox:checked:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-checkbox:indeterminate:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-radio:checked:focus{background-color:#e6e6e6}.uk-card-primary.uk-card-body .uk-radio:checked,.uk-card-primary>:not([class*=uk-card-media]) .uk-radio:checked,.uk-card-secondary.uk-card-body .uk-radio:checked,.uk-card-secondary>:not([class*=uk-card-media]) .uk-radio:checked,.uk-light .uk-radio:checked,.uk-offcanvas-bar .uk-radio:checked,.uk-overlay-primary .uk-radio:checked,.uk-section-primary:not(.uk-preserve-color) .uk-radio:checked,.uk-section-secondary:not(.uk-preserve-color) .uk-radio:checked,.uk-tile-primary:not(.uk-preserve-color) .uk-radio:checked,.uk-tile-secondary:not(.uk-preserve-color) .uk-radio:checked{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22%23666%22%20cx%3D%228%22%20cy%3D%228%22%20r%3D%222%22%3E%3C%2Fcircle%3E%0A%3C%2Fsvg%3E\")}.uk-card-primary.uk-card-body .uk-checkbox:checked,.uk-card-primary>:not([class*=uk-card-media]) .uk-checkbox:checked,.uk-card-secondary.uk-card-body .uk-checkbox:checked,.uk-card-secondary>:not([class*=uk-card-media]) .uk-checkbox:checked,.uk-light .uk-checkbox:checked,.uk-offcanvas-bar .uk-checkbox:checked,.uk-overlay-primary .uk-checkbox:checked,.uk-section-primary:not(.uk-preserve-color) .uk-checkbox:checked,.uk-section-secondary:not(.uk-preserve-color) .uk-checkbox:checked,.uk-tile-primary:not(.uk-preserve-color) .uk-checkbox:checked,.uk-tile-secondary:not(.uk-preserve-color) .uk-checkbox:checked{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2214%22%20height%3D%2211%22%20viewBox%3D%220%200%2014%2011%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23666%22%20points%3D%2212%201%205%207.5%202%205%201%205.5%205%2010%2013%201.5%22%2F%3E%0A%3C%2Fsvg%3E\")}.uk-card-primary.uk-card-body .uk-checkbox:indeterminate,.uk-card-primary>:not([class*=uk-card-media]) .uk-checkbox:indeterminate,.uk-card-secondary.uk-card-body .uk-checkbox:indeterminate,.uk-card-secondary>:not([class*=uk-card-media]) .uk-checkbox:indeterminate,.uk-light .uk-checkbox:indeterminate,.uk-offcanvas-bar .uk-checkbox:indeterminate,.uk-overlay-primary .uk-checkbox:indeterminate,.uk-section-primary:not(.uk-preserve-color) .uk-checkbox:indeterminate,.uk-section-secondary:not(.uk-preserve-color) .uk-checkbox:indeterminate,.uk-tile-primary:not(.uk-preserve-color) .uk-checkbox:indeterminate,.uk-tile-secondary:not(.uk-preserve-color) .uk-checkbox:indeterminate{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Crect%20fill%3D%22%23666%22%20x%3D%223%22%20y%3D%228%22%20width%3D%2210%22%20height%3D%221%22%3E%3C%2Frect%3E%0A%3C%2Fsvg%3E\")}.uk-card-primary.uk-card-body .uk-form-label,.uk-card-primary>:not([class*=uk-card-media]) .uk-form-label,.uk-card-secondary.uk-card-body .uk-form-label,.uk-card-secondary>:not([class*=uk-card-media]) .uk-form-label,.uk-light .uk-form-label,.uk-offcanvas-bar .uk-form-label,.uk-overlay-primary .uk-form-label,.uk-section-primary:not(.uk-preserve-color) .uk-form-label,.uk-section-secondary:not(.uk-preserve-color) .uk-form-label,.uk-tile-primary:not(.uk-preserve-color) .uk-form-label,.uk-tile-secondary:not(.uk-preserve-color) .uk-form-label{color:#fff}.uk-card-primary.uk-card-body .uk-button-default,.uk-card-primary>:not([class*=uk-card-media]) .uk-button-default,.uk-card-secondary.uk-card-body .uk-button-default,.uk-card-secondary>:not([class*=uk-card-media]) .uk-button-default,.uk-light .uk-button-default,.uk-offcanvas-bar .uk-button-default,.uk-overlay-primary .uk-button-default,.uk-section-primary:not(.uk-preserve-color) .uk-button-default,.uk-section-secondary:not(.uk-preserve-color) .uk-button-default,.uk-tile-primary:not(.uk-preserve-color) .uk-button-default,.uk-tile-secondary:not(.uk-preserve-color) .uk-button-default{background-color:transparent;color:#fff;border-color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-button-default:focus,.uk-card-primary.uk-card-body .uk-button-default:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-button-default:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-button-default:hover,.uk-card-secondary.uk-card-body .uk-button-default:focus,.uk-card-secondary.uk-card-body .uk-button-default:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-button-default:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-button-default:hover,.uk-light .uk-button-default:focus,.uk-light .uk-button-default:hover,.uk-offcanvas-bar .uk-button-default:focus,.uk-offcanvas-bar .uk-button-default:hover,.uk-overlay-primary .uk-button-default:focus,.uk-overlay-primary .uk-button-default:hover,.uk-section-primary:not(.uk-preserve-color) .uk-button-default:focus,.uk-section-primary:not(.uk-preserve-color) .uk-button-default:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-button-default:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-button-default:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-button-default:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-button-default:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-button-default:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-button-default:hover{background-color:transparent;color:#fff;border-color:#fff}.uk-card-primary.uk-card-body .uk-button-default.uk-active,.uk-card-primary.uk-card-body .uk-button-default:active,.uk-card-primary>:not([class*=uk-card-media]) .uk-button-default.uk-active,.uk-card-primary>:not([class*=uk-card-media]) .uk-button-default:active,.uk-card-secondary.uk-card-body .uk-button-default.uk-active,.uk-card-secondary.uk-card-body .uk-button-default:active,.uk-card-secondary>:not([class*=uk-card-media]) .uk-button-default.uk-active,.uk-card-secondary>:not([class*=uk-card-media]) .uk-button-default:active,.uk-light .uk-button-default.uk-active,.uk-light .uk-button-default:active,.uk-offcanvas-bar .uk-button-default.uk-active,.uk-offcanvas-bar .uk-button-default:active,.uk-overlay-primary .uk-button-default.uk-active,.uk-overlay-primary .uk-button-default:active,.uk-section-primary:not(.uk-preserve-color) .uk-button-default.uk-active,.uk-section-primary:not(.uk-preserve-color) .uk-button-default:active,.uk-section-secondary:not(.uk-preserve-color) .uk-button-default.uk-active,.uk-section-secondary:not(.uk-preserve-color) .uk-button-default:active,.uk-tile-primary:not(.uk-preserve-color) .uk-button-default.uk-active,.uk-tile-primary:not(.uk-preserve-color) .uk-button-default:active,.uk-tile-secondary:not(.uk-preserve-color) .uk-button-default.uk-active,.uk-tile-secondary:not(.uk-preserve-color) .uk-button-default:active{background-color:transparent;color:#fff;border-color:#fff}.uk-card-primary.uk-card-body .uk-button-primary,.uk-card-primary>:not([class*=uk-card-media]) .uk-button-primary,.uk-card-secondary.uk-card-body .uk-button-primary,.uk-card-secondary>:not([class*=uk-card-media]) .uk-button-primary,.uk-light .uk-button-primary,.uk-offcanvas-bar .uk-button-primary,.uk-overlay-primary .uk-button-primary,.uk-section-primary:not(.uk-preserve-color) .uk-button-primary,.uk-section-secondary:not(.uk-preserve-color) .uk-button-primary,.uk-tile-primary:not(.uk-preserve-color) .uk-button-primary,.uk-tile-secondary:not(.uk-preserve-color) .uk-button-primary{background-color:#fff;color:#666}.uk-card-primary.uk-card-body .uk-button-primary:focus,.uk-card-primary.uk-card-body .uk-button-primary:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-button-primary:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-button-primary:hover,.uk-card-secondary.uk-card-body .uk-button-primary:focus,.uk-card-secondary.uk-card-body .uk-button-primary:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-button-primary:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-button-primary:hover,.uk-light .uk-button-primary:focus,.uk-light .uk-button-primary:hover,.uk-offcanvas-bar .uk-button-primary:focus,.uk-offcanvas-bar .uk-button-primary:hover,.uk-overlay-primary .uk-button-primary:focus,.uk-overlay-primary .uk-button-primary:hover,.uk-section-primary:not(.uk-preserve-color) .uk-button-primary:focus,.uk-section-primary:not(.uk-preserve-color) .uk-button-primary:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-button-primary:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-button-primary:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-button-primary:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-button-primary:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-button-primary:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-button-primary:hover{background-color:#f2f2f2;color:#666}.uk-card-primary.uk-card-body .uk-button-primary.uk-active,.uk-card-primary.uk-card-body .uk-button-primary:active,.uk-card-primary>:not([class*=uk-card-media]) .uk-button-primary.uk-active,.uk-card-primary>:not([class*=uk-card-media]) .uk-button-primary:active,.uk-card-secondary.uk-card-body .uk-button-primary.uk-active,.uk-card-secondary.uk-card-body .uk-button-primary:active,.uk-card-secondary>:not([class*=uk-card-media]) .uk-button-primary.uk-active,.uk-card-secondary>:not([class*=uk-card-media]) .uk-button-primary:active,.uk-light .uk-button-primary.uk-active,.uk-light .uk-button-primary:active,.uk-offcanvas-bar .uk-button-primary.uk-active,.uk-offcanvas-bar .uk-button-primary:active,.uk-overlay-primary .uk-button-primary.uk-active,.uk-overlay-primary .uk-button-primary:active,.uk-section-primary:not(.uk-preserve-color) .uk-button-primary.uk-active,.uk-section-primary:not(.uk-preserve-color) .uk-button-primary:active,.uk-section-secondary:not(.uk-preserve-color) .uk-button-primary.uk-active,.uk-section-secondary:not(.uk-preserve-color) .uk-button-primary:active,.uk-tile-primary:not(.uk-preserve-color) .uk-button-primary.uk-active,.uk-tile-primary:not(.uk-preserve-color) .uk-button-primary:active,.uk-tile-secondary:not(.uk-preserve-color) .uk-button-primary.uk-active,.uk-tile-secondary:not(.uk-preserve-color) .uk-button-primary:active{background-color:#e6e6e6;color:#666}.uk-card-primary.uk-card-body .uk-button-secondary,.uk-card-primary>:not([class*=uk-card-media]) .uk-button-secondary,.uk-card-secondary.uk-card-body .uk-button-secondary,.uk-card-secondary>:not([class*=uk-card-media]) .uk-button-secondary,.uk-light .uk-button-secondary,.uk-offcanvas-bar .uk-button-secondary,.uk-overlay-primary .uk-button-secondary,.uk-section-primary:not(.uk-preserve-color) .uk-button-secondary,.uk-section-secondary:not(.uk-preserve-color) .uk-button-secondary,.uk-tile-primary:not(.uk-preserve-color) .uk-button-secondary,.uk-tile-secondary:not(.uk-preserve-color) .uk-button-secondary{background-color:#fff;color:#666}.uk-card-primary.uk-card-body .uk-button-secondary:focus,.uk-card-primary.uk-card-body .uk-button-secondary:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-button-secondary:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-button-secondary:hover,.uk-card-secondary.uk-card-body .uk-button-secondary:focus,.uk-card-secondary.uk-card-body .uk-button-secondary:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-button-secondary:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-button-secondary:hover,.uk-light .uk-button-secondary:focus,.uk-light .uk-button-secondary:hover,.uk-offcanvas-bar .uk-button-secondary:focus,.uk-offcanvas-bar .uk-button-secondary:hover,.uk-overlay-primary .uk-button-secondary:focus,.uk-overlay-primary .uk-button-secondary:hover,.uk-section-primary:not(.uk-preserve-color) .uk-button-secondary:focus,.uk-section-primary:not(.uk-preserve-color) .uk-button-secondary:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-button-secondary:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-button-secondary:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-button-secondary:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-button-secondary:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-button-secondary:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-button-secondary:hover{background-color:#f2f2f2;color:#666}.uk-card-primary.uk-card-body .uk-button-secondary.uk-active,.uk-card-primary.uk-card-body .uk-button-secondary:active,.uk-card-primary>:not([class*=uk-card-media]) .uk-button-secondary.uk-active,.uk-card-primary>:not([class*=uk-card-media]) .uk-button-secondary:active,.uk-card-secondary.uk-card-body .uk-button-secondary.uk-active,.uk-card-secondary.uk-card-body .uk-button-secondary:active,.uk-card-secondary>:not([class*=uk-card-media]) .uk-button-secondary.uk-active,.uk-card-secondary>:not([class*=uk-card-media]) .uk-button-secondary:active,.uk-light .uk-button-secondary.uk-active,.uk-light .uk-button-secondary:active,.uk-offcanvas-bar .uk-button-secondary.uk-active,.uk-offcanvas-bar .uk-button-secondary:active,.uk-overlay-primary .uk-button-secondary.uk-active,.uk-overlay-primary .uk-button-secondary:active,.uk-section-primary:not(.uk-preserve-color) .uk-button-secondary.uk-active,.uk-section-primary:not(.uk-preserve-color) .uk-button-secondary:active,.uk-section-secondary:not(.uk-preserve-color) .uk-button-secondary.uk-active,.uk-section-secondary:not(.uk-preserve-color) .uk-button-secondary:active,.uk-tile-primary:not(.uk-preserve-color) .uk-button-secondary.uk-active,.uk-tile-primary:not(.uk-preserve-color) .uk-button-secondary:active,.uk-tile-secondary:not(.uk-preserve-color) .uk-button-secondary.uk-active,.uk-tile-secondary:not(.uk-preserve-color) .uk-button-secondary:active{background-color:#e6e6e6;color:#666}.uk-card-primary.uk-card-body .uk-button-text,.uk-card-primary>:not([class*=uk-card-media]) .uk-button-text,.uk-card-secondary.uk-card-body .uk-button-text,.uk-card-secondary>:not([class*=uk-card-media]) .uk-button-text,.uk-light .uk-button-text,.uk-offcanvas-bar .uk-button-text,.uk-overlay-primary .uk-button-text,.uk-section-primary:not(.uk-preserve-color) .uk-button-text,.uk-section-secondary:not(.uk-preserve-color) .uk-button-text,.uk-tile-primary:not(.uk-preserve-color) .uk-button-text,.uk-tile-secondary:not(.uk-preserve-color) .uk-button-text{color:#fff}.uk-card-primary.uk-card-body .uk-button-text::before,.uk-card-primary>:not([class*=uk-card-media]) .uk-button-text::before,.uk-card-secondary.uk-card-body .uk-button-text::before,.uk-card-secondary>:not([class*=uk-card-media]) .uk-button-text::before,.uk-light .uk-button-text::before,.uk-offcanvas-bar .uk-button-text::before,.uk-overlay-primary .uk-button-text::before,.uk-section-primary:not(.uk-preserve-color) .uk-button-text::before,.uk-section-secondary:not(.uk-preserve-color) .uk-button-text::before,.uk-tile-primary:not(.uk-preserve-color) .uk-button-text::before,.uk-tile-secondary:not(.uk-preserve-color) .uk-button-text::before{border-bottom-color:#fff}.uk-card-primary.uk-card-body .uk-button-text:focus,.uk-card-primary.uk-card-body .uk-button-text:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-button-text:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-button-text:hover,.uk-card-secondary.uk-card-body .uk-button-text:focus,.uk-card-secondary.uk-card-body .uk-button-text:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-button-text:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-button-text:hover,.uk-light .uk-button-text:focus,.uk-light .uk-button-text:hover,.uk-offcanvas-bar .uk-button-text:focus,.uk-offcanvas-bar .uk-button-text:hover,.uk-overlay-primary .uk-button-text:focus,.uk-overlay-primary .uk-button-text:hover,.uk-section-primary:not(.uk-preserve-color) .uk-button-text:focus,.uk-section-primary:not(.uk-preserve-color) .uk-button-text:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-button-text:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-button-text:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-button-text:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-button-text:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-button-text:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-button-text:hover{color:#fff}.uk-card-primary.uk-card-body .uk-button-text:disabled,.uk-card-primary>:not([class*=uk-card-media]) .uk-button-text:disabled,.uk-card-secondary.uk-card-body .uk-button-text:disabled,.uk-card-secondary>:not([class*=uk-card-media]) .uk-button-text:disabled,.uk-light .uk-button-text:disabled,.uk-offcanvas-bar .uk-button-text:disabled,.uk-overlay-primary .uk-button-text:disabled,.uk-section-primary:not(.uk-preserve-color) .uk-button-text:disabled,.uk-section-secondary:not(.uk-preserve-color) .uk-button-text:disabled,.uk-tile-primary:not(.uk-preserve-color) .uk-button-text:disabled,.uk-tile-secondary:not(.uk-preserve-color) .uk-button-text:disabled{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-grid-divider>:not(.uk-first-column)::before,.uk-card-primary>:not([class*=uk-card-media]) .uk-grid-divider>:not(.uk-first-column)::before,.uk-card-secondary.uk-card-body .uk-grid-divider>:not(.uk-first-column)::before,.uk-card-secondary>:not([class*=uk-card-media]) .uk-grid-divider>:not(.uk-first-column)::before,.uk-light .uk-grid-divider>:not(.uk-first-column)::before,.uk-offcanvas-bar .uk-grid-divider>:not(.uk-first-column)::before,.uk-overlay-primary .uk-grid-divider>:not(.uk-first-column)::before,.uk-section-primary:not(.uk-preserve-color) .uk-grid-divider>:not(.uk-first-column)::before,.uk-section-secondary:not(.uk-preserve-color) .uk-grid-divider>:not(.uk-first-column)::before,.uk-tile-primary:not(.uk-preserve-color) .uk-grid-divider>:not(.uk-first-column)::before,.uk-tile-secondary:not(.uk-preserve-color) .uk-grid-divider>:not(.uk-first-column)::before{border-left-color:rgba(255,255,255,.2)}.uk-card-primary.uk-card-body .uk-grid-divider.uk-grid-stack>.uk-grid-margin::before,.uk-card-primary>:not([class*=uk-card-media]) .uk-grid-divider.uk-grid-stack>.uk-grid-margin::before,.uk-card-secondary.uk-card-body .uk-grid-divider.uk-grid-stack>.uk-grid-margin::before,.uk-card-secondary>:not([class*=uk-card-media]) .uk-grid-divider.uk-grid-stack>.uk-grid-margin::before,.uk-light .uk-grid-divider.uk-grid-stack>.uk-grid-margin::before,.uk-offcanvas-bar .uk-grid-divider.uk-grid-stack>.uk-grid-margin::before,.uk-overlay-primary .uk-grid-divider.uk-grid-stack>.uk-grid-margin::before,.uk-section-primary:not(.uk-preserve-color) .uk-grid-divider.uk-grid-stack>.uk-grid-margin::before,.uk-section-secondary:not(.uk-preserve-color) .uk-grid-divider.uk-grid-stack>.uk-grid-margin::before,.uk-tile-primary:not(.uk-preserve-color) .uk-grid-divider.uk-grid-stack>.uk-grid-margin::before,.uk-tile-secondary:not(.uk-preserve-color) .uk-grid-divider.uk-grid-stack>.uk-grid-margin::before{border-top-color:rgba(255,255,255,.2)}.uk-card-primary.uk-card-body .uk-close,.uk-card-primary>:not([class*=uk-card-media]) .uk-close,.uk-card-secondary.uk-card-body .uk-close,.uk-card-secondary>:not([class*=uk-card-media]) .uk-close,.uk-light .uk-close,.uk-offcanvas-bar .uk-close,.uk-overlay-primary .uk-close,.uk-section-primary:not(.uk-preserve-color) .uk-close,.uk-section-secondary:not(.uk-preserve-color) .uk-close,.uk-tile-primary:not(.uk-preserve-color) .uk-close,.uk-tile-secondary:not(.uk-preserve-color) .uk-close{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-close:focus,.uk-card-primary.uk-card-body .uk-close:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-close:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-close:hover,.uk-card-secondary.uk-card-body .uk-close:focus,.uk-card-secondary.uk-card-body .uk-close:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-close:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-close:hover,.uk-light .uk-close:focus,.uk-light .uk-close:hover,.uk-offcanvas-bar .uk-close:focus,.uk-offcanvas-bar .uk-close:hover,.uk-overlay-primary .uk-close:focus,.uk-overlay-primary .uk-close:hover,.uk-section-primary:not(.uk-preserve-color) .uk-close:focus,.uk-section-primary:not(.uk-preserve-color) .uk-close:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-close:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-close:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-close:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-close:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-close:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-close:hover{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-totop,.uk-card-primary>:not([class*=uk-card-media]) .uk-totop,.uk-card-secondary.uk-card-body .uk-totop,.uk-card-secondary>:not([class*=uk-card-media]) .uk-totop,.uk-light .uk-totop,.uk-offcanvas-bar .uk-totop,.uk-overlay-primary .uk-totop,.uk-section-primary:not(.uk-preserve-color) .uk-totop,.uk-section-secondary:not(.uk-preserve-color) .uk-totop,.uk-tile-primary:not(.uk-preserve-color) .uk-totop,.uk-tile-secondary:not(.uk-preserve-color) .uk-totop{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-totop:focus,.uk-card-primary.uk-card-body .uk-totop:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-totop:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-totop:hover,.uk-card-secondary.uk-card-body .uk-totop:focus,.uk-card-secondary.uk-card-body .uk-totop:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-totop:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-totop:hover,.uk-light .uk-totop:focus,.uk-light .uk-totop:hover,.uk-offcanvas-bar .uk-totop:focus,.uk-offcanvas-bar .uk-totop:hover,.uk-overlay-primary .uk-totop:focus,.uk-overlay-primary .uk-totop:hover,.uk-section-primary:not(.uk-preserve-color) .uk-totop:focus,.uk-section-primary:not(.uk-preserve-color) .uk-totop:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-totop:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-totop:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-totop:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-totop:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-totop:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-totop:hover{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-totop:active,.uk-card-primary>:not([class*=uk-card-media]) .uk-totop:active,.uk-card-secondary.uk-card-body .uk-totop:active,.uk-card-secondary>:not([class*=uk-card-media]) .uk-totop:active,.uk-light .uk-totop:active,.uk-offcanvas-bar .uk-totop:active,.uk-overlay-primary .uk-totop:active,.uk-section-primary:not(.uk-preserve-color) .uk-totop:active,.uk-section-secondary:not(.uk-preserve-color) .uk-totop:active,.uk-tile-primary:not(.uk-preserve-color) .uk-totop:active,.uk-tile-secondary:not(.uk-preserve-color) .uk-totop:active{color:#fff}.uk-card-primary.uk-card-body .uk-marker,.uk-card-primary>:not([class*=uk-card-media]) .uk-marker,.uk-card-secondary.uk-card-body .uk-marker,.uk-card-secondary>:not([class*=uk-card-media]) .uk-marker,.uk-light .uk-marker,.uk-offcanvas-bar .uk-marker,.uk-overlay-primary .uk-marker,.uk-section-primary:not(.uk-preserve-color) .uk-marker,.uk-section-secondary:not(.uk-preserve-color) .uk-marker,.uk-tile-primary:not(.uk-preserve-color) .uk-marker,.uk-tile-secondary:not(.uk-preserve-color) .uk-marker{background:#f8f8f8;color:#666}.uk-card-primary.uk-card-body .uk-marker:focus,.uk-card-primary.uk-card-body .uk-marker:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-marker:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-marker:hover,.uk-card-secondary.uk-card-body .uk-marker:focus,.uk-card-secondary.uk-card-body .uk-marker:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-marker:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-marker:hover,.uk-light .uk-marker:focus,.uk-light .uk-marker:hover,.uk-offcanvas-bar .uk-marker:focus,.uk-offcanvas-bar .uk-marker:hover,.uk-overlay-primary .uk-marker:focus,.uk-overlay-primary .uk-marker:hover,.uk-section-primary:not(.uk-preserve-color) .uk-marker:focus,.uk-section-primary:not(.uk-preserve-color) .uk-marker:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-marker:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-marker:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-marker:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-marker:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-marker:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-marker:hover{color:#666}.uk-card-primary.uk-card-body .uk-badge,.uk-card-primary>:not([class*=uk-card-media]) .uk-badge,.uk-card-secondary.uk-card-body .uk-badge,.uk-card-secondary>:not([class*=uk-card-media]) .uk-badge,.uk-light .uk-badge,.uk-offcanvas-bar .uk-badge,.uk-overlay-primary .uk-badge,.uk-section-primary:not(.uk-preserve-color) .uk-badge,.uk-section-secondary:not(.uk-preserve-color) .uk-badge,.uk-tile-primary:not(.uk-preserve-color) .uk-badge,.uk-tile-secondary:not(.uk-preserve-color) .uk-badge{background-color:#fff;color:#666}.uk-card-primary.uk-card-body .uk-badge:focus,.uk-card-primary.uk-card-body .uk-badge:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-badge:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-badge:hover,.uk-card-secondary.uk-card-body .uk-badge:focus,.uk-card-secondary.uk-card-body .uk-badge:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-badge:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-badge:hover,.uk-light .uk-badge:focus,.uk-light .uk-badge:hover,.uk-offcanvas-bar .uk-badge:focus,.uk-offcanvas-bar .uk-badge:hover,.uk-overlay-primary .uk-badge:focus,.uk-overlay-primary .uk-badge:hover,.uk-section-primary:not(.uk-preserve-color) .uk-badge:focus,.uk-section-primary:not(.uk-preserve-color) .uk-badge:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-badge:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-badge:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-badge:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-badge:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-badge:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-badge:hover{color:#666}.uk-card-primary.uk-card-body .uk-label,.uk-card-primary>:not([class*=uk-card-media]) .uk-label,.uk-card-secondary.uk-card-body .uk-label,.uk-card-secondary>:not([class*=uk-card-media]) .uk-label,.uk-light .uk-label,.uk-offcanvas-bar .uk-label,.uk-overlay-primary .uk-label,.uk-section-primary:not(.uk-preserve-color) .uk-label,.uk-section-secondary:not(.uk-preserve-color) .uk-label,.uk-tile-primary:not(.uk-preserve-color) .uk-label,.uk-tile-secondary:not(.uk-preserve-color) .uk-label{background-color:#fff;color:#666}.uk-card-primary.uk-card-body .uk-article-meta,.uk-card-primary>:not([class*=uk-card-media]) .uk-article-meta,.uk-card-secondary.uk-card-body .uk-article-meta,.uk-card-secondary>:not([class*=uk-card-media]) .uk-article-meta,.uk-light .uk-article-meta,.uk-offcanvas-bar .uk-article-meta,.uk-overlay-primary .uk-article-meta,.uk-section-primary:not(.uk-preserve-color) .uk-article-meta,.uk-section-secondary:not(.uk-preserve-color) .uk-article-meta,.uk-tile-primary:not(.uk-preserve-color) .uk-article-meta,.uk-tile-secondary:not(.uk-preserve-color) .uk-article-meta{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-search-input,.uk-card-primary>:not([class*=uk-card-media]) .uk-search-input,.uk-card-secondary.uk-card-body .uk-search-input,.uk-card-secondary>:not([class*=uk-card-media]) .uk-search-input,.uk-light .uk-search-input,.uk-offcanvas-bar .uk-search-input,.uk-overlay-primary .uk-search-input,.uk-section-primary:not(.uk-preserve-color) .uk-search-input,.uk-section-secondary:not(.uk-preserve-color) .uk-search-input,.uk-tile-primary:not(.uk-preserve-color) .uk-search-input,.uk-tile-secondary:not(.uk-preserve-color) .uk-search-input{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-search-input:-ms-input-placeholder,.uk-card-primary>:not([class*=uk-card-media]) .uk-search-input:-ms-input-placeholder,.uk-card-secondary.uk-card-body .uk-search-input:-ms-input-placeholder,.uk-card-secondary>:not([class*=uk-card-media]) .uk-search-input:-ms-input-placeholder,.uk-light .uk-search-input:-ms-input-placeholder,.uk-offcanvas-bar .uk-search-input:-ms-input-placeholder,.uk-overlay-primary .uk-search-input:-ms-input-placeholder,.uk-section-primary:not(.uk-preserve-color) .uk-search-input:-ms-input-placeholder,.uk-section-secondary:not(.uk-preserve-color) .uk-search-input:-ms-input-placeholder,.uk-tile-primary:not(.uk-preserve-color) .uk-search-input:-ms-input-placeholder,.uk-tile-secondary:not(.uk-preserve-color) .uk-search-input:-ms-input-placeholder{color:rgba(255,255,255,.5)!important}.uk-card-primary.uk-card-body .uk-search-input::-moz-placeholder,.uk-card-primary>:not([class*=uk-card-media]) .uk-search-input::-moz-placeholder,.uk-card-secondary.uk-card-body .uk-search-input::-moz-placeholder,.uk-card-secondary>:not([class*=uk-card-media]) .uk-search-input::-moz-placeholder,.uk-light .uk-search-input::-moz-placeholder,.uk-offcanvas-bar .uk-search-input::-moz-placeholder,.uk-overlay-primary .uk-search-input::-moz-placeholder,.uk-section-primary:not(.uk-preserve-color) .uk-search-input::-moz-placeholder,.uk-section-secondary:not(.uk-preserve-color) .uk-search-input::-moz-placeholder,.uk-tile-primary:not(.uk-preserve-color) .uk-search-input::-moz-placeholder,.uk-tile-secondary:not(.uk-preserve-color) .uk-search-input::-moz-placeholder{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-search-input::-webkit-input-placeholder,.uk-card-primary>:not([class*=uk-card-media]) .uk-search-input::-webkit-input-placeholder,.uk-card-secondary.uk-card-body .uk-search-input::-webkit-input-placeholder,.uk-card-secondary>:not([class*=uk-card-media]) .uk-search-input::-webkit-input-placeholder,.uk-light .uk-search-input::-webkit-input-placeholder,.uk-offcanvas-bar .uk-search-input::-webkit-input-placeholder,.uk-overlay-primary .uk-search-input::-webkit-input-placeholder,.uk-section-primary:not(.uk-preserve-color) .uk-search-input::-webkit-input-placeholder,.uk-section-secondary:not(.uk-preserve-color) .uk-search-input::-webkit-input-placeholder,.uk-tile-primary:not(.uk-preserve-color) .uk-search-input::-webkit-input-placeholder,.uk-tile-secondary:not(.uk-preserve-color) .uk-search-input::-webkit-input-placeholder{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-search .uk-search-icon,.uk-card-primary>:not([class*=uk-card-media]) .uk-search .uk-search-icon,.uk-card-secondary.uk-card-body .uk-search .uk-search-icon,.uk-card-secondary>:not([class*=uk-card-media]) .uk-search .uk-search-icon,.uk-light .uk-search .uk-search-icon,.uk-offcanvas-bar .uk-search .uk-search-icon,.uk-overlay-primary .uk-search .uk-search-icon,.uk-section-primary:not(.uk-preserve-color) .uk-search .uk-search-icon,.uk-section-secondary:not(.uk-preserve-color) .uk-search .uk-search-icon,.uk-tile-primary:not(.uk-preserve-color) .uk-search .uk-search-icon,.uk-tile-secondary:not(.uk-preserve-color) .uk-search .uk-search-icon{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-search .uk-search-icon:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-search .uk-search-icon:hover,.uk-card-secondary.uk-card-body .uk-search .uk-search-icon:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-search .uk-search-icon:hover,.uk-light .uk-search .uk-search-icon:hover,.uk-offcanvas-bar .uk-search .uk-search-icon:hover,.uk-overlay-primary .uk-search .uk-search-icon:hover,.uk-section-primary:not(.uk-preserve-color) .uk-search .uk-search-icon:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-search .uk-search-icon:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-search .uk-search-icon:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-search .uk-search-icon:hover{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-search-default .uk-search-input,.uk-card-primary>:not([class*=uk-card-media]) .uk-search-default .uk-search-input,.uk-card-secondary.uk-card-body .uk-search-default .uk-search-input,.uk-card-secondary>:not([class*=uk-card-media]) .uk-search-default .uk-search-input,.uk-light .uk-search-default .uk-search-input,.uk-offcanvas-bar .uk-search-default .uk-search-input,.uk-overlay-primary .uk-search-default .uk-search-input,.uk-section-primary:not(.uk-preserve-color) .uk-search-default .uk-search-input,.uk-section-secondary:not(.uk-preserve-color) .uk-search-default .uk-search-input,.uk-tile-primary:not(.uk-preserve-color) .uk-search-default .uk-search-input,.uk-tile-secondary:not(.uk-preserve-color) .uk-search-default .uk-search-input{background-color:transparent;border-color:rgba(255,255,255,.2)}.uk-card-primary.uk-card-body .uk-search-default .uk-search-input:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-search-default .uk-search-input:focus,.uk-card-secondary.uk-card-body .uk-search-default .uk-search-input:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-search-default .uk-search-input:focus,.uk-light .uk-search-default .uk-search-input:focus,.uk-offcanvas-bar .uk-search-default .uk-search-input:focus,.uk-overlay-primary .uk-search-default .uk-search-input:focus,.uk-section-primary:not(.uk-preserve-color) .uk-search-default .uk-search-input:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-search-default .uk-search-input:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-search-default .uk-search-input:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-search-default .uk-search-input:focus{background-color:transparent}.uk-card-primary.uk-card-body .uk-search-navbar .uk-search-input,.uk-card-primary>:not([class*=uk-card-media]) .uk-search-navbar .uk-search-input,.uk-card-secondary.uk-card-body .uk-search-navbar .uk-search-input,.uk-card-secondary>:not([class*=uk-card-media]) .uk-search-navbar .uk-search-input,.uk-light .uk-search-navbar .uk-search-input,.uk-offcanvas-bar .uk-search-navbar .uk-search-input,.uk-overlay-primary .uk-search-navbar .uk-search-input,.uk-section-primary:not(.uk-preserve-color) .uk-search-navbar .uk-search-input,.uk-section-secondary:not(.uk-preserve-color) .uk-search-navbar .uk-search-input,.uk-tile-primary:not(.uk-preserve-color) .uk-search-navbar .uk-search-input,.uk-tile-secondary:not(.uk-preserve-color) .uk-search-navbar .uk-search-input{background-color:transparent}.uk-card-primary.uk-card-body .uk-search-large .uk-search-input,.uk-card-primary>:not([class*=uk-card-media]) .uk-search-large .uk-search-input,.uk-card-secondary.uk-card-body .uk-search-large .uk-search-input,.uk-card-secondary>:not([class*=uk-card-media]) .uk-search-large .uk-search-input,.uk-light .uk-search-large .uk-search-input,.uk-offcanvas-bar .uk-search-large .uk-search-input,.uk-overlay-primary .uk-search-large .uk-search-input,.uk-section-primary:not(.uk-preserve-color) .uk-search-large .uk-search-input,.uk-section-secondary:not(.uk-preserve-color) .uk-search-large .uk-search-input,.uk-tile-primary:not(.uk-preserve-color) .uk-search-large .uk-search-input,.uk-tile-secondary:not(.uk-preserve-color) .uk-search-large .uk-search-input{background-color:transparent}.uk-card-primary.uk-card-body .uk-search-toggle,.uk-card-primary>:not([class*=uk-card-media]) .uk-search-toggle,.uk-card-secondary.uk-card-body .uk-search-toggle,.uk-card-secondary>:not([class*=uk-card-media]) .uk-search-toggle,.uk-light .uk-search-toggle,.uk-offcanvas-bar .uk-search-toggle,.uk-overlay-primary .uk-search-toggle,.uk-section-primary:not(.uk-preserve-color) .uk-search-toggle,.uk-section-secondary:not(.uk-preserve-color) .uk-search-toggle,.uk-tile-primary:not(.uk-preserve-color) .uk-search-toggle,.uk-tile-secondary:not(.uk-preserve-color) .uk-search-toggle{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-search-toggle:focus,.uk-card-primary.uk-card-body .uk-search-toggle:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-search-toggle:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-search-toggle:hover,.uk-card-secondary.uk-card-body .uk-search-toggle:focus,.uk-card-secondary.uk-card-body .uk-search-toggle:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-search-toggle:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-search-toggle:hover,.uk-light .uk-search-toggle:focus,.uk-light .uk-search-toggle:hover,.uk-offcanvas-bar .uk-search-toggle:focus,.uk-offcanvas-bar .uk-search-toggle:hover,.uk-overlay-primary .uk-search-toggle:focus,.uk-overlay-primary .uk-search-toggle:hover,.uk-section-primary:not(.uk-preserve-color) .uk-search-toggle:focus,.uk-section-primary:not(.uk-preserve-color) .uk-search-toggle:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-search-toggle:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-search-toggle:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-search-toggle:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-search-toggle:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-search-toggle:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-search-toggle:hover{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-nav-parent-icon>.uk-parent>a::after,.uk-card-primary>:not([class*=uk-card-media]) .uk-nav-parent-icon>.uk-parent>a::after,.uk-card-secondary.uk-card-body .uk-nav-parent-icon>.uk-parent>a::after,.uk-card-secondary>:not([class*=uk-card-media]) .uk-nav-parent-icon>.uk-parent>a::after,.uk-light .uk-nav-parent-icon>.uk-parent>a::after,.uk-offcanvas-bar .uk-nav-parent-icon>.uk-parent>a::after,.uk-overlay-primary .uk-nav-parent-icon>.uk-parent>a::after,.uk-section-primary:not(.uk-preserve-color) .uk-nav-parent-icon>.uk-parent>a::after,.uk-section-secondary:not(.uk-preserve-color) .uk-nav-parent-icon>.uk-parent>a::after,.uk-tile-primary:not(.uk-preserve-color) .uk-nav-parent-icon>.uk-parent>a::after,.uk-tile-secondary:not(.uk-preserve-color) .uk-nav-parent-icon>.uk-parent>a::after{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22rgba%28255,%20255,%20255,%200.7%29%22%20stroke-width%3D%221.1%22%20points%3D%2210%201%204%207%2010%2013%22%3E%3C%2Fpolyline%3E%0A%3C%2Fsvg%3E\")}.uk-card-primary.uk-card-body .uk-nav-parent-icon>.uk-parent.uk-open>a::after,.uk-card-primary>:not([class*=uk-card-media]) .uk-nav-parent-icon>.uk-parent.uk-open>a::after,.uk-card-secondary.uk-card-body .uk-nav-parent-icon>.uk-parent.uk-open>a::after,.uk-card-secondary>:not([class*=uk-card-media]) .uk-nav-parent-icon>.uk-parent.uk-open>a::after,.uk-light .uk-nav-parent-icon>.uk-parent.uk-open>a::after,.uk-offcanvas-bar .uk-nav-parent-icon>.uk-parent.uk-open>a::after,.uk-overlay-primary .uk-nav-parent-icon>.uk-parent.uk-open>a::after,.uk-section-primary:not(.uk-preserve-color) .uk-nav-parent-icon>.uk-parent.uk-open>a::after,.uk-section-secondary:not(.uk-preserve-color) .uk-nav-parent-icon>.uk-parent.uk-open>a::after,.uk-tile-primary:not(.uk-preserve-color) .uk-nav-parent-icon>.uk-parent.uk-open>a::after,.uk-tile-secondary:not(.uk-preserve-color) .uk-nav-parent-icon>.uk-parent.uk-open>a::after{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22rgba%28255,%20255,%20255,%200.7%29%22%20stroke-width%3D%221.1%22%20points%3D%221%204%207%2010%2013%204%22%3E%3C%2Fpolyline%3E%0A%3C%2Fsvg%3E\")}.uk-card-primary.uk-card-body .uk-nav-default>li>a,.uk-card-primary>:not([class*=uk-card-media]) .uk-nav-default>li>a,.uk-card-secondary.uk-card-body .uk-nav-default>li>a,.uk-card-secondary>:not([class*=uk-card-media]) .uk-nav-default>li>a,.uk-light .uk-nav-default>li>a,.uk-offcanvas-bar .uk-nav-default>li>a,.uk-overlay-primary .uk-nav-default>li>a,.uk-section-primary:not(.uk-preserve-color) .uk-nav-default>li>a,.uk-section-secondary:not(.uk-preserve-color) .uk-nav-default>li>a,.uk-tile-primary:not(.uk-preserve-color) .uk-nav-default>li>a,.uk-tile-secondary:not(.uk-preserve-color) .uk-nav-default>li>a{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-nav-default>li>a:focus,.uk-card-primary.uk-card-body .uk-nav-default>li>a:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-nav-default>li>a:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-nav-default>li>a:hover,.uk-card-secondary.uk-card-body .uk-nav-default>li>a:focus,.uk-card-secondary.uk-card-body .uk-nav-default>li>a:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-nav-default>li>a:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-nav-default>li>a:hover,.uk-light .uk-nav-default>li>a:focus,.uk-light .uk-nav-default>li>a:hover,.uk-offcanvas-bar .uk-nav-default>li>a:focus,.uk-offcanvas-bar .uk-nav-default>li>a:hover,.uk-overlay-primary .uk-nav-default>li>a:focus,.uk-overlay-primary .uk-nav-default>li>a:hover,.uk-section-primary:not(.uk-preserve-color) .uk-nav-default>li>a:focus,.uk-section-primary:not(.uk-preserve-color) .uk-nav-default>li>a:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-nav-default>li>a:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-nav-default>li>a:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-nav-default>li>a:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-nav-default>li>a:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-nav-default>li>a:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-nav-default>li>a:hover{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-nav-default>li.uk-active>a,.uk-card-primary>:not([class*=uk-card-media]) .uk-nav-default>li.uk-active>a,.uk-card-secondary.uk-card-body .uk-nav-default>li.uk-active>a,.uk-card-secondary>:not([class*=uk-card-media]) .uk-nav-default>li.uk-active>a,.uk-light .uk-nav-default>li.uk-active>a,.uk-offcanvas-bar .uk-nav-default>li.uk-active>a,.uk-overlay-primary .uk-nav-default>li.uk-active>a,.uk-section-primary:not(.uk-preserve-color) .uk-nav-default>li.uk-active>a,.uk-section-secondary:not(.uk-preserve-color) .uk-nav-default>li.uk-active>a,.uk-tile-primary:not(.uk-preserve-color) .uk-nav-default>li.uk-active>a,.uk-tile-secondary:not(.uk-preserve-color) .uk-nav-default>li.uk-active>a{color:#fff}.uk-card-primary.uk-card-body .uk-nav-default .uk-nav-header,.uk-card-primary>:not([class*=uk-card-media]) .uk-nav-default .uk-nav-header,.uk-card-secondary.uk-card-body .uk-nav-default .uk-nav-header,.uk-card-secondary>:not([class*=uk-card-media]) .uk-nav-default .uk-nav-header,.uk-light .uk-nav-default .uk-nav-header,.uk-offcanvas-bar .uk-nav-default .uk-nav-header,.uk-overlay-primary .uk-nav-default .uk-nav-header,.uk-section-primary:not(.uk-preserve-color) .uk-nav-default .uk-nav-header,.uk-section-secondary:not(.uk-preserve-color) .uk-nav-default .uk-nav-header,.uk-tile-primary:not(.uk-preserve-color) .uk-nav-default .uk-nav-header,.uk-tile-secondary:not(.uk-preserve-color) .uk-nav-default .uk-nav-header{color:#fff}.uk-card-primary.uk-card-body .uk-nav-default .uk-nav-divider,.uk-card-primary>:not([class*=uk-card-media]) .uk-nav-default .uk-nav-divider,.uk-card-secondary.uk-card-body .uk-nav-default .uk-nav-divider,.uk-card-secondary>:not([class*=uk-card-media]) .uk-nav-default .uk-nav-divider,.uk-light .uk-nav-default .uk-nav-divider,.uk-offcanvas-bar .uk-nav-default .uk-nav-divider,.uk-overlay-primary .uk-nav-default .uk-nav-divider,.uk-section-primary:not(.uk-preserve-color) .uk-nav-default .uk-nav-divider,.uk-section-secondary:not(.uk-preserve-color) .uk-nav-default .uk-nav-divider,.uk-tile-primary:not(.uk-preserve-color) .uk-nav-default .uk-nav-divider,.uk-tile-secondary:not(.uk-preserve-color) .uk-nav-default .uk-nav-divider{border-top-color:rgba(255,255,255,.2)}.uk-card-primary.uk-card-body .uk-nav-default .uk-nav-sub a,.uk-card-primary>:not([class*=uk-card-media]) .uk-nav-default .uk-nav-sub a,.uk-card-secondary.uk-card-body .uk-nav-default .uk-nav-sub a,.uk-card-secondary>:not([class*=uk-card-media]) .uk-nav-default .uk-nav-sub a,.uk-light .uk-nav-default .uk-nav-sub a,.uk-offcanvas-bar .uk-nav-default .uk-nav-sub a,.uk-overlay-primary .uk-nav-default .uk-nav-sub a,.uk-section-primary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub a,.uk-section-secondary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub a,.uk-tile-primary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub a,.uk-tile-secondary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub a{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-nav-default .uk-nav-sub a:focus,.uk-card-primary.uk-card-body .uk-nav-default .uk-nav-sub a:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-nav-default .uk-nav-sub a:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-nav-default .uk-nav-sub a:hover,.uk-card-secondary.uk-card-body .uk-nav-default .uk-nav-sub a:focus,.uk-card-secondary.uk-card-body .uk-nav-default .uk-nav-sub a:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-nav-default .uk-nav-sub a:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-nav-default .uk-nav-sub a:hover,.uk-light .uk-nav-default .uk-nav-sub a:focus,.uk-light .uk-nav-default .uk-nav-sub a:hover,.uk-offcanvas-bar .uk-nav-default .uk-nav-sub a:focus,.uk-offcanvas-bar .uk-nav-default .uk-nav-sub a:hover,.uk-overlay-primary .uk-nav-default .uk-nav-sub a:focus,.uk-overlay-primary .uk-nav-default .uk-nav-sub a:hover,.uk-section-primary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub a:focus,.uk-section-primary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub a:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub a:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub a:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub a:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub a:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub a:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub a:hover{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-nav-primary>li>a,.uk-card-primary>:not([class*=uk-card-media]) .uk-nav-primary>li>a,.uk-card-secondary.uk-card-body .uk-nav-primary>li>a,.uk-card-secondary>:not([class*=uk-card-media]) .uk-nav-primary>li>a,.uk-light .uk-nav-primary>li>a,.uk-offcanvas-bar .uk-nav-primary>li>a,.uk-overlay-primary .uk-nav-primary>li>a,.uk-section-primary:not(.uk-preserve-color) .uk-nav-primary>li>a,.uk-section-secondary:not(.uk-preserve-color) .uk-nav-primary>li>a,.uk-tile-primary:not(.uk-preserve-color) .uk-nav-primary>li>a,.uk-tile-secondary:not(.uk-preserve-color) .uk-nav-primary>li>a{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-nav-primary>li>a:focus,.uk-card-primary.uk-card-body .uk-nav-primary>li>a:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-nav-primary>li>a:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-nav-primary>li>a:hover,.uk-card-secondary.uk-card-body .uk-nav-primary>li>a:focus,.uk-card-secondary.uk-card-body .uk-nav-primary>li>a:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-nav-primary>li>a:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-nav-primary>li>a:hover,.uk-light .uk-nav-primary>li>a:focus,.uk-light .uk-nav-primary>li>a:hover,.uk-offcanvas-bar .uk-nav-primary>li>a:focus,.uk-offcanvas-bar .uk-nav-primary>li>a:hover,.uk-overlay-primary .uk-nav-primary>li>a:focus,.uk-overlay-primary .uk-nav-primary>li>a:hover,.uk-section-primary:not(.uk-preserve-color) .uk-nav-primary>li>a:focus,.uk-section-primary:not(.uk-preserve-color) .uk-nav-primary>li>a:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-nav-primary>li>a:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-nav-primary>li>a:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-nav-primary>li>a:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-nav-primary>li>a:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-nav-primary>li>a:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-nav-primary>li>a:hover{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-nav-primary>li.uk-active>a,.uk-card-primary>:not([class*=uk-card-media]) .uk-nav-primary>li.uk-active>a,.uk-card-secondary.uk-card-body .uk-nav-primary>li.uk-active>a,.uk-card-secondary>:not([class*=uk-card-media]) .uk-nav-primary>li.uk-active>a,.uk-light .uk-nav-primary>li.uk-active>a,.uk-offcanvas-bar .uk-nav-primary>li.uk-active>a,.uk-overlay-primary .uk-nav-primary>li.uk-active>a,.uk-section-primary:not(.uk-preserve-color) .uk-nav-primary>li.uk-active>a,.uk-section-secondary:not(.uk-preserve-color) .uk-nav-primary>li.uk-active>a,.uk-tile-primary:not(.uk-preserve-color) .uk-nav-primary>li.uk-active>a,.uk-tile-secondary:not(.uk-preserve-color) .uk-nav-primary>li.uk-active>a{color:#fff}.uk-card-primary.uk-card-body .uk-nav-primary .uk-nav-header,.uk-card-primary>:not([class*=uk-card-media]) .uk-nav-primary .uk-nav-header,.uk-card-secondary.uk-card-body .uk-nav-primary .uk-nav-header,.uk-card-secondary>:not([class*=uk-card-media]) .uk-nav-primary .uk-nav-header,.uk-light .uk-nav-primary .uk-nav-header,.uk-offcanvas-bar .uk-nav-primary .uk-nav-header,.uk-overlay-primary .uk-nav-primary .uk-nav-header,.uk-section-primary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-header,.uk-section-secondary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-header,.uk-tile-primary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-header,.uk-tile-secondary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-header{color:#fff}.uk-card-primary.uk-card-body .uk-nav-primary .uk-nav-divider,.uk-card-primary>:not([class*=uk-card-media]) .uk-nav-primary .uk-nav-divider,.uk-card-secondary.uk-card-body .uk-nav-primary .uk-nav-divider,.uk-card-secondary>:not([class*=uk-card-media]) .uk-nav-primary .uk-nav-divider,.uk-light .uk-nav-primary .uk-nav-divider,.uk-offcanvas-bar .uk-nav-primary .uk-nav-divider,.uk-overlay-primary .uk-nav-primary .uk-nav-divider,.uk-section-primary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-divider,.uk-section-secondary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-divider,.uk-tile-primary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-divider,.uk-tile-secondary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-divider{border-top-color:rgba(255,255,255,.2)}.uk-card-primary.uk-card-body .uk-nav-primary .uk-nav-sub a,.uk-card-primary>:not([class*=uk-card-media]) .uk-nav-primary .uk-nav-sub a,.uk-card-secondary.uk-card-body .uk-nav-primary .uk-nav-sub a,.uk-card-secondary>:not([class*=uk-card-media]) .uk-nav-primary .uk-nav-sub a,.uk-light .uk-nav-primary .uk-nav-sub a,.uk-offcanvas-bar .uk-nav-primary .uk-nav-sub a,.uk-overlay-primary .uk-nav-primary .uk-nav-sub a,.uk-section-primary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub a,.uk-section-secondary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub a,.uk-tile-primary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub a,.uk-tile-secondary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub a{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-nav-primary .uk-nav-sub a:focus,.uk-card-primary.uk-card-body .uk-nav-primary .uk-nav-sub a:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-nav-primary .uk-nav-sub a:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-nav-primary .uk-nav-sub a:hover,.uk-card-secondary.uk-card-body .uk-nav-primary .uk-nav-sub a:focus,.uk-card-secondary.uk-card-body .uk-nav-primary .uk-nav-sub a:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-nav-primary .uk-nav-sub a:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-nav-primary .uk-nav-sub a:hover,.uk-light .uk-nav-primary .uk-nav-sub a:focus,.uk-light .uk-nav-primary .uk-nav-sub a:hover,.uk-offcanvas-bar .uk-nav-primary .uk-nav-sub a:focus,.uk-offcanvas-bar .uk-nav-primary .uk-nav-sub a:hover,.uk-overlay-primary .uk-nav-primary .uk-nav-sub a:focus,.uk-overlay-primary .uk-nav-primary .uk-nav-sub a:hover,.uk-section-primary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub a:focus,.uk-section-primary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub a:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub a:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub a:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub a:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub a:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub a:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub a:hover{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-navbar-nav>li>a,.uk-card-primary>:not([class*=uk-card-media]) .uk-navbar-nav>li>a,.uk-card-secondary.uk-card-body .uk-navbar-nav>li>a,.uk-card-secondary>:not([class*=uk-card-media]) .uk-navbar-nav>li>a,.uk-light .uk-navbar-nav>li>a,.uk-offcanvas-bar .uk-navbar-nav>li>a,.uk-overlay-primary .uk-navbar-nav>li>a,.uk-section-primary:not(.uk-preserve-color) .uk-navbar-nav>li>a,.uk-section-secondary:not(.uk-preserve-color) .uk-navbar-nav>li>a,.uk-tile-primary:not(.uk-preserve-color) .uk-navbar-nav>li>a,.uk-tile-secondary:not(.uk-preserve-color) .uk-navbar-nav>li>a{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-navbar-nav>li:hover>a,.uk-card-primary.uk-card-body .uk-navbar-nav>li>a.uk-open,.uk-card-primary.uk-card-body .uk-navbar-nav>li>a:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-navbar-nav>li:hover>a,.uk-card-primary>:not([class*=uk-card-media]) .uk-navbar-nav>li>a.uk-open,.uk-card-primary>:not([class*=uk-card-media]) .uk-navbar-nav>li>a:focus,.uk-card-secondary.uk-card-body .uk-navbar-nav>li:hover>a,.uk-card-secondary.uk-card-body .uk-navbar-nav>li>a.uk-open,.uk-card-secondary.uk-card-body .uk-navbar-nav>li>a:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-navbar-nav>li:hover>a,.uk-card-secondary>:not([class*=uk-card-media]) .uk-navbar-nav>li>a.uk-open,.uk-card-secondary>:not([class*=uk-card-media]) .uk-navbar-nav>li>a:focus,.uk-light .uk-navbar-nav>li:hover>a,.uk-light .uk-navbar-nav>li>a.uk-open,.uk-light .uk-navbar-nav>li>a:focus,.uk-offcanvas-bar .uk-navbar-nav>li:hover>a,.uk-offcanvas-bar .uk-navbar-nav>li>a.uk-open,.uk-offcanvas-bar .uk-navbar-nav>li>a:focus,.uk-overlay-primary .uk-navbar-nav>li:hover>a,.uk-overlay-primary .uk-navbar-nav>li>a.uk-open,.uk-overlay-primary .uk-navbar-nav>li>a:focus,.uk-section-primary:not(.uk-preserve-color) .uk-navbar-nav>li:hover>a,.uk-section-primary:not(.uk-preserve-color) .uk-navbar-nav>li>a.uk-open,.uk-section-primary:not(.uk-preserve-color) .uk-navbar-nav>li>a:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-navbar-nav>li:hover>a,.uk-section-secondary:not(.uk-preserve-color) .uk-navbar-nav>li>a.uk-open,.uk-section-secondary:not(.uk-preserve-color) .uk-navbar-nav>li>a:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-navbar-nav>li:hover>a,.uk-tile-primary:not(.uk-preserve-color) .uk-navbar-nav>li>a.uk-open,.uk-tile-primary:not(.uk-preserve-color) .uk-navbar-nav>li>a:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-navbar-nav>li:hover>a,.uk-tile-secondary:not(.uk-preserve-color) .uk-navbar-nav>li>a.uk-open,.uk-tile-secondary:not(.uk-preserve-color) .uk-navbar-nav>li>a:focus{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-navbar-nav>li>a:active,.uk-card-primary>:not([class*=uk-card-media]) .uk-navbar-nav>li>a:active,.uk-card-secondary.uk-card-body .uk-navbar-nav>li>a:active,.uk-card-secondary>:not([class*=uk-card-media]) .uk-navbar-nav>li>a:active,.uk-light .uk-navbar-nav>li>a:active,.uk-offcanvas-bar .uk-navbar-nav>li>a:active,.uk-overlay-primary .uk-navbar-nav>li>a:active,.uk-section-primary:not(.uk-preserve-color) .uk-navbar-nav>li>a:active,.uk-section-secondary:not(.uk-preserve-color) .uk-navbar-nav>li>a:active,.uk-tile-primary:not(.uk-preserve-color) .uk-navbar-nav>li>a:active,.uk-tile-secondary:not(.uk-preserve-color) .uk-navbar-nav>li>a:active{color:#fff}.uk-card-primary.uk-card-body .uk-navbar-nav>li.uk-active>a,.uk-card-primary>:not([class*=uk-card-media]) .uk-navbar-nav>li.uk-active>a,.uk-card-secondary.uk-card-body .uk-navbar-nav>li.uk-active>a,.uk-card-secondary>:not([class*=uk-card-media]) .uk-navbar-nav>li.uk-active>a,.uk-light .uk-navbar-nav>li.uk-active>a,.uk-offcanvas-bar .uk-navbar-nav>li.uk-active>a,.uk-overlay-primary .uk-navbar-nav>li.uk-active>a,.uk-section-primary:not(.uk-preserve-color) .uk-navbar-nav>li.uk-active>a,.uk-section-secondary:not(.uk-preserve-color) .uk-navbar-nav>li.uk-active>a,.uk-tile-primary:not(.uk-preserve-color) .uk-navbar-nav>li.uk-active>a,.uk-tile-secondary:not(.uk-preserve-color) .uk-navbar-nav>li.uk-active>a{color:#fff}.uk-card-primary.uk-card-body .uk-navbar-item,.uk-card-primary>:not([class*=uk-card-media]) .uk-navbar-item,.uk-card-secondary.uk-card-body .uk-navbar-item,.uk-card-secondary>:not([class*=uk-card-media]) .uk-navbar-item,.uk-light .uk-navbar-item,.uk-offcanvas-bar .uk-navbar-item,.uk-overlay-primary .uk-navbar-item,.uk-section-primary:not(.uk-preserve-color) .uk-navbar-item,.uk-section-secondary:not(.uk-preserve-color) .uk-navbar-item,.uk-tile-primary:not(.uk-preserve-color) .uk-navbar-item,.uk-tile-secondary:not(.uk-preserve-color) .uk-navbar-item{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-navbar-toggle,.uk-card-primary>:not([class*=uk-card-media]) .uk-navbar-toggle,.uk-card-secondary.uk-card-body .uk-navbar-toggle,.uk-card-secondary>:not([class*=uk-card-media]) .uk-navbar-toggle,.uk-light .uk-navbar-toggle,.uk-offcanvas-bar .uk-navbar-toggle,.uk-overlay-primary .uk-navbar-toggle,.uk-section-primary:not(.uk-preserve-color) .uk-navbar-toggle,.uk-section-secondary:not(.uk-preserve-color) .uk-navbar-toggle,.uk-tile-primary:not(.uk-preserve-color) .uk-navbar-toggle,.uk-tile-secondary:not(.uk-preserve-color) .uk-navbar-toggle{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-navbar-toggle.uk-open,.uk-card-primary.uk-card-body .uk-navbar-toggle:focus,.uk-card-primary.uk-card-body .uk-navbar-toggle:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-navbar-toggle.uk-open,.uk-card-primary>:not([class*=uk-card-media]) .uk-navbar-toggle:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-navbar-toggle:hover,.uk-card-secondary.uk-card-body .uk-navbar-toggle.uk-open,.uk-card-secondary.uk-card-body .uk-navbar-toggle:focus,.uk-card-secondary.uk-card-body .uk-navbar-toggle:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-navbar-toggle.uk-open,.uk-card-secondary>:not([class*=uk-card-media]) .uk-navbar-toggle:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-navbar-toggle:hover,.uk-light .uk-navbar-toggle.uk-open,.uk-light .uk-navbar-toggle:focus,.uk-light .uk-navbar-toggle:hover,.uk-offcanvas-bar .uk-navbar-toggle.uk-open,.uk-offcanvas-bar .uk-navbar-toggle:focus,.uk-offcanvas-bar .uk-navbar-toggle:hover,.uk-overlay-primary .uk-navbar-toggle.uk-open,.uk-overlay-primary .uk-navbar-toggle:focus,.uk-overlay-primary .uk-navbar-toggle:hover,.uk-section-primary:not(.uk-preserve-color) .uk-navbar-toggle.uk-open,.uk-section-primary:not(.uk-preserve-color) .uk-navbar-toggle:focus,.uk-section-primary:not(.uk-preserve-color) .uk-navbar-toggle:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-navbar-toggle.uk-open,.uk-section-secondary:not(.uk-preserve-color) .uk-navbar-toggle:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-navbar-toggle:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-navbar-toggle.uk-open,.uk-tile-primary:not(.uk-preserve-color) .uk-navbar-toggle:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-navbar-toggle:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-navbar-toggle.uk-open,.uk-tile-secondary:not(.uk-preserve-color) .uk-navbar-toggle:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-navbar-toggle:hover{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-subnav>*>:first-child,.uk-card-primary>:not([class*=uk-card-media]) .uk-subnav>*>:first-child,.uk-card-secondary.uk-card-body .uk-subnav>*>:first-child,.uk-card-secondary>:not([class*=uk-card-media]) .uk-subnav>*>:first-child,.uk-light .uk-subnav>*>:first-child,.uk-offcanvas-bar .uk-subnav>*>:first-child,.uk-overlay-primary .uk-subnav>*>:first-child,.uk-section-primary:not(.uk-preserve-color) .uk-subnav>*>:first-child,.uk-section-secondary:not(.uk-preserve-color) .uk-subnav>*>:first-child,.uk-tile-primary:not(.uk-preserve-color) .uk-subnav>*>:first-child,.uk-tile-secondary:not(.uk-preserve-color) .uk-subnav>*>:first-child{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-subnav>*>a:focus,.uk-card-primary.uk-card-body .uk-subnav>*>a:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-subnav>*>a:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-subnav>*>a:hover,.uk-card-secondary.uk-card-body .uk-subnav>*>a:focus,.uk-card-secondary.uk-card-body .uk-subnav>*>a:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-subnav>*>a:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-subnav>*>a:hover,.uk-light .uk-subnav>*>a:focus,.uk-light .uk-subnav>*>a:hover,.uk-offcanvas-bar .uk-subnav>*>a:focus,.uk-offcanvas-bar .uk-subnav>*>a:hover,.uk-overlay-primary .uk-subnav>*>a:focus,.uk-overlay-primary .uk-subnav>*>a:hover,.uk-section-primary:not(.uk-preserve-color) .uk-subnav>*>a:focus,.uk-section-primary:not(.uk-preserve-color) .uk-subnav>*>a:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-subnav>*>a:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-subnav>*>a:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-subnav>*>a:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-subnav>*>a:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-subnav>*>a:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-subnav>*>a:hover{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-subnav>.uk-active>a,.uk-card-primary>:not([class*=uk-card-media]) .uk-subnav>.uk-active>a,.uk-card-secondary.uk-card-body .uk-subnav>.uk-active>a,.uk-card-secondary>:not([class*=uk-card-media]) .uk-subnav>.uk-active>a,.uk-light .uk-subnav>.uk-active>a,.uk-offcanvas-bar .uk-subnav>.uk-active>a,.uk-overlay-primary .uk-subnav>.uk-active>a,.uk-section-primary:not(.uk-preserve-color) .uk-subnav>.uk-active>a,.uk-section-secondary:not(.uk-preserve-color) .uk-subnav>.uk-active>a,.uk-tile-primary:not(.uk-preserve-color) .uk-subnav>.uk-active>a,.uk-tile-secondary:not(.uk-preserve-color) .uk-subnav>.uk-active>a{color:#fff}.uk-card-primary.uk-card-body .uk-subnav-divider>:nth-child(n+2):not(.uk-first-column)::before,.uk-card-primary>:not([class*=uk-card-media]) .uk-subnav-divider>:nth-child(n+2):not(.uk-first-column)::before,.uk-card-secondary.uk-card-body .uk-subnav-divider>:nth-child(n+2):not(.uk-first-column)::before,.uk-card-secondary>:not([class*=uk-card-media]) .uk-subnav-divider>:nth-child(n+2):not(.uk-first-column)::before,.uk-light .uk-subnav-divider>:nth-child(n+2):not(.uk-first-column)::before,.uk-offcanvas-bar .uk-subnav-divider>:nth-child(n+2):not(.uk-first-column)::before,.uk-overlay-primary .uk-subnav-divider>:nth-child(n+2):not(.uk-first-column)::before,.uk-section-primary:not(.uk-preserve-color) .uk-subnav-divider>:nth-child(n+2):not(.uk-first-column)::before,.uk-section-secondary:not(.uk-preserve-color) .uk-subnav-divider>:nth-child(n+2):not(.uk-first-column)::before,.uk-tile-primary:not(.uk-preserve-color) .uk-subnav-divider>:nth-child(n+2):not(.uk-first-column)::before,.uk-tile-secondary:not(.uk-preserve-color) .uk-subnav-divider>:nth-child(n+2):not(.uk-first-column)::before{border-left-color:rgba(255,255,255,.2)}.uk-card-primary.uk-card-body .uk-subnav-pill>*>:first-child,.uk-card-primary>:not([class*=uk-card-media]) .uk-subnav-pill>*>:first-child,.uk-card-secondary.uk-card-body .uk-subnav-pill>*>:first-child,.uk-card-secondary>:not([class*=uk-card-media]) .uk-subnav-pill>*>:first-child,.uk-light .uk-subnav-pill>*>:first-child,.uk-offcanvas-bar .uk-subnav-pill>*>:first-child,.uk-overlay-primary .uk-subnav-pill>*>:first-child,.uk-section-primary:not(.uk-preserve-color) .uk-subnav-pill>*>:first-child,.uk-section-secondary:not(.uk-preserve-color) .uk-subnav-pill>*>:first-child,.uk-tile-primary:not(.uk-preserve-color) .uk-subnav-pill>*>:first-child,.uk-tile-secondary:not(.uk-preserve-color) .uk-subnav-pill>*>:first-child{background-color:transparent;color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-subnav-pill>*>a:focus,.uk-card-primary.uk-card-body .uk-subnav-pill>*>a:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-subnav-pill>*>a:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-subnav-pill>*>a:hover,.uk-card-secondary.uk-card-body .uk-subnav-pill>*>a:focus,.uk-card-secondary.uk-card-body .uk-subnav-pill>*>a:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-subnav-pill>*>a:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-subnav-pill>*>a:hover,.uk-light .uk-subnav-pill>*>a:focus,.uk-light .uk-subnav-pill>*>a:hover,.uk-offcanvas-bar .uk-subnav-pill>*>a:focus,.uk-offcanvas-bar .uk-subnav-pill>*>a:hover,.uk-overlay-primary .uk-subnav-pill>*>a:focus,.uk-overlay-primary .uk-subnav-pill>*>a:hover,.uk-section-primary:not(.uk-preserve-color) .uk-subnav-pill>*>a:focus,.uk-section-primary:not(.uk-preserve-color) .uk-subnav-pill>*>a:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-subnav-pill>*>a:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-subnav-pill>*>a:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-subnav-pill>*>a:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-subnav-pill>*>a:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-subnav-pill>*>a:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-subnav-pill>*>a:hover{background-color:rgba(255,255,255,.1);color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-subnav-pill>*>a:active,.uk-card-primary>:not([class*=uk-card-media]) .uk-subnav-pill>*>a:active,.uk-card-secondary.uk-card-body .uk-subnav-pill>*>a:active,.uk-card-secondary>:not([class*=uk-card-media]) .uk-subnav-pill>*>a:active,.uk-light .uk-subnav-pill>*>a:active,.uk-offcanvas-bar .uk-subnav-pill>*>a:active,.uk-overlay-primary .uk-subnav-pill>*>a:active,.uk-section-primary:not(.uk-preserve-color) .uk-subnav-pill>*>a:active,.uk-section-secondary:not(.uk-preserve-color) .uk-subnav-pill>*>a:active,.uk-tile-primary:not(.uk-preserve-color) .uk-subnav-pill>*>a:active,.uk-tile-secondary:not(.uk-preserve-color) .uk-subnav-pill>*>a:active{background-color:rgba(255,255,255,.1);color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-subnav-pill>.uk-active>a,.uk-card-primary>:not([class*=uk-card-media]) .uk-subnav-pill>.uk-active>a,.uk-card-secondary.uk-card-body .uk-subnav-pill>.uk-active>a,.uk-card-secondary>:not([class*=uk-card-media]) .uk-subnav-pill>.uk-active>a,.uk-light .uk-subnav-pill>.uk-active>a,.uk-offcanvas-bar .uk-subnav-pill>.uk-active>a,.uk-overlay-primary .uk-subnav-pill>.uk-active>a,.uk-section-primary:not(.uk-preserve-color) .uk-subnav-pill>.uk-active>a,.uk-section-secondary:not(.uk-preserve-color) .uk-subnav-pill>.uk-active>a,.uk-tile-primary:not(.uk-preserve-color) .uk-subnav-pill>.uk-active>a,.uk-tile-secondary:not(.uk-preserve-color) .uk-subnav-pill>.uk-active>a{background-color:#fff;color:#666}.uk-card-primary.uk-card-body .uk-subnav>.uk-disabled>a,.uk-card-primary>:not([class*=uk-card-media]) .uk-subnav>.uk-disabled>a,.uk-card-secondary.uk-card-body .uk-subnav>.uk-disabled>a,.uk-card-secondary>:not([class*=uk-card-media]) .uk-subnav>.uk-disabled>a,.uk-light .uk-subnav>.uk-disabled>a,.uk-offcanvas-bar .uk-subnav>.uk-disabled>a,.uk-overlay-primary .uk-subnav>.uk-disabled>a,.uk-section-primary:not(.uk-preserve-color) .uk-subnav>.uk-disabled>a,.uk-section-secondary:not(.uk-preserve-color) .uk-subnav>.uk-disabled>a,.uk-tile-primary:not(.uk-preserve-color) .uk-subnav>.uk-disabled>a,.uk-tile-secondary:not(.uk-preserve-color) .uk-subnav>.uk-disabled>a{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-breadcrumb>*>*,.uk-card-primary>:not([class*=uk-card-media]) .uk-breadcrumb>*>*,.uk-card-secondary.uk-card-body .uk-breadcrumb>*>*,.uk-card-secondary>:not([class*=uk-card-media]) .uk-breadcrumb>*>*,.uk-light .uk-breadcrumb>*>*,.uk-offcanvas-bar .uk-breadcrumb>*>*,.uk-overlay-primary .uk-breadcrumb>*>*,.uk-section-primary:not(.uk-preserve-color) .uk-breadcrumb>*>*,.uk-section-secondary:not(.uk-preserve-color) .uk-breadcrumb>*>*,.uk-tile-primary:not(.uk-preserve-color) .uk-breadcrumb>*>*,.uk-tile-secondary:not(.uk-preserve-color) .uk-breadcrumb>*>*{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-breadcrumb>*>:focus,.uk-card-primary.uk-card-body .uk-breadcrumb>*>:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-breadcrumb>*>:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-breadcrumb>*>:hover,.uk-card-secondary.uk-card-body .uk-breadcrumb>*>:focus,.uk-card-secondary.uk-card-body .uk-breadcrumb>*>:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-breadcrumb>*>:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-breadcrumb>*>:hover,.uk-light .uk-breadcrumb>*>:focus,.uk-light .uk-breadcrumb>*>:hover,.uk-offcanvas-bar .uk-breadcrumb>*>:focus,.uk-offcanvas-bar .uk-breadcrumb>*>:hover,.uk-overlay-primary .uk-breadcrumb>*>:focus,.uk-overlay-primary .uk-breadcrumb>*>:hover,.uk-section-primary:not(.uk-preserve-color) .uk-breadcrumb>*>:focus,.uk-section-primary:not(.uk-preserve-color) .uk-breadcrumb>*>:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-breadcrumb>*>:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-breadcrumb>*>:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-breadcrumb>*>:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-breadcrumb>*>:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-breadcrumb>*>:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-breadcrumb>*>:hover{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-breadcrumb>:last-child>*,.uk-card-primary>:not([class*=uk-card-media]) .uk-breadcrumb>:last-child>*,.uk-card-secondary.uk-card-body .uk-breadcrumb>:last-child>*,.uk-card-secondary>:not([class*=uk-card-media]) .uk-breadcrumb>:last-child>*,.uk-light .uk-breadcrumb>:last-child>*,.uk-offcanvas-bar .uk-breadcrumb>:last-child>*,.uk-overlay-primary .uk-breadcrumb>:last-child>*,.uk-section-primary:not(.uk-preserve-color) .uk-breadcrumb>:last-child>*,.uk-section-secondary:not(.uk-preserve-color) .uk-breadcrumb>:last-child>*,.uk-tile-primary:not(.uk-preserve-color) .uk-breadcrumb>:last-child>*,.uk-tile-secondary:not(.uk-preserve-color) .uk-breadcrumb>:last-child>*{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-breadcrumb>:nth-child(n+2):not(.uk-first-column)::before,.uk-card-primary>:not([class*=uk-card-media]) .uk-breadcrumb>:nth-child(n+2):not(.uk-first-column)::before,.uk-card-secondary.uk-card-body .uk-breadcrumb>:nth-child(n+2):not(.uk-first-column)::before,.uk-card-secondary>:not([class*=uk-card-media]) .uk-breadcrumb>:nth-child(n+2):not(.uk-first-column)::before,.uk-light .uk-breadcrumb>:nth-child(n+2):not(.uk-first-column)::before,.uk-offcanvas-bar .uk-breadcrumb>:nth-child(n+2):not(.uk-first-column)::before,.uk-overlay-primary .uk-breadcrumb>:nth-child(n+2):not(.uk-first-column)::before,.uk-section-primary:not(.uk-preserve-color) .uk-breadcrumb>:nth-child(n+2):not(.uk-first-column)::before,.uk-section-secondary:not(.uk-preserve-color) .uk-breadcrumb>:nth-child(n+2):not(.uk-first-column)::before,.uk-tile-primary:not(.uk-preserve-color) .uk-breadcrumb>:nth-child(n+2):not(.uk-first-column)::before,.uk-tile-secondary:not(.uk-preserve-color) .uk-breadcrumb>:nth-child(n+2):not(.uk-first-column)::before{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-pagination>*>*,.uk-card-primary>:not([class*=uk-card-media]) .uk-pagination>*>*,.uk-card-secondary.uk-card-body .uk-pagination>*>*,.uk-card-secondary>:not([class*=uk-card-media]) .uk-pagination>*>*,.uk-light .uk-pagination>*>*,.uk-offcanvas-bar .uk-pagination>*>*,.uk-overlay-primary .uk-pagination>*>*,.uk-section-primary:not(.uk-preserve-color) .uk-pagination>*>*,.uk-section-secondary:not(.uk-preserve-color) .uk-pagination>*>*,.uk-tile-primary:not(.uk-preserve-color) .uk-pagination>*>*,.uk-tile-secondary:not(.uk-preserve-color) .uk-pagination>*>*{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-pagination>*>:focus,.uk-card-primary.uk-card-body .uk-pagination>*>:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-pagination>*>:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-pagination>*>:hover,.uk-card-secondary.uk-card-body .uk-pagination>*>:focus,.uk-card-secondary.uk-card-body .uk-pagination>*>:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-pagination>*>:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-pagination>*>:hover,.uk-light .uk-pagination>*>:focus,.uk-light .uk-pagination>*>:hover,.uk-offcanvas-bar .uk-pagination>*>:focus,.uk-offcanvas-bar .uk-pagination>*>:hover,.uk-overlay-primary .uk-pagination>*>:focus,.uk-overlay-primary .uk-pagination>*>:hover,.uk-section-primary:not(.uk-preserve-color) .uk-pagination>*>:focus,.uk-section-primary:not(.uk-preserve-color) .uk-pagination>*>:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-pagination>*>:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-pagination>*>:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-pagination>*>:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-pagination>*>:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-pagination>*>:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-pagination>*>:hover{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-pagination>.uk-active>*,.uk-card-primary>:not([class*=uk-card-media]) .uk-pagination>.uk-active>*,.uk-card-secondary.uk-card-body .uk-pagination>.uk-active>*,.uk-card-secondary>:not([class*=uk-card-media]) .uk-pagination>.uk-active>*,.uk-light .uk-pagination>.uk-active>*,.uk-offcanvas-bar .uk-pagination>.uk-active>*,.uk-overlay-primary .uk-pagination>.uk-active>*,.uk-section-primary:not(.uk-preserve-color) .uk-pagination>.uk-active>*,.uk-section-secondary:not(.uk-preserve-color) .uk-pagination>.uk-active>*,.uk-tile-primary:not(.uk-preserve-color) .uk-pagination>.uk-active>*,.uk-tile-secondary:not(.uk-preserve-color) .uk-pagination>.uk-active>*{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-pagination>.uk-disabled>*,.uk-card-primary>:not([class*=uk-card-media]) .uk-pagination>.uk-disabled>*,.uk-card-secondary.uk-card-body .uk-pagination>.uk-disabled>*,.uk-card-secondary>:not([class*=uk-card-media]) .uk-pagination>.uk-disabled>*,.uk-light .uk-pagination>.uk-disabled>*,.uk-offcanvas-bar .uk-pagination>.uk-disabled>*,.uk-overlay-primary .uk-pagination>.uk-disabled>*,.uk-section-primary:not(.uk-preserve-color) .uk-pagination>.uk-disabled>*,.uk-section-secondary:not(.uk-preserve-color) .uk-pagination>.uk-disabled>*,.uk-tile-primary:not(.uk-preserve-color) .uk-pagination>.uk-disabled>*,.uk-tile-secondary:not(.uk-preserve-color) .uk-pagination>.uk-disabled>*{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-tab::before,.uk-card-primary>:not([class*=uk-card-media]) .uk-tab::before,.uk-card-secondary.uk-card-body .uk-tab::before,.uk-card-secondary>:not([class*=uk-card-media]) .uk-tab::before,.uk-light .uk-tab::before,.uk-offcanvas-bar .uk-tab::before,.uk-overlay-primary .uk-tab::before,.uk-section-primary:not(.uk-preserve-color) .uk-tab::before,.uk-section-secondary:not(.uk-preserve-color) .uk-tab::before,.uk-tile-primary:not(.uk-preserve-color) .uk-tab::before,.uk-tile-secondary:not(.uk-preserve-color) .uk-tab::before{border-color:rgba(255,255,255,.2)}.uk-card-primary.uk-card-body .uk-tab>*>a,.uk-card-primary>:not([class*=uk-card-media]) .uk-tab>*>a,.uk-card-secondary.uk-card-body .uk-tab>*>a,.uk-card-secondary>:not([class*=uk-card-media]) .uk-tab>*>a,.uk-light .uk-tab>*>a,.uk-offcanvas-bar .uk-tab>*>a,.uk-overlay-primary .uk-tab>*>a,.uk-section-primary:not(.uk-preserve-color) .uk-tab>*>a,.uk-section-secondary:not(.uk-preserve-color) .uk-tab>*>a,.uk-tile-primary:not(.uk-preserve-color) .uk-tab>*>a,.uk-tile-secondary:not(.uk-preserve-color) .uk-tab>*>a{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-tab>*>a:focus,.uk-card-primary.uk-card-body .uk-tab>*>a:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-tab>*>a:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-tab>*>a:hover,.uk-card-secondary.uk-card-body .uk-tab>*>a:focus,.uk-card-secondary.uk-card-body .uk-tab>*>a:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-tab>*>a:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-tab>*>a:hover,.uk-light .uk-tab>*>a:focus,.uk-light .uk-tab>*>a:hover,.uk-offcanvas-bar .uk-tab>*>a:focus,.uk-offcanvas-bar .uk-tab>*>a:hover,.uk-overlay-primary .uk-tab>*>a:focus,.uk-overlay-primary .uk-tab>*>a:hover,.uk-section-primary:not(.uk-preserve-color) .uk-tab>*>a:focus,.uk-section-primary:not(.uk-preserve-color) .uk-tab>*>a:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-tab>*>a:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-tab>*>a:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-tab>*>a:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-tab>*>a:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-tab>*>a:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-tab>*>a:hover{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-tab>.uk-active>a,.uk-card-primary>:not([class*=uk-card-media]) .uk-tab>.uk-active>a,.uk-card-secondary.uk-card-body .uk-tab>.uk-active>a,.uk-card-secondary>:not([class*=uk-card-media]) .uk-tab>.uk-active>a,.uk-light .uk-tab>.uk-active>a,.uk-offcanvas-bar .uk-tab>.uk-active>a,.uk-overlay-primary .uk-tab>.uk-active>a,.uk-section-primary:not(.uk-preserve-color) .uk-tab>.uk-active>a,.uk-section-secondary:not(.uk-preserve-color) .uk-tab>.uk-active>a,.uk-tile-primary:not(.uk-preserve-color) .uk-tab>.uk-active>a,.uk-tile-secondary:not(.uk-preserve-color) .uk-tab>.uk-active>a{color:#fff;border-color:#fff}.uk-card-primary.uk-card-body .uk-tab>.uk-disabled>a,.uk-card-primary>:not([class*=uk-card-media]) .uk-tab>.uk-disabled>a,.uk-card-secondary.uk-card-body .uk-tab>.uk-disabled>a,.uk-card-secondary>:not([class*=uk-card-media]) .uk-tab>.uk-disabled>a,.uk-light .uk-tab>.uk-disabled>a,.uk-offcanvas-bar .uk-tab>.uk-disabled>a,.uk-overlay-primary .uk-tab>.uk-disabled>a,.uk-section-primary:not(.uk-preserve-color) .uk-tab>.uk-disabled>a,.uk-section-secondary:not(.uk-preserve-color) .uk-tab>.uk-disabled>a,.uk-tile-primary:not(.uk-preserve-color) .uk-tab>.uk-disabled>a,.uk-tile-secondary:not(.uk-preserve-color) .uk-tab>.uk-disabled>a{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-slidenav,.uk-card-primary>:not([class*=uk-card-media]) .uk-slidenav,.uk-card-secondary.uk-card-body .uk-slidenav,.uk-card-secondary>:not([class*=uk-card-media]) .uk-slidenav,.uk-light .uk-slidenav,.uk-offcanvas-bar .uk-slidenav,.uk-overlay-primary .uk-slidenav,.uk-section-primary:not(.uk-preserve-color) .uk-slidenav,.uk-section-secondary:not(.uk-preserve-color) .uk-slidenav,.uk-tile-primary:not(.uk-preserve-color) .uk-slidenav,.uk-tile-secondary:not(.uk-preserve-color) .uk-slidenav{color:rgba(255,255,255,.3)}.uk-card-primary.uk-card-body .uk-slidenav:focus,.uk-card-primary.uk-card-body .uk-slidenav:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-slidenav:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-slidenav:hover,.uk-card-secondary.uk-card-body .uk-slidenav:focus,.uk-card-secondary.uk-card-body .uk-slidenav:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-slidenav:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-slidenav:hover,.uk-light .uk-slidenav:focus,.uk-light .uk-slidenav:hover,.uk-offcanvas-bar .uk-slidenav:focus,.uk-offcanvas-bar .uk-slidenav:hover,.uk-overlay-primary .uk-slidenav:focus,.uk-overlay-primary .uk-slidenav:hover,.uk-section-primary:not(.uk-preserve-color) .uk-slidenav:focus,.uk-section-primary:not(.uk-preserve-color) .uk-slidenav:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-slidenav:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-slidenav:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-slidenav:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-slidenav:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-slidenav:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-slidenav:hover{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-slidenav:active,.uk-card-primary>:not([class*=uk-card-media]) .uk-slidenav:active,.uk-card-secondary.uk-card-body .uk-slidenav:active,.uk-card-secondary>:not([class*=uk-card-media]) .uk-slidenav:active,.uk-light .uk-slidenav:active,.uk-offcanvas-bar .uk-slidenav:active,.uk-overlay-primary .uk-slidenav:active,.uk-section-primary:not(.uk-preserve-color) .uk-slidenav:active,.uk-section-secondary:not(.uk-preserve-color) .uk-slidenav:active,.uk-tile-primary:not(.uk-preserve-color) .uk-slidenav:active,.uk-tile-secondary:not(.uk-preserve-color) .uk-slidenav:active{color:rgba(255,255,255,.6)}.uk-card-primary.uk-card-body .uk-dotnav>*>*,.uk-card-primary>:not([class*=uk-card-media]) .uk-dotnav>*>*,.uk-card-secondary.uk-card-body .uk-dotnav>*>*,.uk-card-secondary>:not([class*=uk-card-media]) .uk-dotnav>*>*,.uk-light .uk-dotnav>*>*,.uk-offcanvas-bar .uk-dotnav>*>*,.uk-overlay-primary .uk-dotnav>*>*,.uk-section-primary:not(.uk-preserve-color) .uk-dotnav>*>*,.uk-section-secondary:not(.uk-preserve-color) .uk-dotnav>*>*,.uk-tile-primary:not(.uk-preserve-color) .uk-dotnav>*>*,.uk-tile-secondary:not(.uk-preserve-color) .uk-dotnav>*>*{background-color:rgba(255,255,255,.1)}.uk-card-primary.uk-card-body .uk-dotnav>*>:focus,.uk-card-primary.uk-card-body .uk-dotnav>*>:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-dotnav>*>:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-dotnav>*>:hover,.uk-card-secondary.uk-card-body .uk-dotnav>*>:focus,.uk-card-secondary.uk-card-body .uk-dotnav>*>:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-dotnav>*>:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-dotnav>*>:hover,.uk-light .uk-dotnav>*>:focus,.uk-light .uk-dotnav>*>:hover,.uk-offcanvas-bar .uk-dotnav>*>:focus,.uk-offcanvas-bar .uk-dotnav>*>:hover,.uk-overlay-primary .uk-dotnav>*>:focus,.uk-overlay-primary .uk-dotnav>*>:hover,.uk-section-primary:not(.uk-preserve-color) .uk-dotnav>*>:focus,.uk-section-primary:not(.uk-preserve-color) .uk-dotnav>*>:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-dotnav>*>:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-dotnav>*>:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-dotnav>*>:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-dotnav>*>:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-dotnav>*>:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-dotnav>*>:hover{background-color:rgba(255,255,255,.4)}.uk-card-primary.uk-card-body .uk-dotnav>*>:active,.uk-card-primary>:not([class*=uk-card-media]) .uk-dotnav>*>:active,.uk-card-secondary.uk-card-body .uk-dotnav>*>:active,.uk-card-secondary>:not([class*=uk-card-media]) .uk-dotnav>*>:active,.uk-light .uk-dotnav>*>:active,.uk-offcanvas-bar .uk-dotnav>*>:active,.uk-overlay-primary .uk-dotnav>*>:active,.uk-section-primary:not(.uk-preserve-color) .uk-dotnav>*>:active,.uk-section-secondary:not(.uk-preserve-color) .uk-dotnav>*>:active,.uk-tile-primary:not(.uk-preserve-color) .uk-dotnav>*>:active,.uk-tile-secondary:not(.uk-preserve-color) .uk-dotnav>*>:active{background-color:rgba(255,255,255,.6)}.uk-card-primary.uk-card-body .uk-dotnav>.uk-active>*,.uk-card-primary>:not([class*=uk-card-media]) .uk-dotnav>.uk-active>*,.uk-card-secondary.uk-card-body .uk-dotnav>.uk-active>*,.uk-card-secondary>:not([class*=uk-card-media]) .uk-dotnav>.uk-active>*,.uk-light .uk-dotnav>.uk-active>*,.uk-offcanvas-bar .uk-dotnav>.uk-active>*,.uk-overlay-primary .uk-dotnav>.uk-active>*,.uk-section-primary:not(.uk-preserve-color) .uk-dotnav>.uk-active>*,.uk-section-secondary:not(.uk-preserve-color) .uk-dotnav>.uk-active>*,.uk-tile-primary:not(.uk-preserve-color) .uk-dotnav>.uk-active>*,.uk-tile-secondary:not(.uk-preserve-color) .uk-dotnav>.uk-active>*{background-color:rgba(255,255,255,.6)}.uk-card-primary.uk-card-body .uk-iconnav>*>*,.uk-card-primary>:not([class*=uk-card-media]) .uk-iconnav>*>*,.uk-card-secondary.uk-card-body .uk-iconnav>*>*,.uk-card-secondary>:not([class*=uk-card-media]) .uk-iconnav>*>*,.uk-light .uk-iconnav>*>*,.uk-offcanvas-bar .uk-iconnav>*>*,.uk-overlay-primary .uk-iconnav>*>*,.uk-section-primary:not(.uk-preserve-color) .uk-iconnav>*>*,.uk-section-secondary:not(.uk-preserve-color) .uk-iconnav>*>*,.uk-tile-primary:not(.uk-preserve-color) .uk-iconnav>*>*,.uk-tile-secondary:not(.uk-preserve-color) .uk-iconnav>*>*{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-iconnav>*>:focus,.uk-card-primary.uk-card-body .uk-iconnav>*>:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-iconnav>*>:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-iconnav>*>:hover,.uk-card-secondary.uk-card-body .uk-iconnav>*>:focus,.uk-card-secondary.uk-card-body .uk-iconnav>*>:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-iconnav>*>:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-iconnav>*>:hover,.uk-light .uk-iconnav>*>:focus,.uk-light .uk-iconnav>*>:hover,.uk-offcanvas-bar .uk-iconnav>*>:focus,.uk-offcanvas-bar .uk-iconnav>*>:hover,.uk-overlay-primary .uk-iconnav>*>:focus,.uk-overlay-primary .uk-iconnav>*>:hover,.uk-section-primary:not(.uk-preserve-color) .uk-iconnav>*>:focus,.uk-section-primary:not(.uk-preserve-color) .uk-iconnav>*>:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-iconnav>*>:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-iconnav>*>:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-iconnav>*>:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-iconnav>*>:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-iconnav>*>:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-iconnav>*>:hover{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-iconnav>.uk-active>*,.uk-card-primary>:not([class*=uk-card-media]) .uk-iconnav>.uk-active>*,.uk-card-secondary.uk-card-body .uk-iconnav>.uk-active>*,.uk-card-secondary>:not([class*=uk-card-media]) .uk-iconnav>.uk-active>*,.uk-light .uk-iconnav>.uk-active>*,.uk-offcanvas-bar .uk-iconnav>.uk-active>*,.uk-overlay-primary .uk-iconnav>.uk-active>*,.uk-section-primary:not(.uk-preserve-color) .uk-iconnav>.uk-active>*,.uk-section-secondary:not(.uk-preserve-color) .uk-iconnav>.uk-active>*,.uk-tile-primary:not(.uk-preserve-color) .uk-iconnav>.uk-active>*,.uk-tile-secondary:not(.uk-preserve-color) .uk-iconnav>.uk-active>*{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-text-lead,.uk-card-primary>:not([class*=uk-card-media]) .uk-text-lead,.uk-card-secondary.uk-card-body .uk-text-lead,.uk-card-secondary>:not([class*=uk-card-media]) .uk-text-lead,.uk-light .uk-text-lead,.uk-offcanvas-bar .uk-text-lead,.uk-overlay-primary .uk-text-lead,.uk-section-primary:not(.uk-preserve-color) .uk-text-lead,.uk-section-secondary:not(.uk-preserve-color) .uk-text-lead,.uk-tile-primary:not(.uk-preserve-color) .uk-text-lead,.uk-tile-secondary:not(.uk-preserve-color) .uk-text-lead{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-text-meta,.uk-card-primary>:not([class*=uk-card-media]) .uk-text-meta,.uk-card-secondary.uk-card-body .uk-text-meta,.uk-card-secondary>:not([class*=uk-card-media]) .uk-text-meta,.uk-light .uk-text-meta,.uk-offcanvas-bar .uk-text-meta,.uk-overlay-primary .uk-text-meta,.uk-section-primary:not(.uk-preserve-color) .uk-text-meta,.uk-section-secondary:not(.uk-preserve-color) .uk-text-meta,.uk-tile-primary:not(.uk-preserve-color) .uk-text-meta,.uk-tile-secondary:not(.uk-preserve-color) .uk-text-meta{color:rgba(255,255,255,.5)}.uk-card-primary.uk-card-body .uk-text-muted,.uk-card-primary>:not([class*=uk-card-media]) .uk-text-muted,.uk-card-secondary.uk-card-body .uk-text-muted,.uk-card-secondary>:not([class*=uk-card-media]) .uk-text-muted,.uk-light .uk-text-muted,.uk-offcanvas-bar .uk-text-muted,.uk-overlay-primary .uk-text-muted,.uk-section-primary:not(.uk-preserve-color) .uk-text-muted,.uk-section-secondary:not(.uk-preserve-color) .uk-text-muted,.uk-tile-primary:not(.uk-preserve-color) .uk-text-muted,.uk-tile-secondary:not(.uk-preserve-color) .uk-text-muted{color:rgba(255,255,255,.5)!important}.uk-card-primary.uk-card-body .uk-text-primary,.uk-card-primary>:not([class*=uk-card-media]) .uk-text-primary,.uk-card-secondary.uk-card-body .uk-text-primary,.uk-card-secondary>:not([class*=uk-card-media]) .uk-text-primary,.uk-light .uk-text-primary,.uk-offcanvas-bar .uk-text-primary,.uk-overlay-primary .uk-text-primary,.uk-section-primary:not(.uk-preserve-color) .uk-text-primary,.uk-section-secondary:not(.uk-preserve-color) .uk-text-primary,.uk-tile-primary:not(.uk-preserve-color) .uk-text-primary,.uk-tile-secondary:not(.uk-preserve-color) .uk-text-primary{color:rgba(255,255,255,.7)!important}.uk-card-primary.uk-card-body .uk-column-divider,.uk-card-primary>:not([class*=uk-card-media]) .uk-column-divider,.uk-card-secondary.uk-card-body .uk-column-divider,.uk-card-secondary>:not([class*=uk-card-media]) .uk-column-divider,.uk-light .uk-column-divider,.uk-offcanvas-bar .uk-column-divider,.uk-overlay-primary .uk-column-divider,.uk-section-primary:not(.uk-preserve-color) .uk-column-divider,.uk-section-secondary:not(.uk-preserve-color) .uk-column-divider,.uk-tile-primary:not(.uk-preserve-color) .uk-column-divider,.uk-tile-secondary:not(.uk-preserve-color) .uk-column-divider{-webkit-column-rule-color:rgba(255,255,255,.2);-moz-column-rule-color:rgba(255,255,255,.2);column-rule-color:rgba(255,255,255,.2)}.uk-card-primary.uk-card-body .uk-logo,.uk-card-primary>:not([class*=uk-card-media]) .uk-logo,.uk-card-secondary.uk-card-body .uk-logo,.uk-card-secondary>:not([class*=uk-card-media]) .uk-logo,.uk-light .uk-logo,.uk-offcanvas-bar .uk-logo,.uk-overlay-primary .uk-logo,.uk-section-primary:not(.uk-preserve-color) .uk-logo,.uk-section-secondary:not(.uk-preserve-color) .uk-logo,.uk-tile-primary:not(.uk-preserve-color) .uk-logo,.uk-tile-secondary:not(.uk-preserve-color) .uk-logo{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-logo:focus,.uk-card-primary.uk-card-body .uk-logo:hover,.uk-card-primary>:not([class*=uk-card-media]) .uk-logo:focus,.uk-card-primary>:not([class*=uk-card-media]) .uk-logo:hover,.uk-card-secondary.uk-card-body .uk-logo:focus,.uk-card-secondary.uk-card-body .uk-logo:hover,.uk-card-secondary>:not([class*=uk-card-media]) .uk-logo:focus,.uk-card-secondary>:not([class*=uk-card-media]) .uk-logo:hover,.uk-light .uk-logo:focus,.uk-light .uk-logo:hover,.uk-offcanvas-bar .uk-logo:focus,.uk-offcanvas-bar .uk-logo:hover,.uk-overlay-primary .uk-logo:focus,.uk-overlay-primary .uk-logo:hover,.uk-section-primary:not(.uk-preserve-color) .uk-logo:focus,.uk-section-primary:not(.uk-preserve-color) .uk-logo:hover,.uk-section-secondary:not(.uk-preserve-color) .uk-logo:focus,.uk-section-secondary:not(.uk-preserve-color) .uk-logo:hover,.uk-tile-primary:not(.uk-preserve-color) .uk-logo:focus,.uk-tile-primary:not(.uk-preserve-color) .uk-logo:hover,.uk-tile-secondary:not(.uk-preserve-color) .uk-logo:focus,.uk-tile-secondary:not(.uk-preserve-color) .uk-logo:hover{color:rgba(255,255,255,.7)}.uk-card-primary.uk-card-body .uk-logo>:not(.uk-logo-inverse):not(:only-of-type),.uk-card-primary>:not([class*=uk-card-media]) .uk-logo>:not(.uk-logo-inverse):not(:only-of-type),.uk-card-secondary.uk-card-body .uk-logo>:not(.uk-logo-inverse):not(:only-of-type),.uk-card-secondary>:not([class*=uk-card-media]) .uk-logo>:not(.uk-logo-inverse):not(:only-of-type),.uk-light .uk-logo>:not(.uk-logo-inverse):not(:only-of-type),.uk-offcanvas-bar .uk-logo>:not(.uk-logo-inverse):not(:only-of-type),.uk-overlay-primary .uk-logo>:not(.uk-logo-inverse):not(:only-of-type),.uk-section-primary:not(.uk-preserve-color) .uk-logo>:not(.uk-logo-inverse):not(:only-of-type),.uk-section-secondary:not(.uk-preserve-color) .uk-logo>:not(.uk-logo-inverse):not(:only-of-type),.uk-tile-primary:not(.uk-preserve-color) .uk-logo>:not(.uk-logo-inverse):not(:only-of-type),.uk-tile-secondary:not(.uk-preserve-color) .uk-logo>:not(.uk-logo-inverse):not(:only-of-type){display:none}.uk-card-primary.uk-card-body .uk-logo-inverse,.uk-card-primary>:not([class*=uk-card-media]) .uk-logo-inverse,.uk-card-secondary.uk-card-body .uk-logo-inverse,.uk-card-secondary>:not([class*=uk-card-media]) .uk-logo-inverse,.uk-light .uk-logo-inverse,.uk-offcanvas-bar .uk-logo-inverse,.uk-overlay-primary .uk-logo-inverse,.uk-section-primary:not(.uk-preserve-color) .uk-logo-inverse,.uk-section-secondary:not(.uk-preserve-color) .uk-logo-inverse,.uk-tile-primary:not(.uk-preserve-color) .uk-logo-inverse,.uk-tile-secondary:not(.uk-preserve-color) .uk-logo-inverse{display:inline}.uk-card-primary.uk-card-body .uk-accordion-title::after,.uk-card-primary>:not([class*=uk-card-media]) .uk-accordion-title::after,.uk-card-secondary.uk-card-body .uk-accordion-title::after,.uk-card-secondary>:not([class*=uk-card-media]) .uk-accordion-title::after,.uk-light .uk-accordion-title::after,.uk-offcanvas-bar .uk-accordion-title::after,.uk-overlay-primary .uk-accordion-title::after,.uk-section-primary:not(.uk-preserve-color) .uk-accordion-title::after,.uk-section-secondary:not(.uk-preserve-color) .uk-accordion-title::after,.uk-tile-primary:not(.uk-preserve-color) .uk-accordion-title::after,.uk-tile-secondary:not(.uk-preserve-color) .uk-accordion-title::after{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2213%22%20height%3D%2213%22%20viewBox%3D%220%200%2013%2013%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Crect%20fill%3D%22rgba%28255,%20255,%20255,%200.7%29%22%20width%3D%2213%22%20height%3D%221%22%20x%3D%220%22%20y%3D%226%22%3E%3C%2Frect%3E%0A%20%20%20%20%3Crect%20fill%3D%22rgba%28255,%20255,%20255,%200.7%29%22%20width%3D%221%22%20height%3D%2213%22%20x%3D%226%22%20y%3D%220%22%3E%3C%2Frect%3E%0A%3C%2Fsvg%3E\")}.uk-card-primary.uk-card-body .uk-open>.uk-accordion-title::after,.uk-card-primary>:not([class*=uk-card-media]) .uk-open>.uk-accordion-title::after,.uk-card-secondary.uk-card-body .uk-open>.uk-accordion-title::after,.uk-card-secondary>:not([class*=uk-card-media]) .uk-open>.uk-accordion-title::after,.uk-light .uk-open>.uk-accordion-title::after,.uk-offcanvas-bar .uk-open>.uk-accordion-title::after,.uk-overlay-primary .uk-open>.uk-accordion-title::after,.uk-section-primary:not(.uk-preserve-color) .uk-open>.uk-accordion-title::after,.uk-section-secondary:not(.uk-preserve-color) .uk-open>.uk-accordion-title::after,.uk-tile-primary:not(.uk-preserve-color) .uk-open>.uk-accordion-title::after,.uk-tile-secondary:not(.uk-preserve-color) .uk-open>.uk-accordion-title::after{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2213%22%20height%3D%2213%22%20viewBox%3D%220%200%2013%2013%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Crect%20fill%3D%22rgba%28255,%20255,%20255,%200.7%29%22%20width%3D%2213%22%20height%3D%221%22%20x%3D%220%22%20y%3D%226%22%3E%3C%2Frect%3E%0A%3C%2Fsvg%3E\")}@media print{*,::after,::before{background:0 0!important;color:#000!important;box-shadow:none!important;text-shadow:none!important}a,a:visited{text-decoration:underline}blockquote,pre{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}img{max-width:100%!important}@page{margin:.5cm}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}}", ""]);

// exports


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n.display-beacon__container {\n  min-height: 24px;\n}\nhr {\n  margin-top: 8px !important;\n  margin-bottom: 8px !important;\n}\n", ""]);

// exports


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports
exports.i(__webpack_require__(173), "");
exports.i(__webpack_require__(174), "");
exports.i(__webpack_require__(160), "");
exports.i(__webpack_require__(159), "");

// module
exports.push([module.i, "\n#app{\n  height: 100%;\n}\n\n", ""]);

// exports


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n.resource {\n  min-width: 200px;\n}\n", ""]);

// exports


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n.unlinked-beacon__container {\n  background-color: white;\n  width: 100%;\n  padding: 16px;\n}\n", ""]);

// exports


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n.header--margin-fix{\n  margin-top: 40px;\n}\n", ""]);

// exports


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n.tm-sidebar-left[data-v-ba31d1be] {\n  min-width: 200px !important;\n  padding: 40px 24px 40px 24px;\n}\n.uk-offcanvas-bar[data-v-ba31d1be] {\n  background: white !important;\n}\n.uk-nav>li>a[data-v-ba31d1be] {\n  color: #666;\n}\n.uk-nav>li>a[data-v-ba31d1be]:hover {\n  color: #222\n}\n", ""]);

// exports


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n.my-nav-bar[data-v-ed9ca292] {\n  background-color: #1E88E5;\n  /*position: absolute;*/\n  width: 100%;\n  z-index: 99;\n  height: 60px !important;\n  min-height: 60px !important;\n  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.19), 0 1px 1px rgba(0, 0, 0, 0.23);\n}\n.uk-navbar-nav>a[data-v-ed9ca292] {\n  color: white\n}\n", ""]);

// exports


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".my-card__actions {\n  position: absolute !important;\n  top: 16px;\n  right: 4px;\n}\n\n.f-h {\n  height: 100%;\n}\n\n.uk-flex--grow {\n  flex-grow: 99\n}\n\n.uk-card-body {\n  padding: 16px !important\n}\n\nbutton {\n  margin: 0;\n}\n\nhtml, body {\n  height: 100%;\n}\n\n.uk-dropdown {\n  min-width: 100px !important;\n}\n\n.fade-enter-active, .fade-leave-active {\n  transition: opacity 4s\n}\n\n.fade-enter, .fade-leave-to\n/* .fade-leave-active in <2.1.8 */\n\n{\n  opacity: 0\n}\n\n.floating-btn {\n  position: absolute !important;\n  right: 16px;\n  bottom: 16px;\n}\n\n.flex--center {\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  -webkit-box-align: center;\n  align-items: center;\n}\n\n.absolute--center {\n  position: absolute;\n  top: 50%;\n  left: auto;\n  width: 100%;\n}\n\n.unlinked-beacon__container {\n  /*position: absolute;*/\n}\n\n.beacon-icon {\n  height: 50px;\n  width: 25px;\n  background-size: contain;\n  background-image: url('/tacita/images/beacon_small.png')\n}\n.beacon-icon--small{\n  height: 35px;\n  width: 20px;\n  background-size: contain;\n  background-image: url('/tacita/images/beacon_small.png')\n}\n", ""]);

// exports


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "/*!\n* Vuetify v0.11.0\n* Forged by John Leider\n* Released under the MIT License.\n*/   \n.elevation-0{box-shadow:0 0 0 rgba(0,0,0,.2),0 0 0 rgba(0,0,0,.14),0 0 0 rgba(0,0,0,.12)!important}.elevation-1{box-shadow:0 1px 3px rgba(0,0,0,.2),0 1px 1px rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12)!important}.elevation-2{box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)!important}.elevation-3{box-shadow:0 1px 8px rgba(0,0,0,.2),0 3px 4px rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.12)!important}.elevation-4{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px rgba(0,0,0,.14),0 1px 10px rgba(0,0,0,.12)!important}.elevation-5{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px rgba(0,0,0,.14),0 1px 14px rgba(0,0,0,.12)!important}.elevation-6{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px rgba(0,0,0,.14),0 1px 18px rgba(0,0,0,.12)!important}.elevation-7{box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)!important}.elevation-8{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)!important}.elevation-9{box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)!important}.elevation-10{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)!important}.elevation-11{box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)!important}.elevation-12{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)!important}.elevation-13{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)!important}.elevation-14{box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)!important}.elevation-15{box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)!important}.elevation-16{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)!important}.elevation-17{box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)!important}.elevation-18{box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)!important}.elevation-19{box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)!important}.elevation-20{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)!important}.elevation-21{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)!important}.elevation-22{box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)!important}.elevation-23{box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)!important}.elevation-24{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)!important}html{box-sizing:border-box;overflow-y:scroll;-webkit-text-size-adjust:100%}*,:after,:before{box-sizing:inherit}:after,:before{text-decoration:inherit;vertical-align:inherit}*{background-repeat:no-repeat;padding:0;margin:0}audio:not([controls]){display:none;height:0}hr{overflow:visible}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}summary{display:list-item}small{font-size:80%}[hidden],template{display:none}abbr[title]{border-bottom:1px dotted;text-decoration:none}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}code,kbd,pre,samp{font-family:monospace,monospace}b,strong{font-weight:bolder}dfn{font-style:italic}mark{background-color:#ff0;color:#000}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}input{border-radius:0}[role=button],[type=button],[type=reset],[type=submit],button{cursor:pointer}[disabled]{cursor:default}[type=number]{width:auto}[type=search]{-webkit-appearance:textfield}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}textarea{overflow:auto;resize:vertical}button,input,optgroup,select,textarea{font:inherit}optgroup{font-weight:700}button{overflow:visible}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:0;padding:0}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button:-moz-focusring{outline:1px dotted ButtonText}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}button,select{text-transform:none}button,input,select,textarea{background-color:transparent;border-style:none;color:inherit}select{-moz-appearance:none;-webkit-appearance:none}select::-ms-expand{display:none}select::-ms-value{color:currentColor}legend{border:0;color:inherit;display:table;max-width:100%;white-space:normal}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}img{border-style:none}progress{vertical-align:baseline}svg:not(:root){overflow:hidden}audio,canvas,progress,video{display:inline-block}@media screen{[hidden~=screen]{display:inherit}[hidden~=screen]:not(:active):not(:focus):not(:target){position:absolute!important;clip:rect(0 0 0 0)!important}}[aria-busy=true]{cursor:progress}[aria-controls]{cursor:pointer}[aria-disabled]{cursor:default}::-moz-selection{background-color:#b3d4fc;color:#000;text-shadow:none}::selection{background-color:#b3d4fc;color:#000;text-shadow:none}.content{background:#fff;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;min-width:0}.container,.container-fluid{margin-right:auto;margin-left:auto;-ms-flex-preferred-size:100%;flex-basis:100%}.container{padding-left:2rem;padding-right:2rem}@media only screen and (min-width:518.4px){.container{max-width:518.4px}}@media only screen and (min-width:691.2px){.container{max-width:691.2px}}@media only screen and (min-width:892.8000000000001px){.container{max-width:892.8000000000001px}}@media only screen and (min-width:1080px){.container{max-width:1080px}}.container--fluid{padding:0;max-width:100%}.row{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-left:-.5rem;margin-right:-.5rem}.row--reverse{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.row .col{padding-right:.5rem;padding-left:.5rem}.row .col.xs{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}@media only screen and (min-width:0){.row .col.xs1{-ms-flex-preferred-size:8.333333333333332%;flex-basis:8.333333333333332%;max-width:8.333333333333332%}.row .col.offset-xs1{margin-left:8.333333333333332%}.row .col.xs2{-ms-flex-preferred-size:16.666666666666664%;flex-basis:16.666666666666664%;max-width:16.666666666666664%}.row .col.offset-xs2{margin-left:16.666666666666664%}.row .col.xs3{-ms-flex-preferred-size:25%;flex-basis:25%;max-width:25%}.row .col.offset-xs3{margin-left:25%}.row .col.xs4{-ms-flex-preferred-size:33.33333333333333%;flex-basis:33.33333333333333%;max-width:33.33333333333333%}.row .col.offset-xs4{margin-left:33.33333333333333%}.row .col.xs5{-ms-flex-preferred-size:41.66666666666667%;flex-basis:41.66666666666667%;max-width:41.66666666666667%}.row .col.offset-xs5{margin-left:41.66666666666667%}.row .col.xs6{-ms-flex-preferred-size:50%;flex-basis:50%;max-width:50%}.row .col.offset-xs6{margin-left:50%}.row .col.xs7{-ms-flex-preferred-size:58.333333333333336%;flex-basis:58.333333333333336%;max-width:58.333333333333336%}.row .col.offset-xs7{margin-left:58.333333333333336%}.row .col.xs8{-ms-flex-preferred-size:66.66666666666666%;flex-basis:66.66666666666666%;max-width:66.66666666666666%}.row .col.offset-xs8{margin-left:66.66666666666666%}.row .col.xs9{-ms-flex-preferred-size:75%;flex-basis:75%;max-width:75%}.row .col.offset-xs9{margin-left:75%}.row .col.xs10{-ms-flex-preferred-size:83.33333333333334%;flex-basis:83.33333333333334%;max-width:83.33333333333334%}.row .col.offset-xs10{margin-left:83.33333333333334%}.row .col.xs11{-ms-flex-preferred-size:91.66666666666666%;flex-basis:91.66666666666666%;max-width:91.66666666666666%}.row .col.offset-xs11{margin-left:91.66666666666666%}.row .col.xs12{-ms-flex-preferred-size:100%;flex-basis:100%;max-width:100%}.row .col.offset-xs12{margin-left:100%}}.row .col.sm{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}@media only screen and (min-width:576px){.row .col.sm1{-ms-flex-preferred-size:8.333333333333332%;flex-basis:8.333333333333332%;max-width:8.333333333333332%}.row .col.offset-sm1{margin-left:8.333333333333332%}.row .col.sm2{-ms-flex-preferred-size:16.666666666666664%;flex-basis:16.666666666666664%;max-width:16.666666666666664%}.row .col.offset-sm2{margin-left:16.666666666666664%}.row .col.sm3{-ms-flex-preferred-size:25%;flex-basis:25%;max-width:25%}.row .col.offset-sm3{margin-left:25%}.row .col.sm4{-ms-flex-preferred-size:33.33333333333333%;flex-basis:33.33333333333333%;max-width:33.33333333333333%}.row .col.offset-sm4{margin-left:33.33333333333333%}.row .col.sm5{-ms-flex-preferred-size:41.66666666666667%;flex-basis:41.66666666666667%;max-width:41.66666666666667%}.row .col.offset-sm5{margin-left:41.66666666666667%}.row .col.sm6{-ms-flex-preferred-size:50%;flex-basis:50%;max-width:50%}.row .col.offset-sm6{margin-left:50%}.row .col.sm7{-ms-flex-preferred-size:58.333333333333336%;flex-basis:58.333333333333336%;max-width:58.333333333333336%}.row .col.offset-sm7{margin-left:58.333333333333336%}.row .col.sm8{-ms-flex-preferred-size:66.66666666666666%;flex-basis:66.66666666666666%;max-width:66.66666666666666%}.row .col.offset-sm8{margin-left:66.66666666666666%}.row .col.sm9{-ms-flex-preferred-size:75%;flex-basis:75%;max-width:75%}.row .col.offset-sm9{margin-left:75%}.row .col.sm10{-ms-flex-preferred-size:83.33333333333334%;flex-basis:83.33333333333334%;max-width:83.33333333333334%}.row .col.offset-sm10{margin-left:83.33333333333334%}.row .col.sm11{-ms-flex-preferred-size:91.66666666666666%;flex-basis:91.66666666666666%;max-width:91.66666666666666%}.row .col.offset-sm11{margin-left:91.66666666666666%}.row .col.sm12{-ms-flex-preferred-size:100%;flex-basis:100%;max-width:100%}.row .col.offset-sm12{margin-left:100%}}.row .col.md{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}@media only screen and (min-width:768px){.row .col.md1{-ms-flex-preferred-size:8.333333333333332%;flex-basis:8.333333333333332%;max-width:8.333333333333332%}.row .col.offset-md1{margin-left:8.333333333333332%}.row .col.md2{-ms-flex-preferred-size:16.666666666666664%;flex-basis:16.666666666666664%;max-width:16.666666666666664%}.row .col.offset-md2{margin-left:16.666666666666664%}.row .col.md3{-ms-flex-preferred-size:25%;flex-basis:25%;max-width:25%}.row .col.offset-md3{margin-left:25%}.row .col.md4{-ms-flex-preferred-size:33.33333333333333%;flex-basis:33.33333333333333%;max-width:33.33333333333333%}.row .col.offset-md4{margin-left:33.33333333333333%}.row .col.md5{-ms-flex-preferred-size:41.66666666666667%;flex-basis:41.66666666666667%;max-width:41.66666666666667%}.row .col.offset-md5{margin-left:41.66666666666667%}.row .col.md6{-ms-flex-preferred-size:50%;flex-basis:50%;max-width:50%}.row .col.offset-md6{margin-left:50%}.row .col.md7{-ms-flex-preferred-size:58.333333333333336%;flex-basis:58.333333333333336%;max-width:58.333333333333336%}.row .col.offset-md7{margin-left:58.333333333333336%}.row .col.md8{-ms-flex-preferred-size:66.66666666666666%;flex-basis:66.66666666666666%;max-width:66.66666666666666%}.row .col.offset-md8{margin-left:66.66666666666666%}.row .col.md9{-ms-flex-preferred-size:75%;flex-basis:75%;max-width:75%}.row .col.offset-md9{margin-left:75%}.row .col.md10{-ms-flex-preferred-size:83.33333333333334%;flex-basis:83.33333333333334%;max-width:83.33333333333334%}.row .col.offset-md10{margin-left:83.33333333333334%}.row .col.md11{-ms-flex-preferred-size:91.66666666666666%;flex-basis:91.66666666666666%;max-width:91.66666666666666%}.row .col.offset-md11{margin-left:91.66666666666666%}.row .col.md12{-ms-flex-preferred-size:100%;flex-basis:100%;max-width:100%}.row .col.offset-md12{margin-left:100%}}.row .col.lg{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}@media only screen and (min-width:992px){.row .col.lg1{-ms-flex-preferred-size:8.333333333333332%;flex-basis:8.333333333333332%;max-width:8.333333333333332%}.row .col.offset-lg1{margin-left:8.333333333333332%}.row .col.lg2{-ms-flex-preferred-size:16.666666666666664%;flex-basis:16.666666666666664%;max-width:16.666666666666664%}.row .col.offset-lg2{margin-left:16.666666666666664%}.row .col.lg3{-ms-flex-preferred-size:25%;flex-basis:25%;max-width:25%}.row .col.offset-lg3{margin-left:25%}.row .col.lg4{-ms-flex-preferred-size:33.33333333333333%;flex-basis:33.33333333333333%;max-width:33.33333333333333%}.row .col.offset-lg4{margin-left:33.33333333333333%}.row .col.lg5{-ms-flex-preferred-size:41.66666666666667%;flex-basis:41.66666666666667%;max-width:41.66666666666667%}.row .col.offset-lg5{margin-left:41.66666666666667%}.row .col.lg6{-ms-flex-preferred-size:50%;flex-basis:50%;max-width:50%}.row .col.offset-lg6{margin-left:50%}.row .col.lg7{-ms-flex-preferred-size:58.333333333333336%;flex-basis:58.333333333333336%;max-width:58.333333333333336%}.row .col.offset-lg7{margin-left:58.333333333333336%}.row .col.lg8{-ms-flex-preferred-size:66.66666666666666%;flex-basis:66.66666666666666%;max-width:66.66666666666666%}.row .col.offset-lg8{margin-left:66.66666666666666%}.row .col.lg9{-ms-flex-preferred-size:75%;flex-basis:75%;max-width:75%}.row .col.offset-lg9{margin-left:75%}.row .col.lg10{-ms-flex-preferred-size:83.33333333333334%;flex-basis:83.33333333333334%;max-width:83.33333333333334%}.row .col.offset-lg10{margin-left:83.33333333333334%}.row .col.lg11{-ms-flex-preferred-size:91.66666666666666%;flex-basis:91.66666666666666%;max-width:91.66666666666666%}.row .col.offset-lg11{margin-left:91.66666666666666%}.row .col.lg12{-ms-flex-preferred-size:100%;flex-basis:100%;max-width:100%}.row .col.offset-lg12{margin-left:100%}}.row .col.xl{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}@media only screen and (min-width:1200px){.row .col.xl1{-ms-flex-preferred-size:8.333333333333332%;flex-basis:8.333333333333332%;max-width:8.333333333333332%}.row .col.offset-xl1{margin-left:8.333333333333332%}.row .col.xl2{-ms-flex-preferred-size:16.666666666666664%;flex-basis:16.666666666666664%;max-width:16.666666666666664%}.row .col.offset-xl2{margin-left:16.666666666666664%}.row .col.xl3{-ms-flex-preferred-size:25%;flex-basis:25%;max-width:25%}.row .col.offset-xl3{margin-left:25%}.row .col.xl4{-ms-flex-preferred-size:33.33333333333333%;flex-basis:33.33333333333333%;max-width:33.33333333333333%}.row .col.offset-xl4{margin-left:33.33333333333333%}.row .col.xl5{-ms-flex-preferred-size:41.66666666666667%;flex-basis:41.66666666666667%;max-width:41.66666666666667%}.row .col.offset-xl5{margin-left:41.66666666666667%}.row .col.xl6{-ms-flex-preferred-size:50%;flex-basis:50%;max-width:50%}.row .col.offset-xl6{margin-left:50%}.row .col.xl7{-ms-flex-preferred-size:58.333333333333336%;flex-basis:58.333333333333336%;max-width:58.333333333333336%}.row .col.offset-xl7{margin-left:58.333333333333336%}.row .col.xl8{-ms-flex-preferred-size:66.66666666666666%;flex-basis:66.66666666666666%;max-width:66.66666666666666%}.row .col.offset-xl8{margin-left:66.66666666666666%}.row .col.xl9{-ms-flex-preferred-size:75%;flex-basis:75%;max-width:75%}.row .col.offset-xl9{margin-left:75%}.row .col.xl10{-ms-flex-preferred-size:83.33333333333334%;flex-basis:83.33333333333334%;max-width:83.33333333333334%}.row .col.offset-xl10{margin-left:83.33333333333334%}.row .col.xl11{-ms-flex-preferred-size:91.66666666666666%;flex-basis:91.66666666666666%;max-width:91.66666666666666%}.row .col.offset-xl11{margin-left:91.66666666666666%}.row .col.xl12{-ms-flex-preferred-size:100%;flex-basis:100%;max-width:100%}.row .col.offset-xl12{margin-left:100%}}.col--spacer,.spacer{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.primary{background-color:#1976d2!important;border-color:#1976d2!important}.primary--text{color:#1976d2!important}.primary--after:after{background:#1976d2!important}.accent{background-color:#448aff!important;border-color:#448aff!important}.accent--text{color:#448aff!important}.accent--after:after{background:#448aff!important}.secondary{background-color:#424242!important;border-color:#424242!important}.secondary--text{color:#424242!important}.secondary--after:after{background:#424242!important}.info{background-color:#2196f3!important;border-color:#2196f3!important}.info--text{color:#2196f3!important}.info--after:after{background:#2196f3!important}.warning{background-color:#ffc107!important;border-color:#ffc107!important}.warning--text{color:#ffc107!important}.warning--after:after{background:#ffc107!important}.error{background-color:#ff5252!important;border-color:#ff5252!important}.error--text{color:#ff5252!important}.error--after:after{background:#ff5252!important}.success{background-color:#4caf50!important;border-color:#4caf50!important}.success--text{color:#4caf50!important}.success--after:after{background:#4caf50!important}.black{background-color:#000!important;border-color:#000!important}.black--text{color:#000!important}.black--after:after{background:#000!important}.white{background-color:#fff!important;border-color:#fff!important}.white--text{color:#fff!important}.white--after:after{background:#fff!important}.transparent{background-color:transparent!important;border-color:transparent!important}.transparent--text{color:transparent!important}.transparent--after:after{background:transparent!important}.red{background-color:#f44336!important;border-color:#f44336!important}.red--text{color:#f44336!important}.red--after:after{background:#f44336!important}.red.lighten-5{border-color:#ffebee!important}.red.lighten-5,.red.lighten-5--after:after{background-color:#ffebee!important}.red--text.text--lighten-5{color:#ffebee!important}.red.lighten-4{border-color:#ffcdd2!important}.red.lighten-4,.red.lighten-4--after:after{background-color:#ffcdd2!important}.red--text.text--lighten-4{color:#ffcdd2!important}.red.lighten-3{border-color:#ef9a9a!important}.red.lighten-3,.red.lighten-3--after:after{background-color:#ef9a9a!important}.red--text.text--lighten-3{color:#ef9a9a!important}.red.lighten-2{border-color:#e57373!important}.red.lighten-2,.red.lighten-2--after:after{background-color:#e57373!important}.red--text.text--lighten-2{color:#e57373!important}.red.lighten-1{border-color:#ef5350!important}.red.lighten-1,.red.lighten-1--after:after{background-color:#ef5350!important}.red--text.text--lighten-1{color:#ef5350!important}.red.darken-1{border-color:#e53935!important}.red.darken-1,.red.darken-1--after:after{background-color:#e53935!important}.red--text.text--darken-1{color:#e53935!important}.red.darken-2{border-color:#d32f2f!important}.red.darken-2,.red.darken-2--after:after{background-color:#d32f2f!important}.red--text.text--darken-2{color:#d32f2f!important}.red.darken-3{border-color:#c62828!important}.red.darken-3,.red.darken-3--after:after{background-color:#c62828!important}.red--text.text--darken-3{color:#c62828!important}.red.darken-4{border-color:#b71c1c!important}.red.darken-4,.red.darken-4--after:after{background-color:#b71c1c!important}.red--text.text--darken-4{color:#b71c1c!important}.red.accent-1{border-color:#ff8a80!important}.red.accent-1,.red.accent-1--after:after{background-color:#ff8a80!important}.red--text.text--accent-1{color:#ff8a80!important}.red.accent-2{border-color:#ff5252!important}.red.accent-2,.red.accent-2--after:after{background-color:#ff5252!important}.red--text.text--accent-2{color:#ff5252!important}.red.accent-3{border-color:#ff1744!important}.red.accent-3,.red.accent-3--after:after{background-color:#ff1744!important}.red--text.text--accent-3{color:#ff1744!important}.red.accent-4{border-color:#d50000!important}.red.accent-4,.red.accent-4--after:after{background-color:#d50000!important}.red--text.text--accent-4{color:#d50000!important}.pink{background-color:#e91e63!important;border-color:#e91e63!important}.pink--text{color:#e91e63!important}.pink--after:after{background:#e91e63!important}.pink.lighten-5{border-color:#fce4ec!important}.pink.lighten-5,.pink.lighten-5--after:after{background-color:#fce4ec!important}.pink--text.text--lighten-5{color:#fce4ec!important}.pink.lighten-4{border-color:#f8bbd0!important}.pink.lighten-4,.pink.lighten-4--after:after{background-color:#f8bbd0!important}.pink--text.text--lighten-4{color:#f8bbd0!important}.pink.lighten-3{border-color:#f48fb1!important}.pink.lighten-3,.pink.lighten-3--after:after{background-color:#f48fb1!important}.pink--text.text--lighten-3{color:#f48fb1!important}.pink.lighten-2{border-color:#f06292!important}.pink.lighten-2,.pink.lighten-2--after:after{background-color:#f06292!important}.pink--text.text--lighten-2{color:#f06292!important}.pink.lighten-1{border-color:#ec407a!important}.pink.lighten-1,.pink.lighten-1--after:after{background-color:#ec407a!important}.pink--text.text--lighten-1{color:#ec407a!important}.pink.darken-1{border-color:#d81b60!important}.pink.darken-1,.pink.darken-1--after:after{background-color:#d81b60!important}.pink--text.text--darken-1{color:#d81b60!important}.pink.darken-2{border-color:#c2185b!important}.pink.darken-2,.pink.darken-2--after:after{background-color:#c2185b!important}.pink--text.text--darken-2{color:#c2185b!important}.pink.darken-3{border-color:#ad1457!important}.pink.darken-3,.pink.darken-3--after:after{background-color:#ad1457!important}.pink--text.text--darken-3{color:#ad1457!important}.pink.darken-4{border-color:#880e4f!important}.pink.darken-4,.pink.darken-4--after:after{background-color:#880e4f!important}.pink--text.text--darken-4{color:#880e4f!important}.pink.accent-1{border-color:#ff80ab!important}.pink.accent-1,.pink.accent-1--after:after{background-color:#ff80ab!important}.pink--text.text--accent-1{color:#ff80ab!important}.pink.accent-2{border-color:#ff4081!important}.pink.accent-2,.pink.accent-2--after:after{background-color:#ff4081!important}.pink--text.text--accent-2{color:#ff4081!important}.pink.accent-3{border-color:#f50057!important}.pink.accent-3,.pink.accent-3--after:after{background-color:#f50057!important}.pink--text.text--accent-3{color:#f50057!important}.pink.accent-4{border-color:#c51162!important}.pink.accent-4,.pink.accent-4--after:after{background-color:#c51162!important}.pink--text.text--accent-4{color:#c51162!important}.purple{background-color:#9c27b0!important;border-color:#9c27b0!important}.purple--text{color:#9c27b0!important}.purple--after:after{background:#9c27b0!important}.purple.lighten-5{border-color:#f3e5f5!important}.purple.lighten-5,.purple.lighten-5--after:after{background-color:#f3e5f5!important}.purple--text.text--lighten-5{color:#f3e5f5!important}.purple.lighten-4{border-color:#e1bee7!important}.purple.lighten-4,.purple.lighten-4--after:after{background-color:#e1bee7!important}.purple--text.text--lighten-4{color:#e1bee7!important}.purple.lighten-3{border-color:#ce93d8!important}.purple.lighten-3,.purple.lighten-3--after:after{background-color:#ce93d8!important}.purple--text.text--lighten-3{color:#ce93d8!important}.purple.lighten-2{border-color:#ba68c8!important}.purple.lighten-2,.purple.lighten-2--after:after{background-color:#ba68c8!important}.purple--text.text--lighten-2{color:#ba68c8!important}.purple.lighten-1{border-color:#ab47bc!important}.purple.lighten-1,.purple.lighten-1--after:after{background-color:#ab47bc!important}.purple--text.text--lighten-1{color:#ab47bc!important}.purple.darken-1{border-color:#8e24aa!important}.purple.darken-1,.purple.darken-1--after:after{background-color:#8e24aa!important}.purple--text.text--darken-1{color:#8e24aa!important}.purple.darken-2{border-color:#7b1fa2!important}.purple.darken-2,.purple.darken-2--after:after{background-color:#7b1fa2!important}.purple--text.text--darken-2{color:#7b1fa2!important}.purple.darken-3{border-color:#6a1b9a!important}.purple.darken-3,.purple.darken-3--after:after{background-color:#6a1b9a!important}.purple--text.text--darken-3{color:#6a1b9a!important}.purple.darken-4{border-color:#4a148c!important}.purple.darken-4,.purple.darken-4--after:after{background-color:#4a148c!important}.purple--text.text--darken-4{color:#4a148c!important}.purple.accent-1{border-color:#ea80fc!important}.purple.accent-1,.purple.accent-1--after:after{background-color:#ea80fc!important}.purple--text.text--accent-1{color:#ea80fc!important}.purple.accent-2{border-color:#e040fb!important}.purple.accent-2,.purple.accent-2--after:after{background-color:#e040fb!important}.purple--text.text--accent-2{color:#e040fb!important}.purple.accent-3{border-color:#d500f9!important}.purple.accent-3,.purple.accent-3--after:after{background-color:#d500f9!important}.purple--text.text--accent-3{color:#d500f9!important}.purple.accent-4{border-color:#a0f!important}.purple.accent-4,.purple.accent-4--after:after{background-color:#a0f!important}.purple--text.text--accent-4{color:#a0f!important}.deep-purple{background-color:#673ab7!important;border-color:#673ab7!important}.deep-purple--text{color:#673ab7!important}.deep-purple--after:after{background:#673ab7!important}.deep-purple.lighten-5{border-color:#ede7f6!important}.deep-purple.lighten-5,.deep-purple.lighten-5--after:after{background-color:#ede7f6!important}.deep-purple--text.text--lighten-5{color:#ede7f6!important}.deep-purple.lighten-4{border-color:#d1c4e9!important}.deep-purple.lighten-4,.deep-purple.lighten-4--after:after{background-color:#d1c4e9!important}.deep-purple--text.text--lighten-4{color:#d1c4e9!important}.deep-purple.lighten-3{border-color:#b39ddb!important}.deep-purple.lighten-3,.deep-purple.lighten-3--after:after{background-color:#b39ddb!important}.deep-purple--text.text--lighten-3{color:#b39ddb!important}.deep-purple.lighten-2{border-color:#9575cd!important}.deep-purple.lighten-2,.deep-purple.lighten-2--after:after{background-color:#9575cd!important}.deep-purple--text.text--lighten-2{color:#9575cd!important}.deep-purple.lighten-1{border-color:#7e57c2!important}.deep-purple.lighten-1,.deep-purple.lighten-1--after:after{background-color:#7e57c2!important}.deep-purple--text.text--lighten-1{color:#7e57c2!important}.deep-purple.darken-1{border-color:#5e35b1!important}.deep-purple.darken-1,.deep-purple.darken-1--after:after{background-color:#5e35b1!important}.deep-purple--text.text--darken-1{color:#5e35b1!important}.deep-purple.darken-2{border-color:#512da8!important}.deep-purple.darken-2,.deep-purple.darken-2--after:after{background-color:#512da8!important}.deep-purple--text.text--darken-2{color:#512da8!important}.deep-purple.darken-3{border-color:#4527a0!important}.deep-purple.darken-3,.deep-purple.darken-3--after:after{background-color:#4527a0!important}.deep-purple--text.text--darken-3{color:#4527a0!important}.deep-purple.darken-4{border-color:#311b92!important}.deep-purple.darken-4,.deep-purple.darken-4--after:after{background-color:#311b92!important}.deep-purple--text.text--darken-4{color:#311b92!important}.deep-purple.accent-1{border-color:#b388ff!important}.deep-purple.accent-1,.deep-purple.accent-1--after:after{background-color:#b388ff!important}.deep-purple--text.text--accent-1{color:#b388ff!important}.deep-purple.accent-2{border-color:#7c4dff!important}.deep-purple.accent-2,.deep-purple.accent-2--after:after{background-color:#7c4dff!important}.deep-purple--text.text--accent-2{color:#7c4dff!important}.deep-purple.accent-3{border-color:#651fff!important}.deep-purple.accent-3,.deep-purple.accent-3--after:after{background-color:#651fff!important}.deep-purple--text.text--accent-3{color:#651fff!important}.deep-purple.accent-4{border-color:#6200ea!important}.deep-purple.accent-4,.deep-purple.accent-4--after:after{background-color:#6200ea!important}.deep-purple--text.text--accent-4{color:#6200ea!important}.indigo{background-color:#3f51b5!important;border-color:#3f51b5!important}.indigo--text{color:#3f51b5!important}.indigo--after:after{background:#3f51b5!important}.indigo.lighten-5{border-color:#e8eaf6!important}.indigo.lighten-5,.indigo.lighten-5--after:after{background-color:#e8eaf6!important}.indigo--text.text--lighten-5{color:#e8eaf6!important}.indigo.lighten-4{border-color:#c5cae9!important}.indigo.lighten-4,.indigo.lighten-4--after:after{background-color:#c5cae9!important}.indigo--text.text--lighten-4{color:#c5cae9!important}.indigo.lighten-3{border-color:#9fa8da!important}.indigo.lighten-3,.indigo.lighten-3--after:after{background-color:#9fa8da!important}.indigo--text.text--lighten-3{color:#9fa8da!important}.indigo.lighten-2{border-color:#7986cb!important}.indigo.lighten-2,.indigo.lighten-2--after:after{background-color:#7986cb!important}.indigo--text.text--lighten-2{color:#7986cb!important}.indigo.lighten-1{border-color:#5c6bc0!important}.indigo.lighten-1,.indigo.lighten-1--after:after{background-color:#5c6bc0!important}.indigo--text.text--lighten-1{color:#5c6bc0!important}.indigo.darken-1{border-color:#3949ab!important}.indigo.darken-1,.indigo.darken-1--after:after{background-color:#3949ab!important}.indigo--text.text--darken-1{color:#3949ab!important}.indigo.darken-2{border-color:#303f9f!important}.indigo.darken-2,.indigo.darken-2--after:after{background-color:#303f9f!important}.indigo--text.text--darken-2{color:#303f9f!important}.indigo.darken-3{border-color:#283593!important}.indigo.darken-3,.indigo.darken-3--after:after{background-color:#283593!important}.indigo--text.text--darken-3{color:#283593!important}.indigo.darken-4{border-color:#1a237e!important}.indigo.darken-4,.indigo.darken-4--after:after{background-color:#1a237e!important}.indigo--text.text--darken-4{color:#1a237e!important}.indigo.accent-1{border-color:#8c9eff!important}.indigo.accent-1,.indigo.accent-1--after:after{background-color:#8c9eff!important}.indigo--text.text--accent-1{color:#8c9eff!important}.indigo.accent-2{border-color:#536dfe!important}.indigo.accent-2,.indigo.accent-2--after:after{background-color:#536dfe!important}.indigo--text.text--accent-2{color:#536dfe!important}.indigo.accent-3{border-color:#3d5afe!important}.indigo.accent-3,.indigo.accent-3--after:after{background-color:#3d5afe!important}.indigo--text.text--accent-3{color:#3d5afe!important}.indigo.accent-4{border-color:#304ffe!important}.indigo.accent-4,.indigo.accent-4--after:after{background-color:#304ffe!important}.indigo--text.text--accent-4{color:#304ffe!important}.blue{background-color:#2196f3!important;border-color:#2196f3!important}.blue--text{color:#2196f3!important}.blue--after:after{background:#2196f3!important}.blue.lighten-5{border-color:#e3f2fd!important}.blue.lighten-5,.blue.lighten-5--after:after{background-color:#e3f2fd!important}.blue--text.text--lighten-5{color:#e3f2fd!important}.blue.lighten-4{border-color:#bbdefb!important}.blue.lighten-4,.blue.lighten-4--after:after{background-color:#bbdefb!important}.blue--text.text--lighten-4{color:#bbdefb!important}.blue.lighten-3{border-color:#90caf9!important}.blue.lighten-3,.blue.lighten-3--after:after{background-color:#90caf9!important}.blue--text.text--lighten-3{color:#90caf9!important}.blue.lighten-2{border-color:#64b5f6!important}.blue.lighten-2,.blue.lighten-2--after:after{background-color:#64b5f6!important}.blue--text.text--lighten-2{color:#64b5f6!important}.blue.lighten-1{border-color:#42a5f5!important}.blue.lighten-1,.blue.lighten-1--after:after{background-color:#42a5f5!important}.blue--text.text--lighten-1{color:#42a5f5!important}.blue.darken-1{border-color:#1e88e5!important}.blue.darken-1,.blue.darken-1--after:after{background-color:#1e88e5!important}.blue--text.text--darken-1{color:#1e88e5!important}.blue.darken-2{border-color:#1976d2!important}.blue.darken-2,.blue.darken-2--after:after{background-color:#1976d2!important}.blue--text.text--darken-2{color:#1976d2!important}.blue.darken-3{border-color:#1565c0!important}.blue.darken-3,.blue.darken-3--after:after{background-color:#1565c0!important}.blue--text.text--darken-3{color:#1565c0!important}.blue.darken-4{border-color:#0d47a1!important}.blue.darken-4,.blue.darken-4--after:after{background-color:#0d47a1!important}.blue--text.text--darken-4{color:#0d47a1!important}.blue.accent-1{border-color:#82b1ff!important}.blue.accent-1,.blue.accent-1--after:after{background-color:#82b1ff!important}.blue--text.text--accent-1{color:#82b1ff!important}.blue.accent-2{border-color:#448aff!important}.blue.accent-2,.blue.accent-2--after:after{background-color:#448aff!important}.blue--text.text--accent-2{color:#448aff!important}.blue.accent-3{border-color:#2979ff!important}.blue.accent-3,.blue.accent-3--after:after{background-color:#2979ff!important}.blue--text.text--accent-3{color:#2979ff!important}.blue.accent-4{border-color:#2962ff!important}.blue.accent-4,.blue.accent-4--after:after{background-color:#2962ff!important}.blue--text.text--accent-4{color:#2962ff!important}.light-blue{background-color:#03a9f4!important;border-color:#03a9f4!important}.light-blue--text{color:#03a9f4!important}.light-blue--after:after{background:#03a9f4!important}.light-blue.lighten-5{border-color:#e1f5fe!important}.light-blue.lighten-5,.light-blue.lighten-5--after:after{background-color:#e1f5fe!important}.light-blue--text.text--lighten-5{color:#e1f5fe!important}.light-blue.lighten-4{border-color:#b3e5fc!important}.light-blue.lighten-4,.light-blue.lighten-4--after:after{background-color:#b3e5fc!important}.light-blue--text.text--lighten-4{color:#b3e5fc!important}.light-blue.lighten-3{border-color:#81d4fa!important}.light-blue.lighten-3,.light-blue.lighten-3--after:after{background-color:#81d4fa!important}.light-blue--text.text--lighten-3{color:#81d4fa!important}.light-blue.lighten-2{border-color:#4fc3f7!important}.light-blue.lighten-2,.light-blue.lighten-2--after:after{background-color:#4fc3f7!important}.light-blue--text.text--lighten-2{color:#4fc3f7!important}.light-blue.lighten-1{border-color:#29b6f6!important}.light-blue.lighten-1,.light-blue.lighten-1--after:after{background-color:#29b6f6!important}.light-blue--text.text--lighten-1{color:#29b6f6!important}.light-blue.darken-1{border-color:#039be5!important}.light-blue.darken-1,.light-blue.darken-1--after:after{background-color:#039be5!important}.light-blue--text.text--darken-1{color:#039be5!important}.light-blue.darken-2{border-color:#0288d1!important}.light-blue.darken-2,.light-blue.darken-2--after:after{background-color:#0288d1!important}.light-blue--text.text--darken-2{color:#0288d1!important}.light-blue.darken-3{border-color:#0277bd!important}.light-blue.darken-3,.light-blue.darken-3--after:after{background-color:#0277bd!important}.light-blue--text.text--darken-3{color:#0277bd!important}.light-blue.darken-4{border-color:#01579b!important}.light-blue.darken-4,.light-blue.darken-4--after:after{background-color:#01579b!important}.light-blue--text.text--darken-4{color:#01579b!important}.light-blue.accent-1{border-color:#80d8ff!important}.light-blue.accent-1,.light-blue.accent-1--after:after{background-color:#80d8ff!important}.light-blue--text.text--accent-1{color:#80d8ff!important}.light-blue.accent-2{border-color:#40c4ff!important}.light-blue.accent-2,.light-blue.accent-2--after:after{background-color:#40c4ff!important}.light-blue--text.text--accent-2{color:#40c4ff!important}.light-blue.accent-3{border-color:#00b0ff!important}.light-blue.accent-3,.light-blue.accent-3--after:after{background-color:#00b0ff!important}.light-blue--text.text--accent-3{color:#00b0ff!important}.light-blue.accent-4{border-color:#0091ea!important}.light-blue.accent-4,.light-blue.accent-4--after:after{background-color:#0091ea!important}.light-blue--text.text--accent-4{color:#0091ea!important}.cyan{background-color:#00bcd4!important;border-color:#00bcd4!important}.cyan--text{color:#00bcd4!important}.cyan--after:after{background:#00bcd4!important}.cyan.lighten-5{border-color:#e0f7fa!important}.cyan.lighten-5,.cyan.lighten-5--after:after{background-color:#e0f7fa!important}.cyan--text.text--lighten-5{color:#e0f7fa!important}.cyan.lighten-4{border-color:#b2ebf2!important}.cyan.lighten-4,.cyan.lighten-4--after:after{background-color:#b2ebf2!important}.cyan--text.text--lighten-4{color:#b2ebf2!important}.cyan.lighten-3{border-color:#80deea!important}.cyan.lighten-3,.cyan.lighten-3--after:after{background-color:#80deea!important}.cyan--text.text--lighten-3{color:#80deea!important}.cyan.lighten-2{border-color:#4dd0e1!important}.cyan.lighten-2,.cyan.lighten-2--after:after{background-color:#4dd0e1!important}.cyan--text.text--lighten-2{color:#4dd0e1!important}.cyan.lighten-1{border-color:#26c6da!important}.cyan.lighten-1,.cyan.lighten-1--after:after{background-color:#26c6da!important}.cyan--text.text--lighten-1{color:#26c6da!important}.cyan.darken-1{border-color:#00acc1!important}.cyan.darken-1,.cyan.darken-1--after:after{background-color:#00acc1!important}.cyan--text.text--darken-1{color:#00acc1!important}.cyan.darken-2{border-color:#0097a7!important}.cyan.darken-2,.cyan.darken-2--after:after{background-color:#0097a7!important}.cyan--text.text--darken-2{color:#0097a7!important}.cyan.darken-3{border-color:#00838f!important}.cyan.darken-3,.cyan.darken-3--after:after{background-color:#00838f!important}.cyan--text.text--darken-3{color:#00838f!important}.cyan.darken-4{border-color:#006064!important}.cyan.darken-4,.cyan.darken-4--after:after{background-color:#006064!important}.cyan--text.text--darken-4{color:#006064!important}.cyan.accent-1{border-color:#84ffff!important}.cyan.accent-1,.cyan.accent-1--after:after{background-color:#84ffff!important}.cyan--text.text--accent-1{color:#84ffff!important}.cyan.accent-2{border-color:#18ffff!important}.cyan.accent-2,.cyan.accent-2--after:after{background-color:#18ffff!important}.cyan--text.text--accent-2{color:#18ffff!important}.cyan.accent-3{border-color:#00e5ff!important}.cyan.accent-3,.cyan.accent-3--after:after{background-color:#00e5ff!important}.cyan--text.text--accent-3{color:#00e5ff!important}.cyan.accent-4{border-color:#00b8d4!important}.cyan.accent-4,.cyan.accent-4--after:after{background-color:#00b8d4!important}.cyan--text.text--accent-4{color:#00b8d4!important}.teal{background-color:#009688!important;border-color:#009688!important}.teal--text{color:#009688!important}.teal--after:after{background:#009688!important}.teal.lighten-5{border-color:#e0f2f1!important}.teal.lighten-5,.teal.lighten-5--after:after{background-color:#e0f2f1!important}.teal--text.text--lighten-5{color:#e0f2f1!important}.teal.lighten-4{border-color:#b2dfdb!important}.teal.lighten-4,.teal.lighten-4--after:after{background-color:#b2dfdb!important}.teal--text.text--lighten-4{color:#b2dfdb!important}.teal.lighten-3{border-color:#80cbc4!important}.teal.lighten-3,.teal.lighten-3--after:after{background-color:#80cbc4!important}.teal--text.text--lighten-3{color:#80cbc4!important}.teal.lighten-2{border-color:#4db6ac!important}.teal.lighten-2,.teal.lighten-2--after:after{background-color:#4db6ac!important}.teal--text.text--lighten-2{color:#4db6ac!important}.teal.lighten-1{border-color:#26a69a!important}.teal.lighten-1,.teal.lighten-1--after:after{background-color:#26a69a!important}.teal--text.text--lighten-1{color:#26a69a!important}.teal.darken-1{border-color:#00897b!important}.teal.darken-1,.teal.darken-1--after:after{background-color:#00897b!important}.teal--text.text--darken-1{color:#00897b!important}.teal.darken-2{border-color:#00796b!important}.teal.darken-2,.teal.darken-2--after:after{background-color:#00796b!important}.teal--text.text--darken-2{color:#00796b!important}.teal.darken-3{border-color:#00695c!important}.teal.darken-3,.teal.darken-3--after:after{background-color:#00695c!important}.teal--text.text--darken-3{color:#00695c!important}.teal.darken-4{border-color:#004d40!important}.teal.darken-4,.teal.darken-4--after:after{background-color:#004d40!important}.teal--text.text--darken-4{color:#004d40!important}.teal.accent-1{border-color:#a7ffeb!important}.teal.accent-1,.teal.accent-1--after:after{background-color:#a7ffeb!important}.teal--text.text--accent-1{color:#a7ffeb!important}.teal.accent-2{border-color:#64ffda!important}.teal.accent-2,.teal.accent-2--after:after{background-color:#64ffda!important}.teal--text.text--accent-2{color:#64ffda!important}.teal.accent-3{border-color:#1de9b6!important}.teal.accent-3,.teal.accent-3--after:after{background-color:#1de9b6!important}.teal--text.text--accent-3{color:#1de9b6!important}.teal.accent-4{border-color:#00bfa5!important}.teal.accent-4,.teal.accent-4--after:after{background-color:#00bfa5!important}.teal--text.text--accent-4{color:#00bfa5!important}.green{background-color:#4caf50!important;border-color:#4caf50!important}.green--text{color:#4caf50!important}.green--after:after{background:#4caf50!important}.green.lighten-5{border-color:#e8f5e9!important}.green.lighten-5,.green.lighten-5--after:after{background-color:#e8f5e9!important}.green--text.text--lighten-5{color:#e8f5e9!important}.green.lighten-4{border-color:#c8e6c9!important}.green.lighten-4,.green.lighten-4--after:after{background-color:#c8e6c9!important}.green--text.text--lighten-4{color:#c8e6c9!important}.green.lighten-3{border-color:#a5d6a7!important}.green.lighten-3,.green.lighten-3--after:after{background-color:#a5d6a7!important}.green--text.text--lighten-3{color:#a5d6a7!important}.green.lighten-2{border-color:#81c784!important}.green.lighten-2,.green.lighten-2--after:after{background-color:#81c784!important}.green--text.text--lighten-2{color:#81c784!important}.green.lighten-1{border-color:#66bb6a!important}.green.lighten-1,.green.lighten-1--after:after{background-color:#66bb6a!important}.green--text.text--lighten-1{color:#66bb6a!important}.green.darken-1{border-color:#43a047!important}.green.darken-1,.green.darken-1--after:after{background-color:#43a047!important}.green--text.text--darken-1{color:#43a047!important}.green.darken-2{border-color:#388e3c!important}.green.darken-2,.green.darken-2--after:after{background-color:#388e3c!important}.green--text.text--darken-2{color:#388e3c!important}.green.darken-3{border-color:#2e7d32!important}.green.darken-3,.green.darken-3--after:after{background-color:#2e7d32!important}.green--text.text--darken-3{color:#2e7d32!important}.green.darken-4{border-color:#1b5e20!important}.green.darken-4,.green.darken-4--after:after{background-color:#1b5e20!important}.green--text.text--darken-4{color:#1b5e20!important}.green.accent-1{border-color:#b9f6ca!important}.green.accent-1,.green.accent-1--after:after{background-color:#b9f6ca!important}.green--text.text--accent-1{color:#b9f6ca!important}.green.accent-2{border-color:#69f0ae!important}.green.accent-2,.green.accent-2--after:after{background-color:#69f0ae!important}.green--text.text--accent-2{color:#69f0ae!important}.green.accent-3{border-color:#00e676!important}.green.accent-3,.green.accent-3--after:after{background-color:#00e676!important}.green--text.text--accent-3{color:#00e676!important}.green.accent-4{border-color:#00c853!important}.green.accent-4,.green.accent-4--after:after{background-color:#00c853!important}.green--text.text--accent-4{color:#00c853!important}.light-green{background-color:#8bc34a!important;border-color:#8bc34a!important}.light-green--text{color:#8bc34a!important}.light-green--after:after{background:#8bc34a!important}.light-green.lighten-5{border-color:#f1f8e9!important}.light-green.lighten-5,.light-green.lighten-5--after:after{background-color:#f1f8e9!important}.light-green--text.text--lighten-5{color:#f1f8e9!important}.light-green.lighten-4{border-color:#dcedc8!important}.light-green.lighten-4,.light-green.lighten-4--after:after{background-color:#dcedc8!important}.light-green--text.text--lighten-4{color:#dcedc8!important}.light-green.lighten-3{border-color:#c5e1a5!important}.light-green.lighten-3,.light-green.lighten-3--after:after{background-color:#c5e1a5!important}.light-green--text.text--lighten-3{color:#c5e1a5!important}.light-green.lighten-2{border-color:#aed581!important}.light-green.lighten-2,.light-green.lighten-2--after:after{background-color:#aed581!important}.light-green--text.text--lighten-2{color:#aed581!important}.light-green.lighten-1{border-color:#9ccc65!important}.light-green.lighten-1,.light-green.lighten-1--after:after{background-color:#9ccc65!important}.light-green--text.text--lighten-1{color:#9ccc65!important}.light-green.darken-1{border-color:#7cb342!important}.light-green.darken-1,.light-green.darken-1--after:after{background-color:#7cb342!important}.light-green--text.text--darken-1{color:#7cb342!important}.light-green.darken-2{border-color:#689f38!important}.light-green.darken-2,.light-green.darken-2--after:after{background-color:#689f38!important}.light-green--text.text--darken-2{color:#689f38!important}.light-green.darken-3{border-color:#558b2f!important}.light-green.darken-3,.light-green.darken-3--after:after{background-color:#558b2f!important}.light-green--text.text--darken-3{color:#558b2f!important}.light-green.darken-4{border-color:#33691e!important}.light-green.darken-4,.light-green.darken-4--after:after{background-color:#33691e!important}.light-green--text.text--darken-4{color:#33691e!important}.light-green.accent-1{border-color:#ccff90!important}.light-green.accent-1,.light-green.accent-1--after:after{background-color:#ccff90!important}.light-green--text.text--accent-1{color:#ccff90!important}.light-green.accent-2{border-color:#b2ff59!important}.light-green.accent-2,.light-green.accent-2--after:after{background-color:#b2ff59!important}.light-green--text.text--accent-2{color:#b2ff59!important}.light-green.accent-3{border-color:#76ff03!important}.light-green.accent-3,.light-green.accent-3--after:after{background-color:#76ff03!important}.light-green--text.text--accent-3{color:#76ff03!important}.light-green.accent-4{border-color:#64dd17!important}.light-green.accent-4,.light-green.accent-4--after:after{background-color:#64dd17!important}.light-green--text.text--accent-4{color:#64dd17!important}.lime{background-color:#cddc39!important;border-color:#cddc39!important}.lime--text{color:#cddc39!important}.lime--after:after{background:#cddc39!important}.lime.lighten-5{border-color:#f9fbe7!important}.lime.lighten-5,.lime.lighten-5--after:after{background-color:#f9fbe7!important}.lime--text.text--lighten-5{color:#f9fbe7!important}.lime.lighten-4{border-color:#f0f4c3!important}.lime.lighten-4,.lime.lighten-4--after:after{background-color:#f0f4c3!important}.lime--text.text--lighten-4{color:#f0f4c3!important}.lime.lighten-3{border-color:#e6ee9c!important}.lime.lighten-3,.lime.lighten-3--after:after{background-color:#e6ee9c!important}.lime--text.text--lighten-3{color:#e6ee9c!important}.lime.lighten-2{border-color:#dce775!important}.lime.lighten-2,.lime.lighten-2--after:after{background-color:#dce775!important}.lime--text.text--lighten-2{color:#dce775!important}.lime.lighten-1{border-color:#d4e157!important}.lime.lighten-1,.lime.lighten-1--after:after{background-color:#d4e157!important}.lime--text.text--lighten-1{color:#d4e157!important}.lime.darken-1{border-color:#c0ca33!important}.lime.darken-1,.lime.darken-1--after:after{background-color:#c0ca33!important}.lime--text.text--darken-1{color:#c0ca33!important}.lime.darken-2{border-color:#afb42b!important}.lime.darken-2,.lime.darken-2--after:after{background-color:#afb42b!important}.lime--text.text--darken-2{color:#afb42b!important}.lime.darken-3{border-color:#9e9d24!important}.lime.darken-3,.lime.darken-3--after:after{background-color:#9e9d24!important}.lime--text.text--darken-3{color:#9e9d24!important}.lime.darken-4{border-color:#827717!important}.lime.darken-4,.lime.darken-4--after:after{background-color:#827717!important}.lime--text.text--darken-4{color:#827717!important}.lime.accent-1{border-color:#f4ff81!important}.lime.accent-1,.lime.accent-1--after:after{background-color:#f4ff81!important}.lime--text.text--accent-1{color:#f4ff81!important}.lime.accent-2{border-color:#eeff41!important}.lime.accent-2,.lime.accent-2--after:after{background-color:#eeff41!important}.lime--text.text--accent-2{color:#eeff41!important}.lime.accent-3{border-color:#c6ff00!important}.lime.accent-3,.lime.accent-3--after:after{background-color:#c6ff00!important}.lime--text.text--accent-3{color:#c6ff00!important}.lime.accent-4{border-color:#aeea00!important}.lime.accent-4,.lime.accent-4--after:after{background-color:#aeea00!important}.lime--text.text--accent-4{color:#aeea00!important}.yellow{background-color:#ffeb3b!important;border-color:#ffeb3b!important}.yellow--text{color:#ffeb3b!important}.yellow--after:after{background:#ffeb3b!important}.yellow.lighten-5{border-color:#fffde7!important}.yellow.lighten-5,.yellow.lighten-5--after:after{background-color:#fffde7!important}.yellow--text.text--lighten-5{color:#fffde7!important}.yellow.lighten-4{border-color:#fff9c4!important}.yellow.lighten-4,.yellow.lighten-4--after:after{background-color:#fff9c4!important}.yellow--text.text--lighten-4{color:#fff9c4!important}.yellow.lighten-3{border-color:#fff59d!important}.yellow.lighten-3,.yellow.lighten-3--after:after{background-color:#fff59d!important}.yellow--text.text--lighten-3{color:#fff59d!important}.yellow.lighten-2{border-color:#fff176!important}.yellow.lighten-2,.yellow.lighten-2--after:after{background-color:#fff176!important}.yellow--text.text--lighten-2{color:#fff176!important}.yellow.lighten-1{border-color:#ffee58!important}.yellow.lighten-1,.yellow.lighten-1--after:after{background-color:#ffee58!important}.yellow--text.text--lighten-1{color:#ffee58!important}.yellow.darken-1{border-color:#fdd835!important}.yellow.darken-1,.yellow.darken-1--after:after{background-color:#fdd835!important}.yellow--text.text--darken-1{color:#fdd835!important}.yellow.darken-2{border-color:#fbc02d!important}.yellow.darken-2,.yellow.darken-2--after:after{background-color:#fbc02d!important}.yellow--text.text--darken-2{color:#fbc02d!important}.yellow.darken-3{border-color:#f9a825!important}.yellow.darken-3,.yellow.darken-3--after:after{background-color:#f9a825!important}.yellow--text.text--darken-3{color:#f9a825!important}.yellow.darken-4{border-color:#f57f17!important}.yellow.darken-4,.yellow.darken-4--after:after{background-color:#f57f17!important}.yellow--text.text--darken-4{color:#f57f17!important}.yellow.accent-1{border-color:#ffff8d!important}.yellow.accent-1,.yellow.accent-1--after:after{background-color:#ffff8d!important}.yellow--text.text--accent-1{color:#ffff8d!important}.yellow.accent-2{border-color:#ff0!important}.yellow.accent-2,.yellow.accent-2--after:after{background-color:#ff0!important}.yellow--text.text--accent-2{color:#ff0!important}.yellow.accent-3{border-color:#ffea00!important}.yellow.accent-3,.yellow.accent-3--after:after{background-color:#ffea00!important}.yellow--text.text--accent-3{color:#ffea00!important}.yellow.accent-4{border-color:#ffd600!important}.yellow.accent-4,.yellow.accent-4--after:after{background-color:#ffd600!important}.yellow--text.text--accent-4{color:#ffd600!important}.amber{background-color:#ffc107!important;border-color:#ffc107!important}.amber--text{color:#ffc107!important}.amber--after:after{background:#ffc107!important}.amber.lighten-5{border-color:#fff8e1!important}.amber.lighten-5,.amber.lighten-5--after:after{background-color:#fff8e1!important}.amber--text.text--lighten-5{color:#fff8e1!important}.amber.lighten-4{border-color:#ffecb3!important}.amber.lighten-4,.amber.lighten-4--after:after{background-color:#ffecb3!important}.amber--text.text--lighten-4{color:#ffecb3!important}.amber.lighten-3{border-color:#ffe082!important}.amber.lighten-3,.amber.lighten-3--after:after{background-color:#ffe082!important}.amber--text.text--lighten-3{color:#ffe082!important}.amber.lighten-2{border-color:#ffd54f!important}.amber.lighten-2,.amber.lighten-2--after:after{background-color:#ffd54f!important}.amber--text.text--lighten-2{color:#ffd54f!important}.amber.lighten-1{border-color:#ffca28!important}.amber.lighten-1,.amber.lighten-1--after:after{background-color:#ffca28!important}.amber--text.text--lighten-1{color:#ffca28!important}.amber.darken-1{border-color:#ffb300!important}.amber.darken-1,.amber.darken-1--after:after{background-color:#ffb300!important}.amber--text.text--darken-1{color:#ffb300!important}.amber.darken-2{border-color:#ffa000!important}.amber.darken-2,.amber.darken-2--after:after{background-color:#ffa000!important}.amber--text.text--darken-2{color:#ffa000!important}.amber.darken-3{border-color:#ff8f00!important}.amber.darken-3,.amber.darken-3--after:after{background-color:#ff8f00!important}.amber--text.text--darken-3{color:#ff8f00!important}.amber.darken-4{border-color:#ff6f00!important}.amber.darken-4,.amber.darken-4--after:after{background-color:#ff6f00!important}.amber--text.text--darken-4{color:#ff6f00!important}.amber.accent-1{border-color:#ffe57f!important}.amber.accent-1,.amber.accent-1--after:after{background-color:#ffe57f!important}.amber--text.text--accent-1{color:#ffe57f!important}.amber.accent-2{border-color:#ffd740!important}.amber.accent-2,.amber.accent-2--after:after{background-color:#ffd740!important}.amber--text.text--accent-2{color:#ffd740!important}.amber.accent-3{border-color:#ffc400!important}.amber.accent-3,.amber.accent-3--after:after{background-color:#ffc400!important}.amber--text.text--accent-3{color:#ffc400!important}.amber.accent-4{border-color:#ffab00!important}.amber.accent-4,.amber.accent-4--after:after{background-color:#ffab00!important}.amber--text.text--accent-4{color:#ffab00!important}.orange{background-color:#ff9800!important;border-color:#ff9800!important}.orange--text{color:#ff9800!important}.orange--after:after{background:#ff9800!important}.orange.lighten-5{border-color:#fff3e0!important}.orange.lighten-5,.orange.lighten-5--after:after{background-color:#fff3e0!important}.orange--text.text--lighten-5{color:#fff3e0!important}.orange.lighten-4{border-color:#ffe0b2!important}.orange.lighten-4,.orange.lighten-4--after:after{background-color:#ffe0b2!important}.orange--text.text--lighten-4{color:#ffe0b2!important}.orange.lighten-3{border-color:#ffcc80!important}.orange.lighten-3,.orange.lighten-3--after:after{background-color:#ffcc80!important}.orange--text.text--lighten-3{color:#ffcc80!important}.orange.lighten-2{border-color:#ffb74d!important}.orange.lighten-2,.orange.lighten-2--after:after{background-color:#ffb74d!important}.orange--text.text--lighten-2{color:#ffb74d!important}.orange.lighten-1{border-color:#ffa726!important}.orange.lighten-1,.orange.lighten-1--after:after{background-color:#ffa726!important}.orange--text.text--lighten-1{color:#ffa726!important}.orange.darken-1{border-color:#fb8c00!important}.orange.darken-1,.orange.darken-1--after:after{background-color:#fb8c00!important}.orange--text.text--darken-1{color:#fb8c00!important}.orange.darken-2{border-color:#f57c00!important}.orange.darken-2,.orange.darken-2--after:after{background-color:#f57c00!important}.orange--text.text--darken-2{color:#f57c00!important}.orange.darken-3{border-color:#ef6c00!important}.orange.darken-3,.orange.darken-3--after:after{background-color:#ef6c00!important}.orange--text.text--darken-3{color:#ef6c00!important}.orange.darken-4{border-color:#e65100!important}.orange.darken-4,.orange.darken-4--after:after{background-color:#e65100!important}.orange--text.text--darken-4{color:#e65100!important}.orange.accent-1{border-color:#ffd180!important}.orange.accent-1,.orange.accent-1--after:after{background-color:#ffd180!important}.orange--text.text--accent-1{color:#ffd180!important}.orange.accent-2{border-color:#ffab40!important}.orange.accent-2,.orange.accent-2--after:after{background-color:#ffab40!important}.orange--text.text--accent-2{color:#ffab40!important}.orange.accent-3{border-color:#ff9100!important}.orange.accent-3,.orange.accent-3--after:after{background-color:#ff9100!important}.orange--text.text--accent-3{color:#ff9100!important}.orange.accent-4{border-color:#ff6d00!important}.orange.accent-4,.orange.accent-4--after:after{background-color:#ff6d00!important}.orange--text.text--accent-4{color:#ff6d00!important}.deep-orange{background-color:#ff5722!important;border-color:#ff5722!important}.deep-orange--text{color:#ff5722!important}.deep-orange--after:after{background:#ff5722!important}.deep-orange.lighten-5{border-color:#fbe9e7!important}.deep-orange.lighten-5,.deep-orange.lighten-5--after:after{background-color:#fbe9e7!important}.deep-orange--text.text--lighten-5{color:#fbe9e7!important}.deep-orange.lighten-4{border-color:#ffccbc!important}.deep-orange.lighten-4,.deep-orange.lighten-4--after:after{background-color:#ffccbc!important}.deep-orange--text.text--lighten-4{color:#ffccbc!important}.deep-orange.lighten-3{border-color:#ffab91!important}.deep-orange.lighten-3,.deep-orange.lighten-3--after:after{background-color:#ffab91!important}.deep-orange--text.text--lighten-3{color:#ffab91!important}.deep-orange.lighten-2{border-color:#ff8a65!important}.deep-orange.lighten-2,.deep-orange.lighten-2--after:after{background-color:#ff8a65!important}.deep-orange--text.text--lighten-2{color:#ff8a65!important}.deep-orange.lighten-1{border-color:#ff7043!important}.deep-orange.lighten-1,.deep-orange.lighten-1--after:after{background-color:#ff7043!important}.deep-orange--text.text--lighten-1{color:#ff7043!important}.deep-orange.darken-1{border-color:#f4511e!important}.deep-orange.darken-1,.deep-orange.darken-1--after:after{background-color:#f4511e!important}.deep-orange--text.text--darken-1{color:#f4511e!important}.deep-orange.darken-2{border-color:#e64a19!important}.deep-orange.darken-2,.deep-orange.darken-2--after:after{background-color:#e64a19!important}.deep-orange--text.text--darken-2{color:#e64a19!important}.deep-orange.darken-3{border-color:#d84315!important}.deep-orange.darken-3,.deep-orange.darken-3--after:after{background-color:#d84315!important}.deep-orange--text.text--darken-3{color:#d84315!important}.deep-orange.darken-4{border-color:#bf360c!important}.deep-orange.darken-4,.deep-orange.darken-4--after:after{background-color:#bf360c!important}.deep-orange--text.text--darken-4{color:#bf360c!important}.deep-orange.accent-1{border-color:#ff9e80!important}.deep-orange.accent-1,.deep-orange.accent-1--after:after{background-color:#ff9e80!important}.deep-orange--text.text--accent-1{color:#ff9e80!important}.deep-orange.accent-2{border-color:#ff6e40!important}.deep-orange.accent-2,.deep-orange.accent-2--after:after{background-color:#ff6e40!important}.deep-orange--text.text--accent-2{color:#ff6e40!important}.deep-orange.accent-3{border-color:#ff3d00!important}.deep-orange.accent-3,.deep-orange.accent-3--after:after{background-color:#ff3d00!important}.deep-orange--text.text--accent-3{color:#ff3d00!important}.deep-orange.accent-4{border-color:#dd2c00!important}.deep-orange.accent-4,.deep-orange.accent-4--after:after{background-color:#dd2c00!important}.deep-orange--text.text--accent-4{color:#dd2c00!important}.brown{background-color:#795548!important;border-color:#795548!important}.brown--text{color:#795548!important}.brown--after:after{background:#795548!important}.brown.lighten-5{border-color:#efebe9!important}.brown.lighten-5,.brown.lighten-5--after:after{background-color:#efebe9!important}.brown--text.text--lighten-5{color:#efebe9!important}.brown.lighten-4{border-color:#d7ccc8!important}.brown.lighten-4,.brown.lighten-4--after:after{background-color:#d7ccc8!important}.brown--text.text--lighten-4{color:#d7ccc8!important}.brown.lighten-3{border-color:#bcaaa4!important}.brown.lighten-3,.brown.lighten-3--after:after{background-color:#bcaaa4!important}.brown--text.text--lighten-3{color:#bcaaa4!important}.brown.lighten-2{border-color:#a1887f!important}.brown.lighten-2,.brown.lighten-2--after:after{background-color:#a1887f!important}.brown--text.text--lighten-2{color:#a1887f!important}.brown.lighten-1{border-color:#8d6e63!important}.brown.lighten-1,.brown.lighten-1--after:after{background-color:#8d6e63!important}.brown--text.text--lighten-1{color:#8d6e63!important}.brown.darken-1{border-color:#6d4c41!important}.brown.darken-1,.brown.darken-1--after:after{background-color:#6d4c41!important}.brown--text.text--darken-1{color:#6d4c41!important}.brown.darken-2{border-color:#5d4037!important}.brown.darken-2,.brown.darken-2--after:after{background-color:#5d4037!important}.brown--text.text--darken-2{color:#5d4037!important}.brown.darken-3{border-color:#4e342e!important}.brown.darken-3,.brown.darken-3--after:after{background-color:#4e342e!important}.brown--text.text--darken-3{color:#4e342e!important}.brown.darken-4{border-color:#3e2723!important}.brown.darken-4,.brown.darken-4--after:after{background-color:#3e2723!important}.brown--text.text--darken-4{color:#3e2723!important}.blue-grey{background-color:#607d8b!important;border-color:#607d8b!important}.blue-grey--text{color:#607d8b!important}.blue-grey--after:after{background:#607d8b!important}.blue-grey.lighten-5{border-color:#eceff1!important}.blue-grey.lighten-5,.blue-grey.lighten-5--after:after{background-color:#eceff1!important}.blue-grey--text.text--lighten-5{color:#eceff1!important}.blue-grey.lighten-4{border-color:#cfd8dc!important}.blue-grey.lighten-4,.blue-grey.lighten-4--after:after{background-color:#cfd8dc!important}.blue-grey--text.text--lighten-4{color:#cfd8dc!important}.blue-grey.lighten-3{border-color:#b0bec5!important}.blue-grey.lighten-3,.blue-grey.lighten-3--after:after{background-color:#b0bec5!important}.blue-grey--text.text--lighten-3{color:#b0bec5!important}.blue-grey.lighten-2{border-color:#90a4ae!important}.blue-grey.lighten-2,.blue-grey.lighten-2--after:after{background-color:#90a4ae!important}.blue-grey--text.text--lighten-2{color:#90a4ae!important}.blue-grey.lighten-1{border-color:#78909c!important}.blue-grey.lighten-1,.blue-grey.lighten-1--after:after{background-color:#78909c!important}.blue-grey--text.text--lighten-1{color:#78909c!important}.blue-grey.darken-1{border-color:#546e7a!important}.blue-grey.darken-1,.blue-grey.darken-1--after:after{background-color:#546e7a!important}.blue-grey--text.text--darken-1{color:#546e7a!important}.blue-grey.darken-2{border-color:#455a64!important}.blue-grey.darken-2,.blue-grey.darken-2--after:after{background-color:#455a64!important}.blue-grey--text.text--darken-2{color:#455a64!important}.blue-grey.darken-3{border-color:#37474f!important}.blue-grey.darken-3,.blue-grey.darken-3--after:after{background-color:#37474f!important}.blue-grey--text.text--darken-3{color:#37474f!important}.blue-grey.darken-4{border-color:#263238!important}.blue-grey.darken-4,.blue-grey.darken-4--after:after{background-color:#263238!important}.blue-grey--text.text--darken-4{color:#263238!important}.grey{background-color:#9e9e9e!important;border-color:#9e9e9e!important}.grey--text{color:#9e9e9e!important}.grey--after:after{background:#9e9e9e!important}.grey.lighten-5{border-color:#fafafa!important}.grey.lighten-5,.grey.lighten-5--after:after{background-color:#fafafa!important}.grey--text.text--lighten-5{color:#fafafa!important}.grey.lighten-4{border-color:#f5f5f5!important}.grey.lighten-4,.grey.lighten-4--after:after{background-color:#f5f5f5!important}.grey--text.text--lighten-4{color:#f5f5f5!important}.grey.lighten-3{border-color:#eee!important}.grey.lighten-3,.grey.lighten-3--after:after{background-color:#eee!important}.grey--text.text--lighten-3{color:#eee!important}.grey.lighten-2{border-color:#e0e0e0!important}.grey.lighten-2,.grey.lighten-2--after:after{background-color:#e0e0e0!important}.grey--text.text--lighten-2{color:#e0e0e0!important}.grey.lighten-1{border-color:#bdbdbd!important}.grey.lighten-1,.grey.lighten-1--after:after{background-color:#bdbdbd!important}.grey--text.text--lighten-1{color:#bdbdbd!important}.grey.darken-1{border-color:#757575!important}.grey.darken-1,.grey.darken-1--after:after{background-color:#757575!important}.grey--text.text--darken-1{color:#757575!important}.grey.darken-2{border-color:#616161!important}.grey.darken-2,.grey.darken-2--after:after{background-color:#616161!important}.grey--text.text--darken-2{color:#616161!important}.grey.darken-3{border-color:#424242!important}.grey.darken-3,.grey.darken-3--after:after{background-color:#424242!important}.grey--text.text--darken-3{color:#424242!important}.grey.darken-4{border-color:#212121!important}.grey.darken-4,.grey.darken-4--after:after{background-color:#212121!important}.grey--text.text--darken-4{color:#212121!important}.shades.black{border-color:#000!important}.shades.black,.shades.black--after:after{background-color:#000!important}.shades--text.text--black{color:#000!important}.shades.white{border-color:#fff!important}.shades.white,.shades.white--after:after{background-color:#fff!important}.shades--text.text--white{color:#fff!important}.shades.transparent{border-color:transparent!important}.shades.transparent,.shades.transparent--after:after{background-color:transparent!important}.shades--text.text--transparent{color:transparent!important}.carousel-transition-enter{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.carousel-transition-leave,.carousel-transition-leave-to{position:absolute;top:0}.carousel-reverse-transition-enter,.carousel-transition-leave,.carousel-transition-leave-to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.carousel-reverse-transition-leave,.carousel-reverse-transition-leave-to{position:absolute;top:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.dialog-transition-enter,.dialog-transition-leave-to{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}.dialog-transition-enter-to,.dialog-transition-leave{opacity:1}.dialog-bottom-transition-enter,.dialog-bottom-transition-leave-to{-webkit-transform:translateY(100%);transform:translateY(100%)}.tab-transition-enter{-webkit-transform:translate(100%);transform:translate(100%)}.tab-transition-enter-to{-webkit-transform:translate(0);transform:translate(0)}.tab-transition-leave,.tab-transition-leave-active{position:absolute;top:0}.tab-transition-leave-to{position:absolute}.tab-reverse-transition-enter,.tab-transition-leave-to{-webkit-transform:translate(-100%);transform:translate(-100%)}.tab-reverse-transition-leave,.tab-reverse-transition-leave-to{top:0;position:absolute;-webkit-transform:translate(100%);transform:translate(100%)}.scale-transition-leave-active{position:absolute}.scale-transition-enter,.scale-transition-enter-active,.scale-transition-leave,.scale-transition-leave-to{-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1)}.scale-transition-enter,.scale-transition-leave,.scale-transition-leave-to{opacity:0;-webkit-transform:scale(0);transform:scale(0)}.slide-y-transition-leave-active{position:absolute}.slide-y-transition-enter-active,.slide-y-transition-leave,.slide-y-transition-leave-to{-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1)}.slide-y-transition-enter,.slide-y-transition-leave-to{opacity:0;-webkit-transform:translateY(-15px);transform:translateY(-15px)}.slide-y-reverse-transition-leave-active{position:absolute}.slide-y-reverse-transition-enter-active,.slide-y-reverse-transition-leave,.slide-y-reverse-transition-leave-to{-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1)}.slide-y-reverse-transition-enter,.slide-y-reverse-transition-leave-to{opacity:0;-webkit-transform:translateY(15px);transform:translateY(15px)}.slide-x-transition-leave-active{position:absolute}.slide-x-transition-enter-active,.slide-x-transition-leave,.slide-x-transition-leave-to{-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1)}.slide-x-transition-enter,.slide-x-transition-leave-to{opacity:0;-webkit-transform:translateX(-15px);transform:translateX(-15px)}.slide-x-reverse-transition-leave-active{position:absolute}.slide-x-reverse-transition-enter-active,.slide-x-reverse-transition-leave,.slide-x-reverse-transition-leave-to{-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1)}.slide-x-reverse-transition-enter,.slide-x-reverse-transition-leave-to{opacity:0;-webkit-transform:translateX(15px);transform:translateX(15px)}.fade-transition-leave-active{position:absolute}.fade-transition-enter-active,.fade-transition-leave,.fade-transition-leave-to{-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1)}.fade-transition-enter,.fade-transition-leave-to{opacity:0}blockquote{border-left:5px solid #1976d2;padding:1rem 0 1rem 1.5rem;font-size:1.5rem;font-weight:300}code,kbd{background:#9e9e9e;color:#bd4147;display:inline-block;background-color:#f5f5f5;border-radius:3px;white-space:pre-wrap;font-size:85%;font-weight:100!important;font-weight:900!important}code:after,code:before,kbd:after,kbd:before{content:\"\\A0\";letter-spacing:-1px}kbd{background:#424242;color:#fff}html{font-size:14px;color:#424242;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:rgba(0,0,0,0)}body{background:#fff;overflow-x:hidden;font-family:Roboto,sans-serif;line-height:1.5}main{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;min-width:0;overflow:hidden}header{width:100%}a{color:#1976d2}h1{color:#424242;font-size:112px;font-weight:300;line-height:1;letter-spacing:-.04em;margin-bottom:1rem}@media screen and (max-width:576px){h1{font-size:67.2px}}h2{color:#424242;font-size:56px;font-weight:400;line-height:1.35;letter-spacing:-.02em;margin-bottom:1rem}@media screen and (max-width:576px){h2{font-size:33.6px}}h3{color:#424242;font-size:45px;font-weight:400;line-height:48px;letter-spacing:normal;margin-bottom:1rem}@media screen and (max-width:576px){h3{font-size:27px}}h4{color:#424242;font-size:34px;font-weight:400;line-height:40px;letter-spacing:normal;margin-bottom:1rem}@media screen and (max-width:576px){h4{font-size:20.4px}}h5{color:#424242;font-size:24px;font-weight:400;line-height:32px;letter-spacing:normal;margin-bottom:1rem}@media screen and (max-width:576px){h5{font-size:14.399999999999999px}}h6{color:#424242;font-size:20px;font-weight:500;line-height:1;letter-spacing:.02em;margin-bottom:1rem}@media screen and (max-width:576px){h6{font-size:12px}}.display-4{font-size:112px;font-weight:300;line-height:1;letter-spacing:-.04em}.display-3{font-size:56px;font-weight:400;line-height:1.35;letter-spacing:-.02em}.display-2{font-size:45px;line-height:48px}.display-1,.display-2{font-weight:400;letter-spacing:normal}.display-1{font-size:34px;line-height:40px}.headline{font-size:24px;font-weight:400;line-height:32px;letter-spacing:normal}.title{font-size:20px;font-weight:500;line-height:1;letter-spacing:.02em}.subheading{font-size:16px}p{margin-bottom:1rem}.alert{border-radius:0;border-width:4px 0 0;border-style:solid;border-color:rgba(0,0,0,.8);color:inherit;display:-webkit-box;display:-ms-flexbox;display:flex;font-size:1.1rem;text-align:left;padding:1.5rem;position:relative;margin:.25rem auto}.alert__dismissible,.alert__icon{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center;margin-right:1.5rem;font-size:2rem;color:rgba(0,0,0,.3)}.alert__dismissible{margin-right:0;margin-left:1.5rem;-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1);-ms-flex-item-align:start;align-self:flex-start;text-decoration:none}.alert__dismissible:hover{color:rgba(26,26,26,.3)}.alert>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%}.alert--info{background-color:#2196f3}.alert--error,.alert--info{color:#fff;border-color:rgba(0,0,0,.2)}.alert--error{background-color:#ff5252}.alert--success{background-color:#4caf50}.alert--success,.alert--warning{color:#fff;border-color:rgba(0,0,0,.2)}.alert--warning{background-color:#ffc107}.alert--no-icon .alert__icon{display:none}@media screen and (max-width:576px){.alert__icon{display:none}}.avatar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center}.avatar .icon,.avatar img{height:42px;width:42px;border-radius:50%}.badge{position:relative}.badge:after{color:#fff;content:attr(data-badge);display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;font-family:Roboto,sans-serif;top:-11px;right:-22px;background-color:#1976d2;border-radius:50%;height:22px;width:22px;font-size:.9rem;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap}.badge--overlap.badge--left:after{left:0}.badge--overlap:after{top:0;right:0}.badge--icon:after{font-family:Material Icons}.badge--left:after{left:-22px}.breadcrumbs{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;margin:0;list-style-type:none}.breadcrumbs li:not(:last-child):after{color:#bdbdbd;content:attr(data-divider);vertical-align:middle}.breadcrumbs li:last-child a{color:#bdbdbd;pointer-events:none;cursor:default}.breadcrumbs--with-icons li:not(:last-child):after{font-family:Material Icons}.breadcrumbs__item{-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#1976d2;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;font-size:1rem;padding:0 1rem;height:40px;text-decoration:none;line-height:40px;-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1)}.breadcrumbs__item:hover{color:#757575}.breadcrumbs__item--disabled{color:#e0e0e0;pointer-events:none}.btn{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#e0e0e0;border-radius:2px;color:#fff;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;height:36px;font-size:14px;font-weight:500;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:6px;min-width:88px;outline:0;padding:0 16px;text-transform:uppercase;text-decoration:none;position:relative;vertical-align:middle}.btn,.btn:after{-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1)}.btn:after{border-radius:inherit;bottom:0;content:\"\";left:0;position:absolute;top:0;right:0;z-index:0}.btn.btn--disabled{box-shadow:none!important;pointer-events:none;opacity:.4}.btn.btn--disabled:not(.btn--loader){color:hsla(0,0%,100%,.3)}.btn__content{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1);z-index:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.btn--default,.btn--flat{color:#424242}.btn--flat{background-color:transparent!important;box-shadow:none!important}.btn--flat.btn--light:hover:after{background-color:rgba(0,0,0,.12)}.btn--flat.btn--light.btn--disabled{color:rgba(0,0,0,.26)}.btn--flat.btn--dark{color:#fff}.btn--flat.btn--dark:hover:after{background-color:hsla(0,0%,100%,.12)}.btn--flat.btn--dark.btn--disabled{color:hsla(0,0%,100%,.3)}.btn--raised{will-change:box-shadow;box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}.btn--raised:active{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.btn--icon{background:transparent;box-shadow:none!important;border-radius:50%;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:36px;width:36px;min-width:0;padding:0}.btn--icon:after{opacity:.12}.btn--icon:after,.btn--icon:hover{border-radius:50%}.btn--icon:hover:after{background-color:currentColor;opacity:.12}.btn--icon.btn--disabled{background-color:transparent!important;color:rgba(0,0,0,.26)!important;pointer-events:none}.btn--floating{min-width:0;height:56px;width:56px;padding:initial}.btn--floating,.btn--floating:after{border-radius:50%}.btn--floating .icon{height:24px;width:24px}.btn--floating.btn--small{height:40px;width:40px}.btn--floating.btn--small .icon{font-size:18px;height:18px;width:18px}.btn--floating.btn--large{height:72px;width:72px}.btn--floating.btn--large .icon{font-size:30px;height:30px;width:30px}.btn--light:hover:after{background-color:rgba(0,0,0,.12)}.btn--light.btn--disabled{color:rgba(0,0,0,.26)!important;opacity:1}.btn--light.btn--disabled:not(.btn--flat){background-color:rgba(0,0,0,.12)!important}.btn--dark:hover:after{background-color:hsla(0,0%,100%,.12)}.btn--dark.btn--disabled{color:hsla(0,0%,100%,.3)!important;opacity:1}.btn--dark.btn--disabled:not(.btn--flat){background-color:hsla(0,0%,100%,.12)!important}.btn--small{font-size:13px;height:28px}.btn--small.btn--icon{width:28px}.btn--large{font-size:15px;height:44px}.btn--large.btn--icon{width:44px}.btn--loader{pointer-events:none}.btn--loader .btn__content{opacity:0}.btn__loading{position:absolute;width:100%;height:100%;left:0;top:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.btn__loading .icon--left{margin-right:1rem;line-height:inherit}.btn__loading .icon--right{margin-left:1rem;line-height:inherit}.btn--outline{border:1px solid currentColor;background:transparent!important}.btn--outline,.btn--outline:hover{box-shadow:none}.btn--block{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;margin:6px 0;width:100%}.btn--round,.btn--round:after{border-radius:28px}.btn .icon--right{margin-left:16px}.btn .icon--left{margin-right:16px}.btn-dropdown{display:block;position:relative}.btn-dropdown input{text-align:left;border-right:1px solid transparent;-webkit-transition:border-right .3s cubic-bezier(.4,0,.6,1);transition:border-right .3s cubic-bezier(.4,0,.6,1)}.btn-dropdown .input-group--focused input+.icon{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.btn-dropdown .menu,.btn-dropdown .menu__activator{width:100%}.btn-dropdown .menu__content{border-top-left-radius:0;border-top-right-radius:0}.btn-dropdown--editable .input-group input,.btn-dropdown--editable .input-group label,.btn-dropdown--overflow .input-group input,.btn-dropdown--overflow .input-group label,.btn-dropdown--segmented .input-group input,.btn-dropdown--segmented .input-group label{height:40px;line-height:40px}.btn-dropdown--editable input,.btn-dropdown--editable label,.btn-dropdown--overflow input,.btn-dropdown--overflow label,.btn-dropdown--segmented input,.btn-dropdown--segmented label{padding-left:16px}.btn-dropdown--editable .input-group--focused .input-group__input,.btn-dropdown--overflow .input-group--focused .input-group__input,.btn-dropdown--segmented .input-group--focused .input-group__input{background-color:#fff;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.btn-dropdown--editable .input-group__input,.btn-dropdown--overflow .input-group__input,.btn-dropdown--segmented .input-group__input{-webkit-transition:.3s cubic-bezier(.4,0,.6,1);transition:.3s cubic-bezier(.4,0,.6,1)}.btn-dropdown--editable .input-group__input:hover,.btn-dropdown--overflow .input-group__input:hover,.btn-dropdown--segmented .input-group__input:hover{background-color:#fff}.btn-dropdown--editable .input-group__details,.btn-dropdown--overflow .input-group__details,.btn-dropdown--segmented .input-group__details{height:0;min-height:0;padding:0}.btn-dropdown--editable .input-group__details:after,.btn-dropdown--editable .input-group__hint,.btn-dropdown--overflow .input-group__details:after,.btn-dropdown--overflow .input-group__hint,.btn-dropdown--segmented .input-group__details:after,.btn-dropdown--segmented .input-group__hint{display:none}.btn-dropdown--light.btn-dropdown--editable .input-group--focused input,.btn-dropdown--light.btn-dropdown--segmented input{border-right-color:rgba(0,0,0,.12)}.btn-dropdown--light.btn-dropdown--editable .input-group,.btn-dropdown--light.btn-dropdown--overflow .input-group,.btn-dropdown--light.btn-dropdown--segmented .input-group{border-top:1px solid rgba(0,0,0,.12)}.btn-dropdown--light .input-group__hint:after{display:none}.btn-dropdown--dark.btn-dropdown--editable .input-group--focused input,.btn-dropdown--dark.btn-dropdown--segmented input{border-right-color:hsla(0,0%,100%,.12)}.btn-dropdown--dark.btn-dropdown--editable .input-group,.btn-dropdown--dark.btn-dropdown--overflow .input-group,.btn-dropdown--dark.btn-dropdown--segmented .input-group{border-top:1px solid hsla(0,0%,100%,.12)}.btn-dropdown--dark .input-group__hint:after{display:none}.btn-toggle{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;border-radius:2px;-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1);will-change:background,box-shadow}.btn-toggle .btn{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;min-width:auto;padding:0 8px;margin:0;opacity:.4;border-radius:0}.btn-toggle .btn:not(:last-child){border-right:1px solid transparent}.btn-toggle .btn:after{display:none}.btn-toggle .btn[data-selected]{opacity:1;background:rgba(0,0,0,.12)}.btn-toggle .btn[data-selected]:not(:last-child):not([data-only-child]){border-right-color:rgba(0,0,0,.12)}.btn-toggle .btn .icon{font-size:30px}.btn-toggle .btn span+.icon{font-size:medium;margin-left:10px}.btn-toggle--selected,.card{background:#fff;box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}.card{position:relative;border-radius:2px;min-width:0}.card--raised{box-shadow:0 1px 8px rgba(0,0,0,.2),0 3px 4px rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.12)!important}.card--hover{cursor:pointer;-webkit-transition:all .4s cubic-bezier(.25,.8,.25,1);transition:all .4s cubic-bezier(.25,.8,.25,1);-webkit-transition-property:box-shadow;transition-property:box-shadow}.card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)!important}.card--horizontal{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap}.card--horizontal>.card__row{-webkit-box-flex:0;-ms-flex:0 1 30%;flex:0 1 30%}.card__column,.card__row{display:-webkit-box;display:-ms-flexbox;display:flex}.card__column:first-child,.card__row:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.card__column:last-child,.card__row:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.card__column{-ms-flex:1;flex:1;-webkit-box-orient:vertical;-ms-flex-flow:column nowrap;flex-flow:column nowrap}.card__column,.card__row{-webkit-box-flex:1;-webkit-box-direction:normal}.card__row{-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:auto;-ms-flex:1 1 auto;flex:1 1 auto;-webkit-box-orient:horizontal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;min-height:36px}.card__row .card__text{height:100%}.card__row--actions{padding:8px;height:52px;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;width:100%}.card__row--actions .btn{margin:0;padding:0 8px}.card__row--actions-stacked{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin:0!important;padding:0 0 8px!important}.card__row--actions-stacked>.btn{width:100%;height:48px;margin:0!important;padding:0 16px!important;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.card__row--actions-stacked>.btn span{display:table}.card__title{font-size:1.5rem;font-weight:400;letter-spacing:.1rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-ms-flex-item-align:center;align-self:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:16px}.card__title .btn{margin:0}.card__text{padding:16px;width:100%}.carousel{height:500px;width:100%;background:#000;position:relative;overflow:hidden;box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}.carousel__item{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-flex:1;-ms-flex:1 0 100%;flex:1 0 100%;height:100%;width:100%;background-size:cover;background-position:50%;-webkit-transition:.2s ease-out;transition:.2s ease-out}.carousel__left,.carousel__right{position:absolute;top:50%;z-index:2;left:5px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.carousel__left .btn,.carousel__right .btn{color:#fff;margin:0!important;height:auto;width:auto}.carousel__left .btn i,.carousel__right .btn i{font-size:48px}.carousel__left .btn:hover,.carousel__right .btn:hover{background:none}.carousel__right{left:auto;right:5px}.carousel__controls{background:rgba(0,0,0,.5);-webkit-box-align:center;-ms-flex-align:center;align-items:center;bottom:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;left:0;position:absolute;height:50px;list-style-type:none;width:100%;z-index:2}.carousel__controls__item{color:#fff;margin:0 1rem!important}.carousel__controls__item i{opacity:.5;-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1)}.carousel__controls__item--active i{opacity:1;vertical-align:middle;font-size:2rem!important}.carousel__controls__item:hover{background:none}.carousel__controls__item:hover i{opacity:.8}.chip{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#e0e0e0;border:1px solid #e0e0e0;border-radius:2rem;cursor:default;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;font-size:14px;padding:0 12px;margin:8px;height:32px;-webkit-transition:.3s cubic-bezier(.4,0,.6,1);transition:.3s cubic-bezier(.4,0,.6,1);vertical-align:middle;white-space:nowrap}.chip .avatar{border-radius:50%;height:32px;width:32px;min-width:32px;margin-left:-14px;margin-right:8px;color:#fff}.chip .avatar img{width:100%;height:100%}.chip:focus{box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);outline:none}.chip--label{border-radius:0}.chip--outline{background:transparent!important;color:#9e9e9e}.chip--small{height:26px}.chip--small .avatar{height:26px;width:26px;min-width:26px}.chip__close{color:inherit;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-decoration:none;font-size:24px;margin-left:4px;margin-right:-2px;-webkit-transition:.3s cubic-bezier(.4,0,.6,1);transition:.3s cubic-bezier(.4,0,.6,1)}.chip__close:hover{opacity:.8}.chip--removable{padding:0 4px 0 12px}.chip--select-multi{margin:8px 8px 8px 0}.chip .icon--right{margin-left:4px}.chip .icon--left{margin-right:4px}.datatable thead th.column.sortable{cursor:pointer}.datatable thead th.column.sortable i{color:rgba(0,0,0,.38);font-size:16px;vertical-align:sub;display:inline-block;opacity:0;-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1)}.datatable thead th.column.sortable:hover{color:rgba(0,0,0,.87)}.datatable thead th.column.sortable:hover i{opacity:.6}.datatable thead th.column.sortable.active{-webkit-transform:none;transform:none;color:rgba(0,0,0,.87)}.datatable thead th.column.sortable.active i{color:rgba(0,0,0,.87);opacity:1}.datatable thead th.column.sortable.active.asc i{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.datatable tfoot .input-group__details{display:none}.datatable__actions{color:rgba(0,0,0,.54);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:12px}.datatable__actions .btn{color:inherit}.datatable__actions .btn:last-of-type{margin-left:18px}.datatable__actions__pagination{text-align:center;margin:0 26px 0 32px}.datatable__actions__select{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.datatable__actions__select .input-group--select{margin:13px 0 13px 34px;position:static}.datatable__actions__select .input-group--select .input-group__selections__comma{color:rgba(0,0,0,.54)!important;font-size:12px;padding-top:6px}.datatable__actions__select .input-group--select .input-group__append-icon{color:rgba(0,0,0,.54)!important}.picker--date{color:#fff;width:100%}.picker--date__years{background:#fff;color:#000;font-size:18px;font-weight:400;list-style-type:none;max-height:300px;overflow:auto;padding:0;text-align:center}.picker--date__years li{cursor:pointer;margin:16px 0;-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1)}.picker--date__years li:hover{color:#1976d2}.picker--date__years li.active{color:#1976d2;font-size:24px;font-weight:500;margin:20px 0}.picker--date__title{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:wrap;flex-wrap:wrap}.picker--date__title-year{font-size:14px}.picker--date__title-date{font-size:34px}.picker--date__title-date>div{position:relative}.picker--date__title-date,.picker--date__title-year{font-weight:500;-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1);width:100%}.picker--date__title-date:not(.active),.picker--date__title-year:not(.active){cursor:pointer;opacity:.6}.picker--date__title-date:hover,.picker--date__title-year:hover{opacity:1}.picker--date__header{color:#000;padding:4px 16px}.picker--date__header-selector{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;position:relative}.picker--date__header-selector .btn{color:#000;margin:0}.picker--date__header-selector .icon{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.picker--date__header-selector-date{-webkit-box-flex:1;-ms-flex:1;flex:1;text-align:center;position:relative;overflow:hidden}.picker--date__header-selector-date strong{-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1);display:block;width:100%}.picker--date__table{position:relative}.picker--date table{-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1);top:0}.picker--date table thead th{padding:8px 0}.picker--date table th{color:rgba(0,0,0,.54);font-weight:600;font-size:12px}.picker--date table td,.picker--date table th{text-align:center;width:45px}.picker--date table .btn{margin:0}.picker--date table .btn__content{overflow:visible;-webkit-transition:none;transition:none}.picker--date table .btn.btn--floating.btn--current:not(.btn--active){color:rgba(25,118,210,.6)}.picker--date table .btn.btn--floating{height:32px;width:32px}.picker--date table .btn.btn--floating:after{background:#1976d2!important;opacity:0;-webkit-transform:scale(0);transform:scale(0)}.picker--date table .btn.btn--floating:not(.btn--active):hover{color:#fff}.picker--date table .btn.btn--floating:not(.btn--active):hover:after{opacity:.6;-webkit-transform:scale(1);transform:scale(1)}.picker--date table .btn.btn--floating.btn--active{color:#fff}.picker--date table .btn.btn--floating.btn--active:after{background:#1976d2!important;opacity:1;-webkit-transform:none;transform:none}.picker--date.picker--dark .picker--date__header,.picker--date.picker--dark .picker--date__years{background:#424242;color:#fff}.picker--date.picker--dark .picker--date__header .btn,.picker--date.picker--dark .picker--date__table table .btn,.picker--date.picker--dark .picker--date__table table td,.picker--date.picker--dark .picker--date__table table th,.picker--date.picker--dark .picker--date__years .btn{color:#fff}.picker--date.picker--dark .picker--date__table table .btn.btn--floating:after{background:#448aff!important}.picker--date.picker--dark .picker--date__table table .btn--active{color:#000}.picker--date.picker--dark .picker--date__table table .btn--floating.btn--current:not(.btn--active){color:#448aff}.picker--landscape .picker--date__years{margin-left:170px;width:330px}.dialog{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);background:#fff;border-radius:2px;margin:24px 40px;overflow-y:auto;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out;z-index:1001}.dialog:not(.dialog--fullscreen){max-width:90%;max-height:90%}.dialog__container{display:inline-block;vertical-align:middle}.dialog>.card .card__title{padding:12px 24px}.dialog>.card .card__text{padding:20px 24px 24px}.dialog>.card .card__row--actions{padding:8px 0}.dialog>.card .card__row--actions .btn{min-width:64px;margin-right:8px}.dialog--fullscreen{margin:0;width:100%;height:100%;position:fixed;overflow-y:auto;top:0;left:0;padding-top:56px}.dialog--fullscreen .toolbar{height:56px;padding:0!important;position:fixed;top:0}.dialog--fullscreen .toolbar__title{font-size:20px;padding:20px 0}.dialog--fullscreen .toolbar .btn:first-child{max-width:24px;max-height:24px;margin:0 32px 0 16px!important}.dialog--fullscreen .toolbar .btn:last-child{margin:0!important;height:100%;font-size:14px}.dialog--fullscreen .card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.dialog--scrollable .card__row:not(.card__row--actions){overflow-y:auto}.divider{background:rgba(0,0,0,.12);border:none;display:block;height:1px;-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%}.divider--inset{margin-left:72px;width:calc(100% - 72px)}.divider--light{background:hsla(0,0%,100%,.12)}.expansion-panel{background:#fff;text-align:left;list-style-type:none;padding:0;width:100%;box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}.expansion-panel>li{border:1px solid #ddd}.expansion-panel>li:not(:first-child){border-top:none}.expansion-panel__header{display:-webkit-box;display:-ms-flexbox;display:flex;cursor:pointer;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:3rem;position:relative;padding-left:1rem}.expansion-panel__header i{margin-right:1rem}.expansion-panel__header:after{content:\"\\E313\";font-family:Material Icons;font-size:1.5rem;position:absolute;right:15px;top:calc(50% - 16px);color:inherit;-webkit-transition:-webkit-transform .3s cubic-bezier(0,0,.2,1);transition:-webkit-transform .3s cubic-bezier(0,0,.2,1);transition:transform .3s cubic-bezier(0,0,.2,1);transition:transform .3s cubic-bezier(0,0,.2,1),-webkit-transform .3s cubic-bezier(0,0,.2,1)}.expansion-panel__header--active:after{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.expansion-panel__body{background-color:rgba(0,0,0,.03);-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1)}.expansion-panel__body .card{border-radius:0;box-shadow:0 0 0 rgba(0,0,0,.2),0 0 0 rgba(0,0,0,.14),0 0 0 rgba(0,0,0,.12)}.expansion-panel__body:last-child{border-bottom:1px solid #ddd}.icon{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.icon--large{font-size:2.5rem;min-width:3.5rem;width:3.5rem;height:3.5rem}.icon--medium{font-size:2rem;min-width:3rem;width:3rem;height:3rem}.icon--x-large{font-size:3rem;min-width:4rem;width:4rem;height:4rem}.input-group{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-ms-flex-wrap:wrap;flex-wrap:wrap;min-width:24px;margin:18px 0;position:relative;width:100%;outline:none}.input-group label{font-size:16px;line-height:32px;height:30px;max-width:80%;-webkit-transition:.4s cubic-bezier(.25,.8,.25,1);transition:.4s cubic-bezier(.25,.8,.25,1);z-index:0}.input-group__input{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1 0 100%;flex:1 0 100%;min-width:0;min-height:30px}.input-group--disabled .input-group__details:before{background-color:transparent;background-position:bottom;background-size:3px 1px;background-repeat:repeat-x}.input-group--disabled.input-group--light .input-group__details:before{background-image:-webkit-linear-gradient(left,rgba(0,0,0,.38),rgba(0,0,0,.38) 33%,transparent 0);background-image:linear-gradient(90deg,rgba(0,0,0,.38) 0,rgba(0,0,0,.38) 33%,transparent 0)}.input-group--disabled.input-group--dark .input-group__details:before{background-image:-webkit-linear-gradient(left,hsla(0,0%,100%,.38),hsla(0,0%,100%,.38) 33%,transparent 0);background-image:linear-gradient(90deg,hsla(0,0%,100%,.38) 0,hsla(0,0%,100%,.38) 33%,transparent 0)}.input-group--focused .input-group__details:after{width:100%}.input-group--error .input-group__details:after{background-color:#ff5252}.input-group--light .input-group__hint{color:rgba(0,0,0,.54)}.input-group--light .input-group__details:before{background-color:rgba(0,0,0,.12)}.input-group--light .icon{color:rgba(0,0,0,.6)}.input-group--dark .input-group__hint{color:hsla(0,0%,100%,.7)}.input-group--dark .input-group__details:before{background-color:hsla(0,0%,100%,.12)}.input-group--dark .icon{color:hsla(0,0%,100%,.6)}.input-group__icon-cb{cursor:pointer}.input-group .slide-y-transition-leave,.input-group .slide-y-transition-leave-to{position:absolute}.input-group__details{display:-webkit-box;display:-ms-flexbox;display:flex;padding-top:4px;-webkit-box-flex:1;-ms-flex:1 0 100%;flex:1 0 100%;font-size:12px;min-height:22px;position:relative;width:100%}.input-group__details:after,.input-group__details:before{content:\"\";position:absolute;left:0}.input-group__details:after{background-color:#1976d2;top:-1px;height:2px;-webkit-transition:.3s cubic-bezier(.4,0,.2,1);transition:.3s cubic-bezier(.4,0,.2,1);width:0;z-index:1}.input-group__details:before{top:0;height:1px;width:100%;z-index:0}.input-group--hide-details .input-group__details{min-height:0}.input-group .input-group__error,.input-group__hint{-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1)}.input-group .input-group__error{-webkit-box-flex:1;-ms-flex:1 0;flex:1 0;color:#ff5252}.footer{color:#fff;height:45px;line-height:45px;position:relative;z-index:4;background:#1976d2;padding:0 1rem}.list{list-style-type:none;padding:0;padding-top:8px;padding-bottom:8px;-webkit-transition:height .4s cubic-bezier(.4,0,.2,1);transition:height .4s cubic-bezier(.4,0,.2,1)}.list .input-group{margin:0}.list>.list__item~.list__item{margin-top:0}.list__item{position:relative}.list__tile{color:#424242;display:-webkit-box;display:-ms-flexbox;display:flex;height:48px;text-decoration:none;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 16px;margin:0;position:relative}.list__tile,.list__tile:after{-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1)}.list__tile:after{content:\"\";position:absolute;left:0;top:0;height:1px;opacity:0;width:100%;background-color:rgba(0,0,0,.12)}.list__tile--highlighted,a.list__tile:hover{background:rgba(0,0,0,.12)}.list__tile__action,.list__tile__avatar,.list__tile__content{height:100%}.list__tile__sub-title,.list__tile__title{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%}.list__tile__title{font-size:16px;line-height:1.15;font-weight:500;-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1);position:relative;text-align:left}.list__tile__sub-title{color:#9e9e9e;font-size:14px;line-height:1.3;font-weight:400}.list__tile .avatar,.list__tile__action{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;min-width:56px}.list__tile__action{display:-webkit-box;display:-ms-flexbox;display:flex}.list__tile__action,.list__tile__action .input-group{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.list__tile__action .input-group__details{display:none}.list__tile__action .icon{-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1)}.list__tile__action-text{color:#9e9e9e;font-size:12px}.list__tile__action--stack{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding-top:8px;padding-bottom:8px;white-space:nowrap;-ms-flex-direction:column;flex-direction:column}.list__tile__action--stack,.list__tile__content{-webkit-box-orient:vertical;-webkit-box-direction:normal}.list__tile__content{text-align:left;-webkit-box-flex:0;-ms-flex:0 1 100%;flex:0 1 100%;font-size:15px;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-direction:column;flex-direction:column}.list__tile__content+.avatar,.list__tile__content+.list__tile__action:not(.list__tile__action--stack){-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.list__tile--active .list__tile__title{color:#1976d2}.list__tile--disabled{opacity:.4;pointer-events:none}.list__tile--avatar{height:56px}.list__tile--select-multi{padding:0 10px}.list--dense{padding-top:4px}.list--dense .list__tile{height:40px;font-size:13px}.list--dense .list__tile__title{font-size:13px;font-weight:400}.list--dense .list__tile__sub-title{font-size:13px}.list--two-line .list__tile{height:72px}.list--two-line.list--dense .list__tile{height:60px}.list--three-line .list__tile{height:88px}.list--three-line .list__tile__sub-title{white-space:normal;-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box}.list--three-line.list--dense .list__tile{height:76px}.list--group{position:relative;padding:0}.list--group:after{content:\"\";position:absolute;left:0;bottom:0;height:1px;opacity:0;width:100%;background-color:rgba(0,0,0,.12)}.list--group .list__tile{padding-left:72px}.list--group .list__tile .list__tile__title{font-weight:300}.list--group .list__tile--active .list__tile__title{color:#1976d2;font-weight:300}.list--group__header+.list--group:after{opacity:1}.list--group__header--active .list__tile{background:rgba(0,0,0,.12)}.list--group__header--active .list__tile:after{opacity:1}.list--group__header--active .list__tile .list__tile__title{color:inherit}.list--group__header--active .list__tile .list__tile__action:last-of-type .icon{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.list--group__header--no-action+.list--group .list__tile{padding-left:16px}.list--subheader{padding-top:0}.menu{display:inline-block;vertical-align:middle}.menu--disabled,.menu--disabled .menu__activator{cursor:not-allowed}.menu__activator{-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;position:relative}.menu__content{background-color:#fff;position:absolute;display:inline-block;border-radius:2px;overflow-y:auto;overflow-x:hidden;z-index:5;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.menu-transition-enter .list__tile{min-width:0;-webkit-transition-delay:.3s;transition-delay:.3s;opacity:0;-webkit-transform:translateY(-15px);transform:translateY(-15px);pointer-events:none}.menu-transition-enter-to .list__tile{pointer-events:auto;opacity:1}.menu-transition-leave-to{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.menu-transition-enter,.menu-transition-leave-to{opacity:0}.menu-transition-enter-to,.menu-transition-leave{opacity:1}.menu-transition-enter-active,.menu-transition-leave-active{-webkit-transition:all .4s cubic-bezier(.25,.8,.25,1);transition:all .4s cubic-bezier(.25,.8,.25,1)}.toolbar{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#1976d2;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;height:64px;position:relative;padding:0 14px;width:100%;z-index:6;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px rgba(0,0,0,.14),0 1px 10px rgba(0,0,0,.12)}.toolbar ul{list-style:none}.toolbar li{height:100%}.toolbar i{font-size:24px}.toolbar .menu__activator{height:100%}.toolbar .btn:not(.toolbar__side-icon){margin:0 6px}.toolbar .btn:not(.toolbar__side-icon):first-child{margin-left:-6px}.toolbar .btn:not(.toolbar__side-icon):last-child{margin-right:0}.toolbar--fixed{position:fixed;top:0;left:0}.toolbar__sub{-webkit-box-flex:1;-ms-flex:1 0 100%;flex:1 0 100%;padding:24px 0 24px 72px}.toolbar__side-icon{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;margin-left:10px}.toolbar__logo{color:#fff;font-size:3rem;-webkit-box-flex:1;-ms-flex:1;flex:1;text-decoration:none;padding:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.toolbar__title{color:#fff;font-size:20px;-webkit-box-flex:1;-ms-flex:1;flex:1;padding:0 16px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.toolbar__title:first-child{padding-left:2px}.toolbar__items{list-style-type:none;padding:0;background-color:inherit;height:100%;max-width:100%}.toolbar__item,.toolbar__items,.toolbar__items>li{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.toolbar__item{color:#fff;padding:0 1.2rem;text-decoration:none;-webkit-transition:all .3s ease-out;transition:all .3s ease-out;position:relative;height:100%;white-space:nowrap}.toolbar__item i{font-size:2rem}.toolbar__item--active,.toolbar__item:hover{background:rgba(0,0,0,.1)}.toolbar__item--disabled{opacity:.5;pointer-events:none}.toolbar .input-group{margin:0 0 0 16px;-webkit-box-flex:1;-ms-flex:1;flex:1}.toolbar .input-group--dark .icon{color:#fff}.toolbar .input-group--light .icon{color:#000}.toolbar .input-group--dark.input-group--focused.input-group--append-icon .icon,.toolbar .input-group--dark.input-group--focused.input-group--prepend-icon .icon{color:#fff}.toolbar .input-group--light.input-group--focused.input-group--append-icon .icon,.toolbar .input-group--light.input-group--focused.input-group--prepend-icon .icon{color:#000}.overlay{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;position:fixed;width:100%;height:100%;background-color:rgba(0,0,0,.3);-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1);top:0;left:0;opacity:0;-webkit-filter:blur(10%);filter:blur(10%);pointer-events:none;z-index:1000}.overlay--active{opacity:1;pointer-events:auto}.pagination{list-style-type:none;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;padding:0;margin:0;height:40px;align-items:center}.pagination a{-webkit-transition:.3s cubic-bezier(0,0,.2,1);transition:.3s cubic-bezier(0,0,.2,1)}.pagination a:hover{box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}.pagination--circle .pagination__item,.pagination--circle .pagination__more,.pagination--circle .pagination__navigation{border-radius:50%}.pagination--disabled{pointer-events:none;opacity:.6}.pagination__item{box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);border-radius:4px;color:#000;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:transparent;height:34px;width:34px;margin:.3rem;text-decoration:none}.pagination__item--active{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px rgba(0,0,0,.14),0 1px 10px rgba(0,0,0,.12);background:#1976d2;color:#fff}.pagination__navigation{box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-decoration:none;color:#616161;height:2rem;border-radius:4px;width:2rem;margin:.3rem 15px}.pagination__navigation .icon{font-size:2rem;-webkit-transition:.2s cubic-bezier(.4,0,.6,1);transition:.2s cubic-bezier(.4,0,.6,1);vertical-align:middle}.pagination__navigation--disabled{opacity:.6;pointer-events:none}.pagination__more{margin:.3rem;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:2rem;width:2rem}.parallax{position:relative;overflow:hidden}.parallax__image-container{position:absolute;top:0;left:0;right:0;bottom:0;z-index:1}.parallax__image{position:absolute;bottom:0;left:50%;min-width:100%;min-height:100%;display:none;z-index:1}.parallax__content{height:100%;z-index:2;position:relative;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:0 1rem}.parallax__content,.picker{color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.picker{border-radius:2px;width:290px}.picker .card__row--actions{border:none;margin-top:-20px}.picker__title{background:#1976d2;height:105px;border-top-left-radius:2px;border-top-right-radius:2px;padding:16px}.picker__body{color:#000;height:290px;overflow:hidden;position:relative}.picker--dark .picker__body{background:#424242}.picker--dark .picker__title{background:#616161}.picker--landscape{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;width:500px}.picker--landscape .picker__title{border-top-right-radius:0;border-bottom-right-radius:0;-webkit-box-flex:0;-ms-flex:0 1 170px;flex:0 1 170px;width:170px;height:auto;position:absolute;top:0;left:0;height:100%;z-index:1}.picker--landscape .picker__body{-webkit-box-flex:1;-ms-flex:1 0;flex:1 0;width:330px;margin-left:170px}.picker--landscape .card__row--actions{margin-left:170px;width:330px}.progress-circular{position:relative;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.progress-circular--indeterminate svg{-webkit-animation:progress-circular-rotate 1.4s linear infinite;animation:progress-circular-rotate 1.4s linear infinite;-webkit-transform-origin:center center;transform-origin:center center;width:100%;height:100%;margin:auto;position:absolute;top:0;bottom:0;left:0;right:0;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;z-index:0}.progress-circular--indeterminate .progress-circular__overlay{-webkit-animation:progress-circular-dash 1.4s ease-in-out infinite;animation:progress-circular-dash 1.4s ease-in-out infinite;stroke-linecap:round;stroke-dasharray:1,200;stroke-dashoffset:0px}.progress-circular__underlay{stroke:rgba(0,0,0,.1);z-index:1}.progress-circular__overlay{stroke:currentColor;z-index:2;-webkit-transition:all .6s ease-in-out;transition:all .6s ease-in-out}.progress-circular__info{position:absolute;top:50%;left:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}@-webkit-keyframes progress-circular-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0px}50%{stroke-dasharray:100,200;stroke-dashoffset:-15px}to{stroke-dasharray:100,200;stroke-dashoffset:-125px}}@keyframes progress-circular-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0px}50%{stroke-dasharray:100,200;stroke-dashoffset:-15px}to{stroke-dasharray:100,200;stroke-dashoffset:-125px}}@-webkit-keyframes progress-circular-rotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes progress-circular-rotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.progress-linear{background:transparent;margin:1rem 0;overflow:hidden;width:100%;position:relative}.progress-linear .progress-linear__bar{background:#84bbf0}.progress-linear .progress-linear__bar__determinate,.progress-linear .progress-linear__bar__indeterminate:after,.progress-linear .progress-linear__bar__indeterminate:before{background:#1976d2}.progress-linear__bar{width:100%;position:relative;z-index:2}.progress-linear__bar,.progress-linear__bar__determinate{height:inherit;-webkit-transition:.3s ease-in;transition:.3s ease-in}.progress-linear__bar__indeterminate:after,.progress-linear__bar__indeterminate:before{content:\"\";height:inherit;position:absolute;left:0;top:0;bottom:0;will-change:left,right;width:auto}.progress-linear__bar__indeterminate:before{-webkit-animation:indeterminate;animation:indeterminate;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.progress-linear__bar__indeterminate:after{-webkit-animation:indeterminate-short;animation:indeterminate-short;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.progress-linear--query .progress-linear__bar__indeterminate:before{-webkit-animation:query;animation:query;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.progress-linear--query .progress-linear__bar__indeterminate:after{-webkit-animation:query-short;animation:query-short;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.progress-linear--secondary .progress-linear__bar{background:#a1a1a1}.progress-linear--secondary .progress-linear__bar__determinate,.progress-linear--secondary .progress-linear__bar__indeterminate:after,.progress-linear--secondary .progress-linear__bar__indeterminate:before{background:#424242}.progress-linear--success .progress-linear__bar{background:#a5d8a7}.progress-linear--success .progress-linear__bar__determinate,.progress-linear--success .progress-linear__bar__indeterminate:after,.progress-linear--success .progress-linear__bar__indeterminate:before{background:#4caf50}.progress-linear--info .progress-linear__bar{background:#90cbf9}.progress-linear--info .progress-linear__bar__determinate,.progress-linear--info .progress-linear__bar__indeterminate:after,.progress-linear--info .progress-linear__bar__indeterminate:before{background:#2196f3}.progress-linear--warning .progress-linear__bar{background:#ffe083}.progress-linear--warning .progress-linear__bar__determinate,.progress-linear--warning .progress-linear__bar__indeterminate:after,.progress-linear--warning .progress-linear__bar__indeterminate:before{background:#ffc107}.progress-linear--error .progress-linear__bar{background:#ffa8a8}.progress-linear--error .progress-linear__bar__determinate,.progress-linear--error .progress-linear__bar__indeterminate:after,.progress-linear--error .progress-linear__bar__indeterminate:before{background:#ff5252}@-webkit-keyframes indeterminate{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@-webkit-keyframes indeterminate-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@-webkit-keyframes query{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@keyframes query{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@-webkit-keyframes query-short{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@keyframes query-short{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}.ripple__container{border-radius:inherit;width:100%;height:100%;z-index:0}.ripple__animation,.ripple__container{color:inherit;position:absolute;left:0;top:0;overflow:hidden;pointer-events:none}.ripple__animation{border-radius:50%;background:currentColor;opacity:0;-webkit-transition:.4s cubic-bezier(0,0,.2,1);transition:.4s cubic-bezier(0,0,.2,1);will-change:opacity}.ripple__animation--enter{-webkit-transition:none;transition:none}.ripple__animation--visible{opacity:.15}.input-group--select .input-group--select__autocomplete{opacity:0;height:0}.input-group--select .input-group__append-icon{-webkit-transition:.3s cubic-bezier(0,0,.2,1);transition:.3s cubic-bezier(0,0,.2,1)}.input-group--select.input-group--focused.input-group--dirty .input-group--select__autocomplete{margin:8px 0}.input-group--select.input-group--focused .input-group--select__autocomplete{opacity:1;height:30px}.input-group--select.input-group--focused .input-group__append-icon{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.input-group--select .input-group__input,.input-group--select input{cursor:pointer}.input-group--select.input-group--disabled{cursor:not-allowed;pointer-events:none}.input-group--select .input-group__selections{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;position:relative}.input-group--select .input-group__selections>div{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-flex:1;-ms-flex:1;flex:1}.input-group--select .input-group__selections__comma{display:inline-block;font-size:16px;height:30px;padding-top:4px;padding-right:4px}.input-group--select.input-group--light .input-group__selections__comma{color:rgba(0,0,0,.87)}.input-group--select.input-group--light .input-group__selections__comma--active{color:#1976d2}.input-group--select.input-group--dark .input-group__selections__comma{color:#fff}.input-group--select .menu{display:inline}.input-group--select .fade-transition-leave-active{left:0}.input-group--select:not(.input-group--multiple) .menu-transition-enter .list__tile--active{opacity:1;-webkit-transform:none;transform:none;pointer-events:auto}.input-group--select:not(.input-group--multiple) .menu-transition-enter-to .list__tile--active{-webkit-transform:none;transform:none}.input-group.input-group--selection-controls{display:-webkit-box;display:-ms-flexbox;display:flex}.input-group.input-group--selection-controls .icon{cursor:pointer;position:absolute;left:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transition:.3s cubic-bezier(.4,0,.6,1);transition:.3s cubic-bezier(.4,0,.6,1)}.input-group.input-group--selection-controls .input-group__details:after,.input-group.input-group--selection-controls .input-group__details:before{display:none}.input-group.input-group--selection-controls .input-group__input{width:100%;position:relative}.input-group.input-group--selection-controls .input-group__input .icon{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center;height:24px;margin:auto}.input-group--selection-controls label{cursor:pointer;margin-left:32px;position:absolute;left:0;z-index:1}.input-group--selection-controls__ripple{border-radius:50%;height:48px;width:48px;cursor:pointer;position:absolute;-webkit-transform:translate3d(-12px,-50%,0);transform:translate3d(-12px,-50%,0);-webkit-transform-origin:center center;transform-origin:center center;top:50%;left:0}.input-group--selection-controls__ripple:before{content:\"\";position:absolute;width:36px;height:36px;background:currentColor;border-radius:50%;left:50%;top:50%;-webkit-transform:translate3d(-50%,-50%,0) scale(.3);transform:translate3d(-50%,-50%,0) scale(.3);opacity:0;-webkit-transition:.4s cubic-bezier(0,0,.2,1);transition:.4s cubic-bezier(0,0,.2,1);-webkit-transform-origin:center center;transform-origin:center center}.input-group.input-group--selection-controls{z-index:0}.input-group.input-group--selection-controls.switch .input-group--selection-controls__container{position:relative}.input-group.input-group--selection-controls.switch .input-group--selection-controls__toggle{color:inherit;position:absolute;height:14px;top:50%;left:0;width:34px;border-radius:8px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.input-group.input-group--selection-controls.switch .input-group--selection-controls__toggle--active{background:currentColor!important;opacity:.5}.input-group.input-group--selection-controls.switch .input-group--selection-controls__ripple{-webkit-transform:translate3d(-15px,-24px,0);transform:translate3d(-15px,-24px,0);-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1);z-index:1}.input-group.input-group--selection-controls.switch .input-group--selection-controls__ripple:after{content:\"\";position:absolute;display:inline-block;cursor:pointer;width:20px;border-radius:50%;top:50%;left:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);height:20px;box-shadow:0 1px 3px rgba(0,0,0,.2),0 1px 1px rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12)}.input-group.input-group--selection-controls.switch .input-group--selection-controls__ripple--active{color:inherit!important;-webkit-transform:translate3d(2px,-24px,0);transform:translate3d(2px,-24px,0)}.input-group.input-group--selection-controls.switch .input-group--selection-controls__ripple--active:after{background:currentColor!important}.input-group.input-group--selection-controls.switch label{margin-left:44px}.input-group--selection-controls.input-group--tab-focused .input-group--selection-controls__ripple:before{-webkit-transform:translate3d(-50%,-50%,0) scale(1);transform:translate3d(-50%,-50%,0) scale(1);opacity:.15}.input-group--selection-controls.switch.input-group--light label{color:#424242}.input-group--selection-controls.switch.input-group--light .input-group--selection-controls__toggle{background:rgba(0,0,0,.38)}.input-group--selection-controls.switch.input-group--light .input-group--selection-controls__ripple{color:rgba(0,0,0,.38)}.input-group--selection-controls.switch.input-group--light .input-group--selection-controls__ripple:after{background:#fafafa}.input-group--selection-controls.switch.input-group--light.input-group--selection-controls__container--disabled .input-group--selection-controls__toggle{background:rgba(0,0,0,.12)}.input-group--selection-controls.switch.input-group--light.input-group--selection-controls__container--disabled .input-group--selection-controls__ripple{color:rgba(0,0,0,.12)}.input-group--selection-controls.switch.input-group--light.input-group--selection-controls__container--disabled .input-group--selection-controls__ripple:after{background:#bdbdbd}.input-group--selection-controls.switch.input-group--dark label{color:#fff}.input-group--selection-controls.switch.input-group--dark .input-group--selection-controls__toggle{background:hsla(0,0%,100%,.3)}.input-group--selection-controls.switch.input-group--dark .input-group--selection-controls__ripple{color:hsla(0,0%,100%,.3)}.input-group--selection-controls.switch.input-group--dark .input-group--selection-controls__ripple:after{background:#bdbdbd}.input-group--selection-controls.switch.input-group--dark.input-group--selection-controls__container--disabled .input-group--selection-controls__toggle{background:hsla(0,0%,100%,.1)}.input-group--selection-controls.switch.input-group--dark.input-group--selection-controls__container--disabled .input-group--selection-controls__ripple{color:hsla(0,0%,100%,.1)}.input-group--selection-controls.switch.input-group--dark.input-group--selection-controls__container--disabled .input-group--selection-controls__ripple:after{background:#424242}.input-group--selection-controls.checkbox.input-group--light label,.input-group--selection-controls.radio.input-group--light label{color:#000}.input-group--selection-controls.checkbox.input-group--light .icon,.input-group--selection-controls.checkbox.input-group--light .input-group--selection-controls__ripple,.input-group--selection-controls.radio.input-group--light .icon,.input-group--selection-controls.radio.input-group--light .input-group--selection-controls__ripple{color:rgba(0,0,0,.54)}.input-group--selection-controls.checkbox.input-group--light.input-group--active .icon,.input-group--selection-controls.checkbox.input-group--light.input-group--active .input-group--selection-controls__ripple,.input-group--selection-controls.radio.input-group--light.input-group--active .icon,.input-group--selection-controls.radio.input-group--light.input-group--active .input-group--selection-controls__ripple{color:inherit}.input-group--selection-controls.checkbox.input-group--light.input-group--disabled .icon,.input-group--selection-controls.checkbox.input-group--light.input-group--disabled .input-group--selection-controls__ripple,.input-group--selection-controls.radio.input-group--light.input-group--disabled .icon,.input-group--selection-controls.radio.input-group--light.input-group--disabled .input-group--selection-controls__ripple{color:rgba(0,0,0,.26)}.input-group--selection-controls.checkbox.input-group--dark label,.input-group--selection-controls.radio.input-group--dark label{color:#fff}.input-group--selection-controls.checkbox.input-group--dark .icon,.input-group--selection-controls.checkbox.input-group--dark .input-group--selection-controls__ripple,.input-group--selection-controls.radio.input-group--dark .icon,.input-group--selection-controls.radio.input-group--dark .input-group--selection-controls__ripple{color:hsla(0,0%,100%,.7)}.input-group--selection-controls.checkbox.input-group--dark.input-group--active .icon,.input-group--selection-controls.checkbox.input-group--dark.input-group--active .input-group--selection-controls__ripple,.input-group--selection-controls.radio.input-group--dark.input-group--active .icon,.input-group--selection-controls.radio.input-group--dark.input-group--active .input-group--selection-controls__ripple{color:inherit}.input-group--selection-controls.checkbox.input-group--dark.input-group--disabled .icon,.input-group--selection-controls.checkbox.input-group--dark.input-group--disabled .input-group--selection-controls__ripple,.input-group--selection-controls.radio.input-group--dark.input-group--disabled .icon,.input-group--selection-controls.radio.input-group--dark.input-group--disabled .input-group--selection-controls__ripple{color:hsla(0,0%,100%,.3)}.sidebar{background-color:#424242;overflow-y:auto;padding:0 0 100px;-webkit-transition:margin .3s cubic-bezier(.4,0,.6,1),-webkit-transform .3s cubic-bezier(.4,0,.6,1);transition:margin .3s cubic-bezier(.4,0,.6,1),-webkit-transform .3s cubic-bezier(.4,0,.6,1);transition:transform .3s cubic-bezier(.4,0,.6,1),margin .3s cubic-bezier(.4,0,.6,1);transition:transform .3s cubic-bezier(.4,0,.6,1),margin .3s cubic-bezier(.4,0,.6,1),-webkit-transform .3s cubic-bezier(.4,0,.6,1);width:300px;max-width:100%;z-index:3}.sidebar--fixed{top:0;left:0;position:fixed;z-index:6;box-shadow:0 0 0 rgba(0,0,0,.2),0 0 0 rgba(0,0,0,.14),0 0 0 rgba(0,0,0,.12)}.sidebar--fixed-right{right:0;left:auto}.sidebar--drawer{-ms-flex-preferred-size:0;flex-basis:0;box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.sidebar--close,.sidebar--drawer{-webkit-transform:translateX(-325px);transform:translateX(-325px)}.sidebar--close.sidebar--fixed-right{-webkit-transform:translateX(325px);transform:translateX(325px)}@media screen and (max-width:992px){.sidebar--mobile{-webkit-transform:translateX(-325px);transform:translateX(-325px);z-index:7}.sidebar--mobile.sidebar--fixed-right,.sidebar--mobile.sidebar--right{-webkit-transform:translateX(325px);transform:translateX(325px)}}.sidebar--open,.sidebar--open.sidebar--mobile{-webkit-transform:translateX(0);transform:translateX(0);width:300px}@media screen and (max-width:992px){.sidebar:not(.sidebar--fixed):not(.sidebar--right){margin-left:-300px;-webkit-transform:none;transform:none}.sidebar:not(.sidebar--fixed):not(.sidebar--right).sidebar--open{-webkit-transform:translateX(300px);transform:translateX(300px)}}@media screen and (max-width:992px){.sidebar:not(.sidebar--fixed).sidebar--right{margin-right:-300px;-webkit-transform:none;transform:none}.sidebar:not(.sidebar--fixed).sidebar--right.sidebar--open{-webkit-transform:translateX(-300px);transform:translateX(-300px)}}.sidebar .list__tile{color:#fff;-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1);position:relative}.sidebar .list__tile .icon,.sidebar .list__tile .list__tile__action,.sidebar .list__tile .list__tile__avatar{color:#fff}.sidebar .list__tile:hover:not(.sidebar .list__tile--active){background-color:rgba(25,118,210,.4);color:#fff}.sidebar .list__tile:after{background:hsla(0,0%,100%,.12)}.sidebar .list__tile--active .list__tile__title{color:inherit}.sidebar .list--group__header--active:first-child .list__tile__action:first-child .icon,.sidebar .list__tile--active:first-child .icon{color:#1976d2}.sidebar .list--group:after{background:hsla(0,0%,100%,.12)}.sidebar .list--group__container .list__tile--active .list__tile__title{color:#1976d2}.input-group--slider.input-group--light label{-webkit-transform:none;transform:none;-ms-flex-preferred-size:56px;flex-basis:56px;color:rgba(0,0,0,.87);display:-webkit-box;display:-ms-flexbox;display:flex;font-size:18px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.input-group--slider.input-group--light .slider__track{background:rgba(0,0,0,.26)}.input-group--slider.input-group--light .slider__track__container:after{border:0 solid rgba(0,0,0,.6);border-left-width:2px}.input-group--slider.input-group--light .slider__thumb{border:4px solid rgba(0,0,0,.26)}.input-group--slider.input-group--light .slider__thumb--label{background:rgba(0,0,0,.26)}.input-group--slider.input-group--light .slider__ticks{background:-webkit-repeating-linear-gradient(left,rgba(0,0,0,.6),rgba(0,0,0,.6) 2px,transparent 0,transparent);background:repeating-linear-gradient(90deg,rgba(0,0,0,.6),rgba(0,0,0,.6) 2px,transparent 0,transparent)}.input-group--slider.input-group--light.input-group--disabled .slider__thumb{background:rgba(0,0,0,.38);border-color:transparent}.input-group--slider.input-group--light.input-group--disabled.input-group--dirty .slider__track-fill{background:rgba(0,0,0,.26)}.input-group--slider.input-group--light:not(.input-group--dirty) .slider__thumb-container--label .slider__thumb{background:#000}.input-group--slider.input-group--dark label{-webkit-transform:none;transform:none;-ms-flex-preferred-size:56px;flex-basis:56px;color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;font-size:18px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.input-group--slider.input-group--dark .slider__track{background:hsla(0,0%,100%,.3)}.input-group--slider.input-group--dark .slider__track__container:after{border:0 solid hsla(0,0%,100%,.6);border-left-width:2px}.input-group--slider.input-group--dark .slider__thumb{border:4px solid hsla(0,0%,100%,.3)}.input-group--slider.input-group--dark .slider__thumb--label{background:hsla(0,0%,100%,.3)}.input-group--slider.input-group--dark .slider__ticks{background:-webkit-repeating-linear-gradient(left,hsla(0,0%,100%,.6),hsla(0,0%,100%,.6) 2px,transparent 0,transparent);background:repeating-linear-gradient(90deg,hsla(0,0%,100%,.6),hsla(0,0%,100%,.6) 2px,transparent 0,transparent)}.input-group--slider.input-group--dark.input-group--disabled .slider__thumb{background:hsla(0,0%,100%,.3);border-color:transparent}.input-group--slider.input-group--dark.input-group--disabled.input-group--dirty .slider__track-fill{background:hsla(0,0%,100%,.3)}.input-group--slider.input-group--dark:not(.input-group--dirty) .slider__thumb-container--label .slider__thumb{background:#fff}.input-group--slider{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap}.input-group--slider .input-group__details:after,.input-group--slider .input-group__details:before{display:none}.input-group--slider .input-group__input{-webkit-box-flex:1;-ms-flex:1 1 100%;flex:1 1 100%}.input-group--slider label+.input-group__input{margin-left:16px;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto}.input-group--slider.input-group--active .slider__thumb{-webkit-transform:translateY(-50%) scale(1);transform:translateY(-50%) scale(1)}.input-group--slider.input-group--active .slider__track{-webkit-transition:none;transition:none}.input-group--slider.input-group--active .slider__thumb-container--label .slider__thumb,.input-group--slider.input-group--active .slider__thumb-container--label .slider__thumb:hover{-webkit-transform:translateY(-50%) scale(0);transform:translateY(-50%) scale(0)}.input-group--slider.input-group--active .slider__thumb-container,.input-group--slider.input-group--active .slider__track-fill{-webkit-transition:none;transition:none}.input-group--slider.input-group--dirty .slider__thumb{background:#1976d2;border-color:#1976d2}.input-group--slider.input-group--dirty .slider__thumb--label{background:#1976d2}.input-group--slider.input-group--disabled{pointer-events:none}.input-group--slider.input-group--disabled .slider__thumb{-webkit-transform:translateY(-50%) scale(.5);transform:translateY(-50%) scale(.5);background:transparent}.input-group--slider.input-group--disabled.input-group--dirty{border-color:transparent}.input-group--slider.input-group--prepend-icon .slider{margin-left:56px}.slider{cursor:default;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;height:30px;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.input-group--ticks:hover .slider__ticks,.input-group--ticks:hover .slider__track__container:after{opacity:1}.slider__track__container{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);height:2px;width:100%;overflow:hidden}.slider__track__container:after{content:\"\";position:absolute;right:0;top:0;height:2px;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out;width:2px;opacity:0}.slider__thumb,.slider__ticks,.slider__track{position:absolute;top:0}.slider__track{-webkit-transform-origin:right;transform-origin:right;overflow:hidden}.slider__track,.slider__track-fill{height:2px;left:0;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out;width:100%}.slider__track-fill{position:absolute;background:#1976d2;-webkit-transform-origin:left;transform-origin:left}.slider__ticks,.slider__ticks-container{position:absolute;left:0;height:2px;width:100%}.slider__ticks-container{top:50%;overflow:hidden}.slider__ticks{-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out;opacity:0}.slider__thumb-container{position:absolute}.slider__thumb,.slider__thumb-container{top:50%;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out}.slider__thumb{width:20px;height:20px;left:-10px;border-radius:50%;background:transparent;-webkit-transform:translateY(-50%) scale(.8);transform:translateY(-50%) scale(.8);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.slider__thumb:hover{-webkit-transform:translateY(-50%) scale(1);transform:translateY(-50%) scale(1)}.slider__thumb--label__container{left:0;top:0}.slider__thumb--label,.slider__thumb--label__container{position:absolute;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out}.slider__thumb--label{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:12px;color:#fff;width:28px;height:28px;border-radius:50% 50% 0;left:-14px;top:-40px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.slider__thumb--label span{-webkit-transform:rotate(-45deg) translateZ(0);transform:rotate(-45deg) translateZ(0)}.small-dialog{display:block;height:100%}.small-dialog__content{padding:0 24px}.small-dialog__actions{text-align:right}.small-dialog a{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:rgba(0,0,0,.87);height:100%;text-decoration:none}.small-dialog a>*{width:100%}.small-dialog .menu__activator{height:100%}.subheader{height:48px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:14px;color:#757575;font-weight:500;padding:0 16px}.subheader--inset{margin-left:56px}.stepper{overflow:hidden;position:relative;box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}.stepper .divider{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center;margin:0 -16px}.stepper__header{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}.stepper__header,.stepper__step__step{display:-webkit-box;display:-ms-flexbox;display:flex}.stepper__step__step{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:rgba(0,0,0,.38);border-radius:50%;color:#fff;font-size:12px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:24px;margin-right:8px;width:24px;-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1)}.stepper__step__step .icon{font-size:18px}.stepper__step{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:24px;position:relative}.stepper__step--active .stepper__label{text-shadow:0 0 0 #000;-webkit-transition:.3s cubic-bezier(.4,0,.6,1);transition:.3s cubic-bezier(.4,0,.6,1)}.stepper__step--active .stepper__step__step{background:#1976d2}.stepper__step--editable{cursor:pointer}.stepper__step--editable:hover{background:rgba(0,0,0,.06)}.stepper__step--inactive .stepper__label,.stepper__step--inactive .stepper__label small{color:rgba(0,0,0,.38)}.stepper__step__step:not(.stepper__step--inactive.stepper__step--error){color:#fff;background:rgba(0,0,0,.38)}.stepper__step--inactive.stepper__step--editable:hover .stepper__step__step,.stepper__step__step:not(.stepper__step--inactive.stepper__step--error):hover{background:rgba(0,0,0,.5)}.stepper__step--error .stepper__step__step{background:transparent;color:#ff5252}.stepper__step--error .stepper__step__step .icon{font-size:24px}.stepper__step--error .stepper__label{color:#ff5252;text-shadow:none;font-weight:500}.stepper__step--error .stepper__label small{color:#ff5252}.stepper__step--complete .stepper__label{color:rgba(0,0,0,.5);text-shadow:0 0 0 #000}.stepper__step--complete .stepper__step__step{background:#1976d2}.stepper__label{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;text-align:left;color:rgba(0,0,0,.38)}.stepper__label small{font-size:12px;font-weight:300;color:rgba(0,0,0,.38);text-shadow:none}.stepper__content,.stepper__wrapper{overflow:hidden;-webkit-transition:.4s cubic-bezier(.4,0,.6,1);transition:.4s cubic-bezier(.4,0,.6,1)}.stepper__content{top:auto;bottom:0;padding:16px;-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%}.stepper__content .btn{margin-left:0}.stepper--vertical{padding-bottom:36px}.stepper--vertical .stepper__content{margin:-8px 0 -16px 36px;padding:16px 60px 16px 23px;width:auto}.stepper--vertical .stepper__content:not(:last-child){border-left:1px solid rgba(0,0,0,.12)}.stepper--vertical .stepper__step{padding:24px 24px 16px}.stepper--vertical .stepper__step__step{margin-right:12px}.stepper--alt-labels .divider{margin:35px -67px 0;-ms-flex-item-align:start;align-self:flex-start}.stepper--alt-labels .stepper__step{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-preferred-size:175px;flex-basis:175px}.stepper--alt-labels .stepper__step small{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}.stepper--alt-labels .stepper__step__step{margin-right:0;margin-bottom:12px}@media only screen and (max-width:767px){.stepper:not(.stepper--vertical) .stepper__label{display:none}.stepper:not(.stepper--vertical) .stepper__step__step{margin-right:0}}.table__overflow{width:100%;overflow-x:auto;overflow-y:hidden}table.table{border-radius:2px;border-collapse:collapse;border-spacing:0;width:100%;max-width:100%}table.table td,table.table th{text-align:left}table.table tr:not(:last-child){border-bottom:1px solid #e0e0e0}table.table tbody td:first-child,table.table tbody td:not(:first-child),table.table tbody th:first-child,table.table tbody th:not(:first-child),table.table thead td:first-child,table.table thead td:not(:first-child),table.table thead th:first-child,table.table thead th:not(:first-child){padding:0 24px}table.table thead tr{height:56px}table.table thead th{color:rgba(0,0,0,.54);font-weight:600;font-size:12px;-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1);white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}table.table thead th.sortable{pointer-events:auto}table.table thead th>div{width:100%}table.table tbody tr{-webkit-transition:background .3s cubic-bezier(.25,.8,.25,1);transition:background .3s cubic-bezier(.25,.8,.25,1);will-change:background}table.table tbody tr[active]{background:#f5f5f5}table.table tbody tr:hover{background:#eee}table.table tbody td,table.table tbody th{height:48px}table.table tbody td{font-weight:500;color:rgba(0,0,0,.87);font-size:13px}table.table .input-group--selection-controls{margin:0}table.table .input-group--selection-controls .input-group__details{display:none}table.table .input-group--selection-controls.checkbox .icon{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}table.table .input-group--selection-controls.checkbox .input-group--selection-controls__ripple{left:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}table.table tfoot tr{height:56px;border-top:1px solid #e0e0e0}.tabs{overflow:hidden;position:relative;width:100%}.tabs>.card{border-radius:0}.tabs .card{background:inherit;box-shadow:none}.tabs ul{padding:0}.tabs--grow .tabs__container>li{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.tabs--centered .tabs__container>li:first-of-type{margin-left:auto}.tabs--centered .tabs__container>li:last-of-type{margin-right:auto}.tabs--icons .tabs__tabs{height:90px}.tabs--scroll-bars .tabs__tabs--mobile{padding:0 35px}.tabs--scroll-bars .tabs__tabs--mobile .icon--left,.tabs--scroll-bars .tabs__tabs--mobile .icon--right{display:-webkit-box;display:-ms-flexbox;display:flex}.tabs--scroll-bars .tabs__tabs--mobile .tabs__container{width:calc(100% - 70px)}.tabs__tabs{background-color:#1976d2;width:100%;position:relative;height:60px}.tabs__tabs .icon--left,.tabs__tabs .icon--right{position:absolute;top:0;width:35px;display:none;color:#fff;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.tabs__tabs .icon--left{left:0}.tabs__tabs .icon--right{right:0}.tabs__container{overflow-x:auto;overflow-y:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;height:100%;width:100%;position:absolute;padding:1rem;top:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;list-style:none}.tabs__container>li{height:100%}.tabs__container-left{position:absolute;left:0;top:0;width:35px}.tabs .tab__item,.tabs__container-left{height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.tabs .tab__item{color:#e0e0e0;-ms-flex-negative:0;flex-shrink:0;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;min-width:125px;padding:1rem;min-width:0;position:relative;text-align:center;text-decoration:none;text-transform:uppercase;text-overflow:ellipsis;-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1);overflow:hidden;white-space:nowrap}.tabs .tab__item .icon{-webkit-box-flex:1;-ms-flex:1;flex:1;-ms-flex-preferred-size:100%;flex-basis:100%;font-size:32px;margin:.5rem 0}.tabs .tab__item--active{color:#fff}.tabs .tab__item--disabled{opacity:.5;pointer-events:none}.tabs__items{overflow:hidden;position:relative;border-width:0 1px 1px;border-style:solid;border-color:rgba(0,0,0,.1)}.tabs__item{-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1);width:100%}.tabs__item>.card{box-shadow:none}.tabs__slider{position:absolute;bottom:0;height:4px;background:#448aff;-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1)}.input-group--text-field label{pointer-events:none;position:absolute;top:0;left:0;min-width:0;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;text-align:left;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transform-origin:top left;transform-origin:top left;width:100%}.input-group--text-field.input-group--multi-line:not(.input-group--focused):not(.input-group--dirty) label{-webkit-transform:translateZ(0);transform:translateZ(0)}.input-group--text-field input{font-size:16px;-webkit-box-flex:1;-ms-flex:1;flex:1;margin:0;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;min-width:0;height:30px}.input-group--text-field input+.icon{padding:0 6px;-webkit-transition:.3s cubic-bezier(.4,0,.6,1);transition:.3s cubic-bezier(.4,0,.6,1)}.input-group--text-field input:focus{outline:none}.input-group--text-field input:disabled{pointer-events:none}.input-group--text-field textarea{font-size:16px;-webkit-box-flex:1;-ms-flex:1 1;flex:1 1}.input-group--text-field textarea:focus{outline:none}.input-group--text-field .input-group__counter{margin-left:auto}.input-group--text-field .input-group__counter--error{color:#ff5252!important}.input-group--text-field.input-group--light.input-group--single-line.input-group--text-field.input-group--light.input-group--focused label,.input-group--text-field.input-group--light input,.input-group--text-field.input-group--light input:disabled,.input-group--text-field.input-group--light label,.input-group--text-field.input-group--light textarea,.input-group--text-field.input-group--light textarea:disabled{color:rgba(0,0,0,.38)}.input-group--text-field.input-group--light.input-group--dirty input,.input-group--text-field.input-group--light.input-group--dirty textarea{color:rgba(0,0,0,.87)}.input-group--text-field.input-group--light.input-group--disabled input,.input-group--text-field.input-group--light.input-group--disabled textarea,.input-group--text-field.input-group--light .input-group__counter,.input-group--text-field.input-group--light .input-group__details{color:rgba(0,0,0,.38)}.input-group--text-field.input-group--light.input-group--disabled .input-group__details:before{background-color:transparent}.input-group--text-field.input-group--dark.input-group--single-line.input-group--text-field.input-group--dark.input-group--focused label,.input-group--text-field.input-group--dark input,.input-group--text-field.input-group--dark input:disabled,.input-group--text-field.input-group--dark label,.input-group--text-field.input-group--dark textarea,.input-group--text-field.input-group--dark textarea:disabled{color:hsla(0,0%,100%,.5)}.input-group--text-field.input-group--dark.input-group--dirty input,.input-group--text-field.input-group--dark.input-group--dirty textarea{color:#fff}.input-group--text-field.input-group--dark.input-group--disabled input,.input-group--text-field.input-group--dark.input-group--disabled textarea,.input-group--text-field.input-group--dark .input-group__counter,.input-group--text-field.input-group--dark .input-group__details{color:hsla(0,0%,100%,.5)}.input-group--text-field.input-group--dark.input-group--disabled .input-group__details:before{background-color:transparent}.input-group--text-field.input-group--focused label{color:#1976d2}.input-group--text-field.input-group--dirty label,.input-group--text-field.input-group--focused label{-webkit-transform:translate3d(0,-18px,0) scale(.75);transform:translate3d(0,-18px,0) scale(.75)}.input-group--text-field.input-group--error .input-group__details:after{background-color:#ff5252}.input-group--text-field.input-group--prepend-icon .input-group__prepend-icon{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-preferred-size:56px;flex-basis:56px;-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1)}.input-group--text-field.input-group--prepend-icon .input-group__details{margin-left:56px}.input-group--text-field.input-group--prepend-icon .input-group__details:after,.input-group--text-field.input-group--prepend-icon .input-group__details:before{max-width:calc(100% - 56px)}.input-group--text-field.input-group--prepend-icon label{margin-left:56px}.input-group--text-field.input-group--prepend-icon input{-webkit-box-flex:1;-ms-flex:auto;flex:auto}.input-group--text-field.input-group--prepend-icon.input-group--focused .icon{color:#1976d2}.input-group--text-field.input-group--single-line label{-webkit-transform:translateZ(0);transform:translateZ(0)}.input-group--text-field.input-group--single-line.input-group--dirty label{display:none}.input-group--text-field.input-group--required label:after{content:\"*\"}.input-group--text-field.input-group--error label,.input-group--text-field.input-group--required.input-group--focused label:after{color:#ff5252}.input-group--text-field.input-group--error .input-group__details:after,.input-group--text-field.input-group--error .input-group__details:before{background-color:#ff5252}.input-group--text-field.input-group--full-width{padding:0 16px}.input-group--text-field.input-group--full-width .input-group__details:after,.input-group--text-field.input-group--full-width .input-group__details:before{display:none}.picker--time .card__row--actions{margin-top:-10px}.picker--time.picker--dark .picker--time__clock{background:#616161}.picker--time.picker--dark .picker--time__clock-hand:before{border-color:#448aff}.picker--time.picker--dark .picker--time__clock-hand,.picker--time.picker--dark .picker--time__clock:after{background:#448aff}.picker--time.picker--dark .picker--time__clock>span{color:#fff}.picker--time.picker--dark .picker--time__clock>span.active{color:#000}.picker--time.picker--dark .picker--time__clock>span.active:before{background:#448aff}.picker--time.picker--landscape{-ms-flex-wrap:wrap;flex-wrap:wrap}.picker--time.picker--landscape .picker__title{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.picker--time.picker--landscape .picker__title div:first-child{text-align:right}.picker--time.picker--landscape .picker__title div:first-child span{height:55px;font-size:55px}.picker--time.picker--landscape .picker__title div:last-child{margin:16px 0 0;-ms-flex-item-align:initial;-ms-grid-row-align:initial;align-self:auto;text-align:center}.picker--time.picker--landscape .picker--time__clock{height:250px;width:250px}.picker--time.picker--landscape .picker--time__clock-hand{height:97px}.picker--time .picker__title{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.picker--time .picker__title div:first-child{white-space:nowrap}.picker--time .picker__title div:first-child span{-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;height:70px;font-size:70px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;opacity:.6;-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1)}.picker--time .picker__title div:first-child span.active{opacity:1}.picker--time .picker__title div:last-child{-ms-flex-item-align:end;align-self:flex-end;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-size:16px;margin:8px 0 6px 8px}.picker--time .picker__title div:last-child span{cursor:pointer;opacity:.6;-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1)}.picker--time .picker__title div:last-child span.active{opacity:1}.picker--time .picker__title div:only-child{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.picker--time__clock{height:270px;width:270px;border-radius:100%;background:#e0e0e0;position:absolute;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;top:50%;left:50%;-webkit-transition:.5s cubic-bezier(.25,.8,.25,1);transition:.5s cubic-bezier(.25,.8,.25,1);-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.picker--time__clock-hand{height:40%;width:2px;background:#1976d2;bottom:50%;left:calc(50% - 1px);-webkit-transform-origin:center bottom;transform-origin:center bottom;position:absolute}.picker--time__clock-hand:before{background:transparent;border:2px solid #1976d2;border-radius:100%;width:10px;height:10px;top:-3%}.picker--time__clock-hand:before,.picker--time__clock:after{content:\"\";position:absolute;left:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}.picker--time__clock:after{height:8px;width:8px;top:50%;background:#2196f3;border-radius:100%}.picker--time__clock>span{-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:100%;cursor:default;display:-webkit-box;display:-ms-flexbox;display:flex;font-size:16px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;left:calc(50% - 16px);height:32px;position:absolute;text-align:center;top:calc(50% - 16px);width:32px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.picker--time__clock>span>span{z-index:1}.picker--time__clock>span:after,.picker--time__clock>span:before{content:\"\";border-radius:100%;position:absolute;top:50%;left:50%;height:14px;width:14px;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);height:40px;width:40px}.picker--time__clock>span.active{color:#fff;cursor:default}.picker--time__clock>span.active:before{background:#1976d2}.picker--time .card__row--actions{border:none}.toast{position:fixed;z-index:99999999999999}.toast--right{top:5%;right:2%}.toast--left{top:5%;left:2%}.toast--top{top:5%}.toast--bottom,.toast--top{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.toast--bottom{bottom:5%}.toast--snack{bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.toast--snack .toast__content{margin-bottom:0;opacity:1}.toast--snack .toast__content--remove{margin-top:0}.toast__content{background:#424242;border-radius:2px;color:#fff;padding:1rem 2rem;margin:1rem 0;opacity:0;-webkit-transform:translate3d(0,3rem,0);transform:translate3d(0,3rem,0);-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1);box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px rgba(0,0,0,.14),0 1px 18px rgba(0,0,0,.12)}.toast__content--active{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}.toast__content--remove{margin-top:-3rem;opacity:0}[data-tooltip]{position:relative}[data-tooltip]:before{background:#616161;border-radius:.2rem;color:#fff;content:attr(data-tooltip);font-size:10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;opacity:0;height:22px;padding:0 8px;position:absolute;pointer-events:none;-webkit-transition:.2s cubic-bezier(.4,0,.6,1);transition:.2s cubic-bezier(.4,0,.6,1);visibility:hidden;width:auto;white-space:pre;z-index:99;box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}[data-tooltip]:hover:before{opacity:1;visibility:visible}[data-tooltip][data-tooltip-location=bottom]:before{top:100%;left:50%;-webkit-transform:translate(-50%,-14px) scale(.1);transform:translate(-50%,-14px) scale(.1);-webkit-transform-origin:center top;transform-origin:center top}[data-tooltip][data-tooltip-location=bottom]:hover:before{-webkit-transform:translate(-50%,14px) scale(1.01);transform:translate(-50%,14px) scale(1.01)}[data-tooltip][data-tooltip-location=top]:before{bottom:100%;left:50%;-webkit-transform:translate(-50%,14px) scale(.1);transform:translate(-50%,14px) scale(.1);-webkit-transform-origin:center bottom;transform-origin:center bottom}[data-tooltip][data-tooltip-location=top]:hover:before{-webkit-transform:translate(-50%,-14px) scale(1.01);transform:translate(-50%,-14px) scale(1.01)}[data-tooltip][data-tooltip-location=left]:before{right:100%;-webkit-transform:translate(14px) scale(.1);transform:translate(14px) scale(.1);-webkit-transform-origin:center right;transform-origin:center right}[data-tooltip][data-tooltip-location=left]:hover:before{-webkit-transform:translate(-14px) scale(1.01);transform:translate(-14px) scale(1.01)}[data-tooltip][data-tooltip-location=right]:before{left:100%;-webkit-transform:translate(-14px) scale(.1);transform:translate(-14px) scale(.1);-webkit-transform-origin:center left;transform-origin:center left}[data-tooltip][data-tooltip-location=right]:hover:before{-webkit-transform:translate(14px) scale(1.01);transform:translate(14px) scale(1.01)}@media only screen and (max-width:767px){[data-tooltip]:before{padding:0 16px;height:32px}[data-tooltip][data-tooltip-location=bottom]:hover:before{-webkit-transform:translate(-50%,24px) scale(1.01);transform:translate(-50%,24px) scale(1.01)}[data-tooltip][data-tooltip-location=top]:hover:before{-webkit-transform:translate(-50%,-24px) scale(1.01);transform:translate(-50%,-24px) scale(1.01)}[data-tooltip][data-tooltip-location=left]:hover:before{-webkit-transform:translate(-24px) scale(1.01);transform:translate(-24px) scale(1.01)}[data-tooltip][data-tooltip-location=right]:hover:before{-webkit-transform:translate(24px) scale(1.01);transform:translate(24px) scale(1.01)}}.with{min-height:100vh;-webkit-backface-visibility:hidden;overflow-x:hidden}.with.top-fixed-toolbar{padding-top:64px}.with.top-fixed-toolbar header{z-index:4}.with.top-toolbar main{min-height:calc(100vh - 64px)}.with.top-toolbar main>.content{padding-top:1rem}.with.bottom-footer main{min-height:calc(100vh - 45px)}.with.bottom-footer.with.top-fixed-toolbar main,.with.bottom-footer.with.top-toolbar main{min-height:calc(100vh - 64px - 45px)}.with.left-fixed-sidebar header .toolbar{padding-left:314px;-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1)}@media screen and (max-width:991px){.with.left-fixed-sidebar header .toolbar{padding-left:14px}}.with.left-fixed-sidebar footer,.with.left-fixed-sidebar main{padding-left:300px;-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1)}@media screen and (max-width:991px){.with.left-fixed-sidebar footer,.with.left-fixed-sidebar main{padding-left:0}}.with.left-sidebar main{background:#424242}.with.left-sidebar .sidebar{box-shadow:none}.with.right-fixed-sidebar footer,.with.right-fixed-sidebar header .toolbar,.with.right-fixed-sidebar main{padding-right:300px;-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1)}@media screen and (max-width:991px){.with.right-fixed-sidebar footer,.with.right-fixed-sidebar header .toolbar,.with.right-fixed-sidebar main{padding-right:0}}.with.sidebar-under-toolbar .sidebar{z-index:5}.with.sidebar-under-toolbar.left-fixed-sidebar .sidebar,.with.sidebar-under-toolbar.right-fixed-sidebar .sidebar{padding-top:64px}.with.sidebar-under-toolbar.left-fixed-sidebar .toolbar,.with.sidebar-under-toolbar.right-fixed-sidebar .toolbar{padding-left:inherit}.app__bar{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#eee;display:-webkit-box;display:-ms-flexbox;display:flex;width:100%}.app__bar .btn-dropdown--overflow .input-group{border:none;margin:0}.app__bar .input-group__details{display:none}.app__bar>div{min-width:130px}.app__bar>div:not(:first-child){margin-left:1px}.app__bar>div:not(:first-child):before{content:\"\";position:absolute;height:60%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);left:-1px;background:rgba(0,0,0,.12);width:1px;z-index:0}.app__bar .input-group:not(.input-group--focused) .input-group__input:hover{background:#f5f5f5}.app__bar .btn-toggle{box-shadow:none;background:transparent;position:relative;padding:0 8px}.app__bar .btn-toggle .btn{background:transparent;border:none!important;height:42px;margin:0 8px}.app__bar .btn-toggle .btn .icon{font-size:26px;width:26px}@media only screen and (max-width:575px){.hidden-xs-only{display:none!important}}@media only screen and (max-width:767px){.hidden-sm-and-down{display:none!important}}@media only screen and (min-width:576px){.hidden-sm-and-up{display:none!important}}@media only screen and (min-width:768px) and (max-width){.hidden-md-only{display:none!important}}@media only screen and (max-width:991px){.hidden-md-and-down{display:none!important}}@media only screen and (min-width:768px){.hidden-md-and-up{display:none!important}}@media only screen and (min-width:992px) and (max-width){.hidden-lg-only{display:none!important}}@media only screen and (max-width:1199px){.hidden-lg-and-down{display:none!important}}@media only screen and (min-width:992px){.hidden-lg-and-up{display:none!important}}@media only screen and (min-width:1200px){.hidden-xl-only{display:none!important}}.right{float:right!important}.left{float:left!important}.mt-0{margin-top:0!important}.mr-0{margin-right:0!important}.mb-0{margin-bottom:0!important}.ml-0,.mx-0{margin-left:0!important}.mx-0{margin-right:0!important}.my-0{margin-top:0!important;margin-bottom:0!important}.ma-0{margin:0!important}.pt-0{padding-top:0!important}.pr-0{padding-right:0!important}.pb-0{padding-bottom:0!important}.pl-0,.px-0{padding-left:0!important}.px-0{padding-right:0!important}.py-0{padding-top:0!important;padding-bottom:0!important}.pa-0{padding:0!important}.mt-1{margin-top:.25rem!important}.mr-1{margin-right:.25rem!important}.mb-1{margin-bottom:.25rem!important}.ml-1,.mx-1{margin-left:.25rem!important}.mx-1{margin-right:.25rem!important}.my-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.ma-1{margin:.25rem!important}.pt-1{padding-top:.25rem!important}.pr-1{padding-right:.25rem!important}.pb-1{padding-bottom:.25rem!important}.pl-1,.px-1{padding-left:.25rem!important}.px-1{padding-right:.25rem!important}.py-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.pa-1{padding:.25rem!important}.mt-2{margin-top:.5rem!important}.mr-2{margin-right:.5rem!important}.mb-2{margin-bottom:.5rem!important}.ml-2,.mx-2{margin-left:.5rem!important}.mx-2{margin-right:.5rem!important}.my-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.ma-2{margin:.5rem!important}.pt-2{padding-top:.5rem!important}.pr-2{padding-right:.5rem!important}.pb-2{padding-bottom:.5rem!important}.pl-2,.px-2{padding-left:.5rem!important}.px-2{padding-right:.5rem!important}.py-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.pa-2{padding:.5rem!important}.mt-3{margin-top:1rem!important}.mr-3{margin-right:1rem!important}.mb-3{margin-bottom:1rem!important}.ml-3,.mx-3{margin-left:1rem!important}.mx-3{margin-right:1rem!important}.my-3{margin-top:1rem!important;margin-bottom:1rem!important}.ma-3{margin:1rem!important}.pt-3{padding-top:1rem!important}.pr-3{padding-right:1rem!important}.pb-3{padding-bottom:1rem!important}.pl-3,.px-3{padding-left:1rem!important}.px-3{padding-right:1rem!important}.py-3{padding-top:1rem!important;padding-bottom:1rem!important}.pa-3{padding:1rem!important}.mt-4{margin-top:1.5rem!important}.mr-4{margin-right:1.5rem!important}.mb-4{margin-bottom:1.5rem!important}.ml-4,.mx-4{margin-left:1.5rem!important}.mx-4{margin-right:1.5rem!important}.my-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.ma-4{margin:1.5rem!important}.pt-4{padding-top:1.5rem!important}.pr-4{padding-right:1.5rem!important}.pb-4{padding-bottom:1.5rem!important}.pl-4,.px-4{padding-left:1.5rem!important}.px-4{padding-right:1.5rem!important}.py-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.pa-4{padding:1.5rem!important}.mt-5{margin-top:3rem!important}.mr-5{margin-right:3rem!important}.mb-5{margin-bottom:3rem!important}.ml-5,.mx-5{margin-left:3rem!important}.mx-5{margin-right:3rem!important}.my-5{margin-top:3rem!important;margin-bottom:3rem!important}.ma-5{margin:3rem!important}.pt-5{padding-top:3rem!important}.pr-5{padding-right:3rem!important}.pb-5{padding-bottom:3rem!important}.pl-5,.px-5{padding-left:3rem!important}.px-5{padding-right:3rem!important}.py-5{padding-top:3rem!important;padding-bottom:3rem!important}.pa-5{padding:3rem!important}@media only screen and (min-width:0){.text-xs-left{text-align:left!important}.text-xs-center{text-align:center!important}.text-xs-right{text-align:right!important}.text-xs-justify{text-align:justify!important}}@media only screen and (min-width:576px){.text-sm-left{text-align:left!important}.text-sm-center{text-align:center!important}.text-sm-right{text-align:right!important}.text-sm-justify{text-align:justify!important}}@media only screen and (min-width:768px){.text-md-left{text-align:left!important}.text-md-center{text-align:center!important}.text-md-right{text-align:right!important}.text-md-justify{text-align:justify!important}}@media only screen and (min-width:992px){.text-lg-left{text-align:left!important}.text-lg-center{text-align:center!important}.text-lg-right{text-align:right!important}.text-lg-justify{text-align:justify!important}}@media only screen and (min-width:1200px){.text-xl-left{text-align:left!important}.text-xl-center{text-align:center!important}.text-xl-right{text-align:right!important}.text-xl-justify{text-align:justify!important}}.snack{background-color:#323232;position:fixed;display:-webkit-box;display:-ms-flexbox;display:flex;height:0;pointer-events:none;z-index:1000;visibility:visible}.snack--absolute{position:absolute}.snack--multi-line{min-height:48px;height:auto}.snack--top{top:0}.snack--bottom,.snack--top{left:50%;-webkit-transform:translate3d(-50%,0,0) translateZ(0);transform:translate3d(-50%,0,0) translateZ(0)}.snack--bottom{bottom:48px}.snack--left{left:8px;right:auto;-webkit-transform:none;transform:none}.snack--left.snack--top{top:8px}.snack--left.snack--bottom{bottom:56px}.snack--right{left:auto;right:8px;-webkit-transform:none;transform:none}.snack--right.snack--top{top:8px}.snack--right.snack--bottom{top:auto;bottom:56px}.snack__content{background-color:inherit;padding:14px 24px;border-radius:2px;pointer-events:auto;max-width:568px;min-width:288px;height:48px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;font-size:14px;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-transition:.4s cubic-bezier(.25,.8,.25,1);transition:.4s cubic-bezier(.25,.8,.25,1);position:relative!important}.snack__content .btn{margin:0 -16px 0 24px;min-width:0}@media only screen and (max-width:575px){.snack{width:100%;left:0;right:auto;-webkit-transform:none;transform:none}.snack--left.snack--top,.snack--right.snack--top{top:0}.snack--left.snack--bottom,.snack--right.snack--bottom{bottom:48px}.snack__content{border-radius:0;max-width:100%;width:100%}}.bottom-nav{background:#1976d2;bottom:0;box-shadow:0 3px 14px 2px rgba(0,0,0,.12);display:-webkit-box;display:-ms-flexbox;display:flex;height:56px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:fixed;-webkit-transform:translate3d(0,60px,0);transform:translate3d(0,60px,0);-webkit-transition:all .4s cubic-bezier(.25,.8,.5,1);transition:all .4s cubic-bezier(.25,.8,.5,1);width:100%;z-index:6}.bottom-nav--absolute{position:absolute}.bottom-nav--active{-webkit-transform:translateZ(0);transform:translateZ(0)}.bottom-nav .btn{border-radius:0;-webkit-box-flex:1;-ms-flex:1 1 32px;flex:1 1 32px;height:100%;margin:0;max-width:168px;min-width:80px;padding:0 12px;opacity:.5;text-transform:capitalize;-webkit-transform-origin:50% 50%;transform-origin:50% 50%}.bottom-nav .btn .icon{-webkit-transition:all .4s cubic-bezier(.25,.8,.5,1);transition:all .4s cubic-bezier(.25,.8,.5,1)}.bottom-nav .btn .btn__content{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;height:56px;font-size:12px;-webkit-transform:scaleX(1) translate3d(0,1px,0);transform:scaleX(1) translate3d(0,1px,0);white-space:nowrap;will-change:font-size}.bottom-nav .btn--active{opacity:1}.bottom-nav .btn--active .btn__content{font-size:14px;-webkit-transform:scaleX(1) translateZ(0);transform:scaleX(1) translateZ(0)}.bottom-nav .btn:not(.btn--active){-webkit-filter:grayscale(100%);filter:grayscale(100%)}.bottom-nav--shift .btn__content{font-size:14px}.bottom-nav--shift .btn__content span{height:21px}.bottom-nav--shift .btn{-webkit-transition:all .3s;transition:all .3s;min-width:56px;max-width:96px}.bottom-nav--shift .btn--active{min-width:96px;max-width:168px;-webkit-box-flex:1;-ms-flex:1 1 72px;flex:1 1 72px}.bottom-nav--shift .btn--active .btn__content{-webkit-transform:scaleX(1) translate3d(0,2px,0);transform:scaleX(1) translate3d(0,2px,0)}.bottom-nav--shift .btn:not(.btn--active) .btn__content{-webkit-transform:scaleX(1) translate3d(0,10px,0);transform:scaleX(1) translate3d(0,10px,0)}.bottom-nav--shift .btn:not(.btn--active) .btn__content span{color:transparent}", ""]);

// exports


/***/ }),
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(210)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(100),
  /* template */
  __webpack_require__(197),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/tacitaWebServer/tacitaWebAdmin/src/components/Application/Application.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Application.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b7c8dcce", Component.options)
  } else {
    hotAPI.reload("data-v-b7c8dcce", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(203)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(101),
  /* template */
  __webpack_require__(190),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/tacitaWebServer/tacitaWebAdmin/src/components/Beacon/Beacon.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Beacon.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-33fea837", Component.options)
  } else {
    hotAPI.reload("data-v-33fea837", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(202)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(102),
  /* template */
  __webpack_require__(189),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/tacitaWebServer/tacitaWebAdmin/src/components/DashBoard/ApplicationPage.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ApplicationPage.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1f27ef6c", Component.options)
  } else {
    hotAPI.reload("data-v-1f27ef6c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(204)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(103),
  /* template */
  __webpack_require__(191),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/tacitaWebServer/tacitaWebAdmin/src/components/DashBoard/BeaconPage.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] BeaconPage.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-38c2a096", Component.options)
  } else {
    hotAPI.reload("data-v-38c2a096", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(211)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(104),
  /* template */
  __webpack_require__(198),
  /* scopeId */
  "data-v-ba31d1be",
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/tacitaWebServer/tacitaWebAdmin/src/components/DashBoard/DashBoard.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] DashBoard.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ba31d1be", Component.options)
  } else {
    hotAPI.reload("data-v-ba31d1be", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(209)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(105),
  /* template */
  __webpack_require__(196),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/tacitaWebServer/tacitaWebAdmin/src/components/DashBoard/DisplayPage.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] DisplayPage.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-81023944", Component.options)
  } else {
    hotAPI.reload("data-v-81023944", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(205)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(106),
  /* template */
  __webpack_require__(192),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/tacitaWebServer/tacitaWebAdmin/src/components/Display/Display.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Display.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3df74606", Component.options)
  } else {
    hotAPI.reload("data-v-3df74606", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(212)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(107),
  /* template */
  __webpack_require__(199),
  /* scopeId */
  "data-v-ed9ca292",
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/tacitaWebServer/tacitaWebAdmin/src/components/NavBar/NavBar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] NavBar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ed9ca292", Component.options)
  } else {
    hotAPI.reload("data-v-ed9ca292", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('page', {
    attrs: {
      "title": "Application"
    }
  }, [_c('div', {
    staticClass: "uk-flex--grow"
  }, [(_vm.$store.state.applications.data.length <= 0) ? _c('div', {
    staticClass: "uk-text-center uk-margin-large-top"
  }, [_c('h6', {
    staticClass: "uk-text-meta uk-text-large"
  }, [_vm._v("No Applications")])]) : _vm._e(), _vm._v(" "), _c('resources-wrapper', {
    attrs: {
      "data": _vm.$store.state.applications
    }
  }, _vm._l((_vm.$store.state.applications.data), function(el) {
    return _c('application', {
      attrs: {
        "data": el
      }
    })
  }))], 1), _vm._v(" "), _c('v-btn', {
    staticClass: "floating-btn",
    attrs: {
      "floating": "",
      "primary": ""
    },
    nativeOn: {
      "click": function($event) {
        _vm.$store.state.showCreateDisplayModal = true
      }
    }
  }, [_c('v-icon', {
    attrs: {
      "dark": ""
    }
  }, [_vm._v("add")])], 1), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.$store.state.showCreateDisplayModal),
      expression: "$store.state.showCreateDisplayModal"
    }],
    staticClass: "uk-modal uk-open uk-flex uk-flex-center uk-flex-middle",
    attrs: {
      "uk-modal": "center: true"
    }
  }, [_c('div', {
    staticClass: "uk-modal-dialog uk-modal-body"
  }, [_c('h4', [_vm._v("Create a new application?")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newApplication.name),
      expression: "newApplication.name"
    }],
    staticClass: "uk-input uk-margin-bottom",
    class: {
      'uk-form-danger': _vm.newApplication.toogle && (_vm.newApplication.name == null || _vm.newApplication.name == '')
    },
    attrs: {
      "type": "text",
      "placeholder": "Name"
    },
    domProps: {
      "value": (_vm.newApplication.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newApplication.name = $event.target.value
      }
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newApplication.material_icon),
      expression: "newApplication.material_icon"
    }],
    staticClass: "uk-input uk-margin-bottom",
    class: {
      'uk-form-danger': _vm.newApplication.toogle && (_vm.newApplication.material_icon == null || _vm.newApplication.material_icon == '')
    },
    attrs: {
      "type": "text",
      "placeholder": "Icon"
    },
    domProps: {
      "value": (_vm.newApplication.material_icon)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newApplication.material_icon = $event.target.value
      }
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newApplication.url),
      expression: "newApplication.url"
    }],
    staticClass: "uk-input uk-margin-bottom",
    class: {
      'uk-form-danger': _vm.newApplication.toogle && (_vm.newApplication.url == null || _vm.newApplication.url == '')
    },
    attrs: {
      "type": "text",
      "placeholder": "Url"
    },
    domProps: {
      "value": (_vm.newApplication.url)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newApplication.url = $event.target.value
      }
    }
  }), _vm._v(" "), _c('hr'), _vm._v(" "), _c('p', [_vm._v("\n          Optional\n        ")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newApplication.description_en),
      expression: "newApplication.description_en"
    }],
    staticClass: "uk-input uk-margin-bottom",
    attrs: {
      "type": "text",
      "placeholder": "Description English"
    },
    domProps: {
      "value": (_vm.newApplication.description_en)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newApplication.description_en = $event.target.value
      }
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newApplication.description_it),
      expression: "newApplication.description_it"
    }],
    staticClass: "uk-input uk-margin-bottom",
    attrs: {
      "type": "text",
      "placeholder": "Description Italian"
    },
    domProps: {
      "value": (_vm.newApplication.description_it)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newApplication.description_it = $event.target.value
      }
    }
  }), _vm._v(" "), _c('div', [_c('v-btn', {
    attrs: {
      "default": "",
      "flat": ""
    },
    nativeOn: {
      "click": function($event) {
        _vm.$store.state.showCreateDisplayModal = false
      }
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c('v-btn', {
    attrs: {
      "primary": "",
      "dark": ""
    },
    nativeOn: {
      "click": function($event) {
        _vm.createApplication()
      }
    }
  }, [_vm._v("Yes")])], 1)])])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1f27ef6c", module.exports)
  }
}

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('resource', [_c('div', {
    staticClass: "uk-flex uk-flex-column"
  }, [_c('div', {
    staticClass: "uk-margin-small-bottom"
  }, [_c('div', {
    staticClass: "uk-flex uk-flex-middle"
  }, [_c('div', {
    staticClass: "beacon-icon--small uk-margin-small-right"
  }), _vm._v(" "), _c('h5', {
    staticClass: "uk-margin-remove"
  }, [_vm._v(_vm._s(("Beacon " + (_vm.data.id))))])]), _vm._v(" "), _c('div', {
    staticClass: "uk-flex--grow uk-margin-right"
  }), _vm._v(" "), _c('v-btn', {
    staticClass: "grey--text text--darken-2 my-card__actions uk-margin-remove",
    attrs: {
      "icon": ""
    }
  }, [_c('v-icon', [_vm._v("more_vert")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "uk-dropdown": "mode: click;pos: bottom-right"
    }
  }, [_c('ul', {
    staticClass: "uk-nav uk-dropdown-nav"
  }, [_c('li', [_c('a', {
    on: {
      "click": function($event) {
        _vm.$store.actions.deleteBeacon(_vm.data)
      }
    }
  }, [_vm._v("Remove")])]), _vm._v(" "), _c('li', [_c('a', {
    on: {
      "click": function($event) {
        _vm.toogleEdit()
      }
    }
  }, [_vm._v("Edit")])])])])], 1), _vm._v(" "), (_vm.data.edit) ? _c('div', {
    staticClass: "uk-margin-small-top"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.editBeacon.beacon_id),
      expression: "editBeacon.beacon_id"
    }],
    staticClass: "uk-input uk-form-small uk-margin-bottom",
    attrs: {
      "type": "text",
      "placeholder": "change adress"
    },
    domProps: {
      "value": (_vm.editBeacon.beacon_id)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.editBeacon.beacon_id = $event.target.value
      }
    }
  })]) : _c('div', {
    staticClass: "uk-margin-small-bottom"
  }, [_c('h6', {
    staticClass: "uk-margin-remove"
  }, [_vm._v(_vm._s(("Address: " + (_vm.data.beacon_id))))])]), _vm._v(" "), (_vm.data.display_id) ? _c('div', {
    staticClass: "uk-flex uk-flex-middle"
  }, [_c('v-icon', {
    staticClass: "grey--text text--darken-2 uk-margin-small-right"
  }, [_vm._v("desktop_windows")]), _vm._v("\n      " + _vm._s(_vm.data.display_id) + "\n      "), _c('div', {
    staticClass: "uk-flex--grow"
  })], 1) : _vm._e(), _vm._v(" "), (_vm.data.edit) ? _c('div', {
    staticClass: "uk-margin-top uk-flex"
  }, [_c('v-btn', {
    attrs: {
      "default": "",
      "flat": ""
    },
    nativeOn: {
      "click": function($event) {
        _vm.toogleEdit($event)
      }
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c('div', {
    staticClass: "uk-flex--grow"
  }), _vm._v(" "), _c('v-btn', {
    attrs: {
      "primary": "",
      "dark": ""
    },
    nativeOn: {
      "click": function($event) {
        _vm.$store.actions.editBeacon(_vm.editBeacon)
      }
    }
  }, [_vm._v("Done")])], 1) : _vm._e()])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-33fea837", module.exports)
  }
}

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('page', {
    attrs: {
      "title": "Beacon"
    }
  }, [_c('div', {
    staticClass: "uk-flex--grow"
  }, [(_vm.$store.state.beacons.data.length <= 0) ? _c('div', {
    staticClass: "uk-text-center uk-margin-large-top"
  }, [_c('h6', {
    staticClass: "uk-text-meta uk-text-large"
  }, [_vm._v("No Beacons")])]) : _vm._e(), _vm._v(" "), _c('resources-wrapper', {
    attrs: {
      "data": _vm.$store.state.beacons
    }
  }, _vm._l((_vm.$store.state.beacons.data), function(el) {
    return _c('beacon', {
      attrs: {
        "data": el
      }
    })
  }))], 1), _vm._v(" "), _c('v-btn', {
    staticClass: "floating-btn",
    attrs: {
      "floating": "",
      "primary": ""
    },
    nativeOn: {
      "click": function($event) {
        _vm.$store.state.showCreateDisplayModal = true
      }
    }
  }, [_c('v-icon', {
    attrs: {
      "dark": ""
    }
  }, [_vm._v("add")])], 1), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.$store.state.showCreateDisplayModal),
      expression: "$store.state.showCreateDisplayModal"
    }],
    staticClass: "uk-modal uk-open uk-flex uk-flex-center uk-flex-middle",
    attrs: {
      "uk-modal": "center: true"
    }
  }, [_c('div', {
    staticClass: "uk-modal-dialog uk-modal-body"
  }, [_c('h4', [_vm._v("Create a new beacon?")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newBeacon.beacon_id),
      expression: "newBeacon.beacon_id"
    }],
    staticClass: "uk-input uk-margin-bottom",
    attrs: {
      "type": "text",
      "placeholder": "Beacon adress"
    },
    domProps: {
      "value": (_vm.newBeacon.beacon_id)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newBeacon.beacon_id = $event.target.value
      }
    }
  }), _vm._v(" "), _c('div', [_c('v-btn', {
    attrs: {
      "default": "",
      "flat": ""
    },
    nativeOn: {
      "click": function($event) {
        _vm.$store.state.showCreateDisplayModal = false
      }
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c('v-btn', {
    attrs: {
      "primary": "",
      "dark": ""
    },
    nativeOn: {
      "click": function($event) {
        _vm.$store.actions.createBeacon(_vm.newBeacon)
      }
    }
  }, [_vm._v("Yes")])], 1)])])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-38c2a096", module.exports)
  }
}

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('resource', [_c('div', {
    staticClass: "uk-flex uk-flex-column"
  }, [_c('div', {
    staticClass: "uk-flex uk-flex-middle uk-margin-bottom"
  }, [_c('v-icon', {
    staticClass: "grey--text text--darken-2 uk-margin-small-right"
  }, [_vm._v("desktop_windows")]), _vm._v(" "), _c('h3', {
    staticClass: "uk-margin-remove"
  }, [_vm._v(_vm._s("Display " + _vm.data.id))]), _vm._v(" "), _c('div', {
    staticClass: "uk-flex--grow uk-margin-right"
  }), _vm._v(" "), _c('v-btn', {
    staticClass: "grey--text text--darken-2 my-card__actions uk-margin-remove",
    attrs: {
      "icon": ""
    }
  }, [_c('v-icon', [_vm._v("more_vert")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "uk-dropdown": "mode: click;pos: bottom-right"
    }
  }, [_c('ul', {
    staticClass: "uk-nav uk-dropdown-nav"
  }, [_c('li', [_c('a', {
    on: {
      "click": function($event) {
        _vm.$store.actions.deleteDisplay(_vm.data)
      }
    }
  }, [_vm._v("Remove")])]), _vm._v(" "), _c('li', [_c('a', {
    on: {
      "click": function($event) {
        _vm.$store.actions.editDisplay(_vm.data)
      }
    }
  }, [_vm._v("Edit")])])])])], 1), _vm._v(" "), _c('div', {
    staticClass: "uk-flex"
  }, [_vm._l((_vm.data.apps), function(application) {
    return _c('div', {
      staticClass: "uk-flex"
    }, [_c('div', {
      staticClass: "uk-flex uk-flex-middle"
    }, [_c('v-icon', {
      staticClass: "grey--text text--darken-2 uk-margin-small-right"
    }, [_vm._v(_vm._s(application.material_icon))]), _vm._v(" "), _c('h5', {
      staticClass: "uk-margin-remove"
    }, [_vm._v(_vm._s(application.name.toUpperCase()))])], 1)])
  }), _vm._v(" "), _c('div', {
    staticClass: "uk-flex--grow"
  })], 2), _vm._v(" "), (_vm.data.editApplications) ? _c('div', [_c('div', {
    staticClass: "uk-margin-small-bottom uk-margin-small-top"
  }, [_c('p', {
    staticClass: "uk-text-meta uk-margin-remove"
  }, [_vm._v("\n          Change application\n        ")])]), _vm._v(" "), _c('div', {
    staticClass: "uk-flex"
  }, [_vm._l((_vm.$store.state.applications.data), function(application) {
    return _c('div', {
      staticClass: "uk-margin-small-right"
    }, [_c('v-btn', {
      attrs: {
        "icon": "",
        "title": application.name,
        "uk-tooltip": ""
      },
      nativeOn: {
        "click": function($event) {
          _vm.$store.actions.changeApp(_vm.data, application)
        }
      }
    }, [_c('v-icon', {
      staticClass: "grey--text text--darken-2 "
    }, [_vm._v(_vm._s(application.material_icon))])], 1)], 1)
  }), _vm._v(" "), _c('div', {
    staticClass: "uk-flex--grow"
  })], 2)]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-small-bottom"
  }), _vm._v(" "), (_vm.beacons.length > 0) ? _c('hr') : _vm._e(), _vm._v(" "), _c('draggable', {
    staticClass: "display-beacon__container uk-flex uk-grid-small",
    attrs: {
      "options": {
        group: 'people',
        filter: '.ignore'
      },
      "uk-grid": ""
    },
    on: {
      "start": _vm.start,
      "end": _vm.end
    },
    model: {
      value: (_vm.beacons),
      callback: function($$v) {
        _vm.beacons = $$v
      },
      expression: "beacons"
    }
  }, _vm._l((_vm.beacons), function(beacon) {
    return _c('div', {
      key: beacon
    }, [_c('div', {
      staticClass: "beacon-icon"
    }), _vm._v(" "), _c('div', {
      attrs: {
        "uk-dropdown": "mode: click"
      }
    }, [_c('div', {
      staticClass: "uk-flex uk-flex-column"
    }, [_c('div', {
      staticClass: "uk-margin-small-bottom"
    }, [_c('p', {
      staticClass: "uk-margin-remove"
    }, [_vm._v("\n                " + _vm._s(("Beacon " + (beacon.id))) + "\n              ")])]), _vm._v(" "), _c('div', [_c('p', {
      staticClass: "uk-text-meta uk-margin-remove"
    }, [_vm._v("\n                Mac address\n              ")]), _vm._v(" "), _c('p', {
      staticClass: "uk-margin-remove"
    }, [_vm._v("\n                " + _vm._s(beacon.beacon_id) + "\n              ")])])])]), _vm._v(" "), _c('div', {
      staticClass: "uk-text-center"
    }, [_vm._v("\n          " + _vm._s(beacon.id) + "\n        ")])])
  }))], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3df74606", module.exports)
  }
}

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "uk-flex uk-flex-column",
    attrs: {
      "id": "app"
    }
  }, [_c('nav-bar'), _vm._v(" "), _c('router-view', {
    staticClass: "uk-flex--grow"
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-42fa2d10", module.exports)
  }
}

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "resource uk-width-1-1@s uk-width-1-2@m uk-width-1-3@l uk-width-1-4@xl"
  }, [_c('div', {
    staticClass: "uk-card uk-card-default uk-card-body"
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-670fae40", module.exports)
  }
}

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "uk-container uk-container-expand uk-section"
  }, [_c('div', {
    attrs: {
      "uk-grid": ""
    }
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-68e75580", module.exports)
  }
}

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('page', {
    attrs: {
      "title": "Display"
    }
  }, [_c('div', {
    staticClass: "uk-flex--grow"
  }, [(_vm.$store.state.displays.data.length <= 0) ? _c('div', {
    staticClass: "uk-text-center uk-margin-large-top"
  }, [_c('h6', {
    staticClass: "uk-text-meta uk-text-large"
  }, [_vm._v("No displays")])]) : _vm._e(), _vm._v(" "), _c('resources-wrapper', {
    attrs: {
      "data": _vm.$store.state.displays
    }
  }, _vm._l((_vm.$store.state.displays.data), function(el) {
    return _c('display', {
      attrs: {
        "data": el
      }
    })
  }))], 1), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.$store.state.showCreateDisplayModal),
      expression: "$store.state.showCreateDisplayModal"
    }],
    staticClass: "uk-modal uk-open uk-flex uk-flex-center uk-flex-middle",
    attrs: {
      "uk-modal": "center: true"
    }
  }, [_c('div', {
    staticClass: "uk-modal-dialog uk-modal-body"
  }, [_c('h4', [_vm._v("Create a new display?")]), _vm._v(" "), _c('div', [_c('v-btn', {
    attrs: {
      "default": "",
      "flat": ""
    },
    nativeOn: {
      "click": function($event) {
        _vm.$store.state.showCreateDisplayModal = false
      }
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c('v-btn', {
    attrs: {
      "primary": "",
      "dark": ""
    },
    nativeOn: {
      "click": function($event) {
        _vm.$store.actions.createDisplay({})
      }
    }
  }, [_vm._v("Yes")])], 1)])])]), _vm._v(" "), _c('div', {
    staticClass: "unlinked-beacon__container"
  }, [_c('h4', {
    staticClass: "uk-margin-small-bottom"
  }, [_vm._v("Unliked Beacons")]), _vm._v(" "), _c('draggable', {
    staticClass: "display-beacon__container uk-flex uk-grid-small",
    attrs: {
      "options": {
        group: 'people',
        filter: '.ignore'
      },
      "uk-grid": ""
    },
    model: {
      value: (_vm.beacons),
      callback: function($$v) {
        _vm.beacons = $$v
      },
      expression: "beacons"
    }
  }, _vm._l((_vm.beacons), function(beacon) {
    return _c('div', {
      key: beacon
    }, [_c('div', {
      staticClass: "beacon-icon"
    }), _vm._v(" "), _c('div', {
      attrs: {
        "uk-dropdown": "mode: hover;pos: top"
      }
    }, [_c('div', {
      staticClass: "uk-flex uk-flex-column"
    }, [_c('div', {
      staticClass: "uk-margin-small-bottom"
    }, [_c('p', {
      staticClass: "uk-margin-remove"
    }, [_vm._v("\n                " + _vm._s(("Beacon " + (beacon.id))) + "\n              ")])]), _vm._v(" "), _c('div', [_c('p', {
      staticClass: "uk-text-meta uk-margin-remove"
    }, [_vm._v("\n                Mac address\n              ")]), _vm._v(" "), _c('p', {
      staticClass: "uk-margin-remove"
    }, [_vm._v("\n                " + _vm._s(beacon.beacon_id) + "\n              ")])])])]), _vm._v(" "), _c('div', {
      staticClass: "uk-text-center"
    }, [_vm._v("\n          " + _vm._s(beacon.id) + "\n        ")])])
  }))], 1), _vm._v(" "), _c('v-btn', {
    staticClass: "floating-btn",
    attrs: {
      "floating": "",
      "primary": ""
    },
    nativeOn: {
      "click": function($event) {
        _vm.$store.state.showCreateDisplayModal = true
      }
    }
  }, [_c('v-icon', {
    attrs: {
      "dark": ""
    }
  }, [_vm._v("add")])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-81023944", module.exports)
  }
}

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('resource', [_c('div', {
    staticClass: "uk-flex uk-flex-column"
  }, [_c('div', {
    staticClass: "uk-margin-small-bottom"
  }, [(!_vm.data.edit) ? _c('div', {
    staticClass: "uk-flex uk-flex-middle"
  }, [_c('v-icon', {
    staticClass: "grey--text text--darken-2 uk-margin-small-right"
  }, [_vm._v(_vm._s(_vm.data.material_icon))]), _vm._v(" "), _c('h5', {
    staticClass: "uk-margin-remove"
  }, [_vm._v(_vm._s(("" + (_vm.data.name))))])], 1) : _vm._e(), _vm._v(" "), (_vm.data.edit) ? _c('div', {
    staticClass: "header--margin-fix"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.editApplication.name),
      expression: "editApplication.name"
    }],
    staticClass: "uk-input uk-form-small uk-margin-bottom",
    attrs: {
      "type": "text",
      "placeholder": "Change name"
    },
    domProps: {
      "value": (_vm.editApplication.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.editApplication.name = $event.target.value
      }
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.editApplication.material_icon),
      expression: "editApplication.material_icon"
    }],
    staticClass: "uk-input uk-form-small uk-margin-bottom",
    attrs: {
      "type": "text",
      "placeholder": "Change icon"
    },
    domProps: {
      "value": (_vm.editApplication.material_icon)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.editApplication.material_icon = $event.target.value
      }
    }
  })]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "uk-flex--grow uk-margin-right"
  }), _vm._v(" "), _c('v-btn', {
    staticClass: "grey--text text--darken-2 my-card__actions uk-margin-remove",
    attrs: {
      "icon": ""
    }
  }, [_c('v-icon', [_vm._v("more_vert")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "uk-dropdown": "mode: click;pos: bottom-right"
    }
  }, [_c('ul', {
    staticClass: "uk-nav uk-dropdown-nav"
  }, [_c('li', [_c('a', {
    on: {
      "click": function($event) {
        _vm.$store.actions.removeApplication(_vm.data)
      }
    }
  }, [_vm._v("Remove")])]), _vm._v(" "), _c('li', [_c('a', {
    on: {
      "click": function($event) {
        _vm.toogleEdit()
      }
    }
  }, [_vm._v("Edit")])])])]), _vm._v(" "), (_vm.data.description_en) ? _c('div', {
    staticClass: "uk-margin-small-top"
  }, [_vm._v("\n        " + _vm._s(_vm.data.description_en) + "\n      ")]) : _vm._e()], 1), _vm._v(" "), (_vm.data.edit) ? _c('div', {
    staticClass: " uk-flex"
  }, [_c('v-btn', {
    attrs: {
      "default": "",
      "flat": ""
    },
    nativeOn: {
      "click": function($event) {
        _vm.toogleEdit($event)
      }
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c('div', {
    staticClass: "uk-flex--grow"
  }), _vm._v(" "), _c('v-btn', {
    attrs: {
      "primary": "",
      "dark": ""
    },
    nativeOn: {
      "click": function($event) {
        _vm.$store.actions.editApplication(_vm.editApplication)
      }
    }
  }, [_vm._v("Done")])], 1) : _vm._e()])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b7c8dcce", module.exports)
  }
}

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "f-h uk-flex uk-offcanvas-content"
  }, [_c('div', {
    staticClass: "tm-sidebar-left uk-visible@s"
  }, [_c('ul', {
    staticClass: "uk-nav"
  }, [_c('li', [_c('a', {
    on: {
      "click": function($event) {
        _vm.$router.push({
          name: 'DisplayPage'
        })
      }
    }
  }, [_vm._v("Display")])]), _vm._v(" "), _c('li', [_c('a', {
    on: {
      "click": function($event) {
        _vm.$router.push({
          name: 'BeaconPage'
        })
      }
    }
  }, [_vm._v("Beacon")])]), _vm._v(" "), _c('li', [_c('a', {
    on: {
      "click": function($event) {
        _vm.$router.push({
          name: 'ApplicationPage'
        })
      }
    }
  }, [_vm._v("Application")])])])]), _vm._v(" "), _c('keep-alive', [_c('router-view', {
    staticClass: "uk-flex--grow"
  })], 1), _vm._v(" "), _c('div', {
    attrs: {
      "id": "my-sidenav",
      "uk-offcanvas": ""
    }
  }, [_c('div', {
    staticClass: "uk-offcanvas-bar"
  }, [_c('v-btn', {
    staticClass: "grey--text text--darken-2 uk-offcanvas-close",
    attrs: {
      "icon": "",
      "large": ""
    }
  }, [_c('v-icon', [_vm._v("close")])], 1), _vm._v(" "), _c('h3'), _vm._v(" "), _c('ul', {
    staticClass: "uk-nav uk-nav-default"
  }, [_c('li', [_c('a', {
    on: {
      "click": function($event) {
        _vm.$router.push({
          name: 'DisplayPage'
        })
      }
    }
  }, [_vm._v("Display")])]), _vm._v(" "), _c('li', [_c('a', {
    on: {
      "click": function($event) {
        _vm.$router.push({
          name: 'BeaconPage'
        })
      }
    }
  }, [_vm._v("Beacon")])]), _vm._v(" "), _c('li', [_c('a', {
    on: {
      "click": function($event) {
        _vm.$router.push({
          name: 'ApplicationPage'
        })
      }
    }
  }, [_vm._v("Application")])])])], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ba31d1be", module.exports)
  }
}

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('nav', {
    staticClass: "uk-navbar-container my-nav-bar uk-box-shadow",
    attrs: {
      "uk-navbar": ""
    }
  }, [_c('div', {
    staticClass: "uk-navbar-left"
  }, [_c('ul', {
    staticClass: "uk-navbar-nav"
  }, [_c('a', {
    staticClass: "uk-navbar-item uk-logo",
    on: {
      "click": function($event) {
        _vm.$router.push({
          name: 'DashBoard'
        })
      }
    }
  }, [_vm._v("Tacita")])])]), _vm._v(" "), _c('div', {
    staticClass: "uk-navbar-right"
  }, [_c('ul', {
    staticClass: "uk-navbar-nav"
  }, [_c('a', {
    staticClass: "uk-navbar-toggle"
  }, [_c('v-btn', {
    staticClass: "uk-hidden@s uk-navbar-toggle-icon uk-icon white--text",
    attrs: {
      "icon": "",
      "large": "",
      "uk-toggle": "target: #my-sidenav"
    }
  }, [_c('v-icon', [_vm._v("menu")])], 1)], 1)])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ed9ca292", module.exports)
  }
}

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "f-h uk-flex uk-flex-column"
  }, [_c('div', {
    staticClass: "uk-background uk-section-small"
  }, [_c('h2', {
    staticClass: "uk-text-center uk-margin-remove"
  }, [_vm._v(_vm._s(_vm.title))])]), _vm._v(" "), _c('div', {
    staticClass: "uk-background-muted uk-flex--grow uk-flex uk-flex-column"
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f9bd2452", module.exports)
  }
}

/***/ }),
/* 201 */,
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(161);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("1c6bf953", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-1f27ef6c\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ApplicationPage.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-1f27ef6c\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ApplicationPage.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(162);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("0a6ff00c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-33fea837\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Beacon.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-33fea837\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Beacon.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(163);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("e8af09d2", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-38c2a096\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./BeaconPage.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-38c2a096\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./BeaconPage.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(164);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("9cbe839c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-3df74606\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Display.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-3df74606\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Display.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(165);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("9869669a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-42fa2d10\",\"scoped\":false,\"hasInlineConfig\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-42fa2d10\",\"scoped\":false,\"hasInlineConfig\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(166);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("41257945", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-670fae40\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Resource.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-670fae40\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Resource.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(167);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("1fb6a310", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-68e75580\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ResourcesWrapper.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-68e75580\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ResourcesWrapper.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(168);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("4f9cd34c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-81023944\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DisplayPage.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-81023944\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DisplayPage.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(169);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("204af1e5", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-b7c8dcce\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Application.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-b7c8dcce\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Application.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(170);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("a547faf0", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-ba31d1be\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DashBoard.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-ba31d1be\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DashBoard.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(171);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("26bbf8ae", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-ed9ca292\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./NavBar.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-ed9ca292\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./NavBar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(172);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("4319bd27", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-f9bd2452\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Page.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-f9bd2452\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Page.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 214 */,
/* 215 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })
]),[111]);
//# sourceMappingURL=app.7820d8ab5e12d3bb7167.js.map