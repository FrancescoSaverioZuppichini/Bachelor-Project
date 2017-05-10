<template>
<div class="uk-card uk-card-default uk-card-body uk-margin-bottom">
  <div class="uk-float-right uk-flex uk-grid-small">

    <div>
      <span uk-icon="icon: pencil; ratio: 1.2" @click="$store.actions.tooglePreferenceEdit(preference)"></span>
    </div>
    <div>
      <span uk-icon="icon: trash; ratio: 1.2" @click="$store.state.currentPreference = preference" uk-toggle="target: #preference-delete-confirmation__modal"></span>
    </div>
  </div>
  <h4 class="uk-margin-remove">{{preference.faculty.name_en}}</h4>
  <h6 class="uk-text-meta uk-margin-remove"> {{preference.studyType.name_en}}</h6>
  <div class="uk-margin-small-right icon--circle btn--toogle">
    {{preference.year.yearNumber}}
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
