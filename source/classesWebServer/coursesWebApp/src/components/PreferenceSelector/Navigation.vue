<template>
<div id="Navigation ">
  <button class='uk-button uk-button-link' @click="$store.actions.goBack()" v-if="!onlyForward">Back</button>
  <button class='uk-button uk-button-primary' @click="$store.actions.goNext(id)" v-if='!onlyBack'>{{Next}}</button>

</div>
</template>
<script>
export default {
  name: "Navigation",
  props: ['id','onlyBack','onlyForward'],
  data: function data() {
    return {

    }
  }
}
</script>
<style>
</style>
