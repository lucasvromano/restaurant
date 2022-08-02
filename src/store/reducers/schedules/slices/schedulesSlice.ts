import { createSchedule } from './../handler/createSchedule';
import { createSlice } from '@reduxjs/toolkit';
import { getAllSchedules } from '../handler/getAllSchedules';

import { initialState } from '../initialState';

export const schedulesSlice = createSlice({
  name: 'schedulesSlice',
  initialState: initialState,
  reducers: {
    resetStore() {
      return initialState
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllSchedules.pending, (state, action) => {
      state.loading = true
    });

    builder.addCase(getAllSchedules.fulfilled, (state, action) => {
      state.list = action.payload
      state.loading = false
    });

    builder.addCase(getAllSchedules.rejected, (state, action) => {
      state.loading = false
    });

    builder.addCase(createSchedule.pending, (state, action) => {
      state.loading = true
    });

    builder.addCase(createSchedule.fulfilled, (state, action) => {
      state.loading = false
    });

    builder.addCase(createSchedule.rejected, (state, action) => {
      state.loading = false
    });
  }
})
