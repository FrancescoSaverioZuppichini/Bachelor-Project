<template>
<selector-wrapper title="Select Faculty">
  <div class='uk-container bottom--offset '>
    <div class="uk-flex uk-margin-top" uk-grid>
      <div v-for="faculty in $store.state.faculties" class="uk-width-auto@s uk-width-1-1@m">
        <resource @click.native="$store.actions.selectFaculty(faculty,false)">
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
  }
}
</script>
<style>

</style>
