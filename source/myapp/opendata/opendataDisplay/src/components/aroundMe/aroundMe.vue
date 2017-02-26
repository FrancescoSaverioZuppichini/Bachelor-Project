<template>
<div id='aroundMe'>
  <div class="container">
    <h6> Around me </h6>
    <div class="row">
      <div class="col-xs-4" v-for="station in this.$store.locationStore.state.aroundMe">
        <station-card :station="station" />
      </div>
    </div>
  </div>
</div>
</template>
<script>
import Store from '../../stores/Store.js'
import stationCard from '../stationCard/stationCard.vue'

export default {
  name: 'aroundMe',
  data() {
    return {
      stations: []
    }
  },
  components: {
    stationCard
  }
}
</script>


<style></style>
