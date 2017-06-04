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
    this.state.connections = data.buses
    this.state.connections.forEach(conn => Vue.set(conn, 'toogle', false))
    // check if bus is in the current preference
    const preference = this.sStore.state.currentPreference
    for (let connInPref of preference.buses) {
      for (let conn of this.state.connections) {
        if (conn.id == connInPref.id) Vue.set(conn, 'toogle', true)
      }
    }
  }

  onFetchPassListSuccess({ data, bus }) {
    bus.passList = data
    bus.passList.sort((a, b) => a.departure_timestamp < b.departure_timestamp)
  }

  reduce(action) {
    this.reduceMap(action, {
      FETCH_BUSES_SUCCESS: this.fetchBusesSuccess,
      FETCH_BUS_PASS_LIST_SUCCESS: this.onFetchPassListSuccess,
      ADD_PREFERENCE_SUCCESS: () => this.state.connections.forEach(connection => connection.toogle = false)
    })
  }

  actions(dispatcher) {
    return {
      getPassList(bus) {
        return api.bus.getPassList(bus)
          .then(({ data }) => dispatcher.dispatch(new Action('FETCH_BUS_PASS_LIST_SUCCESS', { data, bus })))
      },
      fetchBusesFromStation(stationsId) {
        return api.fetchBusesForStation(stationsId)
          .then((data ) => dispatcher.dispatch(new Action('FETCH_BUSES_SUCCESS', data )))

      }
    }
  }


}

const connectionStore = new ConnectionStore()

export default connectionStore
