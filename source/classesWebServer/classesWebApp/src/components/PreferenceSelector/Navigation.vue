<template>
<div id="Navigation ">
  <v-btn icon="icon" class="grey--text text--darken-2 uk-margin-remove" @click.native="$router.go(-1)">
    <v-icon class="grey--text text--darken-2" v-if="!onlyForward">arrow_back</v-icon>
  </v-btn>
  <button class='uk-button uk-button-primary' @click="$store.actions.goNext(id)" v-if='!onlyBack'>{{Next}}</button>

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
