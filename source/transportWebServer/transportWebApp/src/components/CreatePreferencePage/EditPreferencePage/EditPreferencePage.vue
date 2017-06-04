<template>
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
              <h4 class='uk-margin-remove uk-margin-small-right'>{{bus.number}}</h4>
              <h6 class='uk-margin-remove'>{{bus.to}}</h6>
            </div>
          </div>
      </div>

    </div>
    <h6 class='uk-text-center' @click="$router.push({name:'direction'})" v-if="$store.state.preference.buses.length <= 0">
      No directions selected.
    </h6>
  </div>

  <div class="uk-margin-top navigation__actions">

    <a uk-icon="icon: chevron-left; ratio: 1.5" @click="$store.actions.goBackFromEditMode()"> </a>
    <a class='uk-float-right uk-margin-small-right' @click="$store.actions.updatePreference()">Done</a>
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
