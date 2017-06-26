<template>
<div id="screen-nearby__container" class='animated infinite pulse' v-show="$store.state.hasADisplayNearby()">
  <v-btn primary floating dark  @click.native="$router.push({name:'Display'})">
    <v-icon>important_devices</v-icon>
  </v-btn>
</div>
</template>
<script>
export default {
  name: "ScreenNearby",
  data: function data() {
    return {

    }
  }
}
</script>
<style scoped>
#screen-nearby__container {
  position: absolute;
  z-index: 3;
  left: 16px;
  bottom: 16px;
}
</style>
