<template>
  <div class="flex-list">
    <div  v-for="(location,index) in this.$store.state.locations" v-if="index < defaultLocationsOffset">
      <station-card :station="location" :showConnection="true" autoDestroy="true"> </station-card>
    </div>

    <div  v-for="station in this.$store.state.displayLocationsStack.getData()">
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
