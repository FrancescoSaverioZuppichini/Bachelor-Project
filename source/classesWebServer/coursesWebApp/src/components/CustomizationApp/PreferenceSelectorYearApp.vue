<template>
<selector-wrapper title="Select your study year">
  <div class='uk-container bottom--offset '>
    <div class='uk-flex uk-flex-column uk-margin-small-bottom'>
      <div class="uk-margin-top">
        <div v-for="study in $store.state.preference.faculty.studies" v-if="$store.state.preference.type.type == study.type">
          <div class="uk-flex uk-margin-small-bottom">
            <div :class="{'uk-box-shadow-large': toogle(year.yearNumber)}" class="uk-button btn-circle btn-circle--large uk-button-default uk-margin-small-right uk-box-shadow-medium" v-for="year in study.years" @click="goNext({year})">
              {{year.yearNumber}}
            </div>
          </div>
        </div>
      </div>
      <navigation :onlyBack="true"></navigation>

    </div>
  </div>

</selector-wrapper>
</template>
<script>
import Navigation from './Navigation.vue'
import PreferenceSummary from './PreferenceSummary.vue'
import SelectorWrapper from './SelectorWrapper.vue'

export default {
  name: "PreferenceSelectorYear",
  components: {
    Navigation,
    PreferenceSummary,
    SelectorWrapper
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
    goNext(stuff) {
      this.$store.actions.updatePreference(stuff)
      if (this.$store.state.isInEditMode) this.$router.go(-1)
      else {
      this.$router.push({
        name: 'studyType',
        params: this.$route.params
      })
    }
}
  }
}
</script>
<style>
.btn-circle--large {
  width: 75px;
  height: 75px;
  border-radius: 50%;
  font-size: 40px;
  color: rgb(66, 66, 66);
  border: none;
  background: white;
}
</style>
