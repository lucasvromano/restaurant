import { getServiceById } from './../handlers/getServiceById';
import { createSlice } from '@reduxjs/toolkit';
import { createService } from '../handlers/createService';
import { deleteService } from '../handlers/deleteService';
import { getAllServices } from '../handlers/getAllServices';

import { initialState } from '../initialState';
import { updateService } from '../handlers/updateService';

export const servicesSlice = createSlice({
  name: 'servicesSlice',
  initialState: initialState,
  reducers: {
    resetStore() {
      return initialState
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllServices.pending, (state, action) => {
      state.loading = true
    });

    builder.addCase(getAllServices.fulfilled, (state, action) => {
      state.list = action.payload
      state.loading = false
    });

    builder.addCase(getAllServices.rejected, (state, action) => {
      state.loading = false
    });

    builder.addCase(createService.pending, (state, action) => {
      state.loading = true
    });

    builder.addCase(createService.fulfilled, (state, action) => {
      state.loading = false
    });

    builder.addCase(createService.rejected, (state, action) => {
      state.loading = false
    });

    builder.addCase(deleteService.pending, (state, action) => {
      state.loading = true
    });

    builder.addCase(deleteService.fulfilled, (state, action) => {
      state.loading = false
    });

    builder.addCase(deleteService.rejected, (state, action) => {
      state.loading = false
    });

    builder.addCase(getServiceById.pending, (state, action) => {
      state.loading = true
    });

    builder.addCase(getServiceById.fulfilled, (state, action) => {
      state.loading = false
    });

    builder.addCase(getServiceById.rejected, (state, action) => {
      state.loading = false
    });

    builder.addCase(updateService.pending, (state, action) => {
      state.loading = true
    });

    builder.addCase(updateService.fulfilled, (state, action) => {
      state.loading = false
    });

    builder.addCase(updateService.rejected, (state, action) => {
      state.loading = false
    });

  }
})
