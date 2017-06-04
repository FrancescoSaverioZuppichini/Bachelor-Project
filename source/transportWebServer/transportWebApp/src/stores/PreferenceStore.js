import Vue from 'vue'
import axios from 'axios'
import api from '../api.js'
import UIkit from 'uikit';
// components can be called from the imported UIkit reference
import router from '../router.js'

import { Store, Action } from 'flue-vue'
/*
This class manage how a preference is created, edit and delete
*/
class PreferenceStore extends Store {
  constructor() {
    super()
    //  store the current preference to be added
    this.state.currentPreference = { station: {}, buses: [] }
    // this flag is used to switch behavior by notifice if we are in edit mode
    this.state.isInEditMode = false
    this.state.originalPreference = {}
    // used to know pair bus->direction
    this.state.currentStationboards = []
    this.state.preferenceError = {}

  }

  initializeCurrentPreference() {
    // this.state.currentPreference.station.toogle = false
    this.state.currentPreference = { station: {}, buses: [] }
    this.toggleOffAll()
  }

  toggleOffAll() {
    this.state.currentPreference.station.toogle = false
    this.state.locations.forEach(location => Vue.set(location, 'toogle', false))
    this.state.currentStationboards.forEach(stationboard => stationboard.toogle = false)
    this.state.connections.forEach(connection => connection.toogle = false)
  }

  findBusInPreference(toFind) {
    const buses = this.state.currentPreference.buses
    const len = buses.length

    for (var i = 0; i < len; i++) {
      if (toFind.id == buses[i].id) return i
    }

    return -1
  }

  removeBusToPreference({ bus }) {
    const toRemoveIndex = this.findBusInPreference(bus)
    var buses = this.state.currentPreference.buses
    if (toRemoveIndex >= 0) {
      buses.splice(toRemoveIndex, 1)
    }
  }

  addBusToPreference({ bus }) {
    var buses = this.state.currentPreference.buses
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
    this.initializeCurrentPreference()
    station.toogle = true
console.log(station);
    Vue.set(this.state.currentPreference, 'station', station)
    router.push({ name: 'bus' })

  }

  onPreferenceSuccessNotification() {
    const msg = this.state.isInEditMode ? "Preference changed" : 'New preference added'

    // UIkit.notification({ message: msg, timeout: 1000 });
  }

  addPreferenceSuccess() {
    this.toggleOffAll()
    this.initializeCurrentPreference()
    // create a notification in the view
    this.onPreferenceSuccessNotification()
    router.push({ name: 'app' })
  }

  updatePreferenceSuccess() {
    Object.assign(this.state.originalPreference, this.state.currentPreference)

    this.initializeCurrentPreference()
    this.toggleOffAll()
    // create a notification in the view
    this.onPreferenceSuccessNotification()
    // switch behavior
    this.state.isInEditMode = false
    router.push({ name: 'app' })
  }

  addPreferenceFailure({ err }) {
    this.state.preferenceError = err
  }

  toogleEditModeFalse() {
    this.initializeCurrentPreference()
  }

  toogleEditModeTrue({ preference }) {
    this.state.originalPreference = preference
    this.state.currentPreference = Object.assign({}, preference)
    this.state.currentPreference.buses.forEach(bus => bus.toogle)
  }

  toogleEditMode({ preference }) {
    // select correct behavior
    this.state.isInEditMode ? this.toogleEditModeFalse() : this.toogleEditModeTrue({ preference })
    // toogle inner state
    this.state.isInEditMode = !this.state.isInEditMode

  }

  reduce(action) {
    this.reduceMap(action, {
      ADD_BUS_TO_PREFERENCE: this.addBusToPreference,
      REMOVE_BUS_TO_PREFERENCE: this.removeBusToPreference,
      ADD_DIRECTION_TO_PREFERENCE: this.addDirectionToPreference,
      REMOVE_DIRECTION_TO_PREFERENCE: this.removeDirectionToPreference,
      ADD_STATION_TO_PREFERENCE: this.addStationToPreference,
      UPDATE_PREFERENCE_SUCCESS: this.updatePreferenceSuccess,
      ADD_PREFERENCE_FAILURE: this.addPreferenceFailure,
      TOGGLE_EDIT_MODE: this.toogleEditMode,
      UPDATE_PREFERENCE_SUCCESS: this.updatePreferenceSuccess,
      ADD_PREFERENCE_SUCCESS: this.addPreferenceSuccess,
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
      toogleEditMode(preference) {
        dispatcher.dispatch(new Action("TOGGLE_EDIT_MODE", { preference }))

      }
    }
  }
}

const preferenceStore = new PreferenceStore()

export default preferenceStore
