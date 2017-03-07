// import {
//   Dispatcher
// } from 'flux'
import Dispatcher from './PromiseDispatcher.js'
import Vue from 'vue'

/**
 * This class is the top-level store, it keep a references to all the stores as fields
 * and it setup the dispacher for each new added store
 */
class SuperStore {
  constructor() {
    this.actions = {}
    this.dispacher = new Dispatcher()
    this.state = {}
    this.vm = new Vue({
      data: {
        state: this
      }
    })
    this.dispacher.register(this.actionsLogger.bind(this))
  }

  actionsLogger(action) {
    console.log(action)
    // console.log(JSON.parse(JSON.stringify(this.state)))
  }

  // add Store to the global SuperStore,
  // under the hood it override the state pointer of each store with the
  // global one
  addStore(store) {
    this[store.constructor.name] = store
    //fetch all the store's state and put in the superStore
    for (let key in store.state) {
      Vue.set(this.state, key, store.state[key])
    }
    //override state pointer of the store with the global one -> make the store stateless
    store.state = this.state // -> is it dangerous?
    // register the store with the global dispacher
    this.dispacher.register(store.reduce.bind(store))
    // take all the actions from the store and pass to them the dispacher and the store as a context
    Object.assign(this.actions, store.actions(this.dispacher, store))
    store.actions = this.actions
  }

}

const superStore = new SuperStore()
// make available to all components
Vue.prototype.$store = superStore

export default superStore
