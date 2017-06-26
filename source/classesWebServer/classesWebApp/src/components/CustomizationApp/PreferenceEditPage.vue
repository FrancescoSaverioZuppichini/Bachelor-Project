<template>
<div class="uk-container uk-margin-small-top container--offset ">
  <div class="uk-card content">
    <h3 class='uk-margin-remove'> {{$store.state.preference.faculty.name_en}}</h3>
    <h5>Change Study Plan </h5>
    <div v-if="$store.state.preference.type" @click="$router.push({name:'study',params:{facultyId:$store.state.preference.faculty.id}})">
      <div class="uk-card uk-card-default uk-card-body my-card--padding">
        <h5>  {{$store.state.preference.type.type}}</h5>
      </div>
    </div>
    <h6 class='uk-text-center' v-else @click="$router.push({name:'study',params:{facultyId:$store.state.preference.faculty.id}})"> No study selected </h6>

    <h5>Change Study Type </h5>
    <div class="uk-card uk-card-default uk-card-body my-card--padding" @click="$router.push({name:'studyType',params:{facultyId:$store.state.preference.faculty.id}})" v-if="this.$store.state.preference.studyType.name_en">
      <h5>  {{$store.state.preference.studyType.name_en}}</h5>
    </div>
    <h6 class='uk-text-center' v-else @click="$router.push({name:'studyType',params:{facultyId:$store.state.preference.faculty.id}})"> No study type selected </h6>

    <h5>Change Year </h5>
    <div class='btn-circle btn-circle--medium uk-box-shadow-medium' v-if="$store.state.preference.year" @click="$router.push({name:'year',params:{facultyId:$store.state.preference.faculty.id}})">
      {{$store.state.preference.year.yearNumber}}
    </div>
    <h6 class='uk-text-center' v-else @click="$router.push({name:'year',params:{facultyId:$store.state.preference.faculty.id}})"> No Year selected </h6>

  </div>
  <div class="uk-margin-top navigation__actions uk-flex">
    <v-btn icon="icon" class="grey--text grey--darken-2" @click.native="$store.actions.goBackFromEditMode()">
      <v-icon>arrow_back</v-icon>
    </v-btn>
    <div class='uk-flex--grow'>
    </div>
    <v-btn icon="icon" class="grey--text grey--darken-2" @click.native="$store.actions.updateUserPreference($store.PreferenceStore.makeQueryFromPreference())">
      <v-icon>done</v-icon>
    </v-btn>
  </div>
</div>
</template>
<script>
export default {
  name: "",
  data: function data() {
    return {

    }
  },
  methods: {
    goBack() {
      this.$store.actions.goBackFromEditMode()
      this.$store.state.preference = this.$store.state.preferenceBackUp
      this.$router.go(-1)
    }
  }
}
</script>
<style>
</style>
