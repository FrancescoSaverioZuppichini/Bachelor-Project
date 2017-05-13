<template>
<div class="uk-container uk-section">
  <!-- <h6>Change station  <router-link  class='uk-float-right' :to="{ path: 'station'}"> <span  uk-icon="icon:  arrow-right; ratio: 1.5"></span></router-link> </h6> -->
  <div class="uk-card">
    <h5> <span class="" uk-icon="icon: location;ratio: 1.3"></span>
  {{$store.state.currentPreference.station.name}}</h5>
    <h6>Change buses  <router-link  class='uk-float-right' :to="{ name: 'bus'}"><span  uk-icon="icon:  search; ratio: 1.2"></span></router-link> </h6>
    <div class="uk-flex" uk-grid>
      <div v-if="$store.state.currentPreference.buses.length <= 0">
        <h6 class='uk-text-meta'>
        No buses.
      </h6>
      </div>
      <div v-for="bus in $store.state.currentPreference.buses" v-else>
        <div class="uk-card uk-card-default uk-card-body" @click="$router.push({ name: 'bus'})">
          {{bus.number}}
        </div>
      </div>
    </div>
    <h6>Change locations <router-link  class='uk-float-right' :to="{ path: 'direction'}"><span  uk-icon="icon:  search; ratio: 1.2"></span></router-link></h6>
    <div class="uk-flex uk-flex-column" uk-grid>
      <div v-if="$store.state.currentPreference.buses.length <= 0">
        <h6 class='uk-text-meta'>
        No directions selected.
      </h6>
</div>
      <div v-for="bus in $store.state.currentPreference.buses" v-if="bus.to" v-else>
        <div class="uk-card uk-card-default uk-card-body" @click="$router.push({ name: 'direction'})">
          {{bus.to}}
        </div>
      </div>
    </div>
  </div>
  <div class="uk-margin-top navigation__actions">
    <a  uk-icon="icon: chevron-left; ratio: 1.5" @click="back"> </a>
    <a  class='uk-float-right uk-margin-small-right' @click="done">Done</a>
  </div>
</div>
</template>
<script>
export default {
  name: "",
  data: function data() {
    return {

      currPref: this.$store.state.currentPreference

    }
  },
  methods: {
    back() {
      this.$store.actions.toogleEditMode()
      this.$router.go(-1)
    },
    done() {
      this.$store.actions.updatePreference()
    }
  }
}
</script>
<style>

</style>
