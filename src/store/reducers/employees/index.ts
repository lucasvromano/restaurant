import { combineReducers } from '@reduxjs/toolkit'
import { employeesSlice } from './slices/employeesSlice'

const employees = combineReducers({
  employees: employeesSlice.reducer,
})

export default employees
