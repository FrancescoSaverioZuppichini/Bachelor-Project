import axios from 'axios'
import Vue from 'vue'
import router from '../router/index.js'

import { SuperStore, Store, Action } from 'flue-vue'
import api from '../api.js'

class UserStore extends Store {
  constructor() {
    super()
    this.state.currentPreference = {}
    this.state.showConfirmationModal = false

    this.state.user = { id: null, preferences: { data: [], loading: false }, color: null }
  }

  fetchUserPreferenceSuccess({ preferences }) {
    preferences.reverse()
    this.state.user.preferences.data = preferences
    this.state.user.preferences.loading = false
  }

  removePreferenceSuccess({ preference }) {
    let userPreferences = this.state.user.preferences.data
    userPreferences.splice(userPreferences.indexOf(preference), 1)
  }

  updatePreferenceSuccess({ preference }) {
    this.state.showConfirmationModal = false
    console.log(this.state.user.preferences.data);
    console.log(preference);
    for (let pref of this.state.user.preferences.data) {
      if (pref.id == preference.id) pref = preference
    }
    router.push({ name: 'home', params: { userId: this.state.user.id } })
  }

  addPreferenceSuccess({ preference }) {
    this.state.showConfirmationModal = false
    this.state.user.preferences.data.unshift(preference)
    router.push({ name: 'home', params: { userId: this.state.user.id } })
  }

  onGetMeSuccess({ data }) {
    this.state.user.id = data.id
    this.sStore.actions.fetchUserPreferences()
  }

  reduce(action) {
    this.reduceMap(action, {
      FETCH_USER_PREFERENCE_LOADING: () => { this.state.user.preferences.loading = true },
      FETCH_USER_PREFERENCE_SUCCESS: this.fetchUserPreferenceSuccess,
      FETCH_USER_PREFERENCE_FAILURE: () => { this.state.user.preferences.loading = false },
      UPDATE_USER_PREFERENCE_SUCCESS: this.updatePreferenceSuccess,
      ADD_PREFERENCE_SUCCESS: this.addPreferenceSuccess,
      REMOVE_PREFERENCE_SUCCESS: this.removePreferenceSuccess,
      GET_ME_SUCCESS: this.onGetMeSuccess
    })
  }

  actions(dispatcher, ctx) {
    return {
      getMe(email) {
        api.user.getMe(email)
          .then(({ data }) => {
            dispatcher.dispatch(new Action("GET_ME_SUCCESS", { data }))
          })
          .catch((err) => {})
      },
      getMeById(userId) {
        api.user.getMeById(userId)
          .then(({ data }) => {
            dispatcher.dispatch(new Action("GET_ME_SUCCESS", { data }))
          })
          .catch((err) => {})
      },
      fetchUserPreferences() {
        dispatcher.dispatch({ type: "FETCH_USER_PREFERENCE_LOADING" })
        api.user.fetchUserPreferences(ctx.state.user.id)
          .then(({ data }) => {
            dispatcher.dispatch(new Action("FETCH_USER_PREFERENCE_SUCCESS", { preferences: data }))
          })
          .catch((err) => dispatcher.dispatch(new Action("FETCH_USER_PREFERENCE_FAILURE", err)))
      },
      updateUserPreference(preference) {
        dispatcher.dispatch(new Action("UPDATE_PREFERENCE_LOADING"))
        api.preference.updatePreference(preference)
          .then(() => {
            dispatcher.dispatch(new Action("UPDATE_USER_PREFERENCE_SUCCESS",{preference}))
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
