import { configureStore } from '@reduxjs/toolkit'

import servicesReducer from './reducers/services'

const rootReducer = {
  services: servicesReducer
}

export type RootState = {
  services: [],
}

export default configureStore({ reducer: rootReducer })

