<template>
<selector-wrapper title="Select your study program">
  <div class='uk-container bottom--offset '>
    <div class="uk-margin-top">
      <resource-transition-wrapper>
        <div v-for="study in $store.state.preference.faculty.studies" v-if="$store.state.preference.type.type == study.type" :key='study'>
          <div class="uk-flex" uk-grid>
            <div v-for="studyType in study.studyTypes" class="uk-width-1-1">
              <resource :toogle="toogle(studyType)" @click.native="next({studyType})" v-if="!$store.state.isInEditMode">
                {{parseName(studyType.name_en)}}
              </resource>
              <resource :toogle="toogle(studyType)" @click.native="next({studyType})" v-if="$store.state.isInEditMode">
                {{parseName(studyType.name_en)}}
              </resource>
            </div>
          </div>
        </div>
      </resource-transition-wrapper>
    </div>
  </div>
  <navigation :id="$route.params.id" :onlyBack="true" v-if="!this.$store.isInEditMode"></navigation>
  <div class="uk-margin-top navigation__actions" v-else>
    <a uk-icon="icon: chevron-left; ratio: 1.5" @click="$router.go(-1)"> </a>
  </div>
</selector-wrapper>
</template>
<script>
import Navigation from './Navigation.vue'
import SelectorWrapper from './SelectorWrapper.vue'
import Resource from './Resource.vue'
import ResourceTransitionWrapper from './ResourceTransitionWrapper.vue'

export default {
  name: "PreferenceSelectorStudyType",
  components: {
    Navigation,
    SelectorWrapper,
    Resource,
    ResourceTransitionWrapper
  },
  data: function data() {
    return {

    }
  },
  methods: {
    toogle(studyType) {
      if (!this.$store.state.preference.studyType) return false
      return (studyType.id == this.$store.state.preference.studyType.id)
    },
    next(stuff) {
      this.$store.actions.updatePreference(stuff, false)
      if (this.$store.state.isInEditMode) this.$router.go(-1)
      else {
        this.$store.state.showConfirmationModal = true
      }
    },
    parseName(name) {
      const words = name.split(' ')
      var parsedName = name
      const search = (key) => words.slice(words.indexOf('in') + 1).join(' ')
      switch (words[0]) {
        case "Master":
          parsedName = search('in')
          break;
        case "Bachelor":
          parsedName = search('of')
        default:

      }
      return parsedName

    }
  }
}
</script>
<style scoped>
.small-container--scrolled {
  max-height: 150px;
  overflow-y: scroll;
}
</style>
