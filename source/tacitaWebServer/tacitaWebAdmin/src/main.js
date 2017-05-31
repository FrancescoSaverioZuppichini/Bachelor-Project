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

import displayStore from './stores/DisplayStore.js'
import beaconStore from './stores/BeaconStore.js'
import applicationStore from './stores/applicationStore.js'

import socket from './socket.js'

SuperStore.addStores([displayStore,beaconStore,applicationStore])

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
