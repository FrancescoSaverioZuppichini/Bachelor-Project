<template>
<vue-pull-refresh :on-refresh="onRefresh" class='uk-flex-column uk-flex f-h'>

  <div class='uk-flex-column uk-flex f-h'>
    <display-wrapper class='uk-flex--grow' :displays="$store.state.nearbyDisplay.data"></display-wrapper>
  </div>
</vue-pull-refresh>
</template>
<script>
import DisplayWrapper from './DisplayWrapper/DisplayWrapper.vue'
import VuePullRefresh from '../VuePullReflesh.vue'

export default {
  name: "",
  components: {
    DisplayWrapper,
    'vue-pull-refresh': VuePullRefresh
  },
  data: function data() {
    return {

    }
  },
  methods: {
    onRefresh: function() {
      console.log('onRefresh');
      // this.$store.actions.fetchApplications()
      const displays = this.$store.state.nearbyDisplay.data
      // var displaysPromises = displays.map(display => this.$store.actions.fetchDisplay(display.id))
      // console.log(this.$store.actions.fetchDisplays(displays.filter(disp => disp.id)))
      return this.$store.actions.fetchDisplays(displays.map(disp => disp.id))

    }
  }
}
</script>
<style>
</style>
