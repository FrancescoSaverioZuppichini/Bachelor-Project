<template>
  <transition-group name="custom-classes-transition" enter-active-class=""  class='uk-flex uk-flex-column uk-grid-small container--offset' uk-grid>
  <slot></slot>
</transition-group>
</template>
<script>
export default {
  name: "ResourceTransitionWrapper",
  data: function data() {
    return {

    }
  }
}
</script>
<style>
</style>
