<template>
<div id="PreferenceSelector">
  <div class="">
      <h3>Select your faculty</h3>
      <!-- <transition name='fade'>
        <div class="uk-alert-danger" uk-alert v-if="showError">
          <p>{{error.msg}}</p>
        </div>
      </transition> -->
    </div>
  <div class="uk-flex" uk-grid>
    <div v-for="faculty in $store.state.faculties" class="uk-width-auto@s uk-width-1-1@m">
      <div class="uk-card uk-card-default uk-card-body">
        <div @click="$store.actions.selectFaculty(faculty,false)" v-if="!$store.state.preference.faculty || !($route.params.facultyId == faculty.id)">
          <p class='uk-margin-remove uk-text-large'>{{faculty.name_en}}</p>
        </div>
        <h4 class='uk-margin-remove' v-else>{{faculty.name_en}}</h4>
      </div>
    </div>
  </div>
<navigation :onlyBack="true"></navigation>
</div>
</template>
<script>
import Navigation from './Navigation.vue'

export default {
  name: "PreferenceSelector",
  components: {
Navigation
  }
}
</script>
<style>

</style>
