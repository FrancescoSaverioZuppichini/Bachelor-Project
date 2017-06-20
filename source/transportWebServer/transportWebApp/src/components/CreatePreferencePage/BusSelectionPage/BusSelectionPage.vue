<template>
<selector-wrapper title="Select a Bus">
  <div class='uk-container bottom--offset'>
    <div class="uk-margin-top">
      <transition name='fade'>
        <div class="uk-alert-danger" uk-alert v-if="showError">
          <p>{{error.msg}}</p>
        </div>
      </transition>
      <!-- {{this.$store.state.preference}} -->
      <resource-transition-wrapper>
        <div v-for="bus in this.$store.state.connections" class="uk-width-1-1" :key="bus">
          <resource @click.native="toogle(bus)" :toogle="bus.toogle">
            <!-- $store.state.preference.buses.indexOf(bus) >= 0 -->
            <h3>{{bus.number}}</h3>
          </resource>
        </div>
      </resource-transition-wrapper>
    </div>
  </div>
  <div class="uk-margin-top navigation__actions">
    <v-btn icon="icon" class="grey--text grey--darken-2" @click.native="$router.go(-1)">
      <v-icon>arrow_back</v-icon>
    </v-btn>
    <v-btn icon="icon" class="grey--text grey--darken-2 uk-float-right" @click.native="next">
      <v-icon>arrow_forward</v-icon>
    </v-btn>
  </div>
</selector-wrapper>
</template>
<script>
import StationCard from '../../stationCard/stationCard.vue'
import ConnectionCard from '../../connectionCard/connectionCard.vue'
import api from '../../../api.js'
import SelectorWrapper from '../SelectorWrapper.vue'
import Resource from '../Resource/Resource.vue'
import ResourceTransitionWrapper from '../Resource/ResourceTransitionWrapper.vue'


export default {
  name: "BusSelectionPage",
  components: {
    StationCard,
    ConnectionCard,
    Resource,
    ResourceTransitionWrapper,
    SelectorWrapper
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
      return this.$store.state.preference.buses.length == 0 && this.show
    }
  },
  created() {
    this.fetchBuses()
  },
  watch: {
    '$route': function(newRoute) {
      if (newRoute.name == 'bus') this.fetchBuses()
    }
  },
  methods: {
    isToogled(bus) {
      for (let connInPref of this.$store.state.preference.buses) {
        for (let conn of this.buses) {
          if (conn.id == connInPref.id) return true
        }
      }
      return false
    },
    toogle(bus) {

      if (this.$store.PreferenceStore.findBusInPreference(bus) >= 0) {
        this.$store.actions.removeBusToPreference(bus)
        bus.toogle = false

      } else {
        this.$store.actions.addBusToPreference(bus)
        bus.toogle = true

      }
      // if (bus.toogle) {
      //   this.$store.actions.removeBusToPreference(bus)
      // } else {
      //   this.show = false
      //   this.$store.actions.addBusToPreference(bus)
      // }
      // if (bus.toogle == undefined) this.$set(bus, 'toogle', true)
      // else {
      //   bus.toogle = !bus.toogle
      // }
    },
    fetchBuses() {
      const stationId = this.$store.state.preference.station.id
      // console.log(stationId);
      this.$store.actions.fetchBusesFromStation(stationId)
    },
    next() {
      this.show = true
      const isAtLeastOneBusSelected = this.$store.state.preference.buses.length > 0
      this.error.hasError = !isAtLeastOneBusSelected
      if (isAtLeastOneBusSelected) {
        this.show = false
        this.$router.push({
          name: 'direction'
        })
      }
    }
  }
}
</script>
<style>

</style>
