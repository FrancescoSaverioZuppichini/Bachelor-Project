import axios from 'axios'
import utils from './utils.js'

const BASE_URL = "http://localhost/8080/"
export default {
  fetchNearbyLocations() {
    return axios.get('http://localhost:8080/api/station')
  },
  // fetchNearbyLocations() {
  //   return utils.getCurrentPosition()
  //     .then((pos) => {
  //       const options = {
  //         params: {
  //           x: pos.coords.latitude,
  //           y: pos.coords.longitude,
  //           type: "station"
  //         }
  //       }
  //       return axios.get('http://localhost:8080/api/opendata/locations', {
  //         params: options.params
  //       })
  //     })
  // },
  fetchLocationStationBoard(location) {
    return axios.get('http://localhost:8080/api/opendata/stationboards', {
      params: {
        station: location.id,
        limit: 5
      }
    })
  },
  fetchBusesForStation(stationId) {
    return axios.get(`http://localhost:8080/api/station/${stationId}/buses`)
  },
  "users": {
    fetchUserPreferences(userId) {
      return axios.get("http://localhost:8080/api/users/" + userId + "/preference")
    }
  },
  "preference": {
    addPreference(preference) {
      return axios.post('http://localhost:8080/api/users/1/preference', { ...preference })
    },
    removePreference(preferenceId) {
      return axios.delete(`http://localhost:8080/api/preference/${preferenceId}`)
    }
  }
}
