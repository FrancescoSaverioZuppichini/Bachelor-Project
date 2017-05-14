import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import DisplaysPage from '../components/DisplaysPage/DisplaysPage.vue'
import PreferencePage from '../components/PreferencePage/PreferencePage.vue'
import UserPreferencePage from '../components/UserPreferencePage/UserPreferencePage.vue'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/app/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/app/display',
      name: 'Display',
      component: DisplaysPage
    },
    {
      path: '/app/preference/:src',
      name: 'Preference',
      component: PreferencePage
    },
    {
      path: '/app/user/preference',
      name: 'UserPreference',
      component: UserPreferencePage
    }
  ]
})

export default router
