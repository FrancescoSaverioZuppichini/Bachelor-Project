<template>
<div>
  <div class='uk-flex uk-flex-column uk-margin-top uk-margin-small-bottom'>
    <ul class='uk-list'>
      <li :class="{'toogle':toogle(study.type)}" v-for="study in $store.state.preference.faculty.studies" @click="$store.actions.updatePreference({type:study.type})">
        {{study.type}}
      </li>
    </ul>
  </div>
  <navigation :id="$route.params.id" :onlyBack="true"></navigation>
</div>
</template>
<script>
import Navigation from './Navigation.vue'

export default {
  name: "PreferenceSelectorStudy",
  components: {
    Navigation
  },
  data: function data() {
    return {

    }
  },
  methods: {
    toogle(type) {
      return (type == this.$store.state.preference.type)
  }
}
}
</script>
<style>
</style>
