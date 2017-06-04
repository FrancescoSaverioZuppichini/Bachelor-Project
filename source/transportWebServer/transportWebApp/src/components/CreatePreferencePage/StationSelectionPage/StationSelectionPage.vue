<template>
<selector-wrapper title="Select Station">
  <div class='uk-container bottom--offset'>
    <div class="uk-margin-top">
      <transition name='fade'>

        <div class="uk-alert-danger" uk-alert v-if="showError">
          <p>{{error.msg}}</p>
        </div>
      </transition>
      <resource-transition-wrapper>
        <div v-for="station in $store.state.locations" class="uk-width-1-1" :key="station">
          <resource @click.native="$store.PreferenceStore.addStationToPreference({station})" :toogle="station.id == $store.state.preference.station.id">
            <h6> <span class="" uk-icon="icon: location;ratio: 1.3"></span>
        {{station.name}}</h6>
          </resource>
        </div>
      </resource-transition-wrapper>
    </div>
  </div>
  <div class="uk-margin-top navigation__actions">
    <v-btn icon="icon" class="grey--text grey--darken-2" @click.native="$router.go(-1)">
      <v-icon>arrow_back</v-icon>
    </v-btn>
  </div>
</selector-wrapper>
</template>
<script>
import StationCard from '../../stationCard/stationCard.vue'
import StationCardDummy from '../../stationCard/StationCardDummy.vue'
import SelectorWrapper from '../SelectorWrapper.vue'
import Resource from '../Resource/Resource.vue'
import ResourceTransitionWrapper from '../Resource/ResourceTransitionWrapper.vue'

import api from '../../../api.js'

export default {
  name: "StationSelectionPage",
  components: {
    StationCard,
    StationCardDummy,
    Resource,
    ResourceTransitionWrapper,
    SelectorWrapper

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
      const preferenceStation = this.$store.state.preference.station
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
          name: 'bus'
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
