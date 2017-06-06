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

const beacon = { "beacon_id": "1", "display_id": 1, "id": 1 }
const display = { "apps": [{ "id": 2, "material_icon": "directions_bus", "name": "Transport", "url": "transport" }], "beacons": [{ "beacon_id": "1", "display_id": 1, "id": 1 }, { "beacon_id": "diodood1", "display_id": 1, "id": 2 }, { "beacon_id": "diodood2", "display_id": 1, "id": 3 }], "id": 1 }

describe("DisplayStore", () => {
  describe('FETCH_DISPLAYS_LOADING', () => {
    it('should toogle loading state on fetching', () => {
      dispatcher.dispatch(new Action("FETCH_DISPLAYS_LOADING"))
      assert.ok($store.state.nearbyDisplay.isLoading)
    })
  })

  describe('FETCH_DISPLAY_SUCCESS', () => {
    it('should add the featched display', () => {
      dispatcher.dispatch(new Action("FETCH_DISPLAY_SUCCESS", { data: display }))
      assert.ok(!$store.state.nearbyDisplay.isLoading)
      assert.ok($store.state.nearbyDisplay.data.length > 0)
      assert.equal($store.state.nearbyDisplay.data[0], display)
      assert.ok($store.state.nearbyDisplay.data[0].isNearby)

    })
  })

  describe('DISPLAY_FOUND', () => {
    it('should add the founded display', () => {
      console.log('Unimplemented since it requires socket connections');
    })
  })
})

describe("User data Flow", () => {
  it('should get user, get applications and get user applications', () => {
    dispatcher.dispatch(new Action("GET_ME_SUCCESS", { data: user }))
    dispatcher.dispatch(new Action("FETCH_APPLICATION_SUCCESS", { data: applications }))
    dispatcher.dispatch(new Action("GET_MY_APPS_SUCCESS", { data: userApps }))
    // Transport is in userApp
    assert.ok($store.state.applications.data[1].toogle)
  })
})
