<template>
<div class="">
  <!-- <h6>Change station  <router-link  class='uk-float-right' :to="{ path: 'station'}"> <span  uk-icon="icon:  arrow-right; ratio: 1.5"></span></router-link> </h6> -->
  <div class="uk-card content">
    <h6>Change Faculty </h6>
    <div v-if="$store.state.preference.faculty" @click="$router.push({name: 'faculty'})">
      <div class="uk-card uk-card-default uk-card-body my-card--padding">
        <h5> {{$store.state.preference.faculty.name_en}}</h5>
      </div>
    </div>
    <h6>Change Study plan </h6>
    <div v-if="$store.state.preference.type" @click="$router.push({name:'study',params:{facultyId:$store.state.preference.faculty.id}})">
      <div class="uk-card uk-card-default uk-card-body my-card--padding">
        <h5>  {{$store.state.preference.type.type}}</h5>
      </div>
    </div>
    <h6>Change Study Type </h6>
    <div>
      <div class="uk-card uk-card-default uk-card-body my-card--padding" @click="$router.push({name:'studyType',params:{facultyId:$store.state.preference.faculty.id}})" v-if="this.$store.state.preference.studyType">
        <h5>  {{$store.state.preference.studyType.name_en}}</h5>
      </div>
    </div>
    <h6>Change Year </h6>
    <div v-if="$store.state.preference.year" @click="$router.push({name:'year',params:{facultyId:$store.state.preference.faculty.id}})">
      <h5>  {{$store.state.preference.year.yearNumber}}</h5>
    </div>
  </div>
  <div class="uk-margin-top navigation__actions">
    <a uk-icon="icon: chevron-left; ratio: 1.5" @click="$router.go(-1)"> </a>
    <a class='uk-float-right uk-margin-small-right' @click="$store.actions.updateUserPreference($store.PreferenceStore.makeQueryFromPreference($store.state.preference))">Done</a>
  </div>
</div>
</template>
<script>
export default {
  name: "",
  data: function data() {
    return {

    }
  }
}
</script>
<style>
</style>
