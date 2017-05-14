<template>
<div class='uk-card uk-card-body uk-card-default my-card__body'>
  <div class='uk-flex uk-flex-middle'>
    <div @click="$router.push({name:'Preference',params:{src: this.window.location.origin + '/'+ application.url}})" class='uk-flex--grow uk-flex'>
      <div class='uk-margin-right'>
        <v-icon class="grey--text text--darken-2" large>{{application.material_icon}}</v-icon>
      </div>
      <div>
        <h4 class='uk-margin-remove'>{{application.name.toUpperCase()}}</h4>
      </div>
      <div class='uk-flex--grow'>
      </div>
    </div>

    <div class='uk-margin-right uk-flex-item-1'>
      <v-switch primary v-model="application.toogle" success light hide-details @click.native="$store.actions.toogleApp(application)" />
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "Application",
  props: ['application'],
  data: function data() {
    return {

    }
  }
}
</script>
<style scoped>
.app__icon {
  width: 50px;
  height: 50px;
  text-align: center;
  font-size: 45px;
  border-radius: 50%;
  /*border: 1px black solid;*/
}
</style>
