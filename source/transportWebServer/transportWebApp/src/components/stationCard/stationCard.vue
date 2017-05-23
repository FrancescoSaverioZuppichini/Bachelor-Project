<template>
<!-- <transition name="fade"> -->
<div class="uk-card uk-card-default" v-if="!showConnection">
  <div class="uk-card-body my-card--padding">
    <div class='uk-flex uk-flex-middle uk-margin-small-bottom'>
      <v-icon class='uk-margin-right'>place</v-icon>
      <h5 class='uk-margin-remove'>{{station.name}}</h5>
      <div class="uk-flex-grow">
      </div>
    </div>
    <button type="button" class="uk-button uk-button-primary" @click="showStationWithInformation" v-if="activator"> leaving soon
        </button>
  </div>
</div>
<!-- </transition> -->
</template>
<script>
import utils from '../../utils.js'
import moment from 'moment'
import stationCardInfo from './stationCardInfo/stationCardInfo.vue'
import connectionCard from '../connectionCard/connectionCard.vue'
export default {
  name: 'stationCard',
  props: ['station', "showConnection", "autoDestroy", "user", 'activator'],
  components: {
    stationCardInfo,
    connectionCard
  },
  methods: {
    getArrivalTime(date) {
      return moment(date).format("HH:mm:ss");
    },
    showStationWithInformation() {
      //        get the data
      this.$store.actions.fetchLocationStationBoard(this.station)
      //          show the location on the leavingSoon
      this.$store.actions.putLocationInDisplayStack(this.station)
    }
  },
  computed: {
    availableConections() {
      return this.$store.LocationStore.getAvailableConnections(this.station, this.user)
    }
  }
}
</script>
<style>

</style>
