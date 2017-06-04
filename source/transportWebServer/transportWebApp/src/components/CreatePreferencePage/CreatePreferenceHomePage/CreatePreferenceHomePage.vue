<template>
<home-wrapper>
  <preference-delete-confirmation-modal></preference-delete-confirmation-modal>
  <div v-if="$store.state.user.preferences.loading">
    <!-- <user-preference-dummy></user-preference-dummy> -->
  </div>
  <div class="uk-text-center absolute--center" v-else-if="$store.state.user.preferences.data.length <= 0">
    <h6 class="uk-text-meta uk-text-large">No preferences found.</h6>
  </div>
  <div class='uk-container uk-margin-small-top'>
    <resource-transition-wrapper>
      <div v-for="preference in $store.state.user.preferences.data" :key="preference">
        <preference :preference="preference"></preference>
      </div>
    </resource-transition-wrapper>
  </div>
</home-wrapper>
</template>
<script>
import PreferenceDeleteConfirmationModal from '../PreferenceDeleteConfirmationModal/PreferenceDeleteConfirmationModal.vue'
import UserPreferenceDummy from '../UserPreference/UserPreferenceDummy.vue'
import HomeWrapper from '../HomeWrapper.vue'
import ResourceTransitionWrapper from '../Resource/ResourceTransitionWrapper.vue'
import Preference from '../Preference/Preference.vue'

export default {
  name: "CreatePreferenceHomePage",
  components: {
    PreferenceDeleteConfirmationModal,
    UserPreferenceDummy,
    HomeWrapper,
    Preference,
ResourceTransitionWrapper
  },
  watch: {
    '$route': function(newRoute) {
      if (newRoute.path == '/preference/') {
        this.$store.PreferenceStore.initializeCurrentPreference()
      }
    }
  },
  data: function data() {
    return {
      toogle: false
    }
  },
  methods: {
    tooglePrefereceEdit(preference) {
      this.$store.actions.toogleEditMode(preference)
      this.$router.push({
        name: 'edit'
      })
    }
  }
}
</script>
<style>

</style>
