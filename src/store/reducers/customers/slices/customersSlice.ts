import { updateCustomer } from './../handlers/updateCustomer';
import { getCustomerById } from './../handlers/getCustomerById';
import { createSlice } from '@reduxjs/toolkit';

import { initialState } from '../initialState';
import { getAllCustomers } from '../handlers/getAllCustomers';
import { createCustomer } from '../handlers/createCustomer';
import { deleteCustomer } from '../handlers/deleteCustomer';

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

    builder.addCase(getAllCustomers.rejected, (state, action) => {
      state.loading = false
    });

    builder.addCase(createCustomer.pending, (state, action) => {
      state.loading = true
    });

    builder.addCase(createCustomer.fulfilled, (state, action) => {
      state.loading = false
    });

    builder.addCase(createCustomer.rejected, (state, action) => {
      state.loading = false
    });

    builder.addCase(deleteCustomer.pending, (state, action) => {
      state.loading = true
    });

    builder.addCase(deleteCustomer.fulfilled, (state, action) => {
      state.loading = false
    });

    builder.addCase(deleteCustomer.rejected, (state, action) => {
      state.loading = false
    });

    builder.addCase(getCustomerById.pending, (state, action) => {
      state.loading = true
    });

    builder.addCase(getCustomerById.fulfilled, (state, action) => {
      state.loading = false
    });

    builder.addCase(getCustomerById.rejected, (state, action) => {
      state.loading = false
    });

    builder.addCase(updateCustomer.pending, (state, action) => {
      state.loading = true
    });

    builder.addCase(updateCustomer.fulfilled, (state, action) => {
      state.loading = false
    });

    builder.addCase(updateCustomer.rejected, (state, action) => {
      state.loading = false
    });
  }
})
