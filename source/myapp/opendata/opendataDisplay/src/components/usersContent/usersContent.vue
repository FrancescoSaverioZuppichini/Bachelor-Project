<template>
<div class="flex-list flex-list--column">
  <station-card :station="location" :showConnection="true" :user="true" autoDestroy="true" v-for="location in $store.state.usersLocations"/>
  <!-- <code v-for="location in $store.state.usersLocations">{{location}}</code> -->
</template>
<script>
import StationCard from '../stationCard/stationCard.vue'
  export default {
    name: 'usersContent',
    components: {StationCard},
  }
</script>


<style></style>
