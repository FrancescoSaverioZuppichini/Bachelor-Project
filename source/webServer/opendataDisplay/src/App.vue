<template>
<div id='App'>
  <div class="uk-container uk-section uk-container-large">
    <div uk-grid>
      <div class="uk-width-1-1">
        <div class="container">
          <around-me/>
        </div>
      </div>
      <div class="uk-width-1-1">
        <div uk-grid>
          <div class="uk-width-expand">
            <volatile-locations/>
          </div>
          <div class="uk-width-auto uk-flex">
            <users-content/>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

// loads the Icon plugin
UIkit.use(Icons);
import axios from 'axios'
import connectionCard from './components/connectionCard/connectionCard.vue'
import stationCard from './components/stationCard/stationCard.vue'
import aroundMe from './components/aroundMe/aroundMe.vue'
import defaultInformation from './components/defaultInformation/defaultInformation.vue'

import volatileLocations from './components/volatileLocations/volatileLocations.vue'
import usersContent from './components/usersContent/usersContent.vue'

import connectionStore from './stores/ConnectionStore.js'
import locationStore from './stores/LocationStore.js'
import userStore from './stores/UserStore.js'
import {
  SuperStore
} from 'flue-vue'
import Vue from 'vue'

import socket from './socket.js'
SuperStore.addStores([locationStore, userStore])
Vue.prototype.$store = SuperStore

export default {
  name: 'App',
  mounted() {
    this.$store.actions.fetchNearbyLocations()
  },
  components: {
    connectionCard,
    stationCard,
    aroundMe,
    volatileLocations,
    defaultInformation,
    usersContent,
  }
}
</script>

<style stylus>
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
}

.flex-list {
  display: flex;
}

.flex-list--column {
  flex-direction: column;
}

.flex-item {
  flex: 1 1 auto;
}

.flex-item--grow {
  flex-grow: 0 !important
}

@import url('./css/main.css');
@import url('./css/spinkit.css');
#App {
  padding-top: 24px;
  height: 100%;
  width: 100%;
}

.card--horizontal {
  flex-direction: row !important;
}

.flex--grow-0 {
  flex-grow: 0 !important
}

.full-h {
  height: 100%;
}
</style>
