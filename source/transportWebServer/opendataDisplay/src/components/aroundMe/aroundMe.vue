<template>
<div class="uk-container uk-container-large ">
  <div class="uk-flex-center uk-flex" v-if="this.$store.state.isLoadingNearbyLocations">
    <div class="uk-spinner--large" uk-spinner></div>
  </div>
  <carousel :perPage=3 :navigationEnabled="true" v-else>
    <slide v-for="station in this.$store.state.locations">
      <station-card class="uk-margin" :station="station" :showConnection="false" :activator="true" />
    </slide>
  </carousel>
</div>
</template>
<script>
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

<style>
.uk-spinner--large {
  font-size: 54px;
}
</style>
