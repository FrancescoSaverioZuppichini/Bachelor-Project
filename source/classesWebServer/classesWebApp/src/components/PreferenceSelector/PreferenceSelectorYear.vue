<template>
<div id="PreferenceSelectorYear">
  <div class='uk-flex uk-flex-column uk-margin-small-bottom'>
    <h5 class='uk-margin-remove'>{{$store.state.preference.type}}</h5>
    <div class="uk-margin-top">
      <div v-for="study in $store.state.preference.faculty.studies" v-if="$store.state.preference.type == study.type">
        <div class="uk-flex uk-margin-small-bottom">
          <v-btn outline floating small class="grey--text text--darken-2 uk-margin-small-right" :class="{'btn--toogle': toogle(year.yearNumber)}" v-for="year in study.years" @click.native="next(year)">{{year.yearNumber}}</v-btn>

          <!-- <button :class="{'btn--toogle': toogle(year.yearNumber)}" class="uk-button btn-circle uk-button-default uk-margin-small-right" v-for="year in study.years" @click="$store.actions.updatePreference({year})">{{year.yearNumber}}</button> -->
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
      if (!this.$store.state.preference.year) return false
      return (yearNumber == this.$store.state.preference.year.yearNumber)
    },
    next(year) {
      this.$store.actions.updatePreference({
        year
      })
      this.$router.push({
        name: 'studyTypeDisplay',
        params: this.$route.params
      })
    }
  }
}
</script>
<style>

</style>
