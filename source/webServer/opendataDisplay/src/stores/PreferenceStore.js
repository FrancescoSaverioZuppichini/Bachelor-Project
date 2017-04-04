import Vue from 'vue'
import axios from 'axios'
import api from '../api.js'
import UIkit from 'uikit';
// components can be called from the imported UIkit reference
import router from '../router.js'

import { SuperStore, Store, Action } from 'flue-vue'

class PreferenceStore extends Store {
  constructor() {
    super()
    //  store the current preference to be added
    this.state.currentPreference = { station: { number: "8591624", id: 8, toogle: true }, buses: [] }
    this.state.preferenceError = {}
    this.state.preferences = []
    // this.state.currentPreference = {}
    // show by display based on users
    this.state.connections = []

  }

  addBusToPreference({ bus }) {
    var isAlreadyThere = false
    var buses = this.state.currentPreference.buses
    // deep check by id
    buses.forEach((bus) => {
      isAlreadyThere = bus.id == bus.id
      if (isAlreadyThere)
        return
    })
    if (!isAlreadyThere) {
      buses.push(bus)
    }
  }

  addStationToPreference({ station }) {
    Vue.set(station, 'toogle', false)
    this.state.currentPreference.station.toogle = false
    station.toogle = true
    this.state.currentPreference.station = station

  }

  addPreferenceSuccess() {
    this.state.preferenceError = {}
    UIkit.notification({ message: 'New preference added', timeout: 2000 });
    router.push({ path: '/preference' })
  }

  addPreferenceFailure({ err }) {
    this.state.preferenceError = err
  }

  reduce(action) {
    this.reduceMap(action, {
      ADD_BUS_TO_PREFERENCE: this.addBusToPreference,
      REMOVE_BUS_TO_PREFERENCE: (({ bus }) => { this.state.currentPreference.buses.splice(this.state.currentPreference.buses.indexOf(bus), 1) }),
      ADD_STATION_TO_PREFERENCE: this.addStationToPreference,
      ADD_PREFERENCE_SUCCESS: this.addPreferenceSuccess,
      ADD_PREFERENCE_FAILURE: this.addPreferenceFailure
    })
  }

  actions(dispatcher, ctx) {
    return {
      addBusToPreference(bus) {
        dispatcher.dispatch(new Action("ADD_BUS_TO_PREFERENCE", { bus }))
      },
      removeBusToPreference(bus) {
        dispatcher.dispatch(new Action("REMOVE_BUS_TO_PREFERENCE", { bus }))
      },
      addStationToPreference(station) {
        dispatcher.dispatch(new Action("ADD_STATION_TO_PREFERENCE", { station }))
      },
      addPreference() {
        const newPreference = {
          stationId: ctx.state.currentPreference.station.number,
          buses: ctx.state.currentPreference.buses.map(bus => bus.number)
        }
        api.preference.addPreference(newPreference)
          .then(() => dispatcher.dispatch(new Action("ADD_PREFERENCE_SUCCESS")))
          .catch(({ response }) => {
            const err = response.data
            dispatcher.dispatch(new Action("ADD_PREFERENCE_FAILURE", { err }))
          })
      }
    }
  }
}

const preferenceStore = new PreferenceStore()

export default preferenceStore
