<template>
<div class="uk-container uk-section">
  <div class='' uk-grid>
    <slot></slot>
  </div>
</div>
</template>
<script>
import Resource from './Resource.vue'

export default {
  components: {
    Resource
  },
  name: "",
  props: ['data'],
  data: function data() {
    return {

    }
  }
}
</script>
<style>
</style>
