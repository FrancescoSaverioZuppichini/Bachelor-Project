<template>
<div class="uk-margin-top navigation__actions">
  <a uk-icon="icon: chevron-left; ratio: 1.5" @click="$store.actions.goBack()" v-if="!onlyForward"> </a>
  <a class='uk-float-right uk-margin-small-right' @click="$store.actions.goNext(id)" v-if='!onlyBack'>Next</a>
</div>
</template>
<script>
export default {
  name: "Navigation",
  props: ['id', 'onlyBack', 'onlyForward'],
  data: function data() {
    return {

    }
  }
}
</script>
<style>
</style>
