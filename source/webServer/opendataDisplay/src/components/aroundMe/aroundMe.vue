<template>
  <div id='aroundMe'>
    <div class="container">
      <h6> Around me </h6>
      <p v-if="this.$store.state.isLoadingNearbyLocations"> Loading stations...</p>
      <carousel :perPage=5 :navigationEnabled="true" v-else >
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
    console.log(this.$store.state.locations)
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
