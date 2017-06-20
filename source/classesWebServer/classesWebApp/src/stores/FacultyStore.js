import { Store, Action } from 'flue-vue'
import axios from 'axios'
import api from '../api.js'

class FacultyStore extends Store {
  constructor() {
    super()
    this.state = {}
    this.state.faculties = []
  }

  onFetchFacultySuccess({ data }) {
    this.state.faculties = data
    // sort the years TODO do it server side
    for (let faculty of this.state.faculties) {
      faculty.studies.forEach(study => study.years.sort((a, b) => a.yearNumber > b.yearNumber))
    }
  }

  reduce(action) {
    this.reduceMap(action, {
      FETCH_FACULTY_SUCCESS: this.onFetchFacultySuccess
    })
  }

  actions(dispatcher, context) {
    return {
      fetchFaculties() {
        dispatcher.dispatch(new Action("FETCH_FACULTY_LOADING"))
        api.faculty.fetchFaculties()
          .then(({ data }) => {
            dispatcher.dispatch(new Action("FETCH_FACULTY_SUCCESS", { data }))
          })
      }
    }
  }
}

const facultyStore = new FacultyStore()
export default facultyStore
