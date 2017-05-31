<template>
<div id="app">
  <router-view class='f-h'></router-view>
</div>
</template>

<script>
import Resource from './components/CustomizationApp/Resource.vue'

window.jQuery = window.$ = require('jquery')
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

export default {
  name: 'app'
}
</script>

<style stylus>
@import "./css/vuetify.min.css";
@import "./css/main.css";

#app {
  max-height: 100vh;
  min-height: 100vh;

}
.full-h {
  height: 100%;
}
.uk-flex--grow{
  flex-grow: 999;
}
</style>
