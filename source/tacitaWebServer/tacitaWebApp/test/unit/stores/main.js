import assert from 'assert'

import Vue from 'vue'

import { SuperStore, Store, Action } from 'flue-vue'

const $store = SuperStore
const dispatcher = $store.dispatcher
const user = { "color": "#CDDC39", "email": "zuppif", "id": 1 }
const userApps = { "apps": [{ "id": 2, "material_icon": "directions_bus", "name": "Transport", "url": "transport" }] }
const applications = [{ "id": 1, "material_icon": "event", "name": "Classes", "url": "classes" }, { "id": 2, "material_icon": "directions_bus", "name": "Transport", "url": "transport" }]
const fakeApp = { "id": 3, "name": "fakeApp" }

describe("UserStore", () => {
  describe('GET_ME', () => {
    it('should store user information', () => {
      dispatcher.dispatch(new Action("GET_ME_SUCCESS", { data: user }))
      assert.equal($store.state.user, user)
    })
  })
  describe('GET_MY_APPS', () => {
    it('should store user applications information', () => {
      dispatcher.dispatch(new Action("GET_MY_APPS_SUCCESS", { data: userApps }))
      assert.equal($store.state.user.apps, userApps.apps)
    })
  })
  describe('TOOGLE_APP', () => {
    it('should toogle an application', () => {
      fakeApp.toogle = true
      dispatcher.dispatch(new Action("TOOGLE_APP_SUCCESS", { app: fakeApp }))
      assert.ok($store.state.user.apps.indexOf(fakeApp) > 0)

    })
    it('should remove a toogled application', () => {
      fakeApp.toogle = false
      dispatcher.dispatch(new Action("TOOGLE_APP_SUCCESS", { app: fakeApp }))
      assert.ok($store.state.user.apps.indexOf(fakeApp) < 0)
    })
  })
})

describe("ApplicationStore", () => {
  describe('FETCH_APPLICATION', () => {
    it('should store application', () => {
      dispatcher.dispatch(new Action("FETCH_APPLICATION_LOADING"))
      assert.ok($store.state.applications.isLoading)
      dispatcher.dispatch(new Action("FETCH_APPLICATION_SUCCESS", { data: applications }))
      assert.ok(!$store.state.applications.isLoading)
      assert.equal($store.state.applications.data, applications)
    })
  })
})

describe("User data Flow", () => {
  it('should get user, get applications and get user applications', () => {
    dispatcher.dispatch(new Action("GET_ME_SUCCESS", { data: user }))
    dispatcher.dispatch(new Action("FETCH_APPLICATION_SUCCESS", { data: applications }))
    dispatcher.dispatch(new Action("GET_MY_APPS_SUCCESS", { data: userApps }))
    // Transport is in userApps
    assert.ok($store.state.applications.data[1].toogle)
  })
})
