<template>
<div id="app" class='uk-flex uk-flex-column'>
  <nav-bar></nav-bar>
  <transition name="slide">
    <keep-alive>
    <router-view id='content' class='uk-flex--grow'></router-view>
  </keep-alive>
  </transition>
  <Navigation></Navigation>
</div>
</template>

<script>
import NavBar from './components/NavBar/NavBar.vue'
import Navigation from './components/Navigation/Navigation.vue'


export default {
  components: {
    NavBar,
    Navigation
  },
  name: 'app'
}
</script>

<style stylus>
.child-view {
  position: absolute;
  transition: all 5s cubic-bezier(.55, 0, .1, 1);
}

.slide-leave-active {
  /*z-index: 0;
  position: absolute;
  width: 100%;
  height: 100%;*/
}
.slide-enter-active {
  /*z-index: 99;*/
  position: absolute;
  width: 100%;
  height: 100%;
  margin-top: 60px;
  margin-bottom: 40px;

  transition: 0.5s;
}

.slide-enter {
  transform: translate(100%, 0);
}

.slide-leave-to {
  opacity: 0
  /*transform: translate(-100%, 0);*/
}


#app {
  height: 100vh
}

.f-h {
  height: 100%;
}

.uk-flex--grow {
  flex-grow: 99
}

.my-card__body {
  padding: 16px !important
}

#content {
  margin-top: 60px;
  margin-bottom: 40px;
}

@import "./css/main.css";
@import "./css/animation.css";
@import "../node_modules/animate.css/animate.css";
</style>
