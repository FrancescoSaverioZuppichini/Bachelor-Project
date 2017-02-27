<template>
  <div class="card">
    <div class="card-block">
      <h6 class="card-title">{{station.name}}</h6>
      <div v-if="showConnection">
      <connection-card :connection="connection" v-for="connection in station.stationboard"/>
      </div>
      <button href="#" type="button" class="btn btn-primary" @click="$store.locationStore.getStationBoard(station)" v-else> leaving soon
      </button>
    </div>
  </div>
</template>
<script>
  import moment from 'moment'
  import stationCardInfo from './stationCardInfo/stationCardInfo.vue'
  import connectionCard from '../connectionCard/connectionCard.vue'
  export default {
    name: 'stationCard',
    props: ['station', "showConnection","autoDestroy"],
    components: {
      stationCardInfo,
      connectionCard
    },
    created(){
      console.log('hey')
      if(this.autoDestroy) {
        setTimeout(() => {
          this.$store.locationStore.expireLocation(this.station)
        }, 2000)
      }
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
