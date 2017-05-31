<template>
<div  class='uk-flex uk-flex-column f-h'>
  <transition :name="transitionName">
    <keep-alive>
      <router-view class='uk-flex--grow'></router-view>
    </keep-alive>
  </transition>
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
  name: 'PhoneApp',
  data() {
    return {
      transitionName: 'fade-router'
    }
  }
}
</script>

<style >

</style>
