<template>
<div class='f-h'>
  <keep-alive>
    <router-view class='f-v'></router-view>
  </keep-alive>
  <!-- <router-view></router-view> -->
  <preference-confirmationModal></preference-confirmationModal>
</div>
</template>
<script>
import PreferenceConfirmationModal from './PreferenceConfirmationModal.vue'
export default {
  name: "CustomizationApp",
  components: {
    PreferenceConfirmationModal
  },
  mounted() {
    // this.$store.state.navigation.BASE_URL = this.$route.path
    this.$store.actions.getMeById(this.$route.params.userId)
    this.$store.actions.fetchFaculties()
    this.$store.actions.fetchYears()
    this.$store.state.navigation._urls = ['faculty', 'study', 'year', 'studyType']
    const guards = [
      function() {
        console.log('beforeGoToFaculty')
        this.state.preference.faculty = {}

      },
      function() {
        this.state.preference.type = ''

        console.log('beforeGoToStudy')
      },
      function() {
        this.state.preference.year = {}

        console.log('beforeGoToYear')
      },
      function() {
        this.state.preference.studyType = {}
        console.log('beforeGoToStudyType');
      },
      this.onNavigationDone.bind(this)
    ]
    this.$store.actions.setGuards(guards)

  },
  methods: {
    onNavigationDone() {
      this.$store.actions.addPreference(this.$store.PreferenceStore.makeQueryFromPreference())
    }
  },
  data() {
    return {

    }
  }
}
</script>
<style>

</style>
