import axios from 'axios'
import Vue from 'vue'
import utils from '../utils.js'
import { SuperStore, Store, Action } from 'flue-vue'
import FixedSizeStack from '../FixedSizeStack.js'

import api from '../api.js'

import cachedLocations from '../locations.js'
class LocationStore extends Store {
  constructor() {
    super()
    this.state.locationsCache = {}
    this.state.locations = []
    this.state.displayLocationsStack = new FixedSizeStack(2, false)
    this.state.isLoadingNearbyLocations = false
    this.state.usersLocations = []
  }

  getDefaultLocation() {
    return this.state.locationsCache[this.state.display.defaultStation.number]
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
    }, 1000)
  }
  // TODO refactor
  createLocationForUser(pref) {
    let location = this.state.locationsCache[pref.station.id]
    if (!location)
      return
    // deep copy of location
    let newLocation = Object.assign({}, location)
    newLocation.isUser = true
    // add the connection, filter the bus number from the bus obj
    newLocation.avariableConnections = pref.buses.map(con => con.number)
    // assign same pointer to stationboard
    newLocation.stationboard = location.stationboard
    pref.buses.forEach(prefBus => {
      location.stationboard.forEach(bus => {
        if (prefBus.number == bus.number && prefBus.to == bus.to) {
          Vue.set(bus, 'triggered', true)
          // toggle state
          this.setAutoDestruction(() => {
            Vue.set(bus, 'triggered', false)
          })
        }
      })
    })
    // cache the result
    // // set auto-destruction
    // this.setAutoDestruction(() => {
    //   // clear the cache
    //   // and the stored ones
    //   this.state.usersLocations.pop()
    // })
    location.stationboard.forEach(bus => {

    })
    if (location.open) {}
    // Vue.set(location.stationboard[0], 'triggered', true)
    else {
      this.state.usersLocations.push(newLocation)
    }
  }

  createLocationsForUsers({ userPreferences }) {
    // create a new location for each user by using the stored ones
    userPreferences.forEach(pref => this.createLocationForUser(pref))
  }

  displayLocation({ location }, destroy, putIntoStack) {
    destroy = destroy == null ? true : destroy
    putIntoStack = putIntoStack == null ? true : destroy
    if (destroy) {
      // this.setAutoDestruction(() => {
      //   this.state.displayLocationsStack.removeItem(location)
      //   Vue.set(location, 'open', false)
      //   clearInterval(location.timeOutId)
      // })
    }
    if (location.number == this.state.display.defaultStation.number) { location.removable = false }
    if (putIntoStack) this.state.displayLocationsStack.addItem(location)
    Vue.set(location, 'open', true)
    // start data pooling
    location.timeOutId = setInterval(() => {
      this.sStore.actions.fetchLocationStationBoard(location)
    }, 50000000)
  }

  fetchNearbyLocationsLoading() {
    this.state.isLoadingNearbyLocations = true
  }

  fetchNearbyLocationsSuccess({ locations }) {
    this.state.isLoadingNearbyLocations = false
    this.state.locations = locations
    locations.forEach(location => {
      Vue.set(location, "stationboard", [])
      Vue.set(this.state.locationsCache, [location.id], location)

      if (location.number == this.state.display.defaultStation.number) {
        // override the pointer in order to get the fully updated location
        this.state.display.defaultStation = location
        // show the default location
        this.displayLocation({ location }, false, false)
        location.default = true
      }
    })
    // get stationsBoards of all locations -> NO LAZY LOADING
    this.sStore.actions.fetchLocationsStationBoards(this.state.locations)

  }

  fetchLocationStationBoardLoading({ location }) {
    location.isLoadingStationBoard = true
  }

  fetchLocationStationBoardSuccess({ location, stationboard }) {
    location.isLoadingStationBoard = false
    if (!stationboard)
      return
    // update the stationboard in order to not override the use preference info
    if (location.stationboard.length <= 0) location.stationboard = stationboard
    else {
      for (let i = 0; i < stationboard.length; i++) {
        location.stationboard[i] = Object.assign(location.stationboard[i], stationboard[i])
      }
    }
  }

  reduce(action) {
    this.reduceMap(action, {
      FETCH_NEARBY_LOCATIONS_LOADING: this.fetchNearbyLocationsLoading,
      FETCH_NEARBY_LOCATIONS_SUCCESS: this.fetchNearbyLocationsSuccess,
      FETCH_LOCATION_STATIONBOARD_LOADING: this.fetchLocationStationBoardLoading,
      FETCH_LOCATION_STATIONBOARD_SUCCESS: this.fetchLocationStationBoardSuccess,
      FETCH_LOCATION_STATIONBOARD_ERROR: (({ location }) => { location.isLoadingStationBoard = false }),
      PUT_LOCATION_IN_DISPLAY_STACK: this.displayLocation,
      DISPLAY_USER_PREFERENCE: this.createLocationsForUsers
    })
  }

  actions(dispatcher, context) {
    return {
      fetchNearbyLocations() {
        dispatcher.dispatch(new Action("FETCH_NEARBY_LOCATIONS_LOADING"))
        api.fetchNearbyLocations()
          .then(({ data }) => {
            // remove Lugano, from every station since we know where we are
            data.forEach(location => location.name = location.name.replace('Lugano,', ''))
            return data
          })
          .then((data) => {
            console.log(data);
            dispatcher.dispatch(new Action("FETCH_NEARBY_LOCATIONS_SUCCESS", { locations: data }))
          })
      },
      fetchLocationsStationBoards(locations) {
        dispatcher.dispatch(new Action("FETCH_LOCATIONS_STATIONBOARDS_LOADING"))
        locations.forEach(location => this.fetchLocationStationBoard(location))

      },
      fetchLocationStationBoard(location) {
        dispatcher.dispatch(new Action("FETCH_LOCATION_STATIONBOARD_LOADING", { location }))
        api.fetchLocationStationBoard(location)
          .then(({ data }) => {
            dispatcher.dispatch(new Action("FETCH_LOCATION_STATIONBOARD_SUCCESS", { stationboard: data.stationboard, location }))
          })
          .catch((err) => { dispatcher.dispatch(new Action('FETCH_LOCATION_STATIONBOARD_ERROR', { location })) })
      },
      putLocationInDisplayStack(location) {
        dispatcher.dispatch(new Action("PUT_LOCATION_IN_DISPLAY_STACK", { location }))
      }
    }
  }
}


const locationStore = new LocationStore()

export default locationStore
