<template>
<div id="preference-confirmation__modal" uk-modal="center: true">
  <div class="uk-modal-dialog uk-modal-body">
    <h3>Delete preference?</h3>
    <p class="uk-text-meta">This cannot be undone.</p>
    <button class="uk-button uk-button-default uk-button-borderless uk-float-left uk-modal-close"> Back </button>
    <button class="uk-button uk-button-primary uk-float-right uk-modal-close" @click="$store.actions.deletePreference($store.state.currentPreference)"> Yes </button>
  </div>
</div>
</template>
<script>
export default {
  name: "ConfirmationModal",
  data: function data() {
    return {}
  }
}
</script>
<style>

</style>
