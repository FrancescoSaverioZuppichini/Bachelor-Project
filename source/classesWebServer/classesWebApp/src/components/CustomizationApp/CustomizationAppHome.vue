<template>
<home-wrapper>
  <preference-delete-confirmation-modal></preference-delete-confirmation-modal>
  <div v-if="$store.state.user.preferences.loading">
    <user-preference-dummy></user-preference-dummy>
  </div>
  <div class="uk-text-center absolute--center" v-else-if="$store.state.user.preferences.data.length <= 0">
    <h6 class="uk-text-meta uk-text-large">No preferences found.</h6>
  </div>
  <div class='uk-container uk-margin-small-top'>
    <!-- <div class="uk-flex uk-flex-column" uk-grid> -->
    <resource-transition-wrapper>
      <div v-for="preference in $store.state.user.preferences.data" :key="preference">
        <preference :preference="preference"></preference>
      </div>
    </resource-transition-wrapper>
  </div>
</home-wrapper>
</template>
<script>
import UserPreferenceDummy from './UserPreferenceDummy.vue'
import Preference from './Preference.vue'
import PreferenceDeleteConfirmationModal from './PreferenceDeleteConfirmationModal.vue'
import HomeWrapper from './HomeWrapper.vue'
import SelectorWrapper from './SelectorWrapper.vue'
import ResourceTransitionWrapper from './ResourceTransitionWrapper.vue'

export default {
  name: "CustomizationAppHome",
  components: {
    UserPreferenceDummy,
    Preference,
    PreferenceDeleteConfirmationModal,
    HomeWrapper,
    SelectorWrapper,
    ResourceTransitionWrapper
  },
  watch: {
    '$route': function(to, from) {
      if (to.name == 'home') this.$store.state.isInEditMode = false
    }
  },
  data: function data() {
    return {

    }
  }
}
</script>
<style>
#create-preference__btn {
  position: absolute;
  bottom: 16px;
  right: 16px;
}
</style>
