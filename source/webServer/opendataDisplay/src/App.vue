<template>
<div id='App'>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <div class="container">
          <around-me/>
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xs-auto col-sm-auto col-md-auto col-lg-auto col-xl-auto">
              <volatile-locations/>
            </div>
            <div class="col-xs-auto col-sm-auto col-md-auto col-lg-auto col-xl-auto">
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
import axios from 'axios'
import connectionCard from './components/connectionCard/connectionCard.vue'
import stationCard from './components/stationCard/stationCard.vue'
import aroundMe from './components/aroundMe/aroundMe.vue'
import defaultInformation from './components/defaultInformation/defaultInformation.vue'

import volatileLocations from './components/volatileLocations/volatileLocations.vue'
import usersContent from './components/usersContent/usersContent.vue'

import SuperStore from './flux/SuperStore.js'
import LocationStore from './stores/LocationStore.js'
import UserStore from './stores/UserStore.js'

import socket from './socket.js'

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

.flex-list--column{
  flex-direction: column;
}

.flex-item {
  flex: 1 1 auto;
}

.flex-item--grow{
  flex-grow: 0 !important
}

@import url('./css/main.css');
#App {
  padding-top: 24px;
}

.card--horizontal {
  flex-direction: row !important;
}

.flex--grow-0 {
  flex-grow: 0 !important
}
</style>
