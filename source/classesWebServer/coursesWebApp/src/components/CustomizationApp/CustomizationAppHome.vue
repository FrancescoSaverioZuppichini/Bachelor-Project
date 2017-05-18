<template>
<div id="CustomizationAppHome">
  <preference-delete-confirmation-modal></preference-delete-confirmation-modal>
  <div class='uk-margin-bottom'>
    <h5 class='uk-margin-remove'>Your preferences
    <br />
    <small class='uk-text-meta'>{{$store.state.user.preferences.data.length}} entries</small></h5>
  </div>
  <div class="uk-flex-column uk-flex-item-1">
    <div class="preference-station__container">
      <div v-if="$store.state.user.preferences.loading">
        <user-preference-dummy v-for="index in [1,2]"></user-preference-dummy>
      </div>
      <div class="uk-text-center" v-else-if="$store.state.user.preferences.data.length <= 0">
        <h6 class="uk-text-meta uk-text-large" uk-cover>No preferences found.</h6>
      </div>
      <div class="uk-flex uk-flex-column" v-else>
        <preference :preference="preference" v-for="preference in $store.state.user.preferences.data.reverse()"></preference>
      </div>
    </div>
  </div>
  <div class="uk-margin-top navigation__actions padding--zero">
    <button class="uk-button uk-button-primary uk-float-right uk-width-auto@m" @click="$store.actions.goNext()">new</button>
    </button>
  </div>
</div>
</template>
<script>
import UserPreferenceDummy from './UserPreferenceDummy.vue'
import Preference from './Preference.vue'
import PreferenceDeleteConfirmationModal from './PreferenceDeleteConfirmationModal.vue'

export default {
  name: "CustomizationAppHome",
  components: {
    UserPreferenceDummy,
    Preference,
    PreferenceDeleteConfirmationModal
  },
  mounted() {
    setTimeout(() => {
      this.$store.actions.fetchUserPreferences()
    }, 500)
  },
  watch: {
    '$route': function(newRoute) {
      if (newRoute.name == 'home') {
        this.$store.state.navigation.reset()
        this.$store.state.isInEditMode = false
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

        this.$store.actions.fetchUserPreferences()
      }
    }
  },
  methods: {
    onNavigationDone() {
      this.$store.actions.addPreference(this.$store.PreferenceStore.makeQueryFromPreference())
    }
  },
  data: function data() {
    return {

    }
  }
}
</script>
<style>
</style>
