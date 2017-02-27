<template>
  <div id='App' class="container">
    <div class="row">
      <div class="col-xs-12">
        <around-me/>
      </div>
      <div class="col-xs-12">
        <leaving-soon/>
      </div>
    </div>

  </div>
</template>

<script>
  import axios from 'axios'
  import connectionCard from './components/connectionCard/connectionCard.vue'
  import stationCard from './components/stationCard/stationCard.vue'
  import aroundMe from './components/aroundMe/aroundMe.vue'
  import leavingSoon from './components/leavingSoon/leavingSoon.vue'
  import usersContent from './components/usersContent/usersContent.vue'


  export default {
    name: 'App',
    mounted() {
      this.$store.getDefaultData()
    },
    components: {
      connectionCard,
      stationCard,
      aroundMe,
      leavingSoon,
      usersContent,
    }
  }
</script>


<style>
  .card--horizontal {
    flex-direction: row !important;
  }

  .flex--grow-0 {
    flex-grow: 0 !important
  }
</style>
