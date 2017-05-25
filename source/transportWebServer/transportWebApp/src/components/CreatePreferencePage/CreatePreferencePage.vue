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
  mounted() {
    this.$store.actions.getMeById(this.$route.params.userId)
    this.$store.actions.fetchNearbyLocations()
  },
  data() {
    return {
      transitionName: 'slide-right',
      links: ['/preference', '/preference/station', '/preference/bus', '/preference/direction']
    }
  }
}
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
