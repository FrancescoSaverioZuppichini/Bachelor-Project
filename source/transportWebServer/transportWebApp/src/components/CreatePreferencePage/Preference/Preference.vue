<template>
<div class="uk-card uk-card-default uk-card-body">
  <div class="preference__actions uk-flex" v-if="!preview">
    <div>
      <v-btn icon="icon" class="grey--text text--darken-2" @click.native="$store.actions.tooglePreferenceEdit(preference)">
        <v-icon>mode_edit</v-icon>
      </v-btn>
    </div>
    <div>
      <v-btn icon="icon" class="grey--text text--darken-2" @click.native="$store.state.preference = preference" uk-toggle="target: #preference-delete-confirmation__modal">
        <v-icon>delete</v-icon>
      </v-btn>
    </div>
  </div>
  <div v-if="preference.station">
    <h6> <span class="" uk-icon="icon: location;ratio: 1.3"></span>
{{preference.station.name}}</h6>
    <div v-for="bus in preference.buses">
      <div class='uk-flex uk-flex-middle'>
        <h3 class='uk-margin-remove'>{{bus.number}}</h3>
        <div class='uk-margin-left'>
          <p class="uk-margin-remove">{{bus.to}}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "Preference",
  props: ["preference",'preview'],
  data: function data() {
    return {

    }
  }
}
</script>
<style>
.preference__actions {
  position: absolute;
  top: 20px;
  right: 8px;
}
</style>
