import Vue from 'vue'
import Router from 'vue-router'
import DashBoard from '../components/DashBoard/DashBoard.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DashBoard',
      component: DashBoard
    }
  ]
})
