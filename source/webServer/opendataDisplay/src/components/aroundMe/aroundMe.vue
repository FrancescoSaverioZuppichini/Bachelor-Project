<template>
<div id='aroundMe'>
  <div class="uk-container uk-container-large ">
    <div class="uk-flex-center uk-flex" v-if="this.$store.state.isLoadingNearbyLocations">
      <div class="uk-spinner--large" uk-spinner></div>
    </div>
    <carousel :perPage=5 :navigationEnabled="true" v-else>
      <slide v-for="station in this.$store.state.locations">
        <station-card :station="station" :showConnection="false" />
      </slide>
    </carousel>
  </div>
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
.uk-spinner--large{
  font-size: 54px;
}
</style>
