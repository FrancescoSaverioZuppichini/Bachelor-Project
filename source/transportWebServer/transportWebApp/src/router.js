import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

import DisplayPage from './components/Displaypage/DisplayPage.vue'
import CustomizationApp from './components/CreatePreferencePage/CustomizationApp.vue'

import StationSelectionPage from './components/CreatePreferencePage/StationSelectionPage/StationSelectionPage.vue'
import BusSelectionPage from './components/CreatePreferencePage/BusSelectionPage/BusSelectionPage.vue'
import CreatePreferenceHomePage from './components/CreatePreferencePage/CreatePreferenceHomePage/CreatePreferenceHomePage.vue'
import DirectionSelectionPage from './components/CreatePreferencePage/DirectionSelectionPage/DirectionSelectionPage.vue'
import EditPreferencePage from './components/CreatePreferencePage/EditPreferencePage/EditPreferencePage.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [{
    path: '/',
    name: 'App',
    component: App,
    children: [{
        name: 'display',
        path: '/display/:id',
        component: DisplayPage
      },
      {
        path: '/app/home/:userId',
        name: 'app',
        component: CustomizationApp,
        children: [{
            path: '',
            name: 'preferenceHome',
            component: CreatePreferenceHomePage,
          },
          {
            path: 'station',
            name: 'station',
            component: StationSelectionPage,
          },
          {
            path: 'direction',
            name: 'direction',
            component: DirectionSelectionPage
          },
          {
            path: 'bus',
            name: 'bus',
            component: BusSelectionPage,
          },
          {
            path: 'edit',
            name: 'edit',
            component: EditPreferencePage,
          }
        ]
      }
    ]
  }]
})
