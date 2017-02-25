// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Store from './stores/Store.js'

import bootstrapStyle from '../node_modules/bootstrap/dist/css/bootstrap.min.css'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  Store,
  template: '<App/>',
  components: {
    App
  }
})
