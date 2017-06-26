import Vue from 'vue'
import api from '../api.js'
import {
  SuperStore,
  Store,
  Action
} from 'flue-vue'

import utils from '../utils.js'

class TransportDisplayStore extends Store {
  constructor() {
    super()
  }

  onFetchDisplaySuccess({ display }) {
    utils.getCurrentPosition()
      .then(({ coords }) => {
        Vue.set(this.state.display, 'coords', {})
        Vue.set(this.state.display.coords, 'latitude', coords.latitude)
        Vue.set(this.state.display.coords, 'longitude', coords.longitude)
      })
  }
  reduce(action) {
    this.reduceMap(action, {
      FETCH_DISPLAY_SUCCESS: this.onFetchDisplaySuccess,
    })
  }
  actions() {
    return {}
  }
}

const transportDisplayStore = new TransportDisplayStore

export default transportDisplayStore
