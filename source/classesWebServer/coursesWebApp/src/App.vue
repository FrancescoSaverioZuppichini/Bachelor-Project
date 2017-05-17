<template>
<div id="app">
  <router-view></router-view>
</div>
</template>

<script>
window.jQuery = window.$ = require('jquery')
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

export default {
  name: 'app'
}
</script>

<style lang="stylus">
/*@import "./css/fullcalendar.css"*/
@import "./css/main.css"

#app {
  height: 100vh
}
.full-h {
  height: 100%;
}
.uk-flex--grow{
  flex-grow: 999;
}
</style>
