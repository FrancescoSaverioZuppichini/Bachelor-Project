import Vue from 'vue'
import api from '../api.js'
import {
  SuperStore,
  Store,
  Action
} from 'flue-vue'

class DisplayStore extends Store {
  constructor() {
    super()
    this.state.display = {}
  }

  /**
   * When a user is closed to the display
   * fetch it's preference and display them
   * on the fly
   **/
  onUserNearby({ userId, displayId }) {
    if (displayId != this.state.display.id) {
      console.log('NOT THIS DISPLAY');
      return
    }
    this.sStore.actions.displayUserPreferences(userId)
  }

  fetchDisplaySuccess({ display }) {
    this.state.display = display
    this.sStore.actions.sendAppToDisplay(this.state.display.id, 1)
  }

  reduce(action) {
    this.reduceMap(action, {
      USER_NEARBY: this.onUserNearby,
      FETCH_DISPLAY_SUCCESS: this.fetchDisplaySuccess
    })
  }

  actions(dispatcher) {
    return {
      fetchDisplay(displayId) {
        api.display.fetchDisplay(displayId)
          .then(({ data }) => {
            dispatcher.dispatch(new Action("FETCH_DISPLAY_SUCCESS", { display: data }))
          })
      },
      displayUserPreferences(userId) {
        // we don't care about loading
        api.user.fetchUserPreferences(userId)
          .then((res) => {
            dispatcher.dispatch(new Action("DISPLAY_USER_PREFERENCE", { userPreferences: res.data }))
          })
      },
      sendAppToDisplay(displayId, appId) {
        api.display.sendAppToDisplay(displayId, appId)
      }
    }
  }
}

const displayStore = new DisplayStore()

export default displayStore
