import { createSlice } from '@reduxjs/toolkit';

import { initialState } from '../initialState';
import { getAllCustomers } from '../handlers/getAllCustomers';

export const customersSlice = createSlice({
  name: 'customersSlice',
  initialState: initialState,
  reducers: {
    resetStore() {
      return initialState
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCustomers.pending, (state, action) => {
      state.loading = true
    });

    builder.addCase(getAllCustomers.fulfilled, (state, action) => {
      state.list = action.payload
      state.loading = false
    });
  }
})
