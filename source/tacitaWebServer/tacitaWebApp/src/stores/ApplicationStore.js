import { Store, Action } from 'flue-vue'
import axios from 'axios'
import api from '../api.js'

class ApplicationStore extends Store {
  constructor() {
    super()
    this.state = {}
    this.state.applicationsCache = {}
    this.state.applications = { data: [], error: {}, isLoading: false }
    this.state.toogledApplications = () => this.state.applications.data.filter(app => app.toogle)
  }

  fetchApplicationsLoading() {
    this.state.applications.isLoading = true
    this.state.applications.data = []
  }

  fetchApplicationsSuccess({ data }) {
    data.forEach(app => {
      app.toogle = false
      this.state.applicationsCache[app.id] = app
    })
    this.state.applications.data = data
    this.state.applications.isLoading = false

  }

  onToogleAllApp({ state }) {
    for (let app of this.state.applications.data) {
      if (app.toogle != state) this.sStore.actions.toogleApp(app)
      app.toogle = state
    }
  }

  reduce(action) {
    this.reduceMap(action, {
      FETCH_APPLICATION_LOADING: this.fetchApplicationsLoading,
      FETCH_APPLICATION_SUCCESS: this.fetchApplicationsSuccess,
      FETCH_APPLICATION_FAILURE: ({ err }) => { this.state.applications.error = err },
      TOOGLE_APP_SUCCESS: (({ app }) => { /* toogle state is handled client side */ }),
      // GET_ME_SUCCESS: (() => this.sStore.actions.fetchApplications()),
      GET_MY_APPS_SUCCESS: this.onGetMyAppsSuccess,
      TOOGLE_ALL_APP: this.onToogleAllApp

    })
  }

  actions(dispatcher, context) {
    return {
      fetchApplications() {
        dispatcher.dispatch(new Action("FETCH_APPLICATION_LOADING"))
        return api.application.fetchApplications()
          .then(( data ) => dispatcher.dispatch(new Action("FETCH_APPLICATION_SUCCESS",  data )) )
          .catch((err) => console.log(err))
      }
    }
  }
}

const applicationStore = new ApplicationStore()
export default applicationStore
