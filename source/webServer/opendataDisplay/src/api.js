import axios from 'axios'
import utils from './utils.js'

const BASE_URL = "/"

export default {
  fetchNearbyLocations() {
    return axios.get('http://localhost:8080/api/station')
  },
  fetchLocationStationBoard(location) {
    // return axios.get('http://localhost:8080/api/opendata/stationboards', {
    //   params: {
    //     station: location.id,
    //     limit: 5
    //   }
    // })
    return axios.get(`http://localhost:8080/api/station/${location.id}/stationboards`)
  },
  fetchBusesForStation(stationId) {
    return axios.get(`http://localhost:8080/api/station/${stationId}/buses`)
  },
  "users": {
    fetchUserPreferences(userId) {
      return axios.get("http://localhost:8080/api/users/" + userId + "/preference")
    }
  },
  "stationboards": {
    featchStationboards({ stationId, busId }) {
      return axios.get(`api/stationboard/?stationId=${stationId}&busId=${busId}`)
    }
  },
  "preference": {
    addPreference(preference) {
      return axios.post('http://localhost:8080/api/users/1/preference', { ...preference })
    },
    updatePreference(preference) {
      return axios.put('http://localhost:8080/api/users/1/preference', { ...preference })
    },
    editPreference(preference) {
      return axios.put('http://localhost:8080/api/users/1/preference', { ...preference })
    },
    removePreference(preferenceId) {
      return axios.delete(`http://localhost:8080/api/preference/${preferenceId}`)
    }
  }
}
