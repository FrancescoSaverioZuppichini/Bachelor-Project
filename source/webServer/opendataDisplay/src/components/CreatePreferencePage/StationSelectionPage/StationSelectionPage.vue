<template>
<div class='uk-container uk-section uk-flex uk-flex-column'>

  <h1 class="uk-margin-remove">Select a Station</h1>
  <div>
    <!-- <form class="uk-search uk-search-default uk-width-1-1@">
      <span uk-search-icon></span>
      <input class="uk-search-input uk-width-1-1@" type="Search" placeholder="">
    </form> -->
  </div>
  <div class="uk-flex-center uk-margin-top">
    <h6 class='uk-text-meta uk-text-large'>Next to you</h6>
    <div class="uk-child-width-1-1@s uk-child-width-1-2@m uk-child-width-1-4@l uk-grid-match preference-station__container" uk-grid>
      <div class="" v-for="station in stations">
        <station-card :station="station" :class="{'uk-box-shadow-large': station.toogle}" :showConnection="false" @click.native="$store.actions.addStationToPreference(station)" />
      </div>
    </div>
  </div>
  <div class="uk-margin-top navigation__actions">
    <button class='uk-button uk-button-default uk-float-right uk-width-auto@m' @click="$router.push({path:'/preference'})">
      Back
    </button>
    <button class='uk-button uk-button-primary uk-float-right uk-width-auto@m' @click="$router.push({path:'/preference/bus'})">
      Next
    </button>
  </div>
</div>
</template>
<script>
import StationCard from '../../stationCard/stationCard.vue'
import api from '../../../api.js'

export default {
  name: "StationSelectionPage",
  data() {
    return {
      stations: []
    }
  },
  created() {
    api.fetchNearbyLocations()
      .then(({
        data
      }) => {
        this.stations = data
      })
  },
  methods: {
    toogleStation(station) {
      if (station.toogle)
        this.$store.actions.removeStationToPreference(station)
      else {
        this.$store.actions.addStationToPreference(station)
      }
      station.toogle = !station.toogle
    }
  },
  components: {
    StationCard
  }
}
</script>
<style>
.preference-station__container {
  max-height: 60vh;
  overflow-y: scroll;
}
</style>
