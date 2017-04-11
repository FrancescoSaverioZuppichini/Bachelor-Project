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
    this.state.currentPreference = { station: {}, buses: [] }
    this.state.isInEditMode = false
    this.state.originalPreference = {}
    // used to know pair bus->direction
    this.state.currentStationboards = []
    this.state.preferenceError = {}

  }
  findBusInPreference(toFind) {
    const buses = this.state.currentPreference.buses
    const len = buses.length

    for (var i = 0; i < len; i++) {
      if (toFind.id == buses[i].id)   return i
    }

    return -1
  }

  removeBusToPreference({ bus }) {
    const toRemoveIndex = this.findBusInPreference(bus)
    const buses = this.state.currentPreference.buses
    if (toRemoveIndex >= 0) {
      buses.splice(toRemoveIndex, 1)
    }
  }

  addBusToPreference({ bus }) {
    const buses = this.state.currentPreference.buses

    if (this.findBusInPreference(bus) < 0) {
      buses.push(bus)
    }
  }

  addDirectionToPreference({ stationboard }) {
    const busId = stationboard.bus_id
    const to = stationboard.to
    var buses = this.state.currentPreference.buses
    var shouldAdd = true

    buses.forEach((bus) => {
      if (bus.id == busId && (bus.to == null || bus.to == to)) {
        Vue.set(bus, 'to', to)
        // the bus with that direciton already exists -> override its direction
        shouldAdd = false
      }
    })
    // multiple buses can be selected, then, if we don't find a previouse one, we just need to add it
    if (shouldAdd) {
      const newBus = { id: busId, number: stationboard.bus.number, to: to }
      this.state.currentPreference.buses.push(newBus)
    }
  }

  removeDirectionToPreference({ stationboard }) {
    const busToRemove = { id: stationboard.bus_id, number: stationboard.bus.number, to: stationboard.to }
    var buses = this.state.currentPreference.buses

    for (let i = 0; i < buses.length; i++) {
      let currBus = buses[i]
      if (currBus.id == busToRemove.id && currBus.to == busToRemove.to) {
        buses.splice(i, 1)
        break
      }
    }
  }

  addStationToPreference({ station }) {
    this.state.currentPreference.station.toogle = false
    this.state.currentPreference = { station: {}, buses: [] }
    station.toogle = true
    Vue.set(this.state.currentPreference, 'station', station)
  }

  addPreferenceSuccess() {
    this.state.preferenceError = {}
    this.state.currentPreference.station.toogle = false
    this.state.currentPreference = { station: {}, buses: [] }

    this.state.locations.forEach(location => location.toogle = false)
    this.state.currentStationboards.forEach(stationboard => stationboard.toogle = false)
    this.state.connections.forEach(connection => connection.toogle = false)

    const msg = this.state.isInEditMode ? "Preference changed" : 'New preference added'

    UIkit.notification({ message: msg, timeout: 1000 });

    this.state.isInEditMode = false
    router.push({ path: '/preference' })
  }

  addPreferenceFailure({ err }) {
    this.state.preferenceError = err
  }

  toogleEditMode({ preference }) {
    if (this.state.isInEditMode) {
      this.state.currentPreference = { station: {}, buses: [] }
    } else {
      const buses = preference.buses.map((bus) => { return { id: bus.bus_id, number: bus.bus.number, to: bus.to } })
      this.state.originalPreference = preference
      this.state.currentPreference = Object.assign({}, { station: preference.station, buses })
    }

    this.state.isInEditMode = !this.state.isInEditMode
  }

  reduce(action) {
    this.reduceMap(action, {
      ADD_BUS_TO_PREFERENCE: this.addBusToPreference,
      REMOVE_BUS_TO_PREFERENCE: this.removeBusToPreference,
      ADD_DIRECTION_TO_PREFERENCE: this.addDirectionToPreference,
      REMOVE_DIRECTION_TO_PREFERENCE: this.removeDirectionToPreference,
      ADD_STATION_TO_PREFERENCE: this.addStationToPreference,
      ADD_PREFERENCE_SUCCESS: this.addPreferenceSuccess,
      ADD_PREFERENCE_FAILURE: this.addPreferenceFailure,
      TOGGLE_EDIT_MODE: this.toogleEditMode,
      UPDATE_PREFERENCE_SUCCESS: this.toogleEditMode
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
      addDirectionToPreference(stationboard) {
        dispatcher.dispatch(new Action("ADD_DIRECTION_TO_PREFERENCE", { stationboard }))
      },
      removeDirectionToPreference(stationboard) {
        dispatcher.dispatch(new Action("REMOVE_DIRECTION_TO_PREFERENCE", { stationboard }))
      },
      addStationToPreference(station) {
        dispatcher.dispatch(new Action("ADD_STATION_TO_PREFERENCE", { station }))
      },
      updatePreference() {
        dispatcher.dispatch(new Action("UPDATE_PREFERENCE_LOADING"))
        const newPreference = {
          stationId: ctx.state.currentPreference.station.id,
          buses: ctx.state.currentPreference.buses
        }
        api.preference.updatePreference(newPreference)
        dispatcher.dispatch(new Action("UPDATE_PREFERENCE_SUCCESS"))
          .catch(({ response }) => {
            const err = response.data
            dispatcher.dispatch(new Action("UPDATE_PREFERENCE_FAILURE", { err }))
          })
      },
      addPreference() {
        const newPreference = {
          stationId: ctx.state.currentPreference.station.id,
          buses: ctx.state.currentPreference.buses
        }
        api.preference.addPreference(newPreference)
          .then(() => dispatcher.dispatch(new Action("ADD_PREFERENCE_SUCCESS")))
          .catch(({ response }) => {
            const err = response.data
            dispatcher.dispatch(new Action("ADD_PREFERENCE_FAILURE", { err }))
          })
      },
      toogleEditMode(preference) {
        dispatcher.dispatch(new Action("TOGGLE_EDIT_MODE", { preference }))

      }
    }
  }
}

const preferenceStore = new PreferenceStore()

export default preferenceStore
