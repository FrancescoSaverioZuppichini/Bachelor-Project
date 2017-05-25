<template>
<div class="uk-flex uk-flex-column full-h">
  <div class="uk-flex uk-flex-center uk-flex-column uk-flex-middle full-h uk-animation-fade" v-if='$store.state.usersLocations.length == 0'>
    <!-- <div class="sk-spinner sk-spinner-pulse sk-spinner--large"></div> -->
    <!-- <p class="uk-margin-remove">
      Nobody around
    </p> -->
  </div>
  <station-card :station="location" :showConnection="true" :user="true" autoDestroy="true" v-for="location in $store.state.usersLocations" />
  <!-- <code v-for="location in $store.state.usersLocations">{{location}}</code> -->
</div>

</template>
<script>
import StationCard from '../stationCard/stationCard.vue'

export default {
  name: 'usersContent',
  components: {
    StationCard
  },
}
</script>



<style></style>
