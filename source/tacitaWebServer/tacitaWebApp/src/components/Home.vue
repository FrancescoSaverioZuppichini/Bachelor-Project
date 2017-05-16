<template>
<div class='uk-flex-column uk-flex f-h'>
  <application-page></application-page>
  <screen-nearby></screen-nearby>
  <!-- <div id='bluetooth-trigger__container' class='uk-float-right'>
    <v-btn primary floating dark @click.native="$store.actions.foundDisplay({})">
      <v-icon>bluetooth</v-icon>
    </v-btn>
  </div> -->

  <!-- <button class='uk-button uk-button-default' @click='$store.actions.foundDisplay({})'>TRIGGER DISPLAY</button> -->
  <!-- <button class='uk-button uk-button-default' @click='$store.actions.lostDisplay({displayId:1})'>LOST A DISPLAY</button> -->

</div>
</template>

<script>
import Navigation from './Navigation/Navigation.vue'
import ScreenNearby from './ScreenNearby/ScreenNearby.vue'
import ApplicationPage from './ApplicationPage/ApplicationPage.vue'
import VuePullRefresh from './VuePullReflesh.vue'

export default {
  components: {
    Navigation,
    ScreenNearby,
    ApplicationPage,
    'vue-pull-refresh': VuePullRefresh
  },
  name: 'Home',
  data() {
    return {
      bluetooth: {
        macAddress: null,
        connected: false
      }
    }
  },
  watch: {
    'bluetooth': {
      handler: function() {
        console.log('*************************');
        if (bluetooth.connected)
          this.$store.actions.beaconFound(bluetooth)
        if (!bluetooth.connected)
          this.$store.actions.beaconLost(bluetooth)
      },
      deep: true
    }
  },
  mounted() {
    window.bluetooth = this.bluetooth
    // setTimeout(()=>{  window.test.test = 'PORODIO'},500)
    this.$store.actions.fetchApplications()
    this.$store.actions.getMe('zuppif')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
#bluetooth-trigger__container {
  position: absolute;
  z-index: 3;
  right: 24px;
  bottom: 36px;
}
</style>
