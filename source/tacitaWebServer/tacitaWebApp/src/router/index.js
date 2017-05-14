import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import DisplaysPage from '../components/DisplaysPage/DisplaysPage.vue'
import PreferencePage from '../components/PreferencePage/PreferencePage.vue'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
