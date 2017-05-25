<template>
<div>
  <div class='uk-flex uk-flex-column uk-margin-top uk-margin-small-bottom'>
    <ul class='uk-list'>
      <li :class="{'toogle':toogle(study.type)}" v-for="(study,index) in $store.state.preference.faculty.studies" @click="$store.actions.updatePreference({type:study.type})">

<v-btn outline class="secondary secondary--text">{{study.type}}</v-btn>
        <!-- <v-chip outline class="">{{study.type}}</v-chip> -->
        <!-- <v-chip outline class="primary primary--text" v-if="index == 1">{{study.type}}</v-chip> -->
        <!-- <v-chip outline class="red red--text" v-if="index == 2">{{study.type}}</v-chip> -->


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
