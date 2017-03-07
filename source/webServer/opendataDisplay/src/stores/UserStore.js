import axios from 'axios'
import Vue from 'vue'
import SuperStore from '../flux/SuperStore.js'
import Store from '../flux/Store.js'
import utils from '../utils.js'

import FixedSizeStack from '../FixedSizeStack.js'

class UserStore extends Store {
  constructor() {
    super()

    this.state.users = []
  }

  fetchUsersSuccess(payload) {
    this.state.user.push(payload.user)
  }

  fetchUsersSuccess(payload) {
    this.state.users = payload.users
  }

  reduce(action) {
    switch (action.type) {
      case "USER_NEARBY":
        this.actions.featchUser(action.payload.userId)
      case "FETCH_USERS_SUCCESS":
        this.fetchUsersSuccess(action.payload)
        break;
      default:
    }
  }

  actions(dispacher, context) {
    return {
      featchUser(userId) {
        dispacher.dispatch({
              type: "FETCH_USER_LOADING"
            }
            // axios call
            axios.get(`http://localhost:8080/api/users/${userId}/preference`)
            .then((res) => {
              console.log(res)
              // dispacher.dispatch({
              //     type: "FETCH_USER_SUCCESS",
              //     payload: {}
              //   }
            })

          },
          fetchUsers() {
            dispacher.dispatch({
              type: "FETCH_USERS_SUCCESS",
              payload: {
                users: [{
                    displaName: "user1",
                    preferences: [{
                      station: 8591624,
                      connections: [7]
                    }]
                  },
                  {
                    displaName: "user2",
                    preferences: [{
                      station: 8588291,
                      connections: [5]
                    }]
                  }
                ]
              }
            })
          }
      }
    }
  }


  const userStore = new UserStore()

  SuperStore.addStore(userStore)
