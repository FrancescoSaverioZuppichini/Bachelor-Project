import axios from 'axios'
import utils from './utils.js'

const BASE_URL = ''
const TRANSPORT_URL = '/transport/api'
const TACITA_URL = '/tacita/api'

export default {
  fetchNearbyLocations() {
    return axios.get(`${BASE_URL}${TRANSPORT_URL}/station`)
  },
  fetchLocationStationBoard(location) {
    return axios.get(`${BASE_URL}${TRANSPORT_URL}/station/${location.id}/stationboards`)
  },
  fetchBusesForStation(stationId) {
    return axios.get(`${BASE_URL}${TRANSPORT_URL}/station/${stationId}/buses`)
  },
  "users": {
    getMe(email) {
      return axios.get(`${BASE_URL}${TACITA_URL}/user/?email=${email}`)
    },
    fetchUserPreferences(userId) {
      return axios.get(`${BASE_URL}${TRANSPORT_URL}/preference?userId=${userId}`)
    }
  },
  'bus': {
    getPassList(bus) {
      return axios.get(`${BASE_URL}${TRANSPORT_URL}/bus/${bus.bus_id}/passList?direction=${bus.to}`)
    }
  },
  "user": {
    getMe(email) {
      return axios.get(`${BASE_URL}${TACITA_URL}/user/?email=${email}`)
    },
    getMeById(userId) {
      return axios.get(`${BASE_URL}${TACITA_URL}/user/${userId}`)
    },
    fetchUserPreferences(userId) {
      return axios.get(`${BASE_URL}${TRANSPORT_URL}/preference?userId=${userId}`)
    }
  },
  "stationboards": {
    featchStationboards({ stationId, busId }) {
      return axios.get(`api/stationboard/?stationId=${stationId}&busId=${busId}`)
    }
  },
  "preference": {
    addPreference(preference) {
      return axios.post(`${BASE_URL}${TRANSPORT_URL}/preference`, { ...preference })
    },
    updatePreference(preference) {
      return axios.put(`${BASE_URL}${TRANSPORT_URL}/preference`, { ...preference })
    },
    editPreference(preference) {
      return axios.put(`${BASE_URL}${TRANSPORT_URL}/preference`, { ...preference })
    },
    removePreference(preferenceId, userId) {
      return axios.delete(`${BASE_URL}${TRANSPORT_URL}/preference/${preferenceId}?userId=${userId}`)
    }
  },
  'display': {
    sendAppToDisplay(displayId, appId) {
      return axios.put(`${BASE_URL}${TACITA_URL}/display/${displayId}/app/${appId}`)
    },
    fetchDisplay(displayId) {
      return axios.get(`${BASE_URL}${TRANSPORT_URL}/display/${displayId}`)

    }
  },
  'application': {
    fetchApplications() {
      return axios.get(`${BASE_URL}${TACITA_URL}/application`)
    },
    fetchApplication(app) {
      return axios.get(`${BASE_URL}${TACITA_URL}/application/${app.id}`)
    }
  }
}
