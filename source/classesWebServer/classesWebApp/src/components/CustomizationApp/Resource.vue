<template>
<div class="uk-card uk-card-default uk-card-body resource" :class="{'uk-box-shadow-large':toogle}">
  <slot></slot>
</div>
</template>
<script>

export default {
  name: "",
  props: ['toogle'],
  data: function data() {
    return {

    }
  }
}
</script>
<style scoped>
.resource{
  overflow-y: scroll;
}
</style>
