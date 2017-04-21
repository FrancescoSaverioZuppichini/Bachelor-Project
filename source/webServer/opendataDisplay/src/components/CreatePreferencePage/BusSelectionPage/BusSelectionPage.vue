<template>
<div class='uk-container uk-section uk-flex uk-flex-column'>
  <div class="">
    <h5>Select a Bus for {{this.$store.state.currentPreference.station.name}}</h5>
    <transition name='fade'>
      <div class="uk-alert-danger" uk-alert v-if="showError">
        <p>{{error.msg}}</p>
      </div>
    </transition>
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
            <h3>{{bus.number}}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="uk-margin-top navigation__actions">
    <a  uk-icon="icon: chevron-left; ratio: 1.5" @click="$router.go(-1)"> </a>
    <a  uk-icon="icon: chevron-right; ratio: 1.5" class='uk-float-right'v-if='!$store.state.isInEditMode' @click="next"></a>
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
