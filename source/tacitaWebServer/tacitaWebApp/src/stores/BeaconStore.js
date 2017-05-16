import axios from 'axios'
import Vue from 'vue'
import router from '../router/index.js'

import ws from '../socket.js'

import { SuperStore, Store, Action } from 'flue-vue'
import api from '../api.js'

class BeaconStore extends Store {
  constructor() {
    super()
    this.state.beaconCache = {}
  }

  onBeaconFound({ data }) {
    this.state.beaconCache[data.beacon_id] = data
    const displayId = data.display_id
    this.sStore.actions.foundDisplay({ displayId })
  }

  onBeaconLost({ data }) {
    const displayId = this.state.beaconCache[data.macAddress].display_id
    this.sStore.actions.lostDisplay({ displayId })
    delete this.state.beaconCache[data.beacon_id]
  }

  reduce(action) {
    this.reduceMap(action, {
      BEACON_FOUND: this.onBeaconFound,
      BEACON_LOST: this.onBeaconLost
    })
  }

  actions(dispatcher, ctx) {
    return {
      beaconFound(beacon) {
        api.beacon.fetchByBeaconId(beacon.macAddress)
          .then(({ data }) => {
            dispatcher.dispatch(new Action('BEACON_FOUND', { data }))
          })
      },
      beaconLost(data) {
        dispatcher.dispatch(new Action('BEACON_LOST', { data }))
      }
    }
  }
}


const beaconStore = new BeaconStore()
export default beaconStore
