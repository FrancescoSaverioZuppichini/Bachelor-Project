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
    // used to know pair bus->direction
    this.state.currentStationboards = []
    this.state.preferenceError = {}

  }

  addBusToPreference({ bus }) {
    var isAlreadyThere = false
    var buses = this.state.currentPreference.buses
    // check if there is already a bus
    for (let oldBus of buses) {
      isAlreadyThere = (oldBus.id == bus.id)
      if (isAlreadyThere)
        break
    }
    if (!isAlreadyThere) {
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
        // the bus with that direciton already exists
        shouldAdd = false
      }
    })
    // multiple buses can be selected, then, if we don't find a previouse one, we need to add it
    if (shouldAdd) {
      const newBus = { id: stationboard.bus_id, number: stationboard.bus.number, to: stationboard.to }
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
        break;
      }
    }
  }

  addStationToPreference({ station }) {
    Vue.set(station, 'toogle', false)
    this.state.currentPreference.station.toogle = false
    station.toogle = true
    Vue.set(this.state.currentPreference, 'station', station)
  }

  addPreferenceSuccess() {
    this.state.preferenceError = {}
    this.state.locations.forEach(location => location.toogle = false)
    this.state.currentPreference = { station: {}, buses: [] }
    UIkit.notification({ message: 'New preference added', timeout: 1000 });
    router.push({ path: '/preference' })
  }

  addPreferenceFailure({ err }) {
    this.state.preferenceError = err
  }

  reduce(action) {
    this.reduceMap(action, {
      ADD_BUS_TO_PREFERENCE: this.addBusToPreference,
      REMOVE_BUS_TO_PREFERENCE: (({ bus }) => { this.state.currentPreference.buses.splice(this.state.currentPreference.buses.indexOf(bus), 1) }),
      ADD_DIRECTION_TO_PREFERENCE: this.addDirectionToPreference,
      REMOVE_DIRECTION_TO_PREFERENCE: this.removeDirectionToPreference,
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
      addDirectionToPreference(stationboard) {
        dispatcher.dispatch(new Action("ADD_DIRECTION_TO_PREFERENCE", { stationboard }))
      },
      removeDirectionToPreference(stationboard) {
        dispatcher.dispatch(new Action("REMOVE_DIRECTION_TO_PREFERENCE", { stationboard }))
      },
      addStationToPreference(station) {
        dispatcher.dispatch(new Action("ADD_STATION_TO_PREFERENCE", { station }))
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
      }
    }
  }
}

const preferenceStore = new PreferenceStore()

export default preferenceStore
