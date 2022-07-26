import { combineReducers } from '@reduxjs/toolkit'
import { customersSlice } from './slices/customersSlice'

const customers = combineReducers({
  customers: customersSlice.reducer,
})

export default customers
