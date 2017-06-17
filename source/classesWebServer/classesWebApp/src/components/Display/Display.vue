<template>
<div class="full-h uk-flex uk-flex-column uk-background-muted" id='display'>
  <!-- <h1 class="uk-text-center" v-if="$store.state.lastQuery.studyType">{{`${$store.state.lastQuery.studyType.name_en}, ${$store.state.lastQuery.year}st year` }}</h1> -->
  <div class="uk-flex uk-margin-top uk-margin-left" uk-grid>
    <div class="uk-width-1-1 uk-width-3-4@m ">
      <div id='fullcalendar'></div>
    </div>
    <!-- <div class="uk-flex--grow"></div> -->
    <div class="uk-margin-large-bottom course-selector__container uk-width-1-1 uk-width-1-4@m">
      <course-selector></course-selector>
    </div>
    <div class='uk-width-1-1 uk-margin-left uk-margin-right'>
      <div class='uk-flex' uk-grid>
        <!-- <div v-for="course in $store.state.selectedCourses()">
          <course :course='course'>
          </course>
        </div> -->
      </div>
    </div>
  </div>
</div>
</template>
<script>
import axios from 'axios'
import fullcalendar from 'fullcalendar'
import moment from 'moment'
import $ from 'jquery'
import {
  SuperStore,
  Action
} from 'flue-vue'

import Course from '../Course/Course.vue'
import CourseSelector from './CourseSelector/CourseSelector.vue'

export default {
  name: 'Display',
  components: {
    CourseSelector,
    Course
  },
  mounted() {
    this.$store.state.navigation.BASE_URL = this.$route.path
    this.$store.state.navigation._urls = ['studyDisplay', 'yearDisplay', 'studyTypeDisplay']
    this.$store.state.isInDisplay = true
    $('body').click(() => {
      this.$store.dispatcher.dispatch(new Action("USER_INTERACTION"))
    })
    // this.$store.actions.initializeSchedules()
    const displayId = this.$route.params.id
    const appId = 1
    this.$store.actions.fetchDisplay(displayId)
    // test user
    // setTimeout(() => {
    //   this.$store.dispatcher.dispatch(new Action('USER_NEARBY', {
    //     userId: 1,
    //     color: 'blue',
    //     displayId: 1
    //   }))
    // }, 500)

  }
}
</script>
<style>
#display {
  height: 100vh;
  overflow: hidden;
}

.fc-view-container {
  background-color: white;
}

.btn--toogle {
  border-color: black !important;
  color: black !important;
}

.fc-time-grid-event.fc-v-event.fc-event {
  opacity: 0.9 !important
}

.fc-event {
  border-radius: 0px !important;
  border: 0px !important;
}

.fc-time-grid-event.fc-v-event.fc-event {
  opacity: 0.9 !important
}

.fc-event .fc-bg {
  opacity: 0 !important;
}


.fc button {
  border-radius: 0px !important;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0 30px;
  /* height: 2.1em; */
  font-size: inherit;
  /* white-space: nowrap; */
  cursor: pointer;
}

.btn-circle {
  width: 30px;
  height: 30px;
  text-align: center;
  padding: 6px 0;
  font-size: 12px;
  line-height: 1.428571429;
  border-radius: 15px;
}

.btn-circle.btn-lg {
  width: 50px;
  height: 50px;
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.33;
  border-radius: 25px;
}

.btn-circle.btn-xl {
  width: 70px;
  height: 70px;
  padding: 10px 16px;
  font-size: 24px;
  line-height: 1.33;
  border-radius: 35px;
}

.course-selector__container {}
</style>
