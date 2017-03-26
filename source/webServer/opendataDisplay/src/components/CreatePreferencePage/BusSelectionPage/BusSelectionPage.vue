<template>
<div class='uk-container uk-section uk-flex uk-flex-column'  v-if="station()">
  <div class="">
    <h1>Select a Bus for {{station().name}}</h1>
  </div>
  <div>
  </div>
  <div class="uk-flex-center uk-margin-top">
    <div class="uk-flex uk-flex-column" uk-grid>
      <connection-card :connection="connection" behavior="list" :location="station()" v-for="connection in station().stationboard" v-if="station().stationboard" />
    </div>
  </div>
  <div class="uk-margin-top">
    <button class='uk-button uk-button-primary uk-float-right uk-width-1-1@s uk-width-auto@m'>Next</button>
  </div>
</div>
</template>
<script>
import StationCard from '../../stationCard/stationCard.vue'
import ConnectionCard from '../../connectionCard/connectionCard.vue'

export default {
  name: "",
  components: {
    StationCard,
    ConnectionCard
  },
  methods: {
    station() {
      return this.$store.state.locationsCache[this.$store.state.currentPreference.stationId]
    }
  }
}
</script>
<style>

</style>
