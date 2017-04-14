<template>
<div class='uk-container uk-section uk-flex uk-flex-column'>
  <div class="">
    <h5>Select correct direction for the buses</h5>
    <transition name='fade'>
      <div class="uk-alert-danger" uk-alert v-if="showError">
        <p>{{error.msg}}</p>
      </div>
    </transition>
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
    <button class='uk-button uk-button-default uk-float-left uk-width-1-1' @click="$router.go(-1)">Back</button>
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
      if (newRoute.path == '/preference/direction') {
        // this.directionSelected = 0
        this.getDirections()
      }
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
      return this.getDirectionsSelected() == 0 && this.show
    }
  },
  created() {
    this.getDirections()
  },
  methods: {
    getDirectionsSelected() {
      return (this.$store.state.currentPreference.buses.filter(bus => bus.to).length)
    },
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
            data.forEach((stationboard) => {
              this.$set(stationboard, 'toogle', false)
              this.$store.state.currentPreference.buses.forEach((bus) => {
                if (bus.to == stationboard.to) {
                  stationboard.toogle = true
                    ++this.directionSelected
                }
              })
            })
            this.stationboards = this.stationboards.concat(data)
          })
      })
    },
    toogleStationboard(stationboard) {
      if (stationboard.toogle) {
        this.$store.actions.removeDirectionToPreference(stationboard)
      } else {
        this.show = false
        this.$store.actions.addDirectionToPreference(stationboard)
      }
      stationboard.toogle = !stationboard.toogle
    },
    next() {
      this.show = true
      const isAtLeastOnedirectionSelected = this.getDirectionsSelected() > 0
      this.error.hasError = !isAtLeastOnedirectionSelected
      if (isAtLeastOnedirectionSelected) {
        this.$store.actions.addPreference()
      }
    }
  }
}
</script>
<style>

</style>
