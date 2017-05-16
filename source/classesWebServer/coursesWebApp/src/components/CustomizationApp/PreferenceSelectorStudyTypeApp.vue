<template>
<div>
  <div class="">
      <h3>Select your study program</h3>
      <!-- <transition name='fade'>
        <div class="uk-alert-danger" uk-alert v-if="showError">
          <p>{{error.msg}}</p>
        </div>
      </transition> -->
    </div>
  <div class='uk-flex uk-flex-column uk-margin-top uk-margin-small-bottom'>
    <div v-for="study in $store.state.preference.faculty.studies" v-if="$store.state.preference.type.type == study.type">
      <ul class="uk-list">
        <li  uk-toggle="target: #preference-confirmation__modal" :class="{'toogle': toogle(studyType)}" v-for="studyType in study.studyTypes" @click="$store.actions.updatePreference({studyType},false)" v-if="!$store.state.isInEditMode">
          {{studyType.name_en}}
        </li>
        <li :class="{'toogle': toogle(studyType)}" v-for="studyType in study.studyTypes" @click="$store.actions.updatePreference({studyType})" v-if="$store.state.isInEditMode">
          {{studyType.name_en}}
        </li>
      </ul>
    </div>
  </div>
  <navigation :id="$route.params.id" :onlyBack="true" v-if="!this.$store.isInEditMode"></navigation>
  <div class="uk-margin-top navigation__actions" v-else>
    <a uk-icon="icon: chevron-left; ratio: 1.5" @click="$router.go(-1)"> </a>
  </div>
</div>
</template>
<script>
import Navigation from './Navigation.vue'

export default {
  name: "PreferenceSelectorStudyType",
  components: {
    Navigation
  },
  data: function data() {
    return {

    }
  },
  methods: {
    toogle(studyType) {
      if(!this.$store.state.preference.studyType) return false
      return (studyType.id == this.$store.state.preference.studyType.id)
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
