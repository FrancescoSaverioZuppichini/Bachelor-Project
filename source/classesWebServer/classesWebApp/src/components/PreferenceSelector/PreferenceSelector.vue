<template>
<div id="PreferenceSelector">
  <div class="uk-flex" uk-grid>
    <div v-for="faculty in $store.state.faculties" class="uk-width-auto@s uk-width-1-1@m">
      <div class="uk-card uk-margin-right uk-card-default uk-card-body">
        <!-- show loader  -->
        <div v-if="$store.state.preference.isLoading && $route.params.facultyId== faculty.id">
          <div class="uk-flex uk-flex-center">
            <div uk-spinner></div>
          </div>
        </div>
        <!-- show content -->
        <div v-else>
          <div @click="next(faculty)" v-if="!$store.state.preference.faculty || !($route.params.facultyId == faculty.id)">
            <h4 class='uk-margin-remove'>{{faculty.name_en}}</h4>
          </div>
          <h5 class='uk-margin-remove' v-else>{{faculty.name_en}}</h5>
          <!-- show nested content step -->
          <router-view v-if="$route.params.facultyId == faculty.id"></router-view>
        </div>
      </div>
    </div>

  </div>

</div>
</template>
<script>
import Navigation from './Navigation.vue'
export default {
  name: "PreferenceSelector",
  components: {
    Navigation
  },
  data() {
    return {
      transitionName: 'slide-left'
    }
  },
  methods: {
    next(faculty) {
      this.$store.actions.selectFaculty(faculty, true)
      this.$router.push({
        name: "studyDisplay",
        params: {
          facultyId: faculty.id
        }
      })
    }
  }
}
</script>
<style>
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
</style>
