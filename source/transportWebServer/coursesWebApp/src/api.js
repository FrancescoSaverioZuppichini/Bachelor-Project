import axios from 'axios'

const BASE_URL = 'http://localhost:3000'
const CLASSES_URL = '/classes/api'
const USER_URL = '/auth/api'

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
    fetchUserPreferences(userId) {},
    getMe(email) {
      return axios.get(`${BASE_URL}${USER_URL}/user/?email=${email}`)
    },
    fetchUserPreferences(userId) {
      return axios.get(`${BASE_URL}${CLASSES_URL}/preference?userId=${userId}`)
    },
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
    }
  },
  'schedule': {},

}
