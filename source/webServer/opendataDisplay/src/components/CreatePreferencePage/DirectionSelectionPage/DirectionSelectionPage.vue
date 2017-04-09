<template>
<div class='uk-container uk-section uk-flex uk-flex-column'>
  <div class="">
    <h3>Select correct direction for the buses</h3>
    <div v-if="showError" class='uk-animation-fade'>
      <div class="uk-alert-danger" uk-alert>
        <p>{{error.msg}}</p>
      </div>
    </div>
  </div>
  <div>
  </div>
  <div class="uk-flex uk-flex-column uk-flex-center">
    <div class="uk-margin-top uk-card uk-card-default uk-card-body" :class="{'uk-box-shadow-large': stationboard.toogle}" @click="toogleStationboard(stationboard)" v-for="stationboard in stationboards">
      <p>
        {{stationboard.bus.number}} {{stationboard.to}}
      </p>
    </div>
  </div>
  <div class="uk-margin-top navigation__actions">
    <button class='uk-button uk-button-default uk-float-left uk-width-1-1' @click="$router.push({path:'/preference/bus'})">Back</button>
    <button class='uk-button uk-button-primary uk-float-right  uk-width-1-1' @click="next">Done</button>
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
    '$route': function(newRoute) {
      this.directionSelected = 0
      this.getDirections()
    }
  },
  data() {
    return {
      stationboards: [],
      toogle: false,
      show: false,
      directionSelected: 0,
      error: {
        hasError: false,
        msg: "Select at least one direction"
      }
    }
  },
  computed: {
    showError() {
      return this.directionSelected == 0 && this.show
    }
  },
  created() {
    this.getDirections()
  },
  methods: {
    getDirections() {
      const stationId = this.$store.state.currentPreference.station.id
      this.stationboards = []
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
    toogleStationboard(stationboard) {
      if (stationboard.toogle) {
        this.directionSelected--;

        this.$store.actions.removeDirectionToPreference(stationboard)
      } else {
        this.show = false

        this.directionSelected++

          this.$store.actions.addDirectionToPreference(stationboard)
      }
      stationboard.toogle = !stationboard.toogle
    },
    next() {
      this.show = true

      console.log(this.directionSelected);
      const isAtLeastOnedirectionSelected = this.directionSelected > 0
      this.error.hasError = !isAtLeastOnedirectionSelected
      if (isAtLeastOnedirectionSelected) {
        this.directionSelected = 0
        this.$store.actions.addPreference()
      }
    }
  }
}
</script>
<style>

</style>
