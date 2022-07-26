import { combineReducers } from '@reduxjs/toolkit'
import { usersSlice } from './slices/usersSlice'

const users = combineReducers({
  users: usersSlice.reducer,
})

export default users
