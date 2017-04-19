<template>
<div class="full-h uk-container uk-container-large">
  <div class='full-h uk-flex uk-flex-wrap' uk-grid>
    <div class="uk-flex uk-flex-item-1 uk-flex-grow uk-margin-top">
      <!-- <div class="uk-width-1-1@s uk-width-2-3@m"> -->
      <div class=" uk-width-1-1 uk-flex uk-flex-column">
        <div class='uk-width-1-1 uk-flex-grow uk-visible@s'>
        </div>
        <volatile-locations class="uk-width-1-1 uk-flex-center uk-flex-wrap-bottom uk-flex-left@m" />
      </div>
      <!-- <div class="uk-width-1-3@l uk-width-1-2@m uk-width-1-2@s uk-visible@s">
      <div class="uk-flex uk-flex-column full-h" uk-grid>
        <div class="uk-flex-1">
          <users-content/>
        </div>
      </div>
    </div> -->
    </div>
    <div class="uk-width-1-1 uk-visible@s uk-margin-top">
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
  name: "DisplayPage",
  mounted() {
    const displayId = this.$route.params.id
    this.$store.actions.fetchDisplay(displayId)
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
