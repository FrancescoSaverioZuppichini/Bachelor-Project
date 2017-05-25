<template>
<transition-group name="custom-classes-transition" enter-active-class="animated fadeInRight" leave-class="animated fadeOutUp" leave-active-class="animated fadeOutUp" class="uk-flex uk-flex-nowrap" uk-grid>
  <!-- <transition-group name="fade-cards"  class="uk-flex uk-flex-nowrap" uk-grid> -->

  <div key="default" class='uk-width-1-3'>
    <station-card-with-connection :station="this.$store.state.display.defaultStation" :show="true"></station-card-with-connection>
  </div>
  <!-- <div class='uk-visible@m uk-width-1-3' :key="station" v-for="station in this.$store.state.locations" v-show="show(station)">
    <station-card-with-connection :station="station" autoDestroy="true"  :show="show(station)"></station-card-with-connection>
  </div> -->
  <div class='uk-visible@m uk-width-1-3' :key="station" v-for="station in this.$store.state.openedLocations">
    <station-card-with-connection :station="station" autoDestroy="true"  :show="true"></station-card-with-connection>
  </div>
</transition-group>
</template>
<script>
import stationCard from '../stationCard/stationCard.vue'
import StationCardWithConnection from '../stationCard/StationCardWithConnection.vue'

export default {
  name: 'volatileLocations',
  components: {
    stationCard,
    StationCardWithConnection
  },
  data() {
    return {
      defaultLocationsOffset: this.$store.state.defaultLocationsOffset
    }
  },
  methods: {
    show(station) {
      return this.$store.state.openedLocations.indexOf(station) >= 0
    }
  }
}
</script>

<style>

</style>
