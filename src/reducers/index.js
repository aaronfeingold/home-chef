import usersReducer from './usersReducer.js'
import dummyReducer from './dummyReducer.js'
import { combineReducers } from 'redux';

export default combineReducers({
  usersReducer, dummyReducer
})