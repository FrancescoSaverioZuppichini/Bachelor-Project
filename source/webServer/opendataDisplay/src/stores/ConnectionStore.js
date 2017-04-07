import Vue from 'vue'
import api from '../api.js'
import {
  SuperStore,
  Store,
  Action
} from 'flue-vue'

class ConnectionStore extends Store {
  constructor() {
    super()
    this.state.connections = []
    // show by display based on users
  }

  fetchBusesSuccess({ data }) {
    this.state.connections = data.bus
    this.state.connections.forEach(conn => Vue.set(conn, 'toogle', false))
  }

  reduce(action) {
    this.reduceMap(action, {
      FETCH_BUSES_SUCCESS: this.fetchBusesSuccess,
      ADD_PREFERENCE_SUCCESS: () => this.state.connections.forEach(connection => connection.toogle = false)
    })
  }

  actions(dispatcher) {
    return {
      fetchBusesFromStation(stationsId) {
        return api.fetchBusesForStation(stationsId)
          .then(({ data }) => dispatcher.dispatch(new Action('FETCH_BUSES_SUCCESS', { data })))

      }
    }
  }


}

const connectionStore = new ConnectionStore()

export default connectionStore
