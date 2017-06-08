<template>
<selector-wrapper title="Select directions">
  <div class='uk-container bottom--offset'>
    <div class="uk-margin-top">
      <transition name='fade'>
        <div class="uk-alert-danger" uk-alert v-if="showError">
          <p>{{error.msg}}</p>
        </div>
      </transition>
<<<<<<< HEAD
=======
      {{$store.state.preference}}
>>>>>>> 5c8e8b12a451f68fa5bb246e1cbb1a5e876232f6
      <resource-transition-wrapper>
        <div v-for="stationboard in stationboards" :key='stationboard'>
          <resource @click.native="toogleStationboard(stationboard)" :toogle="stationboard.toogle">
            <p>
              {{stationboard.bus.number}} {{stationboard.to}}
            </p>
          </resource>
        </div>
      </resource-transition-wrapper>
    </div>

  </div>

  <div class="uk-margin-top navigation__actions">
    <v-btn icon="icon" class="grey--text grey--darken-2" @click.native="$router.go(-1)">
      <v-icon>arrow_back</v-icon>
    </v-btn>
    <v-btn icon="icon" class="grey--text grey--darken-2 uk-float-right" @click.native="next">
      <v-icon>done</v-icon>
    </v-btn>
  </div>
</selector-wrapper>
</template>
<script>
import api from '../../../api.js'
import SelectorWrapper from '../SelectorWrapper.vue'
import Resource from '../Resource/Resource.vue'
import ResourceTransitionWrapper from '../Resource/ResourceTransitionWrapper.vue'

export default {
  name: "DirectionSelectionPage",
  components: {
    Resource,
    ResourceTransitionWrapper,
    SelectorWrapper
  },
  watch: {
    '$route': function(newRoute) {
      this.show = false
      if (newRoute.name == 'direction') {
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
<<<<<<< HEAD
      return this.getDirectionsSelected() == 0 && this.show
=======

      return this.getDirectionsSelected() <= 0 && this.show

>>>>>>> 5c8e8b12a451f68fa5bb246e1cbb1a5e876232f6
    }
  },
  created() {
    this.getDirections()
  },
  methods: {
    getDirectionsSelected() {
<<<<<<< HEAD
      return (this.$store.state.currentPreference.buses.filter(bus => bus.to).length)
=======
      return this.$store.state.preference.buses.filter(bus => bus.to).length
>>>>>>> 5c8e8b12a451f68fa5bb246e1cbb1a5e876232f6
    },
    getDirections() {
      const stationId = this.$store.state.currentPreference.station.id
      this.stationboards = []
<<<<<<< HEAD
      this.$store.state.currentPreference.buses.forEach((bus) => {
=======
      const removeDuplicateFromArray = (array, key) => {
        var cache = {}
        for (let item of array) {
          cache[item[key]] = item
        }
        return Object.values(cache)
      }
      const uniqueBuses = removeDuplicateFromArray(this.$store.state.preference.buses,'id')

      uniqueBuses.forEach((bus) => {
>>>>>>> 5c8e8b12a451f68fa5bb246e1cbb1a5e876232f6
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
        this.$router.go(-1)
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
