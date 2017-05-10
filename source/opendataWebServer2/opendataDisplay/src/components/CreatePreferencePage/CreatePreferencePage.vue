<template>
<div>
  <keep-alive>
    <router-view>
    </router-view>
  </keep-alive>
  <navigation :links="links" :whenFinishFunc="this.$store.actions.addPreference"></navigation>
</div>
</template>
<script>
import ConfirmationModal from './ConfirmationModal/ConfirmationModal.vue'
import Navigation from './Navigation/Navigation.vue'
export default {
  name: "CreatePreferencePage",
  components: {
    Navigation
  },
  created() {
    this.$store.actions.fetchNearbyLocations()

  },
  data() {
    return {
      transitionName: 'slide-right',
      links: ['/preference', '/preference/station', '/preference/bus', '/preference/direction']
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      this.$store.state.preferenceError.message = null
    }
  }
}
</script>
<style>
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
