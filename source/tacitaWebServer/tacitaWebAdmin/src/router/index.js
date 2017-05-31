import Vue from 'vue'
import Router from 'vue-router'
import DashBoard from '../components/DashBoard/DashBoard.vue'
import DisplayPage from '../components/DashBoard/DisplayPage.vue'

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
    }]
  }]
})
