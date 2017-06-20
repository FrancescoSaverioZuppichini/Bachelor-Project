<template>
<div>
  <div class='uk-flex uk-flex-column uk-margin-top uk-margin-small-bottom'>
    <ul class='uk-list'>
      <li :class="{'toogle':toogle(study.type)}" v-for="(study,index) in $store.state.preference.faculty.studies" @click="next(study.type)">
        <v-btn outline class="secondary secondary--text">{{study.type}}</v-btn>
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
    },
    next(type) {
      this.$store.actions.updatePreference({
        type
      })
      this.$router.push({
        name: 'yearDisplay',
        params: this.$route.params
      })
    }
  }
}
</script>
<style>
</style>
