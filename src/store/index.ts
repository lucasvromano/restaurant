import { configureStore } from '@reduxjs/toolkit'

import schedulesReducer from './reducers/schedules'
import usersReducer from './reducers/users'
import employeesReducer from './reducers/employees'
import customersReducer from './reducers/customers'

const rootReducer = {
  schedules: schedulesReducer,
  users: usersReducer,
  employees: employeesReducer,
  customers: customersReducer,
}

export type RootState = {
  schedules: [],
  users: [],
  employees: [],
  customers: [],
}

export default configureStore({ reducer: rootReducer })
