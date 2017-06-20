<template>
<div class='uk-flex-column'>
  <div v-for="pass in bus.passList">
    <h6>{{pass.station.name}}</h6> {{parseTime(pass.stop.departure)}}

  </div>
</div>
</template>
<script>
import moment from 'moment'

export default {
  name: "BusPassList",
  props: ['bus'],
  data: function data() {
    return {

    }
  },
  methods: {
    parseTime(date) {
      return moment(date).format("HH:mm");
    },
  }
}
</script>
<style>
</style>
