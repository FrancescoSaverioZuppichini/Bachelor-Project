import Vue from 'vue'
import axios from 'axios'

class Store {
  constructor() {
    this.state = {}

  }
  install(Vue, options) {
    Vue.$store = this
  }

  getCurrentPosition() {
    navigator.geolocation.getCurrentPosition((pos) => {
      this.state.pos = pos
    })
  }

  getLocations(options) {
    return axios.get('http://localhost:8000/opendata/api/locations', {
      params: options.params
    })

  }

  getCurrentPosition() {
    return new Promise(function(resolve, reject) {
      navigator.geolocation.getCurrentPosition(function(position) {
        resolve(position);
      });
    });
  }

  getNearbyLocations() {
    return this.getCurrentPosition()
      .then((pos) => {
        this.state.pos = pos
        const options = {
          params: {
            x: this.state.pos.coords.latitude,
            y: this.state.pos.coords.longitude
          }
        }
        return this.getLocations(options)
      })

  }
}

const store = new Store()
export default store
