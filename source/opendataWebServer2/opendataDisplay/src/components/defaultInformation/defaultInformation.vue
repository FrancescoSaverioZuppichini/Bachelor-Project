<template>
<div class="card-group">
  <!-- <station-card :station="location" :showConnection="true" autoDestroy="true" v-for="(location,index) in this.$store.state.locations" v-if="index < maxLocations"> </station-card> -->
</div>
</template>
<script>
import stationCard from '../stationCard/stationCard.vue'

export default {
  name: 'defaultInformation',
  components: {
    stationCard
  },
  data() {
    return {
      maxLocations: 1
    }
  }
}
</script>












<style></style>
