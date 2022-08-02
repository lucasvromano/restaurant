import { configureStore, combineReducers } from "@reduxjs/toolkit";
import customers from './reducers/customers/index'
import employees from './reducers/employees/index'
import users from './reducers/users/index'
import schedules from './reducers/schedules/index'
import services from './reducers/services/index'

const reducer = combineReducers({
  customers,
  employees,
  users,
  schedules,
  services
})

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export default store