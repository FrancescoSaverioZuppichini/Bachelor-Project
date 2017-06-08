webpackJsonp([1],Array(27).concat([
/* 27 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(490)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(336),
  /* template */
  __webpack_require__(462),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/classesWebServer/coursesWebApp/src/components/CustomizationApp/SelectorWrapper.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] SelectorWrapper.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-551b84f9", Component.options)
  } else {
    hotAPI.reload("data-v-551b84f9", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Display_Display_vue__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Display_Display_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Display_Display_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_PreferenceSelector_PreferenceSelector_vue__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_PreferenceSelector_PreferenceSelector_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_PreferenceSelector_PreferenceSelector_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_PreferenceSelector_PreferenceSelectorFaculty_vue__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_PreferenceSelector_PreferenceSelectorFaculty_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_PreferenceSelector_PreferenceSelectorFaculty_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_PreferenceSelector_PreferenceSelectorStudy_vue__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_PreferenceSelector_PreferenceSelectorStudy_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_PreferenceSelector_PreferenceSelectorStudy_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_PreferenceSelector_PreferenceSelectorYear_vue__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_PreferenceSelector_PreferenceSelectorYear_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_PreferenceSelector_PreferenceSelectorYear_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_PreferenceSelector_PreferenceSelectorStudyType_vue__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_PreferenceSelector_PreferenceSelectorStudyType_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_PreferenceSelector_PreferenceSelectorStudyType_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_CustomizationApp_PreferenceSelectorApp_vue__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_CustomizationApp_PreferenceSelectorApp_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__components_CustomizationApp_PreferenceSelectorApp_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_CustomizationApp_PreferenceSelectorStudyApp_vue__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_CustomizationApp_PreferenceSelectorStudyApp_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__components_CustomizationApp_PreferenceSelectorStudyApp_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_CustomizationApp_PreferenceSelectorYearApp_vue__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_CustomizationApp_PreferenceSelectorYearApp_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__components_CustomizationApp_PreferenceSelectorYearApp_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_CustomizationApp_PreferenceSelectorStudyTypeApp_vue__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_CustomizationApp_PreferenceSelectorStudyTypeApp_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__components_CustomizationApp_PreferenceSelectorStudyTypeApp_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_CustomizationApp_CustomizationAppHome_vue__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_CustomizationApp_CustomizationAppHome_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__components_CustomizationApp_CustomizationAppHome_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_CustomizationApp_CustomizationApp_vue__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_CustomizationApp_CustomizationApp_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__components_CustomizationApp_CustomizationApp_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_CustomizationApp_PreferenceEditPage_vue__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_CustomizationApp_PreferenceEditPage_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__components_CustomizationApp_PreferenceEditPage_vue__);





















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
    component: __WEBPACK_IMPORTED_MODULE_13__components_CustomizationApp_CustomizationApp_vue___default.a,
    children: [{
      path: '/app/home/:userId',
      name: 'home',
      component: __WEBPACK_IMPORTED_MODULE_12__components_CustomizationApp_CustomizationAppHome_vue___default.a
    }, {
      path: '/app/preference/:id/edit',
      name: 'edit',
      component: __WEBPACK_IMPORTED_MODULE_14__components_CustomizationApp_PreferenceEditPage_vue___default.a
    }, {
      path: '/app/preference/faculty/',
      name: 'faculty',
      component: __WEBPACK_IMPORTED_MODULE_8__components_CustomizationApp_PreferenceSelectorApp_vue___default.a
    }, {
      path: '/app/preference/faculty/:facultyId/year',
      name: 'year',
      component: __WEBPACK_IMPORTED_MODULE_10__components_CustomizationApp_PreferenceSelectorYearApp_vue___default.a
    }, {
      path: '/app/preference/faculty/:facultyId/study',
      name: 'study',
      component: __WEBPACK_IMPORTED_MODULE_9__components_CustomizationApp_PreferenceSelectorStudyApp_vue___default.a
    }, {
      path: '/app/preference/faculty/:facultyId/studyType',
      name: 'studyType',
      component: __WEBPACK_IMPORTED_MODULE_11__components_CustomizationApp_PreferenceSelectorStudyTypeApp_vue___default.a
    }]
  }]
}));

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(353);
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
/* 30 */,
/* 31 */,
/* 32 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(504)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(340),
  /* template */
  __webpack_require__(476),
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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(499)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(324),
  /* template */
  __webpack_require__(471),
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(478)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(334),
  /* template */
  __webpack_require__(450),
  /* scopeId */
  "data-v-051fe8ce",
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/classesWebServer/coursesWebApp/src/components/CustomizationApp/Resource.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Resource.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-051fe8ce", Component.options)
  } else {
    hotAPI.reload("data-v-051fe8ce", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
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
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(492)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(325),
  /* template */
  __webpack_require__(464),
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
/* 59 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(481)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(335),
  /* template */
  __webpack_require__(453),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/classesWebServer/coursesWebApp/src/components/CustomizationApp/ResourceTransitionWrapper.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ResourceTransitionWrapper.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1870b215", Component.options)
  } else {
    hotAPI.reload("data-v-1870b215", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
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
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(483)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(333),
  /* template */
  __webpack_require__(455),
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
/* 198 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(491)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(341),
  /* template */
  __webpack_require__(463),
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
/* 199 */,
/* 200 */
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
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__ = __webpack_require__(42);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__api_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__router_index_js__ = __webpack_require__(28);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_js__ = __webpack_require__(29);
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
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__ = __webpack_require__(42);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__api_js__ = __webpack_require__(29);










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
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(33);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__router_index_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_path__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_path__);













var Navigation = function () {
  function Navigation() {
    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default()(this, Navigation);

    this._urls = [];
    this._index = 0;
    this.route = {};
  }

  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default()(Navigation, [{
    key: 'goNext',
    value: function goNext(params) {

      console.log(this._urls[this._index]);
      __WEBPACK_IMPORTED_MODULE_8__router_index_js__["a" /* default */].push({ name: this._urls[this._index], params: params });
      this._index += 1;
    }
  }, {
    key: 'goBack',
    value: function goBack() {
      this._index -= 1;
      __WEBPACK_IMPORTED_MODULE_8__router_index_js__["a" /* default */].go(-1);
    }
  }, {
    key: 'reset',
    value: function reset(params) {
      this._index = 0;
      __WEBPACK_IMPORTED_MODULE_8__router_index_js__["a" /* default */].push({ name: 'home', params: params });
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
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default()(PreferenceStore, [{
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
      this.state.preference = { faculty: {} };
      this.state.navigation.reset();
    }
  }, {
    key: 'selectFaculty',
    value: function selectFaculty(_ref) {
      var faculty = _ref.faculty;

      this.state.preference = { id: this.state.preference.id };
      this.state.preference.isLoading = false;
      this.state.preference.faculty = faculty;
    }
  }, {
    key: 'updatePreference',
    value: function updatePreference(_ref2) {
      var data = _ref2.data;

      this.state.preference = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, this.state.preference, data);
    }
  }, {
    key: 'resetAfterSuccess',
    value: function resetAfterSuccess() {
      this.state.preference = { faculty: {} };
    }
  }, {
    key: 'tooglePreferenceEdit',
    value: function tooglePreferenceEdit(_ref3) {
      var preference = _ref3.preference;

      __WEBPACK_IMPORTED_MODULE_8__router_index_js__["a" /* default */].push({ name: 'edit', params: { id: preference.id } });
      this.state.preference = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, preference);
      this.state.isInEditMode = !this.state.isInEditMode;
    }
  }, {
    key: 'onGoBackFromEditMode',
    value: function onGoBackFromEditMode() {
      this.state.isInEditMode = false;
      __WEBPACK_IMPORTED_MODULE_8__router_index_js__["a" /* default */].go(-1);
    }
  }, {
    key: 'reduce',
    value: function reduce(action) {
      var _this2 = this;

      this.reduceMap(action, {
        FETCH_COURSES_SUCCESS: this.resetAfterSuccess,
        SELECT_FACULTY: this.selectFaculty,
        UPDATE_PREFERENCE: this.updatePreference,
        GO_NEXT: function GO_NEXT(_ref4) {
          var params = _ref4.params;
          return _this2.state.navigation.goNext(params);
        },
        GO_BACK: function GO_BACK() {
          return _this2.state.navigation.goBack();
        },
        ADD_PREFERENCE_SUCCESS: function ADD_PREFERENCE_SUCCESS() {
          _this2.reset();
        },
        TOOGLE_PREFERENCE_EDIT: this.tooglePreferenceEdit,
        GO_BACK_FROM_EDIT_MODE: this.onGoBackFromEditMode
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
        goNext: function goNext(params) {
          dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_6_flue_vue__["Action"]('GO_NEXT', { params: params }));
        },
        goBack: function goBack() {
          dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_6_flue_vue__["Action"]('GO_BACK'));
        },
        tooglePreferenceEdit: function tooglePreferenceEdit(preference) {
          dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_6_flue_vue__["Action"]('TOOGLE_PREFERENCE_EDIT', { preference: preference }));
        },
        goBackFromEditMode: function goBackFromEditMode() {
          dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_6_flue_vue__["Action"]('GO_BACK_FROM_EDIT_MODE'));
        }
      };
    }
  }]);

  return PreferenceStore;
}(__WEBPACK_IMPORTED_MODULE_6_flue_vue__["Store"]);

var preferenceStore = new PreferenceStore();

/* harmony default export */ __webpack_exports__["a"] = (preferenceStore);

/***/ }),
/* 205 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_js__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__router_index_js__ = __webpack_require__(28);










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
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_axios__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__router_index_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_flue_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_flue_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_flue_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__api_js__ = __webpack_require__(29);














var UserStore = function (_Store) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(UserStore, _Store);

  function UserStore() {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, UserStore);

    var _this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (UserStore.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(UserStore)).call(this));

    _this.state.currentPreference = {};
    _this.state.showConfirmationModal = false;
    _this.state.user = { id: null, preferences: { data: [], loading: false }, color: null };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(UserStore, [{
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
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default()(this.state.user.preferences.data), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var pref = _step.value;

          if (pref.id == preference.id) pref = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(pref, preference);
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

      __WEBPACK_IMPORTED_MODULE_9__router_index_js__["a" /* default */].push({ name: 'home', params: { userId: this.state.user.id } });
    }
  }, {
    key: 'addPreferenceSuccess',
    value: function addPreferenceSuccess(_ref4) {
      var preference = _ref4.preference;

      this.state.showConfirmationModal = false;
      this.state.user.preferences.data.unshift(preference);
      __WEBPACK_IMPORTED_MODULE_9__router_index_js__["a" /* default */].push({ name: 'home', params: { userId: this.state.user.id } });
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
        UPDATE_USER_PREFERENCE_SUCCESS: this.updatePreferenceSuccess,
        ADD_PREFERENCE_SUCCESS: this.addPreferenceSuccess,
        REMOVE_PREFERENCE_SUCCESS: this.removePreferenceSuccess,
        GET_ME_SUCCESS: this.onGetMeSuccess
      });
    }
  }, {
    key: 'actions',
    value: function actions(dispatcher, ctx) {
      return {
        getMe: function getMe(email) {
          __WEBPACK_IMPORTED_MODULE_11__api_js__["a" /* default */].user.getMe(email).then(function (_ref6) {
            var data = _ref6.data;

            dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_10_flue_vue__["Action"]("GET_ME_SUCCESS", { data: data }));
          }).catch(function (err) {});
        },
        getMeById: function getMeById(userId) {
          __WEBPACK_IMPORTED_MODULE_11__api_js__["a" /* default */].user.getMeById(userId).then(function (_ref7) {
            var data = _ref7.data;

            dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_10_flue_vue__["Action"]("GET_ME_SUCCESS", { data: data }));
          }).catch(function (err) {});
        },
        fetchUserPreferences: function fetchUserPreferences() {
          dispatcher.dispatch({ type: "FETCH_USER_PREFERENCE_LOADING" });
          __WEBPACK_IMPORTED_MODULE_11__api_js__["a" /* default */].user.fetchUserPreferences(ctx.state.user.id).then(function (_ref8) {
            var data = _ref8.data;

            dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_10_flue_vue__["Action"]("FETCH_USER_PREFERENCE_SUCCESS", { preferences: data }));
          }).catch(function (err) {
            return dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_10_flue_vue__["Action"]("FETCH_USER_PREFERENCE_FAILURE", err));
          });
        },
        updateUserPreference: function updateUserPreference(preference) {
          dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_10_flue_vue__["Action"]("UPDATE_PREFERENCE_LOADING"));
          __WEBPACK_IMPORTED_MODULE_11__api_js__["a" /* default */].preference.updatePreference(preference).then(function (_ref9) {
            var data = _ref9.data;

            dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_10_flue_vue__["Action"]("UPDATE_USER_PREFERENCE_SUCCESS", { preference: data }));
          }).catch(function (_ref10) {
            var response = _ref10.response;

            var err = response.data;
            dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_10_flue_vue__["Action"]("UPDATE_PREFERENCE_FAILURE", { err: err }));
          });
        },
        addPreference: function addPreference(newPreference) {
          dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_10_flue_vue__["Action"]("ADD_PREFERENCE_LOADING"));
          __WEBPACK_IMPORTED_MODULE_11__api_js__["a" /* default */].preference.addPreference(newPreference).then(function (_ref11) {
            var data = _ref11.data;

            dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_10_flue_vue__["Action"]("ADD_PREFERENCE_SUCCESS", { preference: data }));
          }).catch(function (_ref12) {
            var response = _ref12.response;

            var err = response.data;
            dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_10_flue_vue__["Action"]("ADD_PREFERENCE_FAILURE", { err: err }));
          });
        },
        deletePreference: function deletePreference(preference) {
          __WEBPACK_IMPORTED_MODULE_11__api_js__["a" /* default */].preference.deletePreference(preference.id, ctx.state.user.id).then(function (_ref13) {
            var data = _ref13.data;
            return dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_10_flue_vue__["Action"]("REMOVE_PREFERENCE_SUCCESS", { preference: preference }));
          });
        }
      };
    }
  }]);

  return UserStore;
}(__WEBPACK_IMPORTED_MODULE_10_flue_vue__["Store"]);

var userStore = new UserStore();
/* harmony default export */ __webpack_exports__["a"] = (userStore);

/***/ }),
/* 207 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__api_js__ = __webpack_require__(29);









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
/* 208 */,
/* 209 */,
/* 210 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(502)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(319),
  /* template */
  __webpack_require__(474),
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
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_CustomizationApp_Resource_vue__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_CustomizationApp_Resource_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_CustomizationApp_Resource_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuetify__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuetify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vuetify__);




window.jQuery = window.$ = __webpack_require__(23);



__WEBPACK_IMPORTED_MODULE_1_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2_vuetify___default.a);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app'
});

/***/ }),
/* 320 */
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
/* 321 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PreferenceConfirmationModal_vue__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PreferenceConfirmationModal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__PreferenceConfirmationModal_vue__);



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CustomizationApp",
  components: {
    PreferenceConfirmationModal: __WEBPACK_IMPORTED_MODULE_0__PreferenceConfirmationModal_vue___default.a
  },
  mounted: function mounted() {
    console.log(this.$route.params);
    this.$store.actions.getMeById(this.$route.params.userId);
    this.$store.actions.fetchFaculties();
    this.$store.actions.fetchYears();
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UserPreferenceDummy_vue__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UserPreferenceDummy_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__UserPreferenceDummy_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Preference_vue__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Preference_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Preference_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PreferenceDeleteConfirmationModal_vue__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PreferenceDeleteConfirmationModal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__PreferenceDeleteConfirmationModal_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__HomeWrapper_vue__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__HomeWrapper_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__HomeWrapper_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SelectorWrapper_vue__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SelectorWrapper_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__SelectorWrapper_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ResourceTransitionWrapper_vue__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ResourceTransitionWrapper_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__ResourceTransitionWrapper_vue__);









/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CustomizationAppHome",
  components: {
    UserPreferenceDummy: __WEBPACK_IMPORTED_MODULE_0__UserPreferenceDummy_vue___default.a,
    Preference: __WEBPACK_IMPORTED_MODULE_1__Preference_vue___default.a,
    PreferenceDeleteConfirmationModal: __WEBPACK_IMPORTED_MODULE_2__PreferenceDeleteConfirmationModal_vue___default.a,
    HomeWrapper: __WEBPACK_IMPORTED_MODULE_3__HomeWrapper_vue___default.a,
    SelectorWrapper: __WEBPACK_IMPORTED_MODULE_4__SelectorWrapper_vue___default.a,
    ResourceTransitionWrapper: __WEBPACK_IMPORTED_MODULE_5__ResourceTransitionWrapper_vue___default.a
  },
  watch: {
    '$route': function $route(to, from) {
      if (to.name == 'home') this.$store.state.isInEditMode = false;
    }
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SelectorWrapper_vue__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SelectorWrapper_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__SelectorWrapper_vue__);



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "HomeWrapper"
});

/***/ }),
/* 324 */
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
/* 325 */
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
/* 326 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Preference_vue__ = __webpack_require__(58);
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
/* 327 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Preference_vue__ = __webpack_require__(58);
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
/* 328 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "",
  data: function data() {
    return {};
  },
  methods: {
    goBack: function goBack() {
      this.$store.actions.goBackFromEditMode();
      this.$store.state.preference = this.$store.state.preferenceBackUp;
      this.$router.go(-1);
    }
  }
});

/***/ }),
/* 329 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Navigation_vue__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Navigation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Navigation_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SelectorWrapper_vue__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SelectorWrapper_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__SelectorWrapper_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Resource_vue__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Resource_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Resource_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ResourceTransitionWrapper_vue__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ResourceTransitionWrapper_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ResourceTransitionWrapper_vue__);







/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PreferenceSelector",
  components: {
    Navigation: __WEBPACK_IMPORTED_MODULE_0__Navigation_vue___default.a,
    SelectorWrapper: __WEBPACK_IMPORTED_MODULE_1__SelectorWrapper_vue___default.a,
    Resource: __WEBPACK_IMPORTED_MODULE_2__Resource_vue___default.a,
    ResourceTransitionWrapper: __WEBPACK_IMPORTED_MODULE_3__ResourceTransitionWrapper_vue___default.a
  },
  methods: {
    goNext: function goNext(stuff) {
      this.$store.actions.selectFaculty(stuff);
      if (this.$store.state.isInEditMode) this.$router.go(-1);else {
        this.$router.push({
          name: 'study',
          params: {
            facultyId: stuff.id
          }
        });
      }
    }
  }
});

/***/ }),
/* 330 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Resource_vue__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Resource_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Resource_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Navigation_vue__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Navigation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Navigation_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PreferenceSummary_vue__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PreferenceSummary_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__PreferenceSummary_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SelectorWrapper_vue__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SelectorWrapper_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__SelectorWrapper_vue__);







/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PreferenceSelectorStudyApp",
  components: {
    Navigation: __WEBPACK_IMPORTED_MODULE_1__Navigation_vue___default.a,
    PreferenceSummary: __WEBPACK_IMPORTED_MODULE_2__PreferenceSummary_vue___default.a,
    SelectorWrapper: __WEBPACK_IMPORTED_MODULE_3__SelectorWrapper_vue___default.a,
    Resource: __WEBPACK_IMPORTED_MODULE_0__Resource_vue___default.a
  },
  data: function data() {
    return {};
  },
  methods: {
    toogle: function toogle(type) {
      return type == this.$store.state.preference.type;
    },
    goNext: function goNext(data) {
      if (this.$store.state.isInEditMode) {
        if (data.type.type != this.$store.state.preference.type.type) this.$store.state.preference.studyType = {};
        this.$router.go(-1);
      } else {
        this.$router.push({
          name: 'year',
          params: this.$route.params
        });
      }
      this.$store.actions.updatePreference(data);
    }
  }
});

/***/ }),
/* 331 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Navigation_vue__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Navigation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Navigation_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SelectorWrapper_vue__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SelectorWrapper_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__SelectorWrapper_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Resource_vue__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Resource_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Resource_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ResourceTransitionWrapper_vue__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ResourceTransitionWrapper_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ResourceTransitionWrapper_vue__);







/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PreferenceSelectorStudyType",
  components: {
    Navigation: __WEBPACK_IMPORTED_MODULE_0__Navigation_vue___default.a,
    SelectorWrapper: __WEBPACK_IMPORTED_MODULE_1__SelectorWrapper_vue___default.a,
    Resource: __WEBPACK_IMPORTED_MODULE_2__Resource_vue___default.a,
    ResourceTransitionWrapper: __WEBPACK_IMPORTED_MODULE_3__ResourceTransitionWrapper_vue___default.a
  },
  data: function data() {
    return {};
  },
  methods: {
    toogle: function toogle(studyType) {
      if (!this.$store.state.preference.studyType) return false;
      return studyType.id == this.$store.state.preference.studyType.id;
    },
    next: function next(stuff) {
      this.$store.actions.updatePreference(stuff, false);
      if (this.$store.state.isInEditMode) this.$router.go(-1);else {
        this.$store.state.showConfirmationModal = true;
      }
    },
    parseName: function parseName(name) {
      var words = name.split(' ');
      var parsedName = name;
      var search = function search(key) {
        return words.slice(words.indexOf('in') + 1).join(' ');
      };
      switch (words[0]) {
        case "Master":
          parsedName = search('in');
          break;
        case "Bachelor":
          parsedName = search('of');
        default:

      }
      return parsedName;
    }
  }
});

/***/ }),
/* 332 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Navigation_vue__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Navigation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Navigation_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PreferenceSummary_vue__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PreferenceSummary_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__PreferenceSummary_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SelectorWrapper_vue__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SelectorWrapper_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__SelectorWrapper_vue__);






/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PreferenceSelectorYear",
  components: {
    Navigation: __WEBPACK_IMPORTED_MODULE_0__Navigation_vue___default.a,
    PreferenceSummary: __WEBPACK_IMPORTED_MODULE_1__PreferenceSummary_vue___default.a,
    SelectorWrapper: __WEBPACK_IMPORTED_MODULE_2__SelectorWrapper_vue___default.a
  },
  data: function data() {
    return {};
  },
  methods: {
    toogle: function toogle(yearNumber) {
      if (!this.$store.state.preference.year) return false;
      return yearNumber == this.$store.state.preference.year.yearNumber;
    },
    goNext: function goNext(stuff) {
      this.$store.actions.updatePreference(stuff);
      if (this.$store.state.isInEditMode) this.$router.go(-1);else {
        this.$router.push({
          name: 'studyType',
          params: this.$route.params
        });
      }
    }
  }
});

/***/ }),
/* 333 */
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
/* 334 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_Vue__ = __webpack_require__(211);




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "",
  props: ['toogle'],
  data: function data() {
    return {};
  }
});

/***/ }),
/* 335 */
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
/* 336 */
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
/* 337 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "UserPreferenceDummy"
});

/***/ }),
/* 338 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PreferenceSelector_PreferenceSelector_vue__ = __webpack_require__(198);
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
/* 339 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fullcalendar__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fullcalendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fullcalendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_flue_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_flue_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_flue_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Course_Course_vue__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Course_Course_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Course_Course_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__CourseSelector_CourseSelector_vue__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__CourseSelector_CourseSelector_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__CourseSelector_CourseSelector_vue__);











/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Display',
  components: {
    CourseSelector: __WEBPACK_IMPORTED_MODULE_6__CourseSelector_CourseSelector_vue___default.a,
    Course: __WEBPACK_IMPORTED_MODULE_5__Course_Course_vue___default.a
  },
  mounted: function mounted() {
    var _this = this;

    this.$store.state.navigation.BASE_URL = this.$route.path;
    this.$store.state.navigation._urls = ['studyDisplay', 'yearDisplay', 'studyTypeDisplay'];
    this.$store.state.isInDisplay = true;
    __WEBPACK_IMPORTED_MODULE_3_jquery___default()('body').click(function () {
      _this.$store.dispatcher.dispatch(new __WEBPACK_IMPORTED_MODULE_4_flue_vue__["Action"]("USER_INTERACTION"));
    });

    var displayId = this.$route.params.id;
    var appId = 1;
    this.$store.actions.fetchDisplay(displayId);
  }
});

/***/ }),
/* 340 */
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
/* 341 */
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
  },

  methods: {
    next: function next(faculty) {
      this.$store.actions.selectFaculty(faculty, true);
      this.$router.push({
        name: "studyDisplay",
        params: {
          facultyId: faculty.id
        }
      });
    }
  }
});

/***/ }),
/* 342 */
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
/* 343 */
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
    },
    next: function next(type) {
      this.$store.actions.updatePreference({
        type: type
      });
      this.$router.push({
        name: 'yearDisplay',
        params: this.$route.params
      });
    }
  }
});

/***/ }),
/* 344 */
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
    },
    next: function next(studyType) {
      this.$store.actions.updatePreference({
        studyType: studyType
      });

      this.$store.actions.fetchCourses(this.$store.PreferenceStore.makeQueryFromPreference(this.$store.state.preference));
    }
  }
});

/***/ }),
/* 345 */
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
    },
    next: function next(year) {
      this.$store.actions.updatePreference({
        year: year
      });
      this.$router.push({
        name: 'studyTypeDisplay',
        params: this.$route.params
      });
    }
  }
});

/***/ }),
/* 346 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_flue_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_flue_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_flue_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uikit__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uikit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_uikit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_uikit_dist_js_uikit_icons__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_uikit_dist_js_uikit_icons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_uikit_dist_js_uikit_icons__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_animated_vue__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stores_FacultyStore_js__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__stores_CourseStore_js__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__stores_YearStore_js__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__stores_PreferenceStore_js__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__stores_DisplayStore_js__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__stores_ScheduleStore_js__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__stores_UserStore_js__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__socket_js__ = __webpack_require__(200);










__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_6_animated_vue__["a" /* default */]);

window.UIkit = __WEBPACK_IMPORTED_MODULE_4_uikit___default.a;
__WEBPACK_IMPORTED_MODULE_4_uikit___default.a.use(__WEBPACK_IMPORTED_MODULE_5_uikit_dist_js_uikit_icons___default.a);

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_3_flue_vue__["flueVue"]);











window.jQuery = window.$ = __webpack_require__(23);

__WEBPACK_IMPORTED_MODULE_3_flue_vue__["SuperStore"].addStores([__WEBPACK_IMPORTED_MODULE_7__stores_FacultyStore_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_8__stores_CourseStore_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_9__stores_YearStore_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_10__stores_PreferenceStore_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_11__stores_DisplayStore_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_12__stores_ScheduleStore_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_13__stores_UserStore_js__["a" /* default */]]);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;

new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ }),
/* 347 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  selectRandomItemFromArray: function selectRandomItemFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
});

/***/ }),
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
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n\n/*!\n * animate.css -http://daneden.me/animate\n * Version - 3.5.1\n * Licensed under the MIT license - http://opensource.org/licenses/MIT\n *\n * Copyright (c) 2016 Daniel Eden\n */\n\n.animated {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n.animated.infinite {\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n}\n\n.animated.hinge {\n  -webkit-animation-duration: 2s;\n  animation-duration: 2s;\n}\n\n.animated.flipOutX,\n.animated.flipOutY,\n.animated.bounceIn,\n.animated.bounceOut {\n  -webkit-animation-duration: .75s;\n  animation-duration: .75s;\n}\n\n@-webkit-keyframes bounce {\n  from, 20%, 53%, 80%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    -webkit-transform: translate3d(0,0,0);\n    transform: translate3d(0,0,0);\n  }\n\n  40%, 43% {\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    -webkit-transform: translate3d(0, -30px, 0);\n    transform: translate3d(0, -30px, 0);\n  }\n\n  70% {\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    -webkit-transform: translate3d(0, -15px, 0);\n    transform: translate3d(0, -15px, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0,-4px,0);\n    transform: translate3d(0,-4px,0);\n  }\n}\n\n@keyframes bounce {\n  from, 20%, 53%, 80%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    -webkit-transform: translate3d(0,0,0);\n    transform: translate3d(0,0,0);\n  }\n\n  40%, 43% {\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    -webkit-transform: translate3d(0, -30px, 0);\n    transform: translate3d(0, -30px, 0);\n  }\n\n  70% {\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    -webkit-transform: translate3d(0, -15px, 0);\n    transform: translate3d(0, -15px, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0,-4px,0);\n    transform: translate3d(0,-4px,0);\n  }\n}\n\n.bounce {\n  -webkit-animation-name: bounce;\n  animation-name: bounce;\n  -webkit-transform-origin: center bottom;\n  transform-origin: center bottom;\n}\n\n@-webkit-keyframes flash {\n  from, 50%, to {\n    opacity: 1;\n  }\n\n  25%, 75% {\n    opacity: 0;\n  }\n}\n\n@keyframes flash {\n  from, 50%, to {\n    opacity: 1;\n  }\n\n  25%, 75% {\n    opacity: 0;\n  }\n}\n\n.flash {\n  -webkit-animation-name: flash;\n  animation-name: flash;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@-webkit-keyframes pulse {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  50% {\n    -webkit-transform: scale3d(1.05, 1.05, 1.05);\n    transform: scale3d(1.05, 1.05, 1.05);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes pulse {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  50% {\n    -webkit-transform: scale3d(1.05, 1.05, 1.05);\n    transform: scale3d(1.05, 1.05, 1.05);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.pulse {\n  -webkit-animation-name: pulse;\n  animation-name: pulse;\n}\n\n@-webkit-keyframes rubberBand {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  30% {\n    -webkit-transform: scale3d(1.25, 0.75, 1);\n    transform: scale3d(1.25, 0.75, 1);\n  }\n\n  40% {\n    -webkit-transform: scale3d(0.75, 1.25, 1);\n    transform: scale3d(0.75, 1.25, 1);\n  }\n\n  50% {\n    -webkit-transform: scale3d(1.15, 0.85, 1);\n    transform: scale3d(1.15, 0.85, 1);\n  }\n\n  65% {\n    -webkit-transform: scale3d(.95, 1.05, 1);\n    transform: scale3d(.95, 1.05, 1);\n  }\n\n  75% {\n    -webkit-transform: scale3d(1.05, .95, 1);\n    transform: scale3d(1.05, .95, 1);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes rubberBand {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  30% {\n    -webkit-transform: scale3d(1.25, 0.75, 1);\n    transform: scale3d(1.25, 0.75, 1);\n  }\n\n  40% {\n    -webkit-transform: scale3d(0.75, 1.25, 1);\n    transform: scale3d(0.75, 1.25, 1);\n  }\n\n  50% {\n    -webkit-transform: scale3d(1.15, 0.85, 1);\n    transform: scale3d(1.15, 0.85, 1);\n  }\n\n  65% {\n    -webkit-transform: scale3d(.95, 1.05, 1);\n    transform: scale3d(.95, 1.05, 1);\n  }\n\n  75% {\n    -webkit-transform: scale3d(1.05, .95, 1);\n    transform: scale3d(1.05, .95, 1);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.rubberBand {\n  -webkit-animation-name: rubberBand;\n  animation-name: rubberBand;\n}\n\n@-webkit-keyframes shake {\n  from, to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  10%, 30%, 50%, 70%, 90% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  20%, 40%, 60%, 80% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0);\n  }\n}\n\n@keyframes shake {\n  from, to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  10%, 30%, 50%, 70%, 90% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  20%, 40%, 60%, 80% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0);\n  }\n}\n\n.shake {\n  -webkit-animation-name: shake;\n  animation-name: shake;\n}\n\n@-webkit-keyframes headShake {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  6.5% {\n    -webkit-transform: translateX(-6px) rotateY(-9deg);\n    transform: translateX(-6px) rotateY(-9deg);\n  }\n\n  18.5% {\n    -webkit-transform: translateX(5px) rotateY(7deg);\n    transform: translateX(5px) rotateY(7deg);\n  }\n\n  31.5% {\n    -webkit-transform: translateX(-3px) rotateY(-5deg);\n    transform: translateX(-3px) rotateY(-5deg);\n  }\n\n  43.5% {\n    -webkit-transform: translateX(2px) rotateY(3deg);\n    transform: translateX(2px) rotateY(3deg);\n  }\n\n  50% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n@keyframes headShake {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  6.5% {\n    -webkit-transform: translateX(-6px) rotateY(-9deg);\n    transform: translateX(-6px) rotateY(-9deg);\n  }\n\n  18.5% {\n    -webkit-transform: translateX(5px) rotateY(7deg);\n    transform: translateX(5px) rotateY(7deg);\n  }\n\n  31.5% {\n    -webkit-transform: translateX(-3px) rotateY(-5deg);\n    transform: translateX(-3px) rotateY(-5deg);\n  }\n\n  43.5% {\n    -webkit-transform: translateX(2px) rotateY(3deg);\n    transform: translateX(2px) rotateY(3deg);\n  }\n\n  50% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n.headShake {\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-name: headShake;\n  animation-name: headShake;\n}\n\n@-webkit-keyframes swing {\n  20% {\n    -webkit-transform: rotate3d(0, 0, 1, 15deg);\n    transform: rotate3d(0, 0, 1, 15deg);\n  }\n\n  40% {\n    -webkit-transform: rotate3d(0, 0, 1, -10deg);\n    transform: rotate3d(0, 0, 1, -10deg);\n  }\n\n  60% {\n    -webkit-transform: rotate3d(0, 0, 1, 5deg);\n    transform: rotate3d(0, 0, 1, 5deg);\n  }\n\n  80% {\n    -webkit-transform: rotate3d(0, 0, 1, -5deg);\n    transform: rotate3d(0, 0, 1, -5deg);\n  }\n\n  to {\n    -webkit-transform: rotate3d(0, 0, 1, 0deg);\n    transform: rotate3d(0, 0, 1, 0deg);\n  }\n}\n\n@keyframes swing {\n  20% {\n    -webkit-transform: rotate3d(0, 0, 1, 15deg);\n    transform: rotate3d(0, 0, 1, 15deg);\n  }\n\n  40% {\n    -webkit-transform: rotate3d(0, 0, 1, -10deg);\n    transform: rotate3d(0, 0, 1, -10deg);\n  }\n\n  60% {\n    -webkit-transform: rotate3d(0, 0, 1, 5deg);\n    transform: rotate3d(0, 0, 1, 5deg);\n  }\n\n  80% {\n    -webkit-transform: rotate3d(0, 0, 1, -5deg);\n    transform: rotate3d(0, 0, 1, -5deg);\n  }\n\n  to {\n    -webkit-transform: rotate3d(0, 0, 1, 0deg);\n    transform: rotate3d(0, 0, 1, 0deg);\n  }\n}\n\n.swing {\n  -webkit-transform-origin: top center;\n  transform-origin: top center;\n  -webkit-animation-name: swing;\n  animation-name: swing;\n}\n\n@-webkit-keyframes tada {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  10%, 20% {\n    -webkit-transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);\n  }\n\n  30%, 50%, 70%, 90% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n  }\n\n  40%, 60%, 80% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes tada {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  10%, 20% {\n    -webkit-transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);\n  }\n\n  30%, 50%, 70%, 90% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n  }\n\n  40%, 60%, 80% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.tada {\n  -webkit-animation-name: tada;\n  animation-name: tada;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@-webkit-keyframes wobble {\n  from {\n    -webkit-transform: none;\n    transform: none;\n  }\n\n  15% {\n    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n  }\n\n  30% {\n    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n  }\n\n  45% {\n    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n  }\n\n  60% {\n    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n  }\n\n  75% {\n    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes wobble {\n  from {\n    -webkit-transform: none;\n    transform: none;\n  }\n\n  15% {\n    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n  }\n\n  30% {\n    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n  }\n\n  45% {\n    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n  }\n\n  60% {\n    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n  }\n\n  75% {\n    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.wobble {\n  -webkit-animation-name: wobble;\n  animation-name: wobble;\n}\n\n@-webkit-keyframes jello {\n  from, 11.1%, to {\n    -webkit-transform: none;\n    transform: none;\n  }\n\n  22.2% {\n    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);\n    transform: skewX(-12.5deg) skewY(-12.5deg);\n  }\n\n  33.3% {\n    -webkit-transform: skewX(6.25deg) skewY(6.25deg);\n    transform: skewX(6.25deg) skewY(6.25deg);\n  }\n\n  44.4% {\n    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);\n    transform: skewX(-3.125deg) skewY(-3.125deg);\n  }\n\n  55.5% {\n    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);\n    transform: skewX(1.5625deg) skewY(1.5625deg);\n  }\n\n  66.6% {\n    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);\n    transform: skewX(-0.78125deg) skewY(-0.78125deg);\n  }\n\n  77.7% {\n    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);\n    transform: skewX(0.390625deg) skewY(0.390625deg);\n  }\n\n  88.8% {\n    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n  }\n}\n\n@keyframes jello {\n  from, 11.1%, to {\n    -webkit-transform: none;\n    transform: none;\n  }\n\n  22.2% {\n    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);\n    transform: skewX(-12.5deg) skewY(-12.5deg);\n  }\n\n  33.3% {\n    -webkit-transform: skewX(6.25deg) skewY(6.25deg);\n    transform: skewX(6.25deg) skewY(6.25deg);\n  }\n\n  44.4% {\n    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);\n    transform: skewX(-3.125deg) skewY(-3.125deg);\n  }\n\n  55.5% {\n    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);\n    transform: skewX(1.5625deg) skewY(1.5625deg);\n  }\n\n  66.6% {\n    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);\n    transform: skewX(-0.78125deg) skewY(-0.78125deg);\n  }\n\n  77.7% {\n    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);\n    transform: skewX(0.390625deg) skewY(0.390625deg);\n  }\n\n  88.8% {\n    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n  }\n}\n\n.jello {\n  -webkit-animation-name: jello;\n  animation-name: jello;\n  -webkit-transform-origin: center;\n  transform-origin: center;\n}\n\n@-webkit-keyframes bounceIn {\n  from, 20%, 40%, 60%, 80%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n\n  20% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  40% {\n    -webkit-transform: scale3d(.9, .9, .9);\n    transform: scale3d(.9, .9, .9);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.03, 1.03, 1.03);\n    transform: scale3d(1.03, 1.03, 1.03);\n  }\n\n  80% {\n    -webkit-transform: scale3d(.97, .97, .97);\n    transform: scale3d(.97, .97, .97);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes bounceIn {\n  from, 20%, 40%, 60%, 80%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n\n  20% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  40% {\n    -webkit-transform: scale3d(.9, .9, .9);\n    transform: scale3d(.9, .9, .9);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.03, 1.03, 1.03);\n    transform: scale3d(1.03, 1.03, 1.03);\n  }\n\n  80% {\n    -webkit-transform: scale3d(.97, .97, .97);\n    transform: scale3d(.97, .97, .97);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.bounceIn {\n  -webkit-animation-name: bounceIn;\n  animation-name: bounceIn;\n}\n\n@-webkit-keyframes bounceInDown {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -3000px, 0);\n    transform: translate3d(0, -3000px, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 25px, 0);\n    transform: translate3d(0, 25px, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0, 5px, 0);\n    transform: translate3d(0, 5px, 0);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes bounceInDown {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -3000px, 0);\n    transform: translate3d(0, -3000px, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 25px, 0);\n    transform: translate3d(0, 25px, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0, 5px, 0);\n    transform: translate3d(0, 5px, 0);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.bounceInDown {\n  -webkit-animation-name: bounceInDown;\n  animation-name: bounceInDown;\n}\n\n@-webkit-keyframes bounceInLeft {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-3000px, 0, 0);\n    transform: translate3d(-3000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(25px, 0, 0);\n    transform: translate3d(25px, 0, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(5px, 0, 0);\n    transform: translate3d(5px, 0, 0);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes bounceInLeft {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-3000px, 0, 0);\n    transform: translate3d(-3000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(25px, 0, 0);\n    transform: translate3d(25px, 0, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(5px, 0, 0);\n    transform: translate3d(5px, 0, 0);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.bounceInLeft {\n  -webkit-animation-name: bounceInLeft;\n  animation-name: bounceInLeft;\n}\n\n@-webkit-keyframes bounceInRight {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(3000px, 0, 0);\n    transform: translate3d(3000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(-25px, 0, 0);\n    transform: translate3d(-25px, 0, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(-5px, 0, 0);\n    transform: translate3d(-5px, 0, 0);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes bounceInRight {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(3000px, 0, 0);\n    transform: translate3d(3000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(-25px, 0, 0);\n    transform: translate3d(-25px, 0, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(-5px, 0, 0);\n    transform: translate3d(-5px, 0, 0);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.bounceInRight {\n  -webkit-animation-name: bounceInRight;\n  animation-name: bounceInRight;\n}\n\n@-webkit-keyframes bounceInUp {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 3000px, 0);\n    transform: translate3d(0, 3000px, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0, -5px, 0);\n    transform: translate3d(0, -5px, 0);\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes bounceInUp {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 3000px, 0);\n    transform: translate3d(0, 3000px, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0, -5px, 0);\n    transform: translate3d(0, -5px, 0);\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.bounceInUp {\n  -webkit-animation-name: bounceInUp;\n  animation-name: bounceInUp;\n}\n\n@-webkit-keyframes bounceOut {\n  20% {\n    -webkit-transform: scale3d(.9, .9, .9);\n    transform: scale3d(.9, .9, .9);\n  }\n\n  50%, 55% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n}\n\n@keyframes bounceOut {\n  20% {\n    -webkit-transform: scale3d(.9, .9, .9);\n    transform: scale3d(.9, .9, .9);\n  }\n\n  50%, 55% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n}\n\n.bounceOut {\n  -webkit-animation-name: bounceOut;\n  animation-name: bounceOut;\n}\n\n@-webkit-keyframes bounceOutDown {\n  20% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0);\n  }\n\n  40%, 45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n\n@keyframes bounceOutDown {\n  20% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0);\n  }\n\n  40%, 45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n\n.bounceOutDown {\n  -webkit-animation-name: bounceOutDown;\n  animation-name: bounceOutDown;\n}\n\n@-webkit-keyframes bounceOutLeft {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(20px, 0, 0);\n    transform: translate3d(20px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n\n@keyframes bounceOutLeft {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(20px, 0, 0);\n    transform: translate3d(20px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n\n.bounceOutLeft {\n  -webkit-animation-name: bounceOutLeft;\n  animation-name: bounceOutLeft;\n}\n\n@-webkit-keyframes bounceOutRight {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(-20px, 0, 0);\n    transform: translate3d(-20px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n\n@keyframes bounceOutRight {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(-20px, 0, 0);\n    transform: translate3d(-20px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n\n.bounceOutRight {\n  -webkit-animation-name: bounceOutRight;\n  animation-name: bounceOutRight;\n}\n\n@-webkit-keyframes bounceOutUp {\n  20% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0);\n  }\n\n  40%, 45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 20px, 0);\n    transform: translate3d(0, 20px, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n\n@keyframes bounceOutUp {\n  20% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0);\n  }\n\n  40%, 45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 20px, 0);\n    transform: translate3d(0, 20px, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n\n.bounceOutUp {\n  -webkit-animation-name: bounceOutUp;\n  animation-name: bounceOutUp;\n}\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n.fadeIn {\n  -webkit-animation-name: fadeIn;\n  animation-name: fadeIn;\n}\n\n@-webkit-keyframes fadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n}\n\n@-webkit-keyframes fadeInDownBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInDownBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInDownBig {\n  -webkit-animation-name: fadeInDownBig;\n  animation-name: fadeInDownBig;\n}\n\n@-webkit-keyframes fadeInLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInLeft {\n  -webkit-animation-name: fadeInLeft;\n  animation-name: fadeInLeft;\n}\n\n@-webkit-keyframes fadeInLeftBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInLeftBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInLeftBig {\n  -webkit-animation-name: fadeInLeftBig;\n  animation-name: fadeInLeftBig;\n}\n\n@-webkit-keyframes fadeInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInRight {\n  -webkit-animation-name: fadeInRight;\n  animation-name: fadeInRight;\n}\n\n@-webkit-keyframes fadeInRightBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInRightBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInRightBig {\n  -webkit-animation-name: fadeInRightBig;\n  animation-name: fadeInRightBig;\n}\n\n@-webkit-keyframes fadeInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInUp {\n  -webkit-animation-name: fadeInUp;\n  animation-name: fadeInUp;\n}\n\n@-webkit-keyframes fadeInUpBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInUpBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInUpBig {\n  -webkit-animation-name: fadeInUpBig;\n  animation-name: fadeInUpBig;\n}\n\n@-webkit-keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n.fadeOut {\n  -webkit-animation-name: fadeOut;\n  animation-name: fadeOut;\n}\n\n@-webkit-keyframes fadeOutDown {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n}\n\n@keyframes fadeOutDown {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n}\n\n.fadeOutDown {\n  -webkit-animation-name: fadeOutDown;\n  animation-name: fadeOutDown;\n}\n\n@-webkit-keyframes fadeOutDownBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n\n@keyframes fadeOutDownBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n\n.fadeOutDownBig {\n  -webkit-animation-name: fadeOutDownBig;\n  animation-name: fadeOutDownBig;\n}\n\n@-webkit-keyframes fadeOutLeft {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n@keyframes fadeOutLeft {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n.fadeOutLeft {\n  -webkit-animation-name: fadeOutLeft;\n  animation-name: fadeOutLeft;\n}\n\n@-webkit-keyframes fadeOutLeftBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n\n@keyframes fadeOutLeftBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n\n.fadeOutLeftBig {\n  -webkit-animation-name: fadeOutLeftBig;\n  animation-name: fadeOutLeftBig;\n}\n\n@-webkit-keyframes fadeOutRight {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n@keyframes fadeOutRight {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n.fadeOutRight {\n  -webkit-animation-name: fadeOutRight;\n  animation-name: fadeOutRight;\n}\n\n@-webkit-keyframes fadeOutRightBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n\n@keyframes fadeOutRightBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n\n.fadeOutRightBig {\n  -webkit-animation-name: fadeOutRightBig;\n  animation-name: fadeOutRightBig;\n}\n\n@-webkit-keyframes fadeOutUp {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n}\n\n@keyframes fadeOutUp {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n}\n\n.fadeOutUp {\n  -webkit-animation-name: fadeOutUp;\n  animation-name: fadeOutUp;\n}\n\n@-webkit-keyframes fadeOutUpBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n\n@keyframes fadeOutUpBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n\n.fadeOutUpBig {\n  -webkit-animation-name: fadeOutUpBig;\n  animation-name: fadeOutUpBig;\n}\n\n@-webkit-keyframes flip {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n\n  50% {\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) scale3d(.95, .95, .95);\n    transform: perspective(400px) scale3d(.95, .95, .95);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n}\n\n@keyframes flip {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n\n  50% {\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) scale3d(.95, .95, .95);\n    transform: perspective(400px) scale3d(.95, .95, .95);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n}\n\n.animated.flip {\n  -webkit-backface-visibility: visible;\n  backface-visibility: visible;\n  -webkit-animation-name: flip;\n  animation-name: flip;\n}\n\n@-webkit-keyframes flipInX {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n  }\n\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n}\n\n@keyframes flipInX {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n  }\n\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n}\n\n.flipInX {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipInX;\n  animation-name: flipInX;\n}\n\n@-webkit-keyframes flipInY {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n  }\n\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n}\n\n@keyframes flipInY {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n  }\n\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n}\n\n.flipInY {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipInY;\n  animation-name: flipInY;\n}\n\n@-webkit-keyframes flipOutX {\n  from {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    opacity: 0;\n  }\n}\n\n@keyframes flipOutX {\n  from {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    opacity: 0;\n  }\n}\n\n.flipOutX {\n  -webkit-animation-name: flipOutX;\n  animation-name: flipOutX;\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n}\n\n@-webkit-keyframes flipOutY {\n  from {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    opacity: 0;\n  }\n}\n\n@keyframes flipOutY {\n  from {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    opacity: 0;\n  }\n}\n\n.flipOutY {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipOutY;\n  animation-name: flipOutY;\n}\n\n@-webkit-keyframes lightSpeedIn {\n  from {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);\n    transform: translate3d(100%, 0, 0) skewX(-30deg);\n    opacity: 0;\n  }\n\n  60% {\n    -webkit-transform: skewX(20deg);\n    transform: skewX(20deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: skewX(-5deg);\n    transform: skewX(-5deg);\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n@keyframes lightSpeedIn {\n  from {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);\n    transform: translate3d(100%, 0, 0) skewX(-30deg);\n    opacity: 0;\n  }\n\n  60% {\n    -webkit-transform: skewX(20deg);\n    transform: skewX(20deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: skewX(-5deg);\n    transform: skewX(-5deg);\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.lightSpeedIn {\n  -webkit-animation-name: lightSpeedIn;\n  animation-name: lightSpeedIn;\n  -webkit-animation-timing-function: ease-out;\n  animation-timing-function: ease-out;\n}\n\n@-webkit-keyframes lightSpeedOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);\n    transform: translate3d(100%, 0, 0) skewX(30deg);\n    opacity: 0;\n  }\n}\n\n@keyframes lightSpeedOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);\n    transform: translate3d(100%, 0, 0) skewX(30deg);\n    opacity: 0;\n  }\n}\n\n.lightSpeedOut {\n  -webkit-animation-name: lightSpeedOut;\n  animation-name: lightSpeedOut;\n  -webkit-animation-timing-function: ease-in;\n  animation-timing-function: ease-in;\n}\n\n@-webkit-keyframes rotateIn {\n  from {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, -200deg);\n    transform: rotate3d(0, 0, 1, -200deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n@keyframes rotateIn {\n  from {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, -200deg);\n    transform: rotate3d(0, 0, 1, -200deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateIn {\n  -webkit-animation-name: rotateIn;\n  animation-name: rotateIn;\n}\n\n@-webkit-keyframes rotateInDownLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n@keyframes rotateInDownLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateInDownLeft {\n  -webkit-animation-name: rotateInDownLeft;\n  animation-name: rotateInDownLeft;\n}\n\n@-webkit-keyframes rotateInDownRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n@keyframes rotateInDownRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateInDownRight {\n  -webkit-animation-name: rotateInDownRight;\n  animation-name: rotateInDownRight;\n}\n\n@-webkit-keyframes rotateInUpLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n@keyframes rotateInUpLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateInUpLeft {\n  -webkit-animation-name: rotateInUpLeft;\n  animation-name: rotateInUpLeft;\n}\n\n@-webkit-keyframes rotateInUpRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -90deg);\n    transform: rotate3d(0, 0, 1, -90deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n@keyframes rotateInUpRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -90deg);\n    transform: rotate3d(0, 0, 1, -90deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateInUpRight {\n  -webkit-animation-name: rotateInUpRight;\n  animation-name: rotateInUpRight;\n}\n\n@-webkit-keyframes rotateOut {\n  from {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, 200deg);\n    transform: rotate3d(0, 0, 1, 200deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOut {\n  from {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, 200deg);\n    transform: rotate3d(0, 0, 1, 200deg);\n    opacity: 0;\n  }\n}\n\n.rotateOut {\n  -webkit-animation-name: rotateOut;\n  animation-name: rotateOut;\n}\n\n@-webkit-keyframes rotateOutDownLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOutDownLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutDownLeft {\n  -webkit-animation-name: rotateOutDownLeft;\n  animation-name: rotateOutDownLeft;\n}\n\n@-webkit-keyframes rotateOutDownRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOutDownRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutDownRight {\n  -webkit-animation-name: rotateOutDownRight;\n  animation-name: rotateOutDownRight;\n}\n\n@-webkit-keyframes rotateOutUpLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOutUpLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutUpLeft {\n  -webkit-animation-name: rotateOutUpLeft;\n  animation-name: rotateOutUpLeft;\n}\n\n@-webkit-keyframes rotateOutUpRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 90deg);\n    transform: rotate3d(0, 0, 1, 90deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOutUpRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 90deg);\n    transform: rotate3d(0, 0, 1, 90deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutUpRight {\n  -webkit-animation-name: rotateOutUpRight;\n  animation-name: rotateOutUpRight;\n}\n\n@-webkit-keyframes hinge {\n  0% {\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  20%, 60% {\n    -webkit-transform: rotate3d(0, 0, 1, 80deg);\n    transform: rotate3d(0, 0, 1, 80deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  40%, 80% {\n    -webkit-transform: rotate3d(0, 0, 1, 60deg);\n    transform: rotate3d(0, 0, 1, 60deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 700px, 0);\n    transform: translate3d(0, 700px, 0);\n    opacity: 0;\n  }\n}\n\n@keyframes hinge {\n  0% {\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  20%, 60% {\n    -webkit-transform: rotate3d(0, 0, 1, 80deg);\n    transform: rotate3d(0, 0, 1, 80deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  40%, 80% {\n    -webkit-transform: rotate3d(0, 0, 1, 60deg);\n    transform: rotate3d(0, 0, 1, 60deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 700px, 0);\n    transform: translate3d(0, 700px, 0);\n    opacity: 0;\n  }\n}\n\n.hinge {\n  -webkit-animation-name: hinge;\n  animation-name: hinge;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@-webkit-keyframes rollIn {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes rollIn {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.rollIn {\n  -webkit-animation-name: rollIn;\n  animation-name: rollIn;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@-webkit-keyframes rollOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n  }\n}\n\n@keyframes rollOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n  }\n}\n\n.rollOut {\n  -webkit-animation-name: rollOut;\n  animation-name: rollOut;\n}\n\n@-webkit-keyframes zoomIn {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n\n  50% {\n    opacity: 1;\n  }\n}\n\n@keyframes zoomIn {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n\n  50% {\n    opacity: 1;\n  }\n}\n\n.zoomIn {\n  -webkit-animation-name: zoomIn;\n  animation-name: zoomIn;\n}\n\n@-webkit-keyframes zoomInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n@keyframes zoomInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomInDown {\n  -webkit-animation-name: zoomInDown;\n  animation-name: zoomInDown;\n}\n\n@-webkit-keyframes zoomInLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);\n    transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n@keyframes zoomInLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);\n    transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomInLeft {\n  -webkit-animation-name: zoomInLeft;\n  animation-name: zoomInLeft;\n}\n\n@-webkit-keyframes zoomInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);\n    transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n@keyframes zoomInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);\n    transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomInRight {\n  -webkit-animation-name: zoomInRight;\n  animation-name: zoomInRight;\n}\n\n@-webkit-keyframes zoomInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n@keyframes zoomInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomInUp {\n  -webkit-animation-name: zoomInUp;\n  animation-name: zoomInUp;\n}\n\n@-webkit-keyframes zoomOut {\n  from {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n@keyframes zoomOut {\n  from {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n.zoomOut {\n  -webkit-animation-name: zoomOut;\n  animation-name: zoomOut;\n}\n\n@-webkit-keyframes zoomOutDown {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n@keyframes zoomOutDown {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomOutDown {\n  -webkit-animation-name: zoomOutDown;\n  animation-name: zoomOutDown;\n}\n\n@-webkit-keyframes zoomOutLeft {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale(.1) translate3d(-2000px, 0, 0);\n    transform: scale(.1) translate3d(-2000px, 0, 0);\n    -webkit-transform-origin: left center;\n    transform-origin: left center;\n  }\n}\n\n@keyframes zoomOutLeft {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale(.1) translate3d(-2000px, 0, 0);\n    transform: scale(.1) translate3d(-2000px, 0, 0);\n    -webkit-transform-origin: left center;\n    transform-origin: left center;\n  }\n}\n\n.zoomOutLeft {\n  -webkit-animation-name: zoomOutLeft;\n  animation-name: zoomOutLeft;\n}\n\n@-webkit-keyframes zoomOutRight {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale(.1) translate3d(2000px, 0, 0);\n    transform: scale(.1) translate3d(2000px, 0, 0);\n    -webkit-transform-origin: right center;\n    transform-origin: right center;\n  }\n}\n\n@keyframes zoomOutRight {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale(.1) translate3d(2000px, 0, 0);\n    transform: scale(.1) translate3d(2000px, 0, 0);\n    -webkit-transform-origin: right center;\n    transform-origin: right center;\n  }\n}\n\n.zoomOutRight {\n  -webkit-animation-name: zoomOutRight;\n  animation-name: zoomOutRight;\n}\n\n@-webkit-keyframes zoomOutUp {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n@keyframes zoomOutUp {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomOutUp {\n  -webkit-animation-name: zoomOutUp;\n  animation-name: zoomOutUp;\n}\n\n@-webkit-keyframes slideInDown {\n  from {\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes slideInDown {\n  from {\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInDown {\n  -webkit-animation-name: slideInDown;\n  animation-name: slideInDown;\n}\n\n@-webkit-keyframes slideInLeft {\n  from {\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes slideInLeft {\n  from {\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInLeft {\n  -webkit-animation-name: slideInLeft;\n  animation-name: slideInLeft;\n}\n\n@-webkit-keyframes slideInRight {\n  from {\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes slideInRight {\n  from {\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInRight {\n  -webkit-animation-name: slideInRight;\n  animation-name: slideInRight;\n}\n\n@-webkit-keyframes slideInUp {\n  from {\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes slideInUp {\n  from {\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInUp {\n  -webkit-animation-name: slideInUp;\n  animation-name: slideInUp;\n}\n\n@-webkit-keyframes slideOutDown {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n}\n\n@keyframes slideOutDown {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n}\n\n.slideOutDown {\n  -webkit-animation-name: slideOutDown;\n  animation-name: slideOutDown;\n}\n\n@-webkit-keyframes slideOutLeft {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n@keyframes slideOutLeft {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n.slideOutLeft {\n  -webkit-animation-name: slideOutLeft;\n  animation-name: slideOutLeft;\n}\n\n@-webkit-keyframes slideOutRight {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n@keyframes slideOutRight {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n.slideOutRight {\n  -webkit-animation-name: slideOutRight;\n  animation-name: slideOutRight;\n}\n\n@-webkit-keyframes slideOutUp {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n}\n\n@keyframes slideOutUp {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n}\n\n.slideOutUp {\n  -webkit-animation-name: slideOutUp;\n  animation-name: slideOutUp;\n}\n", ""]);

// exports


/***/ }),
/* 395 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.resource[data-v-051fe8ce]{\n  overflow-y: scroll;\n}\n", ""]);

// exports


/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 397 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 399 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 400 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 401 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 402 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n#create-preference__btn {\n  position: absolute;\n  bottom: 16px;\n  right: 16px;\n}\n", ""]);

// exports


/***/ }),
/* 403 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.small-container--scrolled[data-v-2a9a203a] {\n  max-height: 150px;\n  overflow-y: scroll;\n}\n", ""]);

// exports


/***/ }),
/* 404 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 405 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 406 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 408 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.slide-left-enter,\n.slide-right-leave-active {\n  opacity: 0;\n  -webkit-transform: translate(30px, 0);\n          transform: translate(30px, 0);\n}\n.slide-left-leave-active,\n.slide-right-enter {\n  opacity: 0;\n  -webkit-transform: translate(-30px, 0);\n          transform: translate(-30px, 0);\n}\n", ""]);

// exports


/***/ }),
/* 409 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.small-container--scrolled[data-v-60dcb7c3] {\n  max-height: 150px;\n  overflow-y: scroll;\n}\n", ""]);

// exports


/***/ }),
/* 411 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 412 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 413 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.dummy-preference__text[data-v-84e4d5f2] {\n  height: 16px;\n  width: 100%;\n}\n.dummy-preference__text--small[data-v-84e4d5f2] {\n  height: 14px;\n  width: 100%;\n}\n.dummy-preference__bus[data-v-84e4d5f2] {\n  width: 24px;\n  height: 24px;\n}\n.dummy-preference--background-color[data-v-84e4d5f2] {\n  background-color: rgb(246, 246, 246) !important;\n}\n", ""]);

// exports


/***/ }),
/* 414 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.btn-circle--large {\n  width: 75px;\n  height: 75px;\n  border-radius: 50%;\n  font-size: 40px;\n  color: rgb(66, 66, 66);\n  border: none;\n  background: white;\n}\n.btn-circle--medium {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  font-size: 25px;\n  color: rgb(66, 66, 66);\n  border: none;\n  background: white;\n}\n", ""]);

// exports


/***/ }),
/* 415 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n#display {\n  height: 100vh;\n  overflow: hidden;\n}\n.fc-view-container{\nbackground-color: white;\n}\n.btn--toogle {\n  border-color: black !important;\n  color: black !important;\n}\n.fc-time-grid-event.fc-v-event.fc-event {\n  opacity: 0.9 !important\n}\n.fc-event {\n  border-radius: 0px !important;\n  border: 0px !important;\n}\n.fc-time-grid-event.fc-v-event.fc-event {\n  opacity: 0.9 !important\n}\n.fc-event .fc-bg {\n  opacity: 0 !important;\n}\n.fc button {\n  border-radius: 0px !important;\n  box-sizing: border-box;\n  margin: 0 30px;\n  /* height: 2.1em; */\n  font-size: inherit;\n  /* white-space: nowrap; */\n  cursor: pointer;\n}\n.btn-circle {\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  padding: 6px 0;\n  font-size: 12px;\n  line-height: 1.428571429;\n  border-radius: 15px;\n}\n.btn-circle.btn-lg {\n  width: 50px;\n  height: 50px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33;\n  border-radius: 25px;\n}\n.btn-circle.btn-xl {\n  width: 70px;\n  height: 70px;\n  padding: 10px 16px;\n  font-size: 24px;\n  line-height: 1.33;\n  border-radius: 35px;\n}\n.course-selector__container {\n}\n", ""]);

// exports


/***/ }),
/* 416 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.navigation__actions>button {\n  margin: 0px !important;\n}\n", ""]);

// exports


/***/ }),
/* 417 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n#create-preference__btn {\n  position: absolute;\n  bottom: 16px;\n  right: 16px;\n}\n", ""]);

// exports


/***/ }),
/* 418 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 419 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports
exports.i(__webpack_require__(423), "");
exports.i(__webpack_require__(422), "");
exports.i(__webpack_require__(394), "");

// module
exports.push([module.i, "\n#app {\n  max-height: 100vh;\n  min-height: 100vh;\n}\n.full-h {\n  height: 100%;\n}\n.uk-flex--grow{\n  -ms-flex-positive: 999;\n          -webkit-box-flex: 999;\n      flex-grow: 999;\n}\n", ""]);

// exports


/***/ }),
/* 420 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 421 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 422 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".fade-enter-active, .fade-leave-active {\n  transition: opacity 1s\n}\n\n.fade-enter, .fade-leave-to\n/* .fade-leave-active in <2.1.8 */\n\n{\n  opacity: 0\n}\n\n.f-w {\n  width: 100%;\n}\n\n.f-h {\n  height: 100%;\n}\n\n.uk-flex--grow {\n  flex-grow: 99;\n}\n\n.f-v {\n  height: 100vh;\n}\n\n.btn--floating{\nz-index: 99;\n}\n.uk-section-small {\n  padding-top: 16px !important;\n  padding-bottom: 16px !important;\n}\n\n.bottom--offset {\n  margin-bottom: 70px;\n}\n\n.icon--circle {\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 25px;\n  vertical-align: middle;\n  border: 1px solid black;\n}\n\n.uk-button-link:focus, .uk-button-link:hover {\n  text-decoration: none;\n}\n\n.toogle {\n  color: black !important\n}\n\n.btn--toogle {\n  border: 1px solid black !important;\n  color: black;\n}\n\n.content {\n  margin-bottom: 40px;\n}\n\n.my-card--padding {\n  padding: 16px;\n}\n\n.navigation__actions {\n  position: absolute;\n  height: 40px;\n  background-color: white;\n  position: fixed;\n  z-index: 99;\n  bottom: 0;\n  width: 100%;\n  left: 0;\n  right: 0\n}\n\n.flex--center {\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  -webkit-box-align: center;\n  align-items: center;\n}\n\n.absolute--center {\n  position: absolute;\n  top: 50%;\n  left: auto;\n  width: 100%;\n}\n", ""]);

// exports


/***/ }),
/* 423 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "/*!\n* Vuetify v0.11.0\n* Forged by John Leider\n* Released under the MIT License.\n*/   \n.elevation-0{box-shadow:0 0 0 rgba(0,0,0,.2),0 0 0 rgba(0,0,0,.14),0 0 0 rgba(0,0,0,.12)!important}.elevation-1{box-shadow:0 1px 3px rgba(0,0,0,.2),0 1px 1px rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12)!important}.elevation-2{box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)!important}.elevation-3{box-shadow:0 1px 8px rgba(0,0,0,.2),0 3px 4px rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.12)!important}.elevation-4{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px rgba(0,0,0,.14),0 1px 10px rgba(0,0,0,.12)!important}.elevation-5{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px rgba(0,0,0,.14),0 1px 14px rgba(0,0,0,.12)!important}.elevation-6{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px rgba(0,0,0,.14),0 1px 18px rgba(0,0,0,.12)!important}.elevation-7{box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)!important}.elevation-8{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)!important}.elevation-9{box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)!important}.elevation-10{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)!important}.elevation-11{box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)!important}.elevation-12{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)!important}.elevation-13{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)!important}.elevation-14{box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)!important}.elevation-15{box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)!important}.elevation-16{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)!important}.elevation-17{box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)!important}.elevation-18{box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)!important}.elevation-19{box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)!important}.elevation-20{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)!important}.elevation-21{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)!important}.elevation-22{box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)!important}.elevation-23{box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)!important}.elevation-24{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)!important}html{box-sizing:border-box;overflow-y:scroll;-webkit-text-size-adjust:100%}*,:after,:before{box-sizing:inherit}:after,:before{text-decoration:inherit;vertical-align:inherit}*{background-repeat:no-repeat;padding:0;margin:0}audio:not([controls]){display:none;height:0}hr{overflow:visible}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}summary{display:list-item}small{font-size:80%}[hidden],template{display:none}abbr[title]{border-bottom:1px dotted;text-decoration:none}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}code,kbd,pre,samp{font-family:monospace,monospace}b,strong{font-weight:bolder}dfn{font-style:italic}mark{background-color:#ff0;color:#000}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}input{border-radius:0}[role=button],[type=button],[type=reset],[type=submit],button{cursor:pointer}[disabled]{cursor:default}[type=number]{width:auto}[type=search]{-webkit-appearance:textfield}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}textarea{overflow:auto;resize:vertical}button,input,optgroup,select,textarea{font:inherit}optgroup{font-weight:700}button{overflow:visible}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:0;padding:0}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button:-moz-focusring{outline:1px dotted ButtonText}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}button,select{text-transform:none}button,input,select,textarea{background-color:transparent;border-style:none;color:inherit}select{-moz-appearance:none;-webkit-appearance:none}select::-ms-expand{display:none}select::-ms-value{color:currentColor}legend{border:0;color:inherit;display:table;max-width:100%;white-space:normal}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}img{border-style:none}progress{vertical-align:baseline}svg:not(:root){overflow:hidden}audio,canvas,progress,video{display:inline-block}@media screen{[hidden~=screen]{display:inherit}[hidden~=screen]:not(:active):not(:focus):not(:target){position:absolute!important;clip:rect(0 0 0 0)!important}}[aria-busy=true]{cursor:progress}[aria-controls]{cursor:pointer}[aria-disabled]{cursor:default}::-moz-selection{background-color:#b3d4fc;color:#000;text-shadow:none}::selection{background-color:#b3d4fc;color:#000;text-shadow:none}.content{background:#fff;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;min-width:0}.container,.container-fluid{margin-right:auto;margin-left:auto;-ms-flex-preferred-size:100%;flex-basis:100%}.container{padding-left:2rem;padding-right:2rem}@media only screen and (min-width:518.4px){.container{max-width:518.4px}}@media only screen and (min-width:691.2px){.container{max-width:691.2px}}@media only screen and (min-width:892.8000000000001px){.container{max-width:892.8000000000001px}}@media only screen and (min-width:1080px){.container{max-width:1080px}}.container--fluid{padding:0;max-width:100%}.row{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-left:-.5rem;margin-right:-.5rem}.row--reverse{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.row .col{padding-right:.5rem;padding-left:.5rem}.row .col.xs{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}@media only screen and (min-width:0){.row .col.xs1{-ms-flex-preferred-size:8.333333333333332%;flex-basis:8.333333333333332%;max-width:8.333333333333332%}.row .col.offset-xs1{margin-left:8.333333333333332%}.row .col.xs2{-ms-flex-preferred-size:16.666666666666664%;flex-basis:16.666666666666664%;max-width:16.666666666666664%}.row .col.offset-xs2{margin-left:16.666666666666664%}.row .col.xs3{-ms-flex-preferred-size:25%;flex-basis:25%;max-width:25%}.row .col.offset-xs3{margin-left:25%}.row .col.xs4{-ms-flex-preferred-size:33.33333333333333%;flex-basis:33.33333333333333%;max-width:33.33333333333333%}.row .col.offset-xs4{margin-left:33.33333333333333%}.row .col.xs5{-ms-flex-preferred-size:41.66666666666667%;flex-basis:41.66666666666667%;max-width:41.66666666666667%}.row .col.offset-xs5{margin-left:41.66666666666667%}.row .col.xs6{-ms-flex-preferred-size:50%;flex-basis:50%;max-width:50%}.row .col.offset-xs6{margin-left:50%}.row .col.xs7{-ms-flex-preferred-size:58.333333333333336%;flex-basis:58.333333333333336%;max-width:58.333333333333336%}.row .col.offset-xs7{margin-left:58.333333333333336%}.row .col.xs8{-ms-flex-preferred-size:66.66666666666666%;flex-basis:66.66666666666666%;max-width:66.66666666666666%}.row .col.offset-xs8{margin-left:66.66666666666666%}.row .col.xs9{-ms-flex-preferred-size:75%;flex-basis:75%;max-width:75%}.row .col.offset-xs9{margin-left:75%}.row .col.xs10{-ms-flex-preferred-size:83.33333333333334%;flex-basis:83.33333333333334%;max-width:83.33333333333334%}.row .col.offset-xs10{margin-left:83.33333333333334%}.row .col.xs11{-ms-flex-preferred-size:91.66666666666666%;flex-basis:91.66666666666666%;max-width:91.66666666666666%}.row .col.offset-xs11{margin-left:91.66666666666666%}.row .col.xs12{-ms-flex-preferred-size:100%;flex-basis:100%;max-width:100%}.row .col.offset-xs12{margin-left:100%}}.row .col.sm{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}@media only screen and (min-width:576px){.row .col.sm1{-ms-flex-preferred-size:8.333333333333332%;flex-basis:8.333333333333332%;max-width:8.333333333333332%}.row .col.offset-sm1{margin-left:8.333333333333332%}.row .col.sm2{-ms-flex-preferred-size:16.666666666666664%;flex-basis:16.666666666666664%;max-width:16.666666666666664%}.row .col.offset-sm2{margin-left:16.666666666666664%}.row .col.sm3{-ms-flex-preferred-size:25%;flex-basis:25%;max-width:25%}.row .col.offset-sm3{margin-left:25%}.row .col.sm4{-ms-flex-preferred-size:33.33333333333333%;flex-basis:33.33333333333333%;max-width:33.33333333333333%}.row .col.offset-sm4{margin-left:33.33333333333333%}.row .col.sm5{-ms-flex-preferred-size:41.66666666666667%;flex-basis:41.66666666666667%;max-width:41.66666666666667%}.row .col.offset-sm5{margin-left:41.66666666666667%}.row .col.sm6{-ms-flex-preferred-size:50%;flex-basis:50%;max-width:50%}.row .col.offset-sm6{margin-left:50%}.row .col.sm7{-ms-flex-preferred-size:58.333333333333336%;flex-basis:58.333333333333336%;max-width:58.333333333333336%}.row .col.offset-sm7{margin-left:58.333333333333336%}.row .col.sm8{-ms-flex-preferred-size:66.66666666666666%;flex-basis:66.66666666666666%;max-width:66.66666666666666%}.row .col.offset-sm8{margin-left:66.66666666666666%}.row .col.sm9{-ms-flex-preferred-size:75%;flex-basis:75%;max-width:75%}.row .col.offset-sm9{margin-left:75%}.row .col.sm10{-ms-flex-preferred-size:83.33333333333334%;flex-basis:83.33333333333334%;max-width:83.33333333333334%}.row .col.offset-sm10{margin-left:83.33333333333334%}.row .col.sm11{-ms-flex-preferred-size:91.66666666666666%;flex-basis:91.66666666666666%;max-width:91.66666666666666%}.row .col.offset-sm11{margin-left:91.66666666666666%}.row .col.sm12{-ms-flex-preferred-size:100%;flex-basis:100%;max-width:100%}.row .col.offset-sm12{margin-left:100%}}.row .col.md{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}@media only screen and (min-width:768px){.row .col.md1{-ms-flex-preferred-size:8.333333333333332%;flex-basis:8.333333333333332%;max-width:8.333333333333332%}.row .col.offset-md1{margin-left:8.333333333333332%}.row .col.md2{-ms-flex-preferred-size:16.666666666666664%;flex-basis:16.666666666666664%;max-width:16.666666666666664%}.row .col.offset-md2{margin-left:16.666666666666664%}.row .col.md3{-ms-flex-preferred-size:25%;flex-basis:25%;max-width:25%}.row .col.offset-md3{margin-left:25%}.row .col.md4{-ms-flex-preferred-size:33.33333333333333%;flex-basis:33.33333333333333%;max-width:33.33333333333333%}.row .col.offset-md4{margin-left:33.33333333333333%}.row .col.md5{-ms-flex-preferred-size:41.66666666666667%;flex-basis:41.66666666666667%;max-width:41.66666666666667%}.row .col.offset-md5{margin-left:41.66666666666667%}.row .col.md6{-ms-flex-preferred-size:50%;flex-basis:50%;max-width:50%}.row .col.offset-md6{margin-left:50%}.row .col.md7{-ms-flex-preferred-size:58.333333333333336%;flex-basis:58.333333333333336%;max-width:58.333333333333336%}.row .col.offset-md7{margin-left:58.333333333333336%}.row .col.md8{-ms-flex-preferred-size:66.66666666666666%;flex-basis:66.66666666666666%;max-width:66.66666666666666%}.row .col.offset-md8{margin-left:66.66666666666666%}.row .col.md9{-ms-flex-preferred-size:75%;flex-basis:75%;max-width:75%}.row .col.offset-md9{margin-left:75%}.row .col.md10{-ms-flex-preferred-size:83.33333333333334%;flex-basis:83.33333333333334%;max-width:83.33333333333334%}.row .col.offset-md10{margin-left:83.33333333333334%}.row .col.md11{-ms-flex-preferred-size:91.66666666666666%;flex-basis:91.66666666666666%;max-width:91.66666666666666%}.row .col.offset-md11{margin-left:91.66666666666666%}.row .col.md12{-ms-flex-preferred-size:100%;flex-basis:100%;max-width:100%}.row .col.offset-md12{margin-left:100%}}.row .col.lg{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}@media only screen and (min-width:992px){.row .col.lg1{-ms-flex-preferred-size:8.333333333333332%;flex-basis:8.333333333333332%;max-width:8.333333333333332%}.row .col.offset-lg1{margin-left:8.333333333333332%}.row .col.lg2{-ms-flex-preferred-size:16.666666666666664%;flex-basis:16.666666666666664%;max-width:16.666666666666664%}.row .col.offset-lg2{margin-left:16.666666666666664%}.row .col.lg3{-ms-flex-preferred-size:25%;flex-basis:25%;max-width:25%}.row .col.offset-lg3{margin-left:25%}.row .col.lg4{-ms-flex-preferred-size:33.33333333333333%;flex-basis:33.33333333333333%;max-width:33.33333333333333%}.row .col.offset-lg4{margin-left:33.33333333333333%}.row .col.lg5{-ms-flex-preferred-size:41.66666666666667%;flex-basis:41.66666666666667%;max-width:41.66666666666667%}.row .col.offset-lg5{margin-left:41.66666666666667%}.row .col.lg6{-ms-flex-preferred-size:50%;flex-basis:50%;max-width:50%}.row .col.offset-lg6{margin-left:50%}.row .col.lg7{-ms-flex-preferred-size:58.333333333333336%;flex-basis:58.333333333333336%;max-width:58.333333333333336%}.row .col.offset-lg7{margin-left:58.333333333333336%}.row .col.lg8{-ms-flex-preferred-size:66.66666666666666%;flex-basis:66.66666666666666%;max-width:66.66666666666666%}.row .col.offset-lg8{margin-left:66.66666666666666%}.row .col.lg9{-ms-flex-preferred-size:75%;flex-basis:75%;max-width:75%}.row .col.offset-lg9{margin-left:75%}.row .col.lg10{-ms-flex-preferred-size:83.33333333333334%;flex-basis:83.33333333333334%;max-width:83.33333333333334%}.row .col.offset-lg10{margin-left:83.33333333333334%}.row .col.lg11{-ms-flex-preferred-size:91.66666666666666%;flex-basis:91.66666666666666%;max-width:91.66666666666666%}.row .col.offset-lg11{margin-left:91.66666666666666%}.row .col.lg12{-ms-flex-preferred-size:100%;flex-basis:100%;max-width:100%}.row .col.offset-lg12{margin-left:100%}}.row .col.xl{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}@media only screen and (min-width:1200px){.row .col.xl1{-ms-flex-preferred-size:8.333333333333332%;flex-basis:8.333333333333332%;max-width:8.333333333333332%}.row .col.offset-xl1{margin-left:8.333333333333332%}.row .col.xl2{-ms-flex-preferred-size:16.666666666666664%;flex-basis:16.666666666666664%;max-width:16.666666666666664%}.row .col.offset-xl2{margin-left:16.666666666666664%}.row .col.xl3{-ms-flex-preferred-size:25%;flex-basis:25%;max-width:25%}.row .col.offset-xl3{margin-left:25%}.row .col.xl4{-ms-flex-preferred-size:33.33333333333333%;flex-basis:33.33333333333333%;max-width:33.33333333333333%}.row .col.offset-xl4{margin-left:33.33333333333333%}.row .col.xl5{-ms-flex-preferred-size:41.66666666666667%;flex-basis:41.66666666666667%;max-width:41.66666666666667%}.row .col.offset-xl5{margin-left:41.66666666666667%}.row .col.xl6{-ms-flex-preferred-size:50%;flex-basis:50%;max-width:50%}.row .col.offset-xl6{margin-left:50%}.row .col.xl7{-ms-flex-preferred-size:58.333333333333336%;flex-basis:58.333333333333336%;max-width:58.333333333333336%}.row .col.offset-xl7{margin-left:58.333333333333336%}.row .col.xl8{-ms-flex-preferred-size:66.66666666666666%;flex-basis:66.66666666666666%;max-width:66.66666666666666%}.row .col.offset-xl8{margin-left:66.66666666666666%}.row .col.xl9{-ms-flex-preferred-size:75%;flex-basis:75%;max-width:75%}.row .col.offset-xl9{margin-left:75%}.row .col.xl10{-ms-flex-preferred-size:83.33333333333334%;flex-basis:83.33333333333334%;max-width:83.33333333333334%}.row .col.offset-xl10{margin-left:83.33333333333334%}.row .col.xl11{-ms-flex-preferred-size:91.66666666666666%;flex-basis:91.66666666666666%;max-width:91.66666666666666%}.row .col.offset-xl11{margin-left:91.66666666666666%}.row .col.xl12{-ms-flex-preferred-size:100%;flex-basis:100%;max-width:100%}.row .col.offset-xl12{margin-left:100%}}.col--spacer,.spacer{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.primary{background-color:#1976d2!important;border-color:#1976d2!important}.primary--text{color:#1976d2!important}.primary--after:after{background:#1976d2!important}.accent{background-color:#448aff!important;border-color:#448aff!important}.accent--text{color:#448aff!important}.accent--after:after{background:#448aff!important}.secondary{background-color:#424242!important;border-color:#424242!important}.secondary--text{color:#424242!important}.secondary--after:after{background:#424242!important}.info{background-color:#2196f3!important;border-color:#2196f3!important}.info--text{color:#2196f3!important}.info--after:after{background:#2196f3!important}.warning{background-color:#ffc107!important;border-color:#ffc107!important}.warning--text{color:#ffc107!important}.warning--after:after{background:#ffc107!important}.error{background-color:#ff5252!important;border-color:#ff5252!important}.error--text{color:#ff5252!important}.error--after:after{background:#ff5252!important}.success{background-color:#4caf50!important;border-color:#4caf50!important}.success--text{color:#4caf50!important}.success--after:after{background:#4caf50!important}.black{background-color:#000!important;border-color:#000!important}.black--text{color:#000!important}.black--after:after{background:#000!important}.white{background-color:#fff!important;border-color:#fff!important}.white--text{color:#fff!important}.white--after:after{background:#fff!important}.transparent{background-color:transparent!important;border-color:transparent!important}.transparent--text{color:transparent!important}.transparent--after:after{background:transparent!important}.red{background-color:#f44336!important;border-color:#f44336!important}.red--text{color:#f44336!important}.red--after:after{background:#f44336!important}.red.lighten-5{border-color:#ffebee!important}.red.lighten-5,.red.lighten-5--after:after{background-color:#ffebee!important}.red--text.text--lighten-5{color:#ffebee!important}.red.lighten-4{border-color:#ffcdd2!important}.red.lighten-4,.red.lighten-4--after:after{background-color:#ffcdd2!important}.red--text.text--lighten-4{color:#ffcdd2!important}.red.lighten-3{border-color:#ef9a9a!important}.red.lighten-3,.red.lighten-3--after:after{background-color:#ef9a9a!important}.red--text.text--lighten-3{color:#ef9a9a!important}.red.lighten-2{border-color:#e57373!important}.red.lighten-2,.red.lighten-2--after:after{background-color:#e57373!important}.red--text.text--lighten-2{color:#e57373!important}.red.lighten-1{border-color:#ef5350!important}.red.lighten-1,.red.lighten-1--after:after{background-color:#ef5350!important}.red--text.text--lighten-1{color:#ef5350!important}.red.darken-1{border-color:#e53935!important}.red.darken-1,.red.darken-1--after:after{background-color:#e53935!important}.red--text.text--darken-1{color:#e53935!important}.red.darken-2{border-color:#d32f2f!important}.red.darken-2,.red.darken-2--after:after{background-color:#d32f2f!important}.red--text.text--darken-2{color:#d32f2f!important}.red.darken-3{border-color:#c62828!important}.red.darken-3,.red.darken-3--after:after{background-color:#c62828!important}.red--text.text--darken-3{color:#c62828!important}.red.darken-4{border-color:#b71c1c!important}.red.darken-4,.red.darken-4--after:after{background-color:#b71c1c!important}.red--text.text--darken-4{color:#b71c1c!important}.red.accent-1{border-color:#ff8a80!important}.red.accent-1,.red.accent-1--after:after{background-color:#ff8a80!important}.red--text.text--accent-1{color:#ff8a80!important}.red.accent-2{border-color:#ff5252!important}.red.accent-2,.red.accent-2--after:after{background-color:#ff5252!important}.red--text.text--accent-2{color:#ff5252!important}.red.accent-3{border-color:#ff1744!important}.red.accent-3,.red.accent-3--after:after{background-color:#ff1744!important}.red--text.text--accent-3{color:#ff1744!important}.red.accent-4{border-color:#d50000!important}.red.accent-4,.red.accent-4--after:after{background-color:#d50000!important}.red--text.text--accent-4{color:#d50000!important}.pink{background-color:#e91e63!important;border-color:#e91e63!important}.pink--text{color:#e91e63!important}.pink--after:after{background:#e91e63!important}.pink.lighten-5{border-color:#fce4ec!important}.pink.lighten-5,.pink.lighten-5--after:after{background-color:#fce4ec!important}.pink--text.text--lighten-5{color:#fce4ec!important}.pink.lighten-4{border-color:#f8bbd0!important}.pink.lighten-4,.pink.lighten-4--after:after{background-color:#f8bbd0!important}.pink--text.text--lighten-4{color:#f8bbd0!important}.pink.lighten-3{border-color:#f48fb1!important}.pink.lighten-3,.pink.lighten-3--after:after{background-color:#f48fb1!important}.pink--text.text--lighten-3{color:#f48fb1!important}.pink.lighten-2{border-color:#f06292!important}.pink.lighten-2,.pink.lighten-2--after:after{background-color:#f06292!important}.pink--text.text--lighten-2{color:#f06292!important}.pink.lighten-1{border-color:#ec407a!important}.pink.lighten-1,.pink.lighten-1--after:after{background-color:#ec407a!important}.pink--text.text--lighten-1{color:#ec407a!important}.pink.darken-1{border-color:#d81b60!important}.pink.darken-1,.pink.darken-1--after:after{background-color:#d81b60!important}.pink--text.text--darken-1{color:#d81b60!important}.pink.darken-2{border-color:#c2185b!important}.pink.darken-2,.pink.darken-2--after:after{background-color:#c2185b!important}.pink--text.text--darken-2{color:#c2185b!important}.pink.darken-3{border-color:#ad1457!important}.pink.darken-3,.pink.darken-3--after:after{background-color:#ad1457!important}.pink--text.text--darken-3{color:#ad1457!important}.pink.darken-4{border-color:#880e4f!important}.pink.darken-4,.pink.darken-4--after:after{background-color:#880e4f!important}.pink--text.text--darken-4{color:#880e4f!important}.pink.accent-1{border-color:#ff80ab!important}.pink.accent-1,.pink.accent-1--after:after{background-color:#ff80ab!important}.pink--text.text--accent-1{color:#ff80ab!important}.pink.accent-2{border-color:#ff4081!important}.pink.accent-2,.pink.accent-2--after:after{background-color:#ff4081!important}.pink--text.text--accent-2{color:#ff4081!important}.pink.accent-3{border-color:#f50057!important}.pink.accent-3,.pink.accent-3--after:after{background-color:#f50057!important}.pink--text.text--accent-3{color:#f50057!important}.pink.accent-4{border-color:#c51162!important}.pink.accent-4,.pink.accent-4--after:after{background-color:#c51162!important}.pink--text.text--accent-4{color:#c51162!important}.purple{background-color:#9c27b0!important;border-color:#9c27b0!important}.purple--text{color:#9c27b0!important}.purple--after:after{background:#9c27b0!important}.purple.lighten-5{border-color:#f3e5f5!important}.purple.lighten-5,.purple.lighten-5--after:after{background-color:#f3e5f5!important}.purple--text.text--lighten-5{color:#f3e5f5!important}.purple.lighten-4{border-color:#e1bee7!important}.purple.lighten-4,.purple.lighten-4--after:after{background-color:#e1bee7!important}.purple--text.text--lighten-4{color:#e1bee7!important}.purple.lighten-3{border-color:#ce93d8!important}.purple.lighten-3,.purple.lighten-3--after:after{background-color:#ce93d8!important}.purple--text.text--lighten-3{color:#ce93d8!important}.purple.lighten-2{border-color:#ba68c8!important}.purple.lighten-2,.purple.lighten-2--after:after{background-color:#ba68c8!important}.purple--text.text--lighten-2{color:#ba68c8!important}.purple.lighten-1{border-color:#ab47bc!important}.purple.lighten-1,.purple.lighten-1--after:after{background-color:#ab47bc!important}.purple--text.text--lighten-1{color:#ab47bc!important}.purple.darken-1{border-color:#8e24aa!important}.purple.darken-1,.purple.darken-1--after:after{background-color:#8e24aa!important}.purple--text.text--darken-1{color:#8e24aa!important}.purple.darken-2{border-color:#7b1fa2!important}.purple.darken-2,.purple.darken-2--after:after{background-color:#7b1fa2!important}.purple--text.text--darken-2{color:#7b1fa2!important}.purple.darken-3{border-color:#6a1b9a!important}.purple.darken-3,.purple.darken-3--after:after{background-color:#6a1b9a!important}.purple--text.text--darken-3{color:#6a1b9a!important}.purple.darken-4{border-color:#4a148c!important}.purple.darken-4,.purple.darken-4--after:after{background-color:#4a148c!important}.purple--text.text--darken-4{color:#4a148c!important}.purple.accent-1{border-color:#ea80fc!important}.purple.accent-1,.purple.accent-1--after:after{background-color:#ea80fc!important}.purple--text.text--accent-1{color:#ea80fc!important}.purple.accent-2{border-color:#e040fb!important}.purple.accent-2,.purple.accent-2--after:after{background-color:#e040fb!important}.purple--text.text--accent-2{color:#e040fb!important}.purple.accent-3{border-color:#d500f9!important}.purple.accent-3,.purple.accent-3--after:after{background-color:#d500f9!important}.purple--text.text--accent-3{color:#d500f9!important}.purple.accent-4{border-color:#a0f!important}.purple.accent-4,.purple.accent-4--after:after{background-color:#a0f!important}.purple--text.text--accent-4{color:#a0f!important}.deep-purple{background-color:#673ab7!important;border-color:#673ab7!important}.deep-purple--text{color:#673ab7!important}.deep-purple--after:after{background:#673ab7!important}.deep-purple.lighten-5{border-color:#ede7f6!important}.deep-purple.lighten-5,.deep-purple.lighten-5--after:after{background-color:#ede7f6!important}.deep-purple--text.text--lighten-5{color:#ede7f6!important}.deep-purple.lighten-4{border-color:#d1c4e9!important}.deep-purple.lighten-4,.deep-purple.lighten-4--after:after{background-color:#d1c4e9!important}.deep-purple--text.text--lighten-4{color:#d1c4e9!important}.deep-purple.lighten-3{border-color:#b39ddb!important}.deep-purple.lighten-3,.deep-purple.lighten-3--after:after{background-color:#b39ddb!important}.deep-purple--text.text--lighten-3{color:#b39ddb!important}.deep-purple.lighten-2{border-color:#9575cd!important}.deep-purple.lighten-2,.deep-purple.lighten-2--after:after{background-color:#9575cd!important}.deep-purple--text.text--lighten-2{color:#9575cd!important}.deep-purple.lighten-1{border-color:#7e57c2!important}.deep-purple.lighten-1,.deep-purple.lighten-1--after:after{background-color:#7e57c2!important}.deep-purple--text.text--lighten-1{color:#7e57c2!important}.deep-purple.darken-1{border-color:#5e35b1!important}.deep-purple.darken-1,.deep-purple.darken-1--after:after{background-color:#5e35b1!important}.deep-purple--text.text--darken-1{color:#5e35b1!important}.deep-purple.darken-2{border-color:#512da8!important}.deep-purple.darken-2,.deep-purple.darken-2--after:after{background-color:#512da8!important}.deep-purple--text.text--darken-2{color:#512da8!important}.deep-purple.darken-3{border-color:#4527a0!important}.deep-purple.darken-3,.deep-purple.darken-3--after:after{background-color:#4527a0!important}.deep-purple--text.text--darken-3{color:#4527a0!important}.deep-purple.darken-4{border-color:#311b92!important}.deep-purple.darken-4,.deep-purple.darken-4--after:after{background-color:#311b92!important}.deep-purple--text.text--darken-4{color:#311b92!important}.deep-purple.accent-1{border-color:#b388ff!important}.deep-purple.accent-1,.deep-purple.accent-1--after:after{background-color:#b388ff!important}.deep-purple--text.text--accent-1{color:#b388ff!important}.deep-purple.accent-2{border-color:#7c4dff!important}.deep-purple.accent-2,.deep-purple.accent-2--after:after{background-color:#7c4dff!important}.deep-purple--text.text--accent-2{color:#7c4dff!important}.deep-purple.accent-3{border-color:#651fff!important}.deep-purple.accent-3,.deep-purple.accent-3--after:after{background-color:#651fff!important}.deep-purple--text.text--accent-3{color:#651fff!important}.deep-purple.accent-4{border-color:#6200ea!important}.deep-purple.accent-4,.deep-purple.accent-4--after:after{background-color:#6200ea!important}.deep-purple--text.text--accent-4{color:#6200ea!important}.indigo{background-color:#3f51b5!important;border-color:#3f51b5!important}.indigo--text{color:#3f51b5!important}.indigo--after:after{background:#3f51b5!important}.indigo.lighten-5{border-color:#e8eaf6!important}.indigo.lighten-5,.indigo.lighten-5--after:after{background-color:#e8eaf6!important}.indigo--text.text--lighten-5{color:#e8eaf6!important}.indigo.lighten-4{border-color:#c5cae9!important}.indigo.lighten-4,.indigo.lighten-4--after:after{background-color:#c5cae9!important}.indigo--text.text--lighten-4{color:#c5cae9!important}.indigo.lighten-3{border-color:#9fa8da!important}.indigo.lighten-3,.indigo.lighten-3--after:after{background-color:#9fa8da!important}.indigo--text.text--lighten-3{color:#9fa8da!important}.indigo.lighten-2{border-color:#7986cb!important}.indigo.lighten-2,.indigo.lighten-2--after:after{background-color:#7986cb!important}.indigo--text.text--lighten-2{color:#7986cb!important}.indigo.lighten-1{border-color:#5c6bc0!important}.indigo.lighten-1,.indigo.lighten-1--after:after{background-color:#5c6bc0!important}.indigo--text.text--lighten-1{color:#5c6bc0!important}.indigo.darken-1{border-color:#3949ab!important}.indigo.darken-1,.indigo.darken-1--after:after{background-color:#3949ab!important}.indigo--text.text--darken-1{color:#3949ab!important}.indigo.darken-2{border-color:#303f9f!important}.indigo.darken-2,.indigo.darken-2--after:after{background-color:#303f9f!important}.indigo--text.text--darken-2{color:#303f9f!important}.indigo.darken-3{border-color:#283593!important}.indigo.darken-3,.indigo.darken-3--after:after{background-color:#283593!important}.indigo--text.text--darken-3{color:#283593!important}.indigo.darken-4{border-color:#1a237e!important}.indigo.darken-4,.indigo.darken-4--after:after{background-color:#1a237e!important}.indigo--text.text--darken-4{color:#1a237e!important}.indigo.accent-1{border-color:#8c9eff!important}.indigo.accent-1,.indigo.accent-1--after:after{background-color:#8c9eff!important}.indigo--text.text--accent-1{color:#8c9eff!important}.indigo.accent-2{border-color:#536dfe!important}.indigo.accent-2,.indigo.accent-2--after:after{background-color:#536dfe!important}.indigo--text.text--accent-2{color:#536dfe!important}.indigo.accent-3{border-color:#3d5afe!important}.indigo.accent-3,.indigo.accent-3--after:after{background-color:#3d5afe!important}.indigo--text.text--accent-3{color:#3d5afe!important}.indigo.accent-4{border-color:#304ffe!important}.indigo.accent-4,.indigo.accent-4--after:after{background-color:#304ffe!important}.indigo--text.text--accent-4{color:#304ffe!important}.blue{background-color:#2196f3!important;border-color:#2196f3!important}.blue--text{color:#2196f3!important}.blue--after:after{background:#2196f3!important}.blue.lighten-5{border-color:#e3f2fd!important}.blue.lighten-5,.blue.lighten-5--after:after{background-color:#e3f2fd!important}.blue--text.text--lighten-5{color:#e3f2fd!important}.blue.lighten-4{border-color:#bbdefb!important}.blue.lighten-4,.blue.lighten-4--after:after{background-color:#bbdefb!important}.blue--text.text--lighten-4{color:#bbdefb!important}.blue.lighten-3{border-color:#90caf9!important}.blue.lighten-3,.blue.lighten-3--after:after{background-color:#90caf9!important}.blue--text.text--lighten-3{color:#90caf9!important}.blue.lighten-2{border-color:#64b5f6!important}.blue.lighten-2,.blue.lighten-2--after:after{background-color:#64b5f6!important}.blue--text.text--lighten-2{color:#64b5f6!important}.blue.lighten-1{border-color:#42a5f5!important}.blue.lighten-1,.blue.lighten-1--after:after{background-color:#42a5f5!important}.blue--text.text--lighten-1{color:#42a5f5!important}.blue.darken-1{border-color:#1e88e5!important}.blue.darken-1,.blue.darken-1--after:after{background-color:#1e88e5!important}.blue--text.text--darken-1{color:#1e88e5!important}.blue.darken-2{border-color:#1976d2!important}.blue.darken-2,.blue.darken-2--after:after{background-color:#1976d2!important}.blue--text.text--darken-2{color:#1976d2!important}.blue.darken-3{border-color:#1565c0!important}.blue.darken-3,.blue.darken-3--after:after{background-color:#1565c0!important}.blue--text.text--darken-3{color:#1565c0!important}.blue.darken-4{border-color:#0d47a1!important}.blue.darken-4,.blue.darken-4--after:after{background-color:#0d47a1!important}.blue--text.text--darken-4{color:#0d47a1!important}.blue.accent-1{border-color:#82b1ff!important}.blue.accent-1,.blue.accent-1--after:after{background-color:#82b1ff!important}.blue--text.text--accent-1{color:#82b1ff!important}.blue.accent-2{border-color:#448aff!important}.blue.accent-2,.blue.accent-2--after:after{background-color:#448aff!important}.blue--text.text--accent-2{color:#448aff!important}.blue.accent-3{border-color:#2979ff!important}.blue.accent-3,.blue.accent-3--after:after{background-color:#2979ff!important}.blue--text.text--accent-3{color:#2979ff!important}.blue.accent-4{border-color:#2962ff!important}.blue.accent-4,.blue.accent-4--after:after{background-color:#2962ff!important}.blue--text.text--accent-4{color:#2962ff!important}.light-blue{background-color:#03a9f4!important;border-color:#03a9f4!important}.light-blue--text{color:#03a9f4!important}.light-blue--after:after{background:#03a9f4!important}.light-blue.lighten-5{border-color:#e1f5fe!important}.light-blue.lighten-5,.light-blue.lighten-5--after:after{background-color:#e1f5fe!important}.light-blue--text.text--lighten-5{color:#e1f5fe!important}.light-blue.lighten-4{border-color:#b3e5fc!important}.light-blue.lighten-4,.light-blue.lighten-4--after:after{background-color:#b3e5fc!important}.light-blue--text.text--lighten-4{color:#b3e5fc!important}.light-blue.lighten-3{border-color:#81d4fa!important}.light-blue.lighten-3,.light-blue.lighten-3--after:after{background-color:#81d4fa!important}.light-blue--text.text--lighten-3{color:#81d4fa!important}.light-blue.lighten-2{border-color:#4fc3f7!important}.light-blue.lighten-2,.light-blue.lighten-2--after:after{background-color:#4fc3f7!important}.light-blue--text.text--lighten-2{color:#4fc3f7!important}.light-blue.lighten-1{border-color:#29b6f6!important}.light-blue.lighten-1,.light-blue.lighten-1--after:after{background-color:#29b6f6!important}.light-blue--text.text--lighten-1{color:#29b6f6!important}.light-blue.darken-1{border-color:#039be5!important}.light-blue.darken-1,.light-blue.darken-1--after:after{background-color:#039be5!important}.light-blue--text.text--darken-1{color:#039be5!important}.light-blue.darken-2{border-color:#0288d1!important}.light-blue.darken-2,.light-blue.darken-2--after:after{background-color:#0288d1!important}.light-blue--text.text--darken-2{color:#0288d1!important}.light-blue.darken-3{border-color:#0277bd!important}.light-blue.darken-3,.light-blue.darken-3--after:after{background-color:#0277bd!important}.light-blue--text.text--darken-3{color:#0277bd!important}.light-blue.darken-4{border-color:#01579b!important}.light-blue.darken-4,.light-blue.darken-4--after:after{background-color:#01579b!important}.light-blue--text.text--darken-4{color:#01579b!important}.light-blue.accent-1{border-color:#80d8ff!important}.light-blue.accent-1,.light-blue.accent-1--after:after{background-color:#80d8ff!important}.light-blue--text.text--accent-1{color:#80d8ff!important}.light-blue.accent-2{border-color:#40c4ff!important}.light-blue.accent-2,.light-blue.accent-2--after:after{background-color:#40c4ff!important}.light-blue--text.text--accent-2{color:#40c4ff!important}.light-blue.accent-3{border-color:#00b0ff!important}.light-blue.accent-3,.light-blue.accent-3--after:after{background-color:#00b0ff!important}.light-blue--text.text--accent-3{color:#00b0ff!important}.light-blue.accent-4{border-color:#0091ea!important}.light-blue.accent-4,.light-blue.accent-4--after:after{background-color:#0091ea!important}.light-blue--text.text--accent-4{color:#0091ea!important}.cyan{background-color:#00bcd4!important;border-color:#00bcd4!important}.cyan--text{color:#00bcd4!important}.cyan--after:after{background:#00bcd4!important}.cyan.lighten-5{border-color:#e0f7fa!important}.cyan.lighten-5,.cyan.lighten-5--after:after{background-color:#e0f7fa!important}.cyan--text.text--lighten-5{color:#e0f7fa!important}.cyan.lighten-4{border-color:#b2ebf2!important}.cyan.lighten-4,.cyan.lighten-4--after:after{background-color:#b2ebf2!important}.cyan--text.text--lighten-4{color:#b2ebf2!important}.cyan.lighten-3{border-color:#80deea!important}.cyan.lighten-3,.cyan.lighten-3--after:after{background-color:#80deea!important}.cyan--text.text--lighten-3{color:#80deea!important}.cyan.lighten-2{border-color:#4dd0e1!important}.cyan.lighten-2,.cyan.lighten-2--after:after{background-color:#4dd0e1!important}.cyan--text.text--lighten-2{color:#4dd0e1!important}.cyan.lighten-1{border-color:#26c6da!important}.cyan.lighten-1,.cyan.lighten-1--after:after{background-color:#26c6da!important}.cyan--text.text--lighten-1{color:#26c6da!important}.cyan.darken-1{border-color:#00acc1!important}.cyan.darken-1,.cyan.darken-1--after:after{background-color:#00acc1!important}.cyan--text.text--darken-1{color:#00acc1!important}.cyan.darken-2{border-color:#0097a7!important}.cyan.darken-2,.cyan.darken-2--after:after{background-color:#0097a7!important}.cyan--text.text--darken-2{color:#0097a7!important}.cyan.darken-3{border-color:#00838f!important}.cyan.darken-3,.cyan.darken-3--after:after{background-color:#00838f!important}.cyan--text.text--darken-3{color:#00838f!important}.cyan.darken-4{border-color:#006064!important}.cyan.darken-4,.cyan.darken-4--after:after{background-color:#006064!important}.cyan--text.text--darken-4{color:#006064!important}.cyan.accent-1{border-color:#84ffff!important}.cyan.accent-1,.cyan.accent-1--after:after{background-color:#84ffff!important}.cyan--text.text--accent-1{color:#84ffff!important}.cyan.accent-2{border-color:#18ffff!important}.cyan.accent-2,.cyan.accent-2--after:after{background-color:#18ffff!important}.cyan--text.text--accent-2{color:#18ffff!important}.cyan.accent-3{border-color:#00e5ff!important}.cyan.accent-3,.cyan.accent-3--after:after{background-color:#00e5ff!important}.cyan--text.text--accent-3{color:#00e5ff!important}.cyan.accent-4{border-color:#00b8d4!important}.cyan.accent-4,.cyan.accent-4--after:after{background-color:#00b8d4!important}.cyan--text.text--accent-4{color:#00b8d4!important}.teal{background-color:#009688!important;border-color:#009688!important}.teal--text{color:#009688!important}.teal--after:after{background:#009688!important}.teal.lighten-5{border-color:#e0f2f1!important}.teal.lighten-5,.teal.lighten-5--after:after{background-color:#e0f2f1!important}.teal--text.text--lighten-5{color:#e0f2f1!important}.teal.lighten-4{border-color:#b2dfdb!important}.teal.lighten-4,.teal.lighten-4--after:after{background-color:#b2dfdb!important}.teal--text.text--lighten-4{color:#b2dfdb!important}.teal.lighten-3{border-color:#80cbc4!important}.teal.lighten-3,.teal.lighten-3--after:after{background-color:#80cbc4!important}.teal--text.text--lighten-3{color:#80cbc4!important}.teal.lighten-2{border-color:#4db6ac!important}.teal.lighten-2,.teal.lighten-2--after:after{background-color:#4db6ac!important}.teal--text.text--lighten-2{color:#4db6ac!important}.teal.lighten-1{border-color:#26a69a!important}.teal.lighten-1,.teal.lighten-1--after:after{background-color:#26a69a!important}.teal--text.text--lighten-1{color:#26a69a!important}.teal.darken-1{border-color:#00897b!important}.teal.darken-1,.teal.darken-1--after:after{background-color:#00897b!important}.teal--text.text--darken-1{color:#00897b!important}.teal.darken-2{border-color:#00796b!important}.teal.darken-2,.teal.darken-2--after:after{background-color:#00796b!important}.teal--text.text--darken-2{color:#00796b!important}.teal.darken-3{border-color:#00695c!important}.teal.darken-3,.teal.darken-3--after:after{background-color:#00695c!important}.teal--text.text--darken-3{color:#00695c!important}.teal.darken-4{border-color:#004d40!important}.teal.darken-4,.teal.darken-4--after:after{background-color:#004d40!important}.teal--text.text--darken-4{color:#004d40!important}.teal.accent-1{border-color:#a7ffeb!important}.teal.accent-1,.teal.accent-1--after:after{background-color:#a7ffeb!important}.teal--text.text--accent-1{color:#a7ffeb!important}.teal.accent-2{border-color:#64ffda!important}.teal.accent-2,.teal.accent-2--after:after{background-color:#64ffda!important}.teal--text.text--accent-2{color:#64ffda!important}.teal.accent-3{border-color:#1de9b6!important}.teal.accent-3,.teal.accent-3--after:after{background-color:#1de9b6!important}.teal--text.text--accent-3{color:#1de9b6!important}.teal.accent-4{border-color:#00bfa5!important}.teal.accent-4,.teal.accent-4--after:after{background-color:#00bfa5!important}.teal--text.text--accent-4{color:#00bfa5!important}.green{background-color:#4caf50!important;border-color:#4caf50!important}.green--text{color:#4caf50!important}.green--after:after{background:#4caf50!important}.green.lighten-5{border-color:#e8f5e9!important}.green.lighten-5,.green.lighten-5--after:after{background-color:#e8f5e9!important}.green--text.text--lighten-5{color:#e8f5e9!important}.green.lighten-4{border-color:#c8e6c9!important}.green.lighten-4,.green.lighten-4--after:after{background-color:#c8e6c9!important}.green--text.text--lighten-4{color:#c8e6c9!important}.green.lighten-3{border-color:#a5d6a7!important}.green.lighten-3,.green.lighten-3--after:after{background-color:#a5d6a7!important}.green--text.text--lighten-3{color:#a5d6a7!important}.green.lighten-2{border-color:#81c784!important}.green.lighten-2,.green.lighten-2--after:after{background-color:#81c784!important}.green--text.text--lighten-2{color:#81c784!important}.green.lighten-1{border-color:#66bb6a!important}.green.lighten-1,.green.lighten-1--after:after{background-color:#66bb6a!important}.green--text.text--lighten-1{color:#66bb6a!important}.green.darken-1{border-color:#43a047!important}.green.darken-1,.green.darken-1--after:after{background-color:#43a047!important}.green--text.text--darken-1{color:#43a047!important}.green.darken-2{border-color:#388e3c!important}.green.darken-2,.green.darken-2--after:after{background-color:#388e3c!important}.green--text.text--darken-2{color:#388e3c!important}.green.darken-3{border-color:#2e7d32!important}.green.darken-3,.green.darken-3--after:after{background-color:#2e7d32!important}.green--text.text--darken-3{color:#2e7d32!important}.green.darken-4{border-color:#1b5e20!important}.green.darken-4,.green.darken-4--after:after{background-color:#1b5e20!important}.green--text.text--darken-4{color:#1b5e20!important}.green.accent-1{border-color:#b9f6ca!important}.green.accent-1,.green.accent-1--after:after{background-color:#b9f6ca!important}.green--text.text--accent-1{color:#b9f6ca!important}.green.accent-2{border-color:#69f0ae!important}.green.accent-2,.green.accent-2--after:after{background-color:#69f0ae!important}.green--text.text--accent-2{color:#69f0ae!important}.green.accent-3{border-color:#00e676!important}.green.accent-3,.green.accent-3--after:after{background-color:#00e676!important}.green--text.text--accent-3{color:#00e676!important}.green.accent-4{border-color:#00c853!important}.green.accent-4,.green.accent-4--after:after{background-color:#00c853!important}.green--text.text--accent-4{color:#00c853!important}.light-green{background-color:#8bc34a!important;border-color:#8bc34a!important}.light-green--text{color:#8bc34a!important}.light-green--after:after{background:#8bc34a!important}.light-green.lighten-5{border-color:#f1f8e9!important}.light-green.lighten-5,.light-green.lighten-5--after:after{background-color:#f1f8e9!important}.light-green--text.text--lighten-5{color:#f1f8e9!important}.light-green.lighten-4{border-color:#dcedc8!important}.light-green.lighten-4,.light-green.lighten-4--after:after{background-color:#dcedc8!important}.light-green--text.text--lighten-4{color:#dcedc8!important}.light-green.lighten-3{border-color:#c5e1a5!important}.light-green.lighten-3,.light-green.lighten-3--after:after{background-color:#c5e1a5!important}.light-green--text.text--lighten-3{color:#c5e1a5!important}.light-green.lighten-2{border-color:#aed581!important}.light-green.lighten-2,.light-green.lighten-2--after:after{background-color:#aed581!important}.light-green--text.text--lighten-2{color:#aed581!important}.light-green.lighten-1{border-color:#9ccc65!important}.light-green.lighten-1,.light-green.lighten-1--after:after{background-color:#9ccc65!important}.light-green--text.text--lighten-1{color:#9ccc65!important}.light-green.darken-1{border-color:#7cb342!important}.light-green.darken-1,.light-green.darken-1--after:after{background-color:#7cb342!important}.light-green--text.text--darken-1{color:#7cb342!important}.light-green.darken-2{border-color:#689f38!important}.light-green.darken-2,.light-green.darken-2--after:after{background-color:#689f38!important}.light-green--text.text--darken-2{color:#689f38!important}.light-green.darken-3{border-color:#558b2f!important}.light-green.darken-3,.light-green.darken-3--after:after{background-color:#558b2f!important}.light-green--text.text--darken-3{color:#558b2f!important}.light-green.darken-4{border-color:#33691e!important}.light-green.darken-4,.light-green.darken-4--after:after{background-color:#33691e!important}.light-green--text.text--darken-4{color:#33691e!important}.light-green.accent-1{border-color:#ccff90!important}.light-green.accent-1,.light-green.accent-1--after:after{background-color:#ccff90!important}.light-green--text.text--accent-1{color:#ccff90!important}.light-green.accent-2{border-color:#b2ff59!important}.light-green.accent-2,.light-green.accent-2--after:after{background-color:#b2ff59!important}.light-green--text.text--accent-2{color:#b2ff59!important}.light-green.accent-3{border-color:#76ff03!important}.light-green.accent-3,.light-green.accent-3--after:after{background-color:#76ff03!important}.light-green--text.text--accent-3{color:#76ff03!important}.light-green.accent-4{border-color:#64dd17!important}.light-green.accent-4,.light-green.accent-4--after:after{background-color:#64dd17!important}.light-green--text.text--accent-4{color:#64dd17!important}.lime{background-color:#cddc39!important;border-color:#cddc39!important}.lime--text{color:#cddc39!important}.lime--after:after{background:#cddc39!important}.lime.lighten-5{border-color:#f9fbe7!important}.lime.lighten-5,.lime.lighten-5--after:after{background-color:#f9fbe7!important}.lime--text.text--lighten-5{color:#f9fbe7!important}.lime.lighten-4{border-color:#f0f4c3!important}.lime.lighten-4,.lime.lighten-4--after:after{background-color:#f0f4c3!important}.lime--text.text--lighten-4{color:#f0f4c3!important}.lime.lighten-3{border-color:#e6ee9c!important}.lime.lighten-3,.lime.lighten-3--after:after{background-color:#e6ee9c!important}.lime--text.text--lighten-3{color:#e6ee9c!important}.lime.lighten-2{border-color:#dce775!important}.lime.lighten-2,.lime.lighten-2--after:after{background-color:#dce775!important}.lime--text.text--lighten-2{color:#dce775!important}.lime.lighten-1{border-color:#d4e157!important}.lime.lighten-1,.lime.lighten-1--after:after{background-color:#d4e157!important}.lime--text.text--lighten-1{color:#d4e157!important}.lime.darken-1{border-color:#c0ca33!important}.lime.darken-1,.lime.darken-1--after:after{background-color:#c0ca33!important}.lime--text.text--darken-1{color:#c0ca33!important}.lime.darken-2{border-color:#afb42b!important}.lime.darken-2,.lime.darken-2--after:after{background-color:#afb42b!important}.lime--text.text--darken-2{color:#afb42b!important}.lime.darken-3{border-color:#9e9d24!important}.lime.darken-3,.lime.darken-3--after:after{background-color:#9e9d24!important}.lime--text.text--darken-3{color:#9e9d24!important}.lime.darken-4{border-color:#827717!important}.lime.darken-4,.lime.darken-4--after:after{background-color:#827717!important}.lime--text.text--darken-4{color:#827717!important}.lime.accent-1{border-color:#f4ff81!important}.lime.accent-1,.lime.accent-1--after:after{background-color:#f4ff81!important}.lime--text.text--accent-1{color:#f4ff81!important}.lime.accent-2{border-color:#eeff41!important}.lime.accent-2,.lime.accent-2--after:after{background-color:#eeff41!important}.lime--text.text--accent-2{color:#eeff41!important}.lime.accent-3{border-color:#c6ff00!important}.lime.accent-3,.lime.accent-3--after:after{background-color:#c6ff00!important}.lime--text.text--accent-3{color:#c6ff00!important}.lime.accent-4{border-color:#aeea00!important}.lime.accent-4,.lime.accent-4--after:after{background-color:#aeea00!important}.lime--text.text--accent-4{color:#aeea00!important}.yellow{background-color:#ffeb3b!important;border-color:#ffeb3b!important}.yellow--text{color:#ffeb3b!important}.yellow--after:after{background:#ffeb3b!important}.yellow.lighten-5{border-color:#fffde7!important}.yellow.lighten-5,.yellow.lighten-5--after:after{background-color:#fffde7!important}.yellow--text.text--lighten-5{color:#fffde7!important}.yellow.lighten-4{border-color:#fff9c4!important}.yellow.lighten-4,.yellow.lighten-4--after:after{background-color:#fff9c4!important}.yellow--text.text--lighten-4{color:#fff9c4!important}.yellow.lighten-3{border-color:#fff59d!important}.yellow.lighten-3,.yellow.lighten-3--after:after{background-color:#fff59d!important}.yellow--text.text--lighten-3{color:#fff59d!important}.yellow.lighten-2{border-color:#fff176!important}.yellow.lighten-2,.yellow.lighten-2--after:after{background-color:#fff176!important}.yellow--text.text--lighten-2{color:#fff176!important}.yellow.lighten-1{border-color:#ffee58!important}.yellow.lighten-1,.yellow.lighten-1--after:after{background-color:#ffee58!important}.yellow--text.text--lighten-1{color:#ffee58!important}.yellow.darken-1{border-color:#fdd835!important}.yellow.darken-1,.yellow.darken-1--after:after{background-color:#fdd835!important}.yellow--text.text--darken-1{color:#fdd835!important}.yellow.darken-2{border-color:#fbc02d!important}.yellow.darken-2,.yellow.darken-2--after:after{background-color:#fbc02d!important}.yellow--text.text--darken-2{color:#fbc02d!important}.yellow.darken-3{border-color:#f9a825!important}.yellow.darken-3,.yellow.darken-3--after:after{background-color:#f9a825!important}.yellow--text.text--darken-3{color:#f9a825!important}.yellow.darken-4{border-color:#f57f17!important}.yellow.darken-4,.yellow.darken-4--after:after{background-color:#f57f17!important}.yellow--text.text--darken-4{color:#f57f17!important}.yellow.accent-1{border-color:#ffff8d!important}.yellow.accent-1,.yellow.accent-1--after:after{background-color:#ffff8d!important}.yellow--text.text--accent-1{color:#ffff8d!important}.yellow.accent-2{border-color:#ff0!important}.yellow.accent-2,.yellow.accent-2--after:after{background-color:#ff0!important}.yellow--text.text--accent-2{color:#ff0!important}.yellow.accent-3{border-color:#ffea00!important}.yellow.accent-3,.yellow.accent-3--after:after{background-color:#ffea00!important}.yellow--text.text--accent-3{color:#ffea00!important}.yellow.accent-4{border-color:#ffd600!important}.yellow.accent-4,.yellow.accent-4--after:after{background-color:#ffd600!important}.yellow--text.text--accent-4{color:#ffd600!important}.amber{background-color:#ffc107!important;border-color:#ffc107!important}.amber--text{color:#ffc107!important}.amber--after:after{background:#ffc107!important}.amber.lighten-5{border-color:#fff8e1!important}.amber.lighten-5,.amber.lighten-5--after:after{background-color:#fff8e1!important}.amber--text.text--lighten-5{color:#fff8e1!important}.amber.lighten-4{border-color:#ffecb3!important}.amber.lighten-4,.amber.lighten-4--after:after{background-color:#ffecb3!important}.amber--text.text--lighten-4{color:#ffecb3!important}.amber.lighten-3{border-color:#ffe082!important}.amber.lighten-3,.amber.lighten-3--after:after{background-color:#ffe082!important}.amber--text.text--lighten-3{color:#ffe082!important}.amber.lighten-2{border-color:#ffd54f!important}.amber.lighten-2,.amber.lighten-2--after:after{background-color:#ffd54f!important}.amber--text.text--lighten-2{color:#ffd54f!important}.amber.lighten-1{border-color:#ffca28!important}.amber.lighten-1,.amber.lighten-1--after:after{background-color:#ffca28!important}.amber--text.text--lighten-1{color:#ffca28!important}.amber.darken-1{border-color:#ffb300!important}.amber.darken-1,.amber.darken-1--after:after{background-color:#ffb300!important}.amber--text.text--darken-1{color:#ffb300!important}.amber.darken-2{border-color:#ffa000!important}.amber.darken-2,.amber.darken-2--after:after{background-color:#ffa000!important}.amber--text.text--darken-2{color:#ffa000!important}.amber.darken-3{border-color:#ff8f00!important}.amber.darken-3,.amber.darken-3--after:after{background-color:#ff8f00!important}.amber--text.text--darken-3{color:#ff8f00!important}.amber.darken-4{border-color:#ff6f00!important}.amber.darken-4,.amber.darken-4--after:after{background-color:#ff6f00!important}.amber--text.text--darken-4{color:#ff6f00!important}.amber.accent-1{border-color:#ffe57f!important}.amber.accent-1,.amber.accent-1--after:after{background-color:#ffe57f!important}.amber--text.text--accent-1{color:#ffe57f!important}.amber.accent-2{border-color:#ffd740!important}.amber.accent-2,.amber.accent-2--after:after{background-color:#ffd740!important}.amber--text.text--accent-2{color:#ffd740!important}.amber.accent-3{border-color:#ffc400!important}.amber.accent-3,.amber.accent-3--after:after{background-color:#ffc400!important}.amber--text.text--accent-3{color:#ffc400!important}.amber.accent-4{border-color:#ffab00!important}.amber.accent-4,.amber.accent-4--after:after{background-color:#ffab00!important}.amber--text.text--accent-4{color:#ffab00!important}.orange{background-color:#ff9800!important;border-color:#ff9800!important}.orange--text{color:#ff9800!important}.orange--after:after{background:#ff9800!important}.orange.lighten-5{border-color:#fff3e0!important}.orange.lighten-5,.orange.lighten-5--after:after{background-color:#fff3e0!important}.orange--text.text--lighten-5{color:#fff3e0!important}.orange.lighten-4{border-color:#ffe0b2!important}.orange.lighten-4,.orange.lighten-4--after:after{background-color:#ffe0b2!important}.orange--text.text--lighten-4{color:#ffe0b2!important}.orange.lighten-3{border-color:#ffcc80!important}.orange.lighten-3,.orange.lighten-3--after:after{background-color:#ffcc80!important}.orange--text.text--lighten-3{color:#ffcc80!important}.orange.lighten-2{border-color:#ffb74d!important}.orange.lighten-2,.orange.lighten-2--after:after{background-color:#ffb74d!important}.orange--text.text--lighten-2{color:#ffb74d!important}.orange.lighten-1{border-color:#ffa726!important}.orange.lighten-1,.orange.lighten-1--after:after{background-color:#ffa726!important}.orange--text.text--lighten-1{color:#ffa726!important}.orange.darken-1{border-color:#fb8c00!important}.orange.darken-1,.orange.darken-1--after:after{background-color:#fb8c00!important}.orange--text.text--darken-1{color:#fb8c00!important}.orange.darken-2{border-color:#f57c00!important}.orange.darken-2,.orange.darken-2--after:after{background-color:#f57c00!important}.orange--text.text--darken-2{color:#f57c00!important}.orange.darken-3{border-color:#ef6c00!important}.orange.darken-3,.orange.darken-3--after:after{background-color:#ef6c00!important}.orange--text.text--darken-3{color:#ef6c00!important}.orange.darken-4{border-color:#e65100!important}.orange.darken-4,.orange.darken-4--after:after{background-color:#e65100!important}.orange--text.text--darken-4{color:#e65100!important}.orange.accent-1{border-color:#ffd180!important}.orange.accent-1,.orange.accent-1--after:after{background-color:#ffd180!important}.orange--text.text--accent-1{color:#ffd180!important}.orange.accent-2{border-color:#ffab40!important}.orange.accent-2,.orange.accent-2--after:after{background-color:#ffab40!important}.orange--text.text--accent-2{color:#ffab40!important}.orange.accent-3{border-color:#ff9100!important}.orange.accent-3,.orange.accent-3--after:after{background-color:#ff9100!important}.orange--text.text--accent-3{color:#ff9100!important}.orange.accent-4{border-color:#ff6d00!important}.orange.accent-4,.orange.accent-4--after:after{background-color:#ff6d00!important}.orange--text.text--accent-4{color:#ff6d00!important}.deep-orange{background-color:#ff5722!important;border-color:#ff5722!important}.deep-orange--text{color:#ff5722!important}.deep-orange--after:after{background:#ff5722!important}.deep-orange.lighten-5{border-color:#fbe9e7!important}.deep-orange.lighten-5,.deep-orange.lighten-5--after:after{background-color:#fbe9e7!important}.deep-orange--text.text--lighten-5{color:#fbe9e7!important}.deep-orange.lighten-4{border-color:#ffccbc!important}.deep-orange.lighten-4,.deep-orange.lighten-4--after:after{background-color:#ffccbc!important}.deep-orange--text.text--lighten-4{color:#ffccbc!important}.deep-orange.lighten-3{border-color:#ffab91!important}.deep-orange.lighten-3,.deep-orange.lighten-3--after:after{background-color:#ffab91!important}.deep-orange--text.text--lighten-3{color:#ffab91!important}.deep-orange.lighten-2{border-color:#ff8a65!important}.deep-orange.lighten-2,.deep-orange.lighten-2--after:after{background-color:#ff8a65!important}.deep-orange--text.text--lighten-2{color:#ff8a65!important}.deep-orange.lighten-1{border-color:#ff7043!important}.deep-orange.lighten-1,.deep-orange.lighten-1--after:after{background-color:#ff7043!important}.deep-orange--text.text--lighten-1{color:#ff7043!important}.deep-orange.darken-1{border-color:#f4511e!important}.deep-orange.darken-1,.deep-orange.darken-1--after:after{background-color:#f4511e!important}.deep-orange--text.text--darken-1{color:#f4511e!important}.deep-orange.darken-2{border-color:#e64a19!important}.deep-orange.darken-2,.deep-orange.darken-2--after:after{background-color:#e64a19!important}.deep-orange--text.text--darken-2{color:#e64a19!important}.deep-orange.darken-3{border-color:#d84315!important}.deep-orange.darken-3,.deep-orange.darken-3--after:after{background-color:#d84315!important}.deep-orange--text.text--darken-3{color:#d84315!important}.deep-orange.darken-4{border-color:#bf360c!important}.deep-orange.darken-4,.deep-orange.darken-4--after:after{background-color:#bf360c!important}.deep-orange--text.text--darken-4{color:#bf360c!important}.deep-orange.accent-1{border-color:#ff9e80!important}.deep-orange.accent-1,.deep-orange.accent-1--after:after{background-color:#ff9e80!important}.deep-orange--text.text--accent-1{color:#ff9e80!important}.deep-orange.accent-2{border-color:#ff6e40!important}.deep-orange.accent-2,.deep-orange.accent-2--after:after{background-color:#ff6e40!important}.deep-orange--text.text--accent-2{color:#ff6e40!important}.deep-orange.accent-3{border-color:#ff3d00!important}.deep-orange.accent-3,.deep-orange.accent-3--after:after{background-color:#ff3d00!important}.deep-orange--text.text--accent-3{color:#ff3d00!important}.deep-orange.accent-4{border-color:#dd2c00!important}.deep-orange.accent-4,.deep-orange.accent-4--after:after{background-color:#dd2c00!important}.deep-orange--text.text--accent-4{color:#dd2c00!important}.brown{background-color:#795548!important;border-color:#795548!important}.brown--text{color:#795548!important}.brown--after:after{background:#795548!important}.brown.lighten-5{border-color:#efebe9!important}.brown.lighten-5,.brown.lighten-5--after:after{background-color:#efebe9!important}.brown--text.text--lighten-5{color:#efebe9!important}.brown.lighten-4{border-color:#d7ccc8!important}.brown.lighten-4,.brown.lighten-4--after:after{background-color:#d7ccc8!important}.brown--text.text--lighten-4{color:#d7ccc8!important}.brown.lighten-3{border-color:#bcaaa4!important}.brown.lighten-3,.brown.lighten-3--after:after{background-color:#bcaaa4!important}.brown--text.text--lighten-3{color:#bcaaa4!important}.brown.lighten-2{border-color:#a1887f!important}.brown.lighten-2,.brown.lighten-2--after:after{background-color:#a1887f!important}.brown--text.text--lighten-2{color:#a1887f!important}.brown.lighten-1{border-color:#8d6e63!important}.brown.lighten-1,.brown.lighten-1--after:after{background-color:#8d6e63!important}.brown--text.text--lighten-1{color:#8d6e63!important}.brown.darken-1{border-color:#6d4c41!important}.brown.darken-1,.brown.darken-1--after:after{background-color:#6d4c41!important}.brown--text.text--darken-1{color:#6d4c41!important}.brown.darken-2{border-color:#5d4037!important}.brown.darken-2,.brown.darken-2--after:after{background-color:#5d4037!important}.brown--text.text--darken-2{color:#5d4037!important}.brown.darken-3{border-color:#4e342e!important}.brown.darken-3,.brown.darken-3--after:after{background-color:#4e342e!important}.brown--text.text--darken-3{color:#4e342e!important}.brown.darken-4{border-color:#3e2723!important}.brown.darken-4,.brown.darken-4--after:after{background-color:#3e2723!important}.brown--text.text--darken-4{color:#3e2723!important}.blue-grey{background-color:#607d8b!important;border-color:#607d8b!important}.blue-grey--text{color:#607d8b!important}.blue-grey--after:after{background:#607d8b!important}.blue-grey.lighten-5{border-color:#eceff1!important}.blue-grey.lighten-5,.blue-grey.lighten-5--after:after{background-color:#eceff1!important}.blue-grey--text.text--lighten-5{color:#eceff1!important}.blue-grey.lighten-4{border-color:#cfd8dc!important}.blue-grey.lighten-4,.blue-grey.lighten-4--after:after{background-color:#cfd8dc!important}.blue-grey--text.text--lighten-4{color:#cfd8dc!important}.blue-grey.lighten-3{border-color:#b0bec5!important}.blue-grey.lighten-3,.blue-grey.lighten-3--after:after{background-color:#b0bec5!important}.blue-grey--text.text--lighten-3{color:#b0bec5!important}.blue-grey.lighten-2{border-color:#90a4ae!important}.blue-grey.lighten-2,.blue-grey.lighten-2--after:after{background-color:#90a4ae!important}.blue-grey--text.text--lighten-2{color:#90a4ae!important}.blue-grey.lighten-1{border-color:#78909c!important}.blue-grey.lighten-1,.blue-grey.lighten-1--after:after{background-color:#78909c!important}.blue-grey--text.text--lighten-1{color:#78909c!important}.blue-grey.darken-1{border-color:#546e7a!important}.blue-grey.darken-1,.blue-grey.darken-1--after:after{background-color:#546e7a!important}.blue-grey--text.text--darken-1{color:#546e7a!important}.blue-grey.darken-2{border-color:#455a64!important}.blue-grey.darken-2,.blue-grey.darken-2--after:after{background-color:#455a64!important}.blue-grey--text.text--darken-2{color:#455a64!important}.blue-grey.darken-3{border-color:#37474f!important}.blue-grey.darken-3,.blue-grey.darken-3--after:after{background-color:#37474f!important}.blue-grey--text.text--darken-3{color:#37474f!important}.blue-grey.darken-4{border-color:#263238!important}.blue-grey.darken-4,.blue-grey.darken-4--after:after{background-color:#263238!important}.blue-grey--text.text--darken-4{color:#263238!important}.grey{background-color:#9e9e9e!important;border-color:#9e9e9e!important}.grey--text{color:#9e9e9e!important}.grey--after:after{background:#9e9e9e!important}.grey.lighten-5{border-color:#fafafa!important}.grey.lighten-5,.grey.lighten-5--after:after{background-color:#fafafa!important}.grey--text.text--lighten-5{color:#fafafa!important}.grey.lighten-4{border-color:#f5f5f5!important}.grey.lighten-4,.grey.lighten-4--after:after{background-color:#f5f5f5!important}.grey--text.text--lighten-4{color:#f5f5f5!important}.grey.lighten-3{border-color:#eee!important}.grey.lighten-3,.grey.lighten-3--after:after{background-color:#eee!important}.grey--text.text--lighten-3{color:#eee!important}.grey.lighten-2{border-color:#e0e0e0!important}.grey.lighten-2,.grey.lighten-2--after:after{background-color:#e0e0e0!important}.grey--text.text--lighten-2{color:#e0e0e0!important}.grey.lighten-1{border-color:#bdbdbd!important}.grey.lighten-1,.grey.lighten-1--after:after{background-color:#bdbdbd!important}.grey--text.text--lighten-1{color:#bdbdbd!important}.grey.darken-1{border-color:#757575!important}.grey.darken-1,.grey.darken-1--after:after{background-color:#757575!important}.grey--text.text--darken-1{color:#757575!important}.grey.darken-2{border-color:#616161!important}.grey.darken-2,.grey.darken-2--after:after{background-color:#616161!important}.grey--text.text--darken-2{color:#616161!important}.grey.darken-3{border-color:#424242!important}.grey.darken-3,.grey.darken-3--after:after{background-color:#424242!important}.grey--text.text--darken-3{color:#424242!important}.grey.darken-4{border-color:#212121!important}.grey.darken-4,.grey.darken-4--after:after{background-color:#212121!important}.grey--text.text--darken-4{color:#212121!important}.shades.black{border-color:#000!important}.shades.black,.shades.black--after:after{background-color:#000!important}.shades--text.text--black{color:#000!important}.shades.white{border-color:#fff!important}.shades.white,.shades.white--after:after{background-color:#fff!important}.shades--text.text--white{color:#fff!important}.shades.transparent{border-color:transparent!important}.shades.transparent,.shades.transparent--after:after{background-color:transparent!important}.shades--text.text--transparent{color:transparent!important}.carousel-transition-enter{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.carousel-transition-leave,.carousel-transition-leave-to{position:absolute;top:0}.carousel-reverse-transition-enter,.carousel-transition-leave,.carousel-transition-leave-to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.carousel-reverse-transition-leave,.carousel-reverse-transition-leave-to{position:absolute;top:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.dialog-transition-enter,.dialog-transition-leave-to{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}.dialog-transition-enter-to,.dialog-transition-leave{opacity:1}.dialog-bottom-transition-enter,.dialog-bottom-transition-leave-to{-webkit-transform:translateY(100%);transform:translateY(100%)}.tab-transition-enter{-webkit-transform:translate(100%);transform:translate(100%)}.tab-transition-enter-to{-webkit-transform:translate(0);transform:translate(0)}.tab-transition-leave,.tab-transition-leave-active{position:absolute;top:0}.tab-transition-leave-to{position:absolute}.tab-reverse-transition-enter,.tab-transition-leave-to{-webkit-transform:translate(-100%);transform:translate(-100%)}.tab-reverse-transition-leave,.tab-reverse-transition-leave-to{top:0;position:absolute;-webkit-transform:translate(100%);transform:translate(100%)}.scale-transition-leave-active{position:absolute}.scale-transition-enter,.scale-transition-enter-active,.scale-transition-leave,.scale-transition-leave-to{-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1)}.scale-transition-enter,.scale-transition-leave,.scale-transition-leave-to{opacity:0;-webkit-transform:scale(0);transform:scale(0)}.slide-y-transition-leave-active{position:absolute}.slide-y-transition-enter-active,.slide-y-transition-leave,.slide-y-transition-leave-to{-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1)}.slide-y-transition-enter,.slide-y-transition-leave-to{opacity:0;-webkit-transform:translateY(-15px);transform:translateY(-15px)}.slide-y-reverse-transition-leave-active{position:absolute}.slide-y-reverse-transition-enter-active,.slide-y-reverse-transition-leave,.slide-y-reverse-transition-leave-to{-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1)}.slide-y-reverse-transition-enter,.slide-y-reverse-transition-leave-to{opacity:0;-webkit-transform:translateY(15px);transform:translateY(15px)}.slide-x-transition-leave-active{position:absolute}.slide-x-transition-enter-active,.slide-x-transition-leave,.slide-x-transition-leave-to{-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1)}.slide-x-transition-enter,.slide-x-transition-leave-to{opacity:0;-webkit-transform:translateX(-15px);transform:translateX(-15px)}.slide-x-reverse-transition-leave-active{position:absolute}.slide-x-reverse-transition-enter-active,.slide-x-reverse-transition-leave,.slide-x-reverse-transition-leave-to{-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1)}.slide-x-reverse-transition-enter,.slide-x-reverse-transition-leave-to{opacity:0;-webkit-transform:translateX(15px);transform:translateX(15px)}.fade-transition-leave-active{position:absolute}.fade-transition-enter-active,.fade-transition-leave,.fade-transition-leave-to{-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1)}.fade-transition-enter,.fade-transition-leave-to{opacity:0}blockquote{border-left:5px solid #1976d2;padding:1rem 0 1rem 1.5rem;font-size:1.5rem;font-weight:300}code,kbd{background:#9e9e9e;color:#bd4147;display:inline-block;background-color:#f5f5f5;border-radius:3px;white-space:pre-wrap;font-size:85%;font-weight:100!important;font-weight:900!important}code:after,code:before,kbd:after,kbd:before{content:\"\\A0\";letter-spacing:-1px}kbd{background:#424242;color:#fff}html{font-size:14px;color:#424242;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:rgba(0,0,0,0)}body{background:#fff;overflow-x:hidden;font-family:Roboto,sans-serif;line-height:1.5}main{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;min-width:0;overflow:hidden}header{width:100%}a{color:#1976d2}h1{color:#424242;font-size:112px;font-weight:300;line-height:1;letter-spacing:-.04em;margin-bottom:1rem}@media screen and (max-width:576px){h1{font-size:67.2px}}h2{color:#424242;font-size:56px;font-weight:400;line-height:1.35;letter-spacing:-.02em;margin-bottom:1rem}@media screen and (max-width:576px){h2{font-size:33.6px}}h3{color:#424242;font-size:45px;font-weight:400;line-height:48px;letter-spacing:normal;margin-bottom:1rem}@media screen and (max-width:576px){h3{font-size:27px}}h4{color:#424242;font-size:34px;font-weight:400;line-height:40px;letter-spacing:normal;margin-bottom:1rem}@media screen and (max-width:576px){h4{font-size:20.4px}}h5{color:#424242;font-size:24px;font-weight:400;line-height:32px;letter-spacing:normal;margin-bottom:1rem}@media screen and (max-width:576px){h5{font-size:14.399999999999999px}}h6{color:#424242;font-size:20px;font-weight:500;line-height:1;letter-spacing:.02em;margin-bottom:1rem}@media screen and (max-width:576px){h6{font-size:12px}}.display-4{font-size:112px;font-weight:300;line-height:1;letter-spacing:-.04em}.display-3{font-size:56px;font-weight:400;line-height:1.35;letter-spacing:-.02em}.display-2{font-size:45px;line-height:48px}.display-1,.display-2{font-weight:400;letter-spacing:normal}.display-1{font-size:34px;line-height:40px}.headline{font-size:24px;font-weight:400;line-height:32px;letter-spacing:normal}.title{font-size:20px;font-weight:500;line-height:1;letter-spacing:.02em}.subheading{font-size:16px}p{margin-bottom:1rem}.alert{border-radius:0;border-width:4px 0 0;border-style:solid;border-color:rgba(0,0,0,.8);color:inherit;display:-webkit-box;display:-ms-flexbox;display:flex;font-size:1.1rem;text-align:left;padding:1.5rem;position:relative;margin:.25rem auto}.alert__dismissible,.alert__icon{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center;margin-right:1.5rem;font-size:2rem;color:rgba(0,0,0,.3)}.alert__dismissible{margin-right:0;margin-left:1.5rem;-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1);-ms-flex-item-align:start;align-self:flex-start;text-decoration:none}.alert__dismissible:hover{color:rgba(26,26,26,.3)}.alert>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%}.alert--info{background-color:#2196f3}.alert--error,.alert--info{color:#fff;border-color:rgba(0,0,0,.2)}.alert--error{background-color:#ff5252}.alert--success{background-color:#4caf50}.alert--success,.alert--warning{color:#fff;border-color:rgba(0,0,0,.2)}.alert--warning{background-color:#ffc107}.alert--no-icon .alert__icon{display:none}@media screen and (max-width:576px){.alert__icon{display:none}}.avatar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center}.avatar .icon,.avatar img{height:42px;width:42px;border-radius:50%}.badge{position:relative}.badge:after{color:#fff;content:attr(data-badge);display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;font-family:Roboto,sans-serif;top:-11px;right:-22px;background-color:#1976d2;border-radius:50%;height:22px;width:22px;font-size:.9rem;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap}.badge--overlap.badge--left:after{left:0}.badge--overlap:after{top:0;right:0}.badge--icon:after{font-family:Material Icons}.badge--left:after{left:-22px}.breadcrumbs{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;margin:0;list-style-type:none}.breadcrumbs li:not(:last-child):after{color:#bdbdbd;content:attr(data-divider);vertical-align:middle}.breadcrumbs li:last-child a{color:#bdbdbd;pointer-events:none;cursor:default}.breadcrumbs--with-icons li:not(:last-child):after{font-family:Material Icons}.breadcrumbs__item{-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#1976d2;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;font-size:1rem;padding:0 1rem;height:40px;text-decoration:none;line-height:40px;-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1)}.breadcrumbs__item:hover{color:#757575}.breadcrumbs__item--disabled{color:#e0e0e0;pointer-events:none}.btn{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#e0e0e0;border-radius:2px;color:#fff;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;height:36px;font-size:14px;font-weight:500;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:6px;min-width:88px;outline:0;padding:0 16px;text-transform:uppercase;text-decoration:none;position:relative;vertical-align:middle}.btn,.btn:after{-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1)}.btn:after{border-radius:inherit;bottom:0;content:\"\";left:0;position:absolute;top:0;right:0;z-index:0}.btn.btn--disabled{box-shadow:none!important;pointer-events:none;opacity:.4}.btn.btn--disabled:not(.btn--loader){color:hsla(0,0%,100%,.3)}.btn__content{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1);z-index:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.btn--default,.btn--flat{color:#424242}.btn--flat{background-color:transparent!important;box-shadow:none!important}.btn--flat.btn--light:hover:after{background-color:rgba(0,0,0,.12)}.btn--flat.btn--light.btn--disabled{color:rgba(0,0,0,.26)}.btn--flat.btn--dark{color:#fff}.btn--flat.btn--dark:hover:after{background-color:hsla(0,0%,100%,.12)}.btn--flat.btn--dark.btn--disabled{color:hsla(0,0%,100%,.3)}.btn--raised{will-change:box-shadow;box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}.btn--raised:active{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.btn--icon{background:transparent;box-shadow:none!important;border-radius:50%;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:36px;width:36px;min-width:0;padding:0}.btn--icon:after{opacity:.12}.btn--icon:after,.btn--icon:hover{border-radius:50%}.btn--icon:hover:after{background-color:currentColor;opacity:.12}.btn--icon.btn--disabled{background-color:transparent!important;color:rgba(0,0,0,.26)!important;pointer-events:none}.btn--floating{min-width:0;height:56px;width:56px;padding:initial}.btn--floating,.btn--floating:after{border-radius:50%}.btn--floating .icon{height:24px;width:24px}.btn--floating.btn--small{height:40px;width:40px}.btn--floating.btn--small .icon{font-size:18px;height:18px;width:18px}.btn--floating.btn--large{height:72px;width:72px}.btn--floating.btn--large .icon{font-size:30px;height:30px;width:30px}.btn--light:hover:after{background-color:rgba(0,0,0,.12)}.btn--light.btn--disabled{color:rgba(0,0,0,.26)!important;opacity:1}.btn--light.btn--disabled:not(.btn--flat){background-color:rgba(0,0,0,.12)!important}.btn--dark:hover:after{background-color:hsla(0,0%,100%,.12)}.btn--dark.btn--disabled{color:hsla(0,0%,100%,.3)!important;opacity:1}.btn--dark.btn--disabled:not(.btn--flat){background-color:hsla(0,0%,100%,.12)!important}.btn--small{font-size:13px;height:28px}.btn--small.btn--icon{width:28px}.btn--large{font-size:15px;height:44px}.btn--large.btn--icon{width:44px}.btn--loader{pointer-events:none}.btn--loader .btn__content{opacity:0}.btn__loading{position:absolute;width:100%;height:100%;left:0;top:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.btn__loading .icon--left{margin-right:1rem;line-height:inherit}.btn__loading .icon--right{margin-left:1rem;line-height:inherit}.btn--outline{border:1px solid currentColor;background:transparent!important}.btn--outline,.btn--outline:hover{box-shadow:none}.btn--block{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;margin:6px 0;width:100%}.btn--round,.btn--round:after{border-radius:28px}.btn .icon--right{margin-left:16px}.btn .icon--left{margin-right:16px}.btn-dropdown{display:block;position:relative}.btn-dropdown input{text-align:left;border-right:1px solid transparent;-webkit-transition:border-right .3s cubic-bezier(.4,0,.6,1);transition:border-right .3s cubic-bezier(.4,0,.6,1)}.btn-dropdown .input-group--focused input+.icon{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.btn-dropdown .menu,.btn-dropdown .menu__activator{width:100%}.btn-dropdown .menu__content{border-top-left-radius:0;border-top-right-radius:0}.btn-dropdown--editable .input-group input,.btn-dropdown--editable .input-group label,.btn-dropdown--overflow .input-group input,.btn-dropdown--overflow .input-group label,.btn-dropdown--segmented .input-group input,.btn-dropdown--segmented .input-group label{height:40px;line-height:40px}.btn-dropdown--editable input,.btn-dropdown--editable label,.btn-dropdown--overflow input,.btn-dropdown--overflow label,.btn-dropdown--segmented input,.btn-dropdown--segmented label{padding-left:16px}.btn-dropdown--editable .input-group--focused .input-group__input,.btn-dropdown--overflow .input-group--focused .input-group__input,.btn-dropdown--segmented .input-group--focused .input-group__input{background-color:#fff;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.btn-dropdown--editable .input-group__input,.btn-dropdown--overflow .input-group__input,.btn-dropdown--segmented .input-group__input{-webkit-transition:.3s cubic-bezier(.4,0,.6,1);transition:.3s cubic-bezier(.4,0,.6,1)}.btn-dropdown--editable .input-group__input:hover,.btn-dropdown--overflow .input-group__input:hover,.btn-dropdown--segmented .input-group__input:hover{background-color:#fff}.btn-dropdown--editable .input-group__details,.btn-dropdown--overflow .input-group__details,.btn-dropdown--segmented .input-group__details{height:0;min-height:0;padding:0}.btn-dropdown--editable .input-group__details:after,.btn-dropdown--editable .input-group__hint,.btn-dropdown--overflow .input-group__details:after,.btn-dropdown--overflow .input-group__hint,.btn-dropdown--segmented .input-group__details:after,.btn-dropdown--segmented .input-group__hint{display:none}.btn-dropdown--light.btn-dropdown--editable .input-group--focused input,.btn-dropdown--light.btn-dropdown--segmented input{border-right-color:rgba(0,0,0,.12)}.btn-dropdown--light.btn-dropdown--editable .input-group,.btn-dropdown--light.btn-dropdown--overflow .input-group,.btn-dropdown--light.btn-dropdown--segmented .input-group{border-top:1px solid rgba(0,0,0,.12)}.btn-dropdown--light .input-group__hint:after{display:none}.btn-dropdown--dark.btn-dropdown--editable .input-group--focused input,.btn-dropdown--dark.btn-dropdown--segmented input{border-right-color:hsla(0,0%,100%,.12)}.btn-dropdown--dark.btn-dropdown--editable .input-group,.btn-dropdown--dark.btn-dropdown--overflow .input-group,.btn-dropdown--dark.btn-dropdown--segmented .input-group{border-top:1px solid hsla(0,0%,100%,.12)}.btn-dropdown--dark .input-group__hint:after{display:none}.btn-toggle{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;border-radius:2px;-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1);will-change:background,box-shadow}.btn-toggle .btn{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;min-width:auto;padding:0 8px;margin:0;opacity:.4;border-radius:0}.btn-toggle .btn:not(:last-child){border-right:1px solid transparent}.btn-toggle .btn:after{display:none}.btn-toggle .btn[data-selected]{opacity:1;background:rgba(0,0,0,.12)}.btn-toggle .btn[data-selected]:not(:last-child):not([data-only-child]){border-right-color:rgba(0,0,0,.12)}.btn-toggle .btn .icon{font-size:30px}.btn-toggle .btn span+.icon{font-size:medium;margin-left:10px}.btn-toggle--selected,.card{background:#fff;box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}.card{position:relative;border-radius:2px;min-width:0}.card--raised{box-shadow:0 1px 8px rgba(0,0,0,.2),0 3px 4px rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.12)!important}.card--hover{cursor:pointer;-webkit-transition:all .4s cubic-bezier(.25,.8,.25,1);transition:all .4s cubic-bezier(.25,.8,.25,1);-webkit-transition-property:box-shadow;transition-property:box-shadow}.card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)!important}.card--horizontal{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap}.card--horizontal>.card__row{-webkit-box-flex:0;-ms-flex:0 1 30%;flex:0 1 30%}.card__column,.card__row{display:-webkit-box;display:-ms-flexbox;display:flex}.card__column:first-child,.card__row:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.card__column:last-child,.card__row:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.card__column{-ms-flex:1;flex:1;-webkit-box-orient:vertical;-ms-flex-flow:column nowrap;flex-flow:column nowrap}.card__column,.card__row{-webkit-box-flex:1;-webkit-box-direction:normal}.card__row{-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:auto;-ms-flex:1 1 auto;flex:1 1 auto;-webkit-box-orient:horizontal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;min-height:36px}.card__row .card__text{height:100%}.card__row--actions{padding:8px;height:52px;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;width:100%}.card__row--actions .btn{margin:0;padding:0 8px}.card__row--actions-stacked{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin:0!important;padding:0 0 8px!important}.card__row--actions-stacked>.btn{width:100%;height:48px;margin:0!important;padding:0 16px!important;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.card__row--actions-stacked>.btn span{display:table}.card__title{font-size:1.5rem;font-weight:400;letter-spacing:.1rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-ms-flex-item-align:center;align-self:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:16px}.card__title .btn{margin:0}.card__text{padding:16px;width:100%}.carousel{height:500px;width:100%;background:#000;position:relative;overflow:hidden;box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}.carousel__item{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-flex:1;-ms-flex:1 0 100%;flex:1 0 100%;height:100%;width:100%;background-size:cover;background-position:50%;-webkit-transition:.2s ease-out;transition:.2s ease-out}.carousel__left,.carousel__right{position:absolute;top:50%;z-index:2;left:5px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.carousel__left .btn,.carousel__right .btn{color:#fff;margin:0!important;height:auto;width:auto}.carousel__left .btn i,.carousel__right .btn i{font-size:48px}.carousel__left .btn:hover,.carousel__right .btn:hover{background:none}.carousel__right{left:auto;right:5px}.carousel__controls{background:rgba(0,0,0,.5);-webkit-box-align:center;-ms-flex-align:center;align-items:center;bottom:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;left:0;position:absolute;height:50px;list-style-type:none;width:100%;z-index:2}.carousel__controls__item{color:#fff;margin:0 1rem!important}.carousel__controls__item i{opacity:.5;-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1)}.carousel__controls__item--active i{opacity:1;vertical-align:middle;font-size:2rem!important}.carousel__controls__item:hover{background:none}.carousel__controls__item:hover i{opacity:.8}.chip{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#e0e0e0;border:1px solid #e0e0e0;border-radius:2rem;cursor:default;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;font-size:14px;padding:0 12px;margin:8px;height:32px;-webkit-transition:.3s cubic-bezier(.4,0,.6,1);transition:.3s cubic-bezier(.4,0,.6,1);vertical-align:middle;white-space:nowrap}.chip .avatar{border-radius:50%;height:32px;width:32px;min-width:32px;margin-left:-14px;margin-right:8px;color:#fff}.chip .avatar img{width:100%;height:100%}.chip:focus{box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);outline:none}.chip--label{border-radius:0}.chip--outline{background:transparent!important;color:#9e9e9e}.chip--small{height:26px}.chip--small .avatar{height:26px;width:26px;min-width:26px}.chip__close{color:inherit;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-decoration:none;font-size:24px;margin-left:4px;margin-right:-2px;-webkit-transition:.3s cubic-bezier(.4,0,.6,1);transition:.3s cubic-bezier(.4,0,.6,1)}.chip__close:hover{opacity:.8}.chip--removable{padding:0 4px 0 12px}.chip--select-multi{margin:8px 8px 8px 0}.chip .icon--right{margin-left:4px}.chip .icon--left{margin-right:4px}.datatable thead th.column.sortable{cursor:pointer}.datatable thead th.column.sortable i{color:rgba(0,0,0,.38);font-size:16px;vertical-align:sub;display:inline-block;opacity:0;-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1)}.datatable thead th.column.sortable:hover{color:rgba(0,0,0,.87)}.datatable thead th.column.sortable:hover i{opacity:.6}.datatable thead th.column.sortable.active{-webkit-transform:none;transform:none;color:rgba(0,0,0,.87)}.datatable thead th.column.sortable.active i{color:rgba(0,0,0,.87);opacity:1}.datatable thead th.column.sortable.active.asc i{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.datatable tfoot .input-group__details{display:none}.datatable__actions{color:rgba(0,0,0,.54);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:12px}.datatable__actions .btn{color:inherit}.datatable__actions .btn:last-of-type{margin-left:18px}.datatable__actions__pagination{text-align:center;margin:0 26px 0 32px}.datatable__actions__select{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.datatable__actions__select .input-group--select{margin:13px 0 13px 34px;position:static}.datatable__actions__select .input-group--select .input-group__selections__comma{color:rgba(0,0,0,.54)!important;font-size:12px;padding-top:6px}.datatable__actions__select .input-group--select .input-group__append-icon{color:rgba(0,0,0,.54)!important}.picker--date{color:#fff;width:100%}.picker--date__years{background:#fff;color:#000;font-size:18px;font-weight:400;list-style-type:none;max-height:300px;overflow:auto;padding:0;text-align:center}.picker--date__years li{cursor:pointer;margin:16px 0;-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1)}.picker--date__years li:hover{color:#1976d2}.picker--date__years li.active{color:#1976d2;font-size:24px;font-weight:500;margin:20px 0}.picker--date__title{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:wrap;flex-wrap:wrap}.picker--date__title-year{font-size:14px}.picker--date__title-date{font-size:34px}.picker--date__title-date>div{position:relative}.picker--date__title-date,.picker--date__title-year{font-weight:500;-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1);width:100%}.picker--date__title-date:not(.active),.picker--date__title-year:not(.active){cursor:pointer;opacity:.6}.picker--date__title-date:hover,.picker--date__title-year:hover{opacity:1}.picker--date__header{color:#000;padding:4px 16px}.picker--date__header-selector{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;position:relative}.picker--date__header-selector .btn{color:#000;margin:0}.picker--date__header-selector .icon{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.picker--date__header-selector-date{-webkit-box-flex:1;-ms-flex:1;flex:1;text-align:center;position:relative;overflow:hidden}.picker--date__header-selector-date strong{-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1);display:block;width:100%}.picker--date__table{position:relative}.picker--date table{-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1);top:0}.picker--date table thead th{padding:8px 0}.picker--date table th{color:rgba(0,0,0,.54);font-weight:600;font-size:12px}.picker--date table td,.picker--date table th{text-align:center;width:45px}.picker--date table .btn{margin:0}.picker--date table .btn__content{overflow:visible;-webkit-transition:none;transition:none}.picker--date table .btn.btn--floating.btn--current:not(.btn--active){color:rgba(25,118,210,.6)}.picker--date table .btn.btn--floating{height:32px;width:32px}.picker--date table .btn.btn--floating:after{background:#1976d2!important;opacity:0;-webkit-transform:scale(0);transform:scale(0)}.picker--date table .btn.btn--floating:not(.btn--active):hover{color:#fff}.picker--date table .btn.btn--floating:not(.btn--active):hover:after{opacity:.6;-webkit-transform:scale(1);transform:scale(1)}.picker--date table .btn.btn--floating.btn--active{color:#fff}.picker--date table .btn.btn--floating.btn--active:after{background:#1976d2!important;opacity:1;-webkit-transform:none;transform:none}.picker--date.picker--dark .picker--date__header,.picker--date.picker--dark .picker--date__years{background:#424242;color:#fff}.picker--date.picker--dark .picker--date__header .btn,.picker--date.picker--dark .picker--date__table table .btn,.picker--date.picker--dark .picker--date__table table td,.picker--date.picker--dark .picker--date__table table th,.picker--date.picker--dark .picker--date__years .btn{color:#fff}.picker--date.picker--dark .picker--date__table table .btn.btn--floating:after{background:#448aff!important}.picker--date.picker--dark .picker--date__table table .btn--active{color:#000}.picker--date.picker--dark .picker--date__table table .btn--floating.btn--current:not(.btn--active){color:#448aff}.picker--landscape .picker--date__years{margin-left:170px;width:330px}.dialog{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);background:#fff;border-radius:2px;margin:24px 40px;overflow-y:auto;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out;z-index:1001}.dialog:not(.dialog--fullscreen){max-width:90%;max-height:90%}.dialog__container{display:inline-block;vertical-align:middle}.dialog>.card .card__title{padding:12px 24px}.dialog>.card .card__text{padding:20px 24px 24px}.dialog>.card .card__row--actions{padding:8px 0}.dialog>.card .card__row--actions .btn{min-width:64px;margin-right:8px}.dialog--fullscreen{margin:0;width:100%;height:100%;position:fixed;overflow-y:auto;top:0;left:0;padding-top:56px}.dialog--fullscreen .toolbar{height:56px;padding:0!important;position:fixed;top:0}.dialog--fullscreen .toolbar__title{font-size:20px;padding:20px 0}.dialog--fullscreen .toolbar .btn:first-child{max-width:24px;max-height:24px;margin:0 32px 0 16px!important}.dialog--fullscreen .toolbar .btn:last-child{margin:0!important;height:100%;font-size:14px}.dialog--fullscreen .card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.dialog--scrollable .card__row:not(.card__row--actions){overflow-y:auto}.divider{background:rgba(0,0,0,.12);border:none;display:block;height:1px;-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%}.divider--inset{margin-left:72px;width:calc(100% - 72px)}.divider--light{background:hsla(0,0%,100%,.12)}.expansion-panel{background:#fff;text-align:left;list-style-type:none;padding:0;width:100%;box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}.expansion-panel>li{border:1px solid #ddd}.expansion-panel>li:not(:first-child){border-top:none}.expansion-panel__header{display:-webkit-box;display:-ms-flexbox;display:flex;cursor:pointer;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:3rem;position:relative;padding-left:1rem}.expansion-panel__header i{margin-right:1rem}.expansion-panel__header:after{content:\"\\E313\";font-family:Material Icons;font-size:1.5rem;position:absolute;right:15px;top:calc(50% - 16px);color:inherit;-webkit-transition:-webkit-transform .3s cubic-bezier(0,0,.2,1);transition:-webkit-transform .3s cubic-bezier(0,0,.2,1);transition:transform .3s cubic-bezier(0,0,.2,1);transition:transform .3s cubic-bezier(0,0,.2,1),-webkit-transform .3s cubic-bezier(0,0,.2,1)}.expansion-panel__header--active:after{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.expansion-panel__body{background-color:rgba(0,0,0,.03);-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1)}.expansion-panel__body .card{border-radius:0;box-shadow:0 0 0 rgba(0,0,0,.2),0 0 0 rgba(0,0,0,.14),0 0 0 rgba(0,0,0,.12)}.expansion-panel__body:last-child{border-bottom:1px solid #ddd}.icon{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.icon--large{font-size:2.5rem;min-width:3.5rem;width:3.5rem;height:3.5rem}.icon--medium{font-size:2rem;min-width:3rem;width:3rem;height:3rem}.icon--x-large{font-size:3rem;min-width:4rem;width:4rem;height:4rem}.input-group{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-ms-flex-wrap:wrap;flex-wrap:wrap;min-width:24px;margin:18px 0;position:relative;width:100%;outline:none}.input-group label{font-size:16px;line-height:32px;height:30px;max-width:80%;-webkit-transition:.4s cubic-bezier(.25,.8,.25,1);transition:.4s cubic-bezier(.25,.8,.25,1);z-index:0}.input-group__input{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1 0 100%;flex:1 0 100%;min-width:0;min-height:30px}.input-group--disabled .input-group__details:before{background-color:transparent;background-position:bottom;background-size:3px 1px;background-repeat:repeat-x}.input-group--disabled.input-group--light .input-group__details:before{background-image:-webkit-linear-gradient(left,rgba(0,0,0,.38),rgba(0,0,0,.38) 33%,transparent 0);background-image:linear-gradient(90deg,rgba(0,0,0,.38) 0,rgba(0,0,0,.38) 33%,transparent 0)}.input-group--disabled.input-group--dark .input-group__details:before{background-image:-webkit-linear-gradient(left,hsla(0,0%,100%,.38),hsla(0,0%,100%,.38) 33%,transparent 0);background-image:linear-gradient(90deg,hsla(0,0%,100%,.38) 0,hsla(0,0%,100%,.38) 33%,transparent 0)}.input-group--focused .input-group__details:after{width:100%}.input-group--error .input-group__details:after{background-color:#ff5252}.input-group--light .input-group__hint{color:rgba(0,0,0,.54)}.input-group--light .input-group__details:before{background-color:rgba(0,0,0,.12)}.input-group--light .icon{color:rgba(0,0,0,.6)}.input-group--dark .input-group__hint{color:hsla(0,0%,100%,.7)}.input-group--dark .input-group__details:before{background-color:hsla(0,0%,100%,.12)}.input-group--dark .icon{color:hsla(0,0%,100%,.6)}.input-group__icon-cb{cursor:pointer}.input-group .slide-y-transition-leave,.input-group .slide-y-transition-leave-to{position:absolute}.input-group__details{display:-webkit-box;display:-ms-flexbox;display:flex;padding-top:4px;-webkit-box-flex:1;-ms-flex:1 0 100%;flex:1 0 100%;font-size:12px;min-height:22px;position:relative;width:100%}.input-group__details:after,.input-group__details:before{content:\"\";position:absolute;left:0}.input-group__details:after{background-color:#1976d2;top:-1px;height:2px;-webkit-transition:.3s cubic-bezier(.4,0,.2,1);transition:.3s cubic-bezier(.4,0,.2,1);width:0;z-index:1}.input-group__details:before{top:0;height:1px;width:100%;z-index:0}.input-group--hide-details .input-group__details{min-height:0}.input-group .input-group__error,.input-group__hint{-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1)}.input-group .input-group__error{-webkit-box-flex:1;-ms-flex:1 0;flex:1 0;color:#ff5252}.footer{color:#fff;height:45px;line-height:45px;position:relative;z-index:4;background:#1976d2;padding:0 1rem}.list{list-style-type:none;padding:0;padding-top:8px;padding-bottom:8px;-webkit-transition:height .4s cubic-bezier(.4,0,.2,1);transition:height .4s cubic-bezier(.4,0,.2,1)}.list .input-group{margin:0}.list>.list__item~.list__item{margin-top:0}.list__item{position:relative}.list__tile{color:#424242;display:-webkit-box;display:-ms-flexbox;display:flex;height:48px;text-decoration:none;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 16px;margin:0;position:relative}.list__tile,.list__tile:after{-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1)}.list__tile:after{content:\"\";position:absolute;left:0;top:0;height:1px;opacity:0;width:100%;background-color:rgba(0,0,0,.12)}.list__tile--highlighted,a.list__tile:hover{background:rgba(0,0,0,.12)}.list__tile__action,.list__tile__avatar,.list__tile__content{height:100%}.list__tile__sub-title,.list__tile__title{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%}.list__tile__title{font-size:16px;line-height:1.15;font-weight:500;-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1);position:relative;text-align:left}.list__tile__sub-title{color:#9e9e9e;font-size:14px;line-height:1.3;font-weight:400}.list__tile .avatar,.list__tile__action{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;min-width:56px}.list__tile__action{display:-webkit-box;display:-ms-flexbox;display:flex}.list__tile__action,.list__tile__action .input-group{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.list__tile__action .input-group__details{display:none}.list__tile__action .icon{-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1)}.list__tile__action-text{color:#9e9e9e;font-size:12px}.list__tile__action--stack{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding-top:8px;padding-bottom:8px;white-space:nowrap;-ms-flex-direction:column;flex-direction:column}.list__tile__action--stack,.list__tile__content{-webkit-box-orient:vertical;-webkit-box-direction:normal}.list__tile__content{text-align:left;-webkit-box-flex:0;-ms-flex:0 1 100%;flex:0 1 100%;font-size:15px;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-direction:column;flex-direction:column}.list__tile__content+.avatar,.list__tile__content+.list__tile__action:not(.list__tile__action--stack){-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.list__tile--active .list__tile__title{color:#1976d2}.list__tile--disabled{opacity:.4;pointer-events:none}.list__tile--avatar{height:56px}.list__tile--select-multi{padding:0 10px}.list--dense{padding-top:4px}.list--dense .list__tile{height:40px;font-size:13px}.list--dense .list__tile__title{font-size:13px;font-weight:400}.list--dense .list__tile__sub-title{font-size:13px}.list--two-line .list__tile{height:72px}.list--two-line.list--dense .list__tile{height:60px}.list--three-line .list__tile{height:88px}.list--three-line .list__tile__sub-title{white-space:normal;-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box}.list--three-line.list--dense .list__tile{height:76px}.list--group{position:relative;padding:0}.list--group:after{content:\"\";position:absolute;left:0;bottom:0;height:1px;opacity:0;width:100%;background-color:rgba(0,0,0,.12)}.list--group .list__tile{padding-left:72px}.list--group .list__tile .list__tile__title{font-weight:300}.list--group .list__tile--active .list__tile__title{color:#1976d2;font-weight:300}.list--group__header+.list--group:after{opacity:1}.list--group__header--active .list__tile{background:rgba(0,0,0,.12)}.list--group__header--active .list__tile:after{opacity:1}.list--group__header--active .list__tile .list__tile__title{color:inherit}.list--group__header--active .list__tile .list__tile__action:last-of-type .icon{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.list--group__header--no-action+.list--group .list__tile{padding-left:16px}.list--subheader{padding-top:0}.menu{display:inline-block;vertical-align:middle}.menu--disabled,.menu--disabled .menu__activator{cursor:not-allowed}.menu__activator{-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;position:relative}.menu__content{background-color:#fff;position:absolute;display:inline-block;border-radius:2px;overflow-y:auto;overflow-x:hidden;z-index:5;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.menu-transition-enter .list__tile{min-width:0;-webkit-transition-delay:.3s;transition-delay:.3s;opacity:0;-webkit-transform:translateY(-15px);transform:translateY(-15px);pointer-events:none}.menu-transition-enter-to .list__tile{pointer-events:auto;opacity:1}.menu-transition-leave-to{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.menu-transition-enter,.menu-transition-leave-to{opacity:0}.menu-transition-enter-to,.menu-transition-leave{opacity:1}.menu-transition-enter-active,.menu-transition-leave-active{-webkit-transition:all .4s cubic-bezier(.25,.8,.25,1);transition:all .4s cubic-bezier(.25,.8,.25,1)}.toolbar{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#1976d2;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;height:64px;position:relative;padding:0 14px;width:100%;z-index:6;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px rgba(0,0,0,.14),0 1px 10px rgba(0,0,0,.12)}.toolbar ul{list-style:none}.toolbar li{height:100%}.toolbar i{font-size:24px}.toolbar .menu__activator{height:100%}.toolbar .btn:not(.toolbar__side-icon){margin:0 6px}.toolbar .btn:not(.toolbar__side-icon):first-child{margin-left:-6px}.toolbar .btn:not(.toolbar__side-icon):last-child{margin-right:0}.toolbar--fixed{position:fixed;top:0;left:0}.toolbar__sub{-webkit-box-flex:1;-ms-flex:1 0 100%;flex:1 0 100%;padding:24px 0 24px 72px}.toolbar__side-icon{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;margin-left:10px}.toolbar__logo{color:#fff;font-size:3rem;-webkit-box-flex:1;-ms-flex:1;flex:1;text-decoration:none;padding:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.toolbar__title{color:#fff;font-size:20px;-webkit-box-flex:1;-ms-flex:1;flex:1;padding:0 16px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.toolbar__title:first-child{padding-left:2px}.toolbar__items{list-style-type:none;padding:0;background-color:inherit;height:100%;max-width:100%}.toolbar__item,.toolbar__items,.toolbar__items>li{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.toolbar__item{color:#fff;padding:0 1.2rem;text-decoration:none;-webkit-transition:all .3s ease-out;transition:all .3s ease-out;position:relative;height:100%;white-space:nowrap}.toolbar__item i{font-size:2rem}.toolbar__item--active,.toolbar__item:hover{background:rgba(0,0,0,.1)}.toolbar__item--disabled{opacity:.5;pointer-events:none}.toolbar .input-group{margin:0 0 0 16px;-webkit-box-flex:1;-ms-flex:1;flex:1}.toolbar .input-group--dark .icon{color:#fff}.toolbar .input-group--light .icon{color:#000}.toolbar .input-group--dark.input-group--focused.input-group--append-icon .icon,.toolbar .input-group--dark.input-group--focused.input-group--prepend-icon .icon{color:#fff}.toolbar .input-group--light.input-group--focused.input-group--append-icon .icon,.toolbar .input-group--light.input-group--focused.input-group--prepend-icon .icon{color:#000}.overlay{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;position:fixed;width:100%;height:100%;background-color:rgba(0,0,0,.3);-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1);top:0;left:0;opacity:0;-webkit-filter:blur(10%);filter:blur(10%);pointer-events:none;z-index:1000}.overlay--active{opacity:1;pointer-events:auto}.pagination{list-style-type:none;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;padding:0;margin:0;height:40px;align-items:center}.pagination a{-webkit-transition:.3s cubic-bezier(0,0,.2,1);transition:.3s cubic-bezier(0,0,.2,1)}.pagination a:hover{box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}.pagination--circle .pagination__item,.pagination--circle .pagination__more,.pagination--circle .pagination__navigation{border-radius:50%}.pagination--disabled{pointer-events:none;opacity:.6}.pagination__item{box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);border-radius:4px;color:#000;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:transparent;height:34px;width:34px;margin:.3rem;text-decoration:none}.pagination__item--active{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px rgba(0,0,0,.14),0 1px 10px rgba(0,0,0,.12);background:#1976d2;color:#fff}.pagination__navigation{box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-decoration:none;color:#616161;height:2rem;border-radius:4px;width:2rem;margin:.3rem 15px}.pagination__navigation .icon{font-size:2rem;-webkit-transition:.2s cubic-bezier(.4,0,.6,1);transition:.2s cubic-bezier(.4,0,.6,1);vertical-align:middle}.pagination__navigation--disabled{opacity:.6;pointer-events:none}.pagination__more{margin:.3rem;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:2rem;width:2rem}.parallax{position:relative;overflow:hidden}.parallax__image-container{position:absolute;top:0;left:0;right:0;bottom:0;z-index:1}.parallax__image{position:absolute;bottom:0;left:50%;min-width:100%;min-height:100%;display:none;z-index:1}.parallax__content{height:100%;z-index:2;position:relative;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:0 1rem}.parallax__content,.picker{color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.picker{border-radius:2px;width:290px}.picker .card__row--actions{border:none;margin-top:-20px}.picker__title{background:#1976d2;height:105px;border-top-left-radius:2px;border-top-right-radius:2px;padding:16px}.picker__body{color:#000;height:290px;overflow:hidden;position:relative}.picker--dark .picker__body{background:#424242}.picker--dark .picker__title{background:#616161}.picker--landscape{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;width:500px}.picker--landscape .picker__title{border-top-right-radius:0;border-bottom-right-radius:0;-webkit-box-flex:0;-ms-flex:0 1 170px;flex:0 1 170px;width:170px;height:auto;position:absolute;top:0;left:0;height:100%;z-index:1}.picker--landscape .picker__body{-webkit-box-flex:1;-ms-flex:1 0;flex:1 0;width:330px;margin-left:170px}.picker--landscape .card__row--actions{margin-left:170px;width:330px}.progress-circular{position:relative;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.progress-circular--indeterminate svg{-webkit-animation:progress-circular-rotate 1.4s linear infinite;animation:progress-circular-rotate 1.4s linear infinite;-webkit-transform-origin:center center;transform-origin:center center;width:100%;height:100%;margin:auto;position:absolute;top:0;bottom:0;left:0;right:0;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;z-index:0}.progress-circular--indeterminate .progress-circular__overlay{-webkit-animation:progress-circular-dash 1.4s ease-in-out infinite;animation:progress-circular-dash 1.4s ease-in-out infinite;stroke-linecap:round;stroke-dasharray:1,200;stroke-dashoffset:0px}.progress-circular__underlay{stroke:rgba(0,0,0,.1);z-index:1}.progress-circular__overlay{stroke:currentColor;z-index:2;-webkit-transition:all .6s ease-in-out;transition:all .6s ease-in-out}.progress-circular__info{position:absolute;top:50%;left:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}@-webkit-keyframes progress-circular-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0px}50%{stroke-dasharray:100,200;stroke-dashoffset:-15px}to{stroke-dasharray:100,200;stroke-dashoffset:-125px}}@keyframes progress-circular-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0px}50%{stroke-dasharray:100,200;stroke-dashoffset:-15px}to{stroke-dasharray:100,200;stroke-dashoffset:-125px}}@-webkit-keyframes progress-circular-rotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes progress-circular-rotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.progress-linear{background:transparent;margin:1rem 0;overflow:hidden;width:100%;position:relative}.progress-linear .progress-linear__bar{background:#84bbf0}.progress-linear .progress-linear__bar__determinate,.progress-linear .progress-linear__bar__indeterminate:after,.progress-linear .progress-linear__bar__indeterminate:before{background:#1976d2}.progress-linear__bar{width:100%;position:relative;z-index:2}.progress-linear__bar,.progress-linear__bar__determinate{height:inherit;-webkit-transition:.3s ease-in;transition:.3s ease-in}.progress-linear__bar__indeterminate:after,.progress-linear__bar__indeterminate:before{content:\"\";height:inherit;position:absolute;left:0;top:0;bottom:0;will-change:left,right;width:auto}.progress-linear__bar__indeterminate:before{-webkit-animation:indeterminate;animation:indeterminate;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.progress-linear__bar__indeterminate:after{-webkit-animation:indeterminate-short;animation:indeterminate-short;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.progress-linear--query .progress-linear__bar__indeterminate:before{-webkit-animation:query;animation:query;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.progress-linear--query .progress-linear__bar__indeterminate:after{-webkit-animation:query-short;animation:query-short;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.progress-linear--secondary .progress-linear__bar{background:#a1a1a1}.progress-linear--secondary .progress-linear__bar__determinate,.progress-linear--secondary .progress-linear__bar__indeterminate:after,.progress-linear--secondary .progress-linear__bar__indeterminate:before{background:#424242}.progress-linear--success .progress-linear__bar{background:#a5d8a7}.progress-linear--success .progress-linear__bar__determinate,.progress-linear--success .progress-linear__bar__indeterminate:after,.progress-linear--success .progress-linear__bar__indeterminate:before{background:#4caf50}.progress-linear--info .progress-linear__bar{background:#90cbf9}.progress-linear--info .progress-linear__bar__determinate,.progress-linear--info .progress-linear__bar__indeterminate:after,.progress-linear--info .progress-linear__bar__indeterminate:before{background:#2196f3}.progress-linear--warning .progress-linear__bar{background:#ffe083}.progress-linear--warning .progress-linear__bar__determinate,.progress-linear--warning .progress-linear__bar__indeterminate:after,.progress-linear--warning .progress-linear__bar__indeterminate:before{background:#ffc107}.progress-linear--error .progress-linear__bar{background:#ffa8a8}.progress-linear--error .progress-linear__bar__determinate,.progress-linear--error .progress-linear__bar__indeterminate:after,.progress-linear--error .progress-linear__bar__indeterminate:before{background:#ff5252}@-webkit-keyframes indeterminate{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@-webkit-keyframes indeterminate-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@-webkit-keyframes query{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@keyframes query{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@-webkit-keyframes query-short{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@keyframes query-short{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}.ripple__container{border-radius:inherit;width:100%;height:100%;z-index:0}.ripple__animation,.ripple__container{color:inherit;position:absolute;left:0;top:0;overflow:hidden;pointer-events:none}.ripple__animation{border-radius:50%;background:currentColor;opacity:0;-webkit-transition:.4s cubic-bezier(0,0,.2,1);transition:.4s cubic-bezier(0,0,.2,1);will-change:opacity}.ripple__animation--enter{-webkit-transition:none;transition:none}.ripple__animation--visible{opacity:.15}.input-group--select .input-group--select__autocomplete{opacity:0;height:0}.input-group--select .input-group__append-icon{-webkit-transition:.3s cubic-bezier(0,0,.2,1);transition:.3s cubic-bezier(0,0,.2,1)}.input-group--select.input-group--focused.input-group--dirty .input-group--select__autocomplete{margin:8px 0}.input-group--select.input-group--focused .input-group--select__autocomplete{opacity:1;height:30px}.input-group--select.input-group--focused .input-group__append-icon{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.input-group--select .input-group__input,.input-group--select input{cursor:pointer}.input-group--select.input-group--disabled{cursor:not-allowed;pointer-events:none}.input-group--select .input-group__selections{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;position:relative}.input-group--select .input-group__selections>div{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-flex:1;-ms-flex:1;flex:1}.input-group--select .input-group__selections__comma{display:inline-block;font-size:16px;height:30px;padding-top:4px;padding-right:4px}.input-group--select.input-group--light .input-group__selections__comma{color:rgba(0,0,0,.87)}.input-group--select.input-group--light .input-group__selections__comma--active{color:#1976d2}.input-group--select.input-group--dark .input-group__selections__comma{color:#fff}.input-group--select .menu{display:inline}.input-group--select .fade-transition-leave-active{left:0}.input-group--select:not(.input-group--multiple) .menu-transition-enter .list__tile--active{opacity:1;-webkit-transform:none;transform:none;pointer-events:auto}.input-group--select:not(.input-group--multiple) .menu-transition-enter-to .list__tile--active{-webkit-transform:none;transform:none}.input-group.input-group--selection-controls{display:-webkit-box;display:-ms-flexbox;display:flex}.input-group.input-group--selection-controls .icon{cursor:pointer;position:absolute;left:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transition:.3s cubic-bezier(.4,0,.6,1);transition:.3s cubic-bezier(.4,0,.6,1)}.input-group.input-group--selection-controls .input-group__details:after,.input-group.input-group--selection-controls .input-group__details:before{display:none}.input-group.input-group--selection-controls .input-group__input{width:100%;position:relative}.input-group.input-group--selection-controls .input-group__input .icon{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center;height:24px;margin:auto}.input-group--selection-controls label{cursor:pointer;margin-left:32px;position:absolute;left:0;z-index:1}.input-group--selection-controls__ripple{border-radius:50%;height:48px;width:48px;cursor:pointer;position:absolute;-webkit-transform:translate3d(-12px,-50%,0);transform:translate3d(-12px,-50%,0);-webkit-transform-origin:center center;transform-origin:center center;top:50%;left:0}.input-group--selection-controls__ripple:before{content:\"\";position:absolute;width:36px;height:36px;background:currentColor;border-radius:50%;left:50%;top:50%;-webkit-transform:translate3d(-50%,-50%,0) scale(.3);transform:translate3d(-50%,-50%,0) scale(.3);opacity:0;-webkit-transition:.4s cubic-bezier(0,0,.2,1);transition:.4s cubic-bezier(0,0,.2,1);-webkit-transform-origin:center center;transform-origin:center center}.input-group.input-group--selection-controls{z-index:0}.input-group.input-group--selection-controls.switch .input-group--selection-controls__container{position:relative}.input-group.input-group--selection-controls.switch .input-group--selection-controls__toggle{color:inherit;position:absolute;height:14px;top:50%;left:0;width:34px;border-radius:8px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.input-group.input-group--selection-controls.switch .input-group--selection-controls__toggle--active{background:currentColor!important;opacity:.5}.input-group.input-group--selection-controls.switch .input-group--selection-controls__ripple{-webkit-transform:translate3d(-15px,-24px,0);transform:translate3d(-15px,-24px,0);-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1);z-index:1}.input-group.input-group--selection-controls.switch .input-group--selection-controls__ripple:after{content:\"\";position:absolute;display:inline-block;cursor:pointer;width:20px;border-radius:50%;top:50%;left:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);height:20px;box-shadow:0 1px 3px rgba(0,0,0,.2),0 1px 1px rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12)}.input-group.input-group--selection-controls.switch .input-group--selection-controls__ripple--active{color:inherit!important;-webkit-transform:translate3d(2px,-24px,0);transform:translate3d(2px,-24px,0)}.input-group.input-group--selection-controls.switch .input-group--selection-controls__ripple--active:after{background:currentColor!important}.input-group.input-group--selection-controls.switch label{margin-left:44px}.input-group--selection-controls.input-group--tab-focused .input-group--selection-controls__ripple:before{-webkit-transform:translate3d(-50%,-50%,0) scale(1);transform:translate3d(-50%,-50%,0) scale(1);opacity:.15}.input-group--selection-controls.switch.input-group--light label{color:#424242}.input-group--selection-controls.switch.input-group--light .input-group--selection-controls__toggle{background:rgba(0,0,0,.38)}.input-group--selection-controls.switch.input-group--light .input-group--selection-controls__ripple{color:rgba(0,0,0,.38)}.input-group--selection-controls.switch.input-group--light .input-group--selection-controls__ripple:after{background:#fafafa}.input-group--selection-controls.switch.input-group--light.input-group--selection-controls__container--disabled .input-group--selection-controls__toggle{background:rgba(0,0,0,.12)}.input-group--selection-controls.switch.input-group--light.input-group--selection-controls__container--disabled .input-group--selection-controls__ripple{color:rgba(0,0,0,.12)}.input-group--selection-controls.switch.input-group--light.input-group--selection-controls__container--disabled .input-group--selection-controls__ripple:after{background:#bdbdbd}.input-group--selection-controls.switch.input-group--dark label{color:#fff}.input-group--selection-controls.switch.input-group--dark .input-group--selection-controls__toggle{background:hsla(0,0%,100%,.3)}.input-group--selection-controls.switch.input-group--dark .input-group--selection-controls__ripple{color:hsla(0,0%,100%,.3)}.input-group--selection-controls.switch.input-group--dark .input-group--selection-controls__ripple:after{background:#bdbdbd}.input-group--selection-controls.switch.input-group--dark.input-group--selection-controls__container--disabled .input-group--selection-controls__toggle{background:hsla(0,0%,100%,.1)}.input-group--selection-controls.switch.input-group--dark.input-group--selection-controls__container--disabled .input-group--selection-controls__ripple{color:hsla(0,0%,100%,.1)}.input-group--selection-controls.switch.input-group--dark.input-group--selection-controls__container--disabled .input-group--selection-controls__ripple:after{background:#424242}.input-group--selection-controls.checkbox.input-group--light label,.input-group--selection-controls.radio.input-group--light label{color:#000}.input-group--selection-controls.checkbox.input-group--light .icon,.input-group--selection-controls.checkbox.input-group--light .input-group--selection-controls__ripple,.input-group--selection-controls.radio.input-group--light .icon,.input-group--selection-controls.radio.input-group--light .input-group--selection-controls__ripple{color:rgba(0,0,0,.54)}.input-group--selection-controls.checkbox.input-group--light.input-group--active .icon,.input-group--selection-controls.checkbox.input-group--light.input-group--active .input-group--selection-controls__ripple,.input-group--selection-controls.radio.input-group--light.input-group--active .icon,.input-group--selection-controls.radio.input-group--light.input-group--active .input-group--selection-controls__ripple{color:inherit}.input-group--selection-controls.checkbox.input-group--light.input-group--disabled .icon,.input-group--selection-controls.checkbox.input-group--light.input-group--disabled .input-group--selection-controls__ripple,.input-group--selection-controls.radio.input-group--light.input-group--disabled .icon,.input-group--selection-controls.radio.input-group--light.input-group--disabled .input-group--selection-controls__ripple{color:rgba(0,0,0,.26)}.input-group--selection-controls.checkbox.input-group--dark label,.input-group--selection-controls.radio.input-group--dark label{color:#fff}.input-group--selection-controls.checkbox.input-group--dark .icon,.input-group--selection-controls.checkbox.input-group--dark .input-group--selection-controls__ripple,.input-group--selection-controls.radio.input-group--dark .icon,.input-group--selection-controls.radio.input-group--dark .input-group--selection-controls__ripple{color:hsla(0,0%,100%,.7)}.input-group--selection-controls.checkbox.input-group--dark.input-group--active .icon,.input-group--selection-controls.checkbox.input-group--dark.input-group--active .input-group--selection-controls__ripple,.input-group--selection-controls.radio.input-group--dark.input-group--active .icon,.input-group--selection-controls.radio.input-group--dark.input-group--active .input-group--selection-controls__ripple{color:inherit}.input-group--selection-controls.checkbox.input-group--dark.input-group--disabled .icon,.input-group--selection-controls.checkbox.input-group--dark.input-group--disabled .input-group--selection-controls__ripple,.input-group--selection-controls.radio.input-group--dark.input-group--disabled .icon,.input-group--selection-controls.radio.input-group--dark.input-group--disabled .input-group--selection-controls__ripple{color:hsla(0,0%,100%,.3)}.sidebar{background-color:#424242;overflow-y:auto;padding:0 0 100px;-webkit-transition:margin .3s cubic-bezier(.4,0,.6,1),-webkit-transform .3s cubic-bezier(.4,0,.6,1);transition:margin .3s cubic-bezier(.4,0,.6,1),-webkit-transform .3s cubic-bezier(.4,0,.6,1);transition:transform .3s cubic-bezier(.4,0,.6,1),margin .3s cubic-bezier(.4,0,.6,1);transition:transform .3s cubic-bezier(.4,0,.6,1),margin .3s cubic-bezier(.4,0,.6,1),-webkit-transform .3s cubic-bezier(.4,0,.6,1);width:300px;max-width:100%;z-index:3}.sidebar--fixed{top:0;left:0;position:fixed;z-index:6;box-shadow:0 0 0 rgba(0,0,0,.2),0 0 0 rgba(0,0,0,.14),0 0 0 rgba(0,0,0,.12)}.sidebar--fixed-right{right:0;left:auto}.sidebar--drawer{-ms-flex-preferred-size:0;flex-basis:0;box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.sidebar--close,.sidebar--drawer{-webkit-transform:translateX(-325px);transform:translateX(-325px)}.sidebar--close.sidebar--fixed-right{-webkit-transform:translateX(325px);transform:translateX(325px)}@media screen and (max-width:992px){.sidebar--mobile{-webkit-transform:translateX(-325px);transform:translateX(-325px);z-index:7}.sidebar--mobile.sidebar--fixed-right,.sidebar--mobile.sidebar--right{-webkit-transform:translateX(325px);transform:translateX(325px)}}.sidebar--open,.sidebar--open.sidebar--mobile{-webkit-transform:translateX(0);transform:translateX(0);width:300px}@media screen and (max-width:992px){.sidebar:not(.sidebar--fixed):not(.sidebar--right){margin-left:-300px;-webkit-transform:none;transform:none}.sidebar:not(.sidebar--fixed):not(.sidebar--right).sidebar--open{-webkit-transform:translateX(300px);transform:translateX(300px)}}@media screen and (max-width:992px){.sidebar:not(.sidebar--fixed).sidebar--right{margin-right:-300px;-webkit-transform:none;transform:none}.sidebar:not(.sidebar--fixed).sidebar--right.sidebar--open{-webkit-transform:translateX(-300px);transform:translateX(-300px)}}.sidebar .list__tile{color:#fff;-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1);position:relative}.sidebar .list__tile .icon,.sidebar .list__tile .list__tile__action,.sidebar .list__tile .list__tile__avatar{color:#fff}.sidebar .list__tile:hover:not(.sidebar .list__tile--active){background-color:rgba(25,118,210,.4);color:#fff}.sidebar .list__tile:after{background:hsla(0,0%,100%,.12)}.sidebar .list__tile--active .list__tile__title{color:inherit}.sidebar .list--group__header--active:first-child .list__tile__action:first-child .icon,.sidebar .list__tile--active:first-child .icon{color:#1976d2}.sidebar .list--group:after{background:hsla(0,0%,100%,.12)}.sidebar .list--group__container .list__tile--active .list__tile__title{color:#1976d2}.input-group--slider.input-group--light label{-webkit-transform:none;transform:none;-ms-flex-preferred-size:56px;flex-basis:56px;color:rgba(0,0,0,.87);display:-webkit-box;display:-ms-flexbox;display:flex;font-size:18px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.input-group--slider.input-group--light .slider__track{background:rgba(0,0,0,.26)}.input-group--slider.input-group--light .slider__track__container:after{border:0 solid rgba(0,0,0,.6);border-left-width:2px}.input-group--slider.input-group--light .slider__thumb{border:4px solid rgba(0,0,0,.26)}.input-group--slider.input-group--light .slider__thumb--label{background:rgba(0,0,0,.26)}.input-group--slider.input-group--light .slider__ticks{background:-webkit-repeating-linear-gradient(left,rgba(0,0,0,.6),rgba(0,0,0,.6) 2px,transparent 0,transparent);background:repeating-linear-gradient(90deg,rgba(0,0,0,.6),rgba(0,0,0,.6) 2px,transparent 0,transparent)}.input-group--slider.input-group--light.input-group--disabled .slider__thumb{background:rgba(0,0,0,.38);border-color:transparent}.input-group--slider.input-group--light.input-group--disabled.input-group--dirty .slider__track-fill{background:rgba(0,0,0,.26)}.input-group--slider.input-group--light:not(.input-group--dirty) .slider__thumb-container--label .slider__thumb{background:#000}.input-group--slider.input-group--dark label{-webkit-transform:none;transform:none;-ms-flex-preferred-size:56px;flex-basis:56px;color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;font-size:18px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.input-group--slider.input-group--dark .slider__track{background:hsla(0,0%,100%,.3)}.input-group--slider.input-group--dark .slider__track__container:after{border:0 solid hsla(0,0%,100%,.6);border-left-width:2px}.input-group--slider.input-group--dark .slider__thumb{border:4px solid hsla(0,0%,100%,.3)}.input-group--slider.input-group--dark .slider__thumb--label{background:hsla(0,0%,100%,.3)}.input-group--slider.input-group--dark .slider__ticks{background:-webkit-repeating-linear-gradient(left,hsla(0,0%,100%,.6),hsla(0,0%,100%,.6) 2px,transparent 0,transparent);background:repeating-linear-gradient(90deg,hsla(0,0%,100%,.6),hsla(0,0%,100%,.6) 2px,transparent 0,transparent)}.input-group--slider.input-group--dark.input-group--disabled .slider__thumb{background:hsla(0,0%,100%,.3);border-color:transparent}.input-group--slider.input-group--dark.input-group--disabled.input-group--dirty .slider__track-fill{background:hsla(0,0%,100%,.3)}.input-group--slider.input-group--dark:not(.input-group--dirty) .slider__thumb-container--label .slider__thumb{background:#fff}.input-group--slider{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap}.input-group--slider .input-group__details:after,.input-group--slider .input-group__details:before{display:none}.input-group--slider .input-group__input{-webkit-box-flex:1;-ms-flex:1 1 100%;flex:1 1 100%}.input-group--slider label+.input-group__input{margin-left:16px;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto}.input-group--slider.input-group--active .slider__thumb{-webkit-transform:translateY(-50%) scale(1);transform:translateY(-50%) scale(1)}.input-group--slider.input-group--active .slider__track{-webkit-transition:none;transition:none}.input-group--slider.input-group--active .slider__thumb-container--label .slider__thumb,.input-group--slider.input-group--active .slider__thumb-container--label .slider__thumb:hover{-webkit-transform:translateY(-50%) scale(0);transform:translateY(-50%) scale(0)}.input-group--slider.input-group--active .slider__thumb-container,.input-group--slider.input-group--active .slider__track-fill{-webkit-transition:none;transition:none}.input-group--slider.input-group--dirty .slider__thumb{background:#1976d2;border-color:#1976d2}.input-group--slider.input-group--dirty .slider__thumb--label{background:#1976d2}.input-group--slider.input-group--disabled{pointer-events:none}.input-group--slider.input-group--disabled .slider__thumb{-webkit-transform:translateY(-50%) scale(.5);transform:translateY(-50%) scale(.5);background:transparent}.input-group--slider.input-group--disabled.input-group--dirty{border-color:transparent}.input-group--slider.input-group--prepend-icon .slider{margin-left:56px}.slider{cursor:default;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;height:30px;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.input-group--ticks:hover .slider__ticks,.input-group--ticks:hover .slider__track__container:after{opacity:1}.slider__track__container{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);height:2px;width:100%;overflow:hidden}.slider__track__container:after{content:\"\";position:absolute;right:0;top:0;height:2px;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out;width:2px;opacity:0}.slider__thumb,.slider__ticks,.slider__track{position:absolute;top:0}.slider__track{-webkit-transform-origin:right;transform-origin:right;overflow:hidden}.slider__track,.slider__track-fill{height:2px;left:0;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out;width:100%}.slider__track-fill{position:absolute;background:#1976d2;-webkit-transform-origin:left;transform-origin:left}.slider__ticks,.slider__ticks-container{position:absolute;left:0;height:2px;width:100%}.slider__ticks-container{top:50%;overflow:hidden}.slider__ticks{-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out;opacity:0}.slider__thumb-container{position:absolute}.slider__thumb,.slider__thumb-container{top:50%;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out}.slider__thumb{width:20px;height:20px;left:-10px;border-radius:50%;background:transparent;-webkit-transform:translateY(-50%) scale(.8);transform:translateY(-50%) scale(.8);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.slider__thumb:hover{-webkit-transform:translateY(-50%) scale(1);transform:translateY(-50%) scale(1)}.slider__thumb--label__container{left:0;top:0}.slider__thumb--label,.slider__thumb--label__container{position:absolute;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out}.slider__thumb--label{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:12px;color:#fff;width:28px;height:28px;border-radius:50% 50% 0;left:-14px;top:-40px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.slider__thumb--label span{-webkit-transform:rotate(-45deg) translateZ(0);transform:rotate(-45deg) translateZ(0)}.small-dialog{display:block;height:100%}.small-dialog__content{padding:0 24px}.small-dialog__actions{text-align:right}.small-dialog a{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:rgba(0,0,0,.87);height:100%;text-decoration:none}.small-dialog a>*{width:100%}.small-dialog .menu__activator{height:100%}.subheader{height:48px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:14px;color:#757575;font-weight:500;padding:0 16px}.subheader--inset{margin-left:56px}.stepper{overflow:hidden;position:relative;box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}.stepper .divider{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center;margin:0 -16px}.stepper__header{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}.stepper__header,.stepper__step__step{display:-webkit-box;display:-ms-flexbox;display:flex}.stepper__step__step{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:rgba(0,0,0,.38);border-radius:50%;color:#fff;font-size:12px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:24px;margin-right:8px;width:24px;-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1)}.stepper__step__step .icon{font-size:18px}.stepper__step{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:24px;position:relative}.stepper__step--active .stepper__label{text-shadow:0 0 0 #000;-webkit-transition:.3s cubic-bezier(.4,0,.6,1);transition:.3s cubic-bezier(.4,0,.6,1)}.stepper__step--active .stepper__step__step{background:#1976d2}.stepper__step--editable{cursor:pointer}.stepper__step--editable:hover{background:rgba(0,0,0,.06)}.stepper__step--inactive .stepper__label,.stepper__step--inactive .stepper__label small{color:rgba(0,0,0,.38)}.stepper__step__step:not(.stepper__step--inactive.stepper__step--error){color:#fff;background:rgba(0,0,0,.38)}.stepper__step--inactive.stepper__step--editable:hover .stepper__step__step,.stepper__step__step:not(.stepper__step--inactive.stepper__step--error):hover{background:rgba(0,0,0,.5)}.stepper__step--error .stepper__step__step{background:transparent;color:#ff5252}.stepper__step--error .stepper__step__step .icon{font-size:24px}.stepper__step--error .stepper__label{color:#ff5252;text-shadow:none;font-weight:500}.stepper__step--error .stepper__label small{color:#ff5252}.stepper__step--complete .stepper__label{color:rgba(0,0,0,.5);text-shadow:0 0 0 #000}.stepper__step--complete .stepper__step__step{background:#1976d2}.stepper__label{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;text-align:left;color:rgba(0,0,0,.38)}.stepper__label small{font-size:12px;font-weight:300;color:rgba(0,0,0,.38);text-shadow:none}.stepper__content,.stepper__wrapper{overflow:hidden;-webkit-transition:.4s cubic-bezier(.4,0,.6,1);transition:.4s cubic-bezier(.4,0,.6,1)}.stepper__content{top:auto;bottom:0;padding:16px;-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%}.stepper__content .btn{margin-left:0}.stepper--vertical{padding-bottom:36px}.stepper--vertical .stepper__content{margin:-8px 0 -16px 36px;padding:16px 60px 16px 23px;width:auto}.stepper--vertical .stepper__content:not(:last-child){border-left:1px solid rgba(0,0,0,.12)}.stepper--vertical .stepper__step{padding:24px 24px 16px}.stepper--vertical .stepper__step__step{margin-right:12px}.stepper--alt-labels .divider{margin:35px -67px 0;-ms-flex-item-align:start;align-self:flex-start}.stepper--alt-labels .stepper__step{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-preferred-size:175px;flex-basis:175px}.stepper--alt-labels .stepper__step small{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}.stepper--alt-labels .stepper__step__step{margin-right:0;margin-bottom:12px}@media only screen and (max-width:767px){.stepper:not(.stepper--vertical) .stepper__label{display:none}.stepper:not(.stepper--vertical) .stepper__step__step{margin-right:0}}.table__overflow{width:100%;overflow-x:auto;overflow-y:hidden}table.table{border-radius:2px;border-collapse:collapse;border-spacing:0;width:100%;max-width:100%}table.table td,table.table th{text-align:left}table.table tr:not(:last-child){border-bottom:1px solid #e0e0e0}table.table tbody td:first-child,table.table tbody td:not(:first-child),table.table tbody th:first-child,table.table tbody th:not(:first-child),table.table thead td:first-child,table.table thead td:not(:first-child),table.table thead th:first-child,table.table thead th:not(:first-child){padding:0 24px}table.table thead tr{height:56px}table.table thead th{color:rgba(0,0,0,.54);font-weight:600;font-size:12px;-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1);white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}table.table thead th.sortable{pointer-events:auto}table.table thead th>div{width:100%}table.table tbody tr{-webkit-transition:background .3s cubic-bezier(.25,.8,.25,1);transition:background .3s cubic-bezier(.25,.8,.25,1);will-change:background}table.table tbody tr[active]{background:#f5f5f5}table.table tbody tr:hover{background:#eee}table.table tbody td,table.table tbody th{height:48px}table.table tbody td{font-weight:500;color:rgba(0,0,0,.87);font-size:13px}table.table .input-group--selection-controls{margin:0}table.table .input-group--selection-controls .input-group__details{display:none}table.table .input-group--selection-controls.checkbox .icon{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}table.table .input-group--selection-controls.checkbox .input-group--selection-controls__ripple{left:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}table.table tfoot tr{height:56px;border-top:1px solid #e0e0e0}.tabs{overflow:hidden;position:relative;width:100%}.tabs>.card{border-radius:0}.tabs .card{background:inherit;box-shadow:none}.tabs ul{padding:0}.tabs--grow .tabs__container>li{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.tabs--centered .tabs__container>li:first-of-type{margin-left:auto}.tabs--centered .tabs__container>li:last-of-type{margin-right:auto}.tabs--icons .tabs__tabs{height:90px}.tabs--scroll-bars .tabs__tabs--mobile{padding:0 35px}.tabs--scroll-bars .tabs__tabs--mobile .icon--left,.tabs--scroll-bars .tabs__tabs--mobile .icon--right{display:-webkit-box;display:-ms-flexbox;display:flex}.tabs--scroll-bars .tabs__tabs--mobile .tabs__container{width:calc(100% - 70px)}.tabs__tabs{background-color:#1976d2;width:100%;position:relative;height:60px}.tabs__tabs .icon--left,.tabs__tabs .icon--right{position:absolute;top:0;width:35px;display:none;color:#fff;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.tabs__tabs .icon--left{left:0}.tabs__tabs .icon--right{right:0}.tabs__container{overflow-x:auto;overflow-y:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;height:100%;width:100%;position:absolute;padding:1rem;top:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;list-style:none}.tabs__container>li{height:100%}.tabs__container-left{position:absolute;left:0;top:0;width:35px}.tabs .tab__item,.tabs__container-left{height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.tabs .tab__item{color:#e0e0e0;-ms-flex-negative:0;flex-shrink:0;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;min-width:125px;padding:1rem;min-width:0;position:relative;text-align:center;text-decoration:none;text-transform:uppercase;text-overflow:ellipsis;-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1);overflow:hidden;white-space:nowrap}.tabs .tab__item .icon{-webkit-box-flex:1;-ms-flex:1;flex:1;-ms-flex-preferred-size:100%;flex-basis:100%;font-size:32px;margin:.5rem 0}.tabs .tab__item--active{color:#fff}.tabs .tab__item--disabled{opacity:.5;pointer-events:none}.tabs__items{overflow:hidden;position:relative;border-width:0 1px 1px;border-style:solid;border-color:rgba(0,0,0,.1)}.tabs__item{-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1);width:100%}.tabs__item>.card{box-shadow:none}.tabs__slider{position:absolute;bottom:0;height:4px;background:#448aff;-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1)}.input-group--text-field label{pointer-events:none;position:absolute;top:0;left:0;min-width:0;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;text-align:left;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transform-origin:top left;transform-origin:top left;width:100%}.input-group--text-field.input-group--multi-line:not(.input-group--focused):not(.input-group--dirty) label{-webkit-transform:translateZ(0);transform:translateZ(0)}.input-group--text-field input{font-size:16px;-webkit-box-flex:1;-ms-flex:1;flex:1;margin:0;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;min-width:0;height:30px}.input-group--text-field input+.icon{padding:0 6px;-webkit-transition:.3s cubic-bezier(.4,0,.6,1);transition:.3s cubic-bezier(.4,0,.6,1)}.input-group--text-field input:focus{outline:none}.input-group--text-field input:disabled{pointer-events:none}.input-group--text-field textarea{font-size:16px;-webkit-box-flex:1;-ms-flex:1 1;flex:1 1}.input-group--text-field textarea:focus{outline:none}.input-group--text-field .input-group__counter{margin-left:auto}.input-group--text-field .input-group__counter--error{color:#ff5252!important}.input-group--text-field.input-group--light.input-group--single-line.input-group--text-field.input-group--light.input-group--focused label,.input-group--text-field.input-group--light input,.input-group--text-field.input-group--light input:disabled,.input-group--text-field.input-group--light label,.input-group--text-field.input-group--light textarea,.input-group--text-field.input-group--light textarea:disabled{color:rgba(0,0,0,.38)}.input-group--text-field.input-group--light.input-group--dirty input,.input-group--text-field.input-group--light.input-group--dirty textarea{color:rgba(0,0,0,.87)}.input-group--text-field.input-group--light.input-group--disabled input,.input-group--text-field.input-group--light.input-group--disabled textarea,.input-group--text-field.input-group--light .input-group__counter,.input-group--text-field.input-group--light .input-group__details{color:rgba(0,0,0,.38)}.input-group--text-field.input-group--light.input-group--disabled .input-group__details:before{background-color:transparent}.input-group--text-field.input-group--dark.input-group--single-line.input-group--text-field.input-group--dark.input-group--focused label,.input-group--text-field.input-group--dark input,.input-group--text-field.input-group--dark input:disabled,.input-group--text-field.input-group--dark label,.input-group--text-field.input-group--dark textarea,.input-group--text-field.input-group--dark textarea:disabled{color:hsla(0,0%,100%,.5)}.input-group--text-field.input-group--dark.input-group--dirty input,.input-group--text-field.input-group--dark.input-group--dirty textarea{color:#fff}.input-group--text-field.input-group--dark.input-group--disabled input,.input-group--text-field.input-group--dark.input-group--disabled textarea,.input-group--text-field.input-group--dark .input-group__counter,.input-group--text-field.input-group--dark .input-group__details{color:hsla(0,0%,100%,.5)}.input-group--text-field.input-group--dark.input-group--disabled .input-group__details:before{background-color:transparent}.input-group--text-field.input-group--focused label{color:#1976d2}.input-group--text-field.input-group--dirty label,.input-group--text-field.input-group--focused label{-webkit-transform:translate3d(0,-18px,0) scale(.75);transform:translate3d(0,-18px,0) scale(.75)}.input-group--text-field.input-group--error .input-group__details:after{background-color:#ff5252}.input-group--text-field.input-group--prepend-icon .input-group__prepend-icon{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-preferred-size:56px;flex-basis:56px;-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1)}.input-group--text-field.input-group--prepend-icon .input-group__details{margin-left:56px}.input-group--text-field.input-group--prepend-icon .input-group__details:after,.input-group--text-field.input-group--prepend-icon .input-group__details:before{max-width:calc(100% - 56px)}.input-group--text-field.input-group--prepend-icon label{margin-left:56px}.input-group--text-field.input-group--prepend-icon input{-webkit-box-flex:1;-ms-flex:auto;flex:auto}.input-group--text-field.input-group--prepend-icon.input-group--focused .icon{color:#1976d2}.input-group--text-field.input-group--single-line label{-webkit-transform:translateZ(0);transform:translateZ(0)}.input-group--text-field.input-group--single-line.input-group--dirty label{display:none}.input-group--text-field.input-group--required label:after{content:\"*\"}.input-group--text-field.input-group--error label,.input-group--text-field.input-group--required.input-group--focused label:after{color:#ff5252}.input-group--text-field.input-group--error .input-group__details:after,.input-group--text-field.input-group--error .input-group__details:before{background-color:#ff5252}.input-group--text-field.input-group--full-width{padding:0 16px}.input-group--text-field.input-group--full-width .input-group__details:after,.input-group--text-field.input-group--full-width .input-group__details:before{display:none}.picker--time .card__row--actions{margin-top:-10px}.picker--time.picker--dark .picker--time__clock{background:#616161}.picker--time.picker--dark .picker--time__clock-hand:before{border-color:#448aff}.picker--time.picker--dark .picker--time__clock-hand,.picker--time.picker--dark .picker--time__clock:after{background:#448aff}.picker--time.picker--dark .picker--time__clock>span{color:#fff}.picker--time.picker--dark .picker--time__clock>span.active{color:#000}.picker--time.picker--dark .picker--time__clock>span.active:before{background:#448aff}.picker--time.picker--landscape{-ms-flex-wrap:wrap;flex-wrap:wrap}.picker--time.picker--landscape .picker__title{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.picker--time.picker--landscape .picker__title div:first-child{text-align:right}.picker--time.picker--landscape .picker__title div:first-child span{height:55px;font-size:55px}.picker--time.picker--landscape .picker__title div:last-child{margin:16px 0 0;-ms-flex-item-align:initial;-ms-grid-row-align:initial;align-self:auto;text-align:center}.picker--time.picker--landscape .picker--time__clock{height:250px;width:250px}.picker--time.picker--landscape .picker--time__clock-hand{height:97px}.picker--time .picker__title{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.picker--time .picker__title div:first-child{white-space:nowrap}.picker--time .picker__title div:first-child span{-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;height:70px;font-size:70px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;opacity:.6;-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1)}.picker--time .picker__title div:first-child span.active{opacity:1}.picker--time .picker__title div:last-child{-ms-flex-item-align:end;align-self:flex-end;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-size:16px;margin:8px 0 6px 8px}.picker--time .picker__title div:last-child span{cursor:pointer;opacity:.6;-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1)}.picker--time .picker__title div:last-child span.active{opacity:1}.picker--time .picker__title div:only-child{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.picker--time__clock{height:270px;width:270px;border-radius:100%;background:#e0e0e0;position:absolute;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;top:50%;left:50%;-webkit-transition:.5s cubic-bezier(.25,.8,.25,1);transition:.5s cubic-bezier(.25,.8,.25,1);-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.picker--time__clock-hand{height:40%;width:2px;background:#1976d2;bottom:50%;left:calc(50% - 1px);-webkit-transform-origin:center bottom;transform-origin:center bottom;position:absolute}.picker--time__clock-hand:before{background:transparent;border:2px solid #1976d2;border-radius:100%;width:10px;height:10px;top:-3%}.picker--time__clock-hand:before,.picker--time__clock:after{content:\"\";position:absolute;left:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}.picker--time__clock:after{height:8px;width:8px;top:50%;background:#2196f3;border-radius:100%}.picker--time__clock>span{-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:100%;cursor:default;display:-webkit-box;display:-ms-flexbox;display:flex;font-size:16px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;left:calc(50% - 16px);height:32px;position:absolute;text-align:center;top:calc(50% - 16px);width:32px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.picker--time__clock>span>span{z-index:1}.picker--time__clock>span:after,.picker--time__clock>span:before{content:\"\";border-radius:100%;position:absolute;top:50%;left:50%;height:14px;width:14px;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);height:40px;width:40px}.picker--time__clock>span.active{color:#fff;cursor:default}.picker--time__clock>span.active:before{background:#1976d2}.picker--time .card__row--actions{border:none}.toast{position:fixed;z-index:99999999999999}.toast--right{top:5%;right:2%}.toast--left{top:5%;left:2%}.toast--top{top:5%}.toast--bottom,.toast--top{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.toast--bottom{bottom:5%}.toast--snack{bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.toast--snack .toast__content{margin-bottom:0;opacity:1}.toast--snack .toast__content--remove{margin-top:0}.toast__content{background:#424242;border-radius:2px;color:#fff;padding:1rem 2rem;margin:1rem 0;opacity:0;-webkit-transform:translate3d(0,3rem,0);transform:translate3d(0,3rem,0);-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1);box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px rgba(0,0,0,.14),0 1px 18px rgba(0,0,0,.12)}.toast__content--active{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}.toast__content--remove{margin-top:-3rem;opacity:0}[data-tooltip]{position:relative}[data-tooltip]:before{background:#616161;border-radius:.2rem;color:#fff;content:attr(data-tooltip);font-size:10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;opacity:0;height:22px;padding:0 8px;position:absolute;pointer-events:none;-webkit-transition:.2s cubic-bezier(.4,0,.6,1);transition:.2s cubic-bezier(.4,0,.6,1);visibility:hidden;width:auto;white-space:pre;z-index:99;box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}[data-tooltip]:hover:before{opacity:1;visibility:visible}[data-tooltip][data-tooltip-location=bottom]:before{top:100%;left:50%;-webkit-transform:translate(-50%,-14px) scale(.1);transform:translate(-50%,-14px) scale(.1);-webkit-transform-origin:center top;transform-origin:center top}[data-tooltip][data-tooltip-location=bottom]:hover:before{-webkit-transform:translate(-50%,14px) scale(1.01);transform:translate(-50%,14px) scale(1.01)}[data-tooltip][data-tooltip-location=top]:before{bottom:100%;left:50%;-webkit-transform:translate(-50%,14px) scale(.1);transform:translate(-50%,14px) scale(.1);-webkit-transform-origin:center bottom;transform-origin:center bottom}[data-tooltip][data-tooltip-location=top]:hover:before{-webkit-transform:translate(-50%,-14px) scale(1.01);transform:translate(-50%,-14px) scale(1.01)}[data-tooltip][data-tooltip-location=left]:before{right:100%;-webkit-transform:translate(14px) scale(.1);transform:translate(14px) scale(.1);-webkit-transform-origin:center right;transform-origin:center right}[data-tooltip][data-tooltip-location=left]:hover:before{-webkit-transform:translate(-14px) scale(1.01);transform:translate(-14px) scale(1.01)}[data-tooltip][data-tooltip-location=right]:before{left:100%;-webkit-transform:translate(-14px) scale(.1);transform:translate(-14px) scale(.1);-webkit-transform-origin:center left;transform-origin:center left}[data-tooltip][data-tooltip-location=right]:hover:before{-webkit-transform:translate(14px) scale(1.01);transform:translate(14px) scale(1.01)}@media only screen and (max-width:767px){[data-tooltip]:before{padding:0 16px;height:32px}[data-tooltip][data-tooltip-location=bottom]:hover:before{-webkit-transform:translate(-50%,24px) scale(1.01);transform:translate(-50%,24px) scale(1.01)}[data-tooltip][data-tooltip-location=top]:hover:before{-webkit-transform:translate(-50%,-24px) scale(1.01);transform:translate(-50%,-24px) scale(1.01)}[data-tooltip][data-tooltip-location=left]:hover:before{-webkit-transform:translate(-24px) scale(1.01);transform:translate(-24px) scale(1.01)}[data-tooltip][data-tooltip-location=right]:hover:before{-webkit-transform:translate(24px) scale(1.01);transform:translate(24px) scale(1.01)}}.with{min-height:100vh;-webkit-backface-visibility:hidden;overflow-x:hidden}.with.top-fixed-toolbar{padding-top:64px}.with.top-fixed-toolbar header{z-index:4}.with.top-toolbar main{min-height:calc(100vh - 64px)}.with.top-toolbar main>.content{padding-top:1rem}.with.bottom-footer main{min-height:calc(100vh - 45px)}.with.bottom-footer.with.top-fixed-toolbar main,.with.bottom-footer.with.top-toolbar main{min-height:calc(100vh - 64px - 45px)}.with.left-fixed-sidebar header .toolbar{padding-left:314px;-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1)}@media screen and (max-width:991px){.with.left-fixed-sidebar header .toolbar{padding-left:14px}}.with.left-fixed-sidebar footer,.with.left-fixed-sidebar main{padding-left:300px;-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1)}@media screen and (max-width:991px){.with.left-fixed-sidebar footer,.with.left-fixed-sidebar main{padding-left:0}}.with.left-sidebar main{background:#424242}.with.left-sidebar .sidebar{box-shadow:none}.with.right-fixed-sidebar footer,.with.right-fixed-sidebar header .toolbar,.with.right-fixed-sidebar main{padding-right:300px;-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1)}@media screen and (max-width:991px){.with.right-fixed-sidebar footer,.with.right-fixed-sidebar header .toolbar,.with.right-fixed-sidebar main{padding-right:0}}.with.sidebar-under-toolbar .sidebar{z-index:5}.with.sidebar-under-toolbar.left-fixed-sidebar .sidebar,.with.sidebar-under-toolbar.right-fixed-sidebar .sidebar{padding-top:64px}.with.sidebar-under-toolbar.left-fixed-sidebar .toolbar,.with.sidebar-under-toolbar.right-fixed-sidebar .toolbar{padding-left:inherit}.app__bar{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#eee;display:-webkit-box;display:-ms-flexbox;display:flex;width:100%}.app__bar .btn-dropdown--overflow .input-group{border:none;margin:0}.app__bar .input-group__details{display:none}.app__bar>div{min-width:130px}.app__bar>div:not(:first-child){margin-left:1px}.app__bar>div:not(:first-child):before{content:\"\";position:absolute;height:60%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);left:-1px;background:rgba(0,0,0,.12);width:1px;z-index:0}.app__bar .input-group:not(.input-group--focused) .input-group__input:hover{background:#f5f5f5}.app__bar .btn-toggle{box-shadow:none;background:transparent;position:relative;padding:0 8px}.app__bar .btn-toggle .btn{background:transparent;border:none!important;height:42px;margin:0 8px}.app__bar .btn-toggle .btn .icon{font-size:26px;width:26px}@media only screen and (max-width:575px){.hidden-xs-only{display:none!important}}@media only screen and (max-width:767px){.hidden-sm-and-down{display:none!important}}@media only screen and (min-width:576px){.hidden-sm-and-up{display:none!important}}@media only screen and (min-width:768px) and (max-width){.hidden-md-only{display:none!important}}@media only screen and (max-width:991px){.hidden-md-and-down{display:none!important}}@media only screen and (min-width:768px){.hidden-md-and-up{display:none!important}}@media only screen and (min-width:992px) and (max-width){.hidden-lg-only{display:none!important}}@media only screen and (max-width:1199px){.hidden-lg-and-down{display:none!important}}@media only screen and (min-width:992px){.hidden-lg-and-up{display:none!important}}@media only screen and (min-width:1200px){.hidden-xl-only{display:none!important}}.right{float:right!important}.left{float:left!important}.mt-0{margin-top:0!important}.mr-0{margin-right:0!important}.mb-0{margin-bottom:0!important}.ml-0,.mx-0{margin-left:0!important}.mx-0{margin-right:0!important}.my-0{margin-top:0!important;margin-bottom:0!important}.ma-0{margin:0!important}.pt-0{padding-top:0!important}.pr-0{padding-right:0!important}.pb-0{padding-bottom:0!important}.pl-0,.px-0{padding-left:0!important}.px-0{padding-right:0!important}.py-0{padding-top:0!important;padding-bottom:0!important}.pa-0{padding:0!important}.mt-1{margin-top:.25rem!important}.mr-1{margin-right:.25rem!important}.mb-1{margin-bottom:.25rem!important}.ml-1,.mx-1{margin-left:.25rem!important}.mx-1{margin-right:.25rem!important}.my-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.ma-1{margin:.25rem!important}.pt-1{padding-top:.25rem!important}.pr-1{padding-right:.25rem!important}.pb-1{padding-bottom:.25rem!important}.pl-1,.px-1{padding-left:.25rem!important}.px-1{padding-right:.25rem!important}.py-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.pa-1{padding:.25rem!important}.mt-2{margin-top:.5rem!important}.mr-2{margin-right:.5rem!important}.mb-2{margin-bottom:.5rem!important}.ml-2,.mx-2{margin-left:.5rem!important}.mx-2{margin-right:.5rem!important}.my-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.ma-2{margin:.5rem!important}.pt-2{padding-top:.5rem!important}.pr-2{padding-right:.5rem!important}.pb-2{padding-bottom:.5rem!important}.pl-2,.px-2{padding-left:.5rem!important}.px-2{padding-right:.5rem!important}.py-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.pa-2{padding:.5rem!important}.mt-3{margin-top:1rem!important}.mr-3{margin-right:1rem!important}.mb-3{margin-bottom:1rem!important}.ml-3,.mx-3{margin-left:1rem!important}.mx-3{margin-right:1rem!important}.my-3{margin-top:1rem!important;margin-bottom:1rem!important}.ma-3{margin:1rem!important}.pt-3{padding-top:1rem!important}.pr-3{padding-right:1rem!important}.pb-3{padding-bottom:1rem!important}.pl-3,.px-3{padding-left:1rem!important}.px-3{padding-right:1rem!important}.py-3{padding-top:1rem!important;padding-bottom:1rem!important}.pa-3{padding:1rem!important}.mt-4{margin-top:1.5rem!important}.mr-4{margin-right:1.5rem!important}.mb-4{margin-bottom:1.5rem!important}.ml-4,.mx-4{margin-left:1.5rem!important}.mx-4{margin-right:1.5rem!important}.my-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.ma-4{margin:1.5rem!important}.pt-4{padding-top:1.5rem!important}.pr-4{padding-right:1.5rem!important}.pb-4{padding-bottom:1.5rem!important}.pl-4,.px-4{padding-left:1.5rem!important}.px-4{padding-right:1.5rem!important}.py-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.pa-4{padding:1.5rem!important}.mt-5{margin-top:3rem!important}.mr-5{margin-right:3rem!important}.mb-5{margin-bottom:3rem!important}.ml-5,.mx-5{margin-left:3rem!important}.mx-5{margin-right:3rem!important}.my-5{margin-top:3rem!important;margin-bottom:3rem!important}.ma-5{margin:3rem!important}.pt-5{padding-top:3rem!important}.pr-5{padding-right:3rem!important}.pb-5{padding-bottom:3rem!important}.pl-5,.px-5{padding-left:3rem!important}.px-5{padding-right:3rem!important}.py-5{padding-top:3rem!important;padding-bottom:3rem!important}.pa-5{padding:3rem!important}@media only screen and (min-width:0){.text-xs-left{text-align:left!important}.text-xs-center{text-align:center!important}.text-xs-right{text-align:right!important}.text-xs-justify{text-align:justify!important}}@media only screen and (min-width:576px){.text-sm-left{text-align:left!important}.text-sm-center{text-align:center!important}.text-sm-right{text-align:right!important}.text-sm-justify{text-align:justify!important}}@media only screen and (min-width:768px){.text-md-left{text-align:left!important}.text-md-center{text-align:center!important}.text-md-right{text-align:right!important}.text-md-justify{text-align:justify!important}}@media only screen and (min-width:992px){.text-lg-left{text-align:left!important}.text-lg-center{text-align:center!important}.text-lg-right{text-align:right!important}.text-lg-justify{text-align:justify!important}}@media only screen and (min-width:1200px){.text-xl-left{text-align:left!important}.text-xl-center{text-align:center!important}.text-xl-right{text-align:right!important}.text-xl-justify{text-align:justify!important}}.snack{background-color:#323232;position:fixed;display:-webkit-box;display:-ms-flexbox;display:flex;height:0;pointer-events:none;z-index:1000;visibility:visible}.snack--absolute{position:absolute}.snack--multi-line{min-height:48px;height:auto}.snack--top{top:0}.snack--bottom,.snack--top{left:50%;-webkit-transform:translate3d(-50%,0,0) translateZ(0);transform:translate3d(-50%,0,0) translateZ(0)}.snack--bottom{bottom:48px}.snack--left{left:8px;right:auto;-webkit-transform:none;transform:none}.snack--left.snack--top{top:8px}.snack--left.snack--bottom{bottom:56px}.snack--right{left:auto;right:8px;-webkit-transform:none;transform:none}.snack--right.snack--top{top:8px}.snack--right.snack--bottom{top:auto;bottom:56px}.snack__content{background-color:inherit;padding:14px 24px;border-radius:2px;pointer-events:auto;max-width:568px;min-width:288px;height:48px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;font-size:14px;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-transition:.4s cubic-bezier(.25,.8,.25,1);transition:.4s cubic-bezier(.25,.8,.25,1);position:relative!important}.snack__content .btn{margin:0 -16px 0 24px;min-width:0}@media only screen and (max-width:575px){.snack{width:100%;left:0;right:auto;-webkit-transform:none;transform:none}.snack--left.snack--top,.snack--right.snack--top{top:0}.snack--left.snack--bottom,.snack--right.snack--bottom{bottom:48px}.snack__content{border-radius:0;max-width:100%;width:100%}}.bottom-nav{background:#1976d2;bottom:0;box-shadow:0 3px 14px 2px rgba(0,0,0,.12);display:-webkit-box;display:-ms-flexbox;display:flex;height:56px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:fixed;-webkit-transform:translate3d(0,60px,0);transform:translate3d(0,60px,0);-webkit-transition:all .4s cubic-bezier(.25,.8,.5,1);transition:all .4s cubic-bezier(.25,.8,.5,1);width:100%;z-index:6}.bottom-nav--absolute{position:absolute}.bottom-nav--active{-webkit-transform:translateZ(0);transform:translateZ(0)}.bottom-nav .btn{border-radius:0;-webkit-box-flex:1;-ms-flex:1 1 32px;flex:1 1 32px;height:100%;margin:0;max-width:168px;min-width:80px;padding:0 12px;opacity:.5;text-transform:capitalize;-webkit-transform-origin:50% 50%;transform-origin:50% 50%}.bottom-nav .btn .icon{-webkit-transition:all .4s cubic-bezier(.25,.8,.5,1);transition:all .4s cubic-bezier(.25,.8,.5,1)}.bottom-nav .btn .btn__content{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;height:56px;font-size:12px;-webkit-transform:scaleX(1) translate3d(0,1px,0);transform:scaleX(1) translate3d(0,1px,0);white-space:nowrap;will-change:font-size}.bottom-nav .btn--active{opacity:1}.bottom-nav .btn--active .btn__content{font-size:14px;-webkit-transform:scaleX(1) translateZ(0);transform:scaleX(1) translateZ(0)}.bottom-nav .btn:not(.btn--active){-webkit-filter:grayscale(100%);filter:grayscale(100%)}.bottom-nav--shift .btn__content{font-size:14px}.bottom-nav--shift .btn__content span{height:21px}.bottom-nav--shift .btn{-webkit-transition:all .3s;transition:all .3s;min-width:56px;max-width:96px}.bottom-nav--shift .btn--active{min-width:96px;max-width:168px;-webkit-box-flex:1;-ms-flex:1 1 72px;flex:1 1 72px}.bottom-nav--shift .btn--active .btn__content{-webkit-transform:scaleX(1) translate3d(0,2px,0);transform:scaleX(1) translate3d(0,2px,0)}.bottom-nav--shift .btn:not(.btn--active) .btn__content{-webkit-transform:scaleX(1) translate3d(0,10px,0);transform:scaleX(1) translate3d(0,10px,0)}.bottom-nav--shift .btn:not(.btn--active) .btn__content span{color:transparent}\n/*# sourceMappingURL=vuetify.min.css.map*/", ""]);

// exports


/***/ }),
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 82,
	"./af.js": 82,
	"./ar": 89,
	"./ar-dz": 83,
	"./ar-dz.js": 83,
	"./ar-kw": 84,
	"./ar-kw.js": 84,
	"./ar-ly": 85,
	"./ar-ly.js": 85,
	"./ar-ma": 86,
	"./ar-ma.js": 86,
	"./ar-sa": 87,
	"./ar-sa.js": 87,
	"./ar-tn": 88,
	"./ar-tn.js": 88,
	"./ar.js": 89,
	"./az": 90,
	"./az.js": 90,
	"./be": 91,
	"./be.js": 91,
	"./bg": 92,
	"./bg.js": 92,
	"./bn": 93,
	"./bn.js": 93,
	"./bo": 94,
	"./bo.js": 94,
	"./br": 95,
	"./br.js": 95,
	"./bs": 96,
	"./bs.js": 96,
	"./ca": 97,
	"./ca.js": 97,
	"./cs": 98,
	"./cs.js": 98,
	"./cv": 99,
	"./cv.js": 99,
	"./cy": 100,
	"./cy.js": 100,
	"./da": 101,
	"./da.js": 101,
	"./de": 104,
	"./de-at": 102,
	"./de-at.js": 102,
	"./de-ch": 103,
	"./de-ch.js": 103,
	"./de.js": 104,
	"./dv": 105,
	"./dv.js": 105,
	"./el": 106,
	"./el.js": 106,
	"./en-au": 107,
	"./en-au.js": 107,
	"./en-ca": 108,
	"./en-ca.js": 108,
	"./en-gb": 109,
	"./en-gb.js": 109,
	"./en-ie": 110,
	"./en-ie.js": 110,
	"./en-nz": 111,
	"./en-nz.js": 111,
	"./eo": 112,
	"./eo.js": 112,
	"./es": 114,
	"./es-do": 113,
	"./es-do.js": 113,
	"./es.js": 114,
	"./et": 115,
	"./et.js": 115,
	"./eu": 116,
	"./eu.js": 116,
	"./fa": 117,
	"./fa.js": 117,
	"./fi": 118,
	"./fi.js": 118,
	"./fo": 119,
	"./fo.js": 119,
	"./fr": 122,
	"./fr-ca": 120,
	"./fr-ca.js": 120,
	"./fr-ch": 121,
	"./fr-ch.js": 121,
	"./fr.js": 122,
	"./fy": 123,
	"./fy.js": 123,
	"./gd": 124,
	"./gd.js": 124,
	"./gl": 125,
	"./gl.js": 125,
	"./gom-latn": 126,
	"./gom-latn.js": 126,
	"./he": 127,
	"./he.js": 127,
	"./hi": 128,
	"./hi.js": 128,
	"./hr": 129,
	"./hr.js": 129,
	"./hu": 130,
	"./hu.js": 130,
	"./hy-am": 131,
	"./hy-am.js": 131,
	"./id": 132,
	"./id.js": 132,
	"./is": 133,
	"./is.js": 133,
	"./it": 134,
	"./it.js": 134,
	"./ja": 135,
	"./ja.js": 135,
	"./jv": 136,
	"./jv.js": 136,
	"./ka": 137,
	"./ka.js": 137,
	"./kk": 138,
	"./kk.js": 138,
	"./km": 139,
	"./km.js": 139,
	"./kn": 140,
	"./kn.js": 140,
	"./ko": 141,
	"./ko.js": 141,
	"./ky": 142,
	"./ky.js": 142,
	"./lb": 143,
	"./lb.js": 143,
	"./lo": 144,
	"./lo.js": 144,
	"./lt": 145,
	"./lt.js": 145,
	"./lv": 146,
	"./lv.js": 146,
	"./me": 147,
	"./me.js": 147,
	"./mi": 148,
	"./mi.js": 148,
	"./mk": 149,
	"./mk.js": 149,
	"./ml": 150,
	"./ml.js": 150,
	"./mr": 151,
	"./mr.js": 151,
	"./ms": 153,
	"./ms-my": 152,
	"./ms-my.js": 152,
	"./ms.js": 153,
	"./my": 154,
	"./my.js": 154,
	"./nb": 155,
	"./nb.js": 155,
	"./ne": 156,
	"./ne.js": 156,
	"./nl": 158,
	"./nl-be": 157,
	"./nl-be.js": 157,
	"./nl.js": 158,
	"./nn": 159,
	"./nn.js": 159,
	"./pa-in": 160,
	"./pa-in.js": 160,
	"./pl": 161,
	"./pl.js": 161,
	"./pt": 163,
	"./pt-br": 162,
	"./pt-br.js": 162,
	"./pt.js": 163,
	"./ro": 164,
	"./ro.js": 164,
	"./ru": 165,
	"./ru.js": 165,
	"./sd": 166,
	"./sd.js": 166,
	"./se": 167,
	"./se.js": 167,
	"./si": 168,
	"./si.js": 168,
	"./sk": 169,
	"./sk.js": 169,
	"./sl": 170,
	"./sl.js": 170,
	"./sq": 171,
	"./sq.js": 171,
	"./sr": 173,
	"./sr-cyrl": 172,
	"./sr-cyrl.js": 172,
	"./sr.js": 173,
	"./ss": 174,
	"./ss.js": 174,
	"./sv": 175,
	"./sv.js": 175,
	"./sw": 176,
	"./sw.js": 176,
	"./ta": 177,
	"./ta.js": 177,
	"./te": 178,
	"./te.js": 178,
	"./tet": 179,
	"./tet.js": 179,
	"./th": 180,
	"./th.js": 180,
	"./tl-ph": 181,
	"./tl-ph.js": 181,
	"./tlh": 182,
	"./tlh.js": 182,
	"./tr": 183,
	"./tr.js": 183,
	"./tzl": 184,
	"./tzl.js": 184,
	"./tzm": 186,
	"./tzm-latn": 185,
	"./tzm-latn.js": 185,
	"./tzm.js": 186,
	"./uk": 187,
	"./uk.js": 187,
	"./ur": 188,
	"./ur.js": 188,
	"./uz": 190,
	"./uz-latn": 189,
	"./uz-latn.js": 189,
	"./uz.js": 190,
	"./vi": 191,
	"./vi.js": 191,
	"./x-pseudo": 192,
	"./x-pseudo.js": 192,
	"./yo": 193,
	"./yo.js": 193,
	"./zh-cn": 194,
	"./zh-cn.js": 194,
	"./zh-hk": 195,
	"./zh-hk.js": 195,
	"./zh-tw": 196,
	"./zh-tw.js": 196
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
webpackContext.id = 430;

/***/ }),
/* 431 */,
/* 432 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(482)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(320),
  /* template */
  __webpack_require__(454),
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
/* 433 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(488)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(321),
  /* template */
  __webpack_require__(460),
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
/* 434 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(485)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(322),
  /* template */
  __webpack_require__(457),
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
/* 435 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(500)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(323),
  /* template */
  __webpack_require__(472),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/VaeVictis/Documents/Usi/VI Semester/Bachelor Project/source/classesWebServer/coursesWebApp/src/components/CustomizationApp/HomeWrapper.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] HomeWrapper.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c14d7b0e", Component.options)
  } else {
    hotAPI.reload("data-v-c14d7b0e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 436 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(489)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(326),
  /* template */
  __webpack_require__(461),
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
/* 437 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(495)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(327),
  /* template */
  __webpack_require__(467),
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
/* 438 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(503)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(328),
  /* template */
  __webpack_require__(475),
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
/* 439 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(480)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(329),
  /* template */
  __webpack_require__(452),
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
/* 440 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(479)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(330),
  /* template */
  __webpack_require__(451),
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
/* 441 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(493)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(331),
  /* template */
  __webpack_require__(465),
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
/* 442 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(497)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(332),
  /* template */
  __webpack_require__(469),
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
/* 443 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(496)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(337),
  /* template */
  __webpack_require__(468),
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
/* 444 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(487)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(338),
  /* template */
  __webpack_require__(459),
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
/* 445 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(498)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(339),
  /* template */
  __webpack_require__(470),
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
/* 446 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(494)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(342),
  /* template */
  __webpack_require__(466),
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
/* 447 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(484)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(343),
  /* template */
  __webpack_require__(456),
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
/* 448 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(486)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(344),
  /* template */
  __webpack_require__(458),
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
/* 449 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(501)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(345),
  /* template */
  __webpack_require__(473),
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
/* 450 */
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
     require("vue-hot-reload-api").rerender("data-v-051fe8ce", module.exports)
  }
}

/***/ }),
/* 451 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('selector-wrapper', {
    attrs: {
      "title": "Select Study"
    }
  }, [_c('div', {
    staticClass: "uk-container"
  }, [_c('div', {
    staticClass: "uk-flex uk-margin-top",
    attrs: {
      "uk-grid": ""
    }
  }, _vm._l((_vm.$store.state.preference.faculty.studies), function(study) {
    return _c('div', {
      staticClass: "uk-width-auto@s uk-width-1-1@m"
    }, [_c('resource', {
      attrs: {
        "toogle": _vm.toogle(study.type)
      },
      nativeOn: {
        "click": function($event) {
          _vm.goNext({
            type: study
          })
        }
      }
    }, [_c('h4', {
      staticClass: "uk-margin-remove"
    }, [_vm._v(_vm._s(study.type))])])], 1)
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
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-09cb165d", module.exports)
  }
}

/***/ }),
/* 452 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('selector-wrapper', {
    attrs: {
      "title": "Select Faculty"
    }
  }, [_c('div', {
    staticClass: "uk-container bottom--offset "
  }, [_c('div', {
    staticClass: "uk-margin-top"
  }, [_c('resource-transition-wrapper', _vm._l((_vm.$store.state.faculties), function(faculty) {
    return _c('div', {
      key: faculty,
      staticClass: "uk-width-1-1"
    }, [_c('resource', {
      nativeOn: {
        "click": function($event) {
          _vm.goNext(faculty)
        }
      }
    }, [_c('h4', {
      staticClass: "uk-margin-remove"
    }, [_vm._v(_vm._s(faculty.name_en))])])], 1)
  }))], 1), _vm._v(" "), _c('navigation', {
    attrs: {
      "onlyBack": true
    }
  })], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0a2acfec", module.exports)
  }
}

/***/ }),
/* 453 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition-group', {
    staticClass: "uk-flex uk-flex-column uk-grid-small",
    attrs: {
      "name": "custom-classes-transition",
      "enter-active-class": "animated fadeInUp",
      "uk-grid": ""
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1870b215", module.exports)
  }
}

/***/ }),
/* 454 */
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
/* 455 */
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
/* 456 */
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
          _vm.next(study.type)
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
/* 457 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('home-wrapper', [_c('preference-delete-confirmation-modal'), _vm._v(" "), (_vm.$store.state.user.preferences.loading) ? _c('div', [_c('user-preference-dummy')], 1) : (_vm.$store.state.user.preferences.data.length <= 0) ? _c('div', {
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
     require("vue-hot-reload-api").rerender("data-v-209932d8", module.exports)
  }
}

/***/ }),
/* 458 */
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
            _vm.next(studyType)
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
/* 459 */
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
/* 460 */
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
     require("vue-hot-reload-api").rerender("data-v-5440e9d9", module.exports)
  }
}

/***/ }),
/* 461 */
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
  }, [_c('h3', [_vm._v("create preference?")]), _vm._v(" "), _c('p', {
    staticClass: "uk-text-meta"
  }, [_vm._v("This is how it's gonna look")]), _vm._v(" "), _c('preference', {
    attrs: {
      "preference": _vm.$store.state.preference
    }
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
        _vm.$store.actions.addPreference(_vm.$store.PreferenceStore.makeQueryFromPreference())
      }
    }
  }, [_vm._v("Yes")])], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-55041922", module.exports)
  }
}

/***/ }),
/* 462 */
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
     require("vue-hot-reload-api").rerender("data-v-551b84f9", module.exports)
  }
}

/***/ }),
/* 463 */
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
          _vm.next(faculty)
        }
      }
    }, [_c('h4', {
      staticClass: "uk-margin-remove"
    }, [_vm._v(_vm._s(faculty.name_en))])]) : _c('h5', {
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
/* 464 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "uk-card uk-card-default uk-card-body"
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
  }, [_c('v-icon', [_vm._v("delete")])], 1)], 1)]), _vm._v(" "), (_vm.preference.faculty) ? _c('h4', {
    staticClass: "uk-margin-remove"
  }, [_vm._v(_vm._s(_vm.preference.faculty.name_en))]) : _vm._e(), _vm._v(" "), (_vm.preference.studyType) ? _c('h6', {
    staticClass: "uk-text-meta uk-margin-remove"
  }, [_vm._v(" " + _vm._s(_vm.preference.studyType.name_en))]) : _vm._e(), _vm._v(" "), (_vm.preference.year) ? _c('div', {
    staticClass: "uk-margin-small-right icon--circle btn--toogle"
  }, [_vm._v("\n    " + _vm._s(_vm.preference.year.yearNumber) + "\n  ")]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-592ab5b4", module.exports)
  }
}

/***/ }),
/* 465 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('selector-wrapper', {
    attrs: {
      "title": "Select your study program"
    }
  }, [_c('div', {
    staticClass: "uk-container bottom--offset "
  }, [_c('div', {
    staticClass: "uk-margin-top"
  }, [_c('resource-transition-wrapper', _vm._l((_vm.$store.state.preference.faculty.studies), function(study) {
    return (_vm.$store.state.preference.type.type == study.type) ? _c('div', {
      key: study
    }, [_c('div', {
      staticClass: "uk-flex",
      attrs: {
        "uk-grid": ""
      }
    }, _vm._l((study.studyTypes), function(studyType) {
      return _c('div', {
        staticClass: "uk-width-1-1"
      }, [(!_vm.$store.state.isInEditMode) ? _c('resource', {
        attrs: {
          "toogle": _vm.toogle(studyType)
        },
        nativeOn: {
          "click": function($event) {
            _vm.next({
              studyType: studyType
            })
          }
        }
      }, [_vm._v("\n                " + _vm._s(_vm.parseName(studyType.name_en)) + "\n              ")]) : _vm._e(), _vm._v(" "), (_vm.$store.state.isInEditMode) ? _c('resource', {
        attrs: {
          "toogle": _vm.toogle(studyType)
        },
        nativeOn: {
          "click": function($event) {
            _vm.next({
              studyType: studyType
            })
          }
        }
      }, [_vm._v("\n                " + _vm._s(_vm.parseName(studyType.name_en)) + "\n              ")]) : _vm._e()], 1)
    }))]) : _vm._e()
  }))], 1)]), _vm._v(" "), (!this.$store.isInEditMode) ? _c('navigation', {
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
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-60dcb7c3", module.exports)
  }
}

/***/ }),
/* 466 */
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
/* 467 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "preference-delete-confirmation__modal",
      "uk-modal": "center: true"
    }
  }, [_c('div', {
    staticClass: "uk-modal-dialog uk-modal-body"
  }, [_c('h3', [_vm._v("Delete preference?")]), _vm._v(" "), _c('h5', {
    staticClass: "uk-text-meta uk-margin-remove"
  }, [_vm._v("This cannot be undone.")]), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-small-bottom"
  }), _vm._v(" "), _c('v-btn', {
    staticClass: "uk-modal-close",
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
        _vm.$store.actions.deletePreference(_vm.$store.state.currentPreference)
      }
    }
  }, [_vm._v("Yes")])], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-81f8d292", module.exports)
  }
}

/***/ }),
/* 468 */
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
/* 469 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('selector-wrapper', {
    attrs: {
      "title": "Select your study year"
    }
  }, [_c('div', {
    staticClass: "uk-container bottom--offset "
  }, [_c('div', {
    staticClass: "uk-flex uk-flex-column uk-margin-small-bottom"
  }, [_c('div', {
    staticClass: "uk-margin-top"
  }, _vm._l((_vm.$store.state.preference.faculty.studies), function(study) {
    return (_vm.$store.state.preference.type.type == study.type) ? _c('div', [_c('div', {
      staticClass: "uk-flex uk-margin-small-bottom"
    }, _vm._l((study.years), function(year) {
      return _c('div', {
        staticClass: "uk-button btn-circle btn-circle--large uk-button-default uk-margin-small-right uk-box-shadow-medium",
        class: {
          'uk-box-shadow-large': _vm.toogle(year.yearNumber)
        },
        on: {
          "click": function($event) {
            _vm.goNext({
              year: year
            })
          }
        }
      }, [_vm._v("\n              " + _vm._s(year.yearNumber) + "\n            ")])
    }))]) : _vm._e()
  })), _vm._v(" "), _c('navigation', {
    attrs: {
      "onlyBack": true
    }
  })], 1)])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-8c830122", module.exports)
  }
}

/***/ }),
/* 470 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "full-h uk-flex uk-flex-column uk-background-muted",
    attrs: {
      "id": "display"
    }
  }, [_c('div', {
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
/* 471 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "uk-margin-top navigation__actions"
  }, [(!_vm.onlyForward) ? _c('v-btn', {
    staticClass: "grey--text grey--darken-2",
    attrs: {
      "icon": "icon"
    },
    nativeOn: {
      "click": function($event) {
        _vm.$store.actions.goBack()
      }
    }
  }, [_c('v-icon', [_vm._v("arrow_back")])], 1) : _vm._e(), _vm._v(" "), (!_vm.onlyBack) ? _c('v-btn', {
    staticClass: "grey--text grey--darken-2",
    attrs: {
      "icon": "icon"
    },
    nativeOn: {
      "click": function($event) {
        _vm.$store.actions.goNext(_vm.id)
      }
    }
  }, [_c('v-icon', [_vm._v("arrow_forward")])], 1) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a5aea442", module.exports)
  }
}

/***/ }),
/* 472 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "HomeWrapper"
    }
  }, [_c('div', {
    staticClass: "uk-flex uk-flex-column f-h uk-margin-small-top"
  }, [_c('div', {
    staticClass: "uk-margin-bottom uk-margin-left uk-margin-right uk-flex-column"
  }, [_c('h3', {
    staticClass: "uk-margin-remove"
  }, [_vm._v("Your preferences\n")]), _vm._v(" "), _c('small', {
    staticClass: "uk-text-meta"
  }, [_vm._v(_vm._s(_vm.$store.state.user.preferences.data.length) + " entries")])]), _vm._v(" "), _c('div', {
    staticClass: "uk-background-muted uk-flex--grow"
  }, [_vm._t("default")], 2)]), _vm._v(" "), _c('v-btn', {
    attrs: {
      "primary": "",
      "floating": "",
      "dark": "",
      "id": "create-preference__btn"
    },
    nativeOn: {
      "click": function($event) {
        _vm.$router.push({
          name: 'faculty',
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
     require("vue-hot-reload-api").rerender("data-v-c14d7b0e", module.exports)
  }
}

/***/ }),
/* 473 */
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
            _vm.next(year)
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
/* 474 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('router-view', {
    staticClass: "f-h"
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-c8207ea4", module.exports)
  }
}

/***/ }),
/* 475 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "uk-container uk-margin-small-top "
  }, [_c('div', {
    staticClass: "uk-card content"
  }, [_c('h3', {
    staticClass: "uk-margin-remove"
  }, [_vm._v(" " + _vm._s(_vm.$store.state.preference.faculty.name_en))]), _vm._v(" "), _c('h5', [_vm._v("Change Study Plan ")]), _vm._v(" "), (_vm.$store.state.preference.type) ? _c('div', {
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
  }, [_c('h5', [_vm._v("  " + _vm._s(_vm.$store.state.preference.type.type))])])]) : _c('h6', {
    staticClass: "uk-text-center",
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
  }, [_vm._v(" No study selected ")]), _vm._v(" "), _c('h5', [_vm._v("Change Study Type ")]), _vm._v(" "), (this.$store.state.preference.studyType.name_en) ? _c('div', {
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
  }, [_c('h5', [_vm._v("  " + _vm._s(_vm.$store.state.preference.studyType.name_en))])]) : _c('h6', {
    staticClass: "uk-text-center",
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
  }, [_vm._v(" No study type selected ")]), _vm._v(" "), _c('h5', [_vm._v("Change Year ")]), _vm._v(" "), (_vm.$store.state.preference.year) ? _c('div', {
    staticClass: "btn-circle btn-circle--medium uk-box-shadow-medium",
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
  }, [_vm._v("\n      " + _vm._s(_vm.$store.state.preference.year.yearNumber) + "\n    ")]) : _c('h6', {
    staticClass: "uk-text-center",
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
  }, [_vm._v(" No Year selected ")])]), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-top navigation__actions uk-flex"
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
  }, [_c('v-icon', [_vm._v("arrow_back")])], 1), _vm._v(" "), _c('div', {
    staticClass: "uk-flex--grow"
  }), _vm._v(" "), _c('v-btn', {
    staticClass: "grey--text grey--darken-2",
    attrs: {
      "icon": "icon"
    },
    nativeOn: {
      "click": function($event) {
        _vm.$store.actions.updateUserPreference(_vm.$store.PreferenceStore.makeQueryFromPreference())
      }
    }
  }, [_c('v-icon', [_vm._v("done")])], 1)], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-d8d79302", module.exports)
  }
}

/***/ }),
/* 476 */
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
        _vm.$router.go(-1)
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
/* 477 */,
/* 478 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(395);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("b9c2e6ae", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-051fe8ce\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Resource.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-051fe8ce\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Resource.vue");
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
var content = __webpack_require__(396);
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
/* 480 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(397);
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
/* 481 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(398);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("43e1ea29", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-1870b215\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ResourceTransitionWrapper.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-1870b215\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ResourceTransitionWrapper.vue");
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
var content = __webpack_require__(399);
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
/* 483 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(400);
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
/* 484 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(401);
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
/* 485 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(402);
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
/* 486 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(403);
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
/* 487 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(404);
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
/* 488 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(405);
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
/* 489 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(406);
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
/* 490 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(407);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("24de60b9", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-551b84f9\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SelectorWrapper.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-551b84f9\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SelectorWrapper.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 491 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(408);
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
/* 492 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(409);
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
/* 493 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(410);
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
/* 494 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(411);
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
/* 495 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(412);
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
/* 496 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(413);
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
/* 497 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(414);
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
/* 498 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(415);
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
/* 499 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(416);
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
/* 500 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(417);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("a02e4fca", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-c14d7b0e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./HomeWrapper.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-c14d7b0e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./HomeWrapper.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 501 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(418);
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
/* 502 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(419);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("845467d0", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-c8207ea4\",\"scoped\":false,\"hasInlineConfig\":true}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-c8207ea4\",\"scoped\":false,\"hasInlineConfig\":true}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 503 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(420);
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
/* 504 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(421);
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
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })
]),[346]);
//# sourceMappingURL=app.d927f7ad1cef80df7751.js.map