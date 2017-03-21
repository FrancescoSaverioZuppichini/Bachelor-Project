<template>
  <div id="">
    <div class="uk-container uk-section uk-container-large">
      <div uk-grid>
        <div class="uk-width-1-1">
          <div class="container">
            <around-me/>
          </div>
        </div>
        <div class="uk-width-1-1">
          <div uk-grid>
            <div class="uk-width-expand">
              <volatile-locations/>
            </div>
            <div class="uk-width-auto uk-flex">
              <users-content/>
            </div>
          </div>
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
  name: "",
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
