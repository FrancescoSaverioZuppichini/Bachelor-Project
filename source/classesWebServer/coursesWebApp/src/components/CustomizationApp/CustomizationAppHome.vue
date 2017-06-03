<template>
<home-wrapper>
  <div class="preference-station__container">
    <preference-delete-confirmation-modal></preference-delete-confirmation-modal>
    <div v-if="$store.state.user.preferences.loading">
      <user-preference-dummy></user-preference-dummy>
    </div>
    <div class="uk-text-center absolute--center" v-else-if="$store.state.user.preferences.data.length <= 0">
      <h6 class="uk-text-meta uk-text-large">No preferences found.</h6>
    </div>
    <div class='uk-container uk-margin-small-top' v-else>
      <div class="uk-flex uk-flex-column" uk-grid>
        <div v-for="preference in $store.state.user.preferences.data">
          <preference :preference="preference"></preference>
        </div>
      </div>
    </div>
  </div>
</home-wrapper>
</template>
<script>
import UserPreferenceDummy from './UserPreferenceDummy.vue'
import Preference from './Preference.vue'
import PreferenceDeleteConfirmationModal from './PreferenceDeleteConfirmationModal.vue'
import HomeWrapper from './HomeWrapper.vue'
import SelectorWrapper from './SelectorWrapper.vue'

export default {
  name: "CustomizationAppHome",
  components: {
    UserPreferenceDummy,
    Preference,
    PreferenceDeleteConfirmationModal,
    HomeWrapper,
    SelectorWrapper
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
