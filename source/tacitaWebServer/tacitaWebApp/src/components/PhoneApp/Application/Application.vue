<template>
<div class='uk-card uk-card-body uk-card-default my-card__body'>
  <div class='uk-flex-column'>
    <div class='uk-flex uk-flex-middle'>
      <div class='uk-flex--grow uk-flex uk-flex-middle'>
        <div class='uk-margin-right'>
          <v-btn icon @click.native="$router.push({name:'Preference',params:{src: getUrl(application)}})" class="grey--text text--darken-2" large>
            <v-icon large>{{application.material_icon}}</v-icon>
          </v-btn>
        </div>
        <h4 class='uk-margin-remove' @click="$router.push({name:'Preference',params:{src: getUrl(application)}})">{{application.name.toUpperCase()}}</h4>
        <div class='uk-flex--grow'>
        </div>
      </div>
      <div class='uk-margin-right uk-flex-item-1'>
        <v-switch primary v-model="application.toogle" success light hide-details @click.native="$store.actions.toogleApp(application)" />
      </div>
    </div>
    <div class='uk-flex uk-flex-column' v-if="application.description_en">
      <div class='uk-flex uk-flex-middle'>
      <small>More info</small>
        <div class='uk-flex--grow'>
        </div>
        <v-btn icon class='grey--text grey--darken-2'>
          <v-icon v-if="showDescription" @click.native='showDescription = false'>keyboard_arrow_up</v-icon>
          <v-icon v-else-if="!showDescription" @click.native='showDescription = true'>keyboard_arrow_down</v-icon>
        </v-btn>
      </div>
      <div v-if="showDescription">
        <div>
          <h5>{{application.description_en}}</h5>
        </div>
      </div>
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
      showDescription: false
    }
  },
  methods: {
    getUrl(application) {
      return window.location.origin + '/' + application.url + '/#/app/home/'
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
