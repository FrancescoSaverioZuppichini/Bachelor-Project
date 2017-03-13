<template>
<div class="card card--horizontal"  style="border: none" v-if="behavior == 'list'">
  <div class="card-block pr-0 flex--grow-0">
    <h1> {{connection.number}}</h1>
  </div>
  <div class="card-block">
    <h6 class="card-title">{{connection.to}} ads</h6>
    <small> {{parseArrivalTime(connection.stop.departure)}}</small>
  </div>
  <div class="card-block pl-0" v-if="getArrivalTimeFromNow().hours() < 1">
    <h2 class="mb-0"> {{getArrivalTimeFromNow().minutes() + "'" }}</h2>
    <small>arrives</small>
  </div>
</div>
<div class="card card--horizontal" v-else>
  <div class="card-block pr-0 flex--grow-0">
    <h1> {{connection.number}}</h1>
  </div>
  <div class="card-block">
    <h6 class="card-title">{{connection.to}}</h6> {{connection.stop.station.name}}
    <br>
    <small> {{parseArrivalTime(connection.stop.departure)}}</small>
  </div>
  <div class="card-block pl-0" v-if="getArrivalTimeFromNow().hours() < 1">
    <h2 class="mb-0"> {{getArrivalTimeFromNow().minutes() + "'" }}</h2>
    <small>arrives</small>
  </div>
</div>
</template>
<script>
import moment from 'moment'

import connectionCardInfo from './connectionCardInfo/connectionCardInfo.vue'

export default {
  props: ["connection", "behavior"],
  name: 'connectionCard',
  components: {
    connectionCardInfo,
  },
  methods: {
    parseArrivalTime(date) {
      return moment(date).format("HH:mm:ss");
    },
    getArrivalTimeFromNow() {
      // const duration = moment.duration(moment().diff(moment(this.connection.stop.departureTimestamp)));
      const duration = moment.duration(moment(this.connection.stop.departure).diff(moment(new Date())));
      return duration
    }
  }
}
</script>
<style>

</style>
