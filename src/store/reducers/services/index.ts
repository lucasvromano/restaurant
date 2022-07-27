import { combineReducers } from '@reduxjs/toolkit'
import { servicesSlice } from './slices/servicesSlice'

const services = combineReducers({
  services: servicesSlice.reducer,
})

export default services
