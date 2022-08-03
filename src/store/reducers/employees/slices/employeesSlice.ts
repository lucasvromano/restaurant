import { createSlice } from '@reduxjs/toolkit';

import { initialState } from '../initialState';
import { getAllEmployees } from '../handlers/getAllEmployees';
import { createEmployee } from '../handlers/createEmployee';
import { deleteEmployee } from '../handlers/deleteEmployee';
import { getEmployeeById } from '../handlers/getEmployeeById';

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

    builder.addCase(getAllEmployees.rejected, (state, action) => {
      state.loading = false
    });

    builder.addCase(createEmployee.pending, (state, action) => {
      state.loading = true
    });

    builder.addCase(createEmployee.fulfilled, (state, action) => {
      state.loading = false
    });

    builder.addCase(createEmployee.rejected, (state, action) => {
      state.loading = false
    });

    builder.addCase(deleteEmployee.pending, (state, action) => {
      state.loading = true
    });

    builder.addCase(deleteEmployee.fulfilled, (state, action) => {
      state.loading = false
    });

    builder.addCase(deleteEmployee.rejected, (state, action) => {
      state.loading = false
    });

    builder.addCase(getEmployeeById.pending, (state, action) => {
      state.loading = true
    });

    builder.addCase(getEmployeeById.fulfilled, (state, action) => {
      state.loading = false
    });

    builder.addCase(getEmployeeById.rejected, (state, action) => {
      state.loading = false
    });
  }
})
