import axios from 'axios'
import Vue from 'vue'
import router from '../router/index.js'

import ws from '../socket.js'

import { SuperStore, Store, Action } from 'flue-vue'
import api from '../api.js'

class DisplayStore extends Store {
  constructor() {
    super()
    this.state.displays = { data: [], error: {}, isLoading: false }
    this.state.isDraggingBeacons = false
    this.state.showCreateDisplayModal = false
    this.state.isDraggingBeacon = false
  }

  addBeacon(display) {
    Vue.set(display, 'beacons', () => {
      return this.sStore.state.beaconsLinkTo(display.id)
    })
  }

  onFetchDisplaysSuccess({ data }) {
    this.state.displays.data = data
    this.state.displays.isLoading = false
    // get beacons reference
    this.state.displays.data.forEach(display => this.addBeacon(display))
  }

  onCreateDisplaySuccess({ data }) {
    this.state.showCreateDisplayModal = false
    this.addBeacon(data)
    this.state.displays.data.push(data)
  }

  onDisplayChangeApp({ data }) {
    console.log(data);
  }

  onChangeDisplayAppSuccess({ display, app }) {
    display.apps = [app]
    this.onToogleDisplayApplicationsEdit({ display })
  }

  onToogleDisplayApplicationsEdit({ display }) {
    console.log(display);
    if (display.editApplications == undefined) Vue.set(display, 'editApplications', false)
    display.editApplications = !display.editApplications
  }

  reduce(action) {
    this.reduceMap(action, {
      FETCH_DISPLAYS_SUCCESS: this.onFetchDisplaysSuccess,
      DELETE_DISPLAY_SUCCESS: (({ display }) => this.state.displays.data.splice(this.state.displays.data.indexOf(display), 1)),
      CREATE_DISPLAY_SUCCESS: this.onCreateDisplaySuccess,
      DISPLAY_CHANGE_APP: this.onDisplayChangeApp,
      CHANGE_DISPLAY_APP_SUCCESS: this.onChangeDisplayAppSuccess,
      TOOGLE_DISPLAY_APPLICATIONS_EDIT: this.onToogleDisplayApplicationsEdit

    })
  }

  actions(dispatcher, ctx) {
    return {
      fetchDisplays() {
        api.display.fetchDisplays('all')
          .then((data) => dispatcher.dispatch(new Action('FETCH_DISPLAYS_SUCCESS', data)))
      },
      createDisplay(display) {
        api.display.createDisplay(display)
          .then((data) => dispatcher.dispatch(new Action('CREATE_DISPLAY_SUCCESS', data)))
      },
      deleteDisplay(display) {
        api.display.deteleDisplay(display)
          .then(() => dispatcher.dispatch(new Action('DELETE_DISPLAY_SUCCESS', { display })))
      },
      changeApp(display, app) {
        return api.display.changeApp(display, app)
          .then((data) => dispatcher.dispatch(new Action("CHANGE_DISPLAY_APP_SUCCESS", { display, app })))
          .catch((err) => console.log(err))
      },
      toogleDisplayApplicationsEdit(display) {
        dispatcher.dispatch(new Action('TOOGLE_DISPLAY_APPLICATIONS_EDIT', { display }))
        }
      }
    }
  }


  const displayStore = new DisplayStore()
  export default displayStore
