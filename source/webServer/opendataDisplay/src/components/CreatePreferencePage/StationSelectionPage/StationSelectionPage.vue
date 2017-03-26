<template>
<div class='uk-container uk-section uk-flex uk-flex-column' >
  <div class="">
    <h1>Select a Station</h1>
  </div>
<div>
  <form class="uk-search uk-search-default uk-width-1-1@">
      <span uk-search-icon></span>
      <input class="uk-search-input uk-width-1-1@" type="Search" placeholder="">
  </form>
</div>
  <div class="uk-flex-center uk-margin-top">
    <h6 class='uk-text-meta uk-text-large'>Next to you</h6>
    <div class="uk-child-width-1-1@s uk-child-width-1-2@m uk-child-width-1-4@l uk-grid-match" uk-grid>
      <div class="" v-for="station in this.$store.state.locations">
        <station-card :station="station" :showConnection="false" />
      </div>
    </div>
  </div>
  <div class="uk-margin-top">
    <button class='uk-button uk-button-primary uk-float-right uk-width-1-1@s uk-width-auto@m'>Next</button>
  </div>
</div>
</template>
<script>

import StationCard from '../../stationCard/stationCard.vue'

export default {
  name: "",
  data() {
    return {

    }
  },
  components: {
    StationCard
  }
}
</script>
<style>

</style>
