<template>
<div class='f-h uk-flex uk-flex-column'>
  <div class='uk-background uk-section-small'>
    <h2 class='uk-text-center uk-margin-remove'>{{title}}</h2>
  </div>
  <div class='uk-background-muted uk-flex--grow'>
    <slot></slot>
  </div>
</div>
</template>
<script>
export default {
  name: "Page",
  props: ["title"],
  data: function data() {
    return {

    }
  }
}
</script>
<style>
</style>
