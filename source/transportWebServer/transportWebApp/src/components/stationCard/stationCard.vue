<template>
<!-- <transition name="fade"> -->
<div class="uk-card uk-card-default" :class="{'animated shake':station.openFeedback}" v-if="showConnection">
  <div class="uk-card-body" :class="{'my-card--padding':!showConnection}">
    <!-- <div class="my-card__close" large v-if="showConnection && station.number != $store.state.display.defaultStation.number">
      <v-btn icon large class='grey--text text--darken-2' @click.native="$store.state.openedLocations.splice($store.state.openedLocations.indexOf(station),1)">
        <v-icon>close</v-icon>
      </v-btn>
    </div> -->
    <div class='uk-flex uk-flex-middle'>
      <v-icon large class='uk-margin-right'>place</v-icon>
      <h4 class='uk-margin-remove'>{{station.name}}</h4>
      <div class="uk-flex-grow">
      </div>
      <v-icon class='uk-margin-left'>access_time</v-icon>
    </div>
    <hr />
    <div class="uk-flex uk-flex-column uk-margin-top" uk-grid>
      <div v-for="connection in station.stationboard" v-if="station.stationboard">
        <connection-card :connection="connection" behavior="list" :location="station" />
      </div>
    </div>
  </div>
</div>

<div class="uk-card uk-card-default" v-else>
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
