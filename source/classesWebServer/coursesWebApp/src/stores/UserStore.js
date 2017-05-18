import axios from 'axios'
import Vue from 'vue'
import router from '../router/index.js'

import { SuperStore, Store, Action } from 'flue-vue'
import api from '../api.js'

class UserStore extends Store {
  constructor() {
    super()
    this.state.currentPreference = {}
    this.state.user = { id: null, preferences: { data: [], loading: false } }
  }

  fetchUserPreferenceSuccess({ preferences }) {
    this.state.user.preferences.data = preferences
    this.state.user.preferences.loading = false
  }

  removePreferenceSuccess({ preference }) {
    let userPreferences = this.state.user.preferences.data
    userPreferences.splice(userPreferences.indexOf(preference), 1)
  }

  updatePreferenceSuccess({ preference }) {
    router.push({ name: 'home', params: { userId: this.state.user.id } })
  }

  addPreferenceSuccess({ preference }) {
    router.push({ name: 'home', params: { userId: this.state.user.id } })
  }

  reduce(action) {
    this.reduceMap(action, {
      FETCH_USER_PREFERENCE_LOADING: () => { this.state.user.preferences.loading = true },
      FETCH_USER_PREFERENCE_SUCCESS: this.fetchUserPreferenceSuccess,
      UPDATE_USER_PREFERENCE_SUCCESS: this.updatePreferenceSuccess,
      ADD_PREFERENCE_SUCCESS: this.addPreferenceSuccess,
      REMOVE_PREFERENCE_SUCCESS: this.removePreferenceSuccess,
      GET_ME_SUCCESS: (({ data }) => this.state.user.id = data.id)
    })
  }

  actions(dispatcher, ctx) {
    return {
      getMe(email) {
        api.user.getMe(email)
          .then(({ data }) => {
            dispatcher.dispatch(new Action("GET_ME_SUCCESS", { data }))
          })
      },
      getMeById(userId) {
        api.user.getMeById(userId)
          .then(({ data }) => {
            dispatcher.dispatch(new Action("GET_ME_SUCCESS", { data }))
          })
      },
      fetchUserPreferences() {
        dispatcher.dispatch({ type: "FETCH_USER_PREFERENCE_LOADING" })
        api.user.fetchUserPreferences(ctx.state.user.id)
          .then(({ data }) => {
            dispatcher.dispatch(new Action("FETCH_USER_PREFERENCE_SUCCESS", { preferences: data }))
          })
      },
      updateUserPreference(preference) {
        dispatcher.dispatch(new Action("UPDATE_PREFERENCE_LOADING"))
        api.preference.updatePreference(preference)
          .then(() => {
            dispatcher.dispatch(new Action("UPDATE_USER_PREFERENCE_SUCCESS"))
          })
          .catch(({ response }) => {
            const err = response.data
            dispatcher.dispatch(new Action("UPDATE_PREFERENCE_FAILURE", { err }))
          })
      },
      addPreference(newPreference) {
        dispatcher.dispatch(new Action("ADD_PREFERENCE_LOADING"))
        api.preference.addPreference(newPreference)
          .then(({ data }) => {
            dispatcher.dispatch(new Action("ADD_PREFERENCE_SUCCESS", { preference: data }))
          })
          .catch(({ response }) => {
            const err = response.data
            dispatcher.dispatch(new Action("ADD_PREFERENCE_FAILURE", { err }))
          })
      },
      deletePreference(preference) {
        api.preference.deletePreference(preference.id, ctx.state.user.id)
          .then(({ data }) => dispatcher.dispatch(new Action("REMOVE_PREFERENCE_SUCCESS", { preference })))
      }
    }
  }
}


const userStore = new UserStore()
export default userStore
