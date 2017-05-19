<template>
<div class="uk-container uk-container-large ">
  <div class="uk-flex-center uk-flex" v-if="this.$store.state.isLoadingNearbyLocations">
    <div class="uk-spinner--large" uk-spinner></div>
  </div>
  <carousel :perPage=4 :navigationEnabled="true" v-else>
    <slide v-for="(station,index) in this.$store.state.locations">
      <station-card :station="station" :showConnection="false" :activator="true" class='slide__item--margin'/>
    </slide>
  </carousel>
</div>
</template>
<script>
import stationCard from '../stationCard/stationCard.vue'
import Carousel from '../Caurosel/Carousel.vue'
import Slide from '../Caurosel/Slide.vue'

export default {
  name: 'aroundMe',
  components: {
    stationCard,
    Carousel,
    Slide
  },
  data() {
    return {
      stations: []
    }
  }
}
</script>

<style>
.uk-spinner--large {
  font-size: 54px;
}

.slide__item--margin {
  margin-left: 4px;
  margin-right: 4px;
}
</style>
