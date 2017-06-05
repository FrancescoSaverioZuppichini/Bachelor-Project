import Vue from 'vue'

// setup the test env
import { flueVue, SuperStore, Store, Action } from 'flue-vue'

Vue.use(flueVue)

import userStore from '../../src/stores/UserStore.js'
import applicationStore from '../../src/stores/ApplicationStore.js'

SuperStore.addStore(userStore)
SuperStore.addStore(applicationStore)

Vue.config.productionTip = false

// require all test files (files that ends with .spec.js)
const testsContext = require.context('./stores', true, /\.js$/)
testsContext.keys().forEach(testsContext)

// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
const srcContext = require.context('../../src', true, /^\.\/(?!main(\.js)?$)/)
srcContext.keys().forEach(srcContext)
