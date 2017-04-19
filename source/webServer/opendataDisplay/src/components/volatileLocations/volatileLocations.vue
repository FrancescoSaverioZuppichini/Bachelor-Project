<template>
<div class="uk-flex" uk-grid>
  <div>
    <station-card :station="this.$store.state.display.defaultStation" :showConnection="true"></station-card>
  </div>
  <div class='uk-visible@m' v-for="station in this.$store.state.displayLocationsStack.getData()">
    <station-card :station="station" :showConnection="true" autoDestroy="true"></station-card>
  </div>
</div>
</template>
<script>
import stationCard from '../stationCard/stationCard.vue'

export default {
  name: 'volatileLocations',
  components: {
    stationCard
  },
  data() {
    return {
      defaultLocationsOffset: this.$store.state.defaultLocationsOffset
    }
  }
}
</script>

<style>

</style>
