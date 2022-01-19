// contains reducers that returns output
// consists of pure functions
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
 } from './constants';

 // initial state for searchbox
const initialStateSearch = {
  searchField: ''
}

// reducer function: searching for robots
// default parameters provided to function
export const searchRobots = (state=initialStateSearch, action={}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      //  Object.assign: copies all enumerable own properties from one or more source objects to a target object
      //  Retuns the target object, in this case the action type and value
      return Object.assign({}, state, {searchField: action.payload})
    default:
      return state
  }
}

const initialStateRobots = {
  robots: [],
  isPending: false
}

// requesting robots reducer
// default parameters passed to function
export const requestRobots = (state=initialStateRobots, action={}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return Object.assign({}, state, {isPending: true})
    case REQUEST_ROBOTS_SUCCESS:
      return Object.assign({}, state, {robots: action.payload, isPending: false})
    case REQUEST_ROBOTS_FAILED:
      return Object.assign({}, state, {error: action.payload})
    default:
      return state;
  }
}
