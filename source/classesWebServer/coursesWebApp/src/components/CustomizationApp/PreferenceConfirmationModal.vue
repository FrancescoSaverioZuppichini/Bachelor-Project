<template>
<div id="preference-confirmation__modal" uk-modal="center: true" :class="{'uk-modal uk-open uk-flex uk-flex-center uk-flex-middle':this.$store.state.showConfirmationModal}" v-show='this.$store.state.showConfirmationModal'>
  <div class="uk-modal-dialog uk-modal-body">
    <h3>create preference?</h3>
    <p class="uk-text-meta">This is how it's gonna look</p>
    <preference :preference="$store.state.preference"></preference>
    <v-btn flat @click.native="$store.state.showConfirmationModal = false">Cancel</v-btn>
    <v-btn primary dark @click.native="$store.actions.addPreference($store.PreferenceStore.makeQueryFromPreference())">Yes</v-btn>
  </div>
</div>
</template>
<script>
import Preference from './Preference.vue'
export default {
  name: "",
  components: {
    Preference
  },
  data: function data() {
    return {

    }
  }
}
</script>
<style>
</style>
