<template>
<div class='uk-flex-expand uk-flex uk-flex-middle'>
  <div class='uk-flex uk-flex-column connection--user-nearby--active' v-if="connection.triggered && !location.isUser && connection.colors.length > 0">
    <div class="flex-1 " :style="{'background' : color}" v-for="color in connection.colors">
    </div>
  </div>
  <div class="uk-margin-right">
    <div class="connection-number__container" >
      <h3 class='uk-margin-remove'> {{connection.number}}</h3>
    </div>
  </div>
  <div class='uk-flex-grow'></div>
  <div class='uk-width-1-1 uk-margin-right uk-flex'>
    <div class='uk-margin-small-right'>
      <v-icon>arrow_forward</v-icon>
    </div>
    <div>
      <h6 class='uk-margin-remove'>{{connection.to}}</h6>
      <p class='uk-margin-remove'> {{parseArrivalTime(connection.stop.departure)}}</p>
    </div>
  </div>
  <div class='uk-flex-grow'></div>
  <div class=" uk-float-right">
    <h5 class="uk-margin-remove-bottom uk-text-center" v-if="arrivesNow">Now</h5>
    <h4 class="uk-margin-remove-bottom uk-text-center" v-else> {{getArrivalTimeFromNow().minutes() + "'" }}</h4>
    <small>arrives</small>
  </div>
</div>
</template>
<script>
import moment from 'moment'

import connectionCardInfo from './connectionCardInfo/connectionCardInfo.vue'

export default {
  name: 'connectionCard',
  props: ["connection", "behavior", "location"],
  components: {
    connectionCardInfo
  },
  methods: {
    parseArrivalTime(date) {
      return moment(this.connection.stop.departure).format("HH:mm");
    },
    getArrivalTimeFromNow() {
      // console.log(this.connection.stop.departure_timestamp)
      // const duration = moment.duration(moment().diff(moment(this.connection.stop.departureTimestamp)));
      const duration = moment.duration(moment(this.connection.stop.departure).diff(moment(new Date())));
      return duration
    }
  },
  computed: {
    arrivesNow() {
      return this.getArrivalTimeFromNow().minutes() == 0
    }
  }
}
</script>
<style>
.connection--user-nearby {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
}

.connection--user-nearby--active {
  width: 24px;
  margin-right: 8px;
  height: 70px;
}


.user-nearby--animation {
  animation: user-nearby 1s linear;
}

.connection-number__container {
  border-radius: 7%;
  border: 2px grey solid;
  padding: 8px;
}

@@keyframes user-nearby {
  100% {
    box-shadow: inset 0 0 0 25px #53a7ea;
  }
}
</style>
