<template>
<div class="uk-flex">


  <div class="uk-margin-small-right" v-for="station in this.$store.state.displayLocationsStack.getData()">
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
