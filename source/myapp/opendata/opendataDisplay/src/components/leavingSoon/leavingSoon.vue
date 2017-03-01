<template>
<div class="container">
  <div class="row">
    <div class="col-xs-4" v-for="station in this.$store.state.locationsStack">
      <station-card :station="station" :showConnection="true" autoDestroy="true"></station-card>
    </div>
  </div>
</div>
</template>
<script>
import stationCard from '../stationCard/stationCard.vue'

export default {
  name: 'leavingSoon',
  components: {
    stationCard
  },
  data() {
    return {
      // leavingSoon: this.$store.connectionStore.state.leavingSoon
    }
  }
}
</script>

<style>

</style>
