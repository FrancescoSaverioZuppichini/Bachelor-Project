<template>
<transition name='slide-left'>
  <router-view>
  </router-view>
</transition>
</template>
<script>
import ConfirmationModal from './ConfirmationModal/ConfirmationModal.vue'

export default {
  name: "CreatePreferencePage",
  data() {
    return {
      transitionName: 'slide-right'
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}

.navigation__actions {
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
}
</style>
