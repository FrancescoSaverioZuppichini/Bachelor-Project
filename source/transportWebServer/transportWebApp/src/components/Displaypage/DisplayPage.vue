<template>
<div class="full-h uk-background-muted" id='display-page__container'>
  <div class='uk-container uk-container-large full-h'>
    <div class='uk-flex uk-flex-unwrap uk-flex-column full-h' uk-grid>
      <div class="uk-flex uk-flex-grow uk-margin-top">
        <div class=" uk-width-1-1 uk-flex uk-flex-column">
          <!-- <div class='uk-width-1-1 uk-flex-grow uk-visible@s'>
          </div> -->
          <volatile-locations class="uk-flex-center uk-flex-left@m uk-flex-nowrap" />
        </div>
      </div>
      <div class="uk-width-1-1 uk-visible@m">
<!-- uk-visible@s -->
        <around-me/>
      </div>
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
  components: {
    connectionCard,
    stationCard,
    aroundMe,
    volatileLocations,
    defaultInformation,
    usersContent,
  },
  data: function data() {
    return {

    }
  },
  mounted() {
    const displayId = this.$route.params.id
    this.$store.actions.fetchDisplay(displayId)
  }
}
</script>
<style scoped>

#display-page__container{
  padding-top: 16px;
  padding-bottom: 16px;
}

</style>
