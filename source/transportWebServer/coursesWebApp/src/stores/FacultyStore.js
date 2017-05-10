import { Store, Action } from 'flue-vue'
import axios from 'axios'
import api from '../api.js'

class FacultyStore extends Store {
  constructor() {
    super()
    this.state = {}
    this.state.faculties = []
  }

  reduce(action) {
    this.reduceMap(action, {
      FETCH_FACULTY_SUCCESS: (({ data }) => { this.state.faculties = data })
    })
  }
  // actions takes the dispacher and the store back from the superStore,
  // so we can call our function as soon as we dispatch
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
