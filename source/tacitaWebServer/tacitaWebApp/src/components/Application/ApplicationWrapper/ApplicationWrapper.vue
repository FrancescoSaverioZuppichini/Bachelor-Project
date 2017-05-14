<template>
<div id="ApplicationWrapper" class="uk-section uk-section-muted container--scrollable">
  <div class='uk-container'>

    <transition-group name="custom-classes-transition" enter-active-class="animated fadeInUp"  class='uk-flex uk-flex-column uk-grid-small' uk-grid>
      <div v-for="n in 2" :key="n"  v-if="$store.state.applications.isLoading">
        <application-dummy></application-dummy>
      </div>
      <div v-for="app in applications" :key="app">
        <application :application="app"></application>
      </div>
    </transition-group>
    <div uk-cover v-if="$store.state.applications.data.length <= 0 && !$store.state.applications.isLoading">
      <h4 class="uk-text-center">No application found</h4>
    </div>
  </div>
</div>
</template>
<script>
import Application from '../Application.vue'
import ApplicationDummy from '../ApplicationDummy.vue'

export default {
  name: "ApplicationWrapper",
  components: {
    Application,
    ApplicationDummy
  },
  props: ['applications'],
  data: function data() {
    return {

    }
  }
}
</script>
<style>


</style>
