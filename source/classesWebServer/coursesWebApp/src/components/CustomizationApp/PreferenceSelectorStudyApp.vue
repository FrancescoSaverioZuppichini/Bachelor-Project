<template>
<selector-wrapper title="Select Study">
  <div class='uk-container'>
    <div class="uk-flex uk-margin-top" uk-grid>
      <div v-for="study in $store.state.preference.faculty.studies" class="uk-width-auto@s uk-width-1-1@m">
        <resource :toogle="toogle(study.type)" @click.native="goNext({type:study})">
          <h4 class='uk-margin-remove'>{{study.type}}</h4>
        </resource>
      </div>
    </div>
  </div>
  <navigation :id="$route.params.id" :onlyBack="true" v-if="!this.$store.isInEditMode"></navigation>
  <div class="uk-margin-top navigation__actions" v-else>
    <a uk-icon="icon: chevron-left; ratio: 1.5" @click="$router.go(-1)"> </a>
  </div>

</selector-wrapper>
</template>
<script>
import Resource from './Resource.vue'
import Navigation from './Navigation.vue'
import PreferenceSummary from './PreferenceSummary.vue'
import SelectorWrapper from './SelectorWrapper.vue'

export default {
  name: "PreferenceSelectorStudyApp",
  components: {
    Navigation,
    PreferenceSummary,
    SelectorWrapper,
    Resource
  },
  data: function data() {
    return {

    }
  },
  methods: {
    toogle(type) {
      return (type == this.$store.state.preference.type)
    },
    goNext(data) {
      if (data.type.type != this.$store.state.preference.type.type)  this.$store.state.preference.studyType = {}
      this.$store.actions.updatePreference(data)
      if (this.$store.state.isInEditMode) this.$router.go(-1)
      else {
        this.$router.push({
          name: 'year',
          params: this.$route.params
        })
      }
    }
  }
}
</script>
<style>
</style>
