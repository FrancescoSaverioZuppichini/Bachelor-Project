import Vue from 'vue'
import axios from 'axios'
import LocationStore from './LocationStore.js'
import ConnectionStore from './ConnectionStore.js'

class Store {
  constructor() {
    this.locationStore = LocationStore
    this.connectionStore = ConnectionStore
  }

  getDefaultData() {
    this.locationStore.getNearbyLocations()
  }
}

const store = new Store()
// make store reactive
var vm = new Vue({
  data: {
    store: store
  }
})
// inject store in each component
Vue.mixin({
  created: function() {
    this.$store = store

  }
})

export default store
