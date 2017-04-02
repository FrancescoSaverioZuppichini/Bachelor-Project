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
