<template>
  <div id='aroundMe'>
    <div class="container">
      <h6> Around me </h6>
      <carousel :perPage=5 :navigationEnabled=true v-if="this.$store.locationStore.state.locations.length > 0">
        <slide v-for="station in this.$store.locationStore.state.locations">
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


<style></style>
