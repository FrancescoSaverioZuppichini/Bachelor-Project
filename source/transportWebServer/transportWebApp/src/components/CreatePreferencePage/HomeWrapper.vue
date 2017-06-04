<template>
<div id="HomeWrapper">
  <div class='uk-flex uk-flex-column f-h uk-margin-small-top'>
    <div class='uk-margin-bottom uk-margin-left uk-margin-right uk-flex-column'>
      <h3 class='uk-margin-remove'>Your preferences
</h3>
      <small class='uk-text-meta'>{{$store.state.user.preferences.data.length}} entries</small>
    </div>
    <div class='uk-background-muted uk-flex--grow'>
      <slot></slot>
    </div>
  </div>
  <v-btn primary floating dark @click.native="$router.push({name:'station',params:$route.params})" id='create-preference__btn'>
    <v-icon light>add</v-icon>
  </v-btn>
</div>
</template>
<script>
import SelectorWrapper from './SelectorWrapper.vue'
export default {
  name: "HomeWrapper",
}
</script>
<style>
#create-preference__btn {
  position: absolute;
  bottom: 16px;
  right: 16px;
}
</style>
