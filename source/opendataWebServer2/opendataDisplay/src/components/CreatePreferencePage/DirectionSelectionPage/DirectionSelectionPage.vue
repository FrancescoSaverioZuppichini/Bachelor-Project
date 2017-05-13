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
    <a uk-icon="icon: chevron-left; ratio: 1.5" @click="$router.go(-1)"> </a>
    <a class='uk-float-right uk-margin-small-right' @click="next">Done</a>
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
      this.show = false
      if (newRoute.path == '/app/home/direction') {
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
      console.log('getting directions');
      console.log(this.$store.state.currentPreference.buses);

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
      if (this.$store.state.isInEditMode)
        // go back to edit
        this.$router.push({
          name: 'edit'
        })
      else {
        const isAtLeastOnedirectionSelected = this.getDirectionsSelected() > 0
        this.error.hasError = !isAtLeastOnedirectionSelected
        if (isAtLeastOnedirectionSelected) {
          this.$store.actions.addPreference()
        }
      }
    }
  }
}
</script>
<style>

</style>
