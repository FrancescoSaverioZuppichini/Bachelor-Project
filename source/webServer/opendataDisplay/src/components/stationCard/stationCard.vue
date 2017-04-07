<template>
<!-- <transition name="fade"> -->
<div class="uk-card uk-card-default uk-animation-fade">
  <div class="uk-card-body">

    <h4 class="uk-clearfix"><span class="uk-margin-small-right" uk-icon="icon: location; ratio: 1.5"></span>{{station.name}}
      <span class="uk-float-right uk-margin-small-right" uk-icon="icon:clock; ratio: 1.2" v-if="showConnection"></span>
</h4>
    <div class="uk-flex-center uk-flex uk-margin" v-if="station.isLoadingStationBoard && station.stationboard.length == 0">
      <div class="uk-spinner--large" uk-spinner></div>
    </div>
    <button type="button" class="uk-button uk-button-primary" @click="showStationWithInformation" v-if="activator"> leaving soon
        </button>
  </div>
  <div v-if="showConnection" class="uk-flex uk-flex-column">
    <div v-for="connection in this.availableConections" v-if="station.stationboard" class="uk-position-relative uk-margin-bottom">
      <connection-card :connection="connection" behavior="list" :location="station" />
    </div>
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
