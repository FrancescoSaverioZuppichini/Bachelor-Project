webpackJsonp([1],Array(27).concat([
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Display_Display_vue__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Display_Display_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Display_Display_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_PreferenceSelector_PreferenceSelector_vue__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_PreferenceSelector_PreferenceSelector_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_PreferenceSelector_PreferenceSelector_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_PreferenceSelector_PreferenceSelectorFaculty_vue__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_PreferenceSelector_PreferenceSelectorFaculty_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_PreferenceSelector_PreferenceSelectorFaculty_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_PreferenceSelector_PreferenceSelectorStudy_vue__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_PreferenceSelector_PreferenceSelectorStudy_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_PreferenceSelector_PreferenceSelectorStudy_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_PreferenceSelector_PreferenceSelectorYear_vue__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_PreferenceSelector_PreferenceSelectorYear_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_PreferenceSelector_PreferenceSelectorYear_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_PreferenceSelector_PreferenceSelectorStudyType_vue__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_PreferenceSelector_PreferenceSelectorStudyType_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_PreferenceSelector_PreferenceSelectorStudyType_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_CustomizationApp_PreferenceSelectorApp_vue__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_CustomizationApp_PreferenceSelectorApp_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__components_CustomizationApp_PreferenceSelectorApp_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_CustomizationApp_PreferenceSelectorFacultyApp_vue__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_CustomizationApp_PreferenceSelectorFacultyApp_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__components_CustomizationApp_PreferenceSelectorFacultyApp_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_CustomizationApp_PreferenceSelectorStudyApp_vue__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_CustomizationApp_PreferenceSelectorStudyApp_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__components_CustomizationApp_PreferenceSelectorStudyApp_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_CustomizationApp_PreferenceSelectorYearApp_vue__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_CustomizationApp_PreferenceSelectorYearApp_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__components_CustomizationApp_PreferenceSelectorYearApp_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_CustomizationApp_PreferenceSelectorStudyTypeApp_vue__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_CustomizationApp_PreferenceSelectorStudyTypeApp_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__components_CustomizationApp_PreferenceSelectorStudyTypeApp_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_CustomizationApp_CustomizationAppHome_vue__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_CustomizationApp_CustomizationAppHome_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__components_CustomizationApp_CustomizationAppHome_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_CustomizationApp_CustomizationApp_vue__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_CustomizationApp_CustomizationApp_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__components_CustomizationApp_CustomizationApp_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_CustomizationApp_PreferenceEditPage_vue__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_CustomizationApp_PreferenceEditPage_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__components_CustomizationApp_PreferenceEditPage_vue__);





















__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/display/:id',
    name: 'Display',
    component: __WEBPACK_IMPORTED_MODULE_2__components_Display_Display_vue___default.a,

    children: [{
      path: '/display/:id/preference/faculty/:facultyId/year',
      name: 'yearDisplay',
      component: __WEBPACK_IMPORTED_MODULE_6__components_PreferenceSelector_PreferenceSelectorYear_vue___default.a
    }, {
      path: '/display/:id/preference/faculty/:facultyId/study',
      name: 'studyDisplay',
      component: __WEBPACK_IMPORTED_MODULE_5__components_PreferenceSelector_PreferenceSelectorStudy_vue___default.a
    }, {
      path: '/display/:id/preference/faculty/:facultyId/studyType',
      name: 'studyTypeDisplay',
      component: __WEBPACK_IMPORTED_MODULE_7__components_PreferenceSelector_PreferenceSelectorStudyType_vue___default.a
    }]
  }, {
    path: '/app/',
    name: 'CustomizationApp',
    component: __WEBPACK_IMPORTED_MODULE_14__components_CustomizationApp_CustomizationApp_vue___default.a,
    children: [{
      path: '/app/home/:userId',
      name: 'home',
      component: __WEBPACK_IMPORTED_MODULE_13__components_CustomizationApp_CustomizationAppHome_vue___default.a
    }, {
      path: '/app/preference/:id/edit',
      name: 'edit',
      component: __WEBPACK_IMPORTED_MODULE_15__components_CustomizationApp_PreferenceEditPage_vue___default.a
    }, {
      path: '/app/preference/faculty/',
      name: 'faculty',
      component: __WEBPACK_IMPORTED_MODULE_8__components_CustomizationApp_PreferenceSelectorApp_vue___default.a
    }, {
      path: '/app/preference/faculty/:facultyId/year',
      name: 'year',
      component: __WEBPACK_IMPORTED_MODULE_11__components_CustomizationApp_PreferenceSelectorYearApp_vue___default.a
    }, {
      path: '/app/preference/faculty/:facultyId/study',
      name: 'study',
      component: __WEBPACK_IMPORTED_MODULE_10__components_CustomizationApp_PreferenceSelectorStudyApp_vue___default.a
    }, {
      path: '/app/preference/faculty/:facultyId/studyType',
      name: 'studyType',
      component: __WEBPACK_IMPORTED_MODULE_12__components_CustomizationApp_PreferenceSelectorStudyTypeApp_vue___default.a
    }]
  }]
}));

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);



var _user$display$faculty;



var BASE_URL = '';
var CLASSES_URL = '/classes/api';
var TACITA_URL = '/tacita/api';

/* harmony default export */ __webpack_exports__["a"] = (_user$display$faculty = {
  'user': {},
  'display': {},
  'faculty': {
    fetchFaculties: function fetchFaculties() {
      return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get('' + BASE_URL + CLASSES_URL + '/faculty?info=all');
    }
  },
  'year': {
    fetchYears: function fetchYears() {
      return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get('' + BASE_URL + CLASSES_URL + '/year');
    }
  }
}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_user$display$faculty, 'user', {
  getMe: function getMe(email) {
    return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get('' + BASE_URL + TACITA_URL + '/user/?email=' + email);
  },
  getMeById: function getMeById(userId) {
    return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get('' + BASE_URL + TACITA_URL + '/user/' + userId);
  },
  fetchUserPreferences: function fetchUserPreferences(userId) {
    return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get('' + BASE_URL + CLASSES_URL + '/preference?userId=' + userId);
  }
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_user$display$faculty, 'display', {
  sendAppToDisplay: function sendAppToDisplay(displayId, appId) {
    return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.put('' + BASE_URL + TACITA_URL + '/display/' + displayId + '/app/' + appId);
  },
  fetchDisplay: function fetchDisplay(displayId) {
    return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get('' + BASE_URL + TACITA_URL + '/display/' + displayId);
  }
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_user$display$faculty, 'preference', {
  updatePreference: function updatePreference(preference) {
    return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.put('' + BASE_URL + CLASSES_URL + '/preference/' + preference.id, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, preference));
  },
  addPreference: function addPreference(preference) {
    return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('' + BASE_URL + CLASSES_URL + '/preference', __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, preference));
  },
  deletePreference: function deletePreference(preferenceId, userId) {
    return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.delete('' + BASE_URL + CLASSES_URL + '/preference/' + preferenceId, { data: { userId: userId } });
  }
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_user$display$faculty, 'course', {
  search: function search(_ref) {
    var facultyId = _ref.facultyId,
        year = _ref.year,
        type = _ref.type,
        studyType = _ref.studyType;

    return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get('' + BASE_URL + CLASSES_URL + '/course/search?facultyId=' + facultyId + '&semester_academic_year=SP 2017&yearNumber=' + year + '&studyType=' + studyType + '&type=' + type);
  },
  fetchSchedules: function fetchSchedules(course) {
    return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get('' + BASE_URL + CLASSES_URL + '/course/' + course.id + '/schedules');
  },
  fetchCourse: function fetchCourse(id) {
    return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get('' + BASE_URL + CLASSES_URL + '/course/' + id);
  }
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_user$display$faculty, 'schedule', {}), _user$display$faculty);

/***/ }),
/* 29 */,
/* 30 */,
/* 31 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(482)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(319),
  /* template */
  __webpack_require__(457),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/classesWebServer/coursesWebApp/src/components/CustomizationApp/Navigation.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Navigation.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a5aea442", Component.options)
  } else {
    hotAPI.reload("data-v-a5aea442", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(486)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(333),
  /* template */
  __webpack_require__(461),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/classesWebServer/coursesWebApp/src/components/PreferenceSelector/Navigation.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Navigation.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-de85c95a", Component.options)
  } else {
    hotAPI.reload("data-v-de85c95a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
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
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(474)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(320),
  /* template */
  __webpack_require__(449),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/classesWebServer/coursesWebApp/src/components/CustomizationApp/Preference.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Preference.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-592ab5b4", Component.options)
  } else {
    hotAPI.reload("data-v-592ab5b4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
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
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(466)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(329),
  /* template */
  __webpack_require__(441),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/classesWebServer/coursesWebApp/src/components/CustomizationApp/PreferenceSummary.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PreferenceSummary.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1e451e60", Component.options)
  } else {
    hotAPI.reload("data-v-1e451e60", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(473)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(334),
  /* template */
  __webpack_require__(448),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/classesWebServer/coursesWebApp/src/components/PreferenceSelector/PreferenceSelector.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PreferenceSelector.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-57e39dce", Component.options)
  } else {
    hotAPI.reload("data-v-57e39dce", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 196 */,
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_flue_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_flue_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_flue_vue__);


var ws = new WebSocket('wss://' + window.location.origin.split('/')[2].split(':')[0] + ':3443/ws');

ws.onmessage = function (msg) {
  var data = JSON.parse(msg.data);

  __WEBPACK_IMPORTED_MODULE_0_flue_vue__["SuperStore"].dispatcher.dispatch(data);
};

ws.onopen = function (event) {
  console.log("WS connect");
};

/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_flue_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_flue_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_flue_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_axios__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__api_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__router_index_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_vue__);













var CourseStore = function (_Store) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(CourseStore, _Store);

  function CourseStore() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, CourseStore);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (CourseStore.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(CourseStore)).call(this));

    _this.state = {};
    _this.state.courses = { data: [], error: { hasError: false, msg: "" } };
    _this.state.lastQuery = {};
    _this.state.coursesCache = {};
    _this.state.selectedCourses = function () {
      return _this.state.courses.data.filter(function (course) {
        return course.selected;
      });
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(CourseStore, [{
    key: 'fetchCoursesSuccess',
    value: function fetchCoursesSuccess(_ref) {
      var _this2 = this;

      var data = _ref.data,
          facultyId = _ref.facultyId,
          year = _ref.year,
          type = _ref.type,
          studyType = _ref.studyType;

      __WEBPACK_IMPORTED_MODULE_8_jquery___default()('#fullcalendar').fullCalendar('removeEvents');
      this.state.lastQuery = { year: year, type: type, studyType: this.state.preference.studyType };
      this.state.courses.data = data;
      __WEBPACK_IMPORTED_MODULE_10__router_index_js__["a" /* default */].push({ name: 'Display' });
      this.state.courses.data.forEach(function (course) {
        return _this2.sStore.actions.fetchSchedules(course);
      });
    }
  }, {
    key: 'fetchSchedulesSuccess',
    value: function fetchSchedulesSuccess(_ref2) {
      var data = _ref2.data,
          course = _ref2.course;

      course.schedules = data;
      course.events = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(course.schedules), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var schedule = _step.value;

          var event = {
            start: schedule.start,
            title: course.name_en,
            end: schedule.end,
            textColor: schedule.font_color,
            backgroundColor: schedule.background_color,
            course: course
          };
          course.events.push(event);
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

      this.addEventsToFullCalendar(course.events);
    }
  }, {
    key: 'fetchCourseSuccessCache',
    value: function fetchCourseSuccessCache(_ref3) {
      var data = _ref3.data;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(data), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var course = _step2.value;

          this.addEventsToFullCalendar(course.events);
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
    key: 'addEventsToFullCalendar',
    value: function addEventsToFullCalendar(events) {
      var fullCalendarEl = __WEBPACK_IMPORTED_MODULE_8_jquery___default()('#fullcalendar');
      fullCalendarEl.fullCalendar('renderEvents', events, true);
    }
  }, {
    key: 'deselectAllCourse',
    value: function deselectAllCourse() {
      this.state.selectedCourses().forEach(function (course) {
        return course.selected = false;
      });
    }
  }, {
    key: 'onFetchCourseSuccess',
    value: function onFetchCourseSuccess(_ref4) {
      var data = _ref4.data,
          selectedCourse = _ref4.selectedCourse;

      this.deselectAllCourse();
      selectedCourse.professor_full_name = data.professor_full_name;
      selectedCourse.description_it = data.description_it;
      __WEBPACK_IMPORTED_MODULE_11_vue___default.a.set(selectedCourse, 'selected', true);
    }
  }, {
    key: 'onDisplayUserPreference',
    value: function onDisplayUserPreference(_ref5) {
      var userPreferences = _ref5.userPreferences;

      var userPreference = userPreferences[0];
      var query = this.sStore.PreferenceStore.makeQueryFromPreference(userPreference);
      this.sStore.actions.fetchCourses(query);
    }
  }, {
    key: 'reduce',
    value: function reduce(action) {
      this.reduceMap(action, {
        FETCH_COURSE_SUCCESS: this.onFetchCourseSuccess,
        FETCH_COURSE_IN_CACHE: this.onFetchCourseSuccess,
        FETCH_COURSES_SUCCESS: this.fetchCoursesSuccess,
        FETCH_COURSES_SUCCESS_CACHE: this.fetchCourseSuccessCache,
        FETCH_SCHEDULES_SUCCESS: this.fetchSchedulesSuccess,
        DISPLAY_USER_PREFERENCE: this.onDisplayUserPreference
      });
    }
  }, {
    key: 'actions',
    value: function actions(dispatcher, context) {
      return {
        fetchCourses: function fetchCourses(_ref6) {
          var facultyId = _ref6.facultyId,
              year = _ref6.year,
              type = _ref6.type,
              studyType = _ref6.studyType;

          dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_6_flue_vue__["Action"]("FETCH_COURSES_LOADING"));

          facultyId = facultyId || "";
          year = year || "";
          type = type || "";
          studyType = studyType || "";

          __WEBPACK_IMPORTED_MODULE_9__api_js__["a" /* default */].course.search({ facultyId: facultyId, year: year, type: type, studyType: studyType }).then(function (_ref7) {
            var data = _ref7.data;

            dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_6_flue_vue__["Action"]("FETCH_COURSES_SUCCESS", { data: data, facultyId: facultyId, year: year, type: type, studyType: studyType }));
          });
        },
        fetchSchedules: function fetchSchedules(course) {
          dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_6_flue_vue__["Action"]("FETCH_SCHEDULES_LOADING"));
          __WEBPACK_IMPORTED_MODULE_9__api_js__["a" /* default */].course.fetchSchedules(course).then(function (_ref8) {
            var data = _ref8.data;
            return dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_6_flue_vue__["Action"]("FETCH_SCHEDULES_SUCCESS", { data: data, course: course }));
          });
        },
        fetchCourse: function fetchCourse(course) {
          if (course.description_it) dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_6_flue_vue__["Action"]("FETCH_COURSE_IN_CACHE", { data: course, selectedCourse: course }));else {
            dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_6_flue_vue__["Action"]("FETCH_COURSE_LOADING"));
            __WEBPACK_IMPORTED_MODULE_9__api_js__["a" /* default */].course.fetchCourse(course.id).then(function (_ref9) {
              var data = _ref9.data;
              return dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_6_flue_vue__["Action"]("FETCH_COURSE_SUCCESS", { data: data, selectedCourse: course }));
            });
          }
        }
      };
    }
  }]);

  return CourseStore;
}(__WEBPACK_IMPORTED_MODULE_6_flue_vue__["Store"]);

var courseStore = new CourseStore();
/* harmony default export */ __webpack_exports__["a"] = (courseStore);

/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_flue_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_flue_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_flue_vue__);









var DisplayStore = function (_Store) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(DisplayStore, _Store);

  function DisplayStore() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, DisplayStore);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (DisplayStore.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(DisplayStore)).call(this));

    _this.state.display = {};
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(DisplayStore, [{
    key: 'onUserNearby',
    value: function onUserNearby(_ref) {
      var userId = _ref.userId,
          displayId = _ref.displayId;

      if (displayId != this.state.display.id) {
        console.log('NOT THIS DISPLAY');
        return;
      }
      this.sStore.actions.displayUserPreferences(userId);
    }
  }, {
    key: 'fetchDisplaySuccess',
    value: function fetchDisplaySuccess(_ref2) {
      var display = _ref2.display;

      this.state.display = display;
      this.sStore.actions.sendAppToDisplay(this.state.display.id, 1);
    }
  }, {
    key: 'reduce',
    value: function reduce(action) {
      this.reduceMap(action, {
        USER_NEARBY: this.onUserNearby,
        FETCH_DISPLAY_SUCCESS: this.fetchDisplaySuccess
      });
    }
  }, {
    key: 'actions',
    value: function actions(dispatcher) {
      return {
        fetchDisplay: function fetchDisplay(displayId) {
          __WEBPACK_IMPORTED_MODULE_6__api_js__["a" /* default */].display.fetchDisplay(displayId).then(function (_ref3) {
            var data = _ref3.data;

            dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_7_flue_vue__["Action"]("FETCH_DISPLAY_SUCCESS", { display: data }));
          });
        },
        displayUserPreferences: function displayUserPreferences(userId) {
          __WEBPACK_IMPORTED_MODULE_6__api_js__["a" /* default */].user.fetchUserPreferences(userId).then(function (res) {
            dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_7_flue_vue__["Action"]("DISPLAY_USER_PREFERENCE", { userPreferences: res.data }));
          });
        },
        sendAppToDisplay: function sendAppToDisplay(displayId, appId) {
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
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_flue_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_flue_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_flue_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_axios__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__api_js__ = __webpack_require__(28);










var FacultyStore = function (_Store) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(FacultyStore, _Store);

  function FacultyStore() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, FacultyStore);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (FacultyStore.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(FacultyStore)).call(this));

    _this.state = {};
    _this.state.faculties = [];
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(FacultyStore, [{
    key: 'onFetchFacultySuccess',
    value: function onFetchFacultySuccess(_ref) {
      var data = _ref.data;

      this.state.faculties = data;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(this.state.faculties), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var faculty = _step.value;

          faculty.studies.forEach(function (study) {
            return study.years.sort(function (a, b) {
              return a.yearNumber > b.yearNumber;
            });
          });
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
      this.reduceMap(action, {
        FETCH_FACULTY_SUCCESS: this.onFetchFacultySuccess
      });
    }
  }, {
    key: 'actions',
    value: function actions(dispatcher, context) {
      return {
        fetchFaculties: function fetchFaculties() {
          dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_6_flue_vue__["Action"]("FETCH_FACULTY_LOADING"));
          __WEBPACK_IMPORTED_MODULE_8__api_js__["a" /* default */].faculty.fetchFaculties().then(function (_ref2) {
            var data = _ref2.data;

            dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_6_flue_vue__["Action"]("FETCH_FACULTY_SUCCESS", { data: data }));
          });
        }
      };
    }
  }]);

  return FacultyStore;
}(__WEBPACK_IMPORTED_MODULE_6_flue_vue__["Store"]);

var facultyStore = new FacultyStore();
/* harmony default export */ __webpack_exports__["a"] = (facultyStore);

/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_flue_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_flue_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_flue_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_axios__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__router_index_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_path__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_path__);













var Navigation = function () {
  function Navigation() {
    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default()(this, Navigation);

    this._urls = ['faculty', 'study', 'year', 'studyType'];
    this._guards = [];
    this._index = 0;
  }

  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default()(Navigation, [{
    key: 'setGuards',
    value: function setGuards(guards) {
      this._guards = guards;
    }
  }, {
    key: 'goNext',
    value: function goNext(id) {

      id = id || '';

      this._guards[this._index]();
      __WEBPACK_IMPORTED_MODULE_8__router_index_js__["a" /* default */].push({ name: this._urls[this._index], params: { facultyId: id } });
      this._index += 1;
    }
  }, {
    key: 'goBack',
    value: function goBack() {
      this._index -= 1;
      if (this._index <= this._guards.length && this.index >= 0) this._guards[this._index]();
      __WEBPACK_IMPORTED_MODULE_8__router_index_js__["a" /* default */].go(-1);
    }
  }, {
    key: 'reset',
    value: function reset(basicUrl) {
      this._index = 0;
      if (this.BASE_URL != '' && this.BASE_URL) __WEBPACK_IMPORTED_MODULE_8__router_index_js__["a" /* default */].push(this.BASE_URL);
    }
  }]);

  return Navigation;
}();

var PreferenceStore = function (_Store) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(PreferenceStore, _Store);

  function PreferenceStore() {
    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default()(this, PreferenceStore);

    var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (PreferenceStore.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(PreferenceStore)).call(this));

    _this.state = {};
    _this.state.preference = {};
    _this.state.navigation = new Navigation();
    _this.state.isInEditMode = false;
    _this.state.navigation.setGuards(_this.navigationGuards());
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default()(PreferenceStore, [{
    key: 'onNavigationDone',
    value: function onNavigationDone() {
      __WEBPACK_IMPORTED_MODULE_9_vue___default.a.set(this.state.preference, 'isLoading', true);
      console.log('onNavigationDone');
      this.sStore.actions.fetchCourses(this.makeQueryFromPreference(this.state.preference));
    }
  }, {
    key: 'navigationGuards',
    value: function navigationGuards() {
      var _this2 = this;

      return [function () {
        console.log('beforeGoToStudy');
      }, function () {
        console.log('beforeGoToYear');
      }, function () {
        var studyType = _this2.state.preference.faculty.studies.filter(function (study) {
          return _this2.state.preference.type == study.type;
        });
        console.log(studyType.length);
      }, this.onNavigationDone.bind(this)];
    }
  }, {
    key: 'makeQueryFromPreference',
    value: function makeQueryFromPreference(preference) {
      preference = preference || this.state.preference;
      return {
        facultyId: preference.faculty.id,
        type: preference.type.type || preference.type.name_en,
        studyType: preference.studyType.id,
        year: preference.year.yearNumber,
        userId: this.sStore.state.user.id,
        id: preference.id
      };
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.state.preference = {};
      this.state.navigation.reset();
    }
  }, {
    key: 'selectFaculty',
    value: function selectFaculty(_ref) {
      var faculty = _ref.faculty,
          reset = _ref.reset;

      this.state.preference = {};
      this.state.preference.isLoading = false;
      if (reset) this.reset();
      this.state.preference.faculty = faculty;
      this.sStore.actions.goNext(faculty.id);
    }
  }, {
    key: 'updatePreference',
    value: function updatePreference(_ref2) {
      var data = _ref2.data,
          goNext = _ref2.goNext;

      if (goNext == undefined) goNext = true;

      this.state.preference = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, this.state.preference, data);
      console.log(this.state.preference);
      if (goNext) this.sStore.actions.goNext(this.state.preference.faculty.id);
    }
  }, {
    key: 'resetAfterSuccess',
    value: function resetAfterSuccess() {
      this.reset();
    }
  }, {
    key: 'tooglePreferenceEdit',
    value: function tooglePreferenceEdit(_ref3) {
      var preference = _ref3.preference;

      __WEBPACK_IMPORTED_MODULE_8__router_index_js__["a" /* default */].push({ name: 'edit', params: { id: preference.id } });
      this.state.preference = preference;
      this.state.isInEditMode = !this.state.isInEditMode;
    }
  }, {
    key: 'setGuards',
    value: function setGuards(_ref4) {
      var _this3 = this;

      var guards = _ref4.guards;

      this.state.navigation.setGuards(guards.map(function (guard) {
        return guard.bind(_this3);
      }));
    }
  }, {
    key: 'reduce',
    value: function reduce(action) {
      var _this4 = this;

      this.reduceMap(action, {
        FETCH_COURSES_SUCCESS: this.resetAfterSuccess,
        SELECT_FACULTY: this.selectFaculty,
        UPDATE_PREFERENCE: this.updatePreference,
        GO_NEXT: function GO_NEXT(_ref5) {
          var id = _ref5.id;
          return _this4.state.navigation.goNext(id);
        },
        GO_BACK: function GO_BACK() {
          return _this4.state.navigation.goBack();
        },
        SET_GUARDS: this.setGuards,
        ADD_PREFERENCE_SUCCESS: function ADD_PREFERENCE_SUCCESS() {
          _this4.reset();
        },
        TOOGLE_PREFERENCE_EDIT: this.tooglePreferenceEdit
      });
    }
  }, {
    key: 'actions',
    value: function actions(dispatcher, context) {
      return {
        selectFaculty: function selectFaculty(faculty, reset) {
          reset = reset || false;
          dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_6_flue_vue__["Action"]('SELECT_FACULTY', { faculty: faculty, reset: reset }));
        },
        updatePreference: function updatePreference(data, goNext) {
          dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_6_flue_vue__["Action"]('UPDATE_PREFERENCE', { data: data, goNext: goNext }));
        },
        goNext: function goNext(id) {
          dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_6_flue_vue__["Action"]('GO_NEXT', { id: id }));
        },
        goBack: function goBack() {
          dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_6_flue_vue__["Action"]('GO_BACK'));
        },
        setGuards: function setGuards(arrayOfFunction) {
          dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_6_flue_vue__["Action"]('SET_GUARDS', { guards: arrayOfFunction }));
        },
        tooglePreferenceEdit: function tooglePreferenceEdit(preference) {
          dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_6_flue_vue__["Action"]('TOOGLE_PREFERENCE_EDIT', { preference: preference }));
        }
      };
    }
  }]);

  return PreferenceStore;
}(__WEBPACK_IMPORTED_MODULE_6_flue_vue__["Store"]);

var preferenceStore = new PreferenceStore();

/* harmony default export */ __webpack_exports__["a"] = (preferenceStore);

/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_flue_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_flue_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_flue_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_js__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__router_index_js__ = __webpack_require__(27);










var options = {
  THRESHOLD: 1000,
  REPEAT_EVERY: 200000
};

var ScheduleStore = function (_Store) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(ScheduleStore, _Store);

  function ScheduleStore() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, ScheduleStore);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ScheduleStore.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(ScheduleStore)).call(this));

    _this.state = {};
    _this.state.scheduledIds = [];
    _this.state.schedules = [_this.randomCourseSearchSchedule.bind(_this)];
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(ScheduleStore, [{
    key: 'createRandomQuery',
    value: function createRandomQuery() {
      var randomFaculty = __WEBPACK_IMPORTED_MODULE_7__utils_js__["a" /* default */].selectRandomItemFromArray(this.sStore.state.faculties);
      var randomStudy = __WEBPACK_IMPORTED_MODULE_7__utils_js__["a" /* default */].selectRandomItemFromArray(randomFaculty.studies);
      var randomStudyType = __WEBPACK_IMPORTED_MODULE_7__utils_js__["a" /* default */].selectRandomItemFromArray(randomStudy.studyTypes);
      var randomYear = __WEBPACK_IMPORTED_MODULE_7__utils_js__["a" /* default */].selectRandomItemFromArray(randomStudy.years);

      return {
        facultyId: randomFaculty.id,
        type: randomStudy.type,
        studyType: randomStudyType.name_en,
        year: randomYear.yearNumber
      };
    }
  }, {
    key: 'randomCourseSearchSchedule',
    value: function randomCourseSearchSchedule() {
      this.sStore.actions.fetchCourses(this.createRandomQuery());
    }
  }, {
    key: 'initialiaze',
    value: function initialiaze() {
      var _this2 = this;

      if (this.sStore.state.isInDisplay) this.state.scheduledIds.push(setTimeout(function () {
        _this2.sStore.actions.startSchedules();
      }, options.THRESHOLD));
    }
  }, {
    key: 'startSchedules',
    value: function startSchedules() {
      var _this3 = this;

      this.state.schedules.forEach(function (schedule) {
        return _this3.state.scheduledIds.push(setInterval(schedule, options.REPEAT_EVERY));
      });
    }
  }, {
    key: 'onUserInteraction',
    value: function onUserInteraction() {
      this.state.scheduledIds.forEach(function (id) {
        return clearInterval(id);
      });
      this.initialiaze();
    }
  }, {
    key: 'reduce',
    value: function reduce(action) {
      this.reduceMap(action, {
        INITIALIZE_SCHEDULES: this.initialiaze,
        USER_INTERACTION: this.onUserInteraction,
        START_SCHEDULES: this.startSchedules
      });
    }
  }, {
    key: 'actions',
    value: function actions(dispatcher, context) {
      return {
        initializeSchedules: function initializeSchedules() {
          dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_5_flue_vue__["Action"]("INITIALIZE_SCHEDULES"));
        },
        startSchedules: function startSchedules() {
          dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_5_flue_vue__["Action"]("START_SCHEDULES"));
        }
      };
    }
  }]);

  return ScheduleStore;
}(__WEBPACK_IMPORTED_MODULE_5_flue_vue__["Store"]);

var scheduleStore = new ScheduleStore();
/* harmony default export */ __webpack_exports__["a"] = (scheduleStore);

/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__router_index_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_flue_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_flue_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_flue_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__api_js__ = __webpack_require__(28);












var UserStore = function (_Store) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(UserStore, _Store);

  function UserStore() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, UserStore);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (UserStore.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(UserStore)).call(this));

    _this.state.currentPreference = {};
    _this.state.user = { id: null, preferences: { data: [], loading: false }, color: null };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(UserStore, [{
    key: 'fetchUserPreferenceSuccess',
    value: function fetchUserPreferenceSuccess(_ref) {
      var preferences = _ref.preferences;

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

      __WEBPACK_IMPORTED_MODULE_7__router_index_js__["a" /* default */].push({ name: 'home', params: { userId: this.state.user.id } });
    }
  }, {
    key: 'addPreferenceSuccess',
    value: function addPreferenceSuccess(_ref4) {
      var preference = _ref4.preference;

      __WEBPACK_IMPORTED_MODULE_7__router_index_js__["a" /* default */].push({ name: 'home', params: { userId: this.state.user.id } });
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
        UPDATE_USER_PREFERENCE_SUCCESS: this.updatePreferenceSuccess,
        ADD_PREFERENCE_SUCCESS: this.addPreferenceSuccess,
        REMOVE_PREFERENCE_SUCCESS: this.removePreferenceSuccess,
        GET_ME_SUCCESS: function GET_ME_SUCCESS(_ref5) {
          var data = _ref5.data;
          return _this2.state.user.id = data.id;
        }
      });
    }
  }, {
    key: 'actions',
    value: function actions(dispatcher, ctx) {
      return {
        getMe: function getMe(email) {
          __WEBPACK_IMPORTED_MODULE_9__api_js__["a" /* default */].user.getMe(email).then(function (_ref6) {
            var data = _ref6.data;

            dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_8_flue_vue__["Action"]("GET_ME_SUCCESS", { data: data }));
          });
        },
        getMeById: function getMeById(userId) {
          __WEBPACK_IMPORTED_MODULE_9__api_js__["a" /* default */].user.getMeById(userId).then(function (_ref7) {
            var data = _ref7.data;

            dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_8_flue_vue__["Action"]("GET_ME_SUCCESS", { data: data }));
          });
        },
        fetchUserPreferences: function fetchUserPreferences() {
          dispatcher.dispatch({ type: "FETCH_USER_PREFERENCE_LOADING" });
          __WEBPACK_IMPORTED_MODULE_9__api_js__["a" /* default */].user.fetchUserPreferences(ctx.state.user.id).then(function (_ref8) {
            var data = _ref8.data;

            dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_8_flue_vue__["Action"]("FETCH_USER_PREFERENCE_SUCCESS", { preferences: data }));
          }).catch(function (err) {
            return dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_8_flue_vue__["Action"]("FETCH_USER_PREFERENCE_FAILURE", err));
          });
        },
        updateUserPreference: function updateUserPreference(preference) {
          dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_8_flue_vue__["Action"]("UPDATE_PREFERENCE_LOADING"));
          __WEBPACK_IMPORTED_MODULE_9__api_js__["a" /* default */].preference.updatePreference(preference).then(function () {
            dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_8_flue_vue__["Action"]("UPDATE_USER_PREFERENCE_SUCCESS"));
          }).catch(function (_ref9) {
            var response = _ref9.response;

            var err = response.data;
            dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_8_flue_vue__["Action"]("UPDATE_PREFERENCE_FAILURE", { err: err }));
          });
        },
        addPreference: function addPreference(newPreference) {
          dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_8_flue_vue__["Action"]("ADD_PREFERENCE_LOADING"));
          __WEBPACK_IMPORTED_MODULE_9__api_js__["a" /* default */].preference.addPreference(newPreference).then(function (_ref10) {
            var data = _ref10.data;

            dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_8_flue_vue__["Action"]("ADD_PREFERENCE_SUCCESS", { preference: data }));
          }).catch(function (_ref11) {
            var response = _ref11.response;

            var err = response.data;
            dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_8_flue_vue__["Action"]("ADD_PREFERENCE_FAILURE", { err: err }));
          });
        },
        deletePreference: function deletePreference(preference) {
          __WEBPACK_IMPORTED_MODULE_9__api_js__["a" /* default */].preference.deletePreference(preference.id, ctx.state.user.id).then(function (_ref12) {
            var data = _ref12.data;
            return dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_8_flue_vue__["Action"]("REMOVE_PREFERENCE_SUCCESS", { preference: preference }));
          });
        }
      };
    }
  }]);

  return UserStore;
}(__WEBPACK_IMPORTED_MODULE_8_flue_vue__["Store"]);

var userStore = new UserStore();
/* harmony default export */ __webpack_exports__["a"] = (userStore);

/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_flue_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_flue_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_flue_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__api_js__ = __webpack_require__(28);









var YearStore = function (_Store) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(YearStore, _Store);

  function YearStore() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, YearStore);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (YearStore.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(YearStore)).call(this));

    _this.state = {};
    _this.state.years = [];
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(YearStore, [{
    key: 'onYearsSuccess',
    value: function onYearsSuccess(_ref) {
      var data = _ref.data;

      data.forEach(function (data) {
        return data.years.sort();
      });
      this.state.years = data;
    }
  }, {
    key: 'reduce',
    value: function reduce(action) {
      this.reduceMap(action, {
        FETCH_YEARS_SUCCESS: this.onYearsSuccess
      });
    }
  }, {
    key: 'actions',
    value: function actions(dispatcher, context) {
      return {
        fetchYears: function fetchYears() {
          dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_5_flue_vue__["Action"]("FETCH_YEARS_LOADING"));
          __WEBPACK_IMPORTED_MODULE_7__api_js__["a" /* default */].year.fetchYears().then(function (_ref2) {
            var data = _ref2.data;

            dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_5_flue_vue__["Action"]("FETCH_YEARS_SUCCESS", { data: data }));
          });
        }
      };
    }
  }]);

  return YearStore;
}(__WEBPACK_IMPORTED_MODULE_5_flue_vue__["Store"]);

var yearStore = new YearStore();

/* harmony default export */ __webpack_exports__["a"] = (yearStore);

/***/ }),
/* 205 */,
/* 206 */,
/* 207 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(484)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(315),
  /* template */
  __webpack_require__(459),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/classesWebServer/coursesWebApp/src/App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] App.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c8207ea4", Component.options)
  } else {
    hotAPI.reload("data-v-c8207ea4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
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
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
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
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuetify__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuetify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuetify__);


window.jQuery = window.$ = __webpack_require__(23);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuetify___default.a);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app'
});

/***/ }),
/* 316 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "",
  props: ['course'],
  data: function data() {
    return {};
  }
});

/***/ }),
/* 317 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PreferenceConfirmationModal_vue__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PreferenceConfirmationModal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__PreferenceConfirmationModal_vue__);



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CustomizationApp",
  components: {
    PreferenceConfirmationModal: __WEBPACK_IMPORTED_MODULE_0__PreferenceConfirmationModal_vue___default.a
  },
  mounted: function mounted() {
    this.$store.actions.getMeById(this.$route.params.userId);
    this.$store.actions.fetchFaculties();
    this.$store.actions.fetchYears();
    this.$store.state.navigation._urls = ['faculty', 'study', 'year', 'studyType'];
    var guards = [function () {
      console.log('beforeGoToFaculty');
      this.state.preference.faculty = {};
    }, function () {
      this.state.preference.type = '';

      console.log('beforeGoToStudy');
    }, function () {
      this.state.preference.year = {};

      console.log('beforeGoToYear');
    }, function () {
      this.state.preference.studyType = {};
      console.log('beforeGoToStudyType');
    }, this.onNavigationDone.bind(this)];
    this.$store.actions.setGuards(guards);
  },

  methods: {
    onNavigationDone: function onNavigationDone() {
      this.$store.actions.addPreference(this.$store.PreferenceStore.makeQueryFromPreference());
    }
  },
  data: function data() {
    return {};
  }
});

/***/ }),
/* 318 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UserPreferenceDummy_vue__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UserPreferenceDummy_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__UserPreferenceDummy_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Preference_vue__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Preference_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Preference_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PreferenceDeleteConfirmationModal_vue__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PreferenceDeleteConfirmationModal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__PreferenceDeleteConfirmationModal_vue__);






/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CustomizationAppHome",
  components: {
    UserPreferenceDummy: __WEBPACK_IMPORTED_MODULE_0__UserPreferenceDummy_vue___default.a,
    Preference: __WEBPACK_IMPORTED_MODULE_1__Preference_vue___default.a,
    PreferenceDeleteConfirmationModal: __WEBPACK_IMPORTED_MODULE_2__PreferenceDeleteConfirmationModal_vue___default.a
  },
  mounted: function mounted() {
    var _this = this;

    setTimeout(function () {
      _this.$store.actions.fetchUserPreferences();
    }, 500);
  },

  watch: {
    '$route': function (_$route) {
      function $route(_x) {
        return _$route.apply(this, arguments);
      }

      $route.toString = function () {
        return _$route.toString();
      };

      return $route;
    }(function (newRoute) {
      if (newRoute.name == 'home') {
        console.log($route.path);

        this.$store.state.navigation.reset();
        this.$store.state.isInEditMode = false;
        this.$store.state.navigation._urls = ['faculty', 'study', 'year', 'studyType'];
        var guards = [function () {
          console.log('beforeGoToFaculty');
          this.state.preference.faculty = {};
        }, function () {
          this.state.preference.type = '';

          console.log('beforeGoToStudy');
        }, function () {
          this.state.preference.year = {};

          console.log('beforeGoToYear');
        }, function () {
          this.state.preference.studyType = {};
          console.log('beforeGoToStudyType');
        }, this.onNavigationDone.bind(this)];
        this.$store.actions.setGuards(guards);

        this.$store.actions.fetchUserPreferences();
      }
    })
  },
  methods: {
    onNavigationDone: function onNavigationDone() {
      this.$store.actions.addPreference(this.$store.PreferenceStore.makeQueryFromPreference());
    }
  },
  data: function data() {
    return {};
  }
});

/***/ }),
/* 319 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Navigation",
  props: ['id', 'onlyBack', 'onlyForward'],
  data: function data() {
    return {};
  }
});

/***/ }),
/* 320 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Preference",
  props: ["preference"],
  data: function data() {
    return {};
  }
});

/***/ }),
/* 321 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Preference_vue__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Preference_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Preference_vue__);



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "",
  components: {
    Preference: __WEBPACK_IMPORTED_MODULE_0__Preference_vue___default.a
  },
  data: function data() {
    return {};
  }
});

/***/ }),
/* 322 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Preference_vue__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Preference_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Preference_vue__);



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "",
  components: {
    Preference: __WEBPACK_IMPORTED_MODULE_0__Preference_vue___default.a
  },
  data: function data() {
    return {};
  }
});

/***/ }),
/* 323 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "",
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    this.$store.state.navigation._urls = [''];
    var router = this.$router;
    var guards = [function () {
      this.state.navigation.reset();
      router.go(-1);
    }];
    this.$store.actions.setGuards(guards);
  },
  watch: {
    '$route': function $route(newRoute) {
      if (newRoute.path == '/app/preference/' + this.$store.state.preference.id + '/edit') {
        this.$store.state.navigation.reset();
        this.$store.state.navigation._urls = [''];
        var router = this.$router;
        var guards = [function () {
          this.state.navigation.reset();
          router.go(-1);
        }];
        this.$store.actions.setGuards(guards);
      }
    }
  }
});

/***/ }),
/* 324 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Navigation_vue__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Navigation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Navigation_vue__);




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PreferenceSelector",
  components: {
    Navigation: __WEBPACK_IMPORTED_MODULE_0__Navigation_vue___default.a
  }
});

/***/ }),
/* 325 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Navigation_vue__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Navigation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Navigation_vue__);




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PreferenceSelectorFacultyApp",

  data: function data() {
    return {};
  }
});

/***/ }),
/* 326 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Navigation_vue__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Navigation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Navigation_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PreferenceSummary_vue__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PreferenceSummary_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__PreferenceSummary_vue__);





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PreferenceSelectorStudyApp",
  components: {
    Navigation: __WEBPACK_IMPORTED_MODULE_0__Navigation_vue___default.a,
    PreferenceSummary: __WEBPACK_IMPORTED_MODULE_1__PreferenceSummary_vue___default.a
  },
  data: function data() {
    return {};
  },
  methods: {
    toogle: function toogle(type) {
      return type == this.$store.state.preference.type;
    }
  }
});

/***/ }),
/* 327 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Navigation_vue__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Navigation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Navigation_vue__);




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PreferenceSelectorStudyType",
  components: {
    Navigation: __WEBPACK_IMPORTED_MODULE_0__Navigation_vue___default.a
  },
  data: function data() {
    return {};
  },
  methods: {
    toogle: function toogle(studyType) {
      if (!this.$store.state.preference.studyType) return false;
      return studyType.id == this.$store.state.preference.studyType.id;
    }
  }
});

/***/ }),
/* 328 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Navigation_vue__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Navigation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Navigation_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PreferenceSummary_vue__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PreferenceSummary_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__PreferenceSummary_vue__);





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PreferenceSelectorYear",
  components: {
    Navigation: __WEBPACK_IMPORTED_MODULE_0__Navigation_vue___default.a,
    PreferenceSummary: __WEBPACK_IMPORTED_MODULE_1__PreferenceSummary_vue___default.a
  },
  data: function data() {
    return {};
  },
  methods: {
    toogle: function toogle(yearNumber) {
      if (!this.$store.state.preference.year) return false;
      return yearNumber == this.$store.state.preference.year.yearNumber;
    }
  }
});

/***/ }),
/* 329 */
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
/* 330 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "UserPreferenceDummy"
});

/***/ }),
/* 331 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PreferenceSelector_PreferenceSelector_vue__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PreferenceSelector_PreferenceSelector_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__PreferenceSelector_PreferenceSelector_vue__);





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CourseSelector",
  components: {
    PreferenceSelector: __WEBPACK_IMPORTED_MODULE_1__PreferenceSelector_PreferenceSelector_vue___default.a
  },
  data: function data() {
    return {
      current: {},
      toggledType: {},
      toggledYear: {},
      query: {
        type: 'Bachelor',
        studyType: 'Bachelor of Science in Informatics',
        facultyId: 1,
        year: 1
      }
    };
  },

  methods: {
    toogleAndUpdateType: function toogleAndUpdateType(type, $event) {
      this.query = {};
      this.query.type = type;
    },
    toogleAndUpdateYear: function toogleAndUpdateYear(year, $event) {
      this.query.year = year;
      if (this.toggledYear.el != undefined) this.toggledYear.el.classList.remove('btn--toogle');
      var el = $event.target;
      el.className += " btn--toogle";
      this.toggledYear.el = el;
    },
    toogleAndUpdateTypeStudy: function toogleAndUpdateTypeStudy(type, $event) {
      this.query.studyType = type;
      var el = $event.target;
      if (this.toggledType.el == undefined) this.toggledType.el = el;else {
        this.toggledType.el.classList.remove('btn--toogle');
      }
      el.className += " btn--toogle";
      this.toggledType.el = el;
    },
    toogleAndUpdateQuery: function toogleAndUpdateQuery(newQuery, $event) {
      this.query = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(this.query, newQuery);
      $event.target.className += " btn--toogle";
    },
    updateQuery: function updateQuery(year) {
      this.query.type = year.type;
      this.query.year = year.yearNumber;
    },
    update: function update(facultyId) {
      this.query.facultyId = facultyId;
      $('#fullcalendar').fullCalendar('removeEvents');
      this.$store.actions.fetchCourses(this.query);
      if (this.toggledType.el != undefined) this.toggledType.el.classList.remove('btn--toogle');
      if (this.toggledYear.el != undefined) this.toggledYear.el.classList.remove('btn--toogle');
    },
    createCalendar: function createCalendar() {
      var _this = this;

      $('#fullcalendar').fullCalendar({
        eventClick: function eventClick(calEvent, jsEvent, view) {
          var course = calEvent.course;
          _this.$store.actions.fetchCourse(course);
        },
        that: this,
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'agendaWeek,month'
        },
        views: {
          listWeek: {
            buttonText: 'list week'
          },
          listMonth: {
            buttonText: 'list month'
          },
          listYear: {
            buttonText: 'list year'
          }
        },
        defaultView: 'agendaWeek',
        allDaySlot: false,
        minTime: "08:00:00",
        maxTime: "18:00:00",
        height: 'auto',
        weekends: false,
        eventTextColor: "Black"
      });
    }
  },
  mounted: function mounted() {
    this.createCalendar();
    this.$store.actions.fetchFaculties();
    this.$store.actions.fetchYears();
    this.update(this.query.facultyId);
  }
});

/***/ }),
/* 332 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fullcalendar__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fullcalendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fullcalendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_flue_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_flue_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_flue_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Course_Course_vue__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Course_Course_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Course_Course_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__CourseSelector_CourseSelector_vue__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__CourseSelector_CourseSelector_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__CourseSelector_CourseSelector_vue__);











/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Display',
  components: {
    CourseSelector: __WEBPACK_IMPORTED_MODULE_6__CourseSelector_CourseSelector_vue___default.a,
    Course: __WEBPACK_IMPORTED_MODULE_5__Course_Course_vue___default.a
  },
  mounted: function mounted() {
    this.$store.state.navigation.BASE_URL = this.$route.path;
    this.$store.state.navigation._urls = ['studyDisplay', 'yearDisplay', 'studyTypeDisplay'];
    this.$store.state.isInDisplay = true;
    __WEBPACK_IMPORTED_MODULE_3_jquery___default()('body').click(function () {
      __WEBPACK_IMPORTED_MODULE_4_flue_vue__["SuperStore"].dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_4_flue_vue__["Action"]("USER_INTERACTION"));
    });
    var displayId = this.$route.params.id;
    var appId = 1;
    this.$store.actions.fetchDisplay(displayId);
  }
});

/***/ }),
/* 333 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Navigation",
  props: ['id', 'onlyBack', 'onlyForward'],
  data: function data() {
    return {};
  }
});

/***/ }),
/* 334 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Navigation_vue__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Navigation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Navigation_vue__);



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PreferenceSelector",
  components: {
    Navigation: __WEBPACK_IMPORTED_MODULE_0__Navigation_vue___default.a
  },
  data: function data() {
    return {
      transitionName: 'slide-left'
    };
  }
});

/***/ }),
/* 335 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Navigation_vue__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Navigation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Navigation_vue__);




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PreferenceSelectorFaculty",
  components: {
    Navigation: __WEBPACK_IMPORTED_MODULE_0__Navigation_vue___default.a
  },
  data: function data() {
    return {};
  }
});

/***/ }),
/* 336 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Navigation_vue__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Navigation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Navigation_vue__);




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PreferenceSelectorStudy",
  components: {
    Navigation: __WEBPACK_IMPORTED_MODULE_0__Navigation_vue___default.a
  },
  data: function data() {
    return {};
  },
  methods: {
    toogle: function toogle(type) {
      return type == this.$store.state.preference.type;
    }
  }
});

/***/ }),
/* 337 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Navigation_vue__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Navigation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Navigation_vue__);




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PreferenceSelectorStudyType",
  components: {
    Navigation: __WEBPACK_IMPORTED_MODULE_0__Navigation_vue___default.a
  },
  data: function data() {
    return {};
  },
  methods: {
    toogle: function toogle(studyType) {
      if (!this.$store.state.preference.studyType) return false;
      return studyType.name_en == this.$store.state.preference.studyType.name_en;
    }
  }
});

/***/ }),
/* 338 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Navigation_vue__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Navigation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Navigation_vue__);



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PreferenceSelectorYear",
  components: {
    Navigation: __WEBPACK_IMPORTED_MODULE_0__Navigation_vue___default.a
  },
  data: function data() {
    return {};
  },
  methods: {
    toogle: function toogle(yearNumber) {
      if (!this.$store.state.preference.year) return false;
      return yearNumber == this.$store.state.preference.year.yearNumber;
    }
  }
});

/***/ }),
/* 339 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_flue_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_flue_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_flue_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uikit__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uikit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_uikit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_uikit_dist_js_uikit_icons__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_uikit_dist_js_uikit_icons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_uikit_dist_js_uikit_icons__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_animated_vue__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stores_FacultyStore_js__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__stores_CourseStore_js__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__stores_YearStore_js__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__stores_PreferenceStore_js__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__stores_DisplayStore_js__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__stores_ScheduleStore_js__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__stores_UserStore_js__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__socket_js__ = __webpack_require__(197);










__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_6_animated_vue__["a" /* default */]);

window.UIkit = __WEBPACK_IMPORTED_MODULE_4_uikit___default.a;
__WEBPACK_IMPORTED_MODULE_4_uikit___default.a.use(__WEBPACK_IMPORTED_MODULE_5_uikit_dist_js_uikit_icons___default.a);

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_3_flue_vue__["flueVue"]);











window.jQuery = window.$ = __webpack_require__(23);

__WEBPACK_IMPORTED_MODULE_3_flue_vue__["SuperStore"].addStores([__WEBPACK_IMPORTED_MODULE_7__stores_FacultyStore_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_8__stores_CourseStore_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_9__stores_YearStore_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_10__stores_PreferenceStore_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_11__stores_DisplayStore_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_12__stores_ScheduleStore_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_13__stores_UserStore_js__["a" /* default */]]);
__WEBPACK_IMPORTED_MODULE_3_flue_vue__["SuperStore"].actions.initializeSchedules();
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;

new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ }),
/* 340 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  selectRandomItemFromArray: function selectRandomItemFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
});

/***/ }),
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 391 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.small-container--scrolled[data-v-2a9a203a] {\n  max-height: 150px;\n  overflow-y: scroll;\n}\n", ""]);

// exports


/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 395 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 397 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.slide-left-enter,\n.slide-right-leave-active {\n  opacity: 0;\n  -webkit-transform: translate(30px, 0);\n          transform: translate(30px, 0);\n}\n.slide-left-leave-active,\n.slide-right-enter {\n  opacity: 0;\n  -webkit-transform: translate(-30px, 0);\n          transform: translate(-30px, 0);\n}\n", ""]);

// exports


/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 399 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.small-container--scrolled[data-v-60dcb7c3] {\n  max-height: 150px;\n  overflow-y: scroll;\n}\n", ""]);

// exports


/***/ }),
/* 400 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 401 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 402 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 403 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.dummy-preference__text[data-v-84e4d5f2] {\n  height: 16px;\n  width: 100%;\n}\n.dummy-preference__text--small[data-v-84e4d5f2] {\n  height: 14px;\n  width: 100%;\n}\n.dummy-preference__bus[data-v-84e4d5f2] {\n  width: 24px;\n  height: 24px;\n}\n.dummy-preference--background-color[data-v-84e4d5f2] {\n  background-color: rgb(246, 246, 246) !important;\n}\n", ""]);

// exports


/***/ }),
/* 404 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.btn-circle--large {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  font-size: 24px;\n  color: #b2b2b2;\n  border: 2px solid #b2b2b2;\n}\n", ""]);

// exports


/***/ }),
/* 405 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n#display {\n  height: 100vh;\n  overflow: hidden;\n}\n.fc-view-container{\nbackground-color: white;\n}\n.btn--toogle {\n  border-color: black !important;\n  color: black !important;\n}\n.fc-time-grid-event.fc-v-event.fc-event {\n  opacity: 0.9 !important\n}\n.fc-event {\n  border-radius: 0px !important;\n  border: 0px !important;\n}\n.fc-time-grid-event.fc-v-event.fc-event {\n  opacity: 0.9 !important\n}\n.fc-event .fc-bg {\n  opacity: 0 !important;\n}\n.fc button {\n  border-radius: 0px !important;\n  box-sizing: border-box;\n  margin: 0 30px;\n  /* height: 2.1em; */\n  font-size: inherit;\n  /* white-space: nowrap; */\n  cursor: pointer;\n}\n.btn-circle {\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  padding: 6px 0;\n  font-size: 12px;\n  line-height: 1.428571429;\n  border-radius: 15px;\n}\n.btn-circle.btn-lg {\n  width: 50px;\n  height: 50px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33;\n  border-radius: 25px;\n}\n.btn-circle.btn-xl {\n  width: 70px;\n  height: 70px;\n  padding: 10px 16px;\n  font-size: 24px;\n  line-height: 1.33;\n  border-radius: 35px;\n}\n.course-selector__container {\n}\n", ""]);

// exports


/***/ }),
/* 406 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 408 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports
exports.i(__webpack_require__(411), "");

// module
exports.push([module.i, "/*@import \"./css/fullcalendar.css\"*/\n#app {\n  max-height: 100vh;\n  min-height: 100vh;\n}\n.full-h {\n  height: 100%;\n}\n.uk-flex--grow {\n  -ms-flex-positive: 999;\n          -webkit-box-flex: 999;\n      flex-grow: 999;\n}\n", ""]);

// exports


/***/ }),
/* 409 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 411 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".fade-enter-active, .fade-leave-active {\n  transition: opacity 1s\n}\n\n.fade-enter, .fade-leave-to\n/* .fade-leave-active in <2.1.8 */\n\n{\n  opacity: 0\n}\n\n.f-w {\n  width: 100%;\n}\n\n.icon--circle {\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 25px;\n  vertical-align: middle;\n  border: 1px solid black;\n}\n\n.uk-button-link:focus, .uk-button-link:hover {\n  text-decoration: none;\n}\n\n.toogle {\n  color: black !important\n}\n\n.btn--toogle {\n  border: 1px solid black !important;\n  color: black;\n}\n\n.content {\n  margin-bottom: 40px;\n}\n\n.my-card--padding {\n  padding: 16px;\n}\n\n.navigation__actions {\n  position: absolute;\n  height: 40px;\n  background-color: white;\n  position: fixed;\n  z-index: 99;\n  bottom: 0;\n  width: 100%;\n  left: 0;\n  right: 0\n}\n", ""]);

// exports


/***/ }),
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 79,
	"./af.js": 79,
	"./ar": 86,
	"./ar-dz": 80,
	"./ar-dz.js": 80,
	"./ar-kw": 81,
	"./ar-kw.js": 81,
	"./ar-ly": 82,
	"./ar-ly.js": 82,
	"./ar-ma": 83,
	"./ar-ma.js": 83,
	"./ar-sa": 84,
	"./ar-sa.js": 84,
	"./ar-tn": 85,
	"./ar-tn.js": 85,
	"./ar.js": 86,
	"./az": 87,
	"./az.js": 87,
	"./be": 88,
	"./be.js": 88,
	"./bg": 89,
	"./bg.js": 89,
	"./bn": 90,
	"./bn.js": 90,
	"./bo": 91,
	"./bo.js": 91,
	"./br": 92,
	"./br.js": 92,
	"./bs": 93,
	"./bs.js": 93,
	"./ca": 94,
	"./ca.js": 94,
	"./cs": 95,
	"./cs.js": 95,
	"./cv": 96,
	"./cv.js": 96,
	"./cy": 97,
	"./cy.js": 97,
	"./da": 98,
	"./da.js": 98,
	"./de": 101,
	"./de-at": 99,
	"./de-at.js": 99,
	"./de-ch": 100,
	"./de-ch.js": 100,
	"./de.js": 101,
	"./dv": 102,
	"./dv.js": 102,
	"./el": 103,
	"./el.js": 103,
	"./en-au": 104,
	"./en-au.js": 104,
	"./en-ca": 105,
	"./en-ca.js": 105,
	"./en-gb": 106,
	"./en-gb.js": 106,
	"./en-ie": 107,
	"./en-ie.js": 107,
	"./en-nz": 108,
	"./en-nz.js": 108,
	"./eo": 109,
	"./eo.js": 109,
	"./es": 111,
	"./es-do": 110,
	"./es-do.js": 110,
	"./es.js": 111,
	"./et": 112,
	"./et.js": 112,
	"./eu": 113,
	"./eu.js": 113,
	"./fa": 114,
	"./fa.js": 114,
	"./fi": 115,
	"./fi.js": 115,
	"./fo": 116,
	"./fo.js": 116,
	"./fr": 119,
	"./fr-ca": 117,
	"./fr-ca.js": 117,
	"./fr-ch": 118,
	"./fr-ch.js": 118,
	"./fr.js": 119,
	"./fy": 120,
	"./fy.js": 120,
	"./gd": 121,
	"./gd.js": 121,
	"./gl": 122,
	"./gl.js": 122,
	"./gom-latn": 123,
	"./gom-latn.js": 123,
	"./he": 124,
	"./he.js": 124,
	"./hi": 125,
	"./hi.js": 125,
	"./hr": 126,
	"./hr.js": 126,
	"./hu": 127,
	"./hu.js": 127,
	"./hy-am": 128,
	"./hy-am.js": 128,
	"./id": 129,
	"./id.js": 129,
	"./is": 130,
	"./is.js": 130,
	"./it": 131,
	"./it.js": 131,
	"./ja": 132,
	"./ja.js": 132,
	"./jv": 133,
	"./jv.js": 133,
	"./ka": 134,
	"./ka.js": 134,
	"./kk": 135,
	"./kk.js": 135,
	"./km": 136,
	"./km.js": 136,
	"./kn": 137,
	"./kn.js": 137,
	"./ko": 138,
	"./ko.js": 138,
	"./ky": 139,
	"./ky.js": 139,
	"./lb": 140,
	"./lb.js": 140,
	"./lo": 141,
	"./lo.js": 141,
	"./lt": 142,
	"./lt.js": 142,
	"./lv": 143,
	"./lv.js": 143,
	"./me": 144,
	"./me.js": 144,
	"./mi": 145,
	"./mi.js": 145,
	"./mk": 146,
	"./mk.js": 146,
	"./ml": 147,
	"./ml.js": 147,
	"./mr": 148,
	"./mr.js": 148,
	"./ms": 150,
	"./ms-my": 149,
	"./ms-my.js": 149,
	"./ms.js": 150,
	"./my": 151,
	"./my.js": 151,
	"./nb": 152,
	"./nb.js": 152,
	"./ne": 153,
	"./ne.js": 153,
	"./nl": 155,
	"./nl-be": 154,
	"./nl-be.js": 154,
	"./nl.js": 155,
	"./nn": 156,
	"./nn.js": 156,
	"./pa-in": 157,
	"./pa-in.js": 157,
	"./pl": 158,
	"./pl.js": 158,
	"./pt": 160,
	"./pt-br": 159,
	"./pt-br.js": 159,
	"./pt.js": 160,
	"./ro": 161,
	"./ro.js": 161,
	"./ru": 162,
	"./ru.js": 162,
	"./sd": 163,
	"./sd.js": 163,
	"./se": 164,
	"./se.js": 164,
	"./si": 165,
	"./si.js": 165,
	"./sk": 166,
	"./sk.js": 166,
	"./sl": 167,
	"./sl.js": 167,
	"./sq": 168,
	"./sq.js": 168,
	"./sr": 170,
	"./sr-cyrl": 169,
	"./sr-cyrl.js": 169,
	"./sr.js": 170,
	"./ss": 171,
	"./ss.js": 171,
	"./sv": 172,
	"./sv.js": 172,
	"./sw": 173,
	"./sw.js": 173,
	"./ta": 174,
	"./ta.js": 174,
	"./te": 175,
	"./te.js": 175,
	"./tet": 176,
	"./tet.js": 176,
	"./th": 177,
	"./th.js": 177,
	"./tl-ph": 178,
	"./tl-ph.js": 178,
	"./tlh": 179,
	"./tlh.js": 179,
	"./tr": 180,
	"./tr.js": 180,
	"./tzl": 181,
	"./tzl.js": 181,
	"./tzm": 183,
	"./tzm-latn": 182,
	"./tzm-latn.js": 182,
	"./tzm.js": 183,
	"./uk": 184,
	"./uk.js": 184,
	"./ur": 185,
	"./ur.js": 185,
	"./uz": 187,
	"./uz-latn": 186,
	"./uz-latn.js": 186,
	"./uz.js": 187,
	"./vi": 188,
	"./vi.js": 188,
	"./x-pseudo": 189,
	"./x-pseudo.js": 189,
	"./yo": 190,
	"./yo.js": 190,
	"./zh-cn": 191,
	"./zh-cn.js": 191,
	"./zh-hk": 192,
	"./zh-hk.js": 192,
	"./zh-tw": 193,
	"./zh-tw.js": 193
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
webpackContext.id = 418;

/***/ }),
/* 419 */,
/* 420 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(465)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(316),
  /* template */
  __webpack_require__(440),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/classesWebServer/coursesWebApp/src/components/Course/Course.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Course.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-19886379", Component.options)
  } else {
    hotAPI.reload("data-v-19886379", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 421 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(471)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(317),
  /* template */
  __webpack_require__(446),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/classesWebServer/coursesWebApp/src/components/CustomizationApp/CustomizationApp.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] CustomizationApp.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5440e9d9", Component.options)
  } else {
    hotAPI.reload("data-v-5440e9d9", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 422 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(468)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(318),
  /* template */
  __webpack_require__(443),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/classesWebServer/coursesWebApp/src/components/CustomizationApp/CustomizationAppHome.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] CustomizationAppHome.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-209932d8", Component.options)
  } else {
    hotAPI.reload("data-v-209932d8", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 423 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(472)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(321),
  /* template */
  __webpack_require__(447),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/classesWebServer/coursesWebApp/src/components/CustomizationApp/PreferenceConfirmationModal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PreferenceConfirmationModal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-55041922", Component.options)
  } else {
    hotAPI.reload("data-v-55041922", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 424 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(478)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(322),
  /* template */
  __webpack_require__(453),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/classesWebServer/coursesWebApp/src/components/CustomizationApp/PreferenceDeleteConfirmationModal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PreferenceDeleteConfirmationModal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-81f8d292", Component.options)
  } else {
    hotAPI.reload("data-v-81f8d292", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 425 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(485)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(323),
  /* template */
  __webpack_require__(460),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/classesWebServer/coursesWebApp/src/components/CustomizationApp/PreferenceEditPage.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PreferenceEditPage.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d8d79302", Component.options)
  } else {
    hotAPI.reload("data-v-d8d79302", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 426 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(464)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(324),
  /* template */
  __webpack_require__(439),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/classesWebServer/coursesWebApp/src/components/CustomizationApp/PreferenceSelectorApp.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PreferenceSelectorApp.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0a2acfec", Component.options)
  } else {
    hotAPI.reload("data-v-0a2acfec", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 427 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(476)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(325),
  /* template */
  __webpack_require__(451),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/classesWebServer/coursesWebApp/src/components/CustomizationApp/PreferenceSelectorFacultyApp.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PreferenceSelectorFacultyApp.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-72ccde22", Component.options)
  } else {
    hotAPI.reload("data-v-72ccde22", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 428 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(463)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(326),
  /* template */
  __webpack_require__(438),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/classesWebServer/coursesWebApp/src/components/CustomizationApp/PreferenceSelectorStudyApp.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PreferenceSelectorStudyApp.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-09cb165d", Component.options)
  } else {
    hotAPI.reload("data-v-09cb165d", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 429 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(475)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(327),
  /* template */
  __webpack_require__(450),
  /* scopeId */
  "data-v-60dcb7c3",
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/classesWebServer/coursesWebApp/src/components/CustomizationApp/PreferenceSelectorStudyTypeApp.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PreferenceSelectorStudyTypeApp.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-60dcb7c3", Component.options)
  } else {
    hotAPI.reload("data-v-60dcb7c3", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 430 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(480)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(328),
  /* template */
  __webpack_require__(455),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/classesWebServer/coursesWebApp/src/components/CustomizationApp/PreferenceSelectorYearApp.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PreferenceSelectorYearApp.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8c830122", Component.options)
  } else {
    hotAPI.reload("data-v-8c830122", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 431 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(479)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(330),
  /* template */
  __webpack_require__(454),
  /* scopeId */
  "data-v-84e4d5f2",
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/classesWebServer/coursesWebApp/src/components/CustomizationApp/UserPreferenceDummy.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UserPreferenceDummy.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-84e4d5f2", Component.options)
  } else {
    hotAPI.reload("data-v-84e4d5f2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 432 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(470)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(331),
  /* template */
  __webpack_require__(445),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/classesWebServer/coursesWebApp/src/components/Display/CourseSelector/CourseSelector.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] CourseSelector.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-415d756c", Component.options)
  } else {
    hotAPI.reload("data-v-415d756c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 433 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(481)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(332),
  /* template */
  __webpack_require__(456),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/classesWebServer/coursesWebApp/src/components/Display/Display.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Display.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9b20d0c2", Component.options)
  } else {
    hotAPI.reload("data-v-9b20d0c2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 434 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(477)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(335),
  /* template */
  __webpack_require__(452),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/classesWebServer/coursesWebApp/src/components/PreferenceSelector/PreferenceSelectorFaculty.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PreferenceSelectorFaculty.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7946813b", Component.options)
  } else {
    hotAPI.reload("data-v-7946813b", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 435 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(467)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(336),
  /* template */
  __webpack_require__(442),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/classesWebServer/coursesWebApp/src/components/PreferenceSelector/PreferenceSelectorStudy.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PreferenceSelectorStudy.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-20038440", Component.options)
  } else {
    hotAPI.reload("data-v-20038440", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 436 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(469)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(337),
  /* template */
  __webpack_require__(444),
  /* scopeId */
  "data-v-2a9a203a",
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/classesWebServer/coursesWebApp/src/components/PreferenceSelector/PreferenceSelectorStudyType.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PreferenceSelectorStudyType.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2a9a203a", Component.options)
  } else {
    hotAPI.reload("data-v-2a9a203a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 437 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(483)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(338),
  /* template */
  __webpack_require__(458),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/classesWebServer/coursesWebApp/src/components/PreferenceSelector/PreferenceSelectorYear.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PreferenceSelectorYear.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c1b8e314", Component.options)
  } else {
    hotAPI.reload("data-v-c1b8e314", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 438 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "uk-flex uk-flex-column uk-margin-top uk-margin-small-bottom"
  }, [_c('ul', {
    staticClass: "uk-list"
  }, _vm._l((_vm.$store.state.preference.faculty.studies), function(study) {
    return _c('li', {
      class: {
        'toogle': _vm.toogle(study.type)
      },
      on: {
        "click": function($event) {
          _vm.$store.actions.updatePreference({
            type: study
          })
        }
      }
    }, [_c('p', {
      staticClass: "uk-text-large"
    }, [_vm._v(_vm._s(study.type))])])
  }))]), _vm._v(" "), (!this.$store.isInEditMode) ? _c('navigation', {
    attrs: {
      "id": _vm.$route.params.id,
      "onlyBack": true
    }
  }) : _c('div', {
    staticClass: "uk-margin-top navigation__actions"
  }, [_c('a', {
    attrs: {
      "uk-icon": "icon: chevron-left; ratio: 1.5"
    },
    on: {
      "click": function($event) {
        _vm.$router.go(-1)
      }
    }
  })])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {}, [_c('h3', [_vm._v("Select your study")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-09cb165d", module.exports)
  }
}

/***/ }),
/* 439 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "PreferenceSelector"
    }
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "uk-flex",
    attrs: {
      "uk-grid": ""
    }
  }, _vm._l((_vm.$store.state.faculties), function(faculty) {
    return _c('div', {
      staticClass: "uk-width-auto@s uk-width-1-1@m"
    }, [_c('div', {
      staticClass: "uk-card uk-card-default uk-card-body"
    }, [(!_vm.$store.state.preference.faculty || !(_vm.$route.params.facultyId == faculty.id)) ? _c('div', {
      on: {
        "click": function($event) {
          _vm.$store.actions.selectFaculty(faculty, false)
        }
      }
    }, [_c('p', {
      staticClass: "uk-margin-remove uk-text-large"
    }, [_vm._v(_vm._s(faculty.name_en))])]) : _c('h4', {
      staticClass: "uk-margin-remove"
    }, [_vm._v(_vm._s(faculty.name_en))])])])
  })), _vm._v(" "), _c('navigation', {
    attrs: {
      "onlyBack": true
    }
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {}, [_c('h3', [_vm._v("Select your faculty")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0a2acfec", module.exports)
  }
}

/***/ }),
/* 440 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "uk-card uk-card-default uk-card-body"
  }, [_c('div', {
    staticClass: "uk-card-title"
  }, [_vm._v("\n    " + _vm._s(_vm.course.name_en) + "\n  ")]), _vm._v(" "), _c('h3', {
    staticClass: "uk-margin-remove"
  }, [_vm._v(_vm._s(_vm.course.professor_full_name))]), _vm._v(" "), _c('p', {
    domProps: {
      "innerHTML": _vm._s(_vm.course.description_it)
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-19886379", module.exports)
  }
}

/***/ }),
/* 441 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "uk-flex"
  }, [(_vm.$store.state.preference.type) ? _c('h5', {
    staticClass: "uk-margin-remove"
  }, [_vm._v(_vm._s(_vm.$store.state.preference.type))]) : _vm._e(), _vm._v(" "), (_vm.$store.state.preference.year) ? _c('div', {
    staticClass: "uk-margin-small-left icon--circle btn--toogle"
  }, [_vm._v("\n      " + _vm._s(_vm.$store.state.preference.year.yearNumber) + "\n    ")]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1e451e60", module.exports)
  }
}

/***/ }),
/* 442 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "uk-flex uk-flex-column uk-margin-top uk-margin-small-bottom"
  }, [_c('ul', {
    staticClass: "uk-list"
  }, _vm._l((_vm.$store.state.preference.faculty.studies), function(study, index) {
    return _c('li', {
      class: {
        'toogle': _vm.toogle(study.type)
      },
      on: {
        "click": function($event) {
          _vm.$store.actions.updatePreference({
            type: study.type
          })
        }
      }
    }, [_c('v-btn', {
      staticClass: "secondary secondary--text",
      attrs: {
        "outline": ""
      }
    }, [_vm._v(_vm._s(study.type))])], 1)
  }))]), _vm._v(" "), _c('navigation', {
    attrs: {
      "id": _vm.$route.params.id,
      "onlyBack": true
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-20038440", module.exports)
  }
}

/***/ }),
/* 443 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "CustomizationAppHome"
    }
  }, [_c('preference-delete-confirmation-modal'), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-bottom"
  }, [_c('h5', {
    staticClass: "uk-margin-remove"
  }, [_vm._v("Your preferences\n    "), _c('br'), _vm._v(" "), _c('small', {
    staticClass: "uk-text-meta"
  }, [_vm._v(_vm._s(_vm.$store.state.user.preferences.data.length) + " entries")])])]), _vm._v(" "), _c('div', {
    staticClass: "uk-flex-column uk-flex-item-1"
  }, [_c('div', {
    staticClass: "preference-station__container"
  }, [(_vm.$store.state.user.preferences.loading) ? _c('div', _vm._l(([1, 2]), function(index) {
    return _c('user-preference-dummy')
  })) : (_vm.$store.state.user.preferences.data.length <= 0) ? _c('div', {
    staticClass: "uk-text-center"
  }, [_c('h6', {
    staticClass: "uk-text-meta uk-text-large",
    attrs: {
      "uk-cover": ""
    }
  }, [_vm._v("No preferences found.")])]) : _c('div', {
    staticClass: "uk-flex uk-flex-column"
  }, _vm._l((_vm.$store.state.user.preferences.data.reverse()), function(preference) {
    return _c('preference', {
      attrs: {
        "preference": preference
      }
    })
  }))])]), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-top navigation__actions padding--zero"
  }, [_c('button', {
    staticClass: "uk-button uk-button-primary uk-float-right uk-width-auto@m",
    on: {
      "click": function($event) {
        _vm.$store.actions.goNext()
      }
    }
  }, [_vm._v("new")])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-209932d8", module.exports)
  }
}

/***/ }),
/* 444 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "uk-flex"
  }, [_c('h5', {
    staticClass: "uk-margin-remove"
  }, [_vm._v(_vm._s(_vm.$store.state.preference.type))]), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-small-left icon--circle btn--toogle"
  }, [_vm._v("\n      " + _vm._s(_vm.$store.state.preference.year.yearNumber) + "\n    ")])]), _vm._v(" "), _c('div', {
    staticClass: "uk-flex uk-flex-column uk-margin-top uk-margin-small-bottom small-container--scrolled"
  }, _vm._l((_vm.$store.state.preference.faculty.studies), function(study) {
    return (_vm.$store.state.preference.type == study.type) ? _c('div', [_c('ul', {
      staticClass: "uk-list uk-list-divider"
    }, _vm._l((study.studyTypes), function(studyType) {
      return _c('li', {
        class: {
          'toogle': _vm.toogle(studyType)
        },
        on: {
          "click": function($event) {
            _vm.$store.actions.updatePreference({
              studyType: studyType
            })
          }
        }
      }, [_c('h5', [_vm._v(_vm._s(studyType.name_en))])])
    }))]) : _vm._e()
  })), _vm._v(" "), _c('navigation', {
    attrs: {
      "id": _vm.$route.params.id,
      "onlyBack": true
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2a9a203a", module.exports)
  }
}

/***/ }),
/* 445 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "uk-flex uk-flex-left uk-margin-top uk-margin-left uk-margin-remove@s"
  }, [_c('transition', {
    staticClass: "f-w",
    attrs: {
      "name": "fade"
    }
  }, [(_vm.$store.state.courses.error.isError) ? _c('div', {
    staticClass: "uk-alert-danger f-w uk-width-1-1",
    attrs: {
      "uk-alert": ""
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.$store.state.courses.error.msg))])]) : _vm._e()]), _vm._v(" "), _c('preference-selector')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-415d756c", module.exports)
  }
}

/***/ }),
/* 446 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "uk-container uk-margin-top uk-flex uk-flex-column"
  }, [_c('keep-alive', [_c('router-view')], 1), _vm._v(" "), _c('preference-confirmationModal')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5440e9d9", module.exports)
  }
}

/***/ }),
/* 447 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: {
      'uk-modal uk-open uk-flex uk-flex-center uk-flex-middle': this.$store.state.showConfirmationModal
    },
    attrs: {
      "id": "preference-confirmation__modal",
      "uk-modal": "center: true"
    }
  }, [_c('div', {
    staticClass: "uk-modal-dialog uk-modal-body"
  }, [_c('h3', [_vm._v("create preference?")]), _vm._v(" "), _c('p', {
    staticClass: "uk-text-meta"
  }, [_vm._v("This is how it's gonna look")]), _vm._v(" "), _c('preference', {
    attrs: {
      "preference": this.$store.state.preference
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "uk-button uk-button-link uk-button-borderless uk-float-left uk-modal-close"
  }, [_vm._v(" Cancel ")]), _vm._v(" "), _c('button', {
    staticClass: "uk-button uk-button-primary uk-float-right uk-modal-close",
    on: {
      "click": function($event) {
        _vm.$store.actions.goNext()
      }
    }
  }, [_vm._v(" Yes ")])], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-55041922", module.exports)
  }
}

/***/ }),
/* 448 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "PreferenceSelector"
    }
  }, [_c('div', {
    staticClass: "uk-flex",
    attrs: {
      "uk-grid": ""
    }
  }, _vm._l((_vm.$store.state.faculties), function(faculty) {
    return _c('div', {
      staticClass: "uk-width-auto@s uk-width-1-1@m"
    }, [_c('div', {
      staticClass: "uk-card uk-margin-right uk-card-default uk-card-body"
    }, [(_vm.$store.state.preference.isLoading && _vm.$route.params.facultyId == faculty.id) ? _c('div', [_vm._m(0, true)]) : _c('div', [(!_vm.$store.state.preference.faculty || !(_vm.$route.params.facultyId == faculty.id)) ? _c('div', {
      on: {
        "click": function($event) {
          _vm.$store.actions.selectFaculty(faculty, true)
        }
      }
    }, [_c('h3', {
      staticClass: "uk-margin-remove"
    }, [_vm._v(_vm._s(faculty.name_en))])]) : _c('h4', {
      staticClass: "uk-margin-remove"
    }, [_vm._v(_vm._s(faculty.name_en))]), _vm._v(" "), (_vm.$route.params.facultyId == faculty.id) ? _c('router-view') : _vm._e()], 1)])])
  }))])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "uk-flex uk-flex-center"
  }, [_c('div', {
    attrs: {
      "uk-spinner": ""
    }
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-57e39dce", module.exports)
  }
}

/***/ }),
/* 449 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "uk-card uk-card-default uk-card-body uk-margin-bottom"
  }, [_c('div', {
    staticClass: "uk-float-right uk-flex"
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
        _vm.$store.state.currentPreference = _vm.preference
      }
    }
  }, [_c('v-icon', [_vm._v("delete")])], 1)], 1)]), _vm._v(" "), _c('h4', {
    staticClass: "uk-margin-remove"
  }, [_vm._v(_vm._s(_vm.preference.faculty.name_en))]), _vm._v(" "), _c('h6', {
    staticClass: "uk-text-meta uk-margin-remove"
  }, [_vm._v(" " + _vm._s(_vm.preference.studyType.name_en))]), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-small-right icon--circle btn--toogle"
  }, [_vm._v("\n    " + _vm._s(_vm.preference.year.yearNumber) + "\n  ")])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-592ab5b4", module.exports)
  }
}

/***/ }),
/* 450 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "uk-flex uk-flex-column uk-margin-top uk-margin-small-bottom"
  }, _vm._l((_vm.$store.state.preference.faculty.studies), function(study) {
    return (_vm.$store.state.preference.type.type == study.type) ? _c('div', [_c('ul', {
      staticClass: "uk-list"
    }, [_vm._l((study.studyTypes), function(studyType) {
      return (!_vm.$store.state.isInEditMode) ? _c('li', {
        class: {
          'toogle': _vm.toogle(studyType)
        },
        attrs: {
          "uk-toggle": "target: #preference-confirmation__modal"
        },
        on: {
          "click": function($event) {
            _vm.$store.actions.updatePreference({
              studyType: studyType
            }, false)
          }
        }
      }, [_vm._v("\n          " + _vm._s(studyType.name_en) + "\n        ")]) : _vm._e()
    }), _vm._v(" "), _vm._l((study.studyTypes), function(studyType) {
      return (_vm.$store.state.isInEditMode) ? _c('li', {
        class: {
          'toogle': _vm.toogle(studyType)
        },
        on: {
          "click": function($event) {
            _vm.$store.actions.updatePreference({
              studyType: studyType
            })
          }
        }
      }, [_vm._v("\n          " + _vm._s(studyType.name_en) + "\n        ")]) : _vm._e()
    })], 2)]) : _vm._e()
  })), _vm._v(" "), (!this.$store.isInEditMode) ? _c('navigation', {
    attrs: {
      "id": _vm.$route.params.id,
      "onlyBack": true
    }
  }) : _c('div', {
    staticClass: "uk-margin-top navigation__actions"
  }, [_c('a', {
    attrs: {
      "uk-icon": "icon: chevron-left; ratio: 1.5"
    },
    on: {
      "click": function($event) {
        _vm.$router.go(-1)
      }
    }
  })])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {}, [_c('h3', [_vm._v("Select your study program")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-60dcb7c3", module.exports)
  }
}

/***/ }),
/* 451 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "uk-flex"
  }, _vm._l((_vm.$store.state.faculties), function(faculty) {
    return _c('div', {
      staticClass: "uk-margin-right"
    }, [_vm._v("\n  " + _vm._s(faculty.name_en) + "\n  "), _c('navigation', {
      attrs: {
        "id": faculty.id
      }
    }), _vm._v(" "), (_vm.$route.params.id == faculty.id) ? _c('router-view') : _vm._e()], 1)
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-72ccde22", module.exports)
  }
}

/***/ }),
/* 452 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "uk-flex"
  }, _vm._l((_vm.$store.state.faculties), function(faculty) {
    return _c('div', {
      staticClass: "uk-margin-right"
    }, [_vm._v("\n  " + _vm._s(faculty.name_en) + "\n  "), _c('navigation', {
      attrs: {
        "id": faculty.id
      }
    }), _vm._v(" "), (_vm.$route.params.id == faculty.id) ? _c('router-view') : _vm._e()], 1)
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7946813b", module.exports)
  }
}

/***/ }),
/* 453 */
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
  }, [_vm._v("This cannot be undone.")]), _vm._v(" "), _c('button', {
    staticClass: "uk-button uk-button-default uk-button-borderless uk-float-left uk-modal-close"
  }, [_vm._v(" Back ")]), _vm._v(" "), _c('button', {
    staticClass: "uk-button uk-button-primary uk-float-right uk-modal-close",
    on: {
      "click": function($event) {
        _vm.$store.actions.deletePreference(_vm.$store.state.currentPreference)
      }
    }
  }, [_vm._v(" Yes ")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-81f8d292", module.exports)
  }
}

/***/ }),
/* 454 */
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
     require("vue-hot-reload-api").rerender("data-v-84e4d5f2", module.exports)
  }
}

/***/ }),
/* 455 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "PreferenceSelectorYear"
    }
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "uk-flex uk-flex-column uk-margin-small-bottom"
  }, [_c('div', {
    staticClass: "uk-margin-top"
  }, _vm._l((_vm.$store.state.preference.faculty.studies), function(study) {
    return (_vm.$store.state.preference.type.type == study.type) ? _c('div', [_c('div', {
      staticClass: "uk-flex uk-margin-small-bottom"
    }, _vm._l((study.years), function(year) {
      return _c('button', {
        staticClass: "uk-button btn-circle btn-circle--large uk-button-default uk-margin-small-right",
        class: {
          'btn--toogle': _vm.toogle(year.yearNumber)
        },
        on: {
          "click": function($event) {
            _vm.$store.actions.updatePreference({
              year: year
            })
          }
        }
      }, [_vm._v(_vm._s(year.yearNumber))])
    }))]) : _vm._e()
  })), _vm._v(" "), _c('navigation', {
    attrs: {
      "onlyBack": true
    }
  })], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {}, [_c('h5', [_vm._v("Select your study year")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-8c830122", module.exports)
  }
}

/***/ }),
/* 456 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "full-h uk-flex uk-flex-column uk-background-muted",
    attrs: {
      "id": "display"
    }
  }, [(_vm.$store.state.lastQuery.studyType) ? _c('h1', {
    staticClass: "uk-text-center"
  }, [_vm._v(_vm._s(((_vm.$store.state.lastQuery.studyType.name_en) + ", " + (_vm.$store.state.lastQuery.year) + "st year")))]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "uk-flex uk-margin-top uk-margin-left",
    attrs: {
      "uk-grid": ""
    }
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-large-bottom course-selector__container uk-width-1-1 uk-width-1-4@m"
  }, [_c('course-selector')], 1), _vm._v(" "), _vm._m(1)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "uk-width-1-1 uk-width-3-4@m "
  }, [_c('div', {
    attrs: {
      "id": "fullcalendar"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "uk-width-1-1 uk-margin-left uk-margin-right"
  }, [_c('div', {
    staticClass: "uk-flex",
    attrs: {
      "uk-grid": ""
    }
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9b20d0c2", module.exports)
  }
}

/***/ }),
/* 457 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "uk-margin-top navigation__actions"
  }, [(!_vm.onlyForward) ? _c('a', {
    attrs: {
      "uk-icon": "icon: chevron-left; ratio: 1.5"
    },
    on: {
      "click": function($event) {
        _vm.$store.actions.goBack()
      }
    }
  }) : _vm._e(), _vm._v(" "), (!_vm.onlyBack) ? _c('a', {
    staticClass: "uk-float-right uk-margin-small-right",
    on: {
      "click": function($event) {
        _vm.$store.actions.goNext(_vm.id)
      }
    }
  }, [_vm._v("Next")]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a5aea442", module.exports)
  }
}

/***/ }),
/* 458 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "PreferenceSelectorYear"
    }
  }, [_c('div', {
    staticClass: "uk-flex uk-flex-column uk-margin-small-bottom"
  }, [_c('h5', {
    staticClass: "uk-margin-remove"
  }, [_vm._v(_vm._s(_vm.$store.state.preference.type))]), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-top"
  }, _vm._l((_vm.$store.state.preference.faculty.studies), function(study) {
    return (_vm.$store.state.preference.type == study.type) ? _c('div', [_c('div', {
      staticClass: "uk-flex uk-margin-small-bottom"
    }, _vm._l((study.years), function(year) {
      return _c('v-btn', {
        staticClass: "grey--text text--darken-2 uk-margin-small-right",
        class: {
          'btn--toogle': _vm.toogle(year.yearNumber)
        },
        attrs: {
          "outline": "",
          "floating": "",
          "small": ""
        },
        nativeOn: {
          "click": function($event) {
            _vm.$store.actions.updatePreference({
              year: year
            })
          }
        }
      }, [_vm._v(_vm._s(year.yearNumber))])
    }))]) : _vm._e()
  })), _vm._v(" "), _c('navigation', {
    attrs: {
      "onlyBack": true
    }
  })], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-c1b8e314", module.exports)
  }
}

/***/ }),
/* 459 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('router-view')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-c8207ea4", module.exports)
  }
}

/***/ }),
/* 460 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {}, [_c('div', {
    staticClass: "uk-card content"
  }, [_c('h6', [_vm._v("Change Faculty ")]), _vm._v(" "), (_vm.$store.state.preference.faculty) ? _c('div', {
    on: {
      "click": function($event) {
        _vm.$router.push({
          name: 'faculty'
        })
      }
    }
  }, [_c('div', {
    staticClass: "uk-card uk-card-default uk-card-body my-card--padding"
  }, [_c('h5', [_vm._v(" " + _vm._s(_vm.$store.state.preference.faculty.name_en))])])]) : _vm._e(), _vm._v(" "), _c('h6', [_vm._v("Change Study plan ")]), _vm._v(" "), (_vm.$store.state.preference.type) ? _c('div', {
    on: {
      "click": function($event) {
        _vm.$router.push({
          name: 'study',
          params: {
            facultyId: _vm.$store.state.preference.faculty.id
          }
        })
      }
    }
  }, [_c('div', {
    staticClass: "uk-card uk-card-default uk-card-body my-card--padding"
  }, [_c('h5', [_vm._v("  " + _vm._s(_vm.$store.state.preference.type.type))])])]) : _vm._e(), _vm._v(" "), _c('h6', [_vm._v("Change Study Type ")]), _vm._v(" "), _c('div', [(this.$store.state.preference.studyType) ? _c('div', {
    staticClass: "uk-card uk-card-default uk-card-body my-card--padding",
    on: {
      "click": function($event) {
        _vm.$router.push({
          name: 'studyType',
          params: {
            facultyId: _vm.$store.state.preference.faculty.id
          }
        })
      }
    }
  }, [_c('h5', [_vm._v("  " + _vm._s(_vm.$store.state.preference.studyType.name_en))])]) : _vm._e()]), _vm._v(" "), _c('h6', [_vm._v("Change Year ")]), _vm._v(" "), (_vm.$store.state.preference.year) ? _c('div', {
    on: {
      "click": function($event) {
        _vm.$router.push({
          name: 'year',
          params: {
            facultyId: _vm.$store.state.preference.faculty.id
          }
        })
      }
    }
  }, [_c('h5', [_vm._v("  " + _vm._s(_vm.$store.state.preference.year.yearNumber))])]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-top navigation__actions"
  }, [_c('a', {
    attrs: {
      "uk-icon": "icon: chevron-left; ratio: 1.5"
    },
    on: {
      "click": function($event) {
        _vm.$router.go(-1)
      }
    }
  }), _vm._v(" "), _c('a', {
    staticClass: "uk-float-right uk-margin-small-right",
    on: {
      "click": function($event) {
        _vm.$store.actions.updateUserPreference(_vm.$store.PreferenceStore.makeQueryFromPreference(_vm.$store.state.preference))
      }
    }
  }, [_vm._v("Done")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-d8d79302", module.exports)
  }
}

/***/ }),
/* 461 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "Navigation "
    }
  }, [_c('v-btn', {
    staticClass: "grey--text text--darken-2 uk-margin-remove",
    attrs: {
      "icon": "icon"
    },
    nativeOn: {
      "click": function($event) {
        _vm.$store.actions.goBack()
      }
    }
  }, [(!_vm.onlyForward) ? _c('v-icon', {
    staticClass: "grey--text text--darken-2"
  }, [_vm._v("arrow_back")]) : _vm._e()], 1), _vm._v(" "), (!_vm.onlyBack) ? _c('button', {
    staticClass: "uk-button uk-button-primary",
    on: {
      "click": function($event) {
        _vm.$store.actions.goNext(_vm.id)
      }
    }
  }, [_vm._v(_vm._s(_vm.Next))]) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-de85c95a", module.exports)
  }
}

/***/ }),
/* 462 */,
/* 463 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(387);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("140771d1", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-09cb165d\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PreferenceSelectorStudyApp.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-09cb165d\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PreferenceSelectorStudyApp.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 464 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(388);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("471f4265", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-0a2acfec\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PreferenceSelectorApp.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-0a2acfec\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PreferenceSelectorApp.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 465 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(389);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("ccc5b1da", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-19886379\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Course.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-19886379\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Course.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 466 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(390);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("c0513902", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-1e451e60\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PreferenceSummary.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-1e451e60\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PreferenceSummary.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 467 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(391);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("cffb0cb6", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-20038440\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PreferenceSelectorStudy.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-20038440\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PreferenceSelectorStudy.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 468 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(392);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("5cf1ca2a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-209932d8\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CustomizationAppHome.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-209932d8\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CustomizationAppHome.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 469 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(393);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("544a4570", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2a9a203a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PreferenceSelectorStudyType.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2a9a203a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PreferenceSelectorStudyType.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 470 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(394);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("de9c7296", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-415d756c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CourseSelector.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-415d756c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CourseSelector.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 471 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(395);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("1416da9d", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-5440e9d9\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CustomizationApp.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-5440e9d9\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CustomizationApp.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 472 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(396);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("02935d24", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-55041922\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PreferenceConfirmationModal.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-55041922\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PreferenceConfirmationModal.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 473 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(397);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("04b20baa", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-57e39dce\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PreferenceSelector.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-57e39dce\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PreferenceSelector.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 474 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(398);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("6ef88044", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-592ab5b4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Preference.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-592ab5b4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Preference.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 475 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(399);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("45a42060", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-60dcb7c3\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PreferenceSelectorStudyTypeApp.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-60dcb7c3\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PreferenceSelectorStudyTypeApp.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 476 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(400);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("4156d14c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-72ccde22\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PreferenceSelectorFacultyApp.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-72ccde22\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PreferenceSelectorFacultyApp.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 477 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(401);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("bf4b42d2", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7946813b\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PreferenceSelectorFaculty.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7946813b\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PreferenceSelectorFaculty.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 478 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(402);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("d47f7e6e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-81f8d292\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PreferenceDeleteConfirmationModal.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-81f8d292\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PreferenceDeleteConfirmationModal.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 479 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(403);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("ea07e258", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-84e4d5f2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserPreferenceDummy.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-84e4d5f2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserPreferenceDummy.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 480 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(404);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("1e69263c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-8c830122\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PreferenceSelectorYearApp.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-8c830122\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PreferenceSelectorYearApp.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 481 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(405);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("0754e92e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-9b20d0c2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Display.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-9b20d0c2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Display.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 482 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(406);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("1ab3c608", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-a5aea442\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Navigation.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-a5aea442\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Navigation.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 483 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(407);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("b1274876", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-c1b8e314\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PreferenceSelectorYear.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-c1b8e314\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PreferenceSelectorYear.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 484 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(408);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("d53a7dc0", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-c8207ea4\",\"scoped\":false,\"hasInlineConfig\":true}!../node_modules/stylus-loader/index.js?{\"sourceMap\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-c8207ea4\",\"scoped\":false,\"hasInlineConfig\":true}!../node_modules/stylus-loader/index.js?{\"sourceMap\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 485 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(409);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("d9656354", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-d8d79302\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PreferenceEditPage.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-d8d79302\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PreferenceEditPage.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 486 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(410);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("c37a431a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-de85c95a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Navigation.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-de85c95a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Navigation.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })
]),[339]);
//# sourceMappingURL=app.256077c3b51829574419.js.map