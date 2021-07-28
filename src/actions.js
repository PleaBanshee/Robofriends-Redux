// contains user actions
import { apiCall } from './api/api'
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
 } from './constants'

// action for searchbox: receiving user input
//  payload: property that holds the actual data in a Redux action object
export const setSearchField = (text) => ({ type: CHANGE_SEARCHFIELD, payload: text })

// first request (pending), then the request either was successfull or failed
// dispatching actions to reducer
// Also a HOF
export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING }) // pending doesn't need a payload
  apiCall('https://jsonplaceholder.typicode.com/users')
    .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
}