import { combineReducers } from '@reduxjs/toolkit'
import { schedulesSlice } from './slices/schedulesSlice'

const schedules = combineReducers({
  schedules: schedulesSlice.reducer,
})

export default schedules
