<template>
<div id="DisplayWrapper" class="uk-section uk-section-muted container--scrollable">
  <div class='uk-container'>

    <transition-group name="custom-classes-transition" enter-active-class="animated fadeInUp" class='uk-flex uk-flex-column uk-grid-small' uk-grid>
      <div v-for="display in displays" :key="display.id">
        <!-- :key="display.id" -->
        <display :display="display"></display>
      </div>
      <div key='dummy'>
        <display-dummy v-if="$store.state.nearbyDisplay.isLoading"></display-dummy>
      </div>
    </transition-group>
    <div uk-cover key='noDisplay' v-if="!$store.state.hasADisplayNearby() && !$store.state.nearbyDisplay.isLoading">
      <h4 class='uk-text-center'>  No display around </h4>
    </div>
  </div>
</div>
</template>
<script>
import Display from '../Display/Display.vue'
import DisplayDummy from '../Display/DisplayDummy.vue'

export default {
  name: "DisplayWrapper",
  components: {
    Display,
    DisplayDummy
  },
  props: ['displays']
}
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active in <2.1.8 */

{
  opacity: 0
}
</style>
