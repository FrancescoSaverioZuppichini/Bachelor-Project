<template>
<div class="uk-flex uk-flex-column">
  <div class='uk-margin-left uk-margin-right uk-section uk-section-small'>
    <h3>{{title}}</h3>
    <h6 v-if="subtitle">{{subtitle}}</h6>
  </div>
  <div class='uk-background-muted uk-flex--grow'>
    <slot></slot>
  </div>
</div>
</template>
<script>
export default {
  name: "",
  props: ['title', 'subtitle'],
  data: function data() {
    return {

    }
  }
}
</script>
<style>
</style>
