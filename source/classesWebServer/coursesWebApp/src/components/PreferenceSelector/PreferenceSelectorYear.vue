<template>
<div id="PreferenceSelectorYear">
  <div class='uk-flex uk-flex-column uk-margin-small-bottom'>
    <h5 class='uk-margin-remove'>{{$store.state.preference.type}}</h5>
    <div class="uk-margin-top">
      <div v-for="study in $store.state.preference.faculty.studies" v-if="$store.state.preference.type == study.type">
        <div class="uk-flex uk-margin-small-bottom">
          <button :class="{'btn--toogle': toogle(year.yearNumber)}" class="uk-button btn-circle uk-button-default uk-margin-small-right" v-for="year in study.years" @click="$store.actions.updatePreference({year})">{{year.yearNumber}}</button>
        </div>
      </div>
    </div>
<navigation :onlyBack='true'></navigation>
  </div>
</div>
</template>
<script>
import Navigation from './Navigation.vue'
export default {
  name: "PreferenceSelectorYear",
  components: {
    Navigation
  },
  data: function data() {
    return {

    }
  },
  methods: {
    toogle(yearNumber) {
      if(!this.$store.state.preference.year) return false
      return (yearNumber == this.$store.state.preference.year.yearNumber)
    }
  }
}
</script>
<style>

</style>
