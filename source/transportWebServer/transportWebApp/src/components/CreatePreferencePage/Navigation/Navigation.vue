<template>
<div class="uk-margin-top navigation__actions">
  <v-btn icon="icon" class="grey--text grey--darken-2" @click.native="$store.actions.goBack()" v-if="!onlyForward">
    <v-icon>arrow_back</v-icon>
  </v-btn>
  <v-btn icon="icon" class="grey--text grey--darken-2" @click.native="$store.actions.goNext(id)" v-if='!onlyBack'>
    <v-icon>arrow_forward</v-icon>
  </v-btn>
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
.navigation__actions>button {
  margin: 0px !important;
}
</style>
