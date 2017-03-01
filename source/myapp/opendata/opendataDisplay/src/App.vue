<template>
<div id='App'>
  <div class="container container-fluid">
    <div class="row">
      <div class="col-xs-12">
        <around-me/>
      </div>
      <div class="col-xs-12">
        <volatile-locations/>
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
import volatileLocations from './components/volatileLocations/volatileLocations.vue'
import usersContent from './components/usersContent/usersContent.vue'

import SuperStore from './flux/SuperStore.js'
import LocationStore from './stores/LocationStore.js'

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
    usersContent,
  }
}
</script>

<style stylus>
@import url('./css/main.css');
.card--horizontal {
  flex-direction: row !important;
}

.flex--grow-0 {
  flex-grow: 0 !important
}
</style>
