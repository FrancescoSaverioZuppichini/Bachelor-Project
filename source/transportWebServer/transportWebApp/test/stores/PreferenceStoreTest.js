import assert from 'assert'

import Vue from 'vue'

import { SuperStore, Store, Action } from 'flue-vue'

import preferenceStore from '@stores/PreferenceStore.js'

SuperStore.addStore(preferenceStore)

const stations = [{ id: 1, number: 777, name: 'stationTest' }]
const buses = [{ id: 1, number: 2 }]

describe('PreferenceStore', () => {
  describe('actions', () => {
    it('they should change the store state', () => {
      describe('toogleEditMode', () => {
        it('they should toogle corretly the edit state', () => {})
        preferenceStore.toogleEditMode()
        assert.ok(preferenceStore.state.isInEditMode);
        preferenceStore.toogleEditMode()
        assert.false(preferenceStore.state.isInEditMode);
      })
    });
  });
});
