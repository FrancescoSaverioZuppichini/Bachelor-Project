import Vue from 'vue'
import axios from 'axios'
import {
  SuperStore,
  Store,
  Action
} from 'flue-vue'

class ConnectionStore extends Store {
  constructor() {
    super()
    //  show by display based on the position
    this.state.leavingSoon = {}
    // show by display based on users
    this.state.connections = []
  }
  reduce(){}


  getConnectionsFromLocation(locationId) {
    return axios.get('http://localhost:8000/opendata/api/stationboard', {
        params: {
          station: locationId,
          limit: 2
        }
      })
      .then((res) => {
        console.log(res.data)
        this.state.leavingSoon = res.data
      })
  }
}

const connectionStore = new ConnectionStore()

export default connectionStore
