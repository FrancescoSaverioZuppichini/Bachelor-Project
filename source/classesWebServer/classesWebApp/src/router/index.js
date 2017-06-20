import Vue from 'vue'
import Router from 'vue-router'
import Display from '../components/Display/Display.vue'

import PreferenceSelector from '../components/PreferenceSelector/PreferenceSelector.vue'
import PreferenceSelectorFaculty from '../components/PreferenceSelector/PreferenceSelectorFaculty.vue'
import PreferenceSelectorStudy from '../components/PreferenceSelector/PreferenceSelectorStudy.vue'
import PreferenceSelectorYear from '../components/PreferenceSelector/PreferenceSelectorYear.vue'
import PreferenceSelectorStudyType from '../components/PreferenceSelector/PreferenceSelectorStudyType.vue'

import PreferenceSelectorApp from '../components/CustomizationApp/PreferenceSelectorApp.vue'
// import PreferenceSelectorFacultyApp from '../components/CustomizationApp/PreferenceSelectorFacultyApp.vue'
import PreferenceSelectorStudyApp from '../components/CustomizationApp/PreferenceSelectorStudyApp.vue'
import PreferenceSelectorYearApp from '../components/CustomizationApp/PreferenceSelectorYearApp.vue'
import PreferenceSelectorStudyTypeApp from '../components/CustomizationApp/PreferenceSelectorStudyTypeApp.vue'

import CustomizationAppHome from '../components/CustomizationApp/CustomizationAppHome.vue'

import CustomizationApp from '../components/CustomizationApp/CustomizationApp.vue'
import PreferenceEditPage from '../components/CustomizationApp/PreferenceEditPage.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/display/:id',
      name: 'Display',
      component: Display,

      children: [{
          path: '/display/:id/preference/faculty/:facultyId/year',
          name: 'yearDisplay',
          component: PreferenceSelectorYear
        },
        {
          path: '/display/:id/preference/faculty/:facultyId/study',
          name: 'studyDisplay',
          component: PreferenceSelectorStudy
        }, {
          path: '/display/:id/preference/faculty/:facultyId/studyType',
          name: 'studyTypeDisplay',
          component: PreferenceSelectorStudyType
        },
      ]
    },
    {
      path: '/app/',
      name: 'CustomizationApp',
      component: CustomizationApp,
      children: [{
          path: '/app/home/:userId',
          name: 'home',
          component: CustomizationAppHome
        },
        {
          path: '/app/preference/:id/edit',
          name: 'edit',
          component: PreferenceEditPage
        }, {
          path: '/app/preference/faculty/',
          name: 'faculty',
          component: PreferenceSelectorApp
        }, {
          path: '/app/preference/faculty/:facultyId/year',
          name: 'year',
          component: PreferenceSelectorYearApp
        },
        {
          path: '/app/preference/faculty/:facultyId/study',
          name: 'study',
          component: PreferenceSelectorStudyApp
        }, {
          path: '/app/preference/faculty/:facultyId/studyType',
          name: 'studyType',
          component: PreferenceSelectorStudyTypeApp
        },
      ]
    }
  ]
})
