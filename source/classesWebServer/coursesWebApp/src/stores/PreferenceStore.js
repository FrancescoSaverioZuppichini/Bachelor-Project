import { Store, Action } from 'flue-vue'
import axios from 'axios'
import router from '../router/index.js'
import Vue from 'vue'

import path from 'path'

class Navigation {
  constructor() {
    this._urls = []
    this._index = 0
    this.route = {}
  }

  goNext(params) {

    console.log(this._urls[this._index]);
    router.push({ name: this._urls[this._index], params: params })
    this._index += 1

  }

  goBack() {
    this._index -= 1
    router.go(-1)
  }

  reset(params) {
    this._index = 0
    router.push({ name: 'home', params: params })
  }
}

class PreferenceStore extends Store {
  constructor() {
    super()
    this.state = {}
    this.state.preference = {}
    this.state.navigation = new Navigation()
    this.state.isInEditMode = false
  }

  makeQueryFromPreference(preference) {
    preference = preference || this.state.preference
    return {
      facultyId: preference.faculty.id,
      type: preference.type.type || preference.type.name_en,
      studyType: preference.studyType.id,
      year: preference.year.yearNumber,
      userId: this.sStore.state.user.id,
      id: preference.id
    }
  }

  reset() {
    this.state.preference = {}
    this.state.navigation.reset()
  }

  selectFaculty({ faculty }) {
    this.state.preference = {}
    this.state.preference.isLoading = false
    this.state.preference.faculty = faculty
    this.sStore.actions.goNext({ facultyId: faculty.id })
  }

  updatePreference({ data }) {
    // this.state.preference = Object.assign(this.state.preference, data)
    this.state.preference = Object.assign({}, this.state.preference, data)
  }

  resetAfterSuccess() {
    this.reset()
  }

  tooglePreferenceEdit({ preference }) {
    router.push({ name: 'edit', params: { id: preference.id } })
    this.state.preference = preference
    this.state.isInEditMode = !this.state.isInEditMode
  }

  reduce(action) {
    this.reduceMap(action, {
      FETCH_COURSES_SUCCESS: this.resetAfterSuccess,
      SELECT_FACULTY: this.selectFaculty,
      UPDATE_PREFERENCE: this.updatePreference,
      GO_NEXT: ({ params }) => this.state.navigation.goNext(params),
      GO_BACK: () => this.state.navigation.goBack(),
      ADD_PREFERENCE_SUCCESS: (() => { this.reset() }),
      TOOGLE_PREFERENCE_EDIT: this.tooglePreferenceEdit
    })
  }

  actions(dispatcher, context) {
    return {
      selectFaculty(faculty, reset) {
        reset = reset || false
        dispatcher.dispatch(new Action('SELECT_FACULTY', { faculty, reset }))
      },
      updatePreference(data, goNext) {
        dispatcher.dispatch(new Action('UPDATE_PREFERENCE', { data, goNext }))
      },
      goNext(params) {
        dispatcher.dispatch(new Action('GO_NEXT', { params }))
      },
      goBack() {
        dispatcher.dispatch(new Action('GO_BACK'))
      },
      tooglePreferenceEdit(preference) {
        dispatcher.dispatch(new Action('TOOGLE_PREFERENCE_EDIT', { preference }))

      }
    }
  }
}

const preferenceStore = new PreferenceStore()

export default preferenceStore
