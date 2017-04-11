<template>
<div class="uk-container uk-section">
  <!-- <h6>Change station  <router-link  class='uk-float-right' :to="{ path: 'station'}"> <span  uk-icon="icon:  arrow-right; ratio: 1.5"></span></router-link> </h6> -->
  <div class="uk-card uk-card-body">
    <h5> <span class="" uk-icon="icon: location;ratio: 1.3"></span>
  {{$store.state.currentPreference.station.name}}</h5>
  <h6>Change buses  <router-link  class='uk-float-right' :to="{ path: 'bus'}"><span  uk-icon="icon:  arrow-right; ratio: 1.5"></span></router-link> </h6>
  <div class="uk-flex" uk-grid>
    <div v-for="bus in $store.state.currentPreference.buses">
      <div class="uk-card uk-card-default uk-card-body" @click="$router.push({ path: 'bus'})">
        {{bus.number}}
      </div>
    </div>
  </div>
  <h6>Change locations <router-link  class='uk-float-right' :to="{ path: 'direction'}"><span  uk-icon="icon:  arrow-right; ratio: 1.5"></span></router-link></h6>
  <div class="uk-flex uk-flex-column" uk-grid>
    <div v-for="bus in $store.state.currentPreference.buses" v-if="bus.to">
      <div class="uk-card uk-card-default uk-card-body" @click="$router.push({ path: 'direction'})">
        {{bus.to}}
      </div>
    </div>
  </div>
</div>
<div class="uk-margin-top navigation__actions">
  <button class='uk-button uk-button-default uk-float-left uk-width-1-1' @click="back">Back</button>
  <button class='uk-button uk-button-primary uk-float-right  uk-width-1-1' @click="done">Done</button>
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
      this.$store.actions.addPreference()
    }
  }
}
</script>
<style>

</style>
