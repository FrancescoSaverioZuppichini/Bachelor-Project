<template>
<div>
  <div class='uk-flex'>
    <h5 class='uk-margin-remove'>{{$store.state.preference.type}}</h5>
    <div class="uk-margin-small-left icon--circle btn--toogle">
      {{$store.state.preference.year.yearNumber}}
    </div>
  </div>
  <div class='uk-flex uk-flex-column uk-margin-top uk-margin-small-bottom small-container--scrolled'>
    <div v-for="study in $store.state.preference.faculty.studies" v-if="$store.state.preference.type == study.type">
      <ul class="uk-list uk-list-divider">
        <li :class="{'toogle': toogle(studyType)}" v-for="studyType in study.studyTypes" @click="next(studyType)">
          <h5>{{studyType.name_en}}</h5>
        </li>
      </ul>
    </div>
  </div>
  <navigation :id="$route.params.id" :onlyBack="true"></navigation>
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
      if (!this.$store.state.preference.studyType) return false
      return (studyType.name_en == this.$store.state.preference.studyType.name_en)
    },
    next(studyType) {
      this.$store.actions.updatePreference({
        studyType
      })

      this.$store.actions.fetchCourses(this.$store.PreferenceStore.makeQueryFromPreference(this.$store.state.preference))

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
