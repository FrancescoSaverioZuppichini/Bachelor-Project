import axios from 'axios'
import Vue from 'vue'
import router from '../router/index.js'

import ws from '../socket.js'

import { SuperStore, Store, Action } from 'flue-vue'
import api from '../api.js'

class BeaconStore extends Store {
  constructor() {
    super()
    this.state.beacons = { data: [], error: {}, isLoading: false }
    this.state.beaconsLinkTo = (id) => this.state.beacons.data.filter((beacon) => beacon.display_id == id)
    this.state.freeBeacons = () => this.state.beacons.data.filter((beacon) => !beacon.display_id)

  }
  find(toFind) {
    return this.state.beacons.data.filter(beacon => beacon.id == toFind.id)[0]
  }

  onEditBeaconSuccess({ data, beacon }) {
    this.find(beacon).display_id = beacon.display_id
  }

  reduce(action) {
    this.reduceMap(action, {
      FETCH_BEACONS_SUCCESS: (({ data }) => this.state.beacons.data = data),
      EDIT_BEACON_SUCCESS: this.onEditBeaconSuccess
    })
  }

  actions(dispatcher, ctx) {
    return {
      fetchBeacons() {
        api.beacon.fetchBeacons()
          .then((data) => dispatcher.dispatch(new Action('FETCH_BEACONS_SUCCESS', data)))
      },
      editBeacon(beacon) {
        api.beacon.editBeacon(beacon)
          .then(({ data }) => dispatcher.dispatch(new Action('EDIT_BEACON_SUCCESS', { data, beacon })))
      }
    }
  }
}


const beaconStore = new BeaconStore()
export default beaconStore
