import { createAsyncThunk } from '@reduxjs/toolkit'

export const getAllSchedules = createAsyncThunk('schedules/get', async (payload, { rejectWithValue }) => {
  try {
    const baseUrl = 'http://localhost:3001/schedules';
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
