// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueCarousel from 'vue-carousel';
import VueRouter from 'vue-router'
import DisplayPage from './components/Displaypage/DisplayPage.vue'
import CreatePreferencePage from './components/CreatePreferencePage/CreatePreferencePage.vue'
import StationSelectionPage from './components/CreatePreferencePage/StationSelectionPage/StationSelectionPage.vue'
import BusSelectionPage from './components/CreatePreferencePage/BusSelectionPage/BusSelectionPage.vue'

Vue.use(VueCarousel)
Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: App,
  children: [{
      path: '/display',
      component: DisplayPage
    },
    {
      path: 'preference',
      component: CreatePreferencePage,
      children: [{
          path: 'station',
          component: StationSelectionPage,
        },
        {
          path: 'bus',
          component: BusSelectionPage,
        }
      ]
    }
  ]
}]

const router = new VueRouter({
  routes
})
// import bootstrapStyle from '../node_modules/bootstrap/dist/css/bootstrap.min.css'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: {
    App
  }
})
