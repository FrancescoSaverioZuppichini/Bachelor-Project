<template>
<div id='App'>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <div class="container">
          <around-me/>
        </div>
      </div>
      <div class="col">
        <div class="container-fluid">
          <div class=" flex-list">
            <div class="">
              <volatile-locations/>
            </div>
            <div class="">
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

.flex-item {
  flex: 1 1 auto;
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
