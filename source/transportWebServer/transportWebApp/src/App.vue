<template>
<div id='App'>
  <router-view class=''></router-view>
</div>
</template>

<script>
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

export default {
  name: 'App'
}
</script>

<style stylus>
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
}

.flex-list {
  display: flex;
}

.flex-list--column {
  flex-direction: column;
}

.flex-item {
  flex: 1 1 auto;
}

.flex-item--grow {
  flex-grow: 0 !important
}

@import url('./css/main.css');
@import url('./css/spinkit.css');
@import url('../node_modules/animate.css/animate.min.css');

#App {
  height: 100%;
  width: 100%;
  max-height: 100vh;
  min-height: 100vh;
}

.card--horizontal {
  flex-direction: row !important;
}

.flex--grow-0 {
  flex-grow: 0 !important
}

.full-h {
  height: 100%;
}

.uk-flex-fill {
  flex-grow: 99;
}
</style>
