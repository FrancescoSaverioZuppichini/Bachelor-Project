<template>
<div id="app" class='uk-flex uk-flex-column f-h'>
  <transition :name="transitionName">
    <keep-alive>
      <router-view class='uk-flex--grow'></router-view>
    </keep-alive>
  </transition>
</div>
</template>

<script>
export default {
  components: {

  },
  name: 'app',
  data() {
    return {
      transitionName: 'fade-router'
    }
  }
}
</script>

<style stylus>
@import "./css/main.css";
@import "./css/animation.css";
@import "../node_modules/animate.css/animate.css";
</style>
