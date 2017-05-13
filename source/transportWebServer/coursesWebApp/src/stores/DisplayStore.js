import { Store, Action } from 'flue-vue'
import axios from 'axios'
import utils from '../utils.js'

import api from '../api.js'

class DisplayStore extends Store {
  constructor() {
    super()
    this.state = {}
    this.state.display = {}
  }

  onFetchDisplaySuccess({ data }) {
    this.state.display = data
    console.log(this.state.display.id);
    this.sStore.actions.sendAppToDisplay(this.state.display.id, 1)
  }

  reduce(action) {
    this.reduceMap(action, {
      FETCH_DISPLAY_SUCCESS: this.onFetchDisplaySuccess
    })
  }
  // actions takes the dispacher and the store back from the superStore,
  // so we can call our function as soon as we dispatch
  actions(dispatcher, context) {
    return {
      fetchDisplay(displayId) {
        api.display.fetchDisplay(displayId)
          .then(({ data }) => dispatcher.dispatch(new Action("FETCH_DISPLAY_SUCCESS", { data })))
      },
      sendAppToDisplay(displayId, appId) {
        api.display.sendAppToDisplay(displayId, appId)
      }
    }
  }
}

const displayStore = new DisplayStore()
export default displayStore
