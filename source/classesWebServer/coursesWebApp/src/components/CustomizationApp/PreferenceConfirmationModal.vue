<template>
<div id="preference-confirmation__modal" uk-modal="center: true" :class="{'uk-modal uk-open uk-flex uk-flex-center uk-flex-middle':this.$store.state.showConfirmationModal}">
  <div class="uk-modal-dialog uk-modal-body">
    <h3>create preference?</h3>
    <p class="uk-text-meta">This is how it's gonna look</p>
    <preference :preference="this.$store.state.preference"></preference>
    <button class="uk-button uk-button-link uk-button-borderless uk-float-left uk-modal-close"> Cancel </button>
    <button class="uk-button uk-button-primary uk-float-right uk-modal-close" @click="$store.actions.goNext()"> Yes </button>
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
