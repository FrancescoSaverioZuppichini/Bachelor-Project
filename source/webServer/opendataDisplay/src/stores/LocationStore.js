import axios from 'axios'
import Vue from 'vue'
import SuperStore from '../flux/SuperStore.js'
import Store from '../flux/Store.js'
import utils from '../utils.js'

import FixedSizeStack from '../FixedSizeStack.js'

class LocationStore extends Store {
  constructor() {
    super()
    this.locationsCache = {}
    // all the state fields MUST be directly define here
    // if want to add them in other functions you need to call
    // Vue.set(obj,key,value)
    this.state.locations = []
    this.state.displayLocationsStack = new FixedSizeStack(2, false)
    this.state.isLoadingNearbyLocations = false
    this.state.defaultLocationsOffset = 1
    this.state.usersLocations = []
  }

  // filter a given location by the user preference, if any
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
    this.state.displayLocationsStack.removeItem(location)
  }

  createLocationForUser(user) {
    user.preferences.forEach((pref) => {
      let location = this.locationsCache[pref.station]
      // deep copy of location
      let newLocation = Object.assign({}, location)
      newLocation.avariableConnections = pref.connections
      // assign same pointer to stationboard
      newLocation.stationboard = location.stationboard
      this.state.usersLocations.push(newLocation)
    })
  }

  createLocationsForUsers(payload) {
    var users = payload.users
    // create a new location for each user by using the stored ones
    users.forEach(user => this.createLocationForUser(user))
  }

  putLocationInDisplayStack(location) {
    // setTimeout(() => {
    //   this.expireLocation(location)
    // }, 2000)
    //prevent multiple item to be push
    this.state.displayLocationsStack.addItem(location)
  }

  fetchNearbyLocationsLoading() {
    this.state.isLoadingNearbyLocations = true
  }

  fetchNearbyLocationsSuccess(locations) {
    this.state.isLoadingNearbyLocations = false
    this.state.locations = locations
    locations.forEach(location => Vue.set(location, "stationboard", []))
    locations.forEach(location => this.locationsCache[location.id] = location)
    // get users preferences
    this.actions.fetchUsers()
    // get stationsBoards of all locations -> NO LAZY LOADING
    this.actions.fetchLocationsStationBoards(this.state.locations)
    // this.state.locations.forEach(location => this.actions.fetchLocationStationBoard(location))

  }

  fetchLocationStationBoardLoading(location) {
    location.isLoadingStationBoard = true
  }

  fetchLocationStationBoardSuccess(location, stationboard) {
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
    switch (action.type) {
      case "FETCH_NEARBY_LOCATIONS_LOADING":
        this.fetchNearbyLocationsLoading()
        break;
      case "FETCH_NEARBY_LOCATIONS_SUCCESS":
        this.fetchNearbyLocationsSuccess(action.locations)
        break;
      case "FETCH_LOCATION_STATIONBOARD_LOADING":
        this.fetchLocationStationBoardLoading(action.location)
        break;
      case "FETCH_LOCATION_STATIONBOARD_SUCCESS":
        this.fetchLocationStationBoardSuccess(action.location, action.stationboard)
        break;
      case "PUT_LOCATION_IN_DISPLAY_STACK":
        this.putLocationInDisplayStack(action.location)
        break;
      case "FETCH_USERS_SUCCESS":
        this.createLocationsForUsers(action.payload)
        break;
      default:
    }
  }

  actions(dispacher, context) {
    return {
      fetchNearbyLocations() {
        dispacher.dispatch({
          type: "FETCH_NEARBY_LOCATIONS_LOADING",
        })
        utils.getCurrentPosition()
          .then((pos) => {
            const options = {
              params: {
                x: pos.coords.latitude,
                y: pos.coords.longitude,
                type: "station"
              }
            }
            return axios.get('http://localhost:8080/api/opendata/locations', {
              params: options.params
            })
          })
          .then((res) => {
            dispacher.dispatch({
              type: "FETCH_NEARBY_LOCATIONS_SUCCESS",
              locations: res.data.stations
            })
          })
      },
      fetchLocationsStationBoards(locations) {
        dispacher.dispatch({
          type: "FETCH_LOCATIONS_STATIONBOARDS_LOADING"
        })
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
        dispacher.dispatch({
          type: "FETCH_LOCATION_STATIONBOARD_LOADING",
          location: location
        })
        axios.get('http://localhost:8080/api/opendata/stationboards', {
            params: {
              station: location.id,
              limit: 5
            }
          })
          .then((res) => {
            dispacher.dispatch({
              type: "FETCH_LOCATION_STATIONBOARD_SUCCESS",
              stationboard: res.data.stationboard,
              location: location
            })
          })
      },
      putLocationInDisplayStack(location) {
        dispacher.dispatch({
          type: "PUT_LOCATION_IN_DISPLAY_STACK",
          location: location
        })
      }
    }
  }
}


const locationStore = new LocationStore()

SuperStore.addStore(locationStore)
