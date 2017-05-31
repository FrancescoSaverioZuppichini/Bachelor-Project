import { Store, Action } from 'flue-vue'
import axios from 'axios'
import router from '../router/index.js'
import Vue from 'vue'

import path from 'path'

class Navigation {
  constructor() {
    this._urls = ['faculty', 'study', 'year', 'studyType']
    this._guards = []
    this._index = 0
  }

  setGuards(guards) {
    this._guards = guards
  }

  goNext(id) {

    id = id || ''

    // if (this._index >= this._urls.length) return

    this._guards[this._index]()
    router.push({ name: this._urls[this._index], params: { facultyId: id } })
    this._index += 1

  }

  goBack() {
    this._index -= 1
    if (this._index <= this._guards.length && this.index >= 0) this._guards[this._index]()
    router.go(-1)
  }

  reset(basicUrl) {
    this._index = 0
    if (this.BASE_URL != '' && this.BASE_URL) router.push(this.BASE_URL)
  }
}

class PreferenceStore extends Store {
  constructor() {
    super()
    this.state = {}
    this.state.preference = {}
    this.state.navigation = new Navigation()
    this.state.isInEditMode = false
    this.state.navigation.setGuards(this.navigationGuards())
  }

  onNavigationDone() {
    Vue.set(this.state.preference, 'isLoading', true)
    console.log('onNavigationDone');
    this.sStore.actions.fetchCourses(this.makeQueryFromPreference(this.state.preference))
  }

  navigationGuards() {
    return [
      () => { console.log('beforeGoToStudy') },
      () => { console.log('beforeGoToYear') },
      () => {
        const studyType = this.state.preference.faculty.studies.filter(study => this.state.preference.type == study.type)
        console.log(studyType.length)
      },
      this.onNavigationDone.bind(this)
    ]
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

  selectFaculty({ faculty, reset }) {
    this.state.preference = {}
    this.state.preference.isLoading = false
    if (reset) this.reset()
    this.state.preference.faculty = faculty
    this.sStore.actions.goNext(faculty.id)
  }

  updatePreference({ data, goNext }) {
    if (goNext == undefined) goNext = true
    // this.state.preference = Object.assign(this.state.preference, data)
    this.state.preference = Object.assign({}, this.state.preference, data)
    console.log(this.state.preference);
    if (goNext) this.sStore.actions.goNext(this.state.preference.faculty.id)
  }

  resetAfterSuccess() {
    this.reset()
  }

  tooglePreferenceEdit({ preference }) {
    router.push({ name: 'edit', params: { id: preference.id } })
    this.state.preference = preference
    this.state.isInEditMode = !this.state.isInEditMode
  }

  setGuards({ guards }) {
    this.state.navigation.setGuards(guards.map(guard => guard.bind(this)))
  }

  reduce(action) {
    this.reduceMap(action, {
      FETCH_COURSES_SUCCESS: this.resetAfterSuccess,
      SELECT_FACULTY: this.selectFaculty,
      UPDATE_PREFERENCE: this.updatePreference,
      GO_NEXT: ({ id }) => this.state.navigation.goNext(id),
      GO_BACK: () => this.state.navigation.goBack(),
      SET_GUARDS: this.setGuards,
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
      goNext(id) {
        dispatcher.dispatch(new Action('GO_NEXT', { id }))
      },
      goBack() {
        dispatcher.dispatch(new Action('GO_BACK'))
      },
      setGuards(arrayOfFunction) {
        dispatcher.dispatch(new Action('SET_GUARDS', { guards: arrayOfFunction }))
      },
      tooglePreferenceEdit(preference) {
        dispatcher.dispatch(new Action('TOOGLE_PREFERENCE_EDIT', { preference }))

      }
    }
  }
}

const preferenceStore = new PreferenceStore()

export default preferenceStore
