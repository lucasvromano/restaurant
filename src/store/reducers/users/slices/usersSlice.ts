import { createSlice } from '@reduxjs/toolkit';

import { initialState } from '../initialState';
import { getAllUsers } from '../handlers/getAllUsers';
import { createUser } from '../handlers/createUser';
import { deleteUser } from '../handlers/deleteUser';

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

    builder.addCase(getAllUsers.rejected, (state, action) => {
      state.loading = false
    });

    builder.addCase(createUser.pending, (state, action) => {
      state.loading = true
    });

    builder.addCase(createUser.fulfilled, (state, action) => {
      state.loading = false
    });

    builder.addCase(createUser.rejected, (state, action) => {
      state.loading = false
    });

    builder.addCase(deleteUser.pending, (state, action) => {
      state.loading = true
    });

    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.loading = false
    });

    builder.addCase(deleteUser.rejected, (state, action) => {
      state.loading = false
    });
  }
})
