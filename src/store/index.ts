import { configureStore, combineReducers } from "@reduxjs/toolkit";
import customers from './reducers/customers/index'


const reducer = combineReducers({
  customers
})


const store = configureStore({
  reducer
})

export default store



// import { configureStore } from '@reduxjs/toolkit'

// import schedulesReducer from './reducers/schedules'
// import usersReducer from './reducers/users'
// import employeesReducer from './reducers/employees'
// // import customersReducer from './reducers/customers'
// import { customersSlice } from './reducers/customers/index'

// const rootReducer = {
//   schedules: schedulesReducer,
//   users: usersReducer,
//   employees: employeesReducer,
//   customers: customersSlice,
// }

export type RootState = {
  schedules: [],
  users: [],
  employees: [],
  customers: [],
}

// export default configureStore({ reducer: rootReducer })
