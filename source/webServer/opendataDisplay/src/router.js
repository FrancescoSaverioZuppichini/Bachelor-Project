import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

import DisplayPage from './components/Displaypage/DisplayPage.vue'
import CreatePreferencePage from './components/CreatePreferencePage/CreatePreferencePage.vue'
import StationSelectionPage from './components/CreatePreferencePage/StationSelectionPage/StationSelectionPage.vue'
import BusSelectionPage from './components/CreatePreferencePage/BusSelectionPage/BusSelectionPage.vue'
import CreatePreferenceHomePage from './components/CreatePreferencePage/CreatePreferenceHomePage/CreatePreferenceHomePage.vue'
import DirectionSelectionPage from './components/CreatePreferencePage/DirectionSelectionPage/DirectionSelectionPage.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [{
    path: '/',
    name: 'App',
    component: App,
    children: [{
        name: 'display',
        path: '/display',
        component: DisplayPage
      },
      {
        path: 'preference',
        component: CreatePreferencePage,
        children: [{
            path: '',
            component: CreatePreferenceHomePage,
          },
          {
            path: 'station',
            component: StationSelectionPage,
          },
          {
            path: 'direction',
            component: DirectionSelectionPage
          },
          {
            path: 'bus',
            component: BusSelectionPage,
          }
        ]
      }
    ]
  }]
})
