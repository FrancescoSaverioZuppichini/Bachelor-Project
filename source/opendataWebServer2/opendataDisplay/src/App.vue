<template>
<div id='App'>
<router-view></router-view>
</div>
</template>

<script>


// Vue.prototype.$store = SuperStore

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

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}

.fade-enter, .fade-leave-to
/* .fade-leave-active in <2.1.8 */

{
  opacity: 0
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
#App {
  height: 100%;
  width: 100%;
max-height: 100vh;
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
