<template>
<div>
  <div class="">
    <h3>Select your study</h3>
    <!-- <transition name='fade'>
      <div class="uk-alert-danger" uk-alert v-if="showError">
        <p>{{error.msg}}</p>
      </div>
    </transition> -->
  </div>
  <div class='uk-flex uk-flex-column uk-margin-top uk-margin-small-bottom'>
    <ul class='uk-list'>
      <li :class="{'toogle':toogle(study.type)}" v-for="study in $store.state.preference.faculty.studies" @click="$store.actions.updatePreference({type:study})">
        <p class='uk-text-large'>{{study.type}}</p>
      </li>
    </ul>
  </div>
  <navigation :id="$route.params.id" :onlyBack="true" v-if="!this.$store.isInEditMode"></navigation>
  <div class="uk-margin-top navigation__actions" v-else>
    <a uk-icon="icon: chevron-left; ratio: 1.5" @click="$router.go(-1)"> </a>
  </div>
</div>
</template>
<script>
import Navigation from './Navigation.vue'
import PreferenceSummary from './PreferenceSummary.vue'

export default {
  name: "PreferenceSelectorStudyApp",
  components: {
    Navigation,
    PreferenceSummary
  },
  data: function data() {
    return {

    }
  },
  methods: {
    toogle(type) {
      return (type == this.$store.state.preference.type)
    }
  }
}
</script>
<style>
</style>
