<template>
<div id="PreferenceSelectorYear">

  <div class="">
    <h5>Select your study year</h5>
    <!-- <transition name='fade'>
      <div class="uk-alert-danger" uk-alert v-if="showError">
        <p>{{error.msg}}</p>
      </div>
    </transition> -->
  </div>
  <div class='uk-flex uk-flex-column uk-margin-small-bottom'>
    <div class="uk-margin-top">
      <div v-for="study in $store.state.preference.faculty.studies" v-if="$store.state.preference.type.type == study.type">
        <div class="uk-flex uk-margin-small-bottom">
          <button :class="{'btn--toogle': toogle(year.yearNumber)}" class="uk-button btn-circle btn-circle--large uk-button-default uk-margin-small-right" v-for="year in study.years" @click="$store.actions.updatePreference({year})">{{year.yearNumber}}</button>
        </div>
      </div>
    </div>
    <navigation :onlyBack="true"></navigation>

  </div>
</div>
</template>
<script>
import Navigation from './Navigation.vue'
import PreferenceSummary from './PreferenceSummary.vue'

export default {
  name: "PreferenceSelectorYear",
  components: {
    Navigation,
    PreferenceSummary
  },
  data: function data() {
    return {

    }
  },
  methods: {
    toogle(yearNumber) {
      if (!this.$store.state.preference.year) return false
      return (yearNumber == this.$store.state.preference.year.yearNumber)
    }
  }
}
</script>
<style>
.btn-circle--large {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 24px;
  color: #b2b2b2;
  border: 2px solid #b2b2b2;
}
</style>
