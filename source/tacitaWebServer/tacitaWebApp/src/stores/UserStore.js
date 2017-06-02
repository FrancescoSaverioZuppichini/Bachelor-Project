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
    this.state.userError = { error: false, msg: "" }
  }

  onToogleAppSuccess({ app }) {
    this.state.userError.error = false

    if (app.toogle) {
      this.state.user.apps.push(app)
    } else {
      var userApps = this.state.user.apps
      for (let i = 0; i < userApps.length; i++) {
        if (userApps[i].id == app.id) userApps.splice(i, 1)
      }
    }
  }


  onToogleAppFailure({ error }) {
    console.log(error);
    this.state.userError.error = true
    this.state.userError.msg = "Something went wrong."
  }

  reduce(action) {
    this.reduceMap(action, {
      CREATE_USER_SUCCESS: (({ data }) => { this.sStore.actions.getMe(data.email) }),
      CREATE_USER_FAILURE: (({ email }) => { this.sStore.actions.getMe(email) }),
      GET_MY_APPS_SUCCESS: (({ data }) => { this.state.user.apps = data.apps }),
      GET_ME_SUCCESS: (({ data }) => this.state.user = data),
      TOOGLE_APP_SUCCESS: this.onToogleAppSuccess,
      TOOGLE_APP_FAILURE: this.onToogleAppFailure
    })
  }

  actions(dispatcher, ctx) {
    return {
      getMe(email) {
        api.user.getMe(email)
          .then(({ data }) => {
            dispatcher.dispatch(new Action("GET_ME_SUCCESS", { data }))
          })
          .catch((err) => {
            /* do something*/
          })

      },
      getMyApps() {
        api.user.getMyApps(ctx.state.user.id)
          .then(({ data }) => {
            dispatcher.dispatch(new Action("GET_MY_APPS_SUCCESS", { data }))
          })
          .catch((err) => {
            /* do something*/
          })

      },
      updateUser(user) {
        api.user.updateUser(user)
          .then(() => { new Action("UPDATE_USER_SUCCESS") })
          .catch((err) => {
            /* do something*/
          })

      },
      toogleApp(app) {
        api.user.toogleApplication(ctx.state.user.id, app.id)
          .then(() => { dispatcher.dispatch(new Action("TOOGLE_APP_SUCCESS", { app })) })
          .catch(({ response }) => dispatcher.dispatch(new Action("TOOGLE_APP_FAILURE", { error: response.data })))
      },
      toogleAll(state) {
        dispatcher.dispatch(new Action("TOOGLE_ALL_APP", { state }))
      },
      createOrFetchUser(email) {
        api.user.create(email)
          .then(data => dispatcher.dispatch(new Action("CREATE_USER_SUCCESS", data)))
          .catch(err => dispatcher.dispatch(new Action("CREATE_USER_FAILURE", { email })))
      }
    }
  }
}


const userStore = new UserStore()
export default userStore
