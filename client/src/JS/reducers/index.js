import { combineReducers } from 'redux'
import { userReducer } from './user'
import { profileReducer } from './profile'
export const rootReducer = combineReducers({ userReducer, profileReducer })
