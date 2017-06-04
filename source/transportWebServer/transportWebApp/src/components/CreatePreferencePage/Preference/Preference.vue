<template>
<div class="uk-card uk-card-default uk-card-body">
  <div class="uk-float-right uk-flex">
    <div>
      <v-btn icon="icon" class="grey--text text--darken-2" @click.native="$store.actions.tooglePreferenceEdit(preference)">
        <v-icon>mode_edit</v-icon>
      </v-btn>
      <!-- <span uk-icon="icon: pencil; ratio: 1.2" @click="$store.actions.tooglePreferenceEdit(preference)"></span> -->
    </div>
    <div>
      <v-btn icon="icon" class="grey--text text--darken-2" @click.native="$store.state.currentPreference = preference" uk-toggle="target: #preference-delete-confirmation__modal">
        <v-icon>delete</v-icon>
      </v-btn>
      <!-- <span uk-icon="icon: trash; ratio: 1.2" @click="$store.state.currentPreference = preference" uk-toggle="target: #preference-delete-confirmation__modal"></span> -->
    </div>
  </div>
  <div v-if="preference.station">
    <h6> <span class="" uk-icon="icon: location;ratio: 1.3"></span>
{{preference.station.name}}</h6>
    <div v-for="bus in preference.buses">
      <div class='uk-flex uk-flex-middle'>
        <h3 class='uk-margin-remove'>{{bus.number}}</h3>
        <small class="uk-margin-left">{{bus.to}}</small>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "Preference",
  props: ["preference"],
  data: function data() {
    return {

    }
  }
}
</script>
<style>
</style>
