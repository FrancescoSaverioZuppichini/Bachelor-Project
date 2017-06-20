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
    this.state.showConfirmationModal = false
  }

  formatPreference(preference) {
    var cache = {}
    for (let bus of preference.buses) {
      if (cache[bus.id] == undefined) cache[bus.id] = { id: bus.id, number: bus.number, directions : [] }
      cache[bus.id].directions.push({to:bus.to})
    }

    return preference.buses = Object.values(cache)
  }

  fetchUserPreferenceSuccess({ preferences }) {
    preferences.reverse()
    // preferences.forEach(preference => preference.buses = this.formatPreference(preference))
    this.state.user.preferences.data = preferences
    this.state.user.preferences.loading = false
  }

  removePreferenceSuccess({ preference }) {
    let userPreferences = this.state.user.preferences.data
    userPreferences.splice(userPreferences.indexOf(preference), 1)
  }

  updatePreferenceSuccess({ preference }) {
    this.state.showConfirmationModal = false
    for (let pref of this.state.user.preferences.data) {
      if (pref.id == preference.id) pref = Object.assign(pref, preference)
    }
  }

  addPreferenceSuccess({ preference }) {
    // preference.buses = this.formatPreference(preference)

    this.state.showConfirmationModal = false
    this.state.user.preferences.data.unshift(preference)
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
      // UPDATE_PREFERENCE_SUCCESS: this.updatePreferenceSuccess,
      ADD_PREFERENCE_SUCCESS: this.addPreferenceSuccess,
      REMOVE_PREFERENCE_SUCCESS: this.removePreferenceSuccess,
      GET_ME_SUCCESS: this.onGetMeSuccess
    })
  }

  actions(dispatcher, ctx) {
    return {
      fetchUserPreferences() {
        dispatcher.dispatch({ type: "FETCH_USER_PREFERENCE_LOADING" })
        api.users.fetchUserPreferences(ctx.state.user.id)
          .then(({data}) => {
            dispatcher.dispatch(new Action("FETCH_USER_PREFERENCE_SUCCESS", { preferences: data }))
          })
          .catch((err) => dispatcher.dispatch(new Action("FETCH_USER_PREFERENCE_FAILURE", err)))

      },
      getMe(email) {
        api.users.getMe(email)
          .then(({ data }) => {
            dispatcher.dispatch(new Action("GET_ME_SUCCESS", { user: data }))
          })
      },
      getMeById(userId) {
        api.user.getMeById(userId)
          .then(( data ) => {
            dispatcher.dispatch(new Action("GET_ME_SUCCESS", data ))
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
