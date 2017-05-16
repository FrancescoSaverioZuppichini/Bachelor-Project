<template>
<div class='uk-flex uk-flex-column f-h'>
  <nav-bar></nav-bar>
    <slot></slot>
    <Navigation></Navigation>
</div>
</template>
<script>
import NavBar from './NavBar/NavBar.vue'
import Navigation from './Navigation/Navigation.vue'


export default {
  components: {
    NavBar,
    Navigation
  },
  name: "",
  data: function data() {
    return {

    }
  }
}
</script>
<style>
</style>
