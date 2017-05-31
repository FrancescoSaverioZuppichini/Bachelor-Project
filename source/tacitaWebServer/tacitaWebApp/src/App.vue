<template>
<div id="app">
  <router-view ></router-view>
</div>
</template>

<script>

export default {
  components: {

  },
  watch: {
    '$route.path': function(to, from) {
    //   if (to.length < from.length) this.transitionName = 'slide-right'
    //   else {
    //     this.transitionName = 'slide'
    //   }
    }
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
