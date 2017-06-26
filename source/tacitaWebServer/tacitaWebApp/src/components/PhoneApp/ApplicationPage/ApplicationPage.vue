<template>
<page>
  <vue-pull-refresh :on-refresh="onRefresh" class='uk-flex-column uk-flex f-h'>
    <div class='uk-flex-column uk-flex f-h'>
      <div>
        <div class='uk-card uk-card-body uk-flex uk-flex-middle'>
          <h4 class='uk-margin-remove' v-if="$store.state.applications.data.length > 0">{{$store.state.applications.data.length}} Applications</h4>
          <div class='uk-flex--grow'>
          </div>
          <v-switch class='uk-margin-remove' primary v-model="toogleAll" success light hide-details @click.native="$store.actions.toogleAll(toogleAll)" />
        </div>
      </div>
      <div v-if="$store.state.userError.error">
        <div uk-alert class='uk-alert-danger uk-margin-remove'>
          <a uk-close @click="$store.state.userError.error = false" class='uk-alert-close'></a> {{$store.state.userError.msg}}
        </div>
      </div>
      <application-wrapper class='uk-flex--grow' :applications="$store.state.applications.data"></application-wrapper>
    </div>
    </div>
  </vue-pull-refresh>
</page>
</template>
<script>
import ApplicationWrapper from '../Application/ApplicationWrapper/ApplicationWrapper.vue'
import Vue from 'vue'
import Page from '../Page.vue'
import VuePullRefresh from '../VuePullReflesh.vue'

var VueTouch = require('vue-touch')
Vue.use(VueTouch, {
  name: 'v-touch',
})

export default {
  components: {
    Page,
    'vue-pull-refresh': VuePullRefresh,
    ApplicationWrapper,
  },
  name: "ApplicationPage",
  data: function data() {
    return {
      toogleAll: true

    }
  },
  methods: {
    onRefresh: function() {
      console.log('onRefresh');
      // this.$store.actions.fetchApplications()
      return this.$store.actions.fetchApplications()
        .then(() =>
          this.$store.actions.getMyApps())

    }
  }
}
</script>
<style>
</style>
