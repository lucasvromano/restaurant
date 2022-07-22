import { configureStore } from '@reduxjs/toolkit'

import schedulesReducer from './reducers/schedules'
import usersReducer from './reducers/users'

const rootReducer = {
  schedules: schedulesReducer,
  users: usersReducer,
}

export type RootState = {
  schedules: [],
  users: [],
}

export default configureStore({ reducer: rootReducer })

