<template>
<div id='aroundMe'>
  <div class="container">
    <div class="row">
      <div class="col-xs-4" v-for="station in stations">
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
},
  mounted() {
    Store.getNearbyLocations()
      .then((res) => {
        this.stations = res.data.stations
      })
  }
}
</script>
<style></style>
