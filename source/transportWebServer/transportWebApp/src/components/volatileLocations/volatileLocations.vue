<template>
<transition-group name='fade' lass="uk-flex uk-flex-nowrap" uk-grid>
<div key="default">
  <station-card  :station="this.$store.state.display.defaultStation" :showConnection="true"></station-card>

</div>
  <div class='uk-visible@m' :key="station" v-for="station in this.$store.state.openedLocations">
    <station-card :station="station" :showConnection="true" autoDestroy="true"></station-card>
  </div>
</transition-group>
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
