<template>
<selector-wrapper title="Select Faculty">
  <div class='uk-container bottom--offset '>
    <div class="uk-flex uk-margin-top" uk-grid>
      <div v-for="faculty in $store.state.faculties" class="uk-width-auto@s uk-width-1-1@m">
        <resource @click.native="goNext(faculty)">
          <h4 class='uk-margin-remove'>{{faculty.name_en}}</h4>
        </resource>
      </div>
    </div>
    <navigation :onlyBack="true"></navigation>
  </div>
</selector-wrapper>
</template>
<script>
import Resource from './Resource.vue'
import Navigation from './Navigation.vue'
import SelectorWrapper from './SelectorWrapper.vue'

export default {
  name: "PreferenceSelector",
  components: {
    Navigation,
    SelectorWrapper,
    Resource
  },
  methods: {
    goNext(stuff) {
      this.$store.actions.selectFaculty(stuff)
      if (this.$store.state.isInEditMode) this.$router.go(-1)
      else {
        this.$router.push({
          name: 'study',
          params: {
            facultyId: stuff.id
          }
        })
      }
    }
  }
}
</script>
<style>

</style>
