import axios from 'axios'
import Vue from 'vue'

import utils from '../utils.js'
import { SuperStore, Store, Action } from 'flue-vue'
import api from '../api.js'
import FixedSizeStack from '../FixedSizeStack.js'


class UserStore extends Store {
  constructor() {
    super()
    this.state.user = { id: null, preferences: { data: [], loading: false } }
  }

  fetchUserPreferenceSuccess({ userPreferences }) {
    this.state.user.preferences.data = userPreferences
    this.state.user.preferences.loading = false
  }

  removePreferenceSuccess({ preference }) {
    let userPreferences = this.state.user.preferences.data
    userPreferences.splice(userPreferences.indexOf(preference), 1)
  }

  updatePreferenceSuccess({ preference }) {

  }

  addPreferenceSuccess({ preference }) {
    var userPreferences = this.state.user.preferences.data
    for (let i = 0; i < userPreferences.length; i++) {
      let pref = userPreferences[i]

      if (pref.id == preference.id) {
        pref.buses = preference.buses
        return
      }
    }

    this.state.user.preferences.data.push(preference)
  }

  reduce(action) {
    this.reduceMap(action, {
      FETCH_USER_PREFERENCE_LOADING: () => { this.state.user.preferences.loading = true },
      FETCH_USER_PREFERENCE_SUCCESS: this.fetchUserPreferenceSuccess,
      // UPDATE_PREFERENCE_SUCCESS: this.updatePreferenceSuccess,
      ADD_PREFERENCE_SUCCESS: this.addPreferenceSuccess,
      REMOVE_PREFERENCE_SUCCESS: this.removePreferenceSuccess,
      GET_ME_SUCCESS: (({ user }) => this.state.user.id = user.id)
    })
  }

  actions(dispatcher, ctx) {
    return {
      fetchUserPreferences() {
        dispatcher.dispatch({ type: "FETCH_USER_PREFERENCE_LOADING" })
        api.users.fetchUserPreferences(ctx.state.user.id)
          .then((res) => {
            dispatcher.dispatch(new Action("FETCH_USER_PREFERENCE_SUCCESS", { userPreferences: res.data }))
          })
      },
      getMe(email) {
        api.users.getMe(email)
          .then(({ data }) => {
            dispatcher.dispatch(new Action("GET_ME_SUCCESS", { user: data }))
          })
      },
      getMeById(userId) {
        api.user.getMeById(userId)
          .then(({ data }) => {
            dispatcher.dispatch(new Action("GET_ME_SUCCESS", { user: data }))
          })
      },
      updatePreference() {
        dispatcher.dispatch(new Action("UPDATE_PREFERENCE_LOADING"))
        // the updated preference is getted from the preferenceStore
        const preference = {
          stationId: ctx.state.currentPreference.station.id,
          buses: ctx.state.currentPreference.buses,
          userId: ctx.state.user.id
        }
        api.preference.updatePreference(preference)
          .then(() => {
            dispatcher.dispatch(new Action("UPDATE_PREFERENCE_SUCCESS"))
          })
          .catch(({ response }) => {
            const err = response.data
            dispatcher.dispatch(new Action("UPDATE_PREFERENCE_FAILURE", { err }))
          })
      },
      addPreference() {
        dispatcher.dispatch(new Action("ADD_PREFERENCE_LOADING"))
        const newPreference = {
          stationId: ctx.state.currentPreference.station.id,
          buses: ctx.state.currentPreference.buses,
          userId: ctx.state.user.id
        }
        api.preference.addPreference(newPreference)
          .then(({ data }) => {
            dispatcher.dispatch(new Action("ADD_PREFERENCE_SUCCESS", { preference: data }))
          })
        // .catch(({ response }) => {
        //   const err = response.data
        //   dispatcher.dispatch(new Action("ADD_PREFERENCE_FAILURE", { err }))
        // })
      },
      deletePreference(preference) {
        api.preference.removePreference(preference.id, ctx.state.user.id)
          .then(({ data }) => dispatcher.dispatch(new Action("REMOVE_PREFERENCE_SUCCESS", { preference })))
      }
    }
  }
}


const userStore = new UserStore()
export default userStore
// SuperStore.addStore(userStore)
