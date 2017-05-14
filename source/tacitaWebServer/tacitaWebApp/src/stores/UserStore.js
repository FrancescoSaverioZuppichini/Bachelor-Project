import axios from 'axios'
import Vue from 'vue'
import router from '../router/index.js'

import { SuperStore, Store, Action } from 'flue-vue'
import api from '../api.js'

class UserStore extends Store {
  constructor() {
    super()
    this.state.currentPreference = {}
    this.state.user = {}
  }

  onToogleAppSuccess({ app }) {
    if (app.toogle) {
      this.state.user.apps.push(app)
    } else {
      var userApps = this.state.user.apps
      for (let i = 0; i < userApps.length; i++) {
        if (userApps[i].id == app.id) userApps.splice(i, 1)
      }
    }
  }

  reduce(action) {
    this.reduceMap(action, {
      GET_MY_APPS_SUCCESS: (({ data }) => { this.state.user.apps = data.apps }),
      GET_ME_SUCCESS: (({ data }) => this.state.user = data),
      TOOGLE_APP_SUCCESS: this.onToogleAppSuccess
    })
  }

  actions(dispatcher, ctx) {
    return {
      getMe(email) {
        api.user.getMe(email)
          .then(({ data }) => {
            dispatcher.dispatch(new Action("GET_ME_SUCCESS", { data }))
          })
      },
      getMyApps() {
        api.user.getMyApps(ctx.state.user.id)
          .then(({ data }) => {
            dispatcher.dispatch(new Action("GET_MY_APPS_SUCCESS", { data }))
          })
      },
      toogleApp(app) {
        api.user.toogleApplication(ctx.state.user.id, app.id)
          .then(() => { dispatcher.dispatch(new Action("TOOGLE_APP_SUCCESS", { app })) })
      },
      toogleAll(state) {
        dispatcher.dispatch(new Action("TOOGLE_ALL_APP", { state }))
      }
    }
  }
}


const userStore = new UserStore()
export default userStore
