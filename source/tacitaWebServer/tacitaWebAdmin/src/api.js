import axios from 'axios'

const BASE_URL = ''
const TACITA_URL = '/tacita/api'
const APPLICATION_URL = '/application/api'

export default {
  'application': {
    fetchApplications() {
      return axios.get(`${BASE_URL}${TACITA_URL}/application`)
    }
  },
  'display': {
    fetchDisplays(context) {
      return axios.get(`${BASE_URL}${TACITA_URL}/display?context=${context}`)
    },
    fetchDisplay(id, context) {
      return axios.get(`${BASE_URL}${TACITA_URL}/display/${id}?context=${context}`)
    },
    createDisplay(display) {
      return axios.post(`${BASE_URL}${TACITA_URL}/display/`, { display })

    },
    deteleDisplay(display) {
      return axios.delete(`${BASE_URL}${TACITA_URL}/display/${display.id}`)
    }
  },
  'beacon': {
    fetchBeacons() {
      return axios.get(`${BASE_URL}${TACITA_URL}/beacon`)

    },
    fetchByBeaconId(beaconId) {
      return axios.get(`${BASE_URL}${TACITA_URL}/beacon/find?beaconId=${beaconId}`)
    },
    editBeacon(beacon) {
      return axios.put(`${BASE_URL}${TACITA_URL}/beacon/${beacon.id}`, { ...beacon })
    },
    createBeacon(beacon) {
      return axios.post(`${BASE_URL}${TACITA_URL}/beacon`, beacon)
    },
    deleteBeacon(beacon) {
      return axios.delete(`${BASE_URL}${TACITA_URL}/beacon/${beacon.id}`)

    }
  }
}
