<template>
<div id="HomeWrapper">
  <div class='uk-flex uk-flex-column f-h'>
    <div class='uk-margin-bottom uk-margin-left uk-margin-right uk-section uk-section-small'>
      <h3 class='uk-margin-remove'>Your preferences
      <br />
      <small class='uk-text-meta'>{{$store.state.user.preferences.data.length}} entries</small></h3>
    </div>
    <div class='uk-background-muted uk-flex--grow'>
      <slot></slot>
    </div>
  </div>
  <v-btn floating primary light icon @click.native="$store.actions.goNext()" id='create-preference__btn'>
    <v-icon light>add</v-icon>
  </v-btn>
</div>
</template>
<script>
import SelectorWrapper from './SelectorWrapper.vue'
export default {
  name: "HomeWrapper",
  data: function data() {
    return {

    }
  }
}
</script>
<style>
</style>
