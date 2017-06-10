import Vue from 'vue'
import Router from 'vue-router'
import DashBoard from '../components/DashBoard/DashBoard.vue'
import DisplayPage from '../components/DashBoard/DisplayPage.vue'
import BeaconPage from '../components/DashBoard/BeaconPage.vue'
import ApplicationPage from '../components/DashBoard/ApplicationPage.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'DashBoard',
    component: DashBoard,
    children: [{
      path: '/display',
      name: 'DisplayPage',
      component: DisplayPage
    },
    {
      path: '/beacon',
      name: 'BeaconPage',
      component: BeaconPage
    },
    {
      path: '/application',
      name: 'ApplicationPage',
      component: ApplicationPage
    }]
  }]
})
