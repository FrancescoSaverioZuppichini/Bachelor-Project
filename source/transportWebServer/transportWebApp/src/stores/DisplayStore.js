import Vue from 'vue'
import api from '../api.js'
import {
  SuperStore,
  Store,
  Action
} from 'flue-vue'

import utils from '../utils.js'

class DisplayStore extends Store {
  constructor() {
    super()
    this.state.display = {}
    this.state.usersCache = {}
    this.state.coords = {}

  }

  shouldDisplayPreference(data) {
    return data.displayId == this.state.display.id
  }

  /**
   * Check if it should display the current
   * preferences, if yes, it calls the correct action
   * @param  {Object} data Preference pulled from the socket
   */
  onUserNearby(data) {
    if (this.shouldDisplayPreference(data)) {
      this.state.usersCache[data.userId] = data.color
      this.sStore.actions.displayUserPreferences(data)
    }
  }

  onFetchDisplaySuccess({ display }) {
    this.state.display = display
    this.sStore.actions.sendAppToDisplay(this.state.display.id, 2)
  }

  onDisplayChangeApp(data) {
    if (data.appId == this.state.display.app.id) return
    api.application.fetchApplication({ id: data.appId })
      .then(({ data }) => window.location.href = window.location.origin + `/${data.url}` + `/display/${this.state.display.id}`)
  }

  reduce(action) {
    this.reduceMap(action, {
      USER_NEARBY: this.onUserNearby,
      FETCH_DISPLAY_SUCCESS: this.onFetchDisplaySuccess,
      DISPLAY_CHANGE_APP: this.onDisplayChangeApp
    })
  }

  actions(dispatcher, ctx) {
    return {
      fetchDisplay(displayId) {
        api.display.fetchDisplay(displayId)
          .then(({ data }) => {
            dispatcher.dispatch(new Action("FETCH_DISPLAY_SUCCESS", { display: data }))
          })
      },
      displayUserPreferences(user) {
        // we don't care about loading
        api.user.fetchUserPreferences(user.userId)
          .then((res) => {
            dispatcher.dispatch(new Action("DISPLAY_USER_PREFERENCE", { userPreferences: res.data, color: user.color }))
          })
      },
      sendAppToDisplay(displayId, appId) {
        ctx.state.display.app = { id: appId }
        api.display.sendAppToDisplay(displayId, appId)
      }
    }
  }
}

const displayStore = new DisplayStore()
export default displayStore
