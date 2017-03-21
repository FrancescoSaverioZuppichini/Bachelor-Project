import axios from 'axios'
import Vue from 'vue'
import utils from '../utils.js'
import { SuperStore, Store, Action } from 'flue-vue'
import FixedSizeStack from '../FixedSizeStack.js'

import cachedLocations from '../locations.js'
class LocationStore extends Store {
  constructor() {
    super()
    this.locationsCache = {}
    this.preferencesCache = {}
    // all the state fields MUST be directly define here
    // if want to add them in other functions you need to call
    // Vue.set(obj,key,value)
    this.state.locations = []
    this.state.displayLocationsStack = new FixedSizeStack(2, false)
    this.state.isLoadingNearbyLocations = false
    this.state.defaultLocationsOffset = 1
    this.state.usersLocations = []
  }

  // get all the connections that need to be inside a user preference
  getAvailableConnections(location, user) {
    if (!user)
      return location.stationboard
    let filteredStationboard = []
    // get the first preference for each connection selected by the user
    for (let availableConnetion of location.avariableConnections) {
      for (let connection of location.stationboard) {
        if (availableConnetion == connection.number) {
          filteredStationboard.push(connection)
          // get only the first math, if any
          break
        }
      }
    }

    return filteredStationboard
  }

  expireLocation(location) {
    clearTimeout(location.timeOutId)
  }

  setAutoDestruction(callback) {
    setTimeout(() => {
      callback()
      this.expireLocation(location)
    }, 2000)
  }

  createLocationForUser({ userPreferences }) {
    userPreferences.forEach((pref) => {
      // check if the location is already there -> TODO server side also!
      if (this.preferencesCache[pref.id])
        return
      let location = this.locationsCache[pref.station.number]
      // deep copy of location
      let newLocation = Object.assign({}, location)
      // add the connection, filter the bus number from the bus obj
      newLocation.avariableConnections = pref.buses.map(con => con.number)
      // assign same pointer to stationboard
      newLocation.stationboard = location.stationboard
      this.state.usersLocations.push(newLocation)
      // cache the result
      this.preferencesCache[pref.id] = pref
      // set auto-destruction

      this.setAutoDestruction(() => {
        // clear the cache
        delete this.preferencesCache[pref.id]
        // and the stored ones
        this.state.usersLocations.pop()
      })

    })
  }

  createLocationsForUsers({ users }) {
    // create a new location for each user by using the stored ones
    users.forEach(user => this.createLocationForUser(user))
  }

  putLocationInDisplayStack({ location }) {
    this.setAutoDestruction(() => {
      this.state.displayLocationsStack.removeItem(location)

    })

    this.state.displayLocationsStack.addItem(location)
  }

  fetchNearbyLocationsLoading() {
    this.state.isLoadingNearbyLocations = true
  }

  fetchNearbyLocationsSuccess({ locations }) {
    this.state.isLoadingNearbyLocations = false
    this.state.locations = locations
    locations.forEach(location => Vue.set(location, "stationboard", []))
    locations.forEach(location => this.locationsCache[location.id] = location)
    // get stationsBoards of all locations -> NO LAZY LOADING
    this.sStore.actions.fetchLocationsStationBoards(this.state.locations)

  }

  fetchLocationStationBoardLoading({ location }) {
    location.isLoadingStationBoard = true
  }

  fetchLocationStationBoardSuccess({ location, stationboard }) {
    location.isLoadingStationBoard = false
    // stationboard is already initialized on location -> we cannot override the default pointer
    location.stationboard.length = 0
    if (!stationboard)
      return
    stationboard.forEach(station => location.stationboard.push(station))
    // start the data pooling
    // location.timeOutId = setTimeout(() => {
    //   this.actions.fetchLocationStationBoard(location)
    // }, 10000)
  }

  reduce(action) {
    this.reduceMap(action, {
      FETCH_NEARBY_LOCATIONS_LOADING: this.fetchNearbyLocationsLoading,
      FETCH_NEARBY_LOCATIONS_SUCCESS: this.fetchNearbyLocationsSuccess,
      FETCH_LOCATION_STATIONBOARD_LOADING: this.fetchLocationStationBoardLoading,
      FETCH_LOCATION_STATIONBOARD_SUCCESS: this.fetchLocationStationBoardSuccess,
      PUT_LOCATION_IN_DISPLAY_STACK: this.putLocationInDisplayStack,
      FETCH_USERS_SUCCESS: this.createLocationsForUsers,
      FETCH_USER_PREFERENCE_SUCCESS: this.createLocationForUser

    })

  }

  actions(dispacher, context) {
    return {
      fetchNearbyLocations() {
        dispacher.dispatch(new Action("FETCH_NEARBY_LOCATIONS_LOADING"))
        // utils.getCurrentPosition()
        //   .then((pos) => {
        //     const options = {
        //       params: {
        //         x: pos.coords.latitude,
        //         y: pos.coords.longitude,
        //         type: "station"
        //       }
        //     }
        //     return axios.get('http://localhost:8080/api/opendata/locations', {
        //       params: options.params
        //     })
        //   })
        //   .then(({ data }) => {
        // data.stations
        dispacher.dispatch(new Action("FETCH_NEARBY_LOCATIONS_SUCCESS", { locations: cachedLocations.stations }))
        // })
      },
      fetchLocationsStationBoards(locations) {
        dispacher.dispatch(new Action("FETCH_LOCATIONS_STATIONBOARDS_LOADING"))
        // we are limited to 3 request per seconds
        this.fetchLocationStationBoard(locations[0])
        let waitTime = 0
        for (let i = 1; i < locations.length; i++) {
          waitTime += 340
          setTimeout(() => {
            this.fetchLocationStationBoard(locations[i])
          }, waitTime)
        }

      },
      fetchLocationStationBoard(location) {
        dispacher.dispatch(new Action("FETCH_LOCATION_STATIONBOARD_LOADING", { location }))
        axios.get('http://localhost:8080/api/opendata/stationboards', {
            params: {
              station: location.id,
              limit: 5
            }
          })
          .then(({ data }) => {
            dispacher.dispatch(new Action("FETCH_LOCATION_STATIONBOARD_SUCCESS", { stationboard: data.stationboard, location }))
          })
      },
      putLocationInDisplayStack(location) {
        dispacher.dispatch(new Action("PUT_LOCATION_IN_DISPLAY_STACK", { location }))
      }
    }
  }
}


const locationStore = new LocationStore()

export default locationStore
