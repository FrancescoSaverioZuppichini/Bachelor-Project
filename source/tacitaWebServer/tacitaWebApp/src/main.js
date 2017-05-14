// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
window.jQuery = window.$ = require('jquery')

import { SuperStore, flueVue } from 'flue-vue'
import UIkit from 'uikit';
// import Icons from 'uikit/dist/js/uikit-icons';

window.UIkit = UIkit
// UIkit.use(Icons);

Vue.use(flueVue)

import userStore from './stores/UserStore.js'
import applicationStore from './stores/ApplicationStore.js'
import displayStore from './stores/DisplayStore.js'

import socket from './socket.js'

SuperStore.addStores([userStore, applicationStore, displayStore])

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
