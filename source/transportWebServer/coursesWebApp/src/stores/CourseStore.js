import { Store, Action } from 'flue-vue'
import axios from 'axios'
import $ from 'jquery'
import api from '../api.js'
import router from '../router/index.js'

class CourseStore extends Store {
  constructor() {
    super()
    this.state = {}
    this.state.courses = { data: [], error: { hasError: false, msg: "" } }
    this.state.lastQuery = {}
    this.state.coursesCache = {}
  }

  fetchCoursesSuccess({ data, facultyId, year, type, studyType }) {

    $('#fullcalendar').fullCalendar('removeEvents')
    this.state.lastQuery = { year, type, studyType }
    // this.state.coursesCache[facultyId] = Object.assign({}, this.state.coursesCache[facultyId])
    // this.state.coursesCache[facultyId][type] = Object.assign({}, this.state.coursesCache[facultyId][type])
    // this.state.coursesCache[facultyId][type][studyType] = Object.assign({}, this.state.coursesCache[facultyId][type][studyType])
    // this.state.coursesCache[facultyId][type][studyType][year] = data
    this.state.courses.data = data
    router.push({name:'Display'})
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
        backgroundColor: schedule.background_color
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
  reduce(action) {
    this.reduceMap(action, {
      FETCH_COURSES_SUCCESS: this.fetchCoursesSuccess,
      FETCH_COURSES_SUCCESS_CACHE: this.fetchCourseSuccessCache,
      FETCH_SCHEDULES_SUCCESS: this.fetchSchedulesSuccess
    })
  }
  actions(dispatcher, context) {
    return {
      fetchCourses({ facultyId, year, type, studyType }) {
        dispatcher.dispatch(new Action("FETCH_COURSES_LOADING"))
        // if (context.state.coursesCache[facultyId] != undefined && context.state.coursesCache[facultyId][type][studyType] != undefined && context.state.coursesCache[facultyId][type][studyType][year] != undefined) {
        //   dispatcher.dispatch(new Action("FETCH_COURSES_SUCCESS_CACHE", { data: context.state.coursesCache[facultyId][type][year] }))
        // } else {
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
      }
    }
  }
}

const courseStore = new CourseStore()
export default courseStore
