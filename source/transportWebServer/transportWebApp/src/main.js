// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import VueCarousel from 'vue-carousel';

import connectionStore from './stores/ConnectionStore.js'
import locationStore from './stores/LocationStore.js'
import userStore from './stores/UserStore.js'
import preferenceStore from './stores/PreferenceStore.js'
import displayStore from './stores/DisplayStore.js'
import transportDisplayStore from './stores/TransportDisplayStore.js'

import { flueVue,
  SuperStore
} from 'flue-vue'

import socket from './socket.js'
import router from './router.js'

// Vue.use(VueCarousel)
Vue.use(flueVue)

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
SuperStore.addStores([locationStore, userStore, preferenceStore,connectionStore,displayStore,transportDisplayStore])
// loads the Icon plugin
window.UIkit = UIkit
UIkit.use(Icons);
// import bootstrapStyle from '../node_modules/bootstrap/dist/css/bootstrap.min.css'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: {
    App
  }
})
