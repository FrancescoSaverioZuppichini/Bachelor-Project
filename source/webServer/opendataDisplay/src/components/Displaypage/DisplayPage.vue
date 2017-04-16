<template>
<div class="full-h uk-container uk-flex uk-flex-wrap uk-flex-column uk-container-large">
  <div class="uk-flex uk-flex-item-1 uk-flex-grow uk-margin-top">
    <div class="uk-width-1-1@s uk-width-2-3@m">
      <volatile-locations class="uk-flex-center@s uk-flex-left@m" />
    </div>
    <div class="uk-width-1-3@l uk-width-1-2@m uk-width-1-2@s uk-visible@s">
      <div class="uk-flex uk-flex-column full-h" uk-grid>
        <div class="uk-flex-1">
          <users-content/>
        </div>
      </div>
    </div>
  </div>
  <div class="uk-width-1-1 uk-visible@s">
    <around-me/>
  </div>
</div>
</template>
<script>
import connectionCard from '../connectionCard/connectionCard.vue'
import stationCard from '../stationCard/stationCard.vue'
import aroundMe from '../aroundMe/aroundMe.vue'
import defaultInformation from '../defaultInformation/defaultInformation.vue'

import volatileLocations from '../volatileLocations/volatileLocations.vue'
import usersContent from '../usersContent/usersContent.vue'

export default {
  name: "DisplayPage",
  mounted() {
    this.$store.actions.fetchNearbyLocations()
  },
  data: function data() {
    return {

    }
  },
  components: {
    connectionCard,
    stationCard,
    aroundMe,
    volatileLocations,
    defaultInformation,
    usersContent,
  }
}
</script>
<style>

</style>
