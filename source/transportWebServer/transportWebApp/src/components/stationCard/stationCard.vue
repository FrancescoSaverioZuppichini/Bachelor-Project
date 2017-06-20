<template>
<!-- <transition name="fade"> -->
<div class="uk-card uk-card-default" v-if="!showConnection">
  <div class="uk-card-body my-card--padding">
    <div class='uk-flex uk-flex-column uk-margin-small-bottom'>
      <div class='uk-flex uk-flex-middle'>
        <v-icon class='uk-margin-right'>place</v-icon>
        <h5 class='uk-margin-remove'>{{station.name}}</h5>

      </div>
      <div class='uk-flex uk-flex-middle'>
        <v-icon>directions_bus</v-icon>
        <div class='uk-flex'>
          <div v-for="bus in station.buses" class='uk-margin-small-left'>
            <h6 class='bus--small uk-margin-remove'>
    {{bus.number}}
  </h6>
          </div>
        </div>
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
<style scoped>
.bus--small {
  border-radius: 8%;
  border: 1px grey solid;
  padding: 2px;
}
</style>
