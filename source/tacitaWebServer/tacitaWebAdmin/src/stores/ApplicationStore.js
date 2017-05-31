import { Store, Action } from 'flue-vue'
import axios from 'axios'
import api from '../api.js'

class ApplicationStore extends Store {
  constructor() {
    super()
    this.state = {}
    this.state.applications = { data: [], error: {}, isLoading: false }
  }

  fetchApplicationsLoading() {
    this.state.applications.isLoading = true
    this.state.applications.data = []
  }

  fetchApplicationsSuccess({ data }) {
    this.state.applications.data = data
    this.state.applications.isLoading = false
  }


  reduce(action) {
    this.reduceMap(action, {
      FETCH_APPLICATION_LOADING: this.fetchApplicationsLoading,
      FETCH_APPLICATION_SUCCESS: this.fetchApplicationsSuccess,
      FETCH_APPLICATION_FAILURE: ({ err }) => { this.state.applications.error = err },

    })
  }

  actions(dispatcher, context) {
    return {
      fetchApplications() {
        dispatcher.dispatch(new Action("FETCH_APPLICATION_LOADING"))
        return api.application.fetchApplications()
          .then((data) => dispatcher.dispatch(new Action("FETCH_APPLICATION_SUCCESS", data)))
          .catch((err) => console.log(err))
      }
    }
  }
}

const applicationStore = new ApplicationStore()
export default applicationStore
