<template>
<!-- <transition name="fade"> -->
<div class="uk-card uk-card-default station-card__connection" :class="{'animated shake':station.openFeedback}" v-show="show">

  <div class="uk-card-body my-card--padding">

    <div class='uk-flex uk-flex-middle'>
      <v-icon large class='uk-margin-right'>place</v-icon>
      <h4 class='uk-margin-remove'>{{station.name}}</h4>
      <div class="uk-flex-grow">
      </div>
      <v-icon class='uk-margin-left'>access_time</v-icon>
    </div>
    <v-btn icon @click.native='toogleBusList = false' v-if="toogleBusList">
      <v-icon class="grey--text text--darken-2">arrow_back</v-icon>
    </v-btn>
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
    <hr v-if="!toogleMap" />

    <div class="uk-flex uk-flex-column uk-margin-top" uk-grid v-if="!toogleMap && !toogleBusList">
      <div v-if="!hasBuses">
        <div class="uk-text-center uk-flex-center	 uk-flex uk-card uk-card-body uk-card-body-small">
          <v-icon>directions_bus</v-icon>
          <div class='uk-margin-small-left'>
            <h5 class='uk-margin-remove'>No buses</h5>

          </div>
        </div>

      </div>
      <div v-for="connection in station.stationboard" v-if="station.stationboard">
        <connection-card :connection="connection" behavior="list" :location="station" @click.native='showPassList(connection)' />
      </div>
    </div>
    <bus-pass-list :bus='selectedConnection' v-if='toogleBusList'></bus-pass-list>
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
import BusPassList from './BusPassList.vue'

export default {
  name: 'stationCard',
  props: ['station', "show", "autoDestroy", "user", 'activator'],
  data() {
    return {
      toogleMap: false,
      toogleBusList: false,
      selectedConnection: null,
    }
  },
  components: {
    stationCardInfo,
    connectionCard,
    BusPassList
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

    },
    showPassList(connection) {
      this.$store.actions.getPassList(connection)
        .then(() => {
          this.selectedConnection = connection
          // this.toogleBusList = true
          this.toogleBusList = false

        })
    }
  },
  computed: {
    availableConections() {
      return this.$store.LocationStore.getAvailableConnections(this.station, this.user)
    },
    hasBuses() {
      if(!this.station.stationboard) return
      return this.station.stationboard.filter(stationboard => stationboard.stop != undefined).length > 0
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
