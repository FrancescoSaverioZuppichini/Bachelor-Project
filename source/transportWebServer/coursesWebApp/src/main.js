// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import { SuperStore, flueVue } from 'flue-vue'
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

import AnimatedVue from 'animated-vue'
Vue.use(AnimatedVue)

window.UIkit = UIkit
UIkit.use(Icons);

Vue.use(flueVue)

import facultyStore from './stores/FacultyStore.js'
import courseStore from './stores/CourseStore.js'
import yearStore from './stores/YearStore.js'
import preferenceStore from './stores/PreferenceStore.js'
import displayStore from './stores/DisplayStore.js'
import scheduleStore from './stores/ScheduleStore.js'
import userStore from './stores/UserStore.js'

import socket from './socket.js'

SuperStore.addStores([facultyStore, courseStore, yearStore, preferenceStore, displayStore, scheduleStore, userStore])
SuperStore.actions.initializeSchedules()
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
