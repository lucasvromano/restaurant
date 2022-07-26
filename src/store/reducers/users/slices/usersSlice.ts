import { createSlice } from '@reduxjs/toolkit';

import { initialState } from '../initialState';
import { getAllUsers } from '../handlers/getAllUsers';

export const usersSlice = createSlice({
  name: 'usersSlice',
  initialState: initialState,
  reducers: {
    resetStore() {
      return initialState
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.pending, (state, action) => {
      state.loading = true
    });

    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.list = action.payload
      state.loading = false
    });
  }
})
