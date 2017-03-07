import Vue from 'vue'
import axios from 'axios'

class ConnectionStore {
  constructor() {
    this.state = {}
    //  show by display based on the position
    this.state.leavingSoon = {}
    // show by display based on users
    this.state.connections = []
  }

  getConnectionsFromLocation(locationId) {
    return axios.get('http://localhost:8000/opendata/api/stationboard', {
        params: {
          station: locationId,
          limit: 10
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
