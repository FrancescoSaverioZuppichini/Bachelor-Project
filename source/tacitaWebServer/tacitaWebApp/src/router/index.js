import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/PhoneApp/Home.vue'
import DisplaysPage from '../components/PhoneApp/DisplaysPage/DisplaysPage.vue'
import PreferencePage from '../components/PhoneApp/PreferencePage/PreferencePage.vue'
import UserPreferencePage from '../components/PhoneApp/UserPreferencePage/UserPreferencePage.vue'
import PhoneApp from '../components/PhoneApp/PhoneApp.vue'
import ColorPickerPage from '../components/PhoneApp/UserPreferencePage/ColorPickerPage/ColorPickerPage.vue'

Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/app/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/app/preference/:src',
      name: 'Preference',
      component: PreferencePage
    },
    {
      path: '/app/display',
      name: 'Display',
      component: DisplaysPage
    },
    {
      path: '/app/user/preference',
      name: 'UserPreference',
      component: UserPreferencePage,
    },
    {
      path: '/app/user/preference/color',
      name: 'Color',
      component: ColorPickerPage
    }
  ]
})

export default router
