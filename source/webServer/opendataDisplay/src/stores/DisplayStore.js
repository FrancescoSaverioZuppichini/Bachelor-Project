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
  onUserNearby({ userId }) {
    this.sStore.actions.displayUserPreferences(userId)
  }

  reduce(action) {
    this.reduceMap(action, {
      USER_NEARBY: this.onUserNearby,
    })
  }

  actions(dispatcher) {
    return {
      displayUserPreferences(userId) {
        // we don't care about loading
        api.users.fetchUserPreferences(userId)
          .then((res) => {
            dispatcher.dispatch(new Action("DISPLAY_USER_PREFERENCE", { userPreferences: res.data }))
          })
      }
    }
  }
}

const displayStore = new DisplayStore()

export default displayStore
