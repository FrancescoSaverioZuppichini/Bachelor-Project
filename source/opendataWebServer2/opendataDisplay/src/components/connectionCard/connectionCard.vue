<template>
<div class="uk-card uk-card-default" v-if="behavior != 'list'">
  <div class="uk-card-body">
    <div class='uk-flex'>
      <div class="uk-margin-right">
        <h1> {{connection.number}}</h1>
      </div>
      <div class='uk-flex-stretch'>
        <h5 class="uk-margin-remove-bottom">
          <span class="uk-margin-small-right" uk-icon="icon:arrow-right"></span>
          {{connection.to}}
</h5>
        <small> {{parseArrivalTime(this.connection.stop.departure_timestamp)}}</small>
      </div>
      <div class="uk-margin-right">
        <h2 class="uk-margin-remove-bottom uk-text-center"> {{getArrivalTimeFromNow().minutes() + "'" }}</h2>
        <small>arrives</small>
      </div>
    </div>
  </div>
</div>
<div class='uk-flex-expand uk-flex uk-margin-left uk-margin-right uk-margin-bottom' v-else>
  <div class="connection--user-nearby" :class="{'connection--user-nearby--active':connection.triggered && !location.isUser}">
  </div>
  <div class="uk-margin-right">
    <h1> {{connection.number}}</h1>
  </div>
  <div class='uk-flex-stretch  uk-width-1-1 uk-margin-right'>
    <h5 class="uk-margin-remove-bottom">
        <span class="uk-margin-small-right" uk-icon="icon:arrow-right"></span>
        {{connection.to}}
</h5>
    <small> {{parseArrivalTime(connection.stop.departure)}}</small>
  </div>
  <div class=" uk-float-right">
    <h3 class="uk-margin-remove-bottom uk-text-center"> {{getArrivalTimeFromNow().minutes() + "'" }}</h3>
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
    connectionCardInfo,
  },
  methods: {
    parseArrivalTime(date) {
      return moment(this.connection.stop.departure).format("HH:mm:ss");
    },
    getArrivalTimeFromNow() {
      // console.log(this.connection.stop.departure_timestamp)
      // const duration = moment.duration(moment().diff(moment(this.connection.stop.departureTimestamp)));
      const duration = moment.duration(moment(this.connection.stop.departure).diff(moment(new Date())));
      return duration
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

.connection--user-nearby--active{
    border-left: 10px solid rgba(255,0,0,0.6);
}


.user-nearby--animation {
  animation: user-nearby 1s linear;

}

@@keyframes user-nearby {
  100% {
    box-shadow: inset 0 0 0 25px #53a7ea;
  }
}
</style>
