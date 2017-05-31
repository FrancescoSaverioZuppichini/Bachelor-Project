<template>
<div id="app" class='uk-flex uk-flex-column'>
<nav-bar></nav-bar>
  <router-view class='uk-flex--grow'></router-view>
</div>
</template>

<script>
import NavBar from './components/NavBar/NavBar.vue'

export default {
components: {
  NavBar
},
  name: 'app'
}
</script>


<style stylus>
#app{
  height: 100%;
}
@import "./css/main.css";
@import "./css/vuetify.min.css";
@import "../node_modules/uikit/dist/css/uikit.min.css";
@import "../node_modules/animate.css/animate.css";

</style>
