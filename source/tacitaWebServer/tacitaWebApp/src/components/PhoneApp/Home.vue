<template>
<div class='uk-flex-column uk-flex f-h'>
  <application-page></application-page>
  <screen-nearby></screen-nearby>
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
      },
      user: {
        email: null
      }
    }
  },
  watch: {
    'bluetooth': {
      handler: function(from,to) {
        console.log(JSON.parse(JSON.stringify(to)));
        console.log('*************** BEACON *************');
        if (bluetooth.connected)
          this.$store.actions.beaconFound(bluetooth)
        if (!bluetooth.connected)
          this.$store.actions.beaconLost(bluetooth)
      },
      deep: true
    },
    'user': {
      handler: function() {
        console.log('*************** USER *************');
        this.$store.actions.createOrFetchUser(user.email)
      },
      deep: true
    }
  },
  mounted() {
    window.bluetooth = this.bluetooth
    window.user = this.user
    // this.$store.actions.createOrFetchUser('android.ubicomp.usi@gmail.com')

    // setTimeout(()=>{  window.test.test = 'PORODIO'},500)
    this.$store.actions.fetchApplications()
    // this.$store.actions.getMe('zuppif')
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
