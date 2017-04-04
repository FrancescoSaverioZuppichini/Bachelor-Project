<template>
<div class='uk-container uk-section uk-flex uk-flex-column'>
  <div class="">
    <h3>Select a Bus for {{this.$store.state.currentPreference.station.name}}</h3>
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
      <div v-for="bus in buses">
        <div class="uk-card uk-card-default" :class="{'uk-box-shadow-large': bus.toogle}" @click="toogleBus(bus)">
          <div class="uk-card-body">
            <h1>{{bus.number}}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="uk-margin-top navigation__actions">
    <button class='uk-button uk-button-default uk-float-left uk-width-auto@m' @click="$router.push({path:'/preference/station'})">Back</button>
    <button class='uk-button uk-button-primary uk-float-right  uk-width-auto@m' @click="$store.actions.addPreference()">Done!</button>
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
  watch: {
    '$route': (newRoute) => {
      console.log(newRoute)
    }
  },
  created() {
    api.fetchBusesForStation(this.$store.state.currentPreference.station.id)
      .then(({
        data
      }) => {
        data.bus.forEach(bus => this.$set(bus, 'toogle', false))
        this.buses = data.bus
      })
  },
  data() {
    return {
      buses: [],
      toogle: false
    }
  },
  methods: {
    toogleBus(bus) {
      if (bus.toogle)
        this.$store.actions.removeBusToPreference(bus)
      else {
        this.$store.actions.addBusToPreference(bus)
      }
      bus.toogle = !bus.toogle
    }
  }
}
</script>
<style>

</style>
