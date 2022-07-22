import { configureStore } from '@reduxjs/toolkit'

import schedulesReducer from './reducers/schedules'
import usersReducer from './reducers/users'
import employeesReducer from './reducers/employees'

const rootReducer = {
  schedules: schedulesReducer,
  users: usersReducer,
  employees: employeesReducer,
}

export type RootState = {
  schedules: [],
  users: [],
  employees: [],
}

export default configureStore({ reducer: rootReducer })
