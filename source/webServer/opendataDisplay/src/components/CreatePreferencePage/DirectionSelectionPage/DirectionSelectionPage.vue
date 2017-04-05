<template>
<div class='uk-container uk-section uk-flex uk-flex-column'>
  <div class="">
    <h3>Select correct direction for the buses</h3>
  </div>
  <div>
  </div>
  {{$store.state.currentPreference}}
  <div class="uk-flex uk-flex-column uk-flex-center">
    <div class="uk-margin-top uk-card uk-card-default uk-card-body" :class="{'uk-box-shadow-large': stationboard.toogle}" @click="toogleStationboard(stationboard)" v-for="stationboard in stationboards">
      <p>
        {{stationboard.bus.number}} {{stationboard.to}}
      </p>
    </div>
    <!-- <div class="uk-margin-top navigation__actions">
    <button class='uk-button uk-button-default uk-float-left uk-width-auto@m' @click="$router.push({path:'/preference/station'})">Back</button>
    <button class='uk-button uk-button-primary uk-float-right  uk-width-auto@m' @click="$store.actions.addPreference()">Done!</button>
  </div> -->
  </div>
</div>
</template>
<script>
import api from '../../../api.js'

export default {
  name: "DirectionSelectionPage",
  components: {
    // ConnectionCard
  },
  watch: {
    '$route': (newRoute) => {
      console.log(newRoute)
    }
  },
  created() {
    const stationId = this.$store.state.currentPreference.station.id
    this.$store.state.currentPreference.buses.forEach((bus) => {
      api.stationboards.featchStationboards({
          stationId: stationId,
          busId: bus.id
        })
        .then(({
          data
        }) => {
          data.forEach(stationboard => this.$set(stationboard, 'toogle', false))
          this.stationboards = this.stationboards.concat(data)
        })
    })

  },
  data() {
    return {
      stationboards: [],
      toogle: false
    }
  },
  methods: {
    toogleStationboard(stationboard) {
      if (stationboard.toogle)
        this.$store.actions.removeDirectionToPreference(stationboard)
      else {
        this.$store.actions.addDirectionToPreference(stationboard)
      }
      stationboard.toogle = !stationboard.toogle
    }
  }
}
</script>
<style>

</style>
