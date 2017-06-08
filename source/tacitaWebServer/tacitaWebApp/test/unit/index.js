import Vue from 'vue'

// setup the test env
import { flueVue, SuperStore, Store, Action } from 'flue-vue'

Vue.use(flueVue)

import userStore from '../../src/stores/UserStore.js'
import applicationStore from '../../src/stores/ApplicationStore.js'
import displayStore from '../../src/stores/DisplayStore.js'
import beaconStore from '../../src/stores/BeaconStore.js'

SuperStore.addStore(userStore)
SuperStore.addStore(applicationStore)
SuperStore.addStore(displayStore)
SuperStore.addStore(beaconStore)

Vue.config.productionTip = false

// require all test files (files that ends with .spec.js)
const testsContext = require.context('./stores', true, /\.js$/)
testsContext.keys().forEach(testsContext)

// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
const srcContext = require.context('../../src/stores/', true, /\.js$/)
srcContext.keys().forEach(srcContext)
