webpackJsonp([1],Array(23).concat([
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_PhoneApp_Home_vue__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_PhoneApp_Home_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_PhoneApp_Home_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_PhoneApp_DisplaysPage_DisplaysPage_vue__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_PhoneApp_DisplaysPage_DisplaysPage_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_PhoneApp_DisplaysPage_DisplaysPage_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_PhoneApp_PreferencePage_PreferencePage_vue__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_PhoneApp_PreferencePage_PreferencePage_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_PhoneApp_PreferencePage_PreferencePage_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_PhoneApp_UserPreferencePage_UserPreferencePage_vue__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_PhoneApp_UserPreferencePage_UserPreferencePage_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_PhoneApp_UserPreferencePage_UserPreferencePage_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_PhoneApp_PhoneApp_vue__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_PhoneApp_PhoneApp_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_PhoneApp_PhoneApp_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_PhoneApp_UserPreferencePage_ColorPickerPage_ColorPickerPage_vue__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_PhoneApp_UserPreferencePage_ColorPickerPage_ColorPickerPage_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_PhoneApp_UserPreferencePage_ColorPickerPage_ColorPickerPage_vue__);









__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

var router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/app/home',
    name: 'Home',
    component: __WEBPACK_IMPORTED_MODULE_2__components_PhoneApp_Home_vue___default.a
  }, {
    path: '/app/preference/:src',
    name: 'Preference',
    component: __WEBPACK_IMPORTED_MODULE_4__components_PhoneApp_PreferencePage_PreferencePage_vue___default.a
  }, {
    path: '/app/display',
    name: 'Display',
    component: __WEBPACK_IMPORTED_MODULE_3__components_PhoneApp_DisplaysPage_DisplaysPage_vue___default.a
  }, {
    path: '/app/user/preference',
    name: 'UserPreference',
    component: __WEBPACK_IMPORTED_MODULE_5__components_PhoneApp_UserPreferencePage_UserPreferencePage_vue___default.a
  }, {
    path: '/app/user/preference/color',
    name: 'Color',
    component: __WEBPACK_IMPORTED_MODULE_7__components_PhoneApp_UserPreferencePage_ColorPickerPage_ColorPickerPage_vue___default.a
  }]
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);



var _user;



var BASE_URL = '';
var TACITA_URL = '/tacita/api';
var APPLICATION_URL = '/application/api';

/* harmony default export */ __webpack_exports__["a"] = ({
  'user': (_user = {
    fetchUserPreferences: function fetchUserPreferences(userId) {},
    getMe: function getMe(email) {
      return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get('' + BASE_URL + TACITA_URL + '/user/?email=' + email);
    },
    getMyApps: function getMyApps(id) {
      return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get('' + BASE_URL + TACITA_URL + '/user/' + id + '/?context=apps');
    },
    updateUser: function updateUser(user) {
      return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.put('' + BASE_URL + TACITA_URL + '/user/' + user.id, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, user));
    }
  }, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_user, 'fetchUserPreferences', function fetchUserPreferences(userId) {
    return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get('' + BASE_URL + CLASSES_URL + '/preference?userId=' + userId);
  }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_user, 'toogleApplication', function toogleApplication(userId, appId) {
    return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.put('' + BASE_URL + TACITA_URL + '/user/' + userId + '/app/' + appId);
  }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_user, 'create', function create(email) {
    return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('' + BASE_URL + TACITA_URL + '/user', { email: email });
  }), _user),
  'application': {
    fetchApplications: function fetchApplications() {
      return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get('' + BASE_URL + TACITA_URL + '/application');
    }
  },
  'display': {
    fetchDisplay: function fetchDisplay(id, context) {
      return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get('' + BASE_URL + TACITA_URL + '/display/' + id + '?context=' + context);
    }
  },
  'beacon': {
    fetchByBeaconId: function fetchByBeaconId(beaconId) {
      return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get('' + BASE_URL + TACITA_URL + '/beacon/find?beaconId=' + beaconId);
    }
  }
});

/***/ }),
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(263)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(120),
  /* template */
  __webpack_require__(242),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/tacitaWebServer/tacitaWebApp/src/components/PhoneApp/Page.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Page.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6a7c7a01", Component.options)
  } else {
    hotAPI.reload("data-v-6a7c7a01", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_flue_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_flue_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_flue_vue__);



var ws = new WebSocket('wss://' + window.location.origin.split('/')[2].split(':')[0] + ':3443/ws');

ws.onmessage = function (msg) {
  var data = JSON.parse(msg.data);

  __WEBPACK_IMPORTED_MODULE_1_flue_vue__["SuperStore"].dispatcher.dispatch(data);
};

ws.onopen = function (event) {
  console.log("WS connect");
};

ws.sendUserInfo = function (_ref) {
  var user = _ref.user,
      display = _ref.display;

  ws.send(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()({
    "type": "USER_NEARBY",
    "payload": {
      "userId": user.id,
      "displayId": display.id,
      "color": user.color
    }
  }));
};

ws.userWentAway = function (_ref2) {
  var user = _ref2.user,
      display = _ref2.display;

  ws.send(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()({
    "type": "USER_WENT_AWAY",
    "payload": {
      "userId": user.id,
      "displayId": display.id
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (ws);

/***/ }),
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
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(265)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(118),
  /* template */
  __webpack_require__(244),
  /* scopeId */
  "data-v-7194130d",
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/tacitaWebServer/tacitaWebApp/src/components/PhoneApp/NavBar/NavBar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] NavBar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7194130d", Component.options)
  } else {
    hotAPI.reload("data-v-7194130d", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(261)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(119),
  /* template */
  __webpack_require__(240),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/tacitaWebServer/tacitaWebApp/src/components/PhoneApp/Navigation/Navigation.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Navigation.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5861a70d", Component.options)
  } else {
    hotAPI.reload("data-v-5861a70d", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(264)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(127),
  /* template */
  __webpack_require__(243),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/tacitaWebServer/tacitaWebApp/src/components/PhoneApp/VuePullReflesh.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] VuePullReflesh.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6d2ba6b0", Component.options)
  } else {
    hotAPI.reload("data-v-6d2ba6b0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
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
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_flue_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_flue_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_flue_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_axios__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__api_js__ = __webpack_require__(24);










var ApplicationStore = function (_Store) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(ApplicationStore, _Store);

  function ApplicationStore() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, ApplicationStore);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ApplicationStore.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(ApplicationStore)).call(this));

    _this.state = {};
    _this.state.applicationsCache = {};
    _this.state.applications = { data: [], error: {}, isLoading: false };
    _this.state.toogledApplications = function () {
      return _this.state.applications.data.filter(function (app) {
        return app.toogle;
      });
    };
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
      var _this2 = this;

      var data = _ref.data;

      data.forEach(function (app) {
        app.toogle = false;
        _this2.state.applicationsCache[app.id] = app;
      });
      this.state.applications.data = data;
      this.state.applications.isLoading = false;
    }
  }, {
    key: 'onToogleAllApp',
    value: function onToogleAllApp(_ref2) {
      var state = _ref2.state;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(this.state.applications.data), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var app = _step.value;

          if (app.toogle != state) this.sStore.actions.toogleApp(app);
          app.toogle = state;
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
  }, {
    key: 'reduce',
    value: function reduce(action) {
      var _this3 = this;

      this.reduceMap(action, {
        FETCH_APPLICATION_LOADING: this.fetchApplicationsLoading,
        FETCH_APPLICATION_SUCCESS: this.fetchApplicationsSuccess,
        FETCH_APPLICATION_FAILURE: function FETCH_APPLICATION_FAILURE(_ref3) {
          var err = _ref3.err;
          _this3.state.applications.error = err;
        },
        TOOGLE_APP_SUCCESS: function TOOGLE_APP_SUCCESS(_ref4) {
          var app = _ref4.app;
        },

        GET_MY_APPS_SUCCESS: this.onGetMyAppsSuccess,
        TOOGLE_ALL_APP: this.onToogleAllApp

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
        }
      };
    }
  }]);

  return ApplicationStore;
}(__WEBPACK_IMPORTED_MODULE_6_flue_vue__["Store"]);

var applicationStore = new ApplicationStore();
/* harmony default export */ __webpack_exports__["a"] = (applicationStore);

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__router_index_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__socket_js__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_flue_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_flue_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_flue_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__api_js__ = __webpack_require__(24);














var BeaconStore = function (_Store) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(BeaconStore, _Store);

  function BeaconStore() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, BeaconStore);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (BeaconStore.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(BeaconStore)).call(this));

    _this.state.beaconCache = {};
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(BeaconStore, [{
    key: 'onBeaconFound',
    value: function onBeaconFound(_ref) {
      var data = _ref.data;

      this.state.beaconCache[data.beacon_id] = data;
      var displayId = data.display_id;
      this.sStore.actions.foundDisplay({ displayId: displayId });
    }
  }, {
    key: 'onBeaconLost',
    value: function onBeaconLost(_ref2) {
      var data = _ref2.data;

      var displayId = this.state.beaconCache[data.macAddress].display_id;
      this.sStore.actions.lostDisplay({ displayId: displayId });
      delete this.state.beaconCache[data.beacon_id];
    }
  }, {
    key: 'reduce',
    value: function reduce(action) {
      this.reduceMap(action, {
        BEACON_FOUND: this.onBeaconFound,
        BEACON_LOST: this.onBeaconLost
      });
    }
  }, {
    key: 'actions',
    value: function actions(dispatcher, ctx) {
      return {
        beaconFound: function beaconFound(beacon) {
          __WEBPACK_IMPORTED_MODULE_10__api_js__["a" /* default */].beacon.fetchByBeaconId(beacon.macAddress).then(function (data) {
            return dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_9_flue_vue__["Action"]('BEACON_FOUND', data));
          }).catch(function (err) {
            return console.log('No beacon match in our DB');
          });
        },
        beaconLost: function beaconLost(data) {
          dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_9_flue_vue__["Action"]('BEACON_LOST', { data: data }));
        }
      };
    }
  }]);

  return BeaconStore;
}(__WEBPACK_IMPORTED_MODULE_9_flue_vue__["Store"]);

var beaconStore = new BeaconStore();
/* harmony default export */ __webpack_exports__["a"] = (beaconStore);

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_axios__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__router_index_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__socket_js__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_flue_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_flue_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_flue_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__api_js__ = __webpack_require__(24);
















var BluetoothStore = function (_Store) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(BluetoothStore, _Store);

  function BluetoothStore() {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, BluetoothStore);

    var _this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (BluetoothStore.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(BluetoothStore)).call(this));

    _this.state.displayChace = {};
    _this.state.nearbyDisplay = { data: [], isLoading: false };
    _this.state.hasADisplayNearby = function () {
      return _this.state.nearbyDisplay.data.filter(function (display) {
        return display.isNearby;
      }).length > 0;
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(BluetoothStore, [{
    key: 'isDisplayInCache',
    value: function isDisplayInCache(id) {
      return this.state.displayChace[id] != undefined;
    }
  }, {
    key: 'onDisplayFound',
    value: function onDisplayFound(_ref) {
      var data = _ref.data;

      if (this.isDisplayInCache(data.displayId)) if (this.isDisplayInCache(data.displayId)) {
          this.state.displayChace[data.displayId].isNearby = true;
          this.sStore.actions.notifyDisplay(this.state.displayChace[data.displayId]);
          return;
        }

      this.sStore.actions.fetchDisplay(data.displayId);
    }
  }, {
    key: 'onDisplayLost',
    value: function onDisplayLost(_ref2) {
      var data = _ref2.data;

      var display = this.state.displayChace[data.displayId];

      display.isNearby = false;

      var user = this.sStore.state.user;
      __WEBPACK_IMPORTED_MODULE_10__socket_js__["a" /* default */].userWentAway({ user: user, display: display });
    }
  }, {
    key: 'onFetchDisplayLoading',
    value: function onFetchDisplayLoading() {
      this.state.displayChace = {};
      this.state.nearbyDisplay.data = [];
      this.state.nearbyDisplay.isLoading = true;
    }
  }, {
    key: 'onFetchDisplaySuccess',
    value: function onFetchDisplaySuccess(_ref3) {
      var data = _ref3.data;

      this.state.nearbyDisplay.isLoading = false;

      __WEBPACK_IMPORTED_MODULE_8_vue__["default"].set(data, 'isNearby', true);

      this.state.nearbyDisplay.data.push(data);
      this.state.displayChace[data.id] = data;

      this.sStore.actions.notifyDisplay(data);
    }
  }, {
    key: 'onNotifyDisplay',
    value: function onNotifyDisplay(_ref4) {
      var display = _ref4.display;

      if (!display.isNearby) return;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default()(this.sStore.state.applications.data), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var app = _step.value;

          if (display.apps[0].id == app.id && app.toogle) {

            console.log('sending info to display ' + display.id);
            var user = this.sStore.state.user;

            __WEBPACK_IMPORTED_MODULE_10__socket_js__["a" /* default */].sendUserInfo({ user: user, display: display });
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
  }, {
    key: 'onNotifyDisplays',
    value: function onNotifyDisplays() {
      var displays = this.state.nearbyDisplay.data;

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default()(displays), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var display = _step2.value;

          this.onNotifyDisplay({ display: display });
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: 'onChangeDisplayApp',
    value: function onChangeDisplayApp(data) {
      var display = this.state.displayChace[data.displayId];
      if (!display) return;

      display.apps = [this.sStore.state.applicationsCache[data.appId]];
      this.sStore.actions.notifyDisplay(display);
    }
  }, {
    key: 'reduce',
    value: function reduce(action) {
      this.reduceMap(action, {
        DISPLAY_FOUND: this.onDisplayFound,
        DISPLAY_LOST: this.onDisplayLost,
        FETCH_DISPLAYS_LOADING: this.onFetchDisplayLoading,
        FETCH_DISPLAY_SUCCESS: this.onFetchDisplaySuccess,
        DISPLAY_CHANGE_APP: this.onChangeDisplayApp,
        NOTIFY_DISPLAYS: this.onNotifyDisplays,
        NOTIFY_DISPLAY: this.onNotifyDisplay,
        TOOGLE_APP_SUCCESS: this.onNotifyDisplays
      });
    }
  }, {
    key: 'actions',
    value: function actions(dispatcher, ctx) {
      return {
        foundDisplay: function foundDisplay(data) {
          dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_11_flue_vue__["Action"]("DISPLAY_FOUND", { data: data }));
        },
        lostDisplay: function lostDisplay(data) {
          dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_11_flue_vue__["Action"]("DISPLAY_LOST", { data: data }));
        },
        fetchDisplays: function fetchDisplays(ids) {
          var _this2 = this;

          dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_11_flue_vue__["Action"]("FETCH_DISPLAYS_LOADING"));
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.all(ids.map(function (id) {
            return _this2.fetchDisplay(id);
          }));
        },
        fetchDisplay: function fetchDisplay(id) {
          dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_11_flue_vue__["Action"]("FETCH_DISPLAY_LOADING"));
          return __WEBPACK_IMPORTED_MODULE_12__api_js__["a" /* default */].display.fetchDisplay(id, 'all').then(function (_ref5) {
            var data = _ref5.data;
            return dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_11_flue_vue__["Action"]("FETCH_DISPLAY_SUCCESS", { data: data }));
          });
        },
        notifyDisplays: function notifyDisplays() {
          dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_11_flue_vue__["Action"]("NOTIFY_DISPLAYS"));
        },
        notifyDisplay: function notifyDisplay(display) {
          dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_11_flue_vue__["Action"]("NOTIFY_DISPLAY", { display: display }));
        }
      };
    }
  }]);

  return BluetoothStore;
}(__WEBPACK_IMPORTED_MODULE_11_flue_vue__["Store"]);

var bluetoothStore = new BluetoothStore();
/* harmony default export */ __webpack_exports__["a"] = (bluetoothStore);

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__router_index_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_flue_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_flue_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_flue_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__api_js__ = __webpack_require__(24);













var UserStore = function (_Store) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(UserStore, _Store);

  function UserStore() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, UserStore);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (UserStore.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(UserStore)).call(this));

    _this.state.currentPreference = {};
    _this.state.user = {};
    _this.state.userError = { error: false, msg: "" };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(UserStore, [{
    key: 'onToogleAppSuccess',
    value: function onToogleAppSuccess(_ref) {
      var app = _ref.app;

      this.state.userError.error = false;

      if (app.toogle) {
        this.state.user.apps.push(app);
      } else {
        var userApps = this.state.user.apps;
        for (var i = 0; i < userApps.length; i++) {
          if (userApps[i].id == app.id) userApps.splice(i, 1);
        }
      }
    }
  }, {
    key: 'onToogleAppFailure',
    value: function onToogleAppFailure(_ref2) {
      var error = _ref2.error;

      this.state.userError.error = true;
      this.state.userError.msg = "Something went wrong.";
    }
  }, {
    key: 'onGetMyAppsSuccess',
    value: function onGetMyAppsSuccess(_ref3) {
      var data = _ref3.data;

      var apps = data.apps;

      this.sStore.state.applications.data.forEach(function (app) {
        return app.toogle = false;
      });

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(apps), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var userApp = _step.value;
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(this.state.applications.data), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var app = _step2.value;

              if (userApp.id == app.id) app.toogle = true;
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
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

      this.state.user.apps = data.apps;
    }
  }, {
    key: 'reduce',
    value: function reduce(action) {
      var _this2 = this;

      this.reduceMap(action, {
        CREATE_USER_SUCCESS: function CREATE_USER_SUCCESS(_ref4) {
          var data = _ref4.data;
          _this2.sStore.actions.getMe(data.email);
        },
        CREATE_USER_FAILURE: function CREATE_USER_FAILURE(_ref5) {
          var email = _ref5.email;
          _this2.sStore.actions.getMe(email);
        },

        GET_MY_APPS_SUCCESS: this.onGetMyAppsSuccess,
        GET_ME_SUCCESS: function GET_ME_SUCCESS(_ref6) {
          var data = _ref6.data;
          return _this2.state.user = data;
        },
        TOOGLE_APP_SUCCESS: this.onToogleAppSuccess,
        TOOGLE_APP_FAILURE: this.onToogleAppFailure
      });
    }
  }, {
    key: 'actions',
    value: function actions(dispatcher, ctx) {
      return {
        getMe: function getMe(email) {
          return __WEBPACK_IMPORTED_MODULE_10__api_js__["a" /* default */].user.getMe(email).then(function (_ref7) {
            var data = _ref7.data;

            dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_9_flue_vue__["Action"]("GET_ME_SUCCESS", { data: data }));
          }).catch(function (err) {});
        },
        getMyApps: function getMyApps() {
          return __WEBPACK_IMPORTED_MODULE_10__api_js__["a" /* default */].user.getMyApps(ctx.state.user.id).then(function (_ref8) {
            var data = _ref8.data;

            dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_9_flue_vue__["Action"]("GET_MY_APPS_SUCCESS", { data: data }));
          }).catch(function (err) {});
        },
        updateUser: function updateUser(user) {
          __WEBPACK_IMPORTED_MODULE_10__api_js__["a" /* default */].user.updateUser(user).then(function () {
            new __WEBPACK_IMPORTED_MODULE_9_flue_vue__["Action"]("UPDATE_USER_SUCCESS");
          }).catch(function (err) {});
        },
        toogleApp: function toogleApp(app) {
          __WEBPACK_IMPORTED_MODULE_10__api_js__["a" /* default */].user.toogleApplication(ctx.state.user.id, app.id).then(function () {
            dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_9_flue_vue__["Action"]("TOOGLE_APP_SUCCESS", { app: app }));
          }).catch(function (_ref9) {
            var response = _ref9.response;
            return dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_9_flue_vue__["Action"]("TOOGLE_APP_FAILURE", { error: response.data }));
          });
        },
        toogleAll: function toogleAll(state) {
          dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_9_flue_vue__["Action"]("TOOGLE_ALL_APP", { state: state }));
        },
        createOrFetchUser: function createOrFetchUser(email) {
          return __WEBPACK_IMPORTED_MODULE_10__api_js__["a" /* default */].user.create(email).then(function (data) {
            return dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_9_flue_vue__["Action"]("CREATE_USER_SUCCESS", data));
          }).catch(function (err) {
            return dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_9_flue_vue__["Action"]("CREATE_USER_FAILURE", { email: email }));
          });
        }
      };
    }
  }]);

  return UserStore;
}(__WEBPACK_IMPORTED_MODULE_9_flue_vue__["Store"]);

var userStore = new UserStore();
/* harmony default export */ __webpack_exports__["a"] = (userStore);

/***/ }),
/* 88 */,
/* 89 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(256)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(108),
  /* template */
  __webpack_require__(235),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/tacitaWebServer/tacitaWebApp/src/App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] App.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1c2e6d3c", Component.options)
  } else {
    hotAPI.reload("data-v-1c2e6d3c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  watch: {
    '$route.path': function $routePath(to, from) {}
  },
  name: 'app',
  data: function data() {
    return {
      transitionName: 'fade-router'
    };
  }
});

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Application",
  props: ['application'],
  data: function data() {
    return {
      showDescription: false
    };
  },
  methods: {
    getUrl: function getUrl(application) {
      return window.location.origin + '/' + application.url + '/#/app/home/';
    }
  }
});

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ApplicationDummy",
  data: function data() {
    return {};
  }
});

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Application_vue__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Application_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Application_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ApplicationDummy_vue__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ApplicationDummy_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ApplicationDummy_vue__);





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ApplicationWrapper",
  components: {
    Application: __WEBPACK_IMPORTED_MODULE_0__Application_vue___default.a,
    ApplicationDummy: __WEBPACK_IMPORTED_MODULE_1__ApplicationDummy_vue___default.a
  },
  props: ['applications'],
  data: function data() {
    return {};
  }
});

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Application_ApplicationWrapper_ApplicationWrapper_vue__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Application_ApplicationWrapper_ApplicationWrapper_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Application_ApplicationWrapper_ApplicationWrapper_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Page_vue__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Page_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Page_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__VuePullReflesh_vue__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__VuePullReflesh_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__VuePullReflesh_vue__);







var VueTouch = __webpack_require__(272);
__WEBPACK_IMPORTED_MODULE_1_vue__["default"].use(VueTouch, {
  name: 'v-touch'
});

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Page: __WEBPACK_IMPORTED_MODULE_2__Page_vue___default.a,
    'vue-pull-refresh': __WEBPACK_IMPORTED_MODULE_3__VuePullReflesh_vue___default.a,
    ApplicationWrapper: __WEBPACK_IMPORTED_MODULE_0__Application_ApplicationWrapper_ApplicationWrapper_vue___default.a
  },
  name: "ApplicationPage",
  data: function data() {
    return {
      toogleAll: true

    };
  },
  methods: {
    onRefresh: function onRefresh() {
      console.log('onRefresh');


      return this.$store.actions.fetchApplications();
    }
  }
});

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Display",
  props: ['display'],
  data: function data() {
    return {};
  }
});

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "",
  data: function data() {
    return {};
  }
});

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Display_Display_vue__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Display_Display_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Display_Display_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Display_DisplayDummy_vue__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Display_DisplayDummy_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Display_DisplayDummy_vue__);





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "DisplayWrapper",
  components: {
    Display: __WEBPACK_IMPORTED_MODULE_0__Display_Display_vue___default.a,
    DisplayDummy: __WEBPACK_IMPORTED_MODULE_1__Display_DisplayDummy_vue___default.a
  },
  props: ['displays']
});

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DisplayWrapper_DisplayWrapper_vue__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DisplayWrapper_DisplayWrapper_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__DisplayWrapper_DisplayWrapper_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VuePullReflesh_vue__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VuePullReflesh_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__VuePullReflesh_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Page_vue__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Page_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Page_vue__);






/* harmony default export */ __webpack_exports__["default"] = ({
  name: "",
  components: {
    DisplayWrapper: __WEBPACK_IMPORTED_MODULE_0__DisplayWrapper_DisplayWrapper_vue___default.a,
    Page: __WEBPACK_IMPORTED_MODULE_2__Page_vue___default.a,
    'vue-pull-refresh': __WEBPACK_IMPORTED_MODULE_1__VuePullReflesh_vue___default.a
  },
  data: function data() {
    return {};
  },
  methods: {
    onRefresh: function onRefresh() {
      var displays = this.$store.state.nearbyDisplay.data;

      return this.$store.actions.fetchDisplays(displays.map(function (disp) {
        return disp.id;
      }));
    }
  }
});

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Navigation_Navigation_vue__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Navigation_Navigation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Navigation_Navigation_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ScreenNearby_ScreenNearby_vue__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ScreenNearby_ScreenNearby_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__ScreenNearby_ScreenNearby_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ApplicationPage_ApplicationPage_vue__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ApplicationPage_ApplicationPage_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ApplicationPage_ApplicationPage_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__VuePullReflesh_vue__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__VuePullReflesh_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__VuePullReflesh_vue__);








/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Navigation: __WEBPACK_IMPORTED_MODULE_1__Navigation_Navigation_vue___default.a,
    ScreenNearby: __WEBPACK_IMPORTED_MODULE_2__ScreenNearby_ScreenNearby_vue___default.a,
    ApplicationPage: __WEBPACK_IMPORTED_MODULE_3__ApplicationPage_ApplicationPage_vue___default.a,
    'vue-pull-refresh': __WEBPACK_IMPORTED_MODULE_4__VuePullReflesh_vue___default.a
  },
  name: 'Home',
  data: function data() {
    return {
      bluetooth: {
        macAddress: null,
        connected: false
      },
      user: {
        email: null
      }
    };
  },

  watch: {
    'bluetooth': {
      handler: function handler(from, to) {
        console.log(JSON.parse(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(to)));
        console.log('*************** BEACON *************');
        if (bluetooth.connected) this.$store.actions.beaconFound(bluetooth);
        if (!bluetooth.connected) this.$store.actions.beaconLost(bluetooth);
      },
      deep: true
    },
    'user': {
      handler: function handler() {
        var _this = this;

        console.log('*************** USER *************');
        this.$store.actions.createOrFetchUser(user.email).then(function () {
          return _this.$store.actions.fetchApplications();
        }).then(function () {
          return _this.$store.actions.getMyApps();
        });
      },
      deep: true
    }
  },
  mounted: function mounted() {
    window.bluetooth = this.bluetooth;
    window.user = this.user;
  }
});

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "navbar",
  props: ['home'],
  data: function data() {
    return {};
  }
});

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Navigation",
  data: function data() {
    return {};
  }
});

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__NavBar_NavBar_vue__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__NavBar_NavBar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__NavBar_NavBar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Navigation_Navigation_vue__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Navigation_Navigation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Navigation_Navigation_vue__);





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    NavBar: __WEBPACK_IMPORTED_MODULE_0__NavBar_NavBar_vue___default.a,
    Navigation: __WEBPACK_IMPORTED_MODULE_1__Navigation_Navigation_vue___default.a
  },
  name: "",
  data: function data() {
    return {};
  }
});

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__NavBar_NavBar_vue__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__NavBar_NavBar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__NavBar_NavBar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Navigation_Navigation_vue__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Navigation_Navigation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Navigation_Navigation_vue__);





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    NavBar: __WEBPACK_IMPORTED_MODULE_0__NavBar_NavBar_vue___default.a,
    Navigation: __WEBPACK_IMPORTED_MODULE_1__Navigation_Navigation_vue___default.a
  },
  name: 'PhoneApp',
  data: function data() {
    return {
      transitionName: 'fade-router'
    };
  }
});

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__NavBar_NavBar_vue__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__NavBar_NavBar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__NavBar_NavBar_vue__);




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "",
  components: {
    NavBar: __WEBPACK_IMPORTED_MODULE_0__NavBar_NavBar_vue___default.a
  },
  watch: {
    '$route.params': function $routeParams() {
      this.src = this.$route.params.src;
    }
  },
  data: function data() {
    return {
      src: this.$route.params.src,
      iframeContent: null
    };
  }
});

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ScreenNearby",
  data: function data() {
    return {};
  }
});

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Page_vue__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Page_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Page_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_circle_choice__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_circle_choice___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_circle_choice__);





var colors = ['#FF5722', '#F44336', '#880E4F', '#9C27B0', '#1c2899', '#2196F3', '#00BCD4', '#4CAF50', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800'];

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "",
  components: {
    choiceColor: __WEBPACK_IMPORTED_MODULE_1_vue_circle_choice__["choiceColor"],
    Page: __WEBPACK_IMPORTED_MODULE_0__Page_vue___default.a
  },
  data: function data() {
    return {
      colors: colors,
      index: 0,
      color: colors[0]
    };
  },

  methods: {
    done: function done() {
      this.$store.actions.updateUser(this.$store.state.user);
      this.$router.go(-1);
    },
    updateColor: function updateColor(_ref) {
      var index = _ref.index,
          color = _ref.color;

      this.index = index;
      this.color = color;
      this.$store.state.user.color = color;
    }
  }

});

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "UserPreferenceDummy"
});

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Page_vue__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Page_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Page_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PreferenceDummy_vue__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PreferenceDummy_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__PreferenceDummy_vue__);






/* harmony default export */ __webpack_exports__["default"] = ({
  name: "",
  components: {
    PreferenceDummy: __WEBPACK_IMPORTED_MODULE_2__PreferenceDummy_vue___default.a,
    Page: __WEBPACK_IMPORTED_MODULE_1__Page_vue___default.a
  }
});

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

var STATUS_ERROR = -1;
var STATUS_START = 0;
var STATUS_READY = 1;
var STATUS_REFRESH = 2;

var LABELS = ['数据异常', '下拉刷新数据', '松开刷新数据', '数据刷新中...'];
var PULL_DOWN_HEIGHT = 80;

var resetPullDown = function resetPullDown(pullDown) {
  pullDown.height = 0;
  pullDown.status = STATUS_START;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    onRefresh: {
      type: Function
    },
    config: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    loading: {
      type: Boolean
    }
  },
  data: function data() {
    return {
      pullDown: {
        status: 0,
        height: 0,
        msg: ''
      }
    };
  },

  computed: {
    label: function label() {
      if (this.pullDown.status === STATUS_ERROR) {
        return this.pullDown.msg;
      }
      return this.customLabels[this.pullDown.status + 1];
    },
    customLabels: function customLabels() {
      var errorLabel = this.config.errorLabel || LABELS[0];
      var startLabel = this.config.startLabel || LABELS[1];
      var readyLaebl = this.config.readyLabel || LABELS[2];
      var loadingLabel = this.config.loadingLabel || LABELS[3];
      return [errorLabel, startLabel, readyLaebl, loadingLabel];
    },
    iconClass: function iconClass() {
      if (this.pullDown.status === STATUS_REFRESH) {
        return 'pull-down-refresh';
      } else if (this.pullDown.status === STATUS_ERROR) {
        return 'pull-down-error';
      }
      return '';
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      var el = _this.$el;
      var pullDownHeader = el.querySelector('.pull-down-header');
      var icon = pullDownHeader.querySelector('.pull-down-content--icon');

      var touchPosition = {
        start: 0,
        distance: 0
      };

      el.addEventListener('touchstart', function (e) {
        touchPosition.start = e.touches.item(0).pageY;
      });

      el.addEventListener('touchmove', function (e) {
        var distance = e.touches.item(0).pageY - touchPosition.start;

        distance = distance > 180 ? 180 : distance;

        touchPosition.distance = distance;
        _this.pullDown.height = distance;

        if (distance > PULL_DOWN_HEIGHT) {
          _this.pullDown.status = STATUS_READY;
          icon.style.transform = 'rotate(180deg)';
        } else {
          _this.pullDown.status = STATUS_START;
          icon.style.transform = 'rotate(' + distance / PULL_DOWN_HEIGHT * 180 + 'deg)';
        }
      });

      el.addEventListener('touchend', function (e) {
        pullDownHeader.style.transition = 'height .2s ease';

        icon.style.transform = '';

        if (touchPosition.distance >= PULL_DOWN_HEIGHT) {
          _this.pullDown.height = PULL_DOWN_HEIGHT;
          _this.pullDown.status = STATUS_REFRESH;

          if (_this.onRefresh && typeof _this.onRefresh === 'function') {
            var res = _this.onRefresh();

            if (res && res.then && typeof res.then === 'function') {
              res.then(function (result) {
                resetPullDown(_this.pullDown);
              }, function (error) {
                _this.pullDown.msg = error || _this.customLabels[0];
                _this.pullDown.status = STATUS_ERROR;
                setTimeout(function () {
                  resetPullDown(_this.pullDown);
                }, 1000);
              });
            } else {
              resetPullDown(_this.pullDown);
            }
          } else {
            resetPullDown(_this.pullDown);
            console.warn('please use :on-refresh to pass onRefresh callback');
          }
        } else {
          resetPullDown(_this.pullDown);
        }

        touchPosition.distance = 0;
        touchPosition.start = 0;
      });

      pullDownHeader.addEventListener('transitionend', function () {
        pullDownHeader.style.transition = '';
      });
      pullDownHeader.addEventListener('webkitTransitionEnd', function () {
        pullDownHeader.style.transition = '';
      });
    });
  }
});

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuetify__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuetify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vuetify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_flue_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_flue_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_flue_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_uikit__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_uikit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_uikit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stores_UserStore_js__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stores_ApplicationStore_js__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__stores_DisplayStore_js__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__stores_BeaconStore_js__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__socket_js__ = __webpack_require__(36);






__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_3_vuetify___default.a);
window.jQuery = window.$ = __webpack_require__(58);





window.UIkit = __WEBPACK_IMPORTED_MODULE_5_uikit___default.a;


__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_4_flue_vue__["flueVue"]);








__WEBPACK_IMPORTED_MODULE_4_flue_vue__["SuperStore"].addStores([__WEBPACK_IMPORTED_MODULE_6__stores_UserStore_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_7__stores_ApplicationStore_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_8__stores_DisplayStore_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_9__stores_BeaconStore_js__["a" /* default */]]);

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;

new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ }),
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
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n\n/*!\n * animate.css -http://daneden.me/animate\n * Version - 3.5.1\n * Licensed under the MIT license - http://opensource.org/licenses/MIT\n *\n * Copyright (c) 2016 Daniel Eden\n */\n\n.animated {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n.animated.infinite {\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n}\n\n.animated.hinge {\n  -webkit-animation-duration: 2s;\n  animation-duration: 2s;\n}\n\n.animated.flipOutX,\n.animated.flipOutY,\n.animated.bounceIn,\n.animated.bounceOut {\n  -webkit-animation-duration: .75s;\n  animation-duration: .75s;\n}\n\n@-webkit-keyframes bounce {\n  from, 20%, 53%, 80%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    -webkit-transform: translate3d(0,0,0);\n    transform: translate3d(0,0,0);\n  }\n\n  40%, 43% {\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    -webkit-transform: translate3d(0, -30px, 0);\n    transform: translate3d(0, -30px, 0);\n  }\n\n  70% {\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    -webkit-transform: translate3d(0, -15px, 0);\n    transform: translate3d(0, -15px, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0,-4px,0);\n    transform: translate3d(0,-4px,0);\n  }\n}\n\n@keyframes bounce {\n  from, 20%, 53%, 80%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    -webkit-transform: translate3d(0,0,0);\n    transform: translate3d(0,0,0);\n  }\n\n  40%, 43% {\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    -webkit-transform: translate3d(0, -30px, 0);\n    transform: translate3d(0, -30px, 0);\n  }\n\n  70% {\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    -webkit-transform: translate3d(0, -15px, 0);\n    transform: translate3d(0, -15px, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0,-4px,0);\n    transform: translate3d(0,-4px,0);\n  }\n}\n\n.bounce {\n  -webkit-animation-name: bounce;\n  animation-name: bounce;\n  -webkit-transform-origin: center bottom;\n  transform-origin: center bottom;\n}\n\n@-webkit-keyframes flash {\n  from, 50%, to {\n    opacity: 1;\n  }\n\n  25%, 75% {\n    opacity: 0;\n  }\n}\n\n@keyframes flash {\n  from, 50%, to {\n    opacity: 1;\n  }\n\n  25%, 75% {\n    opacity: 0;\n  }\n}\n\n.flash {\n  -webkit-animation-name: flash;\n  animation-name: flash;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@-webkit-keyframes pulse {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  50% {\n    -webkit-transform: scale3d(1.05, 1.05, 1.05);\n    transform: scale3d(1.05, 1.05, 1.05);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes pulse {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  50% {\n    -webkit-transform: scale3d(1.05, 1.05, 1.05);\n    transform: scale3d(1.05, 1.05, 1.05);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.pulse {\n  -webkit-animation-name: pulse;\n  animation-name: pulse;\n}\n\n@-webkit-keyframes rubberBand {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  30% {\n    -webkit-transform: scale3d(1.25, 0.75, 1);\n    transform: scale3d(1.25, 0.75, 1);\n  }\n\n  40% {\n    -webkit-transform: scale3d(0.75, 1.25, 1);\n    transform: scale3d(0.75, 1.25, 1);\n  }\n\n  50% {\n    -webkit-transform: scale3d(1.15, 0.85, 1);\n    transform: scale3d(1.15, 0.85, 1);\n  }\n\n  65% {\n    -webkit-transform: scale3d(.95, 1.05, 1);\n    transform: scale3d(.95, 1.05, 1);\n  }\n\n  75% {\n    -webkit-transform: scale3d(1.05, .95, 1);\n    transform: scale3d(1.05, .95, 1);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes rubberBand {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  30% {\n    -webkit-transform: scale3d(1.25, 0.75, 1);\n    transform: scale3d(1.25, 0.75, 1);\n  }\n\n  40% {\n    -webkit-transform: scale3d(0.75, 1.25, 1);\n    transform: scale3d(0.75, 1.25, 1);\n  }\n\n  50% {\n    -webkit-transform: scale3d(1.15, 0.85, 1);\n    transform: scale3d(1.15, 0.85, 1);\n  }\n\n  65% {\n    -webkit-transform: scale3d(.95, 1.05, 1);\n    transform: scale3d(.95, 1.05, 1);\n  }\n\n  75% {\n    -webkit-transform: scale3d(1.05, .95, 1);\n    transform: scale3d(1.05, .95, 1);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.rubberBand {\n  -webkit-animation-name: rubberBand;\n  animation-name: rubberBand;\n}\n\n@-webkit-keyframes shake {\n  from, to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  10%, 30%, 50%, 70%, 90% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  20%, 40%, 60%, 80% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0);\n  }\n}\n\n@keyframes shake {\n  from, to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  10%, 30%, 50%, 70%, 90% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  20%, 40%, 60%, 80% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0);\n  }\n}\n\n.shake {\n  -webkit-animation-name: shake;\n  animation-name: shake;\n}\n\n@-webkit-keyframes headShake {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  6.5% {\n    -webkit-transform: translateX(-6px) rotateY(-9deg);\n    transform: translateX(-6px) rotateY(-9deg);\n  }\n\n  18.5% {\n    -webkit-transform: translateX(5px) rotateY(7deg);\n    transform: translateX(5px) rotateY(7deg);\n  }\n\n  31.5% {\n    -webkit-transform: translateX(-3px) rotateY(-5deg);\n    transform: translateX(-3px) rotateY(-5deg);\n  }\n\n  43.5% {\n    -webkit-transform: translateX(2px) rotateY(3deg);\n    transform: translateX(2px) rotateY(3deg);\n  }\n\n  50% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n@keyframes headShake {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  6.5% {\n    -webkit-transform: translateX(-6px) rotateY(-9deg);\n    transform: translateX(-6px) rotateY(-9deg);\n  }\n\n  18.5% {\n    -webkit-transform: translateX(5px) rotateY(7deg);\n    transform: translateX(5px) rotateY(7deg);\n  }\n\n  31.5% {\n    -webkit-transform: translateX(-3px) rotateY(-5deg);\n    transform: translateX(-3px) rotateY(-5deg);\n  }\n\n  43.5% {\n    -webkit-transform: translateX(2px) rotateY(3deg);\n    transform: translateX(2px) rotateY(3deg);\n  }\n\n  50% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n.headShake {\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-name: headShake;\n  animation-name: headShake;\n}\n\n@-webkit-keyframes swing {\n  20% {\n    -webkit-transform: rotate3d(0, 0, 1, 15deg);\n    transform: rotate3d(0, 0, 1, 15deg);\n  }\n\n  40% {\n    -webkit-transform: rotate3d(0, 0, 1, -10deg);\n    transform: rotate3d(0, 0, 1, -10deg);\n  }\n\n  60% {\n    -webkit-transform: rotate3d(0, 0, 1, 5deg);\n    transform: rotate3d(0, 0, 1, 5deg);\n  }\n\n  80% {\n    -webkit-transform: rotate3d(0, 0, 1, -5deg);\n    transform: rotate3d(0, 0, 1, -5deg);\n  }\n\n  to {\n    -webkit-transform: rotate3d(0, 0, 1, 0deg);\n    transform: rotate3d(0, 0, 1, 0deg);\n  }\n}\n\n@keyframes swing {\n  20% {\n    -webkit-transform: rotate3d(0, 0, 1, 15deg);\n    transform: rotate3d(0, 0, 1, 15deg);\n  }\n\n  40% {\n    -webkit-transform: rotate3d(0, 0, 1, -10deg);\n    transform: rotate3d(0, 0, 1, -10deg);\n  }\n\n  60% {\n    -webkit-transform: rotate3d(0, 0, 1, 5deg);\n    transform: rotate3d(0, 0, 1, 5deg);\n  }\n\n  80% {\n    -webkit-transform: rotate3d(0, 0, 1, -5deg);\n    transform: rotate3d(0, 0, 1, -5deg);\n  }\n\n  to {\n    -webkit-transform: rotate3d(0, 0, 1, 0deg);\n    transform: rotate3d(0, 0, 1, 0deg);\n  }\n}\n\n.swing {\n  -webkit-transform-origin: top center;\n  transform-origin: top center;\n  -webkit-animation-name: swing;\n  animation-name: swing;\n}\n\n@-webkit-keyframes tada {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  10%, 20% {\n    -webkit-transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);\n  }\n\n  30%, 50%, 70%, 90% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n  }\n\n  40%, 60%, 80% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes tada {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  10%, 20% {\n    -webkit-transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);\n  }\n\n  30%, 50%, 70%, 90% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n  }\n\n  40%, 60%, 80% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.tada {\n  -webkit-animation-name: tada;\n  animation-name: tada;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@-webkit-keyframes wobble {\n  from {\n    -webkit-transform: none;\n    transform: none;\n  }\n\n  15% {\n    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n  }\n\n  30% {\n    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n  }\n\n  45% {\n    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n  }\n\n  60% {\n    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n  }\n\n  75% {\n    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes wobble {\n  from {\n    -webkit-transform: none;\n    transform: none;\n  }\n\n  15% {\n    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n  }\n\n  30% {\n    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n  }\n\n  45% {\n    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n  }\n\n  60% {\n    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n  }\n\n  75% {\n    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.wobble {\n  -webkit-animation-name: wobble;\n  animation-name: wobble;\n}\n\n@-webkit-keyframes jello {\n  from, 11.1%, to {\n    -webkit-transform: none;\n    transform: none;\n  }\n\n  22.2% {\n    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);\n    transform: skewX(-12.5deg) skewY(-12.5deg);\n  }\n\n  33.3% {\n    -webkit-transform: skewX(6.25deg) skewY(6.25deg);\n    transform: skewX(6.25deg) skewY(6.25deg);\n  }\n\n  44.4% {\n    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);\n    transform: skewX(-3.125deg) skewY(-3.125deg);\n  }\n\n  55.5% {\n    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);\n    transform: skewX(1.5625deg) skewY(1.5625deg);\n  }\n\n  66.6% {\n    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);\n    transform: skewX(-0.78125deg) skewY(-0.78125deg);\n  }\n\n  77.7% {\n    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);\n    transform: skewX(0.390625deg) skewY(0.390625deg);\n  }\n\n  88.8% {\n    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n  }\n}\n\n@keyframes jello {\n  from, 11.1%, to {\n    -webkit-transform: none;\n    transform: none;\n  }\n\n  22.2% {\n    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);\n    transform: skewX(-12.5deg) skewY(-12.5deg);\n  }\n\n  33.3% {\n    -webkit-transform: skewX(6.25deg) skewY(6.25deg);\n    transform: skewX(6.25deg) skewY(6.25deg);\n  }\n\n  44.4% {\n    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);\n    transform: skewX(-3.125deg) skewY(-3.125deg);\n  }\n\n  55.5% {\n    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);\n    transform: skewX(1.5625deg) skewY(1.5625deg);\n  }\n\n  66.6% {\n    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);\n    transform: skewX(-0.78125deg) skewY(-0.78125deg);\n  }\n\n  77.7% {\n    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);\n    transform: skewX(0.390625deg) skewY(0.390625deg);\n  }\n\n  88.8% {\n    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n  }\n}\n\n.jello {\n  -webkit-animation-name: jello;\n  animation-name: jello;\n  -webkit-transform-origin: center;\n  transform-origin: center;\n}\n\n@-webkit-keyframes bounceIn {\n  from, 20%, 40%, 60%, 80%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n\n  20% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  40% {\n    -webkit-transform: scale3d(.9, .9, .9);\n    transform: scale3d(.9, .9, .9);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.03, 1.03, 1.03);\n    transform: scale3d(1.03, 1.03, 1.03);\n  }\n\n  80% {\n    -webkit-transform: scale3d(.97, .97, .97);\n    transform: scale3d(.97, .97, .97);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes bounceIn {\n  from, 20%, 40%, 60%, 80%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n\n  20% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  40% {\n    -webkit-transform: scale3d(.9, .9, .9);\n    transform: scale3d(.9, .9, .9);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.03, 1.03, 1.03);\n    transform: scale3d(1.03, 1.03, 1.03);\n  }\n\n  80% {\n    -webkit-transform: scale3d(.97, .97, .97);\n    transform: scale3d(.97, .97, .97);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.bounceIn {\n  -webkit-animation-name: bounceIn;\n  animation-name: bounceIn;\n}\n\n@-webkit-keyframes bounceInDown {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -3000px, 0);\n    transform: translate3d(0, -3000px, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 25px, 0);\n    transform: translate3d(0, 25px, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0, 5px, 0);\n    transform: translate3d(0, 5px, 0);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes bounceInDown {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -3000px, 0);\n    transform: translate3d(0, -3000px, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 25px, 0);\n    transform: translate3d(0, 25px, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0, 5px, 0);\n    transform: translate3d(0, 5px, 0);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.bounceInDown {\n  -webkit-animation-name: bounceInDown;\n  animation-name: bounceInDown;\n}\n\n@-webkit-keyframes bounceInLeft {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-3000px, 0, 0);\n    transform: translate3d(-3000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(25px, 0, 0);\n    transform: translate3d(25px, 0, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(5px, 0, 0);\n    transform: translate3d(5px, 0, 0);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes bounceInLeft {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-3000px, 0, 0);\n    transform: translate3d(-3000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(25px, 0, 0);\n    transform: translate3d(25px, 0, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(5px, 0, 0);\n    transform: translate3d(5px, 0, 0);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.bounceInLeft {\n  -webkit-animation-name: bounceInLeft;\n  animation-name: bounceInLeft;\n}\n\n@-webkit-keyframes bounceInRight {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(3000px, 0, 0);\n    transform: translate3d(3000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(-25px, 0, 0);\n    transform: translate3d(-25px, 0, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(-5px, 0, 0);\n    transform: translate3d(-5px, 0, 0);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes bounceInRight {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(3000px, 0, 0);\n    transform: translate3d(3000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(-25px, 0, 0);\n    transform: translate3d(-25px, 0, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(-5px, 0, 0);\n    transform: translate3d(-5px, 0, 0);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.bounceInRight {\n  -webkit-animation-name: bounceInRight;\n  animation-name: bounceInRight;\n}\n\n@-webkit-keyframes bounceInUp {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 3000px, 0);\n    transform: translate3d(0, 3000px, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0, -5px, 0);\n    transform: translate3d(0, -5px, 0);\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes bounceInUp {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 3000px, 0);\n    transform: translate3d(0, 3000px, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0, -5px, 0);\n    transform: translate3d(0, -5px, 0);\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.bounceInUp {\n  -webkit-animation-name: bounceInUp;\n  animation-name: bounceInUp;\n}\n\n@-webkit-keyframes bounceOut {\n  20% {\n    -webkit-transform: scale3d(.9, .9, .9);\n    transform: scale3d(.9, .9, .9);\n  }\n\n  50%, 55% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n}\n\n@keyframes bounceOut {\n  20% {\n    -webkit-transform: scale3d(.9, .9, .9);\n    transform: scale3d(.9, .9, .9);\n  }\n\n  50%, 55% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n}\n\n.bounceOut {\n  -webkit-animation-name: bounceOut;\n  animation-name: bounceOut;\n}\n\n@-webkit-keyframes bounceOutDown {\n  20% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0);\n  }\n\n  40%, 45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n\n@keyframes bounceOutDown {\n  20% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0);\n  }\n\n  40%, 45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n\n.bounceOutDown {\n  -webkit-animation-name: bounceOutDown;\n  animation-name: bounceOutDown;\n}\n\n@-webkit-keyframes bounceOutLeft {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(20px, 0, 0);\n    transform: translate3d(20px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n\n@keyframes bounceOutLeft {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(20px, 0, 0);\n    transform: translate3d(20px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n\n.bounceOutLeft {\n  -webkit-animation-name: bounceOutLeft;\n  animation-name: bounceOutLeft;\n}\n\n@-webkit-keyframes bounceOutRight {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(-20px, 0, 0);\n    transform: translate3d(-20px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n\n@keyframes bounceOutRight {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(-20px, 0, 0);\n    transform: translate3d(-20px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n\n.bounceOutRight {\n  -webkit-animation-name: bounceOutRight;\n  animation-name: bounceOutRight;\n}\n\n@-webkit-keyframes bounceOutUp {\n  20% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0);\n  }\n\n  40%, 45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 20px, 0);\n    transform: translate3d(0, 20px, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n\n@keyframes bounceOutUp {\n  20% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0);\n  }\n\n  40%, 45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 20px, 0);\n    transform: translate3d(0, 20px, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n\n.bounceOutUp {\n  -webkit-animation-name: bounceOutUp;\n  animation-name: bounceOutUp;\n}\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n.fadeIn {\n  -webkit-animation-name: fadeIn;\n  animation-name: fadeIn;\n}\n\n@-webkit-keyframes fadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n}\n\n@-webkit-keyframes fadeInDownBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInDownBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInDownBig {\n  -webkit-animation-name: fadeInDownBig;\n  animation-name: fadeInDownBig;\n}\n\n@-webkit-keyframes fadeInLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInLeft {\n  -webkit-animation-name: fadeInLeft;\n  animation-name: fadeInLeft;\n}\n\n@-webkit-keyframes fadeInLeftBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInLeftBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInLeftBig {\n  -webkit-animation-name: fadeInLeftBig;\n  animation-name: fadeInLeftBig;\n}\n\n@-webkit-keyframes fadeInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInRight {\n  -webkit-animation-name: fadeInRight;\n  animation-name: fadeInRight;\n}\n\n@-webkit-keyframes fadeInRightBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInRightBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInRightBig {\n  -webkit-animation-name: fadeInRightBig;\n  animation-name: fadeInRightBig;\n}\n\n@-webkit-keyframes fadeInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInUp {\n  -webkit-animation-name: fadeInUp;\n  animation-name: fadeInUp;\n}\n\n@-webkit-keyframes fadeInUpBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInUpBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInUpBig {\n  -webkit-animation-name: fadeInUpBig;\n  animation-name: fadeInUpBig;\n}\n\n@-webkit-keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n.fadeOut {\n  -webkit-animation-name: fadeOut;\n  animation-name: fadeOut;\n}\n\n@-webkit-keyframes fadeOutDown {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n}\n\n@keyframes fadeOutDown {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n}\n\n.fadeOutDown {\n  -webkit-animation-name: fadeOutDown;\n  animation-name: fadeOutDown;\n}\n\n@-webkit-keyframes fadeOutDownBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n\n@keyframes fadeOutDownBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n\n.fadeOutDownBig {\n  -webkit-animation-name: fadeOutDownBig;\n  animation-name: fadeOutDownBig;\n}\n\n@-webkit-keyframes fadeOutLeft {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n@keyframes fadeOutLeft {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n.fadeOutLeft {\n  -webkit-animation-name: fadeOutLeft;\n  animation-name: fadeOutLeft;\n}\n\n@-webkit-keyframes fadeOutLeftBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n\n@keyframes fadeOutLeftBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n\n.fadeOutLeftBig {\n  -webkit-animation-name: fadeOutLeftBig;\n  animation-name: fadeOutLeftBig;\n}\n\n@-webkit-keyframes fadeOutRight {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n@keyframes fadeOutRight {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n.fadeOutRight {\n  -webkit-animation-name: fadeOutRight;\n  animation-name: fadeOutRight;\n}\n\n@-webkit-keyframes fadeOutRightBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n\n@keyframes fadeOutRightBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n\n.fadeOutRightBig {\n  -webkit-animation-name: fadeOutRightBig;\n  animation-name: fadeOutRightBig;\n}\n\n@-webkit-keyframes fadeOutUp {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n}\n\n@keyframes fadeOutUp {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n}\n\n.fadeOutUp {\n  -webkit-animation-name: fadeOutUp;\n  animation-name: fadeOutUp;\n}\n\n@-webkit-keyframes fadeOutUpBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n\n@keyframes fadeOutUpBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n\n.fadeOutUpBig {\n  -webkit-animation-name: fadeOutUpBig;\n  animation-name: fadeOutUpBig;\n}\n\n@-webkit-keyframes flip {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n\n  50% {\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) scale3d(.95, .95, .95);\n    transform: perspective(400px) scale3d(.95, .95, .95);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n}\n\n@keyframes flip {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n\n  50% {\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) scale3d(.95, .95, .95);\n    transform: perspective(400px) scale3d(.95, .95, .95);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n}\n\n.animated.flip {\n  -webkit-backface-visibility: visible;\n  backface-visibility: visible;\n  -webkit-animation-name: flip;\n  animation-name: flip;\n}\n\n@-webkit-keyframes flipInX {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n  }\n\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n}\n\n@keyframes flipInX {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n  }\n\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n}\n\n.flipInX {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipInX;\n  animation-name: flipInX;\n}\n\n@-webkit-keyframes flipInY {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n  }\n\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n}\n\n@keyframes flipInY {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n  }\n\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n}\n\n.flipInY {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipInY;\n  animation-name: flipInY;\n}\n\n@-webkit-keyframes flipOutX {\n  from {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    opacity: 0;\n  }\n}\n\n@keyframes flipOutX {\n  from {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    opacity: 0;\n  }\n}\n\n.flipOutX {\n  -webkit-animation-name: flipOutX;\n  animation-name: flipOutX;\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n}\n\n@-webkit-keyframes flipOutY {\n  from {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    opacity: 0;\n  }\n}\n\n@keyframes flipOutY {\n  from {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    opacity: 0;\n  }\n}\n\n.flipOutY {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipOutY;\n  animation-name: flipOutY;\n}\n\n@-webkit-keyframes lightSpeedIn {\n  from {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);\n    transform: translate3d(100%, 0, 0) skewX(-30deg);\n    opacity: 0;\n  }\n\n  60% {\n    -webkit-transform: skewX(20deg);\n    transform: skewX(20deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: skewX(-5deg);\n    transform: skewX(-5deg);\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n@keyframes lightSpeedIn {\n  from {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);\n    transform: translate3d(100%, 0, 0) skewX(-30deg);\n    opacity: 0;\n  }\n\n  60% {\n    -webkit-transform: skewX(20deg);\n    transform: skewX(20deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: skewX(-5deg);\n    transform: skewX(-5deg);\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.lightSpeedIn {\n  -webkit-animation-name: lightSpeedIn;\n  animation-name: lightSpeedIn;\n  -webkit-animation-timing-function: ease-out;\n  animation-timing-function: ease-out;\n}\n\n@-webkit-keyframes lightSpeedOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);\n    transform: translate3d(100%, 0, 0) skewX(30deg);\n    opacity: 0;\n  }\n}\n\n@keyframes lightSpeedOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);\n    transform: translate3d(100%, 0, 0) skewX(30deg);\n    opacity: 0;\n  }\n}\n\n.lightSpeedOut {\n  -webkit-animation-name: lightSpeedOut;\n  animation-name: lightSpeedOut;\n  -webkit-animation-timing-function: ease-in;\n  animation-timing-function: ease-in;\n}\n\n@-webkit-keyframes rotateIn {\n  from {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, -200deg);\n    transform: rotate3d(0, 0, 1, -200deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n@keyframes rotateIn {\n  from {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, -200deg);\n    transform: rotate3d(0, 0, 1, -200deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateIn {\n  -webkit-animation-name: rotateIn;\n  animation-name: rotateIn;\n}\n\n@-webkit-keyframes rotateInDownLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n@keyframes rotateInDownLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateInDownLeft {\n  -webkit-animation-name: rotateInDownLeft;\n  animation-name: rotateInDownLeft;\n}\n\n@-webkit-keyframes rotateInDownRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n@keyframes rotateInDownRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateInDownRight {\n  -webkit-animation-name: rotateInDownRight;\n  animation-name: rotateInDownRight;\n}\n\n@-webkit-keyframes rotateInUpLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n@keyframes rotateInUpLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateInUpLeft {\n  -webkit-animation-name: rotateInUpLeft;\n  animation-name: rotateInUpLeft;\n}\n\n@-webkit-keyframes rotateInUpRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -90deg);\n    transform: rotate3d(0, 0, 1, -90deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n@keyframes rotateInUpRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -90deg);\n    transform: rotate3d(0, 0, 1, -90deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateInUpRight {\n  -webkit-animation-name: rotateInUpRight;\n  animation-name: rotateInUpRight;\n}\n\n@-webkit-keyframes rotateOut {\n  from {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, 200deg);\n    transform: rotate3d(0, 0, 1, 200deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOut {\n  from {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, 200deg);\n    transform: rotate3d(0, 0, 1, 200deg);\n    opacity: 0;\n  }\n}\n\n.rotateOut {\n  -webkit-animation-name: rotateOut;\n  animation-name: rotateOut;\n}\n\n@-webkit-keyframes rotateOutDownLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOutDownLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutDownLeft {\n  -webkit-animation-name: rotateOutDownLeft;\n  animation-name: rotateOutDownLeft;\n}\n\n@-webkit-keyframes rotateOutDownRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOutDownRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutDownRight {\n  -webkit-animation-name: rotateOutDownRight;\n  animation-name: rotateOutDownRight;\n}\n\n@-webkit-keyframes rotateOutUpLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOutUpLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutUpLeft {\n  -webkit-animation-name: rotateOutUpLeft;\n  animation-name: rotateOutUpLeft;\n}\n\n@-webkit-keyframes rotateOutUpRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 90deg);\n    transform: rotate3d(0, 0, 1, 90deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOutUpRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 90deg);\n    transform: rotate3d(0, 0, 1, 90deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutUpRight {\n  -webkit-animation-name: rotateOutUpRight;\n  animation-name: rotateOutUpRight;\n}\n\n@-webkit-keyframes hinge {\n  0% {\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  20%, 60% {\n    -webkit-transform: rotate3d(0, 0, 1, 80deg);\n    transform: rotate3d(0, 0, 1, 80deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  40%, 80% {\n    -webkit-transform: rotate3d(0, 0, 1, 60deg);\n    transform: rotate3d(0, 0, 1, 60deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 700px, 0);\n    transform: translate3d(0, 700px, 0);\n    opacity: 0;\n  }\n}\n\n@keyframes hinge {\n  0% {\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  20%, 60% {\n    -webkit-transform: rotate3d(0, 0, 1, 80deg);\n    transform: rotate3d(0, 0, 1, 80deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  40%, 80% {\n    -webkit-transform: rotate3d(0, 0, 1, 60deg);\n    transform: rotate3d(0, 0, 1, 60deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 700px, 0);\n    transform: translate3d(0, 700px, 0);\n    opacity: 0;\n  }\n}\n\n.hinge {\n  -webkit-animation-name: hinge;\n  animation-name: hinge;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@-webkit-keyframes rollIn {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes rollIn {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.rollIn {\n  -webkit-animation-name: rollIn;\n  animation-name: rollIn;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@-webkit-keyframes rollOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n  }\n}\n\n@keyframes rollOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n  }\n}\n\n.rollOut {\n  -webkit-animation-name: rollOut;\n  animation-name: rollOut;\n}\n\n@-webkit-keyframes zoomIn {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n\n  50% {\n    opacity: 1;\n  }\n}\n\n@keyframes zoomIn {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n\n  50% {\n    opacity: 1;\n  }\n}\n\n.zoomIn {\n  -webkit-animation-name: zoomIn;\n  animation-name: zoomIn;\n}\n\n@-webkit-keyframes zoomInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n@keyframes zoomInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomInDown {\n  -webkit-animation-name: zoomInDown;\n  animation-name: zoomInDown;\n}\n\n@-webkit-keyframes zoomInLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);\n    transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n@keyframes zoomInLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);\n    transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomInLeft {\n  -webkit-animation-name: zoomInLeft;\n  animation-name: zoomInLeft;\n}\n\n@-webkit-keyframes zoomInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);\n    transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n@keyframes zoomInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);\n    transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomInRight {\n  -webkit-animation-name: zoomInRight;\n  animation-name: zoomInRight;\n}\n\n@-webkit-keyframes zoomInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n@keyframes zoomInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomInUp {\n  -webkit-animation-name: zoomInUp;\n  animation-name: zoomInUp;\n}\n\n@-webkit-keyframes zoomOut {\n  from {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n@keyframes zoomOut {\n  from {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n.zoomOut {\n  -webkit-animation-name: zoomOut;\n  animation-name: zoomOut;\n}\n\n@-webkit-keyframes zoomOutDown {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n@keyframes zoomOutDown {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomOutDown {\n  -webkit-animation-name: zoomOutDown;\n  animation-name: zoomOutDown;\n}\n\n@-webkit-keyframes zoomOutLeft {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale(.1) translate3d(-2000px, 0, 0);\n    transform: scale(.1) translate3d(-2000px, 0, 0);\n    -webkit-transform-origin: left center;\n    transform-origin: left center;\n  }\n}\n\n@keyframes zoomOutLeft {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale(.1) translate3d(-2000px, 0, 0);\n    transform: scale(.1) translate3d(-2000px, 0, 0);\n    -webkit-transform-origin: left center;\n    transform-origin: left center;\n  }\n}\n\n.zoomOutLeft {\n  -webkit-animation-name: zoomOutLeft;\n  animation-name: zoomOutLeft;\n}\n\n@-webkit-keyframes zoomOutRight {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale(.1) translate3d(2000px, 0, 0);\n    transform: scale(.1) translate3d(2000px, 0, 0);\n    -webkit-transform-origin: right center;\n    transform-origin: right center;\n  }\n}\n\n@keyframes zoomOutRight {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale(.1) translate3d(2000px, 0, 0);\n    transform: scale(.1) translate3d(2000px, 0, 0);\n    -webkit-transform-origin: right center;\n    transform-origin: right center;\n  }\n}\n\n.zoomOutRight {\n  -webkit-animation-name: zoomOutRight;\n  animation-name: zoomOutRight;\n}\n\n@-webkit-keyframes zoomOutUp {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n@keyframes zoomOutUp {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomOutUp {\n  -webkit-animation-name: zoomOutUp;\n  animation-name: zoomOutUp;\n}\n\n@-webkit-keyframes slideInDown {\n  from {\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes slideInDown {\n  from {\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInDown {\n  -webkit-animation-name: slideInDown;\n  animation-name: slideInDown;\n}\n\n@-webkit-keyframes slideInLeft {\n  from {\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes slideInLeft {\n  from {\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInLeft {\n  -webkit-animation-name: slideInLeft;\n  animation-name: slideInLeft;\n}\n\n@-webkit-keyframes slideInRight {\n  from {\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes slideInRight {\n  from {\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInRight {\n  -webkit-animation-name: slideInRight;\n  animation-name: slideInRight;\n}\n\n@-webkit-keyframes slideInUp {\n  from {\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes slideInUp {\n  from {\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInUp {\n  -webkit-animation-name: slideInUp;\n  animation-name: slideInUp;\n}\n\n@-webkit-keyframes slideOutDown {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n}\n\n@keyframes slideOutDown {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n}\n\n.slideOutDown {\n  -webkit-animation-name: slideOutDown;\n  animation-name: slideOutDown;\n}\n\n@-webkit-keyframes slideOutLeft {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n@keyframes slideOutLeft {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n.slideOutLeft {\n  -webkit-animation-name: slideOutLeft;\n  animation-name: slideOutLeft;\n}\n\n@-webkit-keyframes slideOutRight {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n@keyframes slideOutRight {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n.slideOutRight {\n  -webkit-animation-name: slideOutRight;\n  animation-name: slideOutRight;\n}\n\n@-webkit-keyframes slideOutUp {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n}\n\n@keyframes slideOutUp {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n}\n\n.slideOutUp {\n  -webkit-animation-name: slideOutUp;\n  animation-name: slideOutUp;\n}\n", ""]);

// exports


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n#screen-nearby__container[data-v-02d90aad] {\n  position: absolute;\n  z-index: 3;\n  left: 16px;\n  bottom: 16px;\n}\n", ""]);

// exports


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n.fade-enter-active,\n.fade-leave-active {\n  transition: opacity .5s\n}\n.fade-enter,\n.fade-leave-to\n/* .fade-leave-active in <2.1.8 */\n\n{\n  opacity: 0\n}\n", ""]);

// exports


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n#bluetooth-trigger__container {\n  position: absolute;\n  z-index: 3;\n  right: 24px;\n  bottom: 36px;\n}\n", ""]);

// exports


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports
exports.i(__webpack_require__(207), "");
exports.i(__webpack_require__(206), "");
exports.i(__webpack_require__(185), "");

// module
exports.push([module.i, "\n", ""]);

// exports


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n.dummy-preference__text[data-v-1e8ad5f6] {\n  height: 16px;\n  width: 100%;\n}\n.dummy-preference__text--small[data-v-1e8ad5f6] {\n  height: 14px;\n  width: 100%;\n}\n.dummy-preference__bus[data-v-1e8ad5f6] {\n  width: 24px;\n  height: 24px;\n}\n.dummy-preference--background-color[data-v-1e8ad5f6] {\n  background-color: rgb(246, 246, 246) !important;\n}\n", ""]);

// exports


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n.app__icon[data-v-54a5026f] {\n  width: 50px;\n  height: 50px;\n  text-align: center;\n  font-size: 45px;\n  border-radius: 50%;\n  /*border: 1px black solid;*/\n}\n", ""]);

// exports


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n.my-navigation__container {\n  /*padding: 4px;*/\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 40px;\n  width: 100%;\n  z-index: 1;\n  background-color: white;\n}\n.my-navigation__home {\n  border-radius: 50%;\n  background-color: white;\n  font-size: 54px;\n}\n.circle-icon {\n    background: white;\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n    text-align: center;\n    line-height: 100px;\n    vertical-align: middle;\n    padding: 30px;\n}\n.flex--center{\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n", ""]);

// exports


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n.pull-down-header {\n  width: 100%;\n  height: 0px;\n  overflow: hidden;\n  position: relative;\n  background-color: white;\n}\n.pull-down-content {\n  position: absolute;\n  max-width: 90%;\n  bottom: 10px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  height: 40px;\n  color: #d5d5d5;\n  text-align: center;\n  border-left: 20px solid transparent;\n}\n@-webkit-keyframes rotate {\nfrom {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\nto {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@keyframes rotate {\nfrom {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\nto {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n", ""]);

// exports


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n.my-nav-bar[data-v-7194130d] {\n  background-color: #1E88E5;\n  /*position: absolute;*/\n  width: 100%;\n  z-index: 99;\n  height: 60px !important;\n  min-height: 60px !important;\n  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.19), 0 1px 1px rgba(0, 0, 0, 0.23);\n}\n.uk-navbar-nav>a[data-v-7194130d] {\n  color: white\n}\n", ""]);

// exports


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n.user-color {\n  border-radius: 2rem;\n  min-height: 24px;\n  min-width: 16px;\n}\n", ""]);

// exports


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/*!\n * vue-animate v0.0.4\n * (c) 2016 Hayden Bickerton\n * Released under the MIT License.\n * Documentation: https://github.com/haydenbbickerton/vue-animate\n */\n@-webkit-keyframes bounceIn {\n  from,\n  20%,\n  40%,\n  60%,\n  80%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n            transform: scale3d(0.3, 0.3, 0.3);\n  }\n  20% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n            transform: scale3d(1.1, 1.1, 1.1);\n  }\n  40% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9);\n            transform: scale3d(0.9, 0.9, 0.9);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.03, 1.03, 1.03);\n            transform: scale3d(1.03, 1.03, 1.03);\n  }\n  80% {\n    -webkit-transform: scale3d(0.97, 0.97, 0.97);\n            transform: scale3d(0.97, 0.97, 0.97);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n}\n@keyframes bounceIn {\n  from,\n  20%,\n  40%,\n  60%,\n  80%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n            transform: scale3d(0.3, 0.3, 0.3);\n  }\n  20% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n            transform: scale3d(1.1, 1.1, 1.1);\n  }\n  40% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9);\n            transform: scale3d(0.9, 0.9, 0.9);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.03, 1.03, 1.03);\n            transform: scale3d(1.03, 1.03, 1.03);\n  }\n  80% {\n    -webkit-transform: scale3d(0.97, 0.97, 0.97);\n            transform: scale3d(0.97, 0.97, 0.97);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n}\n@-webkit-keyframes bounceOut {\n  20% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9);\n            transform: scale3d(0.9, 0.9, 0.9);\n  }\n  50%,\n  55% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n            transform: scale3d(1.1, 1.1, 1.1);\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n            transform: scale3d(0.3, 0.3, 0.3);\n  }\n}\n@keyframes bounceOut {\n  20% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9);\n            transform: scale3d(0.9, 0.9, 0.9);\n  }\n  50%,\n  55% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n            transform: scale3d(1.1, 1.1, 1.1);\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n            transform: scale3d(0.3, 0.3, 0.3);\n  }\n}\n@-webkit-keyframes bounceInDown {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -3000px, 0);\n            transform: translate3d(0, -3000px, 0);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 25px, 0);\n            transform: translate3d(0, 25px, 0);\n  }\n  75% {\n    -webkit-transform: translate3d(0, -10px, 0);\n            transform: translate3d(0, -10px, 0);\n  }\n  90% {\n    -webkit-transform: translate3d(0, 5px, 0);\n            transform: translate3d(0, 5px, 0);\n  }\n  to {\n    -webkit-transform: none;\n            transform: none;\n  }\n}\n@keyframes bounceInDown {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -3000px, 0);\n            transform: translate3d(0, -3000px, 0);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 25px, 0);\n            transform: translate3d(0, 25px, 0);\n  }\n  75% {\n    -webkit-transform: translate3d(0, -10px, 0);\n            transform: translate3d(0, -10px, 0);\n  }\n  90% {\n    -webkit-transform: translate3d(0, 5px, 0);\n            transform: translate3d(0, 5px, 0);\n  }\n  to {\n    -webkit-transform: none;\n            transform: none;\n  }\n}\n@-webkit-keyframes bounceOutDown {\n  20% {\n    -webkit-transform: translate3d(0, 10px, 0);\n            transform: translate3d(0, 10px, 0);\n  }\n  40%,\n  45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n            transform: translate3d(0, -20px, 0);\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n            transform: translate3d(0, 2000px, 0);\n  }\n}\n@keyframes bounceOutDown {\n  20% {\n    -webkit-transform: translate3d(0, 10px, 0);\n            transform: translate3d(0, 10px, 0);\n  }\n  40%,\n  45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n            transform: translate3d(0, -20px, 0);\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n            transform: translate3d(0, 2000px, 0);\n  }\n}\n@-webkit-keyframes bounceInLeft {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-3000px, 0, 0);\n            transform: translate3d(-3000px, 0, 0);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(25px, 0, 0);\n            transform: translate3d(25px, 0, 0);\n  }\n  75% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n            transform: translate3d(-10px, 0, 0);\n  }\n  90% {\n    -webkit-transform: translate3d(5px, 0, 0);\n            transform: translate3d(5px, 0, 0);\n  }\n  to {\n    -webkit-transform: none;\n            transform: none;\n  }\n}\n@keyframes bounceInLeft {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-3000px, 0, 0);\n            transform: translate3d(-3000px, 0, 0);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(25px, 0, 0);\n            transform: translate3d(25px, 0, 0);\n  }\n  75% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n            transform: translate3d(-10px, 0, 0);\n  }\n  90% {\n    -webkit-transform: translate3d(5px, 0, 0);\n            transform: translate3d(5px, 0, 0);\n  }\n  to {\n    -webkit-transform: none;\n            transform: none;\n  }\n}\n@-webkit-keyframes bounceOutLeft {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(20px, 0, 0);\n            transform: translate3d(20px, 0, 0);\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n            transform: translate3d(-2000px, 0, 0);\n  }\n}\n@keyframes bounceOutLeft {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(20px, 0, 0);\n            transform: translate3d(20px, 0, 0);\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n            transform: translate3d(-2000px, 0, 0);\n  }\n}\n@-webkit-keyframes bounceInRight {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(3000px, 0, 0);\n            transform: translate3d(3000px, 0, 0);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(-25px, 0, 0);\n            transform: translate3d(-25px, 0, 0);\n  }\n  75% {\n    -webkit-transform: translate3d(10px, 0, 0);\n            transform: translate3d(10px, 0, 0);\n  }\n  90% {\n    -webkit-transform: translate3d(-5px, 0, 0);\n            transform: translate3d(-5px, 0, 0);\n  }\n  to {\n    -webkit-transform: none;\n            transform: none;\n  }\n}\n@keyframes bounceInRight {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(3000px, 0, 0);\n            transform: translate3d(3000px, 0, 0);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(-25px, 0, 0);\n            transform: translate3d(-25px, 0, 0);\n  }\n  75% {\n    -webkit-transform: translate3d(10px, 0, 0);\n            transform: translate3d(10px, 0, 0);\n  }\n  90% {\n    -webkit-transform: translate3d(-5px, 0, 0);\n            transform: translate3d(-5px, 0, 0);\n  }\n  to {\n    -webkit-transform: none;\n            transform: none;\n  }\n}\n@-webkit-keyframes bounceOutRight {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(-20px, 0, 0);\n            transform: translate3d(-20px, 0, 0);\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n            transform: translate3d(2000px, 0, 0);\n  }\n}\n@keyframes bounceOutRight {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(-20px, 0, 0);\n            transform: translate3d(-20px, 0, 0);\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n            transform: translate3d(2000px, 0, 0);\n  }\n}\n@-webkit-keyframes bounceInUp {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 3000px, 0);\n            transform: translate3d(0, 3000px, 0);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n            transform: translate3d(0, -20px, 0);\n  }\n  75% {\n    -webkit-transform: translate3d(0, 10px, 0);\n            transform: translate3d(0, 10px, 0);\n  }\n  90% {\n    -webkit-transform: translate3d(0, -5px, 0);\n            transform: translate3d(0, -5px, 0);\n  }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes bounceInUp {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 3000px, 0);\n            transform: translate3d(0, 3000px, 0);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n            transform: translate3d(0, -20px, 0);\n  }\n  75% {\n    -webkit-transform: translate3d(0, 10px, 0);\n            transform: translate3d(0, 10px, 0);\n  }\n  90% {\n    -webkit-transform: translate3d(0, -5px, 0);\n            transform: translate3d(0, -5px, 0);\n  }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes bounceOutUp {\n  20% {\n    -webkit-transform: translate3d(0, -10px, 0);\n            transform: translate3d(0, -10px, 0);\n  }\n  40%,\n  45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 20px, 0);\n            transform: translate3d(0, 20px, 0);\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n            transform: translate3d(0, -2000px, 0);\n  }\n}\n@keyframes bounceOutUp {\n  20% {\n    -webkit-transform: translate3d(0, -10px, 0);\n            transform: translate3d(0, -10px, 0);\n  }\n  40%,\n  45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 20px, 0);\n            transform: translate3d(0, 20px, 0);\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n            transform: translate3d(0, -2000px, 0);\n  }\n}\n.bounce-transition,\n.bounceDown-transition, .bounceLeft-transition, .bounceRight-transition, .bounceUp-transition {\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n}\n.bounce-enter,\n.bounceIn {\n  -webkit-animation-name: bounceIn;\n          animation-name: bounceIn;\n}\n.bounce-leave,\n.bounceOut {\n  -webkit-animation-name: bounceOut;\n          animation-name: bounceOut;\n}\n.bounceUp-enter,\n.bounceInUp {\n  -webkit-animation-name: bounceInUp;\n          animation-name: bounceInUp;\n}\n.bounceUp-leave,\n.bounceOutUp {\n  -webkit-animation-name: bounceOutUp;\n          animation-name: bounceOutUp;\n}\n.bounceRight-enter,\n.bounceInRight {\n  -webkit-animation-name: bounceInRight;\n          animation-name: bounceInRight;\n}\n.bounceRight-leave,\n.bounceOutRight {\n  -webkit-animation-name: bounceOutRight;\n          animation-name: bounceOutRight;\n}\n.bounceLeft-enter,\n.bounceInLeft {\n  -webkit-animation-name: bounceInLeft;\n          animation-name: bounceInLeft;\n}\n.bounceLeft-leave,\n.bounceOutLeft {\n  -webkit-animation-name: bounceOutLeft;\n          animation-name: bounceOutLeft;\n}\n.bounceDown-enter,\n.bounceInDown {\n  -webkit-animation-name: bounceInDown;\n          animation-name: bounceInDown;\n}\n.bounceDown-leave,\n.bounceOutDown {\n  -webkit-animation-name: bounceOutDown;\n          animation-name: bounceOutDown;\n}\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@-webkit-keyframes fadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n            transform: translate3d(0, -100%, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none;\n  }\n}\n@keyframes fadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n            transform: translate3d(0, -100%, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none;\n  }\n}\n@-webkit-keyframes fadeOutDown {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n            transform: translate3d(0, 100%, 0);\n  }\n}\n@keyframes fadeOutDown {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n            transform: translate3d(0, 100%, 0);\n  }\n}\n@-webkit-keyframes fadeInDownBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n            transform: translate3d(0, -2000px, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none;\n  }\n}\n@keyframes fadeInDownBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n            transform: translate3d(0, -2000px, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none;\n  }\n}\n@-webkit-keyframes fadeOutDownBig {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n            transform: translate3d(0, 2000px, 0);\n  }\n}\n@keyframes fadeOutDownBig {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n            transform: translate3d(0, 2000px, 0);\n  }\n}\n@-webkit-keyframes fadeInLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none;\n  }\n}\n@keyframes fadeInLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none;\n  }\n}\n@-webkit-keyframes fadeOutLeft {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0);\n  }\n}\n@keyframes fadeOutLeft {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0);\n  }\n}\n@-webkit-keyframes fadeInLeftBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n            transform: translate3d(-2000px, 0, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none;\n  }\n}\n@keyframes fadeInLeftBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n            transform: translate3d(-2000px, 0, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none;\n  }\n}\n@-webkit-keyframes fadeOutLeftBig {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n            transform: translate3d(-2000px, 0, 0);\n  }\n}\n@keyframes fadeOutLeftBig {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n            transform: translate3d(-2000px, 0, 0);\n  }\n}\n@-webkit-keyframes fadeInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none;\n  }\n}\n@keyframes fadeInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none;\n  }\n}\n@-webkit-keyframes fadeOutRight {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0);\n  }\n}\n@keyframes fadeOutRight {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0);\n  }\n}\n@-webkit-keyframes fadeInRightBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n            transform: translate3d(2000px, 0, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none;\n  }\n}\n@keyframes fadeInRightBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n            transform: translate3d(2000px, 0, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none;\n  }\n}\n@-webkit-keyframes fadeOutRightBig {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n            transform: translate3d(2000px, 0, 0);\n  }\n}\n@keyframes fadeOutRightBig {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n            transform: translate3d(2000px, 0, 0);\n  }\n}\n@-webkit-keyframes fadeInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n            transform: translate3d(0, 100%, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none;\n  }\n}\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n            transform: translate3d(0, 100%, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none;\n  }\n}\n@-webkit-keyframes fadeOutUp {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n            transform: translate3d(0, -100%, 0);\n  }\n}\n@keyframes fadeOutUp {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n            transform: translate3d(0, -100%, 0);\n  }\n}\n@-webkit-keyframes fadeInUpBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n            transform: translate3d(0, 2000px, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none;\n  }\n}\n@keyframes fadeInUpBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n            transform: translate3d(0, 2000px, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none;\n  }\n}\n@keyframes fadeOutUp {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n            transform: translate3d(0, -100%, 0);\n  }\n}\n.fade-transition,\n.fadeDown-transition, .fadeDownBig-transition, .fadeLeft-transition, .fadeLeftBig-transition, .fadeRight-transition, .fadeRightBig-transition, .fadeUp-transition, .fadeUpBig-transition {\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n}\n.fade-enter,\n.fadeIn {\n  -webkit-animation-name: fadeIn;\n          animation-name: fadeIn;\n}\n.fade-leave,\n.fadeOut {\n  -webkit-animation-name: fadeOut;\n          animation-name: fadeOut;\n}\n.fadeUpBig-enter,\n.fadeInUpBig {\n  -webkit-animation-name: fadeInUpBig;\n          animation-name: fadeInUpBig;\n}\n.fadeUpBig-leave,\n.fadeOutUpBig {\n  -webkit-animation-name: fadeOutUpBig;\n          animation-name: fadeOutUpBig;\n}\n.fadeUp-enter,\n.fadeInUp {\n  -webkit-animation-name: fadeInUp;\n          animation-name: fadeInUp;\n}\n.fadeUp-leave,\n.fadeOutUp {\n  -webkit-animation-name: fadeOutUp;\n          animation-name: fadeOutUp;\n}\n.fadeRightBig-enter,\n.fadeInRightBig {\n  -webkit-animation-name: fadeInRightBig;\n          animation-name: fadeInRightBig;\n}\n.fadeRightBig-leave,\n.fadeOutRightBig {\n  -webkit-animation-name: fadeOutRightBig;\n          animation-name: fadeOutRightBig;\n}\n.fadeRight-enter,\n.fadeInRight {\n  -webkit-animation-name: fadeInRight;\n          animation-name: fadeInRight;\n}\n.fadeRight-leave,\n.fadeOutRight {\n  -webkit-animation-name: fadeOutRight;\n          animation-name: fadeOutRight;\n}\n.fadeLeftBig-enter,\n.fadeInLeftBig {\n  -webkit-animation-name: fadeInLeftBig;\n          animation-name: fadeInLeftBig;\n}\n.fadeLeftBig-leave,\n.fadeOutLeftBig {\n  -webkit-animation-name: fadeOutLeftBig;\n          animation-name: fadeOutLeftBig;\n}\n.fadeLeft-enter,\n.fadeInLeft {\n  -webkit-animation-name: fadeInLeft;\n          animation-name: fadeInLeft;\n}\n.fadeLeft-leave,\n.fadeOutLeft {\n  -webkit-animation-name: fadeOutLeft;\n          animation-name: fadeOutLeft;\n}\n.fadeDownBig-enter,\n.fadeInDownBig {\n  -webkit-animation-name: fadeInDownBig;\n          animation-name: fadeInDownBig;\n}\n.fadeDownBig-leave,\n.fadeOutDownBig {\n  -webkit-animation-name: fadeOutDownBig;\n          animation-name: fadeOutDownBig;\n}\n.fadeDown-enter,\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n          animation-name: fadeInDown;\n}\n.fadeDown-leave,\n.fadeOutDown {\n  -webkit-animation-name: fadeOutDown;\n          animation-name: fadeOutDown;\n}\n@-webkit-keyframes rotateIn {\n  from {\n    -webkit-transform-origin: center;\n            transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, -200deg);\n            transform: rotate3d(0, 0, 1, -200deg);\n    opacity: 0;\n  }\n  to {\n    -webkit-transform-origin: center;\n            transform-origin: center;\n    -webkit-transform: none;\n            transform: none;\n    opacity: 1;\n  }\n}\n@keyframes rotateIn {\n  from {\n    -webkit-transform-origin: center;\n            transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, -200deg);\n            transform: rotate3d(0, 0, 1, -200deg);\n    opacity: 0;\n  }\n  to {\n    -webkit-transform-origin: center;\n            transform-origin: center;\n    -webkit-transform: none;\n            transform: none;\n    opacity: 1;\n  }\n}\n@-webkit-keyframes rotateOut {\n  from {\n    -webkit-transform-origin: center;\n            transform-origin: center;\n    opacity: 1;\n  }\n  to {\n    -webkit-transform-origin: center;\n            transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, 200deg);\n            transform: rotate3d(0, 0, 1, 200deg);\n    opacity: 0;\n  }\n}\n@keyframes rotateOut {\n  from {\n    -webkit-transform-origin: center;\n            transform-origin: center;\n    opacity: 1;\n  }\n  to {\n    -webkit-transform-origin: center;\n            transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, 200deg);\n            transform: rotate3d(0, 0, 1, 200deg);\n    opacity: 0;\n  }\n}\n@-webkit-keyframes rotateInDownLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n            transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n            transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n  to {\n    -webkit-transform-origin: left bottom;\n            transform-origin: left bottom;\n    -webkit-transform: none;\n            transform: none;\n    opacity: 1;\n  }\n}\n@keyframes rotateInDownLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n            transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n            transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n  to {\n    -webkit-transform-origin: left bottom;\n            transform-origin: left bottom;\n    -webkit-transform: none;\n            transform: none;\n    opacity: 1;\n  }\n}\n@-webkit-keyframes rotateOutDownLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n            transform-origin: left bottom;\n    opacity: 1;\n  }\n  to {\n    -webkit-transform-origin: left bottom;\n            transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n            transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n}\n@keyframes rotateOutDownLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n            transform-origin: left bottom;\n    opacity: 1;\n  }\n  to {\n    -webkit-transform-origin: left bottom;\n            transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n            transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n}\n@-webkit-keyframes rotateInDownRight {\n  from {\n    -webkit-transform-origin: right bottom;\n            transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n            transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n  to {\n    -webkit-transform-origin: right bottom;\n            transform-origin: right bottom;\n    -webkit-transform: none;\n            transform: none;\n    opacity: 1;\n  }\n}\n@keyframes rotateInDownRight {\n  from {\n    -webkit-transform-origin: right bottom;\n            transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n            transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n  to {\n    -webkit-transform-origin: right bottom;\n            transform-origin: right bottom;\n    -webkit-transform: none;\n            transform: none;\n    opacity: 1;\n  }\n}\n@-webkit-keyframes rotateOutDownRight {\n  from {\n    -webkit-transform-origin: right bottom;\n            transform-origin: right bottom;\n    opacity: 1;\n  }\n  to {\n    -webkit-transform-origin: right bottom;\n            transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n            transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n@keyframes rotateOutDownRight {\n  from {\n    -webkit-transform-origin: right bottom;\n            transform-origin: right bottom;\n    opacity: 1;\n  }\n  to {\n    -webkit-transform-origin: right bottom;\n            transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n            transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n@-webkit-keyframes rotateInUpLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n            transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n            transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n  to {\n    -webkit-transform-origin: left bottom;\n            transform-origin: left bottom;\n    -webkit-transform: none;\n            transform: none;\n    opacity: 1;\n  }\n}\n@keyframes rotateInUpLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n            transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n            transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n  to {\n    -webkit-transform-origin: left bottom;\n            transform-origin: left bottom;\n    -webkit-transform: none;\n            transform: none;\n    opacity: 1;\n  }\n}\n@-webkit-keyframes rotateOutUpLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n            transform-origin: left bottom;\n    opacity: 1;\n  }\n  to {\n    -webkit-transform-origin: left bottom;\n            transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n            transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n@keyframes rotateOutUpLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n            transform-origin: left bottom;\n    opacity: 1;\n  }\n  to {\n    -webkit-transform-origin: left bottom;\n            transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n            transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n@-webkit-keyframes rotateInUpRight {\n  from {\n    -webkit-transform-origin: right bottom;\n            transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -90deg);\n            transform: rotate3d(0, 0, 1, -90deg);\n    opacity: 0;\n  }\n  to {\n    -webkit-transform-origin: right bottom;\n            transform-origin: right bottom;\n    -webkit-transform: none;\n            transform: none;\n    opacity: 1;\n  }\n}\n@keyframes rotateInUpRight {\n  from {\n    -webkit-transform-origin: right bottom;\n            transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -90deg);\n            transform: rotate3d(0, 0, 1, -90deg);\n    opacity: 0;\n  }\n  to {\n    -webkit-transform-origin: right bottom;\n            transform-origin: right bottom;\n    -webkit-transform: none;\n            transform: none;\n    opacity: 1;\n  }\n}\n@-webkit-keyframes rotateOutUpRight {\n  from {\n    -webkit-transform-origin: right bottom;\n            transform-origin: right bottom;\n    opacity: 1;\n  }\n  to {\n    -webkit-transform-origin: right bottom;\n            transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 90deg);\n            transform: rotate3d(0, 0, 1, 90deg);\n    opacity: 0;\n  }\n}\n@keyframes rotateOutUpRight {\n  from {\n    -webkit-transform-origin: right bottom;\n            transform-origin: right bottom;\n    opacity: 1;\n  }\n  to {\n    -webkit-transform-origin: right bottom;\n            transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 90deg);\n            transform: rotate3d(0, 0, 1, 90deg);\n    opacity: 0;\n  }\n}\n.rotate-transition,\n.rotateDownLeft-transition, .rotateDownRight-transition, .rotateUpLeft-transition, .rotateUpRight-transition {\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n}\n.rotate-enter,\n.rotateIn {\n  -webkit-animation-name: rotateIn;\n          animation-name: rotateIn;\n}\n.rotate-leave,\n.rotateOut {\n  -webkit-animation-name: rotateOut;\n          animation-name: rotateOut;\n}\n.rotateUpRight-enter,\n.rotateInUpRight {\n  -webkit-animation-name: rotateInUpRight;\n          animation-name: rotateInUpRight;\n}\n.rotateUpRight-leave,\n.rotateOutUpRight {\n  -webkit-animation-name: rotateOutUpRight;\n          animation-name: rotateOutUpRight;\n}\n.rotateUpLeft-enter,\n.rotateInUpLeft {\n  -webkit-animation-name: rotateInUpLeft;\n          animation-name: rotateInUpLeft;\n}\n.rotateUpLeft-leave,\n.rotateOutUpLeft {\n  -webkit-animation-name: rotateOutUpLeft;\n          animation-name: rotateOutUpLeft;\n}\n.rotateDownRight-enter,\n.rotateInDownRight {\n  -webkit-animation-name: rotateInDownRight;\n          animation-name: rotateInDownRight;\n}\n.rotateDownRight-leave,\n.rotateOutDownRight {\n  -webkit-animation-name: rotateOutDownRight;\n          animation-name: rotateOutDownRight;\n}\n.rotateDownLeft-enter,\n.rotateInDownLeft {\n  -webkit-animation-name: rotateInDownLeft;\n          animation-name: rotateInDownLeft;\n}\n.rotateDownLeft-leave,\n.rotateOutDownLeft {\n  -webkit-animation-name: rotateOutDownLeft;\n          animation-name: rotateOutDownLeft;\n}\n@-webkit-keyframes slideInDown {\n  from {\n    -webkit-transform: translate3d(0, -100%, 0);\n            transform: translate3d(0, -100%, 0);\n    visibility: visible;\n  }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes slideInDown {\n  from {\n    -webkit-transform: translate3d(0, -100%, 0);\n            transform: translate3d(0, -100%, 0);\n    visibility: visible;\n  }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes slideOutDown {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, 100%, 0);\n            transform: translate3d(0, 100%, 0);\n  }\n}\n@keyframes slideOutDown {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, 100%, 0);\n            transform: translate3d(0, 100%, 0);\n  }\n}\n@-webkit-keyframes slideInLeft {\n  from {\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0);\n    visibility: visible;\n  }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes slideInLeft {\n  from {\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0);\n    visibility: visible;\n  }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes slideOutLeft {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0);\n  }\n}\n@keyframes slideOutLeft {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0);\n  }\n}\n@-webkit-keyframes slideInRight {\n  from {\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0);\n    visibility: visible;\n  }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes slideInRight {\n  from {\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0);\n    visibility: visible;\n  }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes slideOutRight {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0);\n  }\n}\n@keyframes slideOutRight {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0);\n  }\n}\n@-webkit-keyframes slideInUp {\n  from {\n    -webkit-transform: translate3d(0, 100%, 0);\n            transform: translate3d(0, 100%, 0);\n    visibility: visible;\n  }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes slideInUp {\n  from {\n    -webkit-transform: translate3d(0, 100%, 0);\n            transform: translate3d(0, 100%, 0);\n    visibility: visible;\n  }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes slideOutUp {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, -100%, 0);\n            transform: translate3d(0, -100%, 0);\n  }\n}\n@keyframes slideOutUp {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, -100%, 0);\n            transform: translate3d(0, -100%, 0);\n  }\n}\n.slide-transition,\n.slideDown-transition, .slideLeft-transition, .slideRight-transition, .slideUp-transition {\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n}\n.slide-enter,\n.slideIn {\n  -webkit-animation-name: slideIn;\n          animation-name: slideIn;\n}\n.slide-leave,\n.slideOut {\n  -webkit-animation-name: slideOut;\n          animation-name: slideOut;\n}\n.slideUp-enter,\n.slideInUp {\n  -webkit-animation-name: slideInUp;\n          animation-name: slideInUp;\n}\n.slideUp-leave,\n.slideOutUp {\n  -webkit-animation-name: slideOutUp;\n          animation-name: slideOutUp;\n}\n.slideRight-enter,\n.slideInRight {\n  -webkit-animation-name: slideInRight;\n          animation-name: slideInRight;\n}\n.slideRight-leave,\n.slideOutRight {\n  -webkit-animation-name: slideOutRight;\n          animation-name: slideOutRight;\n}\n.slideLeft-enter,\n.slideInLeft {\n  -webkit-animation-name: slideInLeft;\n          animation-name: slideInLeft;\n}\n.slideLeft-leave,\n.slideOutLeft {\n  -webkit-animation-name: slideOutLeft;\n          animation-name: slideOutLeft;\n}\n.slideDown-enter,\n.slideInDown {\n  -webkit-animation-name: slideInDown;\n          animation-name: slideInDown;\n}\n.slideDown-leave,\n.slideOutDown {\n  -webkit-animation-name: slideOutDown;\n          animation-name: slideOutDown;\n}\n@-webkit-keyframes zoomIn {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n            transform: scale3d(0.3, 0.3, 0.3);\n  }\n  50% {\n    opacity: 1;\n  }\n}\n@keyframes zoomIn {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n            transform: scale3d(0.3, 0.3, 0.3);\n  }\n  50% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes zoomOut {\n  from {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n            transform: scale3d(0.3, 0.3, 0.3);\n  }\n  to {\n    opacity: 0;\n  }\n}\n@keyframes zoomOut {\n  from {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n            transform: scale3d(0.3, 0.3, 0.3);\n  }\n  to {\n    opacity: 0;\n  }\n}\n@-webkit-keyframes zoomInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);\n            transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n            transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n            animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n@keyframes zoomInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);\n            transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n            transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n            animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n@-webkit-keyframes zoomOutDown {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n            transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n            transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n    -webkit-transform-origin: center bottom;\n            transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n            animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n@keyframes zoomOutDown {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n            transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n            transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n    -webkit-transform-origin: center bottom;\n            transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n            animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n@-webkit-keyframes zoomInLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);\n            transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);\n            transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n            animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n@keyframes zoomInLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);\n            transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);\n            transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n            animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n@-webkit-keyframes zoomOutLeft {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);\n            transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);\n            transform: scale(0.1) translate3d(-2000px, 0, 0);\n    -webkit-transform-origin: left center;\n            transform-origin: left center;\n  }\n}\n@keyframes zoomOutLeft {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);\n            transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);\n            transform: scale(0.1) translate3d(-2000px, 0, 0);\n    -webkit-transform-origin: left center;\n            transform-origin: left center;\n  }\n}\n@-webkit-keyframes zoomInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);\n            transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);\n            transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n            animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n@keyframes zoomInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);\n            transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);\n            transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n            animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n@-webkit-keyframes zoomOutRight {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);\n            transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);\n            transform: scale(0.1) translate3d(2000px, 0, 0);\n    -webkit-transform-origin: right center;\n            transform-origin: right center;\n  }\n}\n@keyframes zoomOutRight {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);\n            transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);\n            transform: scale(0.1) translate3d(2000px, 0, 0);\n    -webkit-transform-origin: right center;\n            transform-origin: right center;\n  }\n}\n@-webkit-keyframes zoomInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\n            transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n            transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n            animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n@keyframes zoomInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\n            transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n            transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n            animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n@-webkit-keyframes zoomOutUp {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n            transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);\n            transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);\n    -webkit-transform-origin: center bottom;\n            transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n            animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n@keyframes zoomOutUp {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n            transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);\n            transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);\n    -webkit-transform-origin: center bottom;\n            transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n            animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n.zoom-transition,\n.zoomDown-transition, .zoomLeft-transition, .zoomRight-transition, .zoomUp-transition {\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n}\n.zoom-enter,\n.zoomIn {\n  -webkit-animation-name: zoomIn;\n          animation-name: zoomIn;\n}\n.zoom-leave,\n.zoomOut {\n  -webkit-animation-name: zoomOut;\n          animation-name: zoomOut;\n}\n.zoomUp-enter,\n.zoomInUp {\n  -webkit-animation-name: zoomInUp;\n          animation-name: zoomInUp;\n}\n.zoomUp-leave,\n.zoomOutUp {\n  -webkit-animation-name: zoomOutUp;\n          animation-name: zoomOutUp;\n}\n.zoomRight-enter,\n.zoomInRight {\n  -webkit-animation-name: zoomInRight;\n          animation-name: zoomInRight;\n}\n.zoomRight-leave,\n.zoomOutRight {\n  -webkit-animation-name: zoomOutRight;\n          animation-name: zoomOutRight;\n}\n.zoomLeft-enter,\n.zoomInLeft {\n  -webkit-animation-name: zoomInLeft;\n          animation-name: zoomInLeft;\n}\n.zoomLeft-leave,\n.zoomOutLeft {\n  -webkit-animation-name: zoomOutLeft;\n          animation-name: zoomOutLeft;\n}\n.zoomDown-enter,\n.zoomInDown {\n  -webkit-animation-name: zoomInDown;\n          animation-name: zoomInDown;\n}\n.zoomDown-leave,\n.zoomOutDown {\n  -webkit-animation-name: zoomOutDown;\n          animation-name: zoomOutDown;\n}\n", ""]);

// exports


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "html {\n  overflow-y: hidden;\n}\n\n.red {\n  background-color: red !important;\n}\n\n.container--scrollable {\n  overflow-y: auto;\n}\n\n.dummy__text {\n  height: 16px;\n  width: 100%;\n}\n\n.dummy__text--big {\n  height: 24px;\n  width: 100%;\n}\n\n.dummy__text--small {\n  height: 14px;\n  width: 100%;\n}\n\n.dummy__bus {\n  width: 24px;\n  height: 24px;\n}\n\n.dummy__application__icon {\n  width: 50px;\n  height: 50px;\n}\n\n.dummy--background-color {\n  background-color: rgb(246, 246, 246) !important;\n}\n\n.my-container {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n.bottom-container--absolute {\n  position: absolute;\n  bottom: 40px;\n  width: 100%;\n}\n\n.uk-navbar-item, .uk-navbar-nav>li>a, .uk-navbar-toggle {\n  height: auto !important;\n}\n\n\n.child-view {\n  position: absolute;\n  transition: all 5s cubic-bezier(.55, 0, .1, 1);\n}\n\n\n.fade-router-enter-active, .fade-router-leave-active {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  /*margin-top: 60px;*/\n  margin-bottom: 40px;\n\n  transition: opacity .5s\n}\n.fade-router-enter, .fade-router-leave-to /* .fade-leave-active in <2.1.8 */ {\n  opacity: 0\n}\n\n\n.slide-leave-active {}\n\n.slide-enter-active {\n  /*z-index: 99;*/\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  /*margin-top: 60px;*/\n  margin-bottom: 40px;\n\n  transition: 0.5s;\n}\n\n.slide-enter {\n  transform: translate(100%, 0);\n}\n\n.slide-leave-to {\n  opacity: 0\n  /*transform: translate(-100%, 0);*/\n}\n\n.slide-right-leave-active {}\n\n.slide-right-enter-active {\n  /*z-index: 99;*/\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  /*margin-top: 60px;*/\n  margin-bottom: 40px;\n\n  transition: 0.5s;\n}\n\n.slide-right-enter {\n  transform: translate(-100%, 0);\n}\n\n.slide-right-leave-to {\n  opacity: 0\n  /*transform: translate(-100%, 0);*/\n}\n\n\n#app {\n  height: 100vh;\n  overflow: hidden;\n}\n\n.f-h {\n  height: 100%;\n}\n\n.uk-flex--grow {\n  flex-grow: 99\n}\n\n.my-card__body {\n  padding: 16px !important\n}\n\n#content {\n  margin-top: 60px;\n  margin-bottom: 40px;\n}\n", ""]);

// exports


/***/ }),
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(259)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(109),
  /* template */
  __webpack_require__(238),
  /* scopeId */
  "data-v-54a5026f",
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/tacitaWebServer/tacitaWebApp/src/components/PhoneApp/Application/Application.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Application.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-54a5026f", Component.options)
  } else {
    hotAPI.reload("data-v-54a5026f", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(268)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(110),
  /* template */
  __webpack_require__(247),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/tacitaWebServer/tacitaWebApp/src/components/PhoneApp/Application/ApplicationDummy.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ApplicationDummy.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-96697cae", Component.options)
  } else {
    hotAPI.reload("data-v-96697cae", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(270)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(111),
  /* template */
  __webpack_require__(249),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/tacitaWebServer/tacitaWebApp/src/components/PhoneApp/Application/ApplicationWrapper/ApplicationWrapper.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ApplicationWrapper.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f5442ee4", Component.options)
  } else {
    hotAPI.reload("data-v-f5442ee4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(253)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(112),
  /* template */
  __webpack_require__(232),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/tacitaWebServer/tacitaWebApp/src/components/PhoneApp/ApplicationPage/ApplicationPage.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ApplicationPage.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0f8a044d", Component.options)
  } else {
    hotAPI.reload("data-v-0f8a044d", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(258)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(113),
  /* template */
  __webpack_require__(237),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/tacitaWebServer/tacitaWebApp/src/components/PhoneApp/DisplaysPage/Display/Display.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Display.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-49f54438", Component.options)
  } else {
    hotAPI.reload("data-v-49f54438", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(262)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(114),
  /* template */
  __webpack_require__(241),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/tacitaWebServer/tacitaWebApp/src/components/PhoneApp/DisplaysPage/Display/DisplayDummy.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] DisplayDummy.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-590c9500", Component.options)
  } else {
    hotAPI.reload("data-v-590c9500", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(254)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(115),
  /* template */
  __webpack_require__(233),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/tacitaWebServer/tacitaWebApp/src/components/PhoneApp/DisplaysPage/DisplayWrapper/DisplayWrapper.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] DisplayWrapper.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-176f6192", Component.options)
  } else {
    hotAPI.reload("data-v-176f6192", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(252)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(116),
  /* template */
  __webpack_require__(231),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/tacitaWebServer/tacitaWebApp/src/components/PhoneApp/DisplaysPage/DisplaysPage.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] DisplaysPage.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0b3c84cd", Component.options)
  } else {
    hotAPI.reload("data-v-0b3c84cd", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(255)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(117),
  /* template */
  __webpack_require__(234),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/tacitaWebServer/tacitaWebApp/src/components/PhoneApp/Home.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Home.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1a476451", Component.options)
  } else {
    hotAPI.reload("data-v-1a476451", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(266)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(121),
  /* template */
  __webpack_require__(245),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/tacitaWebServer/tacitaWebApp/src/components/PhoneApp/PhoneApp.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PhoneApp.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-76dc8376", Component.options)
  } else {
    hotAPI.reload("data-v-76dc8376", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(267)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(122),
  /* template */
  __webpack_require__(246),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/tacitaWebServer/tacitaWebApp/src/components/PhoneApp/PreferencePage/PreferencePage.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PreferencePage.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8a0f3e66", Component.options)
  } else {
    hotAPI.reload("data-v-8a0f3e66", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(251)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(123),
  /* template */
  __webpack_require__(230),
  /* scopeId */
  "data-v-02d90aad",
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/tacitaWebServer/tacitaWebApp/src/components/PhoneApp/ScreenNearby/ScreenNearby.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ScreenNearby.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-02d90aad", Component.options)
  } else {
    hotAPI.reload("data-v-02d90aad", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(260)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(124),
  /* template */
  __webpack_require__(239),
  /* scopeId */
  "data-v-55e08649",
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/tacitaWebServer/tacitaWebApp/src/components/PhoneApp/UserPreferencePage/ColorPickerPage/ColorPickerPage.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ColorPickerPage.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-55e08649", Component.options)
  } else {
    hotAPI.reload("data-v-55e08649", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(257)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(125),
  /* template */
  __webpack_require__(236),
  /* scopeId */
  "data-v-1e8ad5f6",
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/tacitaWebServer/tacitaWebApp/src/components/PhoneApp/UserPreferencePage/PreferenceDummy.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PreferenceDummy.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1e8ad5f6", Component.options)
  } else {
    hotAPI.reload("data-v-1e8ad5f6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(269)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(126),
  /* template */
  __webpack_require__(248),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/tacitaWebServer/tacitaWebApp/src/components/PhoneApp/UserPreferencePage/UserPreferencePage.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UserPreferencePage.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a334db26", Component.options)
  } else {
    hotAPI.reload("data-v-a334db26", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.$store.state.hasADisplayNearby()),
      expression: "  $store.state.hasADisplayNearby()"
    }],
    staticClass: "animated infinite pulse",
    attrs: {
      "id": "screen-nearby__container"
    }
  }, [_c('v-btn', {
    attrs: {
      "primary": "",
      "floating": "",
      "dark": ""
    },
    nativeOn: {
      "click": function($event) {
        _vm.$router.push({
          name: 'Display'
        })
      }
    }
  }, [_c('v-icon', [_vm._v("important_devices")])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-02d90aad", module.exports)
  }
}

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('page', [_c('vue-pull-refresh', {
    staticClass: "uk-flex-column uk-flex f-h",
    attrs: {
      "on-refresh": _vm.onRefresh
    }
  }, [_c('div', {
    staticClass: "uk-flex-column uk-flex f-h"
  }, [_c('display-wrapper', {
    staticClass: "uk-flex--grow",
    attrs: {
      "displays": _vm.$store.state.nearbyDisplay.data
    }
  })], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0b3c84cd", module.exports)
  }
}

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('page', [_c('vue-pull-refresh', {
    staticClass: "uk-flex-column uk-flex f-h",
    attrs: {
      "on-refresh": _vm.onRefresh
    }
  }, [_c('div', {
    staticClass: "uk-flex-column uk-flex f-h"
  }, [_c('div', [_c('div', {
    staticClass: "uk-card uk-card-body uk-flex uk-flex-middle"
  }, [(_vm.$store.state.applications.data.length > 0) ? _c('h4', {
    staticClass: "uk-margin-remove"
  }, [_vm._v(_vm._s(_vm.$store.state.applications.data.length) + " Applications")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "uk-flex--grow"
  }), _vm._v(" "), _c('v-switch', {
    staticClass: "uk-margin-remove",
    attrs: {
      "primary": "",
      "success": "",
      "light": "",
      "hide-details": ""
    },
    nativeOn: {
      "click": function($event) {
        _vm.$store.actions.toogleAll(_vm.toogleAll)
      }
    },
    model: {
      value: (_vm.toogleAll),
      callback: function($$v) {
        _vm.toogleAll = $$v
      },
      expression: "toogleAll"
    }
  })], 1)]), _vm._v(" "), (_vm.$store.state.userError.error) ? _c('div', [_c('div', {
    staticClass: "uk-alert-danger uk-margin-remove",
    attrs: {
      "uk-alert": ""
    }
  }, [_c('a', {
    staticClass: "uk-alert-close",
    attrs: {
      "uk-close": ""
    },
    on: {
      "click": function($event) {
        _vm.$store.state.userError.error = false
      }
    }
  }), _vm._v(" " + _vm._s(_vm.$store.state.userError.msg) + "\n        ")])]) : _vm._e(), _vm._v(" "), _c('application-wrapper', {
    staticClass: "uk-flex--grow",
    attrs: {
      "applications": _vm.$store.state.applications.data
    }
  })], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0f8a044d", module.exports)
  }
}

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "uk-section uk-section-muted container--scrollable",
    attrs: {
      "id": "DisplayWrapper"
    }
  }, [_c('div', {
    staticClass: "uk-container"
  }, [_c('transition-group', {
    staticClass: "uk-flex uk-flex-column uk-grid-small",
    attrs: {
      "name": "custom-classes-transition",
      "enter-active-class": "animated fadeInUp",
      "uk-grid": ""
    }
  }, [_vm._l((_vm.displays), function(display) {
    return _c('div', {
      key: display.id
    }, [_c('display', {
      attrs: {
        "display": display
      }
    })], 1)
  }), _vm._v(" "), _c('div', {
    key: "dummy"
  }, [(_vm.$store.state.nearbyDisplay.isLoading) ? _c('display-dummy') : _vm._e()], 1)], 2), _vm._v(" "), (!_vm.$store.state.hasADisplayNearby() && !_vm.$store.state.nearbyDisplay.isLoading) ? _c('div', {
    key: "noDisplay",
    attrs: {
      "uk-cover": ""
    }
  }, [_c('h4', {
    staticClass: "uk-text-center"
  }, [_vm._v("  No display around ")])]) : _vm._e()], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-176f6192", module.exports)
  }
}

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "uk-flex-column uk-flex f-h"
  }, [_c('application-page'), _vm._v(" "), _c('screen-nearby')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1a476451", module.exports)
  }
}

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "uk-flex uk-flex-column f-h",
    attrs: {
      "id": "app"
    }
  }, [_c('transition', {
    attrs: {
      "name": _vm.transitionName
    }
  }, [_c('keep-alive', [_c('router-view', {
    staticClass: "uk-flex--grow"
  })], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1c2e6d3c", module.exports)
  }
}

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('div', {
    staticClass: "uk-card uk-card-body uk-card-default my-card__body uk-flex"
  }, [(_vm.$store.state.user.color) ? _c('div', {
    staticClass: "user-color uk-margin-small-right",
    style: ({
      'background-color': _vm.$store.state.user.color,
      'opacity': '0.5'
    })
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "uk-flex-wrap-stretch uk-width-expand"
  }, [_c('div', {
    staticClass: "uk-flex uk-flex-middle "
  }, [_c('div', {
    staticClass: "dummy-preference__text dummy-preference--background-color",
    style: ({
      'width': '50%'
    })
  })]), _vm._v(" "), _c('div', [_c('div', {
    staticClass: "uk-flex uk-flex-column uk-flex-middle uk-margin-small-top"
  }, _vm._l(([1]), function(index) {
    return _c('div', {
      staticClass: "uk-margin-small-bottom uk-flex uk-flex-middle",
      style: ({
        'width': '100%'
      })
    }, [_c('div', {
      staticClass: "dummy-preference__bus dummy-preference--background-color uk-margin-small-right"
    }), _vm._v(" "), _c('div', {
      staticClass: "dummy-preference__text--small dummy-preference--background-color",
      style: ({
        'width': '70%'
      })
    })])
  }))])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1e8ad5f6", module.exports)
  }
}

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.display.isNearby),
      expression: "display.isNearby"
    }],
    staticClass: "uk-card uk-card-body uk-card-default my-card__body"
  }, [_c('div', {
    staticClass: "uk-flex uk-flex-middle"
  }, [_c('div', {
    staticClass: "uk-margin-right"
  }, [_c('v-icon', {
    staticClass: "grey--text text--darken-2",
    attrs: {
      "large": ""
    }
  }, [_vm._v("desktop_windows")])], 1), _vm._v(" "), _c('div', {
    staticClass: "uk-flex uk-flex-column"
  }, [_c('h4', {
    staticClass: "uk-margin-remove"
  }, [_vm._v("Display " + _vm._s(_vm.display.id))]), _vm._v(" "), _c('div', {
    staticClass: "uk-flex uk-flex-column"
  }, _vm._l((_vm.display.apps), function(app) {
    return _c('div', {
      staticClass: "uk-flex uk-width-1-1"
    }, [_c('v-icon', {
      staticClass: "grey--text text--darken-2 uk-margin-small-right"
    }, [_vm._v(_vm._s(app.material_icon))]), _vm._v("\n          " + _vm._s(app.name) + "\n        ")], 1)
  }))])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-49f54438", module.exports)
  }
}

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "uk-card uk-card-body uk-card-default my-card__body"
  }, [_c('div', {
    staticClass: "uk-flex-column"
  }, [_c('div', {
    staticClass: "uk-flex uk-flex-middle"
  }, [_c('div', {
    staticClass: "uk-flex--grow uk-flex uk-flex-middle"
  }, [_c('div', {
    staticClass: "uk-margin-right"
  }, [_c('v-btn', {
    staticClass: "grey--text text--darken-2",
    attrs: {
      "icon": "",
      "large": ""
    },
    nativeOn: {
      "click": function($event) {
        _vm.$router.push({
          name: 'Preference',
          params: {
            src: _vm.getUrl(_vm.application)
          }
        })
      }
    }
  }, [_c('v-icon', {
    attrs: {
      "large": ""
    }
  }, [_vm._v(_vm._s(_vm.application.material_icon))])], 1)], 1), _vm._v(" "), _c('h4', {
    staticClass: "uk-margin-remove",
    on: {
      "click": function($event) {
        _vm.$router.push({
          name: 'Preference',
          params: {
            src: _vm.getUrl(_vm.application)
          }
        })
      }
    }
  }, [_vm._v(_vm._s(_vm.application.name.toUpperCase()))]), _vm._v(" "), _c('div', {
    staticClass: "uk-flex--grow"
  })]), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-right uk-flex-item-1"
  }, [_c('v-switch', {
    attrs: {
      "primary": "",
      "success": "",
      "light": "",
      "hide-details": ""
    },
    nativeOn: {
      "click": function($event) {
        _vm.$store.actions.toogleApp(_vm.application)
      }
    },
    model: {
      value: (_vm.application.toogle),
      callback: function($$v) {
        _vm.application.toogle = $$v
      },
      expression: "application.toogle"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "uk-flex"
  }, [_c('div', {
    staticClass: "uk-flex--grow"
  }), _vm._v(" "), _c('v-btn', {
    staticClass: "grey--text grey--darken-2",
    attrs: {
      "icon": ""
    }
  }, [(_vm.showDescription) ? _c('v-icon', {
    nativeOn: {
      "click": function($event) {
        _vm.showDescription = false
      }
    }
  }, [_vm._v("keyboard_arrow_up")]) : (!_vm.showDescription) ? _c('v-icon', {
    nativeOn: {
      "click": function($event) {
        _vm.showDescription = true
      }
    }
  }, [_vm._v("keyboard_arrow_down")]) : _vm._e()], 1)], 1), _vm._v(" "), (_vm.showDescription) ? _c('div', [(_vm.application.description_en) ? _c('div', [_c('h5', [_vm._v(_vm._s(_vm.application.description_en))])]) : _vm._e()]) : _vm._e()])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-54a5026f", module.exports)
  }
}

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('page', [_c('div', {
    staticClass: "uk-flex-column uk-flex-center uk-margin-top",
    attrs: {
      "id": "ColorPicker"
    }
  }, [_c('h4', {
    staticClass: "uk-text-center"
  }, [_vm._v("Pick a new color")]), _vm._v(" "), _c('choice-color', {
    attrs: {
      "colors": _vm.colors,
      "radius": "10em"
    },
    on: {
      "updateColor": _vm.updateColor
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "bottom-container--absolute uk-flex uk-flex-center",
    style: ({
      'bottom': '60px'
    })
  }, [_c('v-btn', {
    attrs: {
      "primary": "",
      "light": ""
    },
    nativeOn: {
      "click": function($event) {
        _vm.done()
      }
    }
  }, [_vm._v("Done")])], 1)], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-55e08649", module.exports)
  }
}

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "uk-card my-navigation__container uk-flex-center  uk-flex flex--center"
  }, [_c('div', [_c('v-btn', {
    staticClass: "grey--text text--darken-2 uk-margin-re",
    attrs: {
      "flat": ""
    },
    nativeOn: {
      "click": function($event) {
        _vm.$router.push({
          name: 'Home'
        })
      }
    }
  }, [_c('v-icon', {
    attrs: {
      "medium": ""
    },
    nativeOn: {
      "click": function($event) {
        _vm.$router.push({
          name: 'Home'
        })
      }
    }
  }, [_vm._v("home")])], 1)], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5861a70d", module.exports)
  }
}

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "uk-card uk-card-body uk-card-default my-card__body"
  }, [_c('div', {
    staticClass: "uk-flex uk-flex-middle"
  }, [_c('div', {
    staticClass: "uk-margin-right dummy__application__icon dummy--background-color"
  }), _vm._v(" "), _c('div', {
    staticClass: "uk-flex uk-flex-column uk-width-1-1"
  }, [_c('h4', {
    staticClass: "uk-margin-remove dummy__text dummy--background-color uk-width-1-2"
  }), _vm._v(" "), _c('div', {
    staticClass: "uk-flex uk-flex-column uk-margin-small-top uk-width-1-3"
  }, [_c('div', {
    staticClass: "dummy__text--small dummy--background-color"
  })])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-590c9500", module.exports)
  }
}

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "uk-flex uk-flex-column f-h"
  }, [_c('nav-bar'), _vm._v(" "), _vm._t("default"), _vm._v(" "), _c('Navigation')], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6a7c7a01", module.exports)
  }
}

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "pull-down-container"
  }, [_c('div', {
    staticClass: "pull-down-header",
    style: ({
      'height': _vm.pullDown.height + 'px'
    })
  }, [_c('div', {
    staticClass: "pull-down-content uk-section"
  }, [(this.pullDown.status == 2) ? _c('v-progress-circular', {
    staticClass: "primary--text",
    attrs: {
      "indeterminate": ""
    }
  }) : _vm._e(), _vm._v(" "), _c('i', {
    staticClass: "pull-down-content--icon",
    class: _vm.iconClass
  })], 1)]), _vm._v(" "), _vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6d2ba6b0", module.exports)
  }
}

/***/ }),
/* 244 */
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
  }, [(_vm.$route.name == 'Home' || 'Preference') ? _c('a', {
    staticClass: "uk-navbar-item uk-logo",
    on: {
      "click": function($event) {
        _vm.$router.push({
          name: 'Home'
        })
      }
    }
  }, [_vm._v("Tacita")]) : _c('v-btn', {
    staticClass: "white--text",
    attrs: {
      "icon": "icon"
    },
    nativeOn: {
      "click": function($event) {
        _vm.$router.go(-1)
      }
    }
  }, [_c('v-icon', [_vm._v("arrow_back")])], 1)], 1)]), _vm._v(" "), _c('div', {
    staticClass: "uk-navbar-right"
  }, [_c('ul', {
    staticClass: "uk-navbar-nav"
  }, [_c('li', {}, [_c('v-icon', {
    staticClass: "white--text uk-navbar-item",
    nativeOn: {
      "click": function($event) {
        _vm.$router.push({
          name: 'UserPreference'
        })
      }
    }
  }, [_vm._v("settings")])], 1)])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7194130d", module.exports)
  }
}

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "uk-flex uk-flex-column f-h"
  }, [_c('transition', {
    attrs: {
      "name": _vm.transitionName
    }
  }, [_c('keep-alive', [_c('router-view', {
    staticClass: "uk-flex--grow"
  })], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-76dc8376", module.exports)
  }
}

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "f-h uk-flex-column uk-flex"
  }, [_c('nav-bar', {
    attrs: {
      "home": true
    }
  }), _vm._v(" "), _c('iframe', {
    staticClass: "uk-flex--grow",
    attrs: {
      "src": _vm.src + _vm.$store.state.user.id,
      "scrolling": "yes"
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-8a0f3e66", module.exports)
  }
}

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "uk-card uk-card-body uk-card-default my-card__body uk-flex uk-flex-middle"
  }, [_c('div', {
    staticClass: "uk-margin-right dummy__application__icon dummy--background-color"
  }), _vm._v(" "), _c('div', {
    staticClass: "uk-width-1-2"
  }, [_c('div', {
    staticClass: "dummy__text--big dummy--background-color"
  })]), _vm._v(" "), _c('div', {
    staticClass: "uk-flex--grow"
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-96697cae", module.exports)
  }
}

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('page', [_c('div', {
    staticClass: "f-h uk-width-1-1 uk-container uk-background-muted uk-section-xsmall"
  }, [_c('div', {
    staticClass: "uk-flex-column uk-flex",
    attrs: {
      "uk-grid": ""
    }
  }, [_c('div', [_c('div', {
    staticClass: "uk-card uk-card-default uk-card-body my-card__body"
  }, [_c('div', [_c('h4', {
    staticClass: "uk-margin-remove"
  }, [_vm._v("Your color")]), _vm._v(" "), (_vm.$store.state.user.color) ? _c('div', [_c('h5', {
    staticClass: "uk-text-muted uk-margin-remove"
  }, [_vm._v("Click to modify")]), _vm._v(" "), _c('div', {
    staticClass: "user-color uk-width-1-3",
    style: ({
      'background-color': _vm.$store.state.user.color
    }),
    on: {
      "click": function($event) {
        _vm.$router.push({
          name: 'Color'
        })
      }
    }
  })]) : _c('div', [_c('h5', {
    staticClass: "uk-text-muted uk-margin-remove"
  }, [_vm._v("You have no color !")]), _vm._v(" "), _c('v-btn', {
    attrs: {
      "primary": "",
      "light": ""
    },
    nativeOn: {
      "click": function($event) {
        _vm.$router.push({
          name: 'Color'
        })
      }
    }
  }, [_vm._v("Select one")])], 1)])])])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a334db26", module.exports)
  }
}

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "uk-section uk-section-muted container--scrollable",
    attrs: {
      "id": "ApplicationWrapper"
    }
  }, [_c('div', {
    staticClass: "uk-container uk-margin-bottom "
  }, [_c('transition-group', {
    staticClass: "uk-flex uk-flex-column uk-grid-small",
    attrs: {
      "name": "custom-classes-transition",
      "enter-active-class": "animated fadeInUp",
      "uk-grid": ""
    }
  }, [_vm._l((2), function(n) {
    return (_vm.$store.state.applications.isLoading) ? _c('div', {
      key: n
    }, [_c('application-dummy')], 1) : _vm._e()
  }), _vm._v(" "), _vm._l((_vm.applications), function(app) {
    return _c('div', {
      key: app
    }, [_c('application', {
      attrs: {
        "application": app
      }
    })], 1)
  })], 2), _vm._v(" "), (_vm.$store.state.applications.data.length <= 0 && !_vm.$store.state.applications.isLoading) ? _c('div', {
    attrs: {
      "uk-cover": ""
    }
  }, [_c('h4', {
    staticClass: "uk-text-center"
  }, [_vm._v("No application found")])]) : _vm._e()], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f5442ee4", module.exports)
  }
}

/***/ }),
/* 250 */,
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(186);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("8fa2f1a8", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-02d90aad\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ScreenNearby.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-02d90aad\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ScreenNearby.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(187);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("7b72ee16", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-0b3c84cd\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DisplaysPage.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-0b3c84cd\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DisplaysPage.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(188);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("b5267e6a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-0f8a044d\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ApplicationPage.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-0f8a044d\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ApplicationPage.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(189);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("d3bdf4a2", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-176f6192\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DisplayWrapper.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-176f6192\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DisplayWrapper.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(190);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("3db6267e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-1a476451\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Home.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-1a476451\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Home.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(191);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("e0b173a8", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-1c2e6d3c\",\"scoped\":false,\"hasInlineConfig\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-1c2e6d3c\",\"scoped\":false,\"hasInlineConfig\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(192);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("6322b0e3", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-1e8ad5f6\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PreferenceDummy.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-1e8ad5f6\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PreferenceDummy.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(193);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("2b99bbe1", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-49f54438\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Display.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-49f54438\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Display.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(194);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("05f31db2", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-54a5026f\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Application.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-54a5026f\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Application.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(195);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("6583a5db", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-55e08649\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ColorPickerPage.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-55e08649\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ColorPickerPage.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(196);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("7488274b", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-5861a70d\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Navigation.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-5861a70d\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Navigation.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(197);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("00d1c491", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-590c9500\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DisplayDummy.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-590c9500\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DisplayDummy.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(198);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("66518f19", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-6a7c7a01\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Page.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-6a7c7a01\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Page.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(199);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("311672d3", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-6d2ba6b0\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./VuePullReflesh.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-6d2ba6b0\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./VuePullReflesh.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(200);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("868a0c72", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7194130d\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./NavBar.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7194130d\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./NavBar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(201);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("9d5f13c2", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-76dc8376\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PhoneApp.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-76dc8376\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PhoneApp.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(202);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("bc713184", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-8a0f3e66\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PreferencePage.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-8a0f3e66\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PreferencePage.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(203);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("63b95d22", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-96697cae\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ApplicationDummy.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-96697cae\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ApplicationDummy.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(204);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("872ebcd2", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-a334db26\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserPreferencePage.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-a334db26\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserPreferencePage.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(205);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("7cba76d4", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-f5442ee4\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ApplicationWrapper.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-f5442ee4\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ApplicationWrapper.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 271 */,
/* 272 */,
/* 273 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })
]),[128]);
//# sourceMappingURL=app.859132c2ce8a4de664e4.js.map