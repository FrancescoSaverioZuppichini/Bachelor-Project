<template>
<div class='uk-card uk-card-default uk-card-body'>
  <div class='uk-card-title'>
    {{course.name_en}}
  </div>
  <h3 class='uk-margin-remove'>{{course.professor_full_name}}</h3>
  <p v-html="course.description_it">
    <!-- {{course.description_it}} -->
  </p>
</div>
</template>
<script>
export default {
  name: "",
  props: ['course'],
  data: function data() {
    return {

    }
  }
}
</script>
<style>
</style>
