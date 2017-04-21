import assert from 'assert'
import Vue from 'vue'

import { flueVue, SuperStore, Store, Action } from 'flue-vue'

Vue.use(flueVue)

import preferenceStore from '../../../src/stores/PreferenceStore.js'

// SuperStore.addStore(preferenceStore)

var stations = [{ id: 1, number: 777, name: 'stationTest' }]
var buses = [{ id: 1, number: 2, to: 'toTest' }]
var bus = { id: 1, number: 2, to: 'toTest' }

var preference = { station: stations[0], buses: buses }

describe('PreferenceStore', () => {
  describe('actions', () => {
    describe('toogleEditMode', () => {
      it('they should toogle corretly the edit state', () => {
        preferenceStore.toogleEditMode({ preference })
        assert.ok(preferenceStore.state.isInEditMode)
        preferenceStore.toogleEditMode({ preference })
        assert.ok(!preferenceStore.state.isInEditMode)
      })
    })
    describe('addBusToPreference', () => {
      it('should add a bus to the current preference', () => {
        preferenceStore.initializeCurrentPreference()
        var pref = preferenceStore.state.currentPreference
        var lengthBefore = pref.buses.length
        preferenceStore.addBusToPreference({ bus :buses[0] })

        var lengthAfter = pref.buses.length
        assert.ok(lengthBefore < lengthAfter)
        // assert.ok(preferenceStore.state.currentPreference.buses[0] == buses[0])

      })
    })
    describe('removeBusToPreference', () => {
      it('should remove a bus from the current preference', () => {
        preferenceStore.initializeCurrentPreference()
        var pref = preferenceStore.state.currentPreference
        preferenceStore.addBusToPreference({ bus : buses[0] })
        var lengthBefore = pref.buses.length
        preferenceStore.removeBusToPreference({ bus: buses[0] })
        var lengthAfter = pref.buses.length
        assert.ok(lengthBefore > lengthAfter)
      })
    })
  })
});
