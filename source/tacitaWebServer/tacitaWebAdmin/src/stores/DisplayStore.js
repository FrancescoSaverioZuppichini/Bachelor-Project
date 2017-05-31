import axios from 'axios'
import Vue from 'vue'
import router from '../router/index.js'

import ws from '../socket.js'

import { SuperStore, Store, Action } from 'flue-vue'
import api from '../api.js'

class DisplayStore extends Store {
  constructor() {
    super()
    this.state.displays = { data: [], error: {}, isLoading: false }
    this.state.isDraggingBeacons = false
    this.state.showCreateDisplayModal = false
  }

  addBeacon(display) {
    Vue.set(display, 'beacons', () => {
      return this.sStore.state.beaconsLinkTo(display.id)
    })
  }

  onFetchDisplaysSuccess({ data }) {
    this.state.displays.data = data
    this.state.displays.isLoading = false
    // get beacons reference
    this.state.displays.data.forEach(display => this.addBeacon(display))
  }

  onCreateDisplaySuccess({ data }) {
    this.state.showCreateDisplayModal = false
    this.addBeacon(data)
    this.state.displays.data.push(data)
  }
  reduce(action) {
    this.reduceMap(action, {
      FETCH_DISPLAYS_SUCCESS: this.onFetchDisplaysSuccess,
      DELETE_DISPLAY_SUCCESS: (({ display }) => this.state.displays.data.splice(this.state.displays.data.indexOf(display),1)),
      CREATE_DISPLAY_SUCCESS: this.onCreateDisplaySuccess
    })
  }

  actions(dispatcher, ctx) {
    return {
      fetchDisplays() {
        api.display.fetchDisplays('all')
          .then((data) => dispatcher.dispatch(new Action('FETCH_DISPLAYS_SUCCESS', data)))
      },
      createDisplay(display) {
        api.display.createDisplay(display)
          .then((data) => dispatcher.dispatch(new Action('CREATE_DISPLAY_SUCCESS', data)))
      },
      deleteDisplay(display) {
        api.display.deteleDisplay(display)
          .then(() => dispatcher.dispatch(new Action('DELETE_DISPLAY_SUCCESS', { display })))
      }
    }
  }
}


const displayStore = new DisplayStore()
export default displayStore
