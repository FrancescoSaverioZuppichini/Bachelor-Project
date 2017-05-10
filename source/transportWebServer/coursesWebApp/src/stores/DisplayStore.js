import { Store, Action } from 'flue-vue'
import axios from 'axios'
import utils from '../utils.js'


class DisplayStore extends Store {
  constructor() {
    super()
    this.state = {}
    this.state.display = {}
  }

  reduce(action) {
    this.reduceMap(action, {
      FETCH_DISPLAY_SUCCESS: (({ data }) => { this.state.display = data })
    })
  }
  // actions takes the dispacher and the store back from the superStore,
  // so we can call our function as soon as we dispatch
  actions(dispatcher, context) {
    return {
      fetchDisplay() {
        dispatcher.dispatch(new Action("FETCH_DISPLAY"))
      }
    }
  }
}

const displayStore = new DisplayStore()
export default displayStore
