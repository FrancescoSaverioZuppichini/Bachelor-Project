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
    // check if bus is in the current preference
    const currentPreference = this.sStore.state.currentPreference
    console.log(currentPreference.buses);
    for (let connInPref of currentPreference.buses) {
      for (let conn of this.state.connections) {
          if (conn.id == connInPref.id) Vue.set(conn,'toogle', true)
      }
    }
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
