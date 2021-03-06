webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_js__ = __webpack_require__(13);




var BASE_URL = '';
var TRANSPORT_URL = '/transport/api';
var TACITA_URL = '/tacita/api';

/* harmony default export */ __webpack_exports__["a"] = ({
  fetchNearbyLocations: function fetchNearbyLocations() {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('' + BASE_URL + TRANSPORT_URL + '/station');
  },
  fetchLocationStationBoard: function fetchLocationStationBoard(location) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('' + BASE_URL + TRANSPORT_URL + '/station/' + location.id + '/stationboards');
  },
  fetchBusesForStation: function fetchBusesForStation(stationId) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('' + BASE_URL + TRANSPORT_URL + '/station/' + stationId + '/buses');
  },

  "users": {
    getMe: function getMe(email) {
      return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('' + BASE_URL + TACITA_URL + '/user/?email=' + email);
    },
    fetchUserPreferences: function fetchUserPreferences(userId) {
      return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('' + BASE_URL + TRANSPORT_URL + '/preference?userId=' + userId);
    }
  },
  'bus': {
    getPassList: function getPassList(bus) {
      return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('' + BASE_URL + TRANSPORT_URL + '/bus/' + bus.bus_id + '/passList?direction=' + bus.to);
    }
  },
  "user": {
    getMe: function getMe(email) {
      return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('' + BASE_URL + TACITA_URL + '/user/?email=' + email);
    },
    getMeById: function getMeById(userId) {
      return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('' + BASE_URL + TACITA_URL + '/user/' + userId);
    },
    fetchUserPreferences: function fetchUserPreferences(userId) {
      return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('' + BASE_URL + TRANSPORT_URL + '/preference?userId=' + userId);
    }
  },
  "stationboards": {
    featchStationboards: function featchStationboards(_ref) {
      var stationId = _ref.stationId,
          busId = _ref.busId;

      return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('api/stationboard/?stationId=' + stationId + '&busId=' + busId);
    }
  },
  "preference": {
    addPreference: function addPreference(preference) {
      return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('' + BASE_URL + TRANSPORT_URL + '/preference', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, preference));
    },
    updatePreference: function updatePreference(preference) {
      return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.put('' + BASE_URL + TRANSPORT_URL + '/preference', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, preference));
    },
    editPreference: function editPreference(preference) {
      return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.put('' + BASE_URL + TRANSPORT_URL + '/preference', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, preference));
    },
    removePreference: function removePreference(preferenceId, userId) {
      return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.delete('' + BASE_URL + TRANSPORT_URL + '/preference/' + preferenceId + '?userId=' + userId);
    }
  },
  'display': {
    sendAppToDisplay: function sendAppToDisplay(displayId, appId) {
      return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.put('' + BASE_URL + TACITA_URL + '/display/' + displayId + '/app/' + appId);
    },
    fetchDisplay: function fetchDisplay(displayId) {
      return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('' + BASE_URL + TACITA_URL + '/display/' + displayId);
    }
  },
  'application': {
    fetchApplications: function fetchApplications() {
      return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('' + BASE_URL + TACITA_URL + '/application');
    },
    fetchApplication: function fetchApplication(app) {
      return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('' + BASE_URL + TACITA_URL + '/application/' + app.id);
    }
  }
});

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__);



/* harmony default export */ __webpack_exports__["a"] = ({
  getCurrentPosition: function getCurrentPosition() {
    var position = null;
    return new __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(function (position) {
        resolve(position);
      });
    });
  },
  showMap: function showMap(coords, station) {
    var result = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, station.googleMaps);

    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer();

    var origin = coords.latitude + ',' + coords.longitude;
    var destination = 'bus station lugano' + station.name.toLowerCase();
    var travelMode = 'WALKING';

    var request = {
      origin: origin,
      destination: destination,
      travelMode: travelMode
    };

    directionsService.route(request, function (result, status) {
      var here = new (Function.prototype.bind.apply(google.maps.LatLng, [null].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(coords))))();
      var map = new google.maps.Map(document.getElementById(station.id + 'map'), {
        zoom: 13,
        center: {
          lat: coords.latitude,
          lng: coords.longitude
        },

        clickableIcons: false
      });
      var marker = new google.maps.Marker({
        position: {
          lat: coords.latitude,
          lng: coords.longitude
        },
        map: map
      });
      directionsDisplay.setMap(map);
      directionsDisplay.setDirections(result);
    });
  }
});

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(406)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(247),
  /* template */
  __webpack_require__(374),
  /* scopeId */
  "data-v-2dc0945c",
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/transportWebServer/transportWebApp/src/components/stationCard/stationCard.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] stationCard.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2dc0945c", Component.options)
  } else {
    hotAPI.reload("data-v-2dc0945c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(416)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(235),
  /* template */
  __webpack_require__(384),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/transportWebServer/transportWebApp/src/components/CreatePreferencePage/Resource/ResourceTransitionWrapper.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ResourceTransitionWrapper.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-477c5bd1", Component.options)
  } else {
    hotAPI.reload("data-v-477c5bd1", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(402)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(236),
  /* template */
  __webpack_require__(370),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/transportWebServer/transportWebApp/src/components/CreatePreferencePage/SelectorWrapper.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] SelectorWrapper.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-226ce802", Component.options)
  } else {
    hotAPI.reload("data-v-226ce802", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(414)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(241),
  /* template */
  __webpack_require__(382),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/transportWebServer/transportWebApp/src/components/connectionCard/connectionCard.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] connectionCard.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-44e2d1f0", Component.options)
  } else {
    hotAPI.reload("data-v-44e2d1f0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(403)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(234),
  /* template */
  __webpack_require__(371),
  /* scopeId */
  "data-v-226f7b46",
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/transportWebServer/transportWebApp/src/components/CreatePreferencePage/Resource/Resource.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Resource.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-226f7b46", Component.options)
  } else {
    hotAPI.reload("data-v-226f7b46", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Displaypage_DisplayPage_vue__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Displaypage_DisplayPage_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_Displaypage_DisplayPage_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_CreatePreferencePage_CustomizationApp_vue__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_CreatePreferencePage_CustomizationApp_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_CreatePreferencePage_CustomizationApp_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_CreatePreferencePage_StationSelectionPage_StationSelectionPage_vue__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_CreatePreferencePage_StationSelectionPage_StationSelectionPage_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_CreatePreferencePage_StationSelectionPage_StationSelectionPage_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_CreatePreferencePage_BusSelectionPage_BusSelectionPage_vue__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_CreatePreferencePage_BusSelectionPage_BusSelectionPage_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_CreatePreferencePage_BusSelectionPage_BusSelectionPage_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_CreatePreferencePage_CreatePreferenceHomePage_CreatePreferenceHomePage_vue__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_CreatePreferencePage_CreatePreferenceHomePage_CreatePreferenceHomePage_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_CreatePreferencePage_CreatePreferenceHomePage_CreatePreferenceHomePage_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_CreatePreferencePage_DirectionSelectionPage_DirectionSelectionPage_vue__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_CreatePreferencePage_DirectionSelectionPage_DirectionSelectionPage_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__components_CreatePreferencePage_DirectionSelectionPage_DirectionSelectionPage_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_CreatePreferencePage_EditPreferencePage_EditPreferencePage_vue__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_CreatePreferencePage_EditPreferencePage_EditPreferencePage_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__components_CreatePreferencePage_EditPreferencePage_EditPreferencePage_vue__);













__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/',
    name: 'App',
    component: __WEBPACK_IMPORTED_MODULE_2__App___default.a,
    children: [{
      name: 'display',
      path: '/display/:id',
      component: __WEBPACK_IMPORTED_MODULE_3__components_Displaypage_DisplayPage_vue___default.a
    }, {
      path: '/app/home/:userId',
      name: 'app',
      component: __WEBPACK_IMPORTED_MODULE_4__components_CreatePreferencePage_CustomizationApp_vue___default.a,
      children: [{
        path: '',
        name: 'preferenceHome',
        component: __WEBPACK_IMPORTED_MODULE_7__components_CreatePreferencePage_CreatePreferenceHomePage_CreatePreferenceHomePage_vue___default.a
      }, {
        path: 'station',
        name: 'station',
        component: __WEBPACK_IMPORTED_MODULE_5__components_CreatePreferencePage_StationSelectionPage_StationSelectionPage_vue___default.a
      }, {
        path: 'direction',
        name: 'direction',
        component: __WEBPACK_IMPORTED_MODULE_8__components_CreatePreferencePage_DirectionSelectionPage_DirectionSelectionPage_vue___default.a
      }, {
        path: 'bus',
        name: 'bus',
        component: __WEBPACK_IMPORTED_MODULE_6__components_CreatePreferencePage_BusSelectionPage_BusSelectionPage_vue___default.a
      }, {
        path: 'edit',
        name: 'edit',
        component: __WEBPACK_IMPORTED_MODULE_9__components_CreatePreferencePage_EditPreferencePage_EditPreferencePage_vue___default.a
      }]
    }]
  }]
}));

/***/ }),
/* 49 */,
/* 50 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(411)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(220),
  /* template */
  __webpack_require__(379),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/transportWebServer/transportWebApp/src/App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] App.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3af42142", Component.options)
  } else {
    hotAPI.reload("data-v-3af42142", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);



var FixedSizeStack = function () {
  function FixedSizeStack(maxSize, allowDuplicate) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, FixedSizeStack);

    this.maxSize = maxSize;
    this.allowDuplicate = allowDuplicate || false;
    this._data = [];
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(FixedSizeStack, [{
    key: "getData",
    value: function getData() {
      return this._data;
    }
  }, {
    key: "findItem",
    value: function findItem(item) {
      return this._data.indexOf(item);
    }
  }, {
    key: "isItemInStack",
    value: function isItemInStack(item) {
      return this.findItem(item) >= 0;
    }
  }, {
    key: "removeItem",
    value: function removeItem(item) {
      this._data.splice(this.findItem(item), 1);
    }
  }, {
    key: "getSize",
    value: function getSize() {
      return this._data.length;
    }
  }, {
    key: "addItem",
    value: function addItem(item) {
      if (this.isItemInStack(item) && !this.allowDuplicate) return;
      if (this.getSize() >= this.maxSize) this.pop();
      this._data.push(item);

      item.removable = item.removable == null ? true : item.removable;
    }
  }, {
    key: "popFront",
    value: function popFront() {
      return this._data.shift();
    }
  }, {
    key: "pop",
    value: function pop() {
      return this._data.pop();
    }
  }]);

  return FixedSizeStack;
}();

/* harmony default export */ __webpack_exports__["a"] = (FixedSizeStack);

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
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
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
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(407)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(224),
  /* template */
  __webpack_require__(375),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/transportWebServer/transportWebApp/src/components/Caurosel/Slide.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Slide.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2f6a5edf", Component.options)
  } else {
    hotAPI.reload("data-v-2f6a5edf", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(413)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(231),
  /* template */
  __webpack_require__(381),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/transportWebServer/transportWebApp/src/components/CreatePreferencePage/Preference/Preference.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Preference.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-433098fd", Component.options)
  } else {
    hotAPI.reload("data-v-433098fd", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(420)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(248),
  /* template */
  __webpack_require__(388),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/transportWebServer/transportWebApp/src/components/stationCard/stationCardInfo/stationCardInfo.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] stationCardInfo.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-92a42b7a", Component.options)
  } else {
    hotAPI.reload("data-v-92a42b7a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 194 */,
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_flue_vue__ = __webpack_require__(11);
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
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__api_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_flue_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_flue_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_flue_vue__);










var ConnectionStore = function (_Store) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(ConnectionStore, _Store);

  function ConnectionStore() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, ConnectionStore);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ConnectionStore.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(ConnectionStore)).call(this));

    _this.state.connections = [];
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(ConnectionStore, [{
    key: 'fetchBusesSuccess',
    value: function fetchBusesSuccess(_ref) {
      var data = _ref.data;

      this.state.connections = data.buses;
      this.state.connections.forEach(function (conn) {
        return __WEBPACK_IMPORTED_MODULE_6_vue___default.a.set(conn, 'toogle', false);
      });

      var preference = this.sStore.state.preference;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(preference.buses), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var connInPref = _step.value;
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(this.state.connections), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var conn = _step2.value;

              if (conn.id == connInPref.id) __WEBPACK_IMPORTED_MODULE_6_vue___default.a.set(conn, 'toogle', true);
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
    }
  }, {
    key: 'onFetchPassListSuccess',
    value: function onFetchPassListSuccess(_ref2) {
      var data = _ref2.data,
          bus = _ref2.bus;

      bus.passList = data;
      bus.passList.sort(function (a, b) {
        return a.departure_timestamp < b.departure_timestamp;
      });
    }
  }, {
    key: 'reduce',
    value: function reduce(action) {
      var _this2 = this;

      this.reduceMap(action, {
        FETCH_BUSES_SUCCESS: this.fetchBusesSuccess,
        FETCH_BUS_PASS_LIST_SUCCESS: this.onFetchPassListSuccess,
        ADD_PREFERENCE_SUCCESS: function ADD_PREFERENCE_SUCCESS() {
          return _this2.state.connections.forEach(function (connection) {
            return connection.toogle = false;
          });
        }
      });
    }
  }, {
    key: 'actions',
    value: function actions(dispatcher) {
      return {
        getPassList: function getPassList(bus) {
          return __WEBPACK_IMPORTED_MODULE_7__api_js__["a" /* default */].bus.getPassList(bus).then(function (_ref3) {
            var data = _ref3.data;
            return dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_8_flue_vue__["Action"]('FETCH_BUS_PASS_LIST_SUCCESS', { data: data, bus: bus }));
          });
        },
        fetchBusesFromStation: function fetchBusesFromStation(stationsId) {
          return __WEBPACK_IMPORTED_MODULE_7__api_js__["a" /* default */].fetchBusesForStation(stationsId).then(function (data) {
            return dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_8_flue_vue__["Action"]('FETCH_BUSES_SUCCESS', data));
          });
        }
      };
    }
  }]);

  return ConnectionStore;
}(__WEBPACK_IMPORTED_MODULE_8_flue_vue__["Store"]);

var connectionStore = new ConnectionStore();

/* harmony default export */ __webpack_exports__["a"] = (connectionStore);

/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_flue_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_flue_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_flue_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_js__ = __webpack_require__(13);











var DisplayStore = function (_Store) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(DisplayStore, _Store);

  function DisplayStore() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, DisplayStore);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (DisplayStore.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(DisplayStore)).call(this));

    _this.state.display = {};
    _this.state.usersCache = {};
    _this.state.coords = {};

    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(DisplayStore, [{
    key: 'shouldDisplayPreference',
    value: function shouldDisplayPreference(data) {
      return data.displayId == this.state.display.id;
    }
  }, {
    key: 'onUserNearby',
    value: function onUserNearby(data) {
      if (this.shouldDisplayPreference(data)) {
        this.state.usersCache[data.userId] = data.color;
        this.sStore.actions.displayUserPreferences(data);
      }
    }
  }, {
    key: 'onFetchDisplaySuccess',
    value: function onFetchDisplaySuccess(_ref) {
      var display = _ref.display;

      this.state.display = display;
      this.sStore.actions.sendAppToDisplay(this.state.display.id, 2);
      this.state.display.defaultStation = { number: 8595133, id: 1, name: 'Lugano, Università' };
    }
  }, {
    key: 'onDisplayChangeApp',
    value: function onDisplayChangeApp(data) {
      var _this2 = this;

      if (data.appId == this.state.display.app.id) return;
      __WEBPACK_IMPORTED_MODULE_6__api_js__["a" /* default */].application.fetchApplication({ id: data.appId }).then(function (_ref2) {
        var data = _ref2.data;
        return window.location.href = window.location.origin + ('/' + data.url) + ('/#/display/' + _this2.state.display.id);
      });
    }
  }, {
    key: 'reduce',
    value: function reduce(action) {
      this.reduceMap(action, {
        USER_NEARBY: this.onUserNearby,
        FETCH_DISPLAY_SUCCESS: this.onFetchDisplaySuccess,
        DISPLAY_CHANGE_APP: this.onDisplayChangeApp
      });
    }
  }, {
    key: 'actions',
    value: function actions(dispatcher, ctx) {
      return {
        fetchDisplay: function fetchDisplay(displayId) {
          __WEBPACK_IMPORTED_MODULE_6__api_js__["a" /* default */].display.fetchDisplay(displayId).then(function (_ref3) {
            var data = _ref3.data;

            dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_7_flue_vue__["Action"]("FETCH_DISPLAY_SUCCESS", { display: data }));
          });
        },
        displayUserPreferences: function displayUserPreferences(user) {
          __WEBPACK_IMPORTED_MODULE_6__api_js__["a" /* default */].user.fetchUserPreferences(user.userId).then(function (res) {
            dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_7_flue_vue__["Action"]("DISPLAY_USER_PREFERENCE", { userPreferences: res.data, color: user.color }));
          });
        },
        sendAppToDisplay: function sendAppToDisplay(displayId, appId) {
          ctx.state.display.app = { id: appId };
          __WEBPACK_IMPORTED_MODULE_6__api_js__["a" /* default */].display.sendAppToDisplay(displayId, appId);
        }
      };
    }
  }]);

  return DisplayStore;
}(__WEBPACK_IMPORTED_MODULE_7_flue_vue__["Store"]);

var displayStore = new DisplayStore();
/* harmony default export */ __webpack_exports__["a"] = (displayStore);

/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_axios__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__googleMaps_js__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_flue_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_flue_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_flue_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__FixedSizeStack_js__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__api_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__locations_js__ = __webpack_require__(254);


















var config = {
  USER_NOTIFICATION_LIFE: 60 * 1000,
  STATIONBOARD_UPLOAD_EVERY: 5000,
  MAX_OPEN_LOCATION: 2,
  OPEN_LOCATION_LIFE: 10000,
  OPEN_LOCATION_AUTODESTRUCTION: false
};

var LocationStore = function (_Store) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(LocationStore, _Store);

  function LocationStore() {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, LocationStore);

    var _this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (LocationStore.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(LocationStore)).call(this));

    _this.state.locationsCache = {};
    _this.state.preferencesCache = {};
    _this.state.locations = [];
    _this.state.openedLocations = [];
    _this.state.displayLocationsStack = new __WEBPACK_IMPORTED_MODULE_12__FixedSizeStack_js__["a" /* default */](2, false);
    _this.state.isLoadingNearbyLocations = false;
    _this.state.usersLocations = [];
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(LocationStore, [{
    key: 'getDefaultLocation',
    value: function getDefaultLocation() {
      return this.state.locationsCache[this.state.display.defaultStation.number];
    }
  }, {
    key: 'getAvailableConnections',
    value: function getAvailableConnections(location, user) {
      if (!user) return location.stationboard;
      var filteredStationboard = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default()(location.avariableConnections), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var availableConnetion = _step.value;
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default()(location.stationboard), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var connection = _step2.value;

              if (availableConnetion == connection.number) {
                filteredStationboard.push(connection);

                break;
              }
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

      return filteredStationboard;
    }
  }, {
    key: 'expireLocation',
    value: function expireLocation(location) {
      clearTimeout(location.timeOutId);
    }
  }, {
    key: 'setAutoDestruction',
    value: function setAutoDestruction(callback) {
      setTimeout(function () {
        callback();
      }, config.USER_NOTIFICATION_LIFE);
    }
  }, {
    key: 'displayUserPrefererence',
    value: function displayUserPrefererence(pref, color) {
      var _this2 = this;

      var location = this.state.locationsCache[pref.station.id];
      if (!location) return;
      this.displayLocation({ location: location }, false, false, false);

      pref.buses.forEach(function (prefBus) {
        location.stationboard.forEach(function (bus) {
          if (prefBus.number == bus.number && prefBus.to == bus.to) {

            __WEBPACK_IMPORTED_MODULE_8_vue___default.a.set(bus, 'triggered', true);

            if (bus.users == undefined) __WEBPACK_IMPORTED_MODULE_8_vue___default.a.set(bus, 'users', []);
            if (bus.colors == undefined) __WEBPACK_IMPORTED_MODULE_8_vue___default.a.set(bus, 'colors', []);

            var userIndex = bus.users.indexOf(pref.user_id);
            var _color = _this2.sStore.state.usersCache[pref.user_id];

            if (userIndex < 0) {
              bus.colors.push(_color);
              bus.users.push(pref.user_id);
            }

            bus.colors[userIndex] = _color;

            _this2.setAutoDestruction(function () {
              bus.users.splice(bus.users.indexOf(pref.user_id), 1);
              bus.colors.splice(bus.colors.indexOf(_color), 1);
              bus.triggered = bus.users.length > 0;
            });
          }
        });
      });
    }
  }, {
    key: 'onDisplayUserPreferences',
    value: function onDisplayUserPreferences(_ref) {
      var _this3 = this;

      var userPreferences = _ref.userPreferences,
          color = _ref.color;

      if (userPreferences.length <= 0) return;
      this.state.preferencesCache[userPreferences[0].user_id] = userPreferences;

      userPreferences.forEach(function (pref) {
        return _this3.displayUserPrefererence(pref, color);
      });
    }
  }, {
    key: 'feedbackIfLocationIsOpen',
    value: function feedbackIfLocationIsOpen(location) {
      if (!location.openFeedback) {
        __WEBPACK_IMPORTED_MODULE_8_vue___default.a.set(location, 'openFeedback', true);

        setTimeout(function () {
          return location.openFeedback = false;
        }, 1000);
      }
    }
  }, {
    key: 'displayLocation',
    value: function displayLocation(_ref2, destroy, putIntoStack, shake) {
      var location = _ref2.location;

      var _this4 = this;

      if (shake == undefined) shake = true;
      __WEBPACK_IMPORTED_MODULE_8_vue___default.a.set(location, 'open', true);
      if (location.number == this.state.display.defaultStation.number) {
        if (shake) this.feedbackIfLocationIsOpen(location);
        return;
      }

      if (this.state.openedLocations.indexOf(location) >= 0) {
        if (shake) this.feedbackIfLocationIsOpen(location);
        return;
      }

      if (this.state.openedLocations.length == config.MAX_OPEN_LOCATION) this.state.openedLocations.shift();

      this.state.openedLocations.push(location);

      __WEBPACK_IMPORTED_MODULE_8_vue___default.a.set(location, 'open', true);

      location.timeOutId = setInterval(function () {
        _this4.sStore.actions.fetchLocationStationBoard(location);
      }, config.STATIONBOARD_UPLOAD_EVERY);
    }
  }, {
    key: 'fetchNearbyLocationsLoading',
    value: function fetchNearbyLocationsLoading() {
      this.state.isLoadingNearbyLocations = true;
    }
  }, {
    key: 'addDistanceFromHereToLocation',
    value: function addDistanceFromHereToLocation(location) {
      __WEBPACK_IMPORTED_MODULE_9__utils_js__["a" /* default */].getCurrentPosition().then(function (_ref3) {
        var coords = _ref3.coords;
        return coords.latitude + ',' + coords.longitude;
      }).then(function (here) {
        return __WEBPACK_IMPORTED_MODULE_10__googleMaps_js__["a" /* default */].getDirectionFrom(here, 'bus station lugano' + location.name.toLowerCase());
      }).then(function (res) {
        __WEBPACK_IMPORTED_MODULE_8_vue___default.a.set(location, 'googleMaps', res);
        __WEBPACK_IMPORTED_MODULE_8_vue___default.a.set(location, 'duration', res.routes[0].legs[0].duration);
      });
    }
  }, {
    key: 'fetchNearbyLocationsSuccess',
    value: function fetchNearbyLocationsSuccess(_ref4) {
      var _this5 = this;

      var locations = _ref4.locations;

      this.state.isLoadingNearbyLocations = false;
      this.state.locations = locations;
      locations.forEach(function (location) {
        if (location.number == _this5.state.display.defaultStation.number) {
          location.timeOutId = setInterval(function () {
            _this5.sStore.actions.fetchLocationStationBoard(location);
          }, config.STATIONBOARD_UPLOAD_EVERY);
        }
        _this5.addDistanceFromHereToLocation(location);

        __WEBPACK_IMPORTED_MODULE_8_vue___default.a.set(location, "stationboard", []);

        __WEBPACK_IMPORTED_MODULE_8_vue___default.a.set(_this5.state.locationsCache, [location.id], location);

        if (location.number == _this5.state.display.defaultStation.number) {
          _this5.state.display.defaultStation = location;

          _this5.displayLocation({ location: location }, false, false, false);
          location.default = true;
        } else if (!config.OPEN_LOCATION_AUTODESTRUCTION && _this5.state.openedLocations.length < config.MAX_OPEN_LOCATION) {
          _this5.displayLocation({ location: location }, false, false);
        }
      });

      this.sStore.actions.fetchLocationsStationBoards(this.state.locations);
    }
  }, {
    key: 'fetchLocationStationBoardLoading',
    value: function fetchLocationStationBoardLoading(_ref5) {
      var location = _ref5.location;

      location.isLoadingStationBoard = true;
    }
  }, {
    key: 'fetchLocationStationBoardSuccess',
    value: function fetchLocationStationBoardSuccess(_ref6) {
      var location = _ref6.location,
          stationboard = _ref6.stationboard;

      location.isLoadingStationBoard = false;
      if (!stationboard) return;

      stationboard.sort(function (a, b) {
        return a.stop.departure_timestamp > b.stop.departure_timestamp;
      });

      if (location.stationboard.length <= 0) location.stationboard = stationboard;else {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default()(stationboard), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var newStationBoard = _step3.value;
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
              for (var _iterator4 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default()(location.stationboard), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var oldStationBoard = _step4.value;

                if (newStationBoard.number == oldStationBoard.number && newStationBoard.to == oldStationBoard.to) {
                  oldStationBoard.stop = newStationBoard.stop;
                  newStationBoard = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(newStationBoard, oldStationBoard);
                }
              }
            } catch (err) {
              _didIteratorError4 = true;
              _iteratorError4 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion4 && _iterator4.return) {
                  _iterator4.return();
                }
              } finally {
                if (_didIteratorError4) {
                  throw _iteratorError4;
                }
              }
            }
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        location.stationboard = stationboard;
      }
    }
  }, {
    key: 'onFetchDisplaySuccess',
    value: function onFetchDisplaySuccess(_ref7) {
      var display = _ref7.display;

      this.sStore.actions.fetchNearbyLocations();
    }
  }, {
    key: 'reduce',
    value: function reduce(action) {
      this.reduceMap(action, {
        FETCH_NEARBY_LOCATIONS_LOADING: this.fetchNearbyLocationsLoading,
        FETCH_NEARBY_LOCATIONS_SUCCESS: this.fetchNearbyLocationsSuccess,
        FETCH_LOCATION_STATIONBOARD_LOADING: this.fetchLocationStationBoardLoading,
        FETCH_LOCATION_STATIONBOARD_SUCCESS: this.fetchLocationStationBoardSuccess,
        FETCH_LOCATION_STATIONBOARD_ERROR: function FETCH_LOCATION_STATIONBOARD_ERROR(_ref8) {
          var location = _ref8.location;
          location.isLoadingStationBoard = false;
        },
        PUT_LOCATION_IN_DISPLAY_STACK: this.displayLocation,
        DISPLAY_USER_PREFERENCE: this.onDisplayUserPreferences,
        FETCH_DISPLAY_SUCCESS: this.onFetchDisplaySuccess
      });
    }
  }, {
    key: 'actions',
    value: function actions(dispatcher, context) {
      return {
        fetchNearbyLocations: function fetchNearbyLocations() {
          dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_11_flue_vue__["Action"]("FETCH_NEARBY_LOCATIONS_LOADING"));
          __WEBPACK_IMPORTED_MODULE_13__api_js__["a" /* default */].fetchNearbyLocations().then(function (_ref9) {
            var data = _ref9.data;

            data.forEach(function (location) {
              return location.name = location.name.replace('Lugano,', '');
            });
            return data;
          }).then(function (data) {
            dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_11_flue_vue__["Action"]("FETCH_NEARBY_LOCATIONS_SUCCESS", { locations: data }));
          });
        },
        fetchLocationsStationBoards: function fetchLocationsStationBoards(locations) {
          var _this6 = this;

          dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_11_flue_vue__["Action"]("FETCH_LOCATIONS_STATIONBOARDS_LOADING"));
          locations.forEach(function (location) {
            return _this6.fetchLocationStationBoard(location);
          });
        },
        fetchLocationStationBoard: function fetchLocationStationBoard(location) {
          dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_11_flue_vue__["Action"]("FETCH_LOCATION_STATIONBOARD_LOADING", { location: location }));
          __WEBPACK_IMPORTED_MODULE_13__api_js__["a" /* default */].fetchLocationStationBoard(location).then(function (_ref10) {
            var data = _ref10.data;

            dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_11_flue_vue__["Action"]("FETCH_LOCATION_STATIONBOARD_SUCCESS", { stationboard: data.stationboard, location: location }));
          }).catch(function (err) {
            dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_11_flue_vue__["Action"]('FETCH_LOCATION_STATIONBOARD_ERROR', { location: location }));
          });
        },
        putLocationInDisplayStack: function putLocationInDisplayStack(location) {
          dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_11_flue_vue__["Action"]("PUT_LOCATION_IN_DISPLAY_STACK", { location: location }));
        }
      };
    }
  }]);

  return LocationStore;
}(__WEBPACK_IMPORTED_MODULE_11_flue_vue__["Store"]);

var locationStore = new LocationStore();

/* harmony default export */ __webpack_exports__["a"] = (locationStore);

/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_axios__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__api_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_uikit__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_uikit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_uikit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__router_js__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_flue_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_flue_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_flue_vue__);
















var PreferenceStore = function (_Store) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(PreferenceStore, _Store);

  function PreferenceStore() {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, PreferenceStore);

    var _this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (PreferenceStore.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(PreferenceStore)).call(this));

    _this.state.preference = { station: {}, buses: [] };

    _this.state.isInEditMode = false;
    _this.state.originalPreference = {};

    _this.state.currentStationboards = [];
    _this.state.preferenceError = {};

    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(PreferenceStore, [{
    key: 'initializeCurrentPreference',
    value: function initializeCurrentPreference() {
      this.state.preference = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(this.state.preference, { station: {}, buses: [] });
      this.toggleOffAll();
    }
  }, {
    key: 'toggleOffAll',
    value: function toggleOffAll() {
      this.state.preference.station.toogle = false;
      this.state.locations.forEach(function (location) {
        return __WEBPACK_IMPORTED_MODULE_7_vue___default.a.set(location, 'toogle', false);
      });
      this.state.currentStationboards.forEach(function (stationboard) {
        return stationboard.toogle = false;
      });
      this.state.connections.forEach(function (connection) {
        return connection.toogle = false;
      });
    }
  }, {
    key: 'findBusInPreference',
    value: function findBusInPreference(toFind) {
      var buses = this.state.preference.buses;
      var len = buses.length;

      for (var i = 0; i < len; i++) {
        if (toFind.id == buses[i].id) return i;
      }

      return -1;
    }
  }, {
    key: 'removeBusToPreference',
    value: function removeBusToPreference(_ref) {
      var bus = _ref.bus;

      var toRemoveIndex = this.findBusInPreference(bus);
      var buses = this.state.preference.buses;
      if (toRemoveIndex >= 0) {
        buses.splice(toRemoveIndex, 1);
      }
    }
  }, {
    key: 'addBusToPreference',
    value: function addBusToPreference(_ref2) {
      var bus = _ref2.bus;

      var buses = this.state.preference.buses;
      if (this.findBusInPreference(bus) < 0) {
        buses.push(bus);
      }
    }
  }, {
    key: 'addDirectionToPreference',
    value: function addDirectionToPreference(_ref3) {
      var stationboard = _ref3.stationboard;

      var busId = stationboard.bus_id;
      var to = stationboard.to;
      var buses = this.state.preference.buses;
      var shouldAdd = true;

      buses.forEach(function (bus) {
        if (bus.id == busId && (bus.to == undefined || bus.to == to)) {
          __WEBPACK_IMPORTED_MODULE_7_vue___default.a.set(bus, 'to', to);
          shouldAdd = false;
        }
      });

      if (shouldAdd) {
        var newBus = { id: busId, number: stationboard.bus.number, to: to };
        this.state.preference.buses.push(newBus);
      }
    }
  }, {
    key: 'removeDirectionToPreference',
    value: function removeDirectionToPreference(_ref4) {
      var stationboard = _ref4.stationboard;

      var busToRemove = { id: stationboard.bus_id, number: stationboard.bus.number, to: stationboard.to };
      var buses = this.state.preference.buses;

      for (var i = 0; i < buses.length; i++) {
        var currBus = buses[i];
        if (currBus.id == busToRemove.id && currBus.to == busToRemove.to) {
          buses.splice(i, 1);
          break;
        }
      }
    }
  }, {
    key: 'addStationToPreference',
    value: function addStationToPreference(_ref5) {
      var station = _ref5.station;

      if (station.id == this.state.preference.station.id) __WEBPACK_IMPORTED_MODULE_11__router_js__["a" /* default */].push({ name: 'bus' });
      station.buses.forEach(function (bus) {
        return bus.toogle = false;
      });
      this.initializeCurrentPreference();
      station.toogle = true;
      __WEBPACK_IMPORTED_MODULE_7_vue___default.a.set(this.state.preference, 'station', station);
      __WEBPACK_IMPORTED_MODULE_11__router_js__["a" /* default */].push({ name: 'bus' });
    }
  }, {
    key: 'onPreferenceSuccessNotification',
    value: function onPreferenceSuccessNotification() {
      var msg = this.state.isInEditMode ? "Preference changed" : 'New preference added';
    }
  }, {
    key: 'addPreferenceSuccess',
    value: function addPreferenceSuccess() {
      this.toggleOffAll();
      this.initializeCurrentPreference();

      this.onPreferenceSuccessNotification();
      __WEBPACK_IMPORTED_MODULE_11__router_js__["a" /* default */].push({ name: 'app' });
    }
  }, {
    key: 'updatePreferenceSuccess',
    value: function updatePreferenceSuccess() {
      __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(this.state.originalPreference, this.state.preference);

      this.initializeCurrentPreference();
      this.toggleOffAll();

      this.onPreferenceSuccessNotification();

      this.state.isInEditMode = false;
      __WEBPACK_IMPORTED_MODULE_11__router_js__["a" /* default */].push({ name: 'app' });
    }
  }, {
    key: 'addPreferenceFailure',
    value: function addPreferenceFailure(_ref6) {
      var err = _ref6.err;

      this.state.preferenceError = err;
    }
  }, {
    key: 'tooglePreferenceEdit',
    value: function tooglePreferenceEdit(_ref7) {
      var preference = _ref7.preference;

      __WEBPACK_IMPORTED_MODULE_11__router_js__["a" /* default */].push({ name: 'edit', params: { id: preference.id } });
      this.state.preference = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, preference);
      this.state.isInEditMode = !this.state.isInEditMode;
    }
  }, {
    key: 'onGoBackFromEditMode',
    value: function onGoBackFromEditMode() {
      this.state.isInEditMode = false;
      __WEBPACK_IMPORTED_MODULE_11__router_js__["a" /* default */].go(-1);
    }
  }, {
    key: 'reduce',
    value: function reduce(action) {
      var _reduceMap;

      this.reduceMap(action, (_reduceMap = {
        ADD_BUS_TO_PREFERENCE: this.addBusToPreference,
        REMOVE_BUS_TO_PREFERENCE: this.removeBusToPreference,
        ADD_DIRECTION_TO_PREFERENCE: this.addDirectionToPreference,
        REMOVE_DIRECTION_TO_PREFERENCE: this.removeDirectionToPreference,
        ADD_STATION_TO_PREFERENCE: this.addStationToPreference,
        UPDATE_PREFERENCE_SUCCESS: this.updatePreferenceSuccess,
        ADD_PREFERENCE_FAILURE: this.addPreferenceFailure,
        TOOGLE_PREFERENCE_EDIT: this.tooglePreferenceEdit
      }, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_reduceMap, 'UPDATE_PREFERENCE_SUCCESS', this.updatePreferenceSuccess), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_reduceMap, 'ADD_PREFERENCE_SUCCESS', this.addPreferenceSuccess), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_reduceMap, 'GO_BACK_FROM_EDIT_MODE', this.onGoBackFromEditMode), _reduceMap));
    }
  }, {
    key: 'actions',
    value: function actions(dispatcher, ctx) {
      return {
        addBusToPreference: function addBusToPreference(bus) {
          dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_12_flue_vue__["Action"]("ADD_BUS_TO_PREFERENCE", { bus: bus }));
        },
        removeBusToPreference: function removeBusToPreference(bus) {
          dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_12_flue_vue__["Action"]("REMOVE_BUS_TO_PREFERENCE", { bus: bus }));
        },
        addDirectionToPreference: function addDirectionToPreference(stationboard) {
          dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_12_flue_vue__["Action"]("ADD_DIRECTION_TO_PREFERENCE", { stationboard: stationboard }));
        },
        removeDirectionToPreference: function removeDirectionToPreference(stationboard) {
          dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_12_flue_vue__["Action"]("REMOVE_DIRECTION_TO_PREFERENCE", { stationboard: stationboard }));
        },
        addStationToPreference: function addStationToPreference(station) {
          dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_12_flue_vue__["Action"]("ADD_STATION_TO_PREFERENCE", { station: station }));
        },
        tooglePreferenceEdit: function tooglePreferenceEdit(preference) {
          dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_12_flue_vue__["Action"]('TOOGLE_PREFERENCE_EDIT', { preference: preference }));
        },
        goBackFromEditMode: function goBackFromEditMode() {
          dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_12_flue_vue__["Action"]('GO_BACK_FROM_EDIT_MODE'));
        }
      };
    }
  }]);

  return PreferenceStore;
}(__WEBPACK_IMPORTED_MODULE_12_flue_vue__["Store"]);

var preferenceStore = new PreferenceStore();

/* harmony default export */ __webpack_exports__["a"] = (preferenceStore);

/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_flue_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_flue_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_flue_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_js__ = __webpack_require__(13);











var TransportDisplayStore = function (_Store) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(TransportDisplayStore, _Store);

  function TransportDisplayStore() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, TransportDisplayStore);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (TransportDisplayStore.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(TransportDisplayStore)).call(this));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(TransportDisplayStore, [{
    key: 'onFetchDisplaySuccess',
    value: function onFetchDisplaySuccess(_ref) {
      var _this2 = this;

      var display = _ref.display;

      __WEBPACK_IMPORTED_MODULE_8__utils_js__["a" /* default */].getCurrentPosition().then(function (_ref2) {
        var coords = _ref2.coords;

        __WEBPACK_IMPORTED_MODULE_5_vue___default.a.set(_this2.state.display, 'coords', {});
        __WEBPACK_IMPORTED_MODULE_5_vue___default.a.set(_this2.state.display.coords, 'latitude', coords.latitude);
        __WEBPACK_IMPORTED_MODULE_5_vue___default.a.set(_this2.state.display.coords, 'longitude', coords.longitude);
      });
    }
  }, {
    key: 'reduce',
    value: function reduce(action) {
      this.reduceMap(action, {
        FETCH_DISPLAY_SUCCESS: this.onFetchDisplaySuccess
      });
    }
  }, {
    key: 'actions',
    value: function actions() {
      return {};
    }
  }]);

  return TransportDisplayStore;
}(__WEBPACK_IMPORTED_MODULE_7_flue_vue__["Store"]);

var transportDisplayStore = new TransportDisplayStore();

/* harmony default export */ __webpack_exports__["a"] = (transportDisplayStore);

/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_values__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_values___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_values__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_axios__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_flue_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_flue_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_flue_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__api_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__FixedSizeStack_js__ = __webpack_require__(56);
















var UserStore = function (_Store) {
  __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default()(UserStore, _Store);

  function UserStore() {
    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default()(this, UserStore);

    var _this = __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn___default()(this, (UserStore.__proto__ || __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of___default()(UserStore)).call(this));

    _this.state.user = { id: null, preferences: { data: [], loading: false } };
    _this.state.showConfirmationModal = false;
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default()(UserStore, [{
    key: 'formatPreference',
    value: function formatPreference(preference) {
      var cache = {};
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default()(preference.buses), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var bus = _step.value;

          if (cache[bus.id] == undefined) cache[bus.id] = { id: bus.id, number: bus.number, directions: [] };
          cache[bus.id].directions.push({ to: bus.to });
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

      return preference.buses = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_values___default()(cache);
    }
  }, {
    key: 'fetchUserPreferenceSuccess',
    value: function fetchUserPreferenceSuccess(_ref) {
      var preferences = _ref.preferences;

      preferences.reverse();

      this.state.user.preferences.data = preferences;
      this.state.user.preferences.loading = false;
    }
  }, {
    key: 'removePreferenceSuccess',
    value: function removePreferenceSuccess(_ref2) {
      var preference = _ref2.preference;

      var userPreferences = this.state.user.preferences.data;
      userPreferences.splice(userPreferences.indexOf(preference), 1);
    }
  }, {
    key: 'updatePreferenceSuccess',
    value: function updatePreferenceSuccess(_ref3) {
      var preference = _ref3.preference;

      this.state.showConfirmationModal = false;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default()(this.state.user.preferences.data), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var pref = _step2.value;

          if (pref.id == preference.id) pref = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(pref, preference);
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

      router.push({ name: 'home', params: { userId: this.state.user.id } });
    }
  }, {
    key: 'addPreferenceSuccess',
    value: function addPreferenceSuccess(_ref4) {
      var preference = _ref4.preference;


      this.state.showConfirmationModal = false;
      this.state.user.preferences.data.unshift(preference);
    }
  }, {
    key: 'onGetMeSuccess',
    value: function onGetMeSuccess(_ref5) {
      var data = _ref5.data;

      this.state.user.id = data.id;
      this.sStore.actions.fetchUserPreferences();
    }
  }, {
    key: 'reduce',
    value: function reduce(action) {
      var _this2 = this;

      this.reduceMap(action, {
        FETCH_USER_PREFERENCE_LOADING: function FETCH_USER_PREFERENCE_LOADING() {
          _this2.state.user.preferences.loading = true;
        },
        FETCH_USER_PREFERENCE_SUCCESS: this.fetchUserPreferenceSuccess,
        FETCH_USER_PREFERENCE_FAILURE: function FETCH_USER_PREFERENCE_FAILURE() {
          _this2.state.user.preferences.loading = false;
        },

        ADD_PREFERENCE_SUCCESS: this.addPreferenceSuccess,
        REMOVE_PREFERENCE_SUCCESS: this.removePreferenceSuccess,
        GET_ME_SUCCESS: this.onGetMeSuccess
      });
    }
  }, {
    key: 'actions',
    value: function actions(dispatcher, ctx) {
      return {
        fetchUserPreferences: function fetchUserPreferences() {
          dispatcher.dispatch({ type: "FETCH_USER_PREFERENCE_LOADING" });
          __WEBPACK_IMPORTED_MODULE_12__api_js__["a" /* default */].users.fetchUserPreferences(ctx.state.user.id).then(function (_ref6) {
            var data = _ref6.data;

            dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_11_flue_vue__["Action"]("FETCH_USER_PREFERENCE_SUCCESS", { preferences: data }));
          }).catch(function (err) {
            return dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_11_flue_vue__["Action"]("FETCH_USER_PREFERENCE_FAILURE", err));
          });
        },
        getMe: function getMe(email) {
          __WEBPACK_IMPORTED_MODULE_12__api_js__["a" /* default */].users.getMe(email).then(function (_ref7) {
            var data = _ref7.data;

            dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_11_flue_vue__["Action"]("GET_ME_SUCCESS", { user: data }));
          });
        },
        getMeById: function getMeById(userId) {
          __WEBPACK_IMPORTED_MODULE_12__api_js__["a" /* default */].user.getMeById(userId).then(function (data) {
            dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_11_flue_vue__["Action"]("GET_ME_SUCCESS", data));
          });
        },
        updatePreference: function updatePreference() {
          dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_11_flue_vue__["Action"]("UPDATE_PREFERENCE_LOADING"));

          var preference = {
            stationId: ctx.state.preference.station.id,
            buses: ctx.state.preference.buses,
            userId: ctx.state.user.id
          };
          __WEBPACK_IMPORTED_MODULE_12__api_js__["a" /* default */].preference.updatePreference(preference).then(function () {
            dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_11_flue_vue__["Action"]("UPDATE_PREFERENCE_SUCCESS"));
          }).catch(function (_ref8) {
            var response = _ref8.response;

            var err = response.data;
            dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_11_flue_vue__["Action"]("UPDATE_PREFERENCE_FAILURE", { err: err }));
          });
        },
        addPreference: function addPreference() {
          dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_11_flue_vue__["Action"]("ADD_PREFERENCE_LOADING"));
          var newPreference = {
            stationId: ctx.state.preference.station.id,
            buses: ctx.state.preference.buses,
            userId: ctx.state.user.id
          };
          __WEBPACK_IMPORTED_MODULE_12__api_js__["a" /* default */].preference.addPreference(newPreference).then(function (_ref9) {
            var data = _ref9.data;

            dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_11_flue_vue__["Action"]("ADD_PREFERENCE_SUCCESS", { preference: data }));
          });
        },
        deletePreference: function deletePreference(preference) {
          __WEBPACK_IMPORTED_MODULE_12__api_js__["a" /* default */].preference.removePreference(preference.id, ctx.state.user.id).then(function (_ref10) {
            var data = _ref10.data;
            return dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_11_flue_vue__["Action"]("REMOVE_PREFERENCE_SUCCESS", { preference: preference }));
          });
        }
      };
    }
  }]);

  return UserStore;
}(__WEBPACK_IMPORTED_MODULE_11_flue_vue__["Store"]);

var userStore = new UserStore();
/* harmony default export */ __webpack_exports__["a"] = (userStore);

/***/ }),
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuetify__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuetify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuetify__);





__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuetify___default.a);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'App'
});

/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_autoplay__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_debounce__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Navigation_vue__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Navigation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Navigation_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Pagination_vue__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Pagination_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Pagination_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Slide_vue__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Slide_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Slide_vue__);








/* harmony default export */ __webpack_exports__["default"] = ({
  name: "carousel",
  beforeUpdate: function beforeUpdate() {
    this.computeCarouselWidth();
  },

  components: {
    Navigation: __WEBPACK_IMPORTED_MODULE_2__Navigation_vue___default.a,
    Pagination: __WEBPACK_IMPORTED_MODULE_3__Pagination_vue___default.a,
    Slide: __WEBPACK_IMPORTED_MODULE_4__Slide_vue___default.a
  },
  data: function data() {
    return {
      browserWidth: null,
      carouselWidth: null,
      currentPage: 0,
      dragOffset: 0,
      dragStartX: 0,
      mousedown: false,
      slideCount: 0
    };
  },

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_autoplay__["a" /* default */]],
  props: {
    easing: {
      type: String,
      default: "ease"
    },

    minSwipeDistance: {
      type: Number,
      default: 8
    },

    navigationClickTargetSize: {
      type: Number,
      default: 8
    },

    navigationEnabled: {
      type: Boolean,
      default: false
    },

    navigationNextLabel: {
      type: String,
      default: "▶"
    },

    navigationPrevLabel: {
      type: String,
      default: "◀"
    },

    paginationActiveColor: {
      type: String,
      default: "#000000"
    },

    paginationColor: {
      type: String,
      default: "#efefef"
    },

    paginationEnabled: {
      type: Boolean,
      default: true
    },

    paginationPadding: {
      type: Number,
      default: 10
    },

    paginationSize: {
      type: Number,
      default: 10
    },

    perPage: {
      type: Number,
      default: 2
    },

    perPageCustom: {
      type: Array
    },

    scrollPerPage: {
      type: Boolean,
      default: false
    },

    speed: {
      type: Number,
      default: 500
    }
  },
  computed: {
    breakpointSlidesPerPage: function breakpointSlidesPerPage() {
      if (!this.perPageCustom) {
        return this.perPage;
      }

      var breakpointArray = this.perPageCustom;
      var width = this.browserWidth;

      var breakpoints = breakpointArray.sort(function (a, b) {
        return a[0] > b[0] ? -1 : 1;
      });

      var matches = breakpoints.filter(function (breakpoint) {
        return width >= breakpoint[0];
      });

      var match = matches[0] && matches[0][1];

      return match || this.perPage;
    },
    canAdvanceForward: function canAdvanceForward() {
      return this.currentPage < this.pageCount - 1;
    },
    canAdvanceBackward: function canAdvanceBackward() {
      return this.currentPage > 0;
    },
    currentPerPage: function currentPerPage() {
      return !this.perPageCustom || this.$isServer ? this.perPage : this.breakpointSlidesPerPage;
    },
    currentOffset: function currentOffset() {
      var page = this.currentPage;
      var width = this.slideWidth;
      var dragged = this.dragOffset;

      var offset = this.scrollPerPage ? page * width * this.currentPerPage : page * width;

      return (offset + dragged) * -1;
    },
    isHidden: function isHidden() {
      return this.carouselWidth <= 0;
    },
    pageCount: function pageCount() {
      var slideCount = this.slideCount;
      var perPage = this.currentPerPage;

      if (this.scrollPerPage) {
        var pages = Math.ceil(slideCount / perPage);
        return pages < 1 ? 1 : pages;
      }

      return slideCount - (this.currentPerPage - 1);
    },
    slideWidth: function slideWidth() {
      var width = this.carouselWidth;
      var perPage = this.currentPerPage;

      return width / perPage;
    },
    transitionStyle: function transitionStyle() {
      return this.speed / 1000 + "s " + this.easing + " transform";
    }
  },
  methods: {
    advancePage: function advancePage(direction) {
      if (direction && direction === "backward" && this.canAdvanceBackward) {
        this.goToPage(this.currentPage - 1);
      } else if ((!direction || direction && direction !== "backward") && this.canAdvanceForward) {
        this.goToPage(this.currentPage + 1);
      }
    },
    attachMutationObserver: function attachMutationObserver() {
      var _this = this;

      var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

      if (MutationObserver) {
        var config = {
          attributes: true,
          data: true
        };
        this.mutationObserver = new MutationObserver(function () {
          _this.$nextTick(function () {
            _this.computeCarouselWidth();
          });
        });
        if (this.$parent.$el) {
          this.mutationObserver.observe(this.$parent.$el, config);
        }
      }
    },
    detachMutationObserver: function detachMutationObserver() {
      if (this.mutationObserver) {
        this.mutationObserver.disconnect();
      }
    },
    getBrowserWidth: function getBrowserWidth() {
      this.browserWidth = window.innerWidth;
      return this.browserWidth;
    },
    getCarouselWidth: function getCarouselWidth() {
      this.carouselWidth = this.$el && this.$el.clientWidth || 0;
      return this.carouselWidth;
    },
    getSlideCount: function getSlideCount() {
      this.slideCount = this.$slots && this.$slots.default && this.$slots.default.filter(function (slot) {
        return slot.tag && slot.tag.indexOf("slide") > -1;
      }).length || 0;
    },
    goToPage: function goToPage(page) {
      if (page >= 0 && page <= this.pageCount) {
        this.currentPage = page;
        this.$emit("pageChange", this.currentPage);
      }
    },
    handleMousedown: function handleMousedown(e) {
      if (!e.touches) {
        e.preventDefault();
      }

      this.mousedown = true;
      this.dragStartX = "ontouchstart" in window ? e.touches[0].clientX : e.clientX;
    },
    handleMouseup: function handleMouseup() {
      this.mousedown = false;
      this.dragOffset = 0;
    },
    handleMousemove: function handleMousemove(e) {},
    computeCarouselWidth: function computeCarouselWidth() {
      this.getSlideCount();
      this.getBrowserWidth();
      this.getCarouselWidth();
      this.setCurrentPageInBounds();
    },
    setCurrentPageInBounds: function setCurrentPageInBounds() {
      if (!this.canAdvanceForward) {
        var setPage = this.pageCount - 1;
        this.currentPage = setPage >= 0 ? setPage : 0;
      }
    }
  },
  mounted: function mounted() {
    if (!this.$isServer) {
      window.addEventListener("resize", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_debounce__["a" /* default */])(this.computeCarouselWidth, 16));
    }

    this.attachMutationObserver();
    this.computeCarouselWidth();
  },
  destroyed: function destroyed() {
    if (!this.$isServer) {
      this.detachMutationObserver();
      window.removeEventListener("resize", this.getBrowserWidth);
      if ("ontouchstart" in window) {
        this.$el.removeEventListener("touchmove", this.handleMousemove);
      } else {
        this.$el.removeEventListener("mousemove", this.handleMousemove);
      }
    }
  }
});

/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "navigation",
  data: function data() {
    return {
      parentContainer: this.$parent
    };
  },

  props: {
    clickTargetSize: {
      type: Number,
      default: 8
    },

    nextLabel: {
      type: String,
      default: "▶"
    },

    prevLabel: {
      type: String,
      default: "◀"
    }
  },
  computed: {
    canAdvanceForward: function canAdvanceForward() {
      return this.parentContainer.canAdvanceForward || false;
    },
    canAdvanceBackward: function canAdvanceBackward() {
      return this.parentContainer.canAdvanceBackward || false;
    }
  },
  methods: {
    triggerPageAdvance: function triggerPageAdvance(direction) {
      if (direction) {
        this.$parent.advancePage(direction);
      } else {
        this.$parent.advancePage();
      }
    }
  }
});

/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "pagination",
  data: function data() {
    return {
      parentContainer: this.$parent
    };
  }
});

/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "slide",
  data: function data() {
    return {
      width: null
    };
  }
});

/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stationCard_stationCard_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stationCard_stationCard_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__stationCard_stationCard_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connectionCard_connectionCard_vue__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connectionCard_connectionCard_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__connectionCard_connectionCard_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SelectorWrapper_vue__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SelectorWrapper_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__SelectorWrapper_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Resource_Resource_vue__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Resource_Resource_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Resource_Resource_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Resource_ResourceTransitionWrapper_vue__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Resource_ResourceTransitionWrapper_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Resource_ResourceTransitionWrapper_vue__);










/* harmony default export */ __webpack_exports__["default"] = ({
  name: "BusSelectionPage",
  components: {
    StationCard: __WEBPACK_IMPORTED_MODULE_1__stationCard_stationCard_vue___default.a,
    ConnectionCard: __WEBPACK_IMPORTED_MODULE_2__connectionCard_connectionCard_vue___default.a,
    Resource: __WEBPACK_IMPORTED_MODULE_5__Resource_Resource_vue___default.a,
    ResourceTransitionWrapper: __WEBPACK_IMPORTED_MODULE_6__Resource_ResourceTransitionWrapper_vue___default.a,
    SelectorWrapper: __WEBPACK_IMPORTED_MODULE_4__SelectorWrapper_vue___default.a
  },
  data: function data() {
    return {
      buses: [],
      show: false,
      error: {
        hasError: false,
        msg: "Select at least one bus"
      }
    };
  },

  computed: {
    showError: function showError() {
      return this.$store.state.preference.buses.length == 0 && this.show;
    }
  },
  created: function created() {
    this.fetchBuses();
  },

  watch: {
    '$route': function $route(newRoute) {
      if (newRoute.name == 'bus') this.fetchBuses();
    }
  },
  methods: {
    isToogled: function isToogled(bus) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(this.$store.state.preference.buses), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var connInPref = _step.value;
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(this.buses), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var conn = _step2.value;

              if (conn.id == connInPref.id) return true;
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

      return false;
    },
    toogle: function toogle(bus) {

      if (this.$store.PreferenceStore.findBusInPreference(bus) >= 0) {
        this.$store.actions.removeBusToPreference(bus);
        bus.toogle = false;
      } else {
        this.$store.actions.addBusToPreference(bus);
        bus.toogle = true;
      }
    },
    fetchBuses: function fetchBuses() {
      var stationId = this.$store.state.preference.station.id;

      this.$store.actions.fetchBusesFromStation(stationId);
    },
    next: function next() {
      this.show = true;
      var isAtLeastOneBusSelected = this.$store.state.preference.buses.length > 0;
      this.error.hasError = !isAtLeastOneBusSelected;
      if (isAtLeastOneBusSelected) {
        this.show = false;
        this.$router.push({
          name: 'direction'
        });
      }
    }
  }
});

/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PreferenceDeleteConfirmationModal_PreferenceDeleteConfirmationModal_vue__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PreferenceDeleteConfirmationModal_PreferenceDeleteConfirmationModal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__PreferenceDeleteConfirmationModal_PreferenceDeleteConfirmationModal_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UserPreference_UserPreferenceDummy_vue__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UserPreference_UserPreferenceDummy_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__UserPreference_UserPreferenceDummy_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__HomeWrapper_vue__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__HomeWrapper_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__HomeWrapper_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Resource_ResourceTransitionWrapper_vue__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Resource_ResourceTransitionWrapper_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Resource_ResourceTransitionWrapper_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Preference_Preference_vue__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Preference_Preference_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Preference_Preference_vue__);








/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CreatePreferenceHomePage",
  components: {
    PreferenceDeleteConfirmationModal: __WEBPACK_IMPORTED_MODULE_0__PreferenceDeleteConfirmationModal_PreferenceDeleteConfirmationModal_vue___default.a,
    UserPreferenceDummy: __WEBPACK_IMPORTED_MODULE_1__UserPreference_UserPreferenceDummy_vue___default.a,
    HomeWrapper: __WEBPACK_IMPORTED_MODULE_2__HomeWrapper_vue___default.a,
    Preference: __WEBPACK_IMPORTED_MODULE_4__Preference_Preference_vue___default.a,
    ResourceTransitionWrapper: __WEBPACK_IMPORTED_MODULE_3__Resource_ResourceTransitionWrapper_vue___default.a
  },
  watch: {
    '$route': function $route(newRoute) {
      if (newRoute.path == '/preference/') {
        this.$store.PreferenceStore.initializeCurrentPreference();
      }
    }
  },
  data: function data() {
    return {
      toogle: false
    };
  },
  methods: {
    tooglePrefereceEdit: function tooglePrefereceEdit(preference) {
      this.$store.actions.toogleEditMode(preference);
      this.$router.push({
        name: 'edit'
      });
    }
  }
});

/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PreferenceConfirmationModal_PreferenceConfirmationModal_vue__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PreferenceConfirmationModal_PreferenceConfirmationModal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__PreferenceConfirmationModal_PreferenceConfirmationModal_vue__);



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CustomizationApp",
  components: {
    PreferenceConfirmationModal: __WEBPACK_IMPORTED_MODULE_0__PreferenceConfirmationModal_PreferenceConfirmationModal_vue___default.a
  },
  mounted: function mounted() {
    this.$store.actions.getMeById(this.$route.params.userId);
    this.$store.actions.fetchNearbyLocations();
  },
  data: function data() {
    return {};
  }
});

/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_values__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_values___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_values__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SelectorWrapper_vue__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SelectorWrapper_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__SelectorWrapper_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Resource_Resource_vue__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Resource_Resource_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Resource_Resource_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Resource_ResourceTransitionWrapper_vue__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Resource_ResourceTransitionWrapper_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Resource_ResourceTransitionWrapper_vue__);









/* harmony default export */ __webpack_exports__["default"] = ({
  name: "DirectionSelectionPage",
  components: {
    Resource: __WEBPACK_IMPORTED_MODULE_4__Resource_Resource_vue___default.a,
    ResourceTransitionWrapper: __WEBPACK_IMPORTED_MODULE_5__Resource_ResourceTransitionWrapper_vue___default.a,
    SelectorWrapper: __WEBPACK_IMPORTED_MODULE_3__SelectorWrapper_vue___default.a
  },
  watch: {
    '$route': function $route(newRoute) {
      this.show = false;
      if (newRoute.name == 'direction') {
        this.getDirections();
      }
    }
  },
  data: function data() {
    return {
      stationboards: [],
      toogle: false,
      show: false,
      directionSelected: 0,
      error: {
        hasError: false,
        msg: "Select at least one direction"
      }
    };
  },

  computed: {
    showError: function showError() {

      return this.getDirectionsSelected() <= 0 && this.show;
    }
  },
  created: function created() {
    this.getDirections();
  },

  methods: {
    getDirectionsSelected: function getDirectionsSelected() {
      return this.$store.state.preference.buses.filter(function (bus) {
        return bus.to;
      }).length;
    },
    getDirections: function getDirections() {
      var _this = this;

      var stationId = this.$store.state.preference.station.id;
      this.stationboards = [];
      var removeDuplicateFromArray = function removeDuplicateFromArray(array, key) {
        var cache = {};
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(array), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            cache[item[key]] = item;
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

        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_values___default()(cache);
      };
      var uniqueBuses = removeDuplicateFromArray(this.$store.state.preference.buses, 'id');

      uniqueBuses.forEach(function (bus) {
        __WEBPACK_IMPORTED_MODULE_2__api_js__["a" /* default */].stationboards.featchStationboards({
          stationId: stationId,
          busId: bus.id
        }).then(function (_ref) {
          var data = _ref.data;

          data.forEach(function (stationboard) {
            _this.$set(stationboard, 'toogle', false);
            _this.$store.state.preference.buses.forEach(function (bus) {
              if (bus.to == stationboard.to) {
                stationboard.toogle = true;
                ++_this.directionSelected;
              }
            });
          });
          _this.stationboards = _this.stationboards.concat(data);
        });
      });
    },
    toogleStationboard: function toogleStationboard(stationboard) {
      if (stationboard.toogle) {
        this.$store.actions.removeDirectionToPreference(stationboard);
      } else {
        this.show = false;
        this.$store.actions.addDirectionToPreference(stationboard);
      }
      stationboard.toogle = !stationboard.toogle;
    },
    next: function next() {
      this.show = true;
      if (this.$store.state.isInEditMode) this.$router.go(-1);else {
        var isAtLeastOnedirectionSelected = this.getDirectionsSelected() > 0;
        this.error.hasError = !isAtLeastOnedirectionSelected;
        if (isAtLeastOnedirectionSelected) {
          this.$store.state.showConfirmationModal = true;
        }
      }
    }
  }
});

/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "",
  data: function data() {
    return {

      currPref: this.$store.state.currentPreference

    };
  },
  methods: {
    back: function back() {
      this.$store.actions.toogleEditMode();
      this.$router.go(-1);
    },
    done: function done() {
      this.$store.actions.updatePreference();
    }
  }
});

/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SelectorWrapper_vue__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SelectorWrapper_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__SelectorWrapper_vue__);



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "HomeWrapper"
});

/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Preference",
  props: ["preference", 'preview'],
  data: function data() {
    return {};
  }
});

/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Preference_Preference_vue__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Preference_Preference_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Preference_Preference_vue__);



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "",
  components: {
    Preference: __WEBPACK_IMPORTED_MODULE_0__Preference_Preference_vue___default.a
  },
  data: function data() {
    return {};
  }
});

/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PreferenceDeleteConfirmationModal",
  data: function data() {
    return {};
  }
});

/***/ }),
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "",
  props: ['toogle'],
  data: function data() {
    return {};
  }
});

/***/ }),
/* 235 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ResourceTransitionWrapper",
  data: function data() {
    return {};
  }
});

/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "",
  props: ['title', 'subtitle'],
  data: function data() {
    return {};
  }
});

/***/ }),
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stationCard_stationCard_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stationCard_stationCard_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__stationCard_stationCard_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stationCard_StationCardDummy_vue__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stationCard_StationCardDummy_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__stationCard_StationCardDummy_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SelectorWrapper_vue__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SelectorWrapper_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__SelectorWrapper_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Resource_Resource_vue__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Resource_Resource_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Resource_Resource_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Resource_ResourceTransitionWrapper_vue__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Resource_ResourceTransitionWrapper_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Resource_ResourceTransitionWrapper_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_js__ = __webpack_require__(9);











/* harmony default export */ __webpack_exports__["default"] = ({
  name: "StationSelectionPage",
  components: {
    StationCard: __WEBPACK_IMPORTED_MODULE_1__stationCard_stationCard_vue___default.a,
    StationCardDummy: __WEBPACK_IMPORTED_MODULE_2__stationCard_StationCardDummy_vue___default.a,
    Resource: __WEBPACK_IMPORTED_MODULE_4__Resource_Resource_vue___default.a,
    ResourceTransitionWrapper: __WEBPACK_IMPORTED_MODULE_5__Resource_ResourceTransitionWrapper_vue___default.a,
    SelectorWrapper: __WEBPACK_IMPORTED_MODULE_3__SelectorWrapper_vue___default.a

  },
  data: function data() {
    return {
      show: false,
      currStation: null,
      error: {
        hasError: false,
        msg: "Select one station"
      }
    };
  },

  computed: {
    showError: function showError() {
      return this.currStation == null && this.show;
    }
  },
  created: function created() {
    this.toogleIfInPreference();
  },

  watch: {
    '$route': function $route() {
      this.toogleIfInPreference();
    }
  },
  methods: {
    addStation: function addStation(station) {
      this.show = false;
      this.currStation = station;
      this.$store.actions.addStationToPreference(station);
    },
    toogleIfInPreference: function toogleIfInPreference() {
      var preferenceStation = this.$store.state.preference.station;
      this.$set(location, 'toogle', false);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(this.$store.state.locations), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _location = _step.value;

          if (_location.id == preferenceStation.id) this.$set(_location, 'toogle', true);
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
    },
    next: function next() {
      this.show = true;
      this.error.hasError = this.currStation == null;
      if (!this.error.hasError) {
        this.$router.push({
          name: 'bus'
        });
      }
    }
  }
});

/***/ }),
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "UserPreferenceDummy"
});

/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__connectionCard_connectionCard_vue__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__connectionCard_connectionCard_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__connectionCard_connectionCard_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stationCard_stationCard_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stationCard_stationCard_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__stationCard_stationCard_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aroundMe_aroundMe_vue__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aroundMe_aroundMe_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__aroundMe_aroundMe_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__defaultInformation_defaultInformation_vue__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__defaultInformation_defaultInformation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__defaultInformation_defaultInformation_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__volatileLocations_volatileLocations_vue__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__volatileLocations_volatileLocations_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__volatileLocations_volatileLocations_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__usersContent_usersContent_vue__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__usersContent_usersContent_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__usersContent_usersContent_vue__);










/* harmony default export */ __webpack_exports__["default"] = ({
  name: "DisplayPage",
  components: {
    connectionCard: __WEBPACK_IMPORTED_MODULE_0__connectionCard_connectionCard_vue___default.a,
    stationCard: __WEBPACK_IMPORTED_MODULE_1__stationCard_stationCard_vue___default.a,
    aroundMe: __WEBPACK_IMPORTED_MODULE_2__aroundMe_aroundMe_vue___default.a,
    volatileLocations: __WEBPACK_IMPORTED_MODULE_4__volatileLocations_volatileLocations_vue___default.a,
    defaultInformation: __WEBPACK_IMPORTED_MODULE_3__defaultInformation_defaultInformation_vue___default.a,
    usersContent: __WEBPACK_IMPORTED_MODULE_5__usersContent_usersContent_vue___default.a
  },
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    var displayId = this.$route.params.id;
    this.$store.actions.fetchDisplay(displayId);
  }
});

/***/ }),
/* 240 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stationCard_stationCard_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stationCard_stationCard_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stationCard_stationCard_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Caurosel_Carousel_vue__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Caurosel_Carousel_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Caurosel_Carousel_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Caurosel_Slide_vue__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Caurosel_Slide_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Caurosel_Slide_vue__);






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'aroundMe',
  components: {
    stationCard: __WEBPACK_IMPORTED_MODULE_0__stationCard_stationCard_vue___default.a,
    Carousel: __WEBPACK_IMPORTED_MODULE_1__Caurosel_Carousel_vue___default.a,
    Slide: __WEBPACK_IMPORTED_MODULE_2__Caurosel_Slide_vue___default.a
  },
  data: function data() {
    return {
      stations: []
    };
  }
});

/***/ }),
/* 241 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__connectionCardInfo_connectionCardInfo_vue__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__connectionCardInfo_connectionCardInfo_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__connectionCardInfo_connectionCardInfo_vue__);






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'connectionCard',
  props: ["connection", "behavior", "location"],
  components: {
    connectionCardInfo: __WEBPACK_IMPORTED_MODULE_1__connectionCardInfo_connectionCardInfo_vue___default.a
  },
  data: function data() {
    return {
      LEAVING_OFF_SET_SECONDS: 60,
      LEAVING_ANIMATION: 'pulse'
    };
  },

  methods: {
    parseArrivalTime: function parseArrivalTime(date) {
      return __WEBPACK_IMPORTED_MODULE_0_moment___default()(this.connection.stop.departure).format("HH:mm");
    },
    getArrivalTimeFromNow: function getArrivalTimeFromNow() {
      var duration = __WEBPACK_IMPORTED_MODULE_0_moment___default.a.duration(__WEBPACK_IMPORTED_MODULE_0_moment___default()(this.connection.stop.departure).diff(__WEBPACK_IMPORTED_MODULE_0_moment___default()(new Date())));

      return duration;
    }
  },
  computed: {
    arrivesNow: function arrivesNow() {
      var arrivalTimeFromNowInSeconds = this.getArrivalTimeFromNow().minutes() * 60 + this.getArrivalTimeFromNow().seconds();
      var geoLocationAvailable = this.location.duration != undefined;

      var shouldLeave = arrivalTimeFromNowInSeconds <= this.LEAVING_OFF_SET_SECONDS;

      if (geoLocationAvailable) {
        shouldLeave = arrivalTimeFromNowInSeconds - 60 * 5 <= this.LEAVING_OFF_SET_SECONDS;
      }

      return true;
    }
  }
});

/***/ }),
/* 242 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'transportCardInfo',
  components: {}
});

/***/ }),
/* 243 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stationCard_stationCard_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stationCard_stationCard_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stationCard_stationCard_vue__);




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'defaultInformation',
  components: {
    stationCard: __WEBPACK_IMPORTED_MODULE_0__stationCard_stationCard_vue___default.a
  },
  data: function data() {
    return {
      maxLocations: 1
    };
  }
});

/***/ }),
/* 244 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "BusPassList",
  props: ['bus'],
  data: function data() {
    return {};
  },
  methods: {
    parseTime: function parseTime(date) {
      return __WEBPACK_IMPORTED_MODULE_0_moment___default()(date).format("HH:mm");
    }
  }
});

/***/ }),
/* 245 */
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
/* 246 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stationCardInfo_stationCardInfo_vue__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stationCardInfo_stationCardInfo_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__stationCardInfo_stationCardInfo_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__connectionCard_connectionCard_vue__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__connectionCard_connectionCard_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__connectionCard_connectionCard_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__BusPassList_vue__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__BusPassList_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__BusPassList_vue__);








/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'stationCard',
  props: ['station', "show", "autoDestroy", "user", 'activator'],
  data: function data() {
    return {
      toogleMap: false,
      toogleBusList: false,
      selectedConnection: null
    };
  },

  components: {
    stationCardInfo: __WEBPACK_IMPORTED_MODULE_2__stationCardInfo_stationCardInfo_vue___default.a,
    connectionCard: __WEBPACK_IMPORTED_MODULE_3__connectionCard_connectionCard_vue___default.a,
    BusPassList: __WEBPACK_IMPORTED_MODULE_4__BusPassList_vue___default.a
  },
  methods: {
    getArrivalTime: function getArrivalTime(date) {
      return __WEBPACK_IMPORTED_MODULE_1_moment___default()(date).format("HH:mm:ss");
    },
    showStationWithInformation: function showStationWithInformation() {
      this.$store.actions.fetchLocationStationBoard(this.station);

      this.$store.actions.putLocationInDisplayStack(this.station);
    },
    showMap: function showMap() {
      this.toogleMap = !this.toogleMap;
      __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* default */].showMap(this.$store.state.display.coords, this.station);
    },
    showPassList: function showPassList(connection) {
      var _this = this;

      this.$store.actions.getPassList(connection).then(function () {
        _this.selectedConnection = connection;

        _this.toogleBusList = false;
      });
    }
  },
  computed: {
    availableConections: function availableConections() {
      return this.$store.LocationStore.getAvailableConnections(this.station, this.user);
    },
    hasBuses: function hasBuses() {
      if (!this.station.stationboard) return;
      return this.station.stationboard.filter(function (stationboard) {
        return stationboard.stop != undefined;
      }).length > 0;
    }
  }
});

/***/ }),
/* 247 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stationCardInfo_stationCardInfo_vue__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stationCardInfo_stationCardInfo_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__stationCardInfo_stationCardInfo_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__connectionCard_connectionCard_vue__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__connectionCard_connectionCard_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__connectionCard_connectionCard_vue__);






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'stationCard',
  props: ['station', "showConnection", "autoDestroy", "user", 'activator'],
  components: {
    stationCardInfo: __WEBPACK_IMPORTED_MODULE_2__stationCardInfo_stationCardInfo_vue___default.a,
    connectionCard: __WEBPACK_IMPORTED_MODULE_3__connectionCard_connectionCard_vue___default.a
  },
  methods: {
    getArrivalTime: function getArrivalTime(date) {
      return __WEBPACK_IMPORTED_MODULE_1_moment___default()(date).format("HH:mm:ss");
    },
    showStationWithInformation: function showStationWithInformation() {
      this.$store.actions.fetchLocationStationBoard(this.station);

      this.$store.actions.putLocationInDisplayStack(this.station);
    }
  },
  computed: {
    availableConections: function availableConections() {
      return this.$store.LocationStore.getAvailableConnections(this.station, this.user);
    }
  }
});

/***/ }),
/* 248 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'stationCardInfo',
  components: {}
});

/***/ }),
/* 249 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stationCard_stationCard_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stationCard_stationCard_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stationCard_stationCard_vue__);




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'usersContent',
  components: {
    StationCard: __WEBPACK_IMPORTED_MODULE_0__stationCard_stationCard_vue___default.a
  }
});

/***/ }),
/* 250 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stationCard_stationCard_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stationCard_stationCard_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stationCard_stationCard_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stationCard_StationCardWithConnection_vue__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stationCard_StationCardWithConnection_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__stationCard_StationCardWithConnection_vue__);





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'volatileLocations',
  components: {
    stationCard: __WEBPACK_IMPORTED_MODULE_0__stationCard_stationCard_vue___default.a,
    StationCardWithConnection: __WEBPACK_IMPORTED_MODULE_1__stationCard_StationCardWithConnection_vue___default.a
  },
  data: function data() {
    return {
      defaultLocationsOffset: this.$store.state.defaultLocationsOffset
    };
  },

  methods: {
    show: function show(station) {
      return this.$store.state.openedLocations.indexOf(station) >= 0;
    }
  }
});

/***/ }),
/* 251 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var autoplay = {
  props: {
    autoplay: {
      type: Boolean,
      default: false
    },

    autoplayTimeout: {
      type: Number,
      default: 2000
    },

    autoplayHoverPause: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      autoplayInterval: null
    };
  },
  destroyed: function destroyed() {
    if (!this.$isServer) {
      this.$el.removeEventListener("mouseenter", this.pauseAutoplay);
      this.$el.removeEventListener("mouseleave", this.startAutoplay);
    }
  },

  methods: {
    pauseAutoplay: function pauseAutoplay() {
      if (this.autoplayInterval) {
        this.autoplayInterval = clearInterval(this.autoplayInterval);
      }
    },
    startAutoplay: function startAutoplay() {
      if (this.autoplay) {
        this.autoplayInterval = setInterval(this.advancePage, this.autoplayTimeout);
      }
    }
  },
  mounted: function mounted() {
    if (!this.$isServer && this.autoplayHoverPause) {
      this.$el.addEventListener("mouseenter", this.pauseAutoplay);
      this.$el.addEventListener("mouseleave", this.startAutoplay);
    }

    this.startAutoplay();
  }
};

/* harmony default export */ __webpack_exports__["a"] = (autoplay);

/***/ }),
/* 252 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _this = this;

var debounce = function debounce(func, wait, immediate) {
  var timeout = void 0;
  return function () {
    var context = _this;
    var later = function later() {
      timeout = null;
      if (!immediate) {
        func.apply(context);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context);
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (debounce);

/***/ }),
/* 253 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);



/* harmony default export */ __webpack_exports__["a"] = ({
  getDirectionFrom: function getDirectionFrom(origin, destination, travelMode) {
    travelMode = travelMode || 'WALKING';
    var directionsService = new window.google.maps.DirectionsService();
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      directionsService.route({ origin: origin, destination: destination, travelMode: travelMode }, function (res, status) {
        if (res.status == 'OK') {
          resolve(res);
        } else {
          reject(res);
        }
      });
    });
  }
});

/***/ }),
/* 254 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = ({
  "stations": [{
    "id": "8588291",
    "name": "Lugano, Corso Elvezia",
    "score": null,
    "coordinate": {
      "type": "WGS84",
      "x": 46.01117,
      "y": 8.956654
    },
    "distance": 57.1
  }, {
    "id": "8591624",
    "name": "Lugano, Via Zurigo",
    "score": null,
    "coordinate": {
      "type": "WGS84",
      "x": 46.011161,
      "y": 8.954622
    },
    "distance": 130.1
  }, {
    "id": "8595133",
    "name": "Lugano, Università",
    "score": null,
    "coordinate": {
      "type": "WGS84",
      "x": 46.011574,
      "y": 8.9574
    },
    "distance": 132.9
  }, {
    "id": "8579019",
    "name": "Lugano, Sacro cuore",
    "score": null,
    "coordinate": {
      "type": "WGS84",
      "x": 46.010064,
      "y": 8.955324
    },
    "distance": 141.1
  }, {
    "id": "8579001",
    "name": "Lugano, Piazza Molino Nuovo",
    "score": null,
    "coordinate": {
      "type": "WGS84",
      "x": 46.01241,
      "y": 8.955782
    },
    "distance": 137.9
  }, {
    "id": "8595135",
    "name": "Lugano, Via Olgiati",
    "score": null,
    "coordinate": {
      "type": "WGS84",
      "x": 46.011898,
      "y": 8.953813
    },
    "distance": 219.3
  }, {
    "id": "8591798",
    "name": "Lugano, Piazza Molino Nuovo 2",
    "score": null,
    "coordinate": {
      "type": "WGS84",
      "x": 46.012788,
      "y": 8.954874
    },
    "distance": 207.5
  }, {
    "id": "8579018",
    "name": "Lugano, Ponte Madonnetta",
    "score": null,
    "coordinate": {
      "type": "WGS84",
      "x": 46.011206,
      "y": 8.959836
    },
    "distance": 350.2
  }, {
    "id": "8594225",
    "name": "Lugano, Via Balestra",
    "score": null,
    "coordinate": {
      "type": "WGS84",
      "x": 46.008257,
      "y": 8.955809
    },
    "distance": 326.6
  }, {
    "id": "8588973",
    "name": "Lugano, Autosilo",
    "score": null,
    "coordinate": {
      "type": "WGS84",
      "x": 46.007898,
      "y": 8.954443
    },
    "distance": 394.1
  }]
});

/***/ }),
/* 255 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_ConnectionStore_js__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_LocationStore_js__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stores_UserStore_js__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stores_PreferenceStore_js__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stores_DisplayStore_js__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stores_TransportDisplayStore_js__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_flue_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_flue_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_flue_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__socket_js__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__router_js__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_uikit__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_uikit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_uikit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_uikit_dist_js_uikit_icons__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_uikit_dist_js_uikit_icons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_uikit_dist_js_uikit_icons__);

















__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_8_flue_vue__["flueVue"]);



__WEBPACK_IMPORTED_MODULE_8_flue_vue__["SuperStore"].addStores([__WEBPACK_IMPORTED_MODULE_3__stores_LocationStore_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__stores_UserStore_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__stores_PreferenceStore_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__stores_ConnectionStore_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__stores_DisplayStore_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_7__stores_TransportDisplayStore_js__["a" /* default */]]);

window.UIkit = __WEBPACK_IMPORTED_MODULE_11_uikit___default.a;
__WEBPACK_IMPORTED_MODULE_11_uikit___default.a.use(__WEBPACK_IMPORTED_MODULE_12_uikit_dist_js_uikit_icons___default.a);

new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
  el: '#app',
  template: '<App/>',
  router: __WEBPACK_IMPORTED_MODULE_10__router_js__["a" /* default */],
  components: {
    App: __WEBPACK_IMPORTED_MODULE_1__App___default.a
  }
});

/***/ }),
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n\n/*!\n * animate.css -http://daneden.me/animate\n * Version - 3.5.1\n * Licensed under the MIT license - http://opensource.org/licenses/MIT\n *\n * Copyright (c) 2016 Daniel Eden\n */\n\n.animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.animated.infinite{-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.animated.hinge{-webkit-animation-duration:2s;animation-duration:2s}.animated.bounceIn,.animated.bounceOut,.animated.flipOutX,.animated.flipOutY{-webkit-animation-duration:.75s;animation-duration:.75s}@-webkit-keyframes bounce{0%,20%,53%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1);-webkit-transform:translateZ(0);transform:translateZ(0)}40%,43%{-webkit-transform:translate3d(0,-30px,0);transform:translate3d(0,-30px,0)}40%,43%,70%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06)}70%{-webkit-transform:translate3d(0,-15px,0);transform:translate3d(0,-15px,0)}90%{-webkit-transform:translate3d(0,-4px,0);transform:translate3d(0,-4px,0)}}@keyframes bounce{0%,20%,53%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1);-webkit-transform:translateZ(0);transform:translateZ(0)}40%,43%{-webkit-transform:translate3d(0,-30px,0);transform:translate3d(0,-30px,0)}40%,43%,70%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06)}70%{-webkit-transform:translate3d(0,-15px,0);transform:translate3d(0,-15px,0)}90%{-webkit-transform:translate3d(0,-4px,0);transform:translate3d(0,-4px,0)}}.bounce{-webkit-animation-name:bounce;animation-name:bounce;-webkit-transform-origin:center bottom;transform-origin:center bottom}@-webkit-keyframes flash{0%,50%,to{opacity:1}25%,75%{opacity:0}}@keyframes flash{0%,50%,to{opacity:1}25%,75%{opacity:0}}.flash{-webkit-animation-name:flash;animation-name:flash}@-webkit-keyframes pulse{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}50%{-webkit-transform:scale3d(1.05,1.05,1.05);transform:scale3d(1.05,1.05,1.05)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes pulse{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}50%{-webkit-transform:scale3d(1.05,1.05,1.05);transform:scale3d(1.05,1.05,1.05)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}.pulse{-webkit-animation-name:pulse;animation-name:pulse}@-webkit-keyframes rubberBand{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}30%{-webkit-transform:scale3d(1.25,.75,1);transform:scale3d(1.25,.75,1)}40%{-webkit-transform:scale3d(.75,1.25,1);transform:scale3d(.75,1.25,1)}50%{-webkit-transform:scale3d(1.15,.85,1);transform:scale3d(1.15,.85,1)}65%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1)}75%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes rubberBand{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}30%{-webkit-transform:scale3d(1.25,.75,1);transform:scale3d(1.25,.75,1)}40%{-webkit-transform:scale3d(.75,1.25,1);transform:scale3d(.75,1.25,1)}50%{-webkit-transform:scale3d(1.15,.85,1);transform:scale3d(1.15,.85,1)}65%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1)}75%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}.rubberBand{-webkit-animation-name:rubberBand;animation-name:rubberBand}@-webkit-keyframes shake{0%,to{-webkit-transform:translateZ(0);transform:translateZ(0)}10%,30%,50%,70%,90%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}20%,40%,60%,80%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}}@keyframes shake{0%,to{-webkit-transform:translateZ(0);transform:translateZ(0)}10%,30%,50%,70%,90%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}20%,40%,60%,80%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}}.shake{-webkit-animation-name:shake;animation-name:shake}@-webkit-keyframes headShake{0%{-webkit-transform:translateX(0);transform:translateX(0)}6.5%{-webkit-transform:translateX(-6px) rotateY(-9deg);transform:translateX(-6px) rotateY(-9deg)}18.5%{-webkit-transform:translateX(5px) rotateY(7deg);transform:translateX(5px) rotateY(7deg)}31.5%{-webkit-transform:translateX(-3px) rotateY(-5deg);transform:translateX(-3px) rotateY(-5deg)}43.5%{-webkit-transform:translateX(2px) rotateY(3deg);transform:translateX(2px) rotateY(3deg)}50%{-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes headShake{0%{-webkit-transform:translateX(0);transform:translateX(0)}6.5%{-webkit-transform:translateX(-6px) rotateY(-9deg);transform:translateX(-6px) rotateY(-9deg)}18.5%{-webkit-transform:translateX(5px) rotateY(7deg);transform:translateX(5px) rotateY(7deg)}31.5%{-webkit-transform:translateX(-3px) rotateY(-5deg);transform:translateX(-3px) rotateY(-5deg)}43.5%{-webkit-transform:translateX(2px) rotateY(3deg);transform:translateX(2px) rotateY(3deg)}50%{-webkit-transform:translateX(0);transform:translateX(0)}}.headShake{-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-name:headShake;animation-name:headShake}@-webkit-keyframes swing{20%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}40%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}60%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}80%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@keyframes swing{20%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}40%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}60%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}80%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}.swing{-webkit-transform-origin:top center;transform-origin:top center;-webkit-animation-name:swing;animation-name:swing}@-webkit-keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.9,.9,.9) rotate(-3deg);transform:scale3d(.9,.9,.9) rotate(-3deg)}30%,50%,70%,90%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate(3deg);transform:scale3d(1.1,1.1,1.1) rotate(3deg)}40%,60%,80%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate(-3deg);transform:scale3d(1.1,1.1,1.1) rotate(-3deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.9,.9,.9) rotate(-3deg);transform:scale3d(.9,.9,.9) rotate(-3deg)}30%,50%,70%,90%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate(3deg);transform:scale3d(1.1,1.1,1.1) rotate(3deg)}40%,60%,80%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate(-3deg);transform:scale3d(1.1,1.1,1.1) rotate(-3deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}.tada{-webkit-animation-name:tada;animation-name:tada}@-webkit-keyframes wobble{0%{-webkit-transform:none;transform:none}15%{-webkit-transform:translate3d(-25%,0,0) rotate(-5deg);transform:translate3d(-25%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(20%,0,0) rotate(3deg);transform:translate3d(20%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-15%,0,0) rotate(-3deg);transform:translate3d(-15%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(10%,0,0) rotate(2deg);transform:translate3d(10%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-5%,0,0) rotate(-1deg);transform:translate3d(-5%,0,0) rotate(-1deg)}to{-webkit-transform:none;transform:none}}@keyframes wobble{0%{-webkit-transform:none;transform:none}15%{-webkit-transform:translate3d(-25%,0,0) rotate(-5deg);transform:translate3d(-25%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(20%,0,0) rotate(3deg);transform:translate3d(20%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-15%,0,0) rotate(-3deg);transform:translate3d(-15%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(10%,0,0) rotate(2deg);transform:translate3d(10%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-5%,0,0) rotate(-1deg);transform:translate3d(-5%,0,0) rotate(-1deg)}to{-webkit-transform:none;transform:none}}.wobble{-webkit-animation-name:wobble;animation-name:wobble}@-webkit-keyframes jello{0%,11.1%,to{-webkit-transform:none;transform:none}22.2%{-webkit-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-webkit-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-webkit-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-webkit-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-webkit-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-webkit-transform:skewX(.390625deg) skewY(.390625deg);transform:skewX(.390625deg) skewY(.390625deg)}88.8%{-webkit-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}}@keyframes jello{0%,11.1%,to{-webkit-transform:none;transform:none}22.2%{-webkit-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-webkit-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-webkit-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-webkit-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-webkit-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-webkit-transform:skewX(.390625deg) skewY(.390625deg);transform:skewX(.390625deg) skewY(.390625deg)}88.8%{-webkit-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}}.jello{-webkit-animation-name:jello;animation-name:jello;-webkit-transform-origin:center;transform-origin:center}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}20%{-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}40%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}60%{opacity:1;-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}80%{-webkit-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}20%{-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}40%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}60%{opacity:1;-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}80%{-webkit-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}.bounceIn{-webkit-animation-name:bounceIn;animation-name:bounceIn}@-webkit-keyframes bounceInDown{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(0,-3000px,0);transform:translate3d(0,-3000px,0)}60%{opacity:1;-webkit-transform:translate3d(0,25px,0);transform:translate3d(0,25px,0)}75%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}90%{-webkit-transform:translate3d(0,5px,0);transform:translate3d(0,5px,0)}to{-webkit-transform:none;transform:none}}@keyframes bounceInDown{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(0,-3000px,0);transform:translate3d(0,-3000px,0)}60%{opacity:1;-webkit-transform:translate3d(0,25px,0);transform:translate3d(0,25px,0)}75%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}90%{-webkit-transform:translate3d(0,5px,0);transform:translate3d(0,5px,0)}to{-webkit-transform:none;transform:none}}.bounceInDown{-webkit-animation-name:bounceInDown;animation-name:bounceInDown}@-webkit-keyframes bounceInLeft{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(-3000px,0,0);transform:translate3d(-3000px,0,0)}60%{opacity:1;-webkit-transform:translate3d(25px,0,0);transform:translate3d(25px,0,0)}75%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}90%{-webkit-transform:translate3d(5px,0,0);transform:translate3d(5px,0,0)}to{-webkit-transform:none;transform:none}}@keyframes bounceInLeft{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(-3000px,0,0);transform:translate3d(-3000px,0,0)}60%{opacity:1;-webkit-transform:translate3d(25px,0,0);transform:translate3d(25px,0,0)}75%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}90%{-webkit-transform:translate3d(5px,0,0);transform:translate3d(5px,0,0)}to{-webkit-transform:none;transform:none}}.bounceInLeft{-webkit-animation-name:bounceInLeft;animation-name:bounceInLeft}@-webkit-keyframes bounceInRight{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(3000px,0,0);transform:translate3d(3000px,0,0)}60%{opacity:1;-webkit-transform:translate3d(-25px,0,0);transform:translate3d(-25px,0,0)}75%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}90%{-webkit-transform:translate3d(-5px,0,0);transform:translate3d(-5px,0,0)}to{-webkit-transform:none;transform:none}}@keyframes bounceInRight{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(3000px,0,0);transform:translate3d(3000px,0,0)}60%{opacity:1;-webkit-transform:translate3d(-25px,0,0);transform:translate3d(-25px,0,0)}75%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}90%{-webkit-transform:translate3d(-5px,0,0);transform:translate3d(-5px,0,0)}to{-webkit-transform:none;transform:none}}.bounceInRight{-webkit-animation-name:bounceInRight;animation-name:bounceInRight}@-webkit-keyframes bounceInUp{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(0,3000px,0);transform:translate3d(0,3000px,0)}60%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}75%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}90%{-webkit-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes bounceInUp{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(0,3000px,0);transform:translate3d(0,3000px,0)}60%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}75%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}90%{-webkit-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.bounceInUp{-webkit-animation-name:bounceInUp;animation-name:bounceInUp}@-webkit-keyframes bounceOut{20%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}50%,55%{opacity:1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}to{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}}@keyframes bounceOut{20%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}50%,55%{opacity:1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}to{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}}.bounceOut{-webkit-animation-name:bounceOut;animation-name:bounceOut}@-webkit-keyframes bounceOutDown{20%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}40%,45%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}to{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}}@keyframes bounceOutDown{20%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}40%,45%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}to{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}}.bounceOutDown{-webkit-animation-name:bounceOutDown;animation-name:bounceOutDown}@-webkit-keyframes bounceOutLeft{20%{opacity:1;-webkit-transform:translate3d(20px,0,0);transform:translate3d(20px,0,0)}to{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}}@keyframes bounceOutLeft{20%{opacity:1;-webkit-transform:translate3d(20px,0,0);transform:translate3d(20px,0,0)}to{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}}.bounceOutLeft{-webkit-animation-name:bounceOutLeft;animation-name:bounceOutLeft}@-webkit-keyframes bounceOutRight{20%{opacity:1;-webkit-transform:translate3d(-20px,0,0);transform:translate3d(-20px,0,0)}to{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}}@keyframes bounceOutRight{20%{opacity:1;-webkit-transform:translate3d(-20px,0,0);transform:translate3d(-20px,0,0)}to{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}}.bounceOutRight{-webkit-animation-name:bounceOutRight;animation-name:bounceOutRight}@-webkit-keyframes bounceOutUp{20%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}40%,45%{opacity:1;-webkit-transform:translate3d(0,20px,0);transform:translate3d(0,20px,0)}to{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}}@keyframes bounceOutUp{20%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}40%,45%{opacity:1;-webkit-transform:translate3d(0,20px,0);transform:translate3d(0,20px,0)}to{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}}.bounceOutUp{-webkit-animation-name:bounceOutUp;animation-name:bounceOutUp}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.fadeIn{-webkit-animation-name:fadeIn;animation-name:fadeIn}@-webkit-keyframes fadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}to{opacity:1;-webkit-transform:none;transform:none}}.fadeInDown{-webkit-animation-name:fadeInDown;animation-name:fadeInDown}@-webkit-keyframes fadeInDownBig{0%{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInDownBig{0%{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}to{opacity:1;-webkit-transform:none;transform:none}}.fadeInDownBig{-webkit-animation-name:fadeInDownBig;animation-name:fadeInDownBig}@-webkit-keyframes fadeInLeft{0%{opacity:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInLeft{0%{opacity:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}.fadeInLeft{-webkit-animation-name:fadeInLeft;animation-name:fadeInLeft}@-webkit-keyframes fadeInLeftBig{0%{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInLeftBig{0%{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}.fadeInLeftBig{-webkit-animation-name:fadeInLeftBig;animation-name:fadeInLeftBig}@-webkit-keyframes fadeInRight{0%{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInRight{0%{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}.fadeInRight{-webkit-animation-name:fadeInRight;animation-name:fadeInRight}@-webkit-keyframes fadeInRightBig{0%{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInRightBig{0%{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}.fadeInRightBig{-webkit-animation-name:fadeInRightBig;animation-name:fadeInRightBig}@-webkit-keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{opacity:1;-webkit-transform:none;transform:none}}.fadeInUp{-webkit-animation-name:fadeInUp;animation-name:fadeInUp}@-webkit-keyframes fadeInUpBig{0%{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInUpBig{0%{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}to{opacity:1;-webkit-transform:none;transform:none}}.fadeInUpBig{-webkit-animation-name:fadeInUpBig;animation-name:fadeInUpBig}@-webkit-keyframes fadeOut{0%{opacity:1}to{opacity:0}}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}.fadeOut{-webkit-animation-name:fadeOut;animation-name:fadeOut}@-webkit-keyframes fadeOutDown{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@keyframes fadeOutDown{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}.fadeOutDown{-webkit-animation-name:fadeOutDown;animation-name:fadeOutDown}@-webkit-keyframes fadeOutDownBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}}@keyframes fadeOutDownBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}}.fadeOutDownBig{-webkit-animation-name:fadeOutDownBig;animation-name:fadeOutDownBig}@-webkit-keyframes fadeOutLeft{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@keyframes fadeOutLeft{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}.fadeOutLeft{-webkit-animation-name:fadeOutLeft;animation-name:fadeOutLeft}@-webkit-keyframes fadeOutLeftBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}}@keyframes fadeOutLeftBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}}.fadeOutLeftBig{-webkit-animation-name:fadeOutLeftBig;animation-name:fadeOutLeftBig}@-webkit-keyframes fadeOutRight{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}@keyframes fadeOutRight{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}.fadeOutRight{-webkit-animation-name:fadeOutRight;animation-name:fadeOutRight}@-webkit-keyframes fadeOutRightBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}}@keyframes fadeOutRightBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}}.fadeOutRightBig{-webkit-animation-name:fadeOutRightBig;animation-name:fadeOutRightBig}@-webkit-keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}.fadeOutUp{-webkit-animation-name:fadeOutUp;animation-name:fadeOutUp}@-webkit-keyframes fadeOutUpBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}}@keyframes fadeOutUpBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}}.fadeOutUpBig{-webkit-animation-name:fadeOutUpBig;animation-name:fadeOutUpBig}@-webkit-keyframes flip{0%{-webkit-transform:perspective(400px) rotateY(-1turn);transform:perspective(400px) rotateY(-1turn)}0%,40%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}40%{-webkit-transform:perspective(400px) translateZ(150px) rotateY(-190deg);transform:perspective(400px) translateZ(150px) rotateY(-190deg)}50%{-webkit-transform:perspective(400px) translateZ(150px) rotateY(-170deg);transform:perspective(400px) translateZ(150px) rotateY(-170deg)}50%,80%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}80%{-webkit-transform:perspective(400px) scale3d(.95,.95,.95);transform:perspective(400px) scale3d(.95,.95,.95)}to{-webkit-transform:perspective(400px);transform:perspective(400px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}}@keyframes flip{0%{-webkit-transform:perspective(400px) rotateY(-1turn);transform:perspective(400px) rotateY(-1turn)}0%,40%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}40%{-webkit-transform:perspective(400px) translateZ(150px) rotateY(-190deg);transform:perspective(400px) translateZ(150px) rotateY(-190deg)}50%{-webkit-transform:perspective(400px) translateZ(150px) rotateY(-170deg);transform:perspective(400px) translateZ(150px) rotateY(-170deg)}50%,80%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}80%{-webkit-transform:perspective(400px) scale3d(.95,.95,.95);transform:perspective(400px) scale3d(.95,.95,.95)}to{-webkit-transform:perspective(400px);transform:perspective(400px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}}.animated.flip{-webkit-backface-visibility:visible;backface-visibility:visible;-webkit-animation-name:flip;animation-name:flip}@-webkit-keyframes flipInX{0%{-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg);opacity:0}0%,40%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}40%{-webkit-transform:perspective(400px) rotateX(-20deg);transform:perspective(400px) rotateX(-20deg)}60%{-webkit-transform:perspective(400px) rotateX(10deg);transform:perspective(400px) rotateX(10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotateX(-5deg);transform:perspective(400px) rotateX(-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}@keyframes flipInX{0%{-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg);opacity:0}0%,40%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}40%{-webkit-transform:perspective(400px) rotateX(-20deg);transform:perspective(400px) rotateX(-20deg)}60%{-webkit-transform:perspective(400px) rotateX(10deg);transform:perspective(400px) rotateX(10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotateX(-5deg);transform:perspective(400px) rotateX(-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}.flipInX{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;-webkit-animation-name:flipInX;animation-name:flipInX}@-webkit-keyframes flipInY{0%{-webkit-transform:perspective(400px) rotateY(90deg);transform:perspective(400px) rotateY(90deg);opacity:0}0%,40%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}40%{-webkit-transform:perspective(400px) rotateY(-20deg);transform:perspective(400px) rotateY(-20deg)}60%{-webkit-transform:perspective(400px) rotateY(10deg);transform:perspective(400px) rotateY(10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotateY(-5deg);transform:perspective(400px) rotateY(-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}@keyframes flipInY{0%{-webkit-transform:perspective(400px) rotateY(90deg);transform:perspective(400px) rotateY(90deg);opacity:0}0%,40%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}40%{-webkit-transform:perspective(400px) rotateY(-20deg);transform:perspective(400px) rotateY(-20deg)}60%{-webkit-transform:perspective(400px) rotateY(10deg);transform:perspective(400px) rotateY(10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotateY(-5deg);transform:perspective(400px) rotateY(-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}.flipInY{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;-webkit-animation-name:flipInY;animation-name:flipInY}@-webkit-keyframes flipOutX{0%{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotateX(-20deg);transform:perspective(400px) rotateX(-20deg);opacity:1}to{-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg);opacity:0}}@keyframes flipOutX{0%{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotateX(-20deg);transform:perspective(400px) rotateX(-20deg);opacity:1}to{-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg);opacity:0}}.flipOutX{-webkit-animation-name:flipOutX;animation-name:flipOutX;-webkit-backface-visibility:visible!important;backface-visibility:visible!important}@-webkit-keyframes flipOutY{0%{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotateY(-15deg);transform:perspective(400px) rotateY(-15deg);opacity:1}to{-webkit-transform:perspective(400px) rotateY(90deg);transform:perspective(400px) rotateY(90deg);opacity:0}}@keyframes flipOutY{0%{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotateY(-15deg);transform:perspective(400px) rotateY(-15deg);opacity:1}to{-webkit-transform:perspective(400px) rotateY(90deg);transform:perspective(400px) rotateY(90deg);opacity:0}}.flipOutY{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;-webkit-animation-name:flipOutY;animation-name:flipOutY}@-webkit-keyframes lightSpeedIn{0%{-webkit-transform:translate3d(100%,0,0) skewX(-30deg);transform:translate3d(100%,0,0) skewX(-30deg);opacity:0}60%{-webkit-transform:skewX(20deg);transform:skewX(20deg)}60%,80%{opacity:1}80%{-webkit-transform:skewX(-5deg);transform:skewX(-5deg)}to{-webkit-transform:none;transform:none;opacity:1}}@keyframes lightSpeedIn{0%{-webkit-transform:translate3d(100%,0,0) skewX(-30deg);transform:translate3d(100%,0,0) skewX(-30deg);opacity:0}60%{-webkit-transform:skewX(20deg);transform:skewX(20deg)}60%,80%{opacity:1}80%{-webkit-transform:skewX(-5deg);transform:skewX(-5deg)}to{-webkit-transform:none;transform:none;opacity:1}}.lightSpeedIn{-webkit-animation-name:lightSpeedIn;animation-name:lightSpeedIn;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}@-webkit-keyframes lightSpeedOut{0%{opacity:1}to{-webkit-transform:translate3d(100%,0,0) skewX(30deg);transform:translate3d(100%,0,0) skewX(30deg);opacity:0}}@keyframes lightSpeedOut{0%{opacity:1}to{-webkit-transform:translate3d(100%,0,0) skewX(30deg);transform:translate3d(100%,0,0) skewX(30deg);opacity:0}}.lightSpeedOut{-webkit-animation-name:lightSpeedOut;animation-name:lightSpeedOut;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}@-webkit-keyframes rotateIn{0%{transform-origin:center;-webkit-transform:rotate(-200deg);transform:rotate(-200deg);opacity:0}0%,to{-webkit-transform-origin:center}to{transform-origin:center;-webkit-transform:none;transform:none;opacity:1}}@keyframes rotateIn{0%{transform-origin:center;-webkit-transform:rotate(-200deg);transform:rotate(-200deg);opacity:0}0%,to{-webkit-transform-origin:center}to{transform-origin:center;-webkit-transform:none;transform:none;opacity:1}}.rotateIn{-webkit-animation-name:rotateIn;animation-name:rotateIn}@-webkit-keyframes rotateInDownLeft{0%{transform-origin:left bottom;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}0%,to{-webkit-transform-origin:left bottom}to{transform-origin:left bottom;-webkit-transform:none;transform:none;opacity:1}}@keyframes rotateInDownLeft{0%{transform-origin:left bottom;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}0%,to{-webkit-transform-origin:left bottom}to{transform-origin:left bottom;-webkit-transform:none;transform:none;opacity:1}}.rotateInDownLeft{-webkit-animation-name:rotateInDownLeft;animation-name:rotateInDownLeft}@-webkit-keyframes rotateInDownRight{0%{transform-origin:right bottom;-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}0%,to{-webkit-transform-origin:right bottom}to{transform-origin:right bottom;-webkit-transform:none;transform:none;opacity:1}}@keyframes rotateInDownRight{0%{transform-origin:right bottom;-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}0%,to{-webkit-transform-origin:right bottom}to{transform-origin:right bottom;-webkit-transform:none;transform:none;opacity:1}}.rotateInDownRight{-webkit-animation-name:rotateInDownRight;animation-name:rotateInDownRight}@-webkit-keyframes rotateInUpLeft{0%{transform-origin:left bottom;-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}0%,to{-webkit-transform-origin:left bottom}to{transform-origin:left bottom;-webkit-transform:none;transform:none;opacity:1}}@keyframes rotateInUpLeft{0%{transform-origin:left bottom;-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}0%,to{-webkit-transform-origin:left bottom}to{transform-origin:left bottom;-webkit-transform:none;transform:none;opacity:1}}.rotateInUpLeft{-webkit-animation-name:rotateInUpLeft;animation-name:rotateInUpLeft}@-webkit-keyframes rotateInUpRight{0%{transform-origin:right bottom;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);opacity:0}0%,to{-webkit-transform-origin:right bottom}to{transform-origin:right bottom;-webkit-transform:none;transform:none;opacity:1}}@keyframes rotateInUpRight{0%{transform-origin:right bottom;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);opacity:0}0%,to{-webkit-transform-origin:right bottom}to{transform-origin:right bottom;-webkit-transform:none;transform:none;opacity:1}}.rotateInUpRight{-webkit-animation-name:rotateInUpRight;animation-name:rotateInUpRight}@-webkit-keyframes rotateOut{0%{transform-origin:center;opacity:1}0%,to{-webkit-transform-origin:center}to{transform-origin:center;-webkit-transform:rotate(200deg);transform:rotate(200deg);opacity:0}}@keyframes rotateOut{0%{transform-origin:center;opacity:1}0%,to{-webkit-transform-origin:center}to{transform-origin:center;-webkit-transform:rotate(200deg);transform:rotate(200deg);opacity:0}}.rotateOut{-webkit-animation-name:rotateOut;animation-name:rotateOut}@-webkit-keyframes rotateOutDownLeft{0%{transform-origin:left bottom;opacity:1}0%,to{-webkit-transform-origin:left bottom}to{transform-origin:left bottom;-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}}@keyframes rotateOutDownLeft{0%{transform-origin:left bottom;opacity:1}0%,to{-webkit-transform-origin:left bottom}to{transform-origin:left bottom;-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}}.rotateOutDownLeft{-webkit-animation-name:rotateOutDownLeft;animation-name:rotateOutDownLeft}@-webkit-keyframes rotateOutDownRight{0%{transform-origin:right bottom;opacity:1}0%,to{-webkit-transform-origin:right bottom}to{transform-origin:right bottom;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}}@keyframes rotateOutDownRight{0%{transform-origin:right bottom;opacity:1}0%,to{-webkit-transform-origin:right bottom}to{transform-origin:right bottom;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}}.rotateOutDownRight{-webkit-animation-name:rotateOutDownRight;animation-name:rotateOutDownRight}@-webkit-keyframes rotateOutUpLeft{0%{transform-origin:left bottom;opacity:1}0%,to{-webkit-transform-origin:left bottom}to{transform-origin:left bottom;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}}@keyframes rotateOutUpLeft{0%{transform-origin:left bottom;opacity:1}0%,to{-webkit-transform-origin:left bottom}to{transform-origin:left bottom;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}}.rotateOutUpLeft{-webkit-animation-name:rotateOutUpLeft;animation-name:rotateOutUpLeft}@-webkit-keyframes rotateOutUpRight{0%{transform-origin:right bottom;opacity:1}0%,to{-webkit-transform-origin:right bottom}to{transform-origin:right bottom;-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:0}}@keyframes rotateOutUpRight{0%{transform-origin:right bottom;opacity:1}0%,to{-webkit-transform-origin:right bottom}to{transform-origin:right bottom;-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:0}}.rotateOutUpRight{-webkit-animation-name:rotateOutUpRight;animation-name:rotateOutUpRight}@-webkit-keyframes hinge{0%{transform-origin:top left}0%,20%,60%{-webkit-transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}20%,60%{-webkit-transform:rotate(80deg);transform:rotate(80deg);transform-origin:top left}40%,80%{-webkit-transform:rotate(60deg);transform:rotate(60deg);-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;opacity:1}to{-webkit-transform:translate3d(0,700px,0);transform:translate3d(0,700px,0);opacity:0}}@keyframes hinge{0%{transform-origin:top left}0%,20%,60%{-webkit-transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}20%,60%{-webkit-transform:rotate(80deg);transform:rotate(80deg);transform-origin:top left}40%,80%{-webkit-transform:rotate(60deg);transform:rotate(60deg);-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;opacity:1}to{-webkit-transform:translate3d(0,700px,0);transform:translate3d(0,700px,0);opacity:0}}.hinge{-webkit-animation-name:hinge;animation-name:hinge}@-webkit-keyframes rollIn{0%{opacity:0;-webkit-transform:translate3d(-100%,0,0) rotate(-120deg);transform:translate3d(-100%,0,0) rotate(-120deg)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes rollIn{0%{opacity:0;-webkit-transform:translate3d(-100%,0,0) rotate(-120deg);transform:translate3d(-100%,0,0) rotate(-120deg)}to{opacity:1;-webkit-transform:none;transform:none}}.rollIn{-webkit-animation-name:rollIn;animation-name:rollIn}@-webkit-keyframes rollOut{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(100%,0,0) rotate(120deg);transform:translate3d(100%,0,0) rotate(120deg)}}@keyframes rollOut{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(100%,0,0) rotate(120deg);transform:translate3d(100%,0,0) rotate(120deg)}}.rollOut{-webkit-animation-name:rollOut;animation-name:rollOut}@-webkit-keyframes zoomIn{0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes zoomIn{0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}50%{opacity:1}}.zoomIn{-webkit-animation-name:zoomIn;animation-name:zoomIn}@-webkit-keyframes zoomInDown{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,60px,0);transform:scale3d(.475,.475,.475) translate3d(0,60px,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomInDown{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,60px,0);transform:scale3d(.475,.475,.475) translate3d(0,60px,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoomInDown{-webkit-animation-name:zoomInDown;animation-name:zoomInDown}@-webkit-keyframes zoomInLeft{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(10px,0,0);transform:scale3d(.475,.475,.475) translate3d(10px,0,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomInLeft{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(10px,0,0);transform:scale3d(.475,.475,.475) translate3d(10px,0,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoomInLeft{-webkit-animation-name:zoomInLeft;animation-name:zoomInLeft}@-webkit-keyframes zoomInRight{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomInRight{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoomInRight{-webkit-animation-name:zoomInRight;animation-name:zoomInRight}@-webkit-keyframes zoomInUp{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomInUp{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoomInUp{-webkit-animation-name:zoomInUp;animation-name:zoomInUp}@-webkit-keyframes zoomOut{0%{opacity:1}50%{-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}50%,to{opacity:0}}@keyframes zoomOut{0%{opacity:1}50%{-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}50%,to{opacity:0}}.zoomOut{-webkit-animation-name:zoomOut;animation-name:zoomOut}@-webkit-keyframes zoomOutDown{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}to{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomOutDown{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}to{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoomOutDown{-webkit-animation-name:zoomOutDown;animation-name:zoomOutDown}@-webkit-keyframes zoomOutLeft{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(42px,0,0);transform:scale3d(.475,.475,.475) translate3d(42px,0,0)}to{opacity:0;-webkit-transform:scale(.1) translate3d(-2000px,0,0);transform:scale(.1) translate3d(-2000px,0,0);-webkit-transform-origin:left center;transform-origin:left center}}@keyframes zoomOutLeft{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(42px,0,0);transform:scale3d(.475,.475,.475) translate3d(42px,0,0)}to{opacity:0;-webkit-transform:scale(.1) translate3d(-2000px,0,0);transform:scale(.1) translate3d(-2000px,0,0);-webkit-transform-origin:left center;transform-origin:left center}}.zoomOutLeft{-webkit-animation-name:zoomOutLeft;animation-name:zoomOutLeft}@-webkit-keyframes zoomOutRight{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(-42px,0,0);transform:scale3d(.475,.475,.475) translate3d(-42px,0,0)}to{opacity:0;-webkit-transform:scale(.1) translate3d(2000px,0,0);transform:scale(.1) translate3d(2000px,0,0);-webkit-transform-origin:right center;transform-origin:right center}}@keyframes zoomOutRight{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(-42px,0,0);transform:scale3d(.475,.475,.475) translate3d(-42px,0,0)}to{opacity:0;-webkit-transform:scale(.1) translate3d(2000px,0,0);transform:scale(.1) translate3d(2000px,0,0);-webkit-transform-origin:right center;transform-origin:right center}}.zoomOutRight{-webkit-animation-name:zoomOutRight;animation-name:zoomOutRight}@-webkit-keyframes zoomOutUp{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,60px,0);transform:scale3d(.475,.475,.475) translate3d(0,60px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}to{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomOutUp{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,60px,0);transform:scale3d(.475,.475,.475) translate3d(0,60px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}to{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoomOutUp{-webkit-animation-name:zoomOutUp;animation-name:zoomOutUp}@-webkit-keyframes slideInDown{0%{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInDown{0%{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.slideInDown{-webkit-animation-name:slideInDown;animation-name:slideInDown}@-webkit-keyframes slideInLeft{0%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInLeft{0%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.slideInLeft{-webkit-animation-name:slideInLeft;animation-name:slideInLeft}@-webkit-keyframes slideInRight{0%{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInRight{0%{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.slideInRight{-webkit-animation-name:slideInRight;animation-name:slideInRight}@-webkit-keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.slideInUp{-webkit-animation-name:slideInUp;animation-name:slideInUp}@-webkit-keyframes slideOutDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@keyframes slideOutDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}.slideOutDown{-webkit-animation-name:slideOutDown;animation-name:slideOutDown}@-webkit-keyframes slideOutLeft{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@keyframes slideOutLeft{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}.slideOutLeft{-webkit-animation-name:slideOutLeft;animation-name:slideOutLeft}@-webkit-keyframes slideOutRight{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}@keyframes slideOutRight{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}.slideOutRight{-webkit-animation-name:slideOutRight;animation-name:slideOutRight}@-webkit-keyframes slideOutUp{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes slideOutUp{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}.slideOutUp{-webkit-animation-name:slideOutUp;animation-name:slideOutUp}", ""]);

// exports


/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.uk-spinner--large {\n  font-size: 54px;\n}\n.slide__item--margin {\n  margin-left: 4px;\n  margin-right: 4px;\n}\n", ""]);

// exports


/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.resource[data-v-226f7b46]{\n  overflow-y: scroll;\n}\n", ""]);

// exports


/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.bus--small[data-v-2dc0945c] {\n  border-radius: 8%;\n  border: 1px grey solid;\n  padding: 2px;\n}\n", ""]);

// exports


/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.VueCarousel-slide {\n  -ms-flex-preferred-size: inherit;\n      flex-basis: inherit;\n  -ms-flex-positive: 0;\n      flex-grow: 0;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n", ""]);

// exports


/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports
exports.i(__webpack_require__(338), "");
exports.i(__webpack_require__(339), "");
exports.i(__webpack_require__(306), "");

// module
exports.push([module.i, "\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n  margin: 0;\n}\n.flex-list {\n  display: -ms-flexbox;\n  display: flex;\n}\n.flex-list--column {\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n.flex-item {\n  -ms-flex: 1 1 auto;\n      flex: 1 1 auto;\n}\n.flex-item--grow {\n  -ms-flex-positive: 0 !important;\n      flex-grow: 0 !important\n}\n#App {\n  height: 100%;\n  width: 100%;\n  max-height: 100vh;\n  min-height: 100vh;\n}\n.card--horizontal {\n  -ms-flex-direction: row !important;\n      flex-direction: row !important;\n}\n.flex--grow-0 {\n  -ms-flex-positive: 0 !important;\n      flex-grow: 0 !important\n}\n.full-h {\n  height: 100%;\n}\n.uk-flex-fill {\n  -ms-flex-positive: 99;\n      flex-grow: 99;\n}\n", ""]);

// exports


/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n#create-preference__btn {\n  position: absolute;\n  bottom: 16px;\n  right: 16px;\n}\n", ""]);

// exports


/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.preference__actions {\n  position: absolute;\n  top: 20px;\n  right: 8px;\n}\n", ""]);

// exports


/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.bus-time {\n  font-size: 18px;\n}\n.connection--user-nearby {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n}\n.connection--user-nearby--active {\n  width: 24px;\n  margin-right: 8px;\n  height: 70px;\n}\n.user-nearby--animation {\n  animation: user-nearby 1s linear;\n}\n.connection-number__container {\n  border-radius: 7%;\n  border: 2px grey solid;\n  padding: 8px;\n}\n@@keyframes user-nearby {\n100% {\n    box-shadow: inset 0 0 0 25px #53a7ea;\n}\n}\n", ""]);

// exports


/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.map {\n  overflow: visible;\n  width: 100%;\n  height: 500px;\n}\n.station-card__connection {\n  /*min-width: 350px;*/\n}\n", ""]);

// exports


/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.preference-station__container {\n  /*max-height: 75vh;*/\n  /*overflow-y: scroll;*/\n}\n", ""]);

// exports


/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n#display-page__container[data-v-9430ade8]{\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n\n", ""]);

// exports


/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.VueCarousel-navigation-button[data-v-ad663d54] {\n  position: absolute;\n  top: 50%;\n  margin: 8px;\n  box-sizing: border-box;\n  color: #000;\n  text-decoration: none;\n}\n.VueCarousel-navigation-next[data-v-ad663d54] {\n  right: 20px;\n  transform: translateY(-50%) translateX(100%)\n}\n.VueCarousel-navigation-prev[data-v-ad663d54] {\n  left: 20px;\n  transform: translateY(-50%) translateX(-100%)\n}\n.VueCarousel-navigation--disabled[data-v-ad663d54] {\n  opacity: 0.5;\n  cursor: default;\n}\n", ""]);

// exports


/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.VueCarousel-pagination[data-v-b0bc4848] {\n  width: 100%;\n  float: left;\n  text-align: center;\n}\n.VueCarousel-dot-container[data-v-b0bc4848] {\n  display: inline-block;\n  margin: 0 auto;\n}\n.VueCarousel-dot[data-v-b0bc4848] {\n  float: left;\n  cursor: pointer;\n}\n.VueCarousel-dot-inner[data-v-b0bc4848] {\n  border-radius: 100%;\n}\n", ""]);

// exports


/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.dummy-preference__text[data-v-bbb6398a] {\n  height: 16px;\n  width: 100%;\n}\n.dummy-preference__text--small[data-v-bbb6398a] {\n  height: 14px;\n  width: 100%;\n}\n.dummy-preference__bus[data-v-bbb6398a] {\n  width: 24px;\n  height: 24px;\n}\n.dummy-preference--background-color[data-v-bbb6398a] {\n  background-color: rgb(246, 246, 246) !important;\n}\n", ""]);

// exports


/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.VueCarousel {\n  position: relative;\n}\n.VueCarousel-wrapper {\n  /*width: 100%;*/\n  margin-left: 36px;\n  margin-right: 36px;\n  position: relative;\n  overflow-x: hidden;\n}\n.VueCarousel-inner {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n", ""]);

// exports


/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".overflow--scroll {\n  overflow: scroll;\n}\n\n.uk-card-body-small {\n  padding: 20px !important;\n}\n\n.padding--zero {\n  padding: 0 !important;\n}\n\n.uk-button-default {\n  background-color: white !important;\n}\n\n.uk-button-borderless {\n  border: none !important;\n}\n\n.uk-flex-grow {\n  flex-grow: 99;\n}\n\n.my-card--padding {\n  padding: 24px !important;\n}\n\n.dummy__text {\n  height: 16px;\n  width: 100%;\n}\n\n.dummy__text--small {\n  height: 14px;\n  width: 100%;\n}\n\n.dummy__bus {\n  width: 24px;\n  height: 24px;\n}\n\n.btn--huge {\n  height: 4.5rem !important;\n  width: 4.5rem !important;\n}\n\n.icon--huge {\n  font-size: 6rem;\n  height: 3rem;\n}\n\n.flex-1 {\n  flex: 1;\n}\n\n.f-v {\n  height: 100vh;\n}\n\n.uk-flex--grow {\n  flex-grow: 99;\n}\n\n.dummy--background-color {\n  background-color: rgb(246, 246, 246) !important;\n}\n\n.my-card__close {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n}\n\n.fade-cards-enter-active, .fade-cards-leave-active {\n  transition: opacity 0.5s\n}\n\n.fade-cards-enter, .fade-cards-leave-to, .fade-cards-leave-active {\n  opacity: 0\n}\n\n.bottom--offset {\n  margin-bottom: 70px;\n}\n\n.absolute--center {\n  position: absolute;\n  top: 50%;\n  left: auto;\n  width: 100%;\n}\n\n.navigation__actions {\n  position: absolute;\n  height: 40px;\n  background-color: white;\n  position: fixed;\n  z-index: 99;\n  bottom: 0;\n  width: 100%;\n  left: 0;\n  right: 0\n}\n\n.flex--center {\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  -webkit-box-align: center;\n  align-items: center;\n}\n\n.container--offset {\n  margin-bottom: 18px !important;\n}\n", ""]);

// exports


/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".sk-spinner--large {\n  width: 100px !important;\n  height: 100px !important;\n}\n\n\n/*\n *  Usage:\n *\n      <div class=\"sk-rotating-plane\"></div>\n *\n */\n\n.sk-rotating-plane {\n  width: 40px;\n  height: 40px;\n  background-color: #333;\n  margin: 40px auto;\n  -webkit-animation: sk-rotatePlane 1.2s infinite ease-in-out;\n  animation: sk-rotatePlane 1.2s infinite ease-in-out;\n}\n\n@-webkit-keyframes sk-rotatePlane {\n  0% {\n    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n    transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n  }\n  50% {\n    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n  }\n  100% {\n    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n  }\n}\n\n@keyframes sk-rotatePlane {\n  0% {\n    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n    transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n  }\n  50% {\n    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n  }\n  100% {\n    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n  }\n}\n\n\n/*\n *  Usage:\n *\n      <div class=\"sk-double-bounce\">\n        <div class=\"sk-child sk-double-bounce1\"></div>\n        <div class=\"sk-child sk-double-bounce2\"></div>\n      </div>\n *\n */\n\n.sk-double-bounce {\n  width: 40px;\n  height: 40px;\n  position: relative;\n  margin: 40px auto;\n}\n\n.sk-double-bounce .sk-child {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: #333;\n  opacity: 0.6;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-animation: sk-doubleBounce 2s infinite ease-in-out;\n  animation: sk-doubleBounce 2s infinite ease-in-out;\n}\n\n.sk-double-bounce .sk-double-bounce2 {\n  -webkit-animation-delay: -1.0s;\n  animation-delay: -1.0s;\n}\n\n@-webkit-keyframes sk-doubleBounce {\n  0%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  50% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n@keyframes sk-doubleBounce {\n  0%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  50% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n\n/*\n *  Usage:\n *\n      <div class=\"sk-wave\">\n        <div class=\"sk-rect sk-rect1\"></div>\n        <div class=\"sk-rect sk-rect2\"></div>\n        <div class=\"sk-rect sk-rect3\"></div>\n        <div class=\"sk-rect sk-rect4\"></div>\n        <div class=\"sk-rect sk-rect5\"></div>\n      </div>\n *\n */\n\n.sk-wave {\n  margin: 40px auto;\n  width: 50px;\n  height: 40px;\n  text-align: center;\n  font-size: 10px;\n}\n\n.sk-wave .sk-rect {\n  background-color: #333;\n  height: 100%;\n  width: 6px;\n  display: inline-block;\n  -webkit-animation: sk-waveStretchDelay 1.2s infinite ease-in-out;\n  animation: sk-waveStretchDelay 1.2s infinite ease-in-out;\n}\n\n.sk-wave .sk-rect1 {\n  -webkit-animation-delay: -1.2s;\n  animation-delay: -1.2s;\n}\n\n.sk-wave .sk-rect2 {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s;\n}\n\n.sk-wave .sk-rect3 {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s;\n}\n\n.sk-wave .sk-rect4 {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s;\n}\n\n.sk-wave .sk-rect5 {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s;\n}\n\n@-webkit-keyframes sk-waveStretchDelay {\n  0%, 40%, 100% {\n    -webkit-transform: scaleY(0.4);\n    transform: scaleY(0.4);\n  }\n  20% {\n    -webkit-transform: scaleY(1);\n    transform: scaleY(1);\n  }\n}\n\n@keyframes sk-waveStretchDelay {\n  0%, 40%, 100% {\n    -webkit-transform: scaleY(0.4);\n    transform: scaleY(0.4);\n  }\n  20% {\n    -webkit-transform: scaleY(1);\n    transform: scaleY(1);\n  }\n}\n\n\n/*\n *  Usage:\n *\n      <div class=\"sk-wandering-cubes\">\n        <div class=\"sk-cube sk-cube1\"></div>\n        <div class=\"sk-cube sk-cube2\"></div>\n      </div>\n *\n */\n\n.sk-wandering-cubes {\n  margin: 40px auto;\n  width: 40px;\n  height: 40px;\n  position: relative;\n}\n\n.sk-wandering-cubes .sk-cube {\n  background-color: #333;\n  width: 10px;\n  height: 10px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-animation: sk-wanderingCube 1.8s ease-in-out -1.8s infinite both;\n  animation: sk-wanderingCube 1.8s ease-in-out -1.8s infinite both;\n}\n\n.sk-wandering-cubes .sk-cube2 {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s;\n}\n\n@-webkit-keyframes sk-wanderingCube {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  25% {\n    -webkit-transform: translateX(30px) rotate(-90deg) scale(0.5);\n    transform: translateX(30px) rotate(-90deg) scale(0.5);\n  }\n  50% {\n    /* Hack to make FF rotate in the right direction */\n    -webkit-transform: translateX(30px) translateY(30px) rotate(-179deg);\n    transform: translateX(30px) translateY(30px) rotate(-179deg);\n  }\n  50.1% {\n    -webkit-transform: translateX(30px) translateY(30px) rotate(-180deg);\n    transform: translateX(30px) translateY(30px) rotate(-180deg);\n  }\n  75% {\n    -webkit-transform: translateX(0) translateY(30px) rotate(-270deg) scale(0.5);\n    transform: translateX(0) translateY(30px) rotate(-270deg) scale(0.5);\n  }\n  100% {\n    -webkit-transform: rotate(-360deg);\n    transform: rotate(-360deg);\n  }\n}\n\n@keyframes sk-wanderingCube {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  25% {\n    -webkit-transform: translateX(30px) rotate(-90deg) scale(0.5);\n    transform: translateX(30px) rotate(-90deg) scale(0.5);\n  }\n  50% {\n    /* Hack to make FF rotate in the right direction */\n    -webkit-transform: translateX(30px) translateY(30px) rotate(-179deg);\n    transform: translateX(30px) translateY(30px) rotate(-179deg);\n  }\n  50.1% {\n    -webkit-transform: translateX(30px) translateY(30px) rotate(-180deg);\n    transform: translateX(30px) translateY(30px) rotate(-180deg);\n  }\n  75% {\n    -webkit-transform: translateX(0) translateY(30px) rotate(-270deg) scale(0.5);\n    transform: translateX(0) translateY(30px) rotate(-270deg) scale(0.5);\n  }\n  100% {\n    -webkit-transform: rotate(-360deg);\n    transform: rotate(-360deg);\n  }\n}\n\n\n/*\n *  Usage:\n *\n      <div class=\"sk-spinner sk-spinner-pulse\"></div>\n *\n */\n\n.sk-spinner-pulse {\n  width: 40px;\n  height: 40px;\n  margin: 40px auto;\n  background-color: #333;\n  border-radius: 100%;\n  -webkit-animation: sk-pulseScaleOut 1s infinite ease-in-out;\n  animation: sk-pulseScaleOut 1s infinite ease-in-out;\n}\n\n@-webkit-keyframes sk-pulseScaleOut {\n  0% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    opacity: 0;\n  }\n}\n\n@keyframes sk-pulseScaleOut {\n  0% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    opacity: 0;\n  }\n}\n\n\n/*\n *  Usage:\n *\n      <div class=\"sk-chasing-dots\">\n        <div class=\"sk-child sk-dot1\"></div>\n        <div class=\"sk-child sk-dot2\"></div>\n      </div>\n *\n */\n\n.sk-chasing-dots {\n  margin: 40px auto;\n  width: 40px;\n  height: 40px;\n  position: relative;\n  text-align: center;\n  -webkit-animation: sk-chasingDotsRotate 2s infinite linear;\n  animation: sk-chasingDotsRotate 2s infinite linear;\n}\n\n.sk-chasing-dots .sk-child {\n  width: 60%;\n  height: 60%;\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  background-color: #333;\n  border-radius: 100%;\n  -webkit-animation: sk-chasingDotsBounce 2s infinite ease-in-out;\n  animation: sk-chasingDotsBounce 2s infinite ease-in-out;\n}\n\n.sk-chasing-dots .sk-dot2 {\n  top: auto;\n  bottom: 0;\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s;\n}\n\n@-webkit-keyframes sk-chasingDotsRotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes sk-chasingDotsRotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes sk-chasingDotsBounce {\n  0%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  50% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n@keyframes sk-chasingDotsBounce {\n  0%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  50% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n\n/*\n *  Usage:\n *\n      <div class=\"sk-three-bounce\">\n        <div class=\"sk-child sk-bounce1\"></div>\n        <div class=\"sk-child sk-bounce2\"></div>\n        <div class=\"sk-child sk-bounce3\"></div>\n      </div>\n *\n */\n\n.sk-three-bounce {\n  margin: 40px auto;\n  width: 80px;\n  text-align: center;\n}\n\n.sk-three-bounce .sk-child {\n  width: 20px;\n  height: 20px;\n  background-color: #333;\n  border-radius: 100%;\n  display: inline-block;\n  -webkit-animation: sk-three-bounce 1.4s ease-in-out 0s infinite both;\n  animation: sk-three-bounce 1.4s ease-in-out 0s infinite both;\n}\n\n.sk-three-bounce .sk-bounce1 {\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s;\n}\n\n.sk-three-bounce .sk-bounce2 {\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n}\n\n@-webkit-keyframes sk-three-bounce {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n@keyframes sk-three-bounce {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n\n/*\n *  Usage:\n *\n      <div class=\"sk-circle\">\n        <div class=\"sk-circle1 sk-child\"></div>\n        <div class=\"sk-circle2 sk-child\"></div>\n        <div class=\"sk-circle3 sk-child\"></div>\n        <div class=\"sk-circle4 sk-child\"></div>\n        <div class=\"sk-circle5 sk-child\"></div>\n        <div class=\"sk-circle6 sk-child\"></div>\n        <div class=\"sk-circle7 sk-child\"></div>\n        <div class=\"sk-circle8 sk-child\"></div>\n        <div class=\"sk-circle9 sk-child\"></div>\n        <div class=\"sk-circle10 sk-child\"></div>\n        <div class=\"sk-circle11 sk-child\"></div>\n        <div class=\"sk-circle12 sk-child\"></div>\n      </div>\n *\n */\n\n.sk-circle {\n  margin: 40px auto;\n  width: 40px;\n  height: 40px;\n  position: relative;\n}\n\n.sk-circle .sk-child {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\n.sk-circle .sk-child:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #333;\n  border-radius: 100%;\n  -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\n  animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\n}\n\n.sk-circle .sk-circle2 {\n  -webkit-transform: rotate(30deg);\n  -ms-transform: rotate(30deg);\n  transform: rotate(30deg);\n}\n\n.sk-circle .sk-circle3 {\n  -webkit-transform: rotate(60deg);\n  -ms-transform: rotate(60deg);\n  transform: rotate(60deg);\n}\n\n.sk-circle .sk-circle4 {\n  -webkit-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n\n.sk-circle .sk-circle5 {\n  -webkit-transform: rotate(120deg);\n  -ms-transform: rotate(120deg);\n  transform: rotate(120deg);\n}\n\n.sk-circle .sk-circle6 {\n  -webkit-transform: rotate(150deg);\n  -ms-transform: rotate(150deg);\n  transform: rotate(150deg);\n}\n\n.sk-circle .sk-circle7 {\n  -webkit-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n\n.sk-circle .sk-circle8 {\n  -webkit-transform: rotate(210deg);\n  -ms-transform: rotate(210deg);\n  transform: rotate(210deg);\n}\n\n.sk-circle .sk-circle9 {\n  -webkit-transform: rotate(240deg);\n  -ms-transform: rotate(240deg);\n  transform: rotate(240deg);\n}\n\n.sk-circle .sk-circle10 {\n  -webkit-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n\n.sk-circle .sk-circle11 {\n  -webkit-transform: rotate(300deg);\n  -ms-transform: rotate(300deg);\n  transform: rotate(300deg);\n}\n\n.sk-circle .sk-circle12 {\n  -webkit-transform: rotate(330deg);\n  -ms-transform: rotate(330deg);\n  transform: rotate(330deg);\n}\n\n.sk-circle .sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s;\n}\n\n.sk-circle .sk-circle3:before {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s;\n}\n\n.sk-circle .sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s;\n}\n\n.sk-circle .sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s;\n}\n\n.sk-circle .sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s;\n}\n\n.sk-circle .sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s;\n}\n\n.sk-circle .sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s;\n}\n\n.sk-circle .sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s;\n}\n\n.sk-circle .sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s;\n}\n\n.sk-circle .sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s;\n}\n\n.sk-circle .sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s;\n}\n\n@-webkit-keyframes sk-circleBounceDelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n@keyframes sk-circleBounceDelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n\n/*\n *  Usage:\n *\n      <div class=\"sk-cube-grid\">\n        <div class=\"sk-cube sk-cube1\"></div>\n        <div class=\"sk-cube sk-cube2\"></div>\n        <div class=\"sk-cube sk-cube3\"></div>\n        <div class=\"sk-cube sk-cube4\"></div>\n        <div class=\"sk-cube sk-cube5\"></div>\n        <div class=\"sk-cube sk-cube6\"></div>\n        <div class=\"sk-cube sk-cube7\"></div>\n        <div class=\"sk-cube sk-cube8\"></div>\n        <div class=\"sk-cube sk-cube9\"></div>\n      </div>\n *\n */\n\n.sk-cube-grid {\n  width: 40px;\n  height: 40px;\n  margin: 40px auto;\n  /*\n   * Spinner positions\n   * 1 2 3\n   * 4 5 6\n   * 7 8 9\n   */\n}\n\n.sk-cube-grid .sk-cube {\n  width: 33.33%;\n  height: 33.33%;\n  background-color: #333;\n  float: left;\n  -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n  animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n}\n\n.sk-cube-grid .sk-cube1 {\n  -webkit-animation-delay: 0.2s;\n  animation-delay: 0.2s;\n}\n\n.sk-cube-grid .sk-cube2 {\n  -webkit-animation-delay: 0.3s;\n  animation-delay: 0.3s;\n}\n\n.sk-cube-grid .sk-cube3 {\n  -webkit-animation-delay: 0.4s;\n  animation-delay: 0.4s;\n}\n\n.sk-cube-grid .sk-cube4 {\n  -webkit-animation-delay: 0.1s;\n  animation-delay: 0.1s;\n}\n\n.sk-cube-grid .sk-cube5 {\n  -webkit-animation-delay: 0.2s;\n  animation-delay: 0.2s;\n}\n\n.sk-cube-grid .sk-cube6 {\n  -webkit-animation-delay: 0.3s;\n  animation-delay: 0.3s;\n}\n\n.sk-cube-grid .sk-cube7 {\n  -webkit-animation-delay: 0.0s;\n  animation-delay: 0.0s;\n}\n\n.sk-cube-grid .sk-cube8 {\n  -webkit-animation-delay: 0.1s;\n  animation-delay: 0.1s;\n}\n\n.sk-cube-grid .sk-cube9 {\n  -webkit-animation-delay: 0.2s;\n  animation-delay: 0.2s;\n}\n\n@-webkit-keyframes sk-cubeGridScaleDelay {\n  0%, 70%, 100% {\n    -webkit-transform: scale3D(1, 1, 1);\n    transform: scale3D(1, 1, 1);\n  }\n  35% {\n    -webkit-transform: scale3D(0, 0, 1);\n    transform: scale3D(0, 0, 1);\n  }\n}\n\n@keyframes sk-cubeGridScaleDelay {\n  0%, 70%, 100% {\n    -webkit-transform: scale3D(1, 1, 1);\n    transform: scale3D(1, 1, 1);\n  }\n  35% {\n    -webkit-transform: scale3D(0, 0, 1);\n    transform: scale3D(0, 0, 1);\n  }\n}\n\n\n/*\n *  Usage:\n *\n      <div class=\"sk-fading-circle\">\n        <div class=\"sk-circle1 sk-circle\"></div>\n        <div class=\"sk-circle2 sk-circle\"></div>\n        <div class=\"sk-circle3 sk-circle\"></div>\n        <div class=\"sk-circle4 sk-circle\"></div>\n        <div class=\"sk-circle5 sk-circle\"></div>\n        <div class=\"sk-circle6 sk-circle\"></div>\n        <div class=\"sk-circle7 sk-circle\"></div>\n        <div class=\"sk-circle8 sk-circle\"></div>\n        <div class=\"sk-circle9 sk-circle\"></div>\n        <div class=\"sk-circle10 sk-circle\"></div>\n        <div class=\"sk-circle11 sk-circle\"></div>\n        <div class=\"sk-circle12 sk-circle\"></div>\n      </div>\n *\n */\n\n.sk-fading-circle {\n  margin: 40px auto;\n  width: 40px;\n  height: 40px;\n  position: relative;\n}\n\n.sk-fading-circle .sk-circle {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\n.sk-fading-circle .sk-circle:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #333;\n  border-radius: 100%;\n  -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n  animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n}\n\n.sk-fading-circle .sk-circle2 {\n  -webkit-transform: rotate(30deg);\n  -ms-transform: rotate(30deg);\n  transform: rotate(30deg);\n}\n\n.sk-fading-circle .sk-circle3 {\n  -webkit-transform: rotate(60deg);\n  -ms-transform: rotate(60deg);\n  transform: rotate(60deg);\n}\n\n.sk-fading-circle .sk-circle4 {\n  -webkit-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n\n.sk-fading-circle .sk-circle5 {\n  -webkit-transform: rotate(120deg);\n  -ms-transform: rotate(120deg);\n  transform: rotate(120deg);\n}\n\n.sk-fading-circle .sk-circle6 {\n  -webkit-transform: rotate(150deg);\n  -ms-transform: rotate(150deg);\n  transform: rotate(150deg);\n}\n\n.sk-fading-circle .sk-circle7 {\n  -webkit-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n\n.sk-fading-circle .sk-circle8 {\n  -webkit-transform: rotate(210deg);\n  -ms-transform: rotate(210deg);\n  transform: rotate(210deg);\n}\n\n.sk-fading-circle .sk-circle9 {\n  -webkit-transform: rotate(240deg);\n  -ms-transform: rotate(240deg);\n  transform: rotate(240deg);\n}\n\n.sk-fading-circle .sk-circle10 {\n  -webkit-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n\n.sk-fading-circle .sk-circle11 {\n  -webkit-transform: rotate(300deg);\n  -ms-transform: rotate(300deg);\n  transform: rotate(300deg);\n}\n\n.sk-fading-circle .sk-circle12 {\n  -webkit-transform: rotate(330deg);\n  -ms-transform: rotate(330deg);\n  transform: rotate(330deg);\n}\n\n.sk-fading-circle .sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s;\n}\n\n.sk-fading-circle .sk-circle3:before {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s;\n}\n\n.sk-fading-circle .sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s;\n}\n\n.sk-fading-circle .sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s;\n}\n\n.sk-fading-circle .sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s;\n}\n\n.sk-fading-circle .sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s;\n}\n\n.sk-fading-circle .sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s;\n}\n\n.sk-fading-circle .sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s;\n}\n\n.sk-fading-circle .sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s;\n}\n\n.sk-fading-circle .sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s;\n}\n\n.sk-fading-circle .sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s;\n}\n\n@-webkit-keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0;\n  }\n  40% {\n    opacity: 1;\n  }\n}\n\n@keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0;\n  }\n  40% {\n    opacity: 1;\n  }\n}\n\n\n/*\n *  Usage:\n *\n      <div class=\"sk-folding-cube\">\n        <div class=\"sk-cube1 sk-cube\"></div>\n        <div class=\"sk-cube2 sk-cube\"></div>\n        <div class=\"sk-cube4 sk-cube\"></div>\n        <div class=\"sk-cube3 sk-cube\"></div>\n      </div>\n *\n */\n\n.sk-folding-cube {\n  margin: 40px auto;\n  width: 40px;\n  height: 40px;\n  position: relative;\n  -webkit-transform: rotateZ(45deg);\n  transform: rotateZ(45deg);\n}\n\n.sk-folding-cube .sk-cube {\n  float: left;\n  width: 50%;\n  height: 50%;\n  position: relative;\n  -webkit-transform: scale(1.1);\n  -ms-transform: scale(1.1);\n  transform: scale(1.1);\n}\n\n.sk-folding-cube .sk-cube:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #333;\n  -webkit-animation: sk-foldCubeAngle 2.4s infinite linear both;\n  animation: sk-foldCubeAngle 2.4s infinite linear both;\n  -webkit-transform-origin: 100% 100%;\n  -ms-transform-origin: 100% 100%;\n  transform-origin: 100% 100%;\n}\n\n.sk-folding-cube .sk-cube2 {\n  -webkit-transform: scale(1.1) rotateZ(90deg);\n  transform: scale(1.1) rotateZ(90deg);\n}\n\n.sk-folding-cube .sk-cube3 {\n  -webkit-transform: scale(1.1) rotateZ(180deg);\n  transform: scale(1.1) rotateZ(180deg);\n}\n\n.sk-folding-cube .sk-cube4 {\n  -webkit-transform: scale(1.1) rotateZ(270deg);\n  transform: scale(1.1) rotateZ(270deg);\n}\n\n.sk-folding-cube .sk-cube2:before {\n  -webkit-animation-delay: 0.3s;\n  animation-delay: 0.3s;\n}\n\n.sk-folding-cube .sk-cube3:before {\n  -webkit-animation-delay: 0.6s;\n  animation-delay: 0.6s;\n}\n\n.sk-folding-cube .sk-cube4:before {\n  -webkit-animation-delay: 0.9s;\n  animation-delay: 0.9s;\n}\n\n@-webkit-keyframes sk-foldCubeAngle {\n  0%, 10% {\n    -webkit-transform: perspective(140px) rotateX(-180deg);\n    transform: perspective(140px) rotateX(-180deg);\n    opacity: 0;\n  }\n  25%, 75% {\n    -webkit-transform: perspective(140px) rotateX(0deg);\n    transform: perspective(140px) rotateX(0deg);\n    opacity: 1;\n  }\n  90%, 100% {\n    -webkit-transform: perspective(140px) rotateY(180deg);\n    transform: perspective(140px) rotateY(180deg);\n    opacity: 0;\n  }\n}\n\n@keyframes sk-foldCubeAngle {\n  0%, 10% {\n    -webkit-transform: perspective(140px) rotateX(-180deg);\n    transform: perspective(140px) rotateX(-180deg);\n    opacity: 0;\n  }\n  25%, 75% {\n    -webkit-transform: perspective(140px) rotateX(0deg);\n    transform: perspective(140px) rotateX(0deg);\n    opacity: 1;\n  }\n  90%, 100% {\n    -webkit-transform: perspective(140px) rotateY(180deg);\n    transform: perspective(140px) rotateY(180deg);\n    opacity: 0;\n  }\n}\n", ""]);

// exports


/***/ }),
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 75,
	"./af.js": 75,
	"./ar": 82,
	"./ar-dz": 76,
	"./ar-dz.js": 76,
	"./ar-kw": 77,
	"./ar-kw.js": 77,
	"./ar-ly": 78,
	"./ar-ly.js": 78,
	"./ar-ma": 79,
	"./ar-ma.js": 79,
	"./ar-sa": 80,
	"./ar-sa.js": 80,
	"./ar-tn": 81,
	"./ar-tn.js": 81,
	"./ar.js": 82,
	"./az": 83,
	"./az.js": 83,
	"./be": 84,
	"./be.js": 84,
	"./bg": 85,
	"./bg.js": 85,
	"./bn": 86,
	"./bn.js": 86,
	"./bo": 87,
	"./bo.js": 87,
	"./br": 88,
	"./br.js": 88,
	"./bs": 89,
	"./bs.js": 89,
	"./ca": 90,
	"./ca.js": 90,
	"./cs": 91,
	"./cs.js": 91,
	"./cv": 92,
	"./cv.js": 92,
	"./cy": 93,
	"./cy.js": 93,
	"./da": 94,
	"./da.js": 94,
	"./de": 97,
	"./de-at": 95,
	"./de-at.js": 95,
	"./de-ch": 96,
	"./de-ch.js": 96,
	"./de.js": 97,
	"./dv": 98,
	"./dv.js": 98,
	"./el": 99,
	"./el.js": 99,
	"./en-au": 100,
	"./en-au.js": 100,
	"./en-ca": 101,
	"./en-ca.js": 101,
	"./en-gb": 102,
	"./en-gb.js": 102,
	"./en-ie": 103,
	"./en-ie.js": 103,
	"./en-nz": 104,
	"./en-nz.js": 104,
	"./eo": 105,
	"./eo.js": 105,
	"./es": 107,
	"./es-do": 106,
	"./es-do.js": 106,
	"./es.js": 107,
	"./et": 108,
	"./et.js": 108,
	"./eu": 109,
	"./eu.js": 109,
	"./fa": 110,
	"./fa.js": 110,
	"./fi": 111,
	"./fi.js": 111,
	"./fo": 112,
	"./fo.js": 112,
	"./fr": 115,
	"./fr-ca": 113,
	"./fr-ca.js": 113,
	"./fr-ch": 114,
	"./fr-ch.js": 114,
	"./fr.js": 115,
	"./fy": 116,
	"./fy.js": 116,
	"./gd": 117,
	"./gd.js": 117,
	"./gl": 118,
	"./gl.js": 118,
	"./gom-latn": 119,
	"./gom-latn.js": 119,
	"./he": 120,
	"./he.js": 120,
	"./hi": 121,
	"./hi.js": 121,
	"./hr": 122,
	"./hr.js": 122,
	"./hu": 123,
	"./hu.js": 123,
	"./hy-am": 124,
	"./hy-am.js": 124,
	"./id": 125,
	"./id.js": 125,
	"./is": 126,
	"./is.js": 126,
	"./it": 127,
	"./it.js": 127,
	"./ja": 128,
	"./ja.js": 128,
	"./jv": 129,
	"./jv.js": 129,
	"./ka": 130,
	"./ka.js": 130,
	"./kk": 131,
	"./kk.js": 131,
	"./km": 132,
	"./km.js": 132,
	"./kn": 133,
	"./kn.js": 133,
	"./ko": 134,
	"./ko.js": 134,
	"./ky": 135,
	"./ky.js": 135,
	"./lb": 136,
	"./lb.js": 136,
	"./lo": 137,
	"./lo.js": 137,
	"./lt": 138,
	"./lt.js": 138,
	"./lv": 139,
	"./lv.js": 139,
	"./me": 140,
	"./me.js": 140,
	"./mi": 141,
	"./mi.js": 141,
	"./mk": 142,
	"./mk.js": 142,
	"./ml": 143,
	"./ml.js": 143,
	"./mr": 144,
	"./mr.js": 144,
	"./ms": 146,
	"./ms-my": 145,
	"./ms-my.js": 145,
	"./ms.js": 146,
	"./my": 147,
	"./my.js": 147,
	"./nb": 148,
	"./nb.js": 148,
	"./ne": 149,
	"./ne.js": 149,
	"./nl": 151,
	"./nl-be": 150,
	"./nl-be.js": 150,
	"./nl.js": 151,
	"./nn": 152,
	"./nn.js": 152,
	"./pa-in": 153,
	"./pa-in.js": 153,
	"./pl": 154,
	"./pl.js": 154,
	"./pt": 156,
	"./pt-br": 155,
	"./pt-br.js": 155,
	"./pt.js": 156,
	"./ro": 157,
	"./ro.js": 157,
	"./ru": 158,
	"./ru.js": 158,
	"./sd": 159,
	"./sd.js": 159,
	"./se": 160,
	"./se.js": 160,
	"./si": 161,
	"./si.js": 161,
	"./sk": 162,
	"./sk.js": 162,
	"./sl": 163,
	"./sl.js": 163,
	"./sq": 164,
	"./sq.js": 164,
	"./sr": 166,
	"./sr-cyrl": 165,
	"./sr-cyrl.js": 165,
	"./sr.js": 166,
	"./ss": 167,
	"./ss.js": 167,
	"./sv": 168,
	"./sv.js": 168,
	"./sw": 169,
	"./sw.js": 169,
	"./ta": 170,
	"./ta.js": 170,
	"./te": 171,
	"./te.js": 171,
	"./tet": 172,
	"./tet.js": 172,
	"./th": 173,
	"./th.js": 173,
	"./tl-ph": 174,
	"./tl-ph.js": 174,
	"./tlh": 175,
	"./tlh.js": 175,
	"./tr": 176,
	"./tr.js": 176,
	"./tzl": 177,
	"./tzl.js": 177,
	"./tzm": 179,
	"./tzm-latn": 178,
	"./tzm-latn.js": 178,
	"./tzm.js": 179,
	"./uk": 180,
	"./uk.js": 180,
	"./ur": 181,
	"./ur.js": 181,
	"./uz": 183,
	"./uz-latn": 182,
	"./uz-latn.js": 182,
	"./uz.js": 183,
	"./vi": 184,
	"./vi.js": 184,
	"./x-pseudo": 185,
	"./x-pseudo.js": 185,
	"./yo": 186,
	"./yo.js": 186,
	"./zh-cn": 187,
	"./zh-cn.js": 187,
	"./zh-hk": 188,
	"./zh-hk.js": 188,
	"./zh-tw": 189,
	"./zh-tw.js": 189
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 344;

/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(429)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(221),
  /* template */
  __webpack_require__(397),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/transportWebServer/transportWebApp/src/components/Caurosel/Carousel.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Carousel.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fad355bc", Component.options)
  } else {
    hotAPI.reload("data-v-fad355bc", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(422)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(222),
  /* template */
  __webpack_require__(390),
  /* scopeId */
  "data-v-ad663d54",
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/transportWebServer/transportWebApp/src/components/Caurosel/Navigation.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Navigation.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ad663d54", Component.options)
  } else {
    hotAPI.reload("data-v-ad663d54", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(424)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(223),
  /* template */
  __webpack_require__(392),
  /* scopeId */
  "data-v-b0bc4848",
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/transportWebServer/transportWebApp/src/components/Caurosel/Pagination.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Pagination.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b0bc4848", Component.options)
  } else {
    hotAPI.reload("data-v-b0bc4848", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(404)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(225),
  /* template */
  __webpack_require__(372),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/transportWebServer/transportWebApp/src/components/CreatePreferencePage/BusSelectionPage/BusSelectionPage.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] BusSelectionPage.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2439a0fd", Component.options)
  } else {
    hotAPI.reload("data-v-2439a0fd", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(405)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(226),
  /* template */
  __webpack_require__(373),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/transportWebServer/transportWebApp/src/components/CreatePreferencePage/CreatePreferenceHomePage/CreatePreferenceHomePage.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] CreatePreferenceHomePage.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-271bd03d", Component.options)
  } else {
    hotAPI.reload("data-v-271bd03d", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(408)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(227),
  /* template */
  __webpack_require__(376),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/transportWebServer/transportWebApp/src/components/CreatePreferencePage/CustomizationApp.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] CustomizationApp.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-311be7f0", Component.options)
  } else {
    hotAPI.reload("data-v-311be7f0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(410)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(228),
  /* template */
  __webpack_require__(378),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/transportWebServer/transportWebApp/src/components/CreatePreferencePage/DirectionSelectionPage/DirectionSelectionPage.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] DirectionSelectionPage.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-370f33dd", Component.options)
  } else {
    hotAPI.reload("data-v-370f33dd", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(425)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(229),
  /* template */
  __webpack_require__(393),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/transportWebServer/transportWebApp/src/components/CreatePreferencePage/EditPreferencePage/EditPreferencePage.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] EditPreferencePage.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b9c67f46", Component.options)
  } else {
    hotAPI.reload("data-v-b9c67f46", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(412)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(230),
  /* template */
  __webpack_require__(380),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/transportWebServer/transportWebApp/src/components/CreatePreferencePage/HomeWrapper.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] HomeWrapper.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3edf9202", Component.options)
  } else {
    hotAPI.reload("data-v-3edf9202", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(428)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(232),
  /* template */
  __webpack_require__(396),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/transportWebServer/transportWebApp/src/components/CreatePreferencePage/PreferenceConfirmationModal/PreferenceConfirmationModal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PreferenceConfirmationModal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f5bc194e", Component.options)
  } else {
    hotAPI.reload("data-v-f5bc194e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(427)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(233),
  /* template */
  __webpack_require__(395),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/transportWebServer/transportWebApp/src/components/CreatePreferencePage/PreferenceDeleteConfirmationModal/PreferenceDeleteConfirmationModal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PreferenceDeleteConfirmationModal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ef99ad7a", Component.options)
  } else {
    hotAPI.reload("data-v-ef99ad7a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 356 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(419)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(237),
  /* template */
  __webpack_require__(387),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/transportWebServer/transportWebApp/src/components/CreatePreferencePage/StationSelectionPage/StationSelectionPage.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] StationSelectionPage.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7747787d", Component.options)
  } else {
    hotAPI.reload("data-v-7747787d", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(426)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(238),
  /* template */
  __webpack_require__(394),
  /* scopeId */
  "data-v-bbb6398a",
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/transportWebServer/transportWebApp/src/components/CreatePreferencePage/UserPreference/UserPreferenceDummy.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UserPreferenceDummy.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bbb6398a", Component.options)
  } else {
    hotAPI.reload("data-v-bbb6398a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(421)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(239),
  /* template */
  __webpack_require__(389),
  /* scopeId */
  "data-v-9430ade8",
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/transportWebServer/transportWebApp/src/components/Displaypage/DisplayPage.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] DisplayPage.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9430ade8", Component.options)
  } else {
    hotAPI.reload("data-v-9430ade8", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(400)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(240),
  /* template */
  __webpack_require__(368),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/transportWebServer/transportWebApp/src/components/aroundMe/aroundMe.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] aroundMe.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-04e43b28", Component.options)
  } else {
    hotAPI.reload("data-v-04e43b28", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(401)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(242),
  /* template */
  __webpack_require__(369),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/transportWebServer/transportWebApp/src/components/connectionCard/connectionCardInfo/connectionCardInfo.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] connectionCardInfo.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-11adb565", Component.options)
  } else {
    hotAPI.reload("data-v-11adb565", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(415)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(243),
  /* template */
  __webpack_require__(383),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/transportWebServer/transportWebApp/src/components/defaultInformation/defaultInformation.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] defaultInformation.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-46adc668", Component.options)
  } else {
    hotAPI.reload("data-v-46adc668", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(423)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(244),
  /* template */
  __webpack_require__(391),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/transportWebServer/transportWebApp/src/components/stationCard/BusPassList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] BusPassList.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-af7b1686", Component.options)
  } else {
    hotAPI.reload("data-v-af7b1686", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(399)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(245),
  /* template */
  __webpack_require__(367),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/transportWebServer/transportWebApp/src/components/stationCard/StationCardDummy.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] StationCardDummy.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-04bd6846", Component.options)
  } else {
    hotAPI.reload("data-v-04bd6846", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(418)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(246),
  /* template */
  __webpack_require__(386),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/transportWebServer/transportWebApp/src/components/stationCard/StationCardWithConnection.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] StationCardWithConnection.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-53a83e96", Component.options)
  } else {
    hotAPI.reload("data-v-53a83e96", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(417)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(249),
  /* template */
  __webpack_require__(385),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/transportWebServer/transportWebApp/src/components/usersContent/usersContent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] usersContent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4e6168a8", Component.options)
  } else {
    hotAPI.reload("data-v-4e6168a8", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(409)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(250),
  /* template */
  __webpack_require__(377),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/transportWebServer/transportWebApp/src/components/volatileLocations/volatileLocations.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] volatileLocations.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-333e7c8e", Component.options)
  } else {
    hotAPI.reload("data-v-333e7c8e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "uk-card uk-card-default uk-card-body"
  }, [_c('div', {
    staticClass: "dummy--background-color dummy__text"
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-04bd6846", module.exports)
  }
}

/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "uk-margin-bottom"
  }, [(this.$store.state.isLoadingNearbyLocations) ? _c('div', {
    staticClass: "uk-flex-center uk-flex"
  }, [_c('div', {
    staticClass: "uk-spinner--large",
    attrs: {
      "uk-spinner": ""
    }
  })]) : _c('carousel', {
    attrs: {
      "perPageCustom": [
        [350, 1],
        [640, 2],
        [1024, 3],
        [1280, 4]
      ],
      "navigationEnabled": true
    }
  }, _vm._l((this.$store.state.locations), function(station, index) {
    return _c('slide', [_c('station-card', {
      staticClass: "slide__item--margin",
      attrs: {
        "station": station,
        "showConnection": false,
        "activator": true
      }
    })], 1)
  }))], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-04e43b28", module.exports)
  }
}

/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "transportCardInfo"
    }
  })
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-11adb565", module.exports)
  }
}

/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "uk-flex uk-flex-column"
  }, [_c('div', {
    staticClass: "uk-margin-left uk-margin-right uk-section uk-section-small"
  }, [_c('h3', [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), (_vm.subtitle) ? _c('h6', [_vm._v(_vm._s(_vm.subtitle))]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "uk-background-muted uk-flex--grow"
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-226ce802", module.exports)
  }
}

/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "uk-card uk-card-default uk-card-body resource",
    class: {
      'uk-box-shadow-large': _vm.toogle
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-226f7b46", module.exports)
  }
}

/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('selector-wrapper', {
    attrs: {
      "title": "Select a Bus"
    }
  }, [_c('div', {
    staticClass: "uk-container bottom--offset"
  }, [_c('div', {
    staticClass: "uk-margin-top"
  }, [_c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [(_vm.showError) ? _c('div', {
    staticClass: "uk-alert-danger",
    attrs: {
      "uk-alert": ""
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.error.msg))])]) : _vm._e()]), _vm._v(" "), _c('resource-transition-wrapper', _vm._l((this.$store.state.connections), function(bus) {
    return _c('div', {
      key: bus,
      staticClass: "uk-width-1-1"
    }, [_c('resource', {
      attrs: {
        "toogle": bus.toogle
      },
      nativeOn: {
        "click": function($event) {
          _vm.toogle(bus)
        }
      }
    }, [_c('h3', [_vm._v(_vm._s(bus.number))])])], 1)
  }))], 1)]), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-top navigation__actions"
  }, [_c('v-btn', {
    staticClass: "grey--text grey--darken-2",
    attrs: {
      "icon": "icon"
    },
    nativeOn: {
      "click": function($event) {
        _vm.$router.go(-1)
      }
    }
  }, [_c('v-icon', [_vm._v("arrow_back")])], 1), _vm._v(" "), _c('v-btn', {
    staticClass: "grey--text grey--darken-2 uk-float-right",
    attrs: {
      "icon": "icon"
    },
    nativeOn: {
      "click": function($event) {
        _vm.next($event)
      }
    }
  }, [_c('v-icon', [_vm._v("arrow_forward")])], 1)], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2439a0fd", module.exports)
  }
}

/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('home-wrapper', [_c('preference-delete-confirmation-modal'), _vm._v(" "), (_vm.$store.state.user.preferences.loading) ? _c('div') : (_vm.$store.state.user.preferences.data.length <= 0) ? _c('div', {
    staticClass: "uk-text-center absolute--center"
  }, [_c('h6', {
    staticClass: "uk-text-meta uk-text-large"
  }, [_vm._v("No preferences found.")])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "uk-container uk-margin-small-top"
  }, [_c('resource-transition-wrapper', _vm._l((_vm.$store.state.user.preferences.data), function(preference) {
    return _c('div', {
      key: preference
    }, [_c('preference', {
      attrs: {
        "preference": preference
      }
    })], 1)
  }))], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-271bd03d", module.exports)
  }
}

/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (!_vm.showConnection) ? _c('div', {
    staticClass: "uk-card uk-card-default"
  }, [_c('div', {
    staticClass: "uk-card-body my-card--padding"
  }, [_c('div', {
    staticClass: "uk-flex uk-flex-column uk-margin-small-bottom"
  }, [_c('div', {
    staticClass: "uk-flex uk-flex-middle"
  }, [_c('v-icon', {
    staticClass: "uk-margin-right"
  }, [_vm._v("place")]), _vm._v(" "), _c('h5', {
    staticClass: "uk-margin-remove"
  }, [_vm._v(_vm._s(_vm.station.name))])], 1), _vm._v(" "), _c('div', {
    staticClass: "uk-flex uk-flex-middle"
  }, [_c('v-icon', [_vm._v("directions_bus")]), _vm._v(" "), _c('div', {
    staticClass: "uk-flex"
  }, _vm._l((_vm.station.buses), function(bus) {
    return _c('div', {
      staticClass: "uk-margin-small-left"
    }, [_c('h6', {
      staticClass: "bus--small uk-margin-remove"
    }, [_vm._v("\n    " + _vm._s(bus.number) + "\n  ")])])
  }))], 1)]), _vm._v(" "), (_vm.activator) ? _c('button', {
    staticClass: "uk-button uk-button-primary",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.showStationWithInformation
    }
  }, [_vm._v(" leaving soon\n        ")]) : _vm._e()])]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2dc0945c", module.exports)
  }
}

/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "VueCarousel-slide"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2f6a5edf", module.exports)
  }
}

/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "f-h"
  }, [_c('keep-alive', [_c('router-view', {
    staticClass: "f-v"
  })], 1), _vm._v(" "), _c('preference-confirmationModal')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-311be7f0", module.exports)
  }
}

/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition-group', {
    staticClass: "uk-flex uk-flex-nowrap",
    attrs: {
      "name": "custom-classes-transition",
      "enter-active-class": "animated fadeInRight",
      "leave-class": "animated fadeOutUp",
      "leave-active-class": "animated fadeOutUp",
      "uk-grid": ""
    }
  }, [_c('div', {
    key: "default",
    staticClass: "uk-width-1-3@m"
  }, [_c('station-card-with-connection', {
    attrs: {
      "station": this.$store.state.display.defaultStation,
      "show": true
    }
  })], 1), _vm._v(" "), _vm._l((this.$store.state.openedLocations), function(station) {
    return _c('div', {
      key: station,
      staticClass: "uk-visible@m uk-width-1-3"
    }, [_c('station-card-with-connection', {
      attrs: {
        "station": station,
        "autoDestroy": "true",
        "show": true
      }
    })], 1)
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-333e7c8e", module.exports)
  }
}

/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('selector-wrapper', {
    attrs: {
      "title": "Select directions"
    }
  }, [_c('div', {
    staticClass: "uk-container bottom--offset"
  }, [_c('div', {
    staticClass: "uk-margin-top"
  }, [_c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [(_vm.showError) ? _c('div', {
    staticClass: "uk-alert-danger",
    attrs: {
      "uk-alert": ""
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.error.msg))])]) : _vm._e()]), _vm._v(" "), _c('resource-transition-wrapper', _vm._l((_vm.stationboards), function(stationboard) {
    return _c('div', {
      key: stationboard
    }, [_c('resource', {
      attrs: {
        "toogle": stationboard.toogle
      },
      nativeOn: {
        "click": function($event) {
          _vm.toogleStationboard(stationboard)
        }
      }
    }, [_c('div', {
      staticClass: "uk-flex uk-flex-middle"
    }, [_c('h3', {
      staticClass: "uk-margin-remove"
    }, [_vm._v(_vm._s(stationboard.bus.number))]), _vm._v(" "), _c('div', {
      staticClass: "uk-margin-left"
    }, [_c('p', {
      staticClass: "uk-margin-remove"
    }, [_vm._v(_vm._s(stationboard.to))])])])])], 1)
  }))], 1)]), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-top navigation__actions"
  }, [_c('v-btn', {
    staticClass: "grey--text grey--darken-2",
    attrs: {
      "icon": "icon"
    },
    nativeOn: {
      "click": function($event) {
        _vm.$router.go(-1)
      }
    }
  }, [_c('v-icon', [_vm._v("arrow_back")])], 1), _vm._v(" "), (!_vm.$store.state.isInEditMode) ? _c('v-btn', {
    staticClass: "grey--text grey--darken-2 uk-float-right",
    attrs: {
      "icon": "icon"
    },
    nativeOn: {
      "click": function($event) {
        _vm.next($event)
      }
    }
  }, [_c('v-icon', [_vm._v("done")])], 1) : _c('v-btn', {
    staticClass: "grey--text grey--darken-2 uk-float-right",
    attrs: {
      "icon": "icon"
    },
    nativeOn: {
      "click": function($event) {
        _vm.$router.go(-2)
      }
    }
  }, [_c('v-icon', [_vm._v("done")])], 1)], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-370f33dd", module.exports)
  }
}

/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "App"
    }
  }, [_c('router-view')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3af42142", module.exports)
  }
}

/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "uk-flex uk-flex-column f-h uk-margin-small-top"
  }, [_c('div', {
    staticClass: "uk-margin-bottom uk-margin-left uk-margin-right uk-flex-column"
  }, [_c('h3', {
    staticClass: "uk-margin-remove"
  }, [_vm._v("Your preferences\n")]), _vm._v(" "), _c('small', {
    staticClass: "uk-text-meta"
  }, [_vm._v(_vm._s(_vm.$store.state.user.preferences.data.length) + " entries")])]), _vm._v(" "), _c('div', {
    staticClass: "uk-background-muted uk-flex--grow"
  }, [_vm._t("default")], 2), _vm._v(" "), _c('v-btn', {
    attrs: {
      "primary": "",
      "floating": "",
      "dark": "",
      "id": "create-preference__btn"
    },
    nativeOn: {
      "click": function($event) {
        _vm.$router.push({
          name: 'station',
          params: _vm.$route.params
        })
      }
    }
  }, [_c('v-icon', {
    attrs: {
      "light": ""
    }
  }, [_vm._v("add")])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3edf9202", module.exports)
  }
}

/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "uk-card uk-card-default uk-card-body"
  }, [(!_vm.preview) ? _c('div', {
    staticClass: "preference__actions uk-flex"
  }, [_c('div', [_c('v-btn', {
    staticClass: "grey--text text--darken-2",
    attrs: {
      "icon": "icon"
    },
    nativeOn: {
      "click": function($event) {
        _vm.$store.actions.tooglePreferenceEdit(_vm.preference)
      }
    }
  }, [_c('v-icon', [_vm._v("mode_edit")])], 1)], 1), _vm._v(" "), _c('div', [_c('v-btn', {
    staticClass: "grey--text text--darken-2",
    attrs: {
      "icon": "icon",
      "uk-toggle": "target: #preference-delete-confirmation__modal"
    },
    nativeOn: {
      "click": function($event) {
        _vm.$store.state.preference = _vm.preference
      }
    }
  }, [_c('v-icon', [_vm._v("delete")])], 1)], 1)]) : _vm._e(), _vm._v(" "), (_vm.preference.station) ? _c('div', [_c('h6', [_c('span', {
    attrs: {
      "uk-icon": "icon: location;ratio: 1.3"
    }
  }), _vm._v("\n" + _vm._s(_vm.preference.station.name))]), _vm._v(" "), _vm._l((_vm.preference.buses), function(bus) {
    return _c('div', [_c('div', {
      staticClass: "uk-flex uk-flex-middle"
    }, [_c('h3', {
      staticClass: "uk-margin-remove"
    }, [_vm._v(_vm._s(bus.number))]), _vm._v(" "), _c('div', {
      staticClass: "uk-margin-left"
    }, [_c('p', {
      staticClass: "uk-margin-remove"
    }, [_vm._v(_vm._s(bus.to))])])])])
  })], 2) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-433098fd", module.exports)
  }
}

/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "uk-flex-expand uk-flex uk-flex-middle"
  }, [(_vm.connection.triggered && !_vm.location.isUser && _vm.connection.colors.length > 0) ? _c('div', {
    staticClass: "uk-flex uk-flex-column connection--user-nearby--active"
  }, _vm._l((_vm.connection.colors), function(color) {
    return _c('div', {
      staticClass: "flex-1 ",
      style: ({
        'background': color
      })
    })
  })) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-right"
  }, [_c('div', {
    staticClass: "connection-number__container"
  }, [_c('h3', {
    staticClass: "uk-margin-remove"
  }, [_vm._v(" " + _vm._s(_vm.connection.number))])])]), _vm._v(" "), _c('div', {
    staticClass: "uk-flex-grow"
  }), _vm._v(" "), _c('div', {
    staticClass: "uk-width-1-1 uk-margin-right uk-flex uk-flex-column"
  }, [_c('div', {
    staticClass: "uk-flex"
  }, [_c('div', {
    staticClass: "uk-margin-small-right"
  }, [_c('v-icon', [_vm._v("arrow_forward")])], 1), _vm._v(" "), _c('div', [_c('h6', {
    staticClass: "uk-margin-remove"
  }, [_vm._v(_vm._s(_vm.connection.to))])])]), _vm._v(" "), _c('div', {
    staticClass: "uk-flex uk-flex-middle"
  }, [_c('p', {
    staticClass: "uk-margin-remove bus-time"
  }, [_vm._v(" " + _vm._s(_vm.parseArrivalTime(_vm.connection.stop.departure)))]), _vm._v(" "), (_vm.arrivesNow) ? _c('v-chip', {
    staticClass: "red red--text",
    attrs: {
      "outline": "",
      "small": ""
    }
  }, [_vm._v("\n        arriving\n      ")]) : _vm._e()], 1)]), _vm._v(" "), _c('div', {
    staticClass: "uk-flex-grow"
  }), _vm._v(" "), _c('div', {
    staticClass: " uk-float-right",
    class: {
      'animated infinite pulse': this.arrivesNow
    }
  }, [(_vm.getArrivalTimeFromNow().minutes() == 0) ? _c('h5', {
    staticClass: "uk-margin-remove-bottom uk-text-center"
  }, [_vm._v("Now")]) : _c('h4', {
    staticClass: "uk-margin-remove-bottom uk-text-center"
  }, [_vm._v(" " + _vm._s(_vm.getArrivalTimeFromNow().minutes() + "'"))]), _vm._v(" "), _c('small', [_vm._v("arrives")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-44e2d1f0", module.exports)
  }
}

/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card-group"
  })
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-46adc668", module.exports)
  }
}

/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition-group', {
    staticClass: "uk-flex uk-flex-column uk-grid-small container--offset",
    attrs: {
      "name": "custom-classes-transition",
      "uk-grid": ""
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-477c5bd1", module.exports)
  }
}

/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "uk-flex uk-flex-column full-h"
  }, [(_vm.$store.state.usersLocations.length == 0) ? _c('div', {
    staticClass: "uk-flex uk-flex-center uk-flex-column uk-flex-middle full-h uk-animation-fade"
  }) : _vm._e(), _vm._v(" "), _vm._l((_vm.$store.state.usersLocations), function(location) {
    return _c('station-card', {
      attrs: {
        "station": location,
        "showConnection": true,
        "user": true,
        "autoDestroy": "true"
      }
    })
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4e6168a8", module.exports)
  }
}

/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    staticClass: "uk-card uk-card-default station-card__connection",
    class: {
      'animated shake': _vm.station.openFeedback
    }
  }, [_c('div', {
    staticClass: "uk-card-body my-card--padding"
  }, [_c('div', {
    staticClass: "uk-flex uk-flex-middle"
  }, [_c('v-icon', {
    staticClass: "uk-margin-right",
    attrs: {
      "large": ""
    }
  }, [_vm._v("place")]), _vm._v(" "), _c('h4', {
    staticClass: "uk-margin-remove"
  }, [_vm._v(_vm._s(_vm.station.name))]), _vm._v(" "), _c('div', {
    staticClass: "uk-flex-grow"
  }), _vm._v(" "), _c('v-icon', {
    staticClass: "uk-margin-left"
  }, [_vm._v("access_time")])], 1), _vm._v(" "), (_vm.toogleBusList) ? _c('v-btn', {
    attrs: {
      "icon": ""
    },
    nativeOn: {
      "click": function($event) {
        _vm.toogleBusList = false
      }
    }
  }, [_c('v-icon', {
    staticClass: "grey--text text--darken-2"
  }, [_vm._v("arrow_back")])], 1) : _vm._e(), _vm._v(" "), (_vm.station.duration) ? _c('div', {
    staticClass: "uk-flex uk-flex-middle"
  }, [_c('v-icon', {
    staticClass: "uk-margin-small-left"
  }, [_vm._v("directions_walk")]), _vm._v("\n      " + _vm._s(_vm.station.duration.text) + "\n      "), (_vm.station.duration && !_vm.toogleMap) ? _c('v-btn', {
    attrs: {
      "icon": ""
    },
    nativeOn: {
      "click": function($event) {
        _vm.showMap()
      }
    }
  }, [_c('v-icon', {
    staticClass: "grey--text text--darken-2"
  }, [_vm._v("directions")])], 1) : _c('v-btn', {
    attrs: {
      "icon": ""
    },
    nativeOn: {
      "click": function($event) {
        _vm.showMap()
      }
    }
  }, [_c('v-icon', {
    staticClass: "grey--text text--darken-2"
  }, [_vm._v("arrow_back")])], 1)], 1) : _vm._e(), _vm._v(" "), (!_vm.toogleMap) ? _c('hr') : _vm._e(), _vm._v(" "), (!_vm.toogleMap && !_vm.toogleBusList) ? _c('div', {
    staticClass: "uk-flex uk-flex-column uk-margin-top",
    attrs: {
      "uk-grid": ""
    }
  }, [(!_vm.hasBuses) ? _c('div', [_c('div', {
    staticClass: "uk-text-center uk-flex-center\t uk-flex uk-card uk-card-body uk-card-body-small"
  }, [_c('v-icon', [_vm._v("directions_bus")]), _vm._v(" "), _vm._m(0)], 1)]) : _vm._e(), _vm._v(" "), _vm._l((_vm.station.stationboard), function(connection) {
    return (_vm.station.stationboard) ? _c('div', [_c('connection-card', {
      attrs: {
        "connection": connection,
        "behavior": "list",
        "location": _vm.station
      },
      nativeOn: {
        "click": function($event) {
          _vm.showPassList(connection)
        }
      }
    })], 1) : _vm._e()
  })], 2) : _vm._e(), _vm._v(" "), (_vm.toogleBusList) ? _c('bus-pass-list', {
    attrs: {
      "bus": _vm.selectedConnection
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.toogleMap),
      expression: "toogleMap"
    }],
    staticClass: "map",
    attrs: {
      "id": _vm.station.id + 'map'
    }
  })])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "uk-margin-small-left"
  }, [_c('h5', {
    staticClass: "uk-margin-remove"
  }, [_vm._v("No buses")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-53a83e96", module.exports)
  }
}

/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('selector-wrapper', {
    attrs: {
      "title": "Select Station"
    }
  }, [_c('div', {
    staticClass: "uk-container bottom--offset"
  }, [_c('div', {
    staticClass: "uk-margin-top"
  }, [_c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [(_vm.showError) ? _c('div', {
    staticClass: "uk-alert-danger",
    attrs: {
      "uk-alert": ""
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.error.msg))])]) : _vm._e()]), _vm._v(" "), _c('resource-transition-wrapper', _vm._l((_vm.$store.state.locations), function(station) {
    return _c('div', {
      key: station,
      staticClass: "uk-width-1-1"
    }, [_c('resource', {
      attrs: {
        "toogle": station.id == _vm.$store.state.preference.station.id
      },
      nativeOn: {
        "click": function($event) {
          _vm.$store.PreferenceStore.addStationToPreference({
            station: station
          })
        }
      }
    }, [_c('h6', [_c('span', {
      attrs: {
        "uk-icon": "icon: location;ratio: 1.3"
      }
    }), _vm._v("\n        " + _vm._s(station.name))])])], 1)
  }))], 1)]), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-top navigation__actions"
  }, [_c('v-btn', {
    staticClass: "grey--text grey--darken-2",
    attrs: {
      "icon": "icon"
    },
    nativeOn: {
      "click": function($event) {
        _vm.$router.go(-1)
      }
    }
  }, [_c('v-icon', [_vm._v("arrow_back")])], 1)], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7747787d", module.exports)
  }
}

/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "stationCardInfo"
    }
  })
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-92a42b7a", module.exports)
  }
}

/***/ }),
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "full-h uk-background-muted",
    attrs: {
      "id": "display-page__container"
    }
  }, [_c('div', {
    staticClass: "uk-container uk-container-large full-h"
  }, [_c('div', {
    staticClass: "uk-flex uk-flex-unwrap uk-flex-column full-h",
    attrs: {
      "uk-grid": ""
    }
  }, [_c('div', {
    staticClass: "uk-flex uk-flex-grow uk-margin-top uk-width-1-1 "
  }, [_c('div', {
    staticClass: " uk-width-1-1 uk-flex uk-flex-column"
  }, [_c('volatile-locations', {
    staticClass: "uk-flex-center uk-flex-left@m uk-flex-nowrap"
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "uk-width-1-1 uk-visible@m"
  }, [_c('around-me')], 1)])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9430ade8", module.exports)
  }
}

/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "VueCarousel-navigation"
  }, [_c('v-btn', {
    staticClass: "grey--text text--darken-2 VueCarousel-navigation-button VueCarousel-navigation-prev btn--huge",
    attrs: {
      "icon": "",
      "disabled": !_vm.canAdvanceBackward
    },
    nativeOn: {
      "click": function($event) {
        _vm.triggerPageAdvance('backward')
      }
    }
  }, [_c('v-icon', {
    staticClass: "icon--huge "
  }, [_vm._v("keyboard_arrow_left")])], 1), _vm._v(" "), _c('v-btn', {
    staticClass: "grey--text text--darken-2 VueCarousel-navigation-button VueCarousel-navigation-next btn--huge",
    attrs: {
      "icon": "",
      "disabled": !_vm.canAdvanceForward
    },
    nativeOn: {
      "click": function($event) {
        _vm.triggerPageAdvance()
      }
    }
  }, [_c('v-icon', {
    staticClass: "icon--huge"
  }, [_vm._v("keyboard_arrow_right")])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ad663d54", module.exports)
  }
}

/***/ }),
/* 391 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "uk-flex-column"
  }, _vm._l((_vm.bus.passList), function(pass) {
    return _c('div', [_c('h6', [_vm._v(_vm._s(pass.station.name))]), _vm._v(" " + _vm._s(_vm.parseTime(pass.stop.departure)) + "\n\n  ")])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-af7b1686", module.exports)
  }
}

/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.parentContainer.pageCount > 1),
      expression: "parentContainer.pageCount > 1"
    }],
    staticClass: "VueCarousel-pagination"
  }, [_c('div', {
    staticClass: "VueCarousel-dot-container"
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b0bc4848", module.exports)
  }
}

/***/ }),
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "uk-container uk-margin-small-top"
  }, [_c('div', {
    staticClass: "uk-card content bottom--offset"
  }, [_c('h3', {
    staticClass: "uk-margin-remove"
  }, [_c('span', {
    attrs: {
      "uk-icon": "icon: location;ratio: 1.3"
    }
  }), _vm._v("   " + _vm._s(_vm.$store.state.preference.station.name))]), _vm._v(" "), _c('h5', [_vm._v("Change buses ")]), _vm._v(" "), (_vm.$store.state.preference.buses) ? _c('div', {
    on: {
      "click": function($event) {
        _vm.$router.push({
          name: 'bus'
        })
      }
    }
  }, [_c('div', {
    staticClass: "uk-flex",
    attrs: {
      "uk-grid": ""
    }
  }, _vm._l((_vm.$store.state.preference.buses), function(bus) {
    return _c('div', [_c('div', {
      staticClass: "uk-card uk-card-default uk-card-body my-card--padding",
      on: {
        "click": function($event) {
          _vm.$router.push({
            name: 'bus'
          })
        }
      }
    }, [_vm._v("\n            " + _vm._s(bus.number) + "\n          ")])])
  }))]) : _vm._e(), _vm._v(" "), (_vm.$store.state.preference.buses.length <= 0) ? _c('h6', {
    staticClass: "uk-text-center",
    on: {
      "click": function($event) {
        _vm.$router.push({
          name: 'bus'
        })
      }
    }
  }, [_vm._v(" No bus selected ")]) : _vm._e(), _vm._v(" "), _c('h5', [_vm._v("Change locations")]), _vm._v(" "), _c('div', {
    staticClass: "uk-flex uk-flex-column",
    attrs: {
      "uk-grid": ""
    }
  }, _vm._l((_vm.$store.state.preference.buses), function(bus) {
    return _c('div', [_c('div', {
      staticClass: "uk-card uk-card-default uk-card-body my-card--padding",
      on: {
        "click": function($event) {
          _vm.$router.push({
            name: 'direction'
          })
        }
      }
    }, [_c('div', {
      staticClass: "uk-flex uk-flex-middle"
    }, [_c('h4', {
      staticClass: "uk-margin-remove"
    }, [_vm._v(_vm._s(bus.number))]), _vm._v(" "), _c('div', {
      staticClass: "uk-margin-left"
    }, [_c('p', {
      staticClass: "uk-margin-remove"
    }, [_vm._v(_vm._s(bus.to))])])])])])
  })), _vm._v(" "), (_vm.$store.state.preference.buses.length <= 0) ? _c('h6', {
    staticClass: "uk-text-center",
    on: {
      "click": function($event) {
        _vm.$router.push({
          name: 'direction'
        })
      }
    }
  }, [_vm._v("\n      No directions selected.\n    ")]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-top navigation__actions"
  }, [_c('v-btn', {
    staticClass: "grey--text grey--darken-2",
    attrs: {
      "icon": "icon"
    },
    nativeOn: {
      "click": function($event) {
        _vm.$store.actions.goBackFromEditMode()
      }
    }
  }, [_c('v-icon', [_vm._v("arrow_back")])], 1), _vm._v(" "), _c('v-btn', {
    staticClass: "grey--text grey--darken-2 uk-float-right",
    attrs: {
      "icon": "icon"
    },
    nativeOn: {
      "click": function($event) {
        _vm.$store.actions.updatePreference()
      }
    }
  }, [_c('v-icon', [_vm._v("done")])], 1)], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b9c67f46", module.exports)
  }
}

/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('div', {
    staticClass: "uk-card uk-card-body"
  }, [_c('div', {
    staticClass: "uk-flex uk-flex-middle"
  }, [_c('div', {
    staticClass: "dummy-preference__text dummy-preference--background-color",
    style: ({
      'width': '50%'
    })
  })]), _vm._v(" "), _c('div', [_c('div', {
    staticClass: "uk-flex uk-flex-column uk-flex-middle uk-margin-small-top"
  }, _vm._l(([1, 2]), function(index) {
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
  }))])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-bbb6398a", module.exports)
  }
}

/***/ }),
/* 395 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "preference-delete-confirmation__modal",
      "uk-modal": "center: true"
    }
  }, [_c('div', {
    staticClass: "uk-modal-dialog uk-modal-body"
  }, [_c('h3', [_vm._v("Delete preference?")]), _vm._v(" "), _c('p', {
    staticClass: "uk-text-meta"
  }, [_vm._v("This cannot be undone.")]), _vm._v(" "), _c('v-btn', {
    staticClass: "uk-button uk-button-default uk-button-borderless uk-float-left uk-modal-close",
    attrs: {
      "flat": ""
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c('v-btn', {
    staticClass: "uk-float-right uk-modal-close",
    attrs: {
      "primary": "",
      "dark": ""
    },
    nativeOn: {
      "click": function($event) {
        _vm.$store.actions.deletePreference(_vm.$store.state.preference)
      }
    }
  }, [_vm._v("Yes")])], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ef99ad7a", module.exports)
  }
}

/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (this.$store.state.showConfirmationModal),
      expression: "this.$store.state.showConfirmationModal"
    }],
    class: {
      'uk-modal uk-open uk-flex uk-flex-center uk-flex-middle': this.$store.state.showConfirmationModal
    },
    attrs: {
      "id": "preference-confirmation__modal",
      "uk-modal": "center: true"
    }
  }, [_c('div', {
    staticClass: "uk-modal-dialog uk-modal-body"
  }, [_c('h3', [_vm._v("Create preference?")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('preference', {
    attrs: {
      "preference": _vm.$store.state.preference,
      "preview": true
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-bottom"
  }), _vm._v(" "), _c('v-btn', {
    attrs: {
      "flat": ""
    },
    nativeOn: {
      "click": function($event) {
        _vm.$store.state.showConfirmationModal = false
      }
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c('v-btn', {
    staticClass: "uk-float-right",
    attrs: {
      "primary": "",
      "dark": ""
    },
    nativeOn: {
      "click": function($event) {
        _vm.$store.actions.addPreference()
      }
    }
  }, [_vm._v("Yes")])], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "uk-margin-bottom"
  }, [_c('p', {
    staticClass: "uk-text-meta uk-margin-remove"
  }, [_vm._v("This is how it's gonna look")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f5bc194e", module.exports)
  }
}

/***/ }),
/* 397 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "VueCarousel"
  }, [_c('div', {
    staticClass: "VueCarousel-wrapper"
  }, [_c('div', {
    staticClass: "VueCarousel-inner",
    style: (("\n          transform: translateX(" + _vm.currentOffset + "px);\n          transition: " + _vm.transitionStyle + ";\n          flex-basis: " + _vm.slideWidth + "px;\n          visibility: " + (_vm.slideWidth ? 'visible' : 'hidden') + "\n        "))
  }, [_vm._t("default")], 2)]), _vm._v(" "), (_vm.navigationEnabled) ? _c('navigation', {
    attrs: {
      "clickTargetSize": _vm.navigationClickTargetSize,
      "nextLabel": _vm.navigationNextLabel,
      "prevLabel": _vm.navigationPrevLabel
    }
  }) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-fad355bc", module.exports)
  }
}

/***/ }),
/* 398 */,
/* 399 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(307);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("2a1da626", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-04bd6846\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./StationCardDummy.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-04bd6846\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./StationCardDummy.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 400 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(308);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("86f790ec", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-04e43b28\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./aroundMe.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-04e43b28\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./aroundMe.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 401 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(309);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("3b7784d6", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-11adb565\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./connectionCardInfo.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-11adb565\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./connectionCardInfo.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 402 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(310);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("67151797", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-226ce802\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SelectorWrapper.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-226ce802\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SelectorWrapper.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 403 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(311);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("e79b00ec", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-226f7b46\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Resource.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-226f7b46\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Resource.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 404 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(312);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("1210dcd4", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2439a0fd\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./BusSelectionPage.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2439a0fd\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./BusSelectionPage.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 405 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(313);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("7f1497ee", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-271bd03d\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CreatePreferenceHomePage.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-271bd03d\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CreatePreferenceHomePage.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 406 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(314);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("2a79d512", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2dc0945c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./stationCard.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2dc0945c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./stationCard.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(315);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("35dc1f4b", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2f6a5edf\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Slide.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2f6a5edf\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Slide.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 408 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(316);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("180a2864", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-311be7f0\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CustomizationApp.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-311be7f0\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CustomizationApp.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 409 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(317);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("82bb67c0", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-333e7c8e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./volatileLocations.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-333e7c8e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./volatileLocations.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(318);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("69c49310", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-370f33dd\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DirectionSelectionPage.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-370f33dd\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DirectionSelectionPage.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 411 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(319);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("64036313", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-3af42142\",\"scoped\":false,\"hasInlineConfig\":true}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-3af42142\",\"scoped\":false,\"hasInlineConfig\":true}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 412 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(320);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("573afa2a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-3edf9202\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./HomeWrapper.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-3edf9202\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./HomeWrapper.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 413 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(321);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("4534b6f2", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-433098fd\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Preference.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-433098fd\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Preference.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 414 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(322);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("eba608c6", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-44e2d1f0\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./connectionCard.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-44e2d1f0\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./connectionCard.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 415 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(323);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("08bbaa14", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-46adc668\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./defaultInformation.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-46adc668\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./defaultInformation.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 416 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(324);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("66787ca7", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-477c5bd1\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ResourceTransitionWrapper.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-477c5bd1\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ResourceTransitionWrapper.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 417 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(325);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("34150a1b", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4e6168a8\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./usersContent.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4e6168a8\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./usersContent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 418 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(326);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("dbda33be", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-53a83e96\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./StationCardWithConnection.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-53a83e96\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./StationCardWithConnection.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 419 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(327);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("1500c264", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7747787d\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./StationSelectionPage.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7747787d\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./StationSelectionPage.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 420 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(328);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("cb7800fc", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-92a42b7a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./stationCardInfo.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-92a42b7a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./stationCardInfo.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 421 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(329);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("6b4cc70b", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-9430ade8\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DisplayPage.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-9430ade8\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DisplayPage.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 422 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(330);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("6fb3cd82", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-ad663d54\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Navigation.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-ad663d54\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Navigation.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 423 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(331);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("2b67fa2a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-af7b1686\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./BusPassList.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-af7b1686\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./BusPassList.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 424 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(332);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("632f1935", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-b0bc4848\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Pagination.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-b0bc4848\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Pagination.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 425 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(333);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("6315cd57", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-b9c67f46\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./EditPreferencePage.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-b9c67f46\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./EditPreferencePage.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 426 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(334);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("526d0654", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-bbb6398a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserPreferenceDummy.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-bbb6398a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserPreferenceDummy.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 427 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(335);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("4106e86c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-ef99ad7a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PreferenceDeleteConfirmationModal.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-ef99ad7a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PreferenceDeleteConfirmationModal.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 428 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(336);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("fdf2410c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-f5bc194e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PreferenceConfirmationModal.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-f5bc194e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PreferenceConfirmationModal.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 429 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(337);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("74344cdc", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-fad355bc\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Carousel.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-fad355bc\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Carousel.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })
],[255]);
//# sourceMappingURL=app.bfa1c62dcca0de474616.js.map