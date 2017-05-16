<template>
  <div class="uk-flex">
<!-- REVIEW NOT USED ANYMORE -->
<div class="uk-margin-right" v-for="faculty in $store.state.faculties">
  {{faculty.name_en}}
  <navigation :id="faculty.id"></navigation>
  <router-view v-if="$route.params.id == faculty.id"></router-view>
</div>
</div>

</template>
<script>
import Navigation from './Navigation.vue'

export default {
  name: "PreferenceSelectorFacultyApp",

  data: function data() {
    return {

    }
  }
}
</script>
<style>
</style>
