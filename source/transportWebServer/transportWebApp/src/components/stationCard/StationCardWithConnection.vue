<template>
<!-- <transition name="fade"> -->
<div class="uk-card uk-card-default station-card__connection" :class="{'animated shake':station.openFeedback}" v-show="show">

  <div class="uk-card-body my-card--padding">
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
    <div v-if="station.duration" class='uk-flex uk-flex-middle'>
      <v-icon class='uk-margin-small-left'>directions_walk</v-icon>
      {{station.duration.text}}
      <v-btn icon @click.native="showMap()" v-if="station.duration && !toogleMap">
        <v-icon class="grey--text text--darken-2">directions</v-icon>
      </v-btn>
      <v-btn icon @click.native="showMap()" v-else>
        <v-icon class="grey--text text--darken-2">arrow_back</v-icon>
      </v-btn>
    </div>
    <hr  v-if="!toogleMap" />

    <div class="uk-flex uk-flex-column uk-margin-top" uk-grid v-if="!toogleMap">
      <div v-for="connection in station.stationboard" v-if="station.stationboard">
        <connection-card :connection="connection" behavior="list" :location="station" />
      </div>
    </div>

  </div>
  <div :id="station.id + 'map'" class='map' v-show="toogleMap">
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
  props: ['station', "show", "autoDestroy", "user", 'activator'],
  data() {
    return {
      toogleMap: false,
    }
  },
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
    },
    showMap() {
      this.toogleMap = !this.toogleMap
      utils.showMap(this.$store.state.display.coords, this.station)
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
.map {
  overflow: visible;
  width: 100%;
  height: 500px;
}

.station-card__connection {
  /*min-width: 350px;*/
}
</style>
