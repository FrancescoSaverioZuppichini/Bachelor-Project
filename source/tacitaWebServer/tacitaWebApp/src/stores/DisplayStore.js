import axios from 'axios'
import Vue from 'vue'
import router from '../router/index.js'

import ws from '../socket.js'

import { SuperStore, Store, Action } from 'flue-vue'
import api from '../api.js'

class BluetoothStore extends Store {
  constructor() {
    super()
    this.state.displayChace = {}
    this.state.nearbyDisplay = { data: [], isLoading: false }
    this.state.hasADisplayNearby = () => { return this.state.nearbyDisplay.data.filter(display => display.isNearby).length > 0 }
  }

  isDisplayInCache(id) {
    return this.state.displayChace[id] != undefined
  }

  onDisplayFound({ data }) {
    if (this.isDisplayInCache(data.displayId))
      // we already found that display before -> notify it immediately
      if (this.isDisplayInCache(data.displayId)) {
        this.state.displayChace[data.displayId].isNearby = true
        this.sStore.actions.notifyDisplay(this.state.displayChace[data.displayId])
        return
      }

    this.sStore.actions.fetchDisplay(data.displayId)
  }

  onDisplayLost({ data }) {
    var display = this.state.displayChace[data.displayId]
    // soft delete, the obj is keep in memory
    display.isNearby = false

    const user = this.sStore.state.user
    ws.userWentAway({user,display})

  }

  onFetchDisplayLoading() {
    this.state.displayChace = {}
    this.state.nearbyDisplay.data = []
    this.state.nearbyDisplay.isLoading = true
  }

  onFetchDisplaySuccess({ data }) {
    this.state.nearbyDisplay.isLoading = false

    // if (this.isDisplayInCache(data.id)) return

    Vue.set(data, 'isNearby', true)

    this.state.nearbyDisplay.data.push(data)
    this.state.displayChace[data.id] = data

    this.sStore.actions.notifyDisplay(data)
  }

  onNotifyDisplay({ display }) {
    if (!display.isNearby) return
    for (let app of this.sStore.state.applications.data) {
      if (display.apps[0].id == app.id && app.toogle) {

        console.log(`sending info to display ${display.id}`)
        const user = this.sStore.state.user

        ws.sendUserInfo({user,display})
        // ws.send(JSON.stringify({
        //   "type": "USER_NEARBY",
        //   "payload": {
        //     "userId": this.sStore.state.user.id,
        //     "displayId": display.id,
        //     "color": this.sStore.state.user.color
        //   }
        // }))
      }
    }
  }

  onNotifyDisplays() {
    const displays = this.state.nearbyDisplay.data

    for (let display of displays) {
      this.onNotifyDisplay({ display })
    }
  }

  onChangeDisplayApp(data) {
    var display = this.state.displayChace[data.displayId]
    if (!display) return

    display.apps = [this.sStore.state.applicationsCache[data.appId]]
    this.sStore.actions.notifyDisplay(display)

  }

  reduce(action) {
    this.reduceMap(action, {
      DISPLAY_FOUND: this.onDisplayFound,
      DISPLAY_LOST: this.onDisplayLost,
      FETCH_DISPLAYS_LOADING: this.onFetchDisplayLoading,
      FETCH_DISPLAY_SUCCESS: this.onFetchDisplaySuccess,
      DISPLAY_CHANGE_APP: this.onChangeDisplayApp,
      NOTIFY_DISPLAYS: this.onNotifyDisplays,
      NOTIFY_DISPLAY: this.onNotifyDisplay,
      TOOGLE_APP_SUCCESS: this.onNotifyDisplays
    })
  }

  actions(dispatcher, ctx) {
    return {
      foundDisplay(data) {
        // simulate bluetooth data
        // data = { displayId: 1 }
        // dispatcher.dispatch(new Action("DISPLAY_FOUND", { data }))
        // data = { displayId: 2 }
        dispatcher.dispatch(new Action("DISPLAY_FOUND", { data }))
      },
      lostDisplay(data) {
        dispatcher.dispatch(new Action("DISPLAY_LOST", { data }))
      },
      fetchDisplays(ids) {
        dispatcher.dispatch(new Action("FETCH_DISPLAYS_LOADING"))
        return Promise.all(ids.map(id => this.fetchDisplay(id)))
      },
      fetchDisplay(id) {
        dispatcher.dispatch(new Action("FETCH_DISPLAY_LOADING"))
        return api.display.fetchDisplay(id, 'apps')
          .then(({ data }) => dispatcher.dispatch(new Action("FETCH_DISPLAY_SUCCESS", { data })))
      },
      notifyDisplays() {
        dispatcher.dispatch(new Action("NOTIFY_DISPLAYS"))
      },
      notifyDisplay(display) {
        dispatcher.dispatch(new Action("NOTIFY_DISPLAY", { display }))
      },
    }
  }
}


const bluetoothStore = new BluetoothStore()
export default bluetoothStore
