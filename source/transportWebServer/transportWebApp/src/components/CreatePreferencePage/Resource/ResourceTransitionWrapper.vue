<template>
<!-- <transition-group name="custom-classes-transition" enter-active-class="animated fadeInUp"  class='uk-flex uk-flex-column uk-grid-small' uk-grid> -->

<transition-group name="custom-classes-transition" class='uk-flex uk-flex-column uk-grid-small' uk-grid>
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
