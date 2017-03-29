import Vue from 'vue'
import axios from 'axios'
import api from '../api.js'

import { SuperStore, Store, Action } from 'flue-vue'

class PreferenceStore extends Store {
  constructor() {
    super()
    //  store the current preference to be added
    this.state.currentPreference = { stationId: "8591624", buses: [] }
    // show by display based on users
    this.state.connections = []
  }

  reduce(action) {
    this.reduceMap(action, {
      ADD_BUS_TO_PREFERENCE: (({ bus }) => { this.state.currentPreference.buses.push(bus) }),
      REMOVE_BUS_TO_PREFERENCE: (({ bus }) => { this.state.currentPreference.buses.splice(this.state.currentPreference.indexOf(bus), 1) })

    })
  }


  actions(dispatcher, context) {
    return {
      addBusToPreference(bus) {

        dispatcher.dispatch(new Action("ADD_BUS_TO_PREFERENCE", { bus }))
      },
      removeBusToPreference(bus) {

        dispatcher.dispatch(new Action("REMOVE_BUS_TO_PREFERENCE", { bus }))
      },

      addPreference(stationId, buses) {}
    }
  }
}

const preferenceStore = new PreferenceStore()

export default preferenceStore
