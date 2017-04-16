<template>
<div class='uk-container uk-section uk-flex uk-flex-column'>
  <h5 class="uk-margin-remove">Select a Station</h5>
  <transition name='fade'>

    <div class="uk-alert-danger" uk-alert v-if="showError">
      <p>{{error.msg}}</p>
    </div>
  </transition>

  <div class="uk-flex-center uk-margin-top">
    <div class="uk-child-width-1-1@s uk-child-width-1-2@m uk-child-width-1-4@l uk-grid-match preference-station__container" uk-grid>
      <div v-for="index in [1,2,3]" v-if="$store.isLoadingNearbyLocations">
        <station-card-dummy></station-card-dummy>
      </div>
      <div class="" :key="index" v-for="(station,index) in $store.state.locations">
        <div class='uk-card uk-card-default uk-card-body' :class="{'uk-box-shadow-large': station.toogle}" @click="addStation(station)">
          <h6> <span class="" uk-icon="icon: location;ratio: 1.3"></span>
        {{station.name}}</h6>
        </div>
      </div>
    </div>
  </div>
  <div class="uk-margin-top navigation__actions">
    <button class='uk-button uk-button-default uk-float-left uk-width-1-1' @click="$router.go(-1)">Back</button>
    <button class='uk-button uk-button-primary uk-float-right  uk-width-1-1' @click="next">Next</button>
  </div>
</div>
</template>
<script>
import StationCard from '../../stationCard/stationCard.vue'
import StationCardDummy from '../../stationCard/StationCardDummy.vue'

import api from '../../../api.js'

export default {
  name: "StationSelectionPage",
  components: {
    StationCard,
    StationCardDummy
  },
  data() {
    return {
      show: false,
      currStation: null,
      error: {
        hasError: false,
        msg: "Select one station"
      }
    }
  },
  computed: {
    showError() {
      return this.currStation == null && this.show
    }
  },
  created() {
    this.toogleIfInPreference()
  },
  watch: {
    '$route': function() {
      this.toogleIfInPreference()
    }
  },
  methods: {
    addStation(station) {
      this.show = false
      this.currStation = station
      this.$store.actions.addStationToPreference(station)

    },
    toogleIfInPreference() {
      const preferenceStation = this.$store.state.currentPreference.station
      this.$set(location, 'toogle', false)
      for (let location of this.$store.state.locations) {
        if (location.id == preferenceStation.id) this.$set(location, 'toogle', true)
      }
    },
    next() {
      this.show = true
      this.error.hasError = (this.currStation == null)
      if (!this.error.hasError) {
        this.$router.push({
          path: '/preference/bus'
        })
      }
    }
  }
}
</script>
<style>
.preference-station__container {
  /*max-height: 75vh;*/
  /*overflow-y: scroll;*/
}
</style>
