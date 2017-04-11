<template>
<div class='uk-container uk-section uk-flex uk-flex-column'>
  <div class="">
    <h3>Select a Bus for {{this.$store.state.currentPreference.station.name}}</h3>
    <div v-if="showError" class='uk-animation-fade'>
      <div class="uk-alert-danger" uk-alert>
        <p>{{error.msg}}</p>
      </div>
    </div>
  </div>
  <div>
  </div>
  <div v-if="$store.state.preferenceError.message">
    <div class="uk-alert-danger" uk-alert>
      <p>{{$store.state.preferenceError.message}}</p>
    </div>
  </div>
  <div class="uk-flex-center">
    <div class="uk-flex" uk-grid>
      <div v-for="bus in $store.state.connections" class="uk-width-1-1">
        <div class="uk-card uk-card-default" :class="{'uk-box-shadow-large': bus.toogle}" @click="toogleBus(bus)">
          <div class="uk-card-body">
            <h1>{{bus.number}}</h1>
          </div>
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
import ConnectionCard from '../../connectionCard/connectionCard.vue'
import api from '../../../api.js'

export default {
  name: "BusSelectionPage",
  components: {
    StationCard,
    ConnectionCard
  },
  data() {
    return {
      buses: [],
      show: false,
      error: {
        hasError: false,
        msg: "Select at least one bus"
      }
    }
  },
  computed: {
    showError() {
      return this.$store.state.currentPreference.buses.length == 0 && this.show
    }
  },
  created() {
    this.fetchBuses()
  },
  watch: {
    '$route': function(newRoute) {
      if (newRoute.path == '/preference/bus') this.fetchBuses()
    }
  },
  methods: {
    toogleBus(bus) {
      if (bus.toogle) {
        this.$store.actions.removeBusToPreference(bus)
      } else {
        this.show = false
        this.$store.actions.addBusToPreference(bus)
      }
      bus.toogle = !bus.toogle
    },
    fetchBuses() {
      const stationId = this.$store.state.currentPreference.station.id
      this.$store.actions.fetchBusesFromStation(stationId)
    },
    next() {
      this.show = true
      const isAtLeastOneBusSelected = this.$store.state.currentPreference.buses.length > 0
      this.error.hasError = !isAtLeastOneBusSelected
      if (isAtLeastOneBusSelected) {
        this.show = false
        this.$router.push({
          path: '/preference/direction'
        })
      }
    }
  }
}
</script>
<style>

</style>
