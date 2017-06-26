<template>
<div class="uk-card uk-card-default uk-card-body">
  <div class="preference__actions uk-flex" v-if="!preview">
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
  <h4 class="uk-margin-remove" v-if='preference.faculty'>{{preference.faculty.name_en}}</h4>
  <h6 class="uk-text-meta uk-margin-remove" v-if='preference.studyType'> {{preference.studyType.name_en}}</h6>
  <div class="uk-margin-small-right icon--circle btn--toogle" v-if='preference.year'>
    {{preference.year.yearNumber}}
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
