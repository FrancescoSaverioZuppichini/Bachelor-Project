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

  find(toFind) {
    return this.state.applications.data.filter(app => app.id == toFind.id)[0]
  }

  onEditApplicationSuccess({ data, app }) {
    var oldApp = this.find(app)
    oldApp = Object.assign(oldApp, app)
    Vue.set(oldApp, 'edit', false)

  }

  onCreateApplicationSuccess({ data }) {
    this.state.applications.data.push(data)
    this.state.showCreateDisplayModal = false
  }

  reduce(action) {
    this.reduceMap(action, {
      FETCH_APPLICATION_LOADING: this.fetchApplicationsLoading,
      FETCH_APPLICATION_SUCCESS: this.fetchApplicationsSuccess,
      FETCH_APPLICATION_FAILURE: ({ err }) => { this.state.applications.error = err },
      CREATE_APPLICATION_SUCCESS: this.onCreateApplicationSuccess,
      EDIT_APPLICATION_SUCCESS: this.onEditApplicationSuccess,
      DELETE_APPLICATION_SUCCESS: (({ app }) => this.state.applications.data.splice(this.state.applications.data.indexOf(app), 1)),

    })
  }

  actions(dispatcher, context) {
    return {
      fetchApplications() {
        dispatcher.dispatch(new Action("FETCH_APPLICATION_LOADING"))
        return api.application.fetchApplications()
          .then((data) => dispatcher.dispatch(new Action("FETCH_APPLICATION_SUCCESS", data)))
          .catch((err) => console.log(err))
      },
      createApplication(app) {
        return api.application.createApplication(app)
          .then((data) => dispatcher.dispatch(new Action("CREATE_APPLICATION_SUCCESS", data)))
          .catch((err) => console.log(err))
      },
      editApplication(app) {
        return api.application.editApplication(app)
          .then(({ data }) => dispatcher.dispatch(new Action("EDIT_APPLICATION_SUCCESS", { data, app })))
          .catch((err) => console.log(err))
      },
      removeApplication(app) {
        return api.application.removeApplication(app)
          .then((data) => dispatcher.dispatch(new Action("DELETE_APPLICATION_SUCCESS", { app })))
          .catch((err) => console.log(err))
      }
    }
  }
}

const applicationStore = new ApplicationStore()
export default applicationStore
