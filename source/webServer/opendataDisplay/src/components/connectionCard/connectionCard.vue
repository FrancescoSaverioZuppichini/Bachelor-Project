<template>
<div class="uk-card uk-card-default" v-if="behavior != 'list'">
  <div class="uk-card-body">
    <div class='uk-flex'>
      <div class="uk-margin-right">
        <h1> {{connection.number}}</h1>
      </div>
      <div class='uk-flex-stretch'>
        <h5 class="uk-margin-remove-bottom">{{connection.to}}</h5>
        <small> {{parseArrivalTime(connection.stop.departure)}}</small>
      </div>
      <div class="uk-margin-right">
        <h2 class="uk-margin-remove-bottom uk-text-center"> {{getArrivalTimeFromNow().minutes() + "'" }}</h2>
        <small>arrives</small>
      </div>
    </div>
  </div>
</div>
<div uk-grid v-else>
  <div class='uk-flex uk-width-1-1'>
    <div class="uk-margin-right">
      <h1> {{connection.number}}</h1>
    </div>
    <div class='uk-flex-stretch  uk-width-1-1 uk-margin-right'>
      <h5 class="uk-margin-remove-bottom">{{connection.to}}</h5>
      <small> {{parseArrivalTime(connection.stop.departure)}}</small>
    </div>
    <div class=" uk-float-right">
      <h2 class="uk-margin-remove-bottom uk-text-center"> {{getArrivalTimeFromNow().minutes() + "'" }}</h2>
      <small>arrives</small>
    </div>
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
