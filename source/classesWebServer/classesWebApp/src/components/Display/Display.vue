<template>
<div class="full-h uk-flex uk-flex-column uk-background-muted" id='display'>
  <h4 class="uk-text-center uk-margin-small-top" v-if="$store.state.lastQuery.studyType">{{`${$store.state.lastQuery.studyType}, ${$store.state.lastQuery.year}th year` }}</h4>
  <div class="uk-flex uk-margin-top uk-margin-left f-h" uk-grid>
    <div class="uk-width-1-1 uk-width-3-4@m f-h">
      <div id='fullcalendar'></div>
    </div>
    <!-- <div class="uk-flex--grow"></div> -->
    <!-- <div class="uk-margin-large-bottom course-selector__container uk-width-1-1 uk-width-1-4@m">
      <course-selector></course-selector>
    </div> -->
    <div class="uk-margin-large-bottom course-selector__container uk-width-1-4">
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
    this.createCalendar()

    var calHeight = $(window).height() * 0.90;
    this.updateCalendarSize(calHeight)

    window.onresize = () => {
      var calHeight = $(window).height() * 0.90;
      this.updateCalendarSize(calHeight)
    }
    var promises = [this.$store.actions.fetchFaculties(), this.$store.actions.fetchYears()]

    Promise.all(promises)
      .then(() => {
        // little hack, create a random query ;)
        this.$store.state.schedules[0]()
      })
    // test user
    // setTimeout(() => {
    //   this.$store.dispatcher.dispatch(new Action('USER_NEARBY', {
    //     userId: 1,
    //     color: 'blue',
    //     displayId: 1
    //   }))
    // }, 500)

  },

  methods: {
    updateCalendarSize(calHeight) {
      $('#fullcalendar').fullCalendar('option', 'height', calHeight);

      var bottomDifference = $('#fullcalendar')[0].getBoundingClientRect().bottom - $('.fc-slats')[0].getBoundingClientRect().bottom;
      var currentHeight = $(".fc-slats > table").css("height");

      var newHeight = parseInt(currentHeight) + bottomDifference;
      $(".fc-slats > table").css("height", newHeight);
    },
    createCalendar() {
      $('#fullcalendar').fullCalendar({
        eventClick: (calEvent, jsEvent, view) => {
          const course = calEvent.course
          this.$store.actions.fetchCourse(course)
        },
        viewRender: (view, element) => {
          console.log('dciaone, ***');
          this.updateCalendarSize($(window).height() * 0.90)

        },
        that: this,
        // contentHeight: "auto",
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'agendaWeek,month'
        },
        views: {
          listWeek: {
            buttonText: 'list week'
          },
          listMonth: {
            buttonText: 'list month'
          },
          listYear: {
            buttonText: 'list year'
          }
        },
        defaultView: 'agendaWeek',
        allDaySlot: false,
        minTime: "08:00:00",
        maxTime: "18:00:00",
        // height: 'auto',
        weekends: false,
        eventTextColor: "Black",
      })
    }
  }
}
</script>
<style>
#display {
  height: 100vh;
  overflow: hidden;
}

.fc-center>h2 {
  font-size: 24px !important;
}

a.fc-time-grid-event.fc-v-event.fc-event {
  border: none
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








/*
td.fc-widget-content:first{
  padding-top: 0px !important;
  padding-bottom: 8px;
}

td.fc-widget-content:last{
  padding-bottom: 0px !important;
  padding-top: 8px;
}
td.fc-widget-content{
  padding-top: 8px;
  padding-bottom: 8px;

}*/

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
