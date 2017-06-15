<template>
<div id="preference-delete-confirmation__modal" uk-modal="center: true">
  <div class="uk-modal-dialog uk-modal-body">
    <h3>Delete preference?</h3>
    <p class="uk-text-meta">This cannot be undone.</p>
    <v-btn flat class="uk-button uk-button-default uk-button-borderless uk-float-left uk-modal-close">Cancel</v-btn>
    <v-btn primary dark @click.native="$store.actions.deletePreference($store.state.preference)" class='uk-float-right uk-modal-close'>Yes</v-btn>
  </div>
  </div>
</div>
</template>
<script>
export default {
  name: "PreferenceDeleteConfirmationModal",
  data: function data() {
    return {}
  }
}
</script>
<style>

</style>
