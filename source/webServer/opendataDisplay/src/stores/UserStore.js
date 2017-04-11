import axios from 'axios'
import Vue from 'vue'

import utils from '../utils.js'
import { SuperStore, Store, Action } from 'flue-vue'
import api from '../api.js'
import FixedSizeStack from '../FixedSizeStack.js'

class UserStore extends Store {
  constructor() {
    super()
    this.state.users = []
    this.state.user = { id: 1 }
    this.state.preferences = { data: [], loading: false }
  }

  fetchUserPreferenceSuccess({ userPreferences }) {
    this.state.preferences.data = userPreferences
    this.state.preferences.loading = false
  }

  removePreferenceSuccess({ preference }) {
    this.state.preferences.data.splice(this.state.preferences.data.indexOf(preference), 1)
  }

  reduce(action) {
    this.reduceMap(action, {
      USER_NEARBY: (({ userId }) => { this.sStore.actions.fetchUserPreferences(userId) }),
      FETCH_USER_PREFERENCE_LOADING: () => { this.state.preferences.loading = true },
      FETCH_USER_PREFERENCE_SUCCESS: this.fetchUserPreferenceSuccess,
      REMOVE_PREFERENCE_SUCCESS: this.removePreferenceSuccess
    })
  }

  actions(dispacher, ctx) {
    return {
      fetchUserPreferences(userId, shouldDisplayThem) {
        shouldDisplayThem = shouldDisplayThem || true
        dispacher.dispatch({ type: "FETCH_USER_PREFERENCE_LOADING" })
        api.users.fetchUserPreferences(userId)
          .then((res) => {
            dispacher.dispatch(new Action("FETCH_USER_PREFERENCE_SUCCESS", { userPreferences: res.data }))
            if (shouldDisplayThem)
              dispacher.dispatch(new Action("DISPLAY_USER_PREFERENCE", { userPreferences: res.data }))
          })
      },
      deletePreference(preference) {
        api.preference.removePreference(preference.id)
          .then(({ data }) => dispacher.dispatch(new Action("REMOVE_PREFERENCE_SUCCESS", { preference })))
      },
      fetchUsers() {
        dispacher.dispatch({
          type: "FETCH_USERS_SUCCESS",
          payload: {
            users: [{
                displaName: "user1",
                preferences: [{
                  station: 8591624,
                  connections: [7]
                }]
              },
              {
                displaName: "user2",
                preferences: [{
                  station: 8588291,
                  connections: [5]
                }]
              }
            ]
          }
        })
      }
    }
  }
}


const userStore = new UserStore()
export default userStore
// SuperStore.addStore(userStore)
