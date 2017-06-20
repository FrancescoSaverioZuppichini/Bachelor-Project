<template>
<<<<<<< HEAD
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
=======
<div class="uk-container uk-margin-small-top ">
  <div class="uk-card content bottom--offset">
    <h3 class='uk-margin-remove'>
<span class="" uk-icon="icon: location;ratio: 1.3"></span>   {{$store.state.preference.station.name}}</h3>
    <h5>Change buses </h5>
    <div v-if="$store.state.preference.buses" @click="$router.push({name:'bus'})">
      <div class="uk-flex" uk-grid>
        <div v-for="bus in $store.state.preference.buses">
          <div class="uk-card uk-card-default uk-card-body my-card--padding" @click="$router.push({ name: 'bus'})">
            {{bus.number}}
          </div>
        </div>
      </div>
    </div>

    <h6 class='uk-text-center' @click="$router.push({name:'bus'})" v-if="$store.state.preference.buses.length <= 0"> No bus selected </h6>
    <h5>Change locations</h5>
    <div class="uk-flex uk-flex-column" uk-grid>
      <div v-for="bus in $store.state.preference.buses">
        <div class="uk-card uk-card-default uk-card-body my-card--padding" @click="$router.push({ name: 'direction'})">
          <div class='uk-flex uk-flex-middle'>
            <div clas='uk-margin-small-right'>
              <h4 class='uk-margin-remove'>{{bus.number}}</h4>
            </div>
            <h6 class='uk-margin-remove'>{{bus.to}}</h6>
          </div>
<<<<<<< HEAD
        </div>
=======
>>>>>>> 5c8e8b12a451f68fa5bb246e1cbb1a5e876232f6
>>>>>>> fd28424eb8a5af3ee7caebcbb1a26ac173601f71
      </div>
    </div>
<<<<<<< HEAD
=======
    <h6 class='uk-text-center' @click="$router.push({name:'direction'})" v-if="$store.state.preference.buses.length <= 0">
      No directions selected.
    </h6>
>>>>>>> 5c8e8b12a451f68fa5bb246e1cbb1a5e876232f6
  </div>

  <div class="uk-margin-top navigation__actions">
<<<<<<< HEAD
    <v-btn icon="icon" class="grey--text grey--darken-2" @click.native="$store.actions.goBackFromEditMode()">
      <v-icon>arrow_back</v-icon>
    </v-btn>
    <v-btn icon="icon" class="grey--text grey--darken-2 uk-float-right" @click.native="$store.actions.updatePreference()">
      <v-icon>done</v-icon>
    </v-btn>
=======
<<<<<<< HEAD
    <a  uk-icon="icon: chevron-left; ratio: 1.5" @click="back"> </a>
    <a  class='uk-float-right uk-margin-small-right' @click="done">Done</a>
=======

    <a uk-icon="icon: chevron-left; ratio: 1.5" @click="$store.actions.goBackFromEditMode()"> </a>
    <a class='uk-float-right uk-margin-small-right' @click="$store.actions.updatePreference()">Done</a>
>>>>>>> 5c8e8b12a451f68fa5bb246e1cbb1a5e876232f6
>>>>>>> fd28424eb8a5af3ee7caebcbb1a26ac173601f71
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
