<template>
<transition name="fade">
  <div class="card">
    <div class="card-block">
      <h6 class="card-title">{{station.name}}</h6>
      <p v-if="station.isLoadingStationBoard"> Loading busess...
        <p>
          <div v-if="showConnection">
            <connection-card :connection="connection" v-for="connection in this.availableConections" v-if="station.stationboard" />
          </div>
          <button href="#" type="button" class="btn btn-primary" @click="showStationWithInformation" v-else> leaving soon
        </button>
    </div>
  </div>
</transition>
</template>
<script>
import moment from 'moment'
import stationCardInfo from './stationCardInfo/stationCardInfo.vue'
import connectionCard from '../connectionCard/connectionCard.vue'
export default {
  name: 'stationCard',
  props: ['station', "showConnection", "autoDestroy", "user"],
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
      if (!this.user)
        return this.station.stationboard
      let filteredStationboard = []
      // get the first preference for each connection selected by the user
      for (let availableConnetion of this.station.avariableConnections) {
        for (let connection of this.station.stationboard) {
          if (availableConnetion == connection.number) {
            filteredStationboard.push(connection)
            // get only the first math, if any
            break
          }
        }
      }
      return filteredStationboard
    }
  }
}
</script>
<style>

</style>
