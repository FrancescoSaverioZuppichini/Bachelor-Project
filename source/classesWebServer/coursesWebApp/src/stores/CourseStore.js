import { Store, Action } from 'flue-vue'
import axios from 'axios'
import $ from 'jquery'
import api from '../api.js'
import router from '../router/index.js'
import Vue from 'vue'

class CourseStore extends Store {
  constructor() {
    super()
    this.state = {}
    this.state.courses = { data: [], error: { hasError: false, msg: "" } }
    this.state.lastQuery = {}
    this.state.coursesCache = {}
    this.state.selectedCourses = () => this.state.courses.data.filter(course => course.selected)
  }

  fetchCoursesSuccess({ data, facultyId, year, type, studyType }) {
    $('#fullcalendar').fullCalendar('removeEvents')
    this.state.lastQuery = { year, type, studyType: this.state.preference.studyType }
    this.state.courses.data = data
    router.push({ name: 'Display' })
    this.state.courses.data.forEach(course => this.sStore.actions.fetchSchedules(course))
  }

  fetchSchedulesSuccess({ data, course }) {
    course.schedules = data
    course.events = []
    for (let schedule of course.schedules) {
      const event = {
        start: schedule.start,
        title: course.name_en,
        end: schedule.end,
        textColor: schedule.font_color,
        backgroundColor: schedule.background_color,
        course: course
      }
      course.events.push(event)
    }

    this.addEventsToFullCalendar(course.events)
  }

  fetchCourseSuccessCache({ data }) {
    for (let course of data) {
      this.addEventsToFullCalendar(course.events)
    }
  }

  addEventsToFullCalendar(events) {
    const fullCalendarEl = $('#fullcalendar')
    fullCalendarEl.fullCalendar('renderEvents', events, true);

  }

  deselectAllCourse() {
    this.state.selectedCourses().forEach(course => course.selected = false)
  }

  onFetchCourseSuccess({ data, selectedCourse }) {
    this.deselectAllCourse()
    selectedCourse.professor_full_name = data.professor_full_name
    selectedCourse.description_it = data.description_it
    Vue.set(selectedCourse, 'selected', true)
  }

  onDisplayUserPreference({ userPreferences }) {
    const userPreference = userPreferences[0]
    const query = this.sStore.PreferenceStore.makeQueryFromPreference(userPreference)
    this.sStore.actions.fetchCourses(query)
  }

  reduce(action) {
    this.reduceMap(action, {
      FETCH_COURSE_SUCCESS: this.onFetchCourseSuccess,
      FETCH_COURSE_IN_CACHE: this.onFetchCourseSuccess,
      FETCH_COURSES_SUCCESS: this.fetchCoursesSuccess,
      FETCH_COURSES_SUCCESS_CACHE: this.fetchCourseSuccessCache,
      FETCH_SCHEDULES_SUCCESS: this.fetchSchedulesSuccess,
      DISPLAY_USER_PREFERENCE: this.onDisplayUserPreference
    })
  }

  actions(dispatcher, context) {
    return {
      fetchCourses({ facultyId, year, type, studyType }) {
        dispatcher.dispatch(new Action("FETCH_COURSES_LOADING"))

        facultyId = facultyId || ""
        year = year || ""
        type = type || ""
        studyType = studyType || ""

        api.course.search({ facultyId, year, type, studyType })
          .then(({ data }) => {
            dispatcher.dispatch(new Action("FETCH_COURSES_SUCCESS", { data, facultyId, year, type, studyType }))
          })
      },
      fetchSchedules(course) {
        dispatcher.dispatch(new Action("FETCH_SCHEDULES_LOADING"))
        api.course.fetchSchedules(course)
          .then(({ data }) => dispatcher.dispatch(new Action("FETCH_SCHEDULES_SUCCESS", { data, course })))
      },
      fetchCourse(course) {
        if (course.description_it) dispatcher.dispatch(new Action("FETCH_COURSE_IN_CACHE", { data: course, selectedCourse: course }))
        else {
          dispatcher.dispatch(new Action("FETCH_COURSE_LOADING"))
          api.course.fetchCourse(course.id)
            .then(({ data }) => dispatcher.dispatch(new Action("FETCH_COURSE_SUCCESS", { data, selectedCourse: course })))
        }
      }
    }
  }
}

const courseStore = new CourseStore()
export default courseStore
