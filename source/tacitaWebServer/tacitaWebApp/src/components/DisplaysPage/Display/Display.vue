<template>
<div class='uk-card uk-card-body uk-card-default my-card__body'>
  <div class='uk-flex uk-flex-middle'>
    <div class='uk-margin-right'>
      <v-icon class="grey--text text--darken-2" large>desktop_windows</v-icon>
    </div>
    <div class='uk-flex uk-flex-column'>
      <h4 class='uk-margin-remove'>Display {{display.id}}</h4>
      <div class='uk-flex uk-flex-column'>
        <div v-for="app in display.apps" class='uk-flex uk-width-1-1'>
          <v-icon class="grey--text text--darken-2 uk-margin-small-right">{{app.material_icon}}</v-icon>
          {{app.name}}
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "Display",
  props: ['display'],
  data: function data() {
    return {

    }
  }
}
</script>
<style>
</style>
