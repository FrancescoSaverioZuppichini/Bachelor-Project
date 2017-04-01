<template>
<div class="full-h uk-container uk-container-large uk-section uk-section-xsmall">
  <div uk-grid>
    <div class="uk-width-1-2@s uk-width-2-3@l uk-width-1-2@m">
      <volatile-locations />
    </div>
    <div class="uk-width-1-3@l uk-width-1-2@m uk-width-1-2@s uk-visible@s">
      <div class="uk-flex uk-flex-column full-h" uk-grid>
        <div class="uk-flex-1">
          <users-content/>
        </div>
      </div>
    </div>
    <div class="uk-width-1-1 uk-visible@s">
      <around-me/>
    </div>
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
  name: "",
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
