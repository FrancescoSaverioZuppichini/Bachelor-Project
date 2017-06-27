import axios from 'axios'

const BASE_URL = ''
const CLASSES_URL = '/classes/api'
const TACITA_URL = '/tacita/api'

export default {
  'user': {},
  'display': {},
  'faculty': {
    fetchFaculties() {
      return axios.get(`${BASE_URL}${CLASSES_URL}/faculty?info=all`)
    }
  },
  'year': {
    fetchYears() {
      return axios.get(`${BASE_URL}${CLASSES_URL}/year`)
    }
  },
  'user': {
    getMe(email) {
      return axios.get(`${BASE_URL}${TACITA_URL}/user/?email=${email}`)
    },
    getMeById(userId) {
      return axios.get(`${BASE_URL}${TACITA_URL}/user/${userId}`)
    },
    fetchUserPreferences(userId) {
      return axios.get(`${BASE_URL}${CLASSES_URL}/preference?userId=${userId}`)
    },
  },
  'display': {
    sendAppToDisplay(displayId, appId) {
      return axios.put(`${BASE_URL}${TACITA_URL}/display/${displayId}/app/${appId}`)
    },
    fetchDisplay(displayId) {
      return axios.get(`${BASE_URL}${TACITA_URL}/display/${displayId}`)

    }
  },
  'preference': {
    updatePreference(preference) {
      return axios.put(`${BASE_URL}${CLASSES_URL}/preference/${preference.id}`, { ...preference })
    },
    addPreference(preference) {
      return axios.post(`${BASE_URL}${CLASSES_URL}/preference`, { ...preference })
    },
    deletePreference(preferenceId, userId) {
      return axios.delete(`${BASE_URL}${CLASSES_URL}/preference/${preferenceId}`, { data: { userId } })
    }
  },
  'course': {
    search({ facultyId, year, type, studyType }) {
      return axios.get(`${BASE_URL}${CLASSES_URL}/course/search?facultyId=${facultyId}&semester_academic_year=SP 2017&yearNumber=${year}&studyType=${studyType}&type=${type}`)
    },
    fetchSchedules(course) {
      return axios.get(`${BASE_URL}${CLASSES_URL}/course/${course.id}/schedules`)
    },
    fetchCourse(id) {
      return axios.get(`${BASE_URL}${CLASSES_URL}/course/${id}`)
    },

  },
  'application': {
    fetchApplications() {
      return axios.get(`${BASE_URL}${TACITA_URL}/application`)
    },
    fetchApplication(app) {
      return axios.get(`${BASE_URL}${TACITA_URL}/application/${app.id}`)
    }
  },
  'schedule': {},

}
