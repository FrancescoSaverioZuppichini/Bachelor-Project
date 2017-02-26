<template>
<div class="card">
  <div class="card-block">
    <h6 class="card-title">{{station.name}}</h6>
    <button href="#" type="button" class="btn btn-primary" @click="$store.locationStore.getStationBoard(station)"> leaving soon </button>
    <table class="table mt-2" v-if="station.stationboard">

      <connection-card :connection="connection" v-for="connection in station.stationboard" />
      <!-- <tbody>
        <tr v-for="board in station.stationboard">
          <th scope="row">{{board.name}}</th>
          <th>{{getArrivalTime(board.stop.departure)}}</th>
        </tr>

      </tbody> -->
    </table>
  </div>
</div>
</template>
<script>
import moment from 'moment'
import stationCardInfo from './stationCardInfo/stationCardInfo.vue'
import connectionCard from '../connectionCard/connectionCard.vue'
export default {
  name: 'stationCard',
  props: ['station'],
  components: {
    stationCardInfo,
    connectionCard
  },
  methods: {
    getArrivalTime(date) {
      return moment(date).format("HH:mm:ss");
    }
  }
}
</script>
<style>

</style>
