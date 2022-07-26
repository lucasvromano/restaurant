import { createSlice } from '@reduxjs/toolkit';

import { initialState } from '../initialState';
import { getAllEmployees } from '../handlers/getAllEmployees';

export const employeesSlice = createSlice({
  name: 'employeesSlice',
  initialState: initialState,
  reducers: {
    resetStore() {
      return initialState
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllEmployees.pending, (state, action) => {
      state.loading = true
    });

    builder.addCase(getAllEmployees.fulfilled, (state, action) => {
      state.list = action.payload
      state.loading = false
    });
  }
})
