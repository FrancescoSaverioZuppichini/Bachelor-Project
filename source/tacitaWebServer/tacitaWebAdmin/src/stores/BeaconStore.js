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
    this.state.freeBeacons = () => this.state.beacons.data.filter((beacon) => beacon.display_id == null)

  }
  find(toFind) {
    return this.state.beacons.data.filter(beacon => beacon.id == toFind.id)[0]
  }

  onEditBeaconSuccess({ data, beacon }) {
    var oldBeacon = this.find(beacon)
    oldBeacon = Object.assign(oldBeacon, beacon)
    // oldBeacon.display_id = beacon.display_id
    Vue.set(oldBeacon, 'edit', false)
    // oldBeacon.display_id = beacon.display_id

  }
  onCreateBeaconSuccess({ data }) {
    this.state.beacons.data.push(data)
    this.state.showCreateDisplayModal = false
  }

  reduce(action) {
    this.reduceMap(action, {
      FETCH_BEACONS_SUCCESS: (({ data }) => this.state.beacons.data = data),
      EDIT_BEACON_SUCCESS: this.onEditBeaconSuccess,
      DELETE_BEACON_SUCCESS: (({ beacon }) => this.state.beacons.data.splice(this.state.beacons.data.indexOf(beacon), 1)),
      CREATE_BEACON_SUCCESS: this.onCreateBeaconSuccess
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
      },
      createBeacon(beacon) {
        api.beacon.createBeacon(beacon)
          .then((data) => dispatcher.dispatch(new Action('CREATE_BEACON_SUCCESS', data)))
      },
      deleteBeacon(beacon) {
        api.beacon.deleteBeacon(beacon)
          .then((data) => dispatcher.dispatch(new Action('DELETE_BEACON_SUCCESS', { beacon })))
      }
    }
  }
}


const beaconStore = new BeaconStore()
export default beaconStore
