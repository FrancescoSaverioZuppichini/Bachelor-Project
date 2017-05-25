import { Store, Action } from 'flue-vue'
import axios from 'axios'
import utils from '../utils.js'
import router from '../router/index.js'

// TODO put it into a config file for easy access
const options = {
  THRESHOLD: 1000,
  REPEAT_EVERY: 200000
}

class ScheduleStore extends Store {
  constructor() {
    super()
    this.state = {}
    this.state.scheduledIds = []
    this.state.schedules = [this.randomCourseSearchSchedule.bind(this)]
  }

  createRandomQuery() {
    const randomFaculty = utils.selectRandomItemFromArray(this.sStore.state.faculties)
    const randomStudy = utils.selectRandomItemFromArray(randomFaculty.studies)
    const randomStudyType = utils.selectRandomItemFromArray(randomStudy.studyTypes)
    const randomYear = utils.selectRandomItemFromArray(randomStudy.years)

    return {
      facultyId: randomFaculty.id,
      type: randomStudy.type,
      studyType: randomStudyType.name_en,
      year: randomYear.yearNumber
    }
  }

  randomCourseSearchSchedule() {
    this.sStore.actions.fetchCourses(this.createRandomQuery())
  }

  initialiaze() {

    if(this.sStore.state.isInDisplay) this.state.scheduledIds.push(setTimeout(() => { this.sStore.actions.startSchedules() }, options.THRESHOLD))
  }

  startSchedules() {
    this.state.schedules.forEach(schedule => this.state.scheduledIds.push(setInterval(schedule, options.REPEAT_EVERY)))
  }

  onUserInteraction() {
    this.state.scheduledIds.forEach(id => clearInterval(id))
    this.initialiaze()
  }

  reduce(action) {
    this.reduceMap(action, {
      INITIALIZE_SCHEDULES: this.initialiaze,
      USER_INTERACTION: this.onUserInteraction,
      START_SCHEDULES: this.startSchedules
    })
  }

  actions(dispatcher, context) {
    return {
      initializeSchedules() {
        dispatcher.dispatch(new Action("INITIALIZE_SCHEDULES"))
      },
      startSchedules() {
        dispatcher.dispatch(new Action("START_SCHEDULES"))
      }
    }
  }
}

const scheduleStore = new ScheduleStore()
export default scheduleStore
