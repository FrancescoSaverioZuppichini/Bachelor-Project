import { Store, Action } from 'flue-vue'
import axios from 'axios'
import api from '../api.js'

class YearStore extends Store {
  constructor() {
    super()
    this.state = {}
    this.state.years = []
  }

  onYearsSuccess({ data }) {
    data.forEach(data => data.years.sort())
    this.state.years = data

    // var years = []
    // var temp = {}
    // for (let year of data) {
    //   if (temp[year.type] == undefined)
    //     temp[year.type] = []
    //   temp[year.type].push(year.yearNumber)
    // }
    // for (let key in temp) {
    //   let yearTemp = { type: key, yearNumbers: temp[key] }
    //   yearTemp.yearNumbers.sort()
    //   this.state.years.push(yearTemp)
    // }
    // console.log(this.state.years);
    // console.log(temp);
    // this.state.years = data
  }

  reduce(action) {
    this.reduceMap(action, {
      FETCH_YEARS_SUCCESS: this.onYearsSuccess
    })
  }
  // actions takes the dispacher and the store back from the superStore,
  // so we can call our function as soon as we dispatch
  actions(dispatcher, context) {
    return {
      fetchYears() {
        dispatcher.dispatch(new Action("FETCH_YEARS_LOADING"))
        return api.year.fetchYears()
          .then(({ data }) => {
            dispatcher.dispatch(new Action("FETCH_YEARS_SUCCESS", { data }))
          })
      }
    }
  }
}

const yearStore = new YearStore()

export default yearStore
