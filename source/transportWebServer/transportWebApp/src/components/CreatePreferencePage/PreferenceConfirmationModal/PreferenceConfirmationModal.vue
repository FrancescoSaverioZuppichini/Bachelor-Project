<template>
<div id="preference-confirmation__modal" uk-modal="center: true" :class="{'uk-modal uk-open uk-flex uk-flex-center uk-flex-middle':this.$store.state.showConfirmationModal}" v-show='this.$store.state.showConfirmationModal'>
  <div class="uk-modal-dialog uk-modal-body">
    <h3>Create preference?</h3>
    <div class='uk-margin-bottom'>
      <p class="uk-text-meta uk-margin-remove">This is how it's gonna look</p>

    </div>
    <preference :preference="$store.state.preference" :preview="true"></preference>
    <div class='uk-margin-bottom'>
    </div>
    <v-btn flat @click.native="$store.state.showConfirmationModal = false">Cancel</v-btn>
    <v-btn primary dark @click.native="$store.actions.addPreference()" class='uk-float-right'>Yes</v-btn>
  </div>
</div>
</template>
<script>
import Preference from '../Preference/Preference.vue'
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
