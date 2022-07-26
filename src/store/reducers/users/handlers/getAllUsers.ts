import { createAsyncThunk } from '@reduxjs/toolkit'

export const getAllUsers = createAsyncThunk('users/get', async (payload, { rejectWithValue }) => {
  try {
    const baseUrl = 'http://localhost:3001/users';
    const requestOptions = {
      method: 'GET'
    }
    const fetchResponse = await fetch(baseUrl, requestOptions)
    return fetchResponse.json()

  } catch (err) {
    console.error(err)
    return rejectWithValue(err)
  }
})
