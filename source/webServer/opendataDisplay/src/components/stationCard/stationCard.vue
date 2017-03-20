<template>
<!-- <transition name="fade"> -->
  <div class="uk-card uk-card-default uk-margin-right uk-animation-fade">
    <div class="uk-card-body">
        <h4>{{station.name}}</h4>
        <div class="uk-flex-center uk-flex uk-margin" v-if="station.isLoadingStationBoard && station.stationboard.length == 0">
          <div class="uk-spinner--large" uk-spinner></div>
        </div>
            <div v-if="showConnection" v-else>
              <connection-card :connection="connection" behavior="list" v-for="connection in this.availableConections" v-if="station.stationboard" />
            </div>
            <button  type="button" class="uk-button uk-button-primary" @click="showStationWithInformation" v-else> leaving soon
        </button>
      </div>
  </div>
<!-- </transition> -->
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
      return this.$store.LocationStore.getAvailableConnections(this.station, this.user)
    }
  }
}
</script>
<style>

</style>
