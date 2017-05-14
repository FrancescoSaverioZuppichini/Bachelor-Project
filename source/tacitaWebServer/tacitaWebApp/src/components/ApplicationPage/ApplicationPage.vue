<template>
  <div class='uk-flex-column uk-flex f-h'>
    <div>
      <div class='uk-card uk-card-body uk-flex uk-flex-middle'>
        <h4 class='uk-margin-remove' v-if="$store.state.applications.data.length > 0">{{$store.state.applications.data.length}} Applications</h4>
        <div class='uk-flex--grow'>
        </div>
        <v-switch class='uk-margin-remove' primary v-model="toogleAll" success light hide-details @click.native="$store.actions.toogleAll(toogleAll)" />
      </div>
    </div>
    <application-wrapper class='uk-flex--grow' :applications="$store.state.applications.data"></application-wrapper>
  </div>
  </div>
</template>
<script>
import ApplicationWrapper from '../Application/ApplicationWrapper/ApplicationWrapper.vue'
import Vue from 'vue'
var VueTouch = require('vue-touch')
Vue.use(VueTouch, {
  name: 'v-touch'
})

export default {
  components: {
    ApplicationWrapper,
  },
  name: "ApplicationPage",
  data: function data() {
    return {
      toogleAll: true

    }
}
}
</script>
<style>
</style>
