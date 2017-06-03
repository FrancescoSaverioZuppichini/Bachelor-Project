<template>
  <div id="preference-delete-confirmation__modal" uk-modal="center: true">
    <div class="uk-modal-dialog uk-modal-body">
      <h3>Delete preference?</h3>
      <h5 class="uk-text-meta">This cannot be undone.</h5>
      <v-btn flat  class='uk-modal-close'>Cancel</v-btn>
      <v-btn primary dark @click.native="$store.actions.deletePreference($store.state.currentPreference)" class='uk-float-right uk-modal-close'>Yes</v-btn>

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
