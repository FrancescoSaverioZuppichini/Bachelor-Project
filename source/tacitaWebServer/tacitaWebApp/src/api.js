import axios from 'axios'

const BASE_URL = ''
const TACITA_URL = '/tacita/api'
const APPLICATION_URL = '/application/api'

export default {
  'user': {
    fetchUserPreferences(userId) {},
    getMe(email) {
      return axios.get(`${BASE_URL}${TACITA_URL}/user/?email=${email}`)
    },
    getMyApps(id) {
      return axios.get(`${BASE_URL}${TACITA_URL}/user/${id}/?context=apps`)
    },
    updateUser(user) {
      return axios.put(`${BASE_URL}${TACITA_URL}/user/${user.id}`, { ...user })
    },
    fetchUserPreferences(userId) {
      return axios.get(`${BASE_URL}${CLASSES_URL}/preference?userId=${userId}`)
    },
    toogleApplication(userId, appId) {
      return axios.put(`${BASE_URL}${TACITA_URL}/user/${userId}/app/${appId}`)
    },
    create(email) {
      return axios.post(`${BASE_URL}${TACITA_URL}/user`, { email })

    }
  },
  'application': {
    fetchApplications() {
      return axios.get(`${BASE_URL}${TACITA_URL}/application`)
    }
  },
  'display': {
    fetchDisplay(id, context) {
      return axios.get(`${BASE_URL}${TACITA_URL}/display/${id}?context=${context}`)

    }
  },
  'beacon': {
    fetchByBeaconId(beaconId) {
      return axios.get(`${BASE_URL}${TACITA_URL}/beacon/find?beaconId=${beaconId}`)

    }
  }
}
