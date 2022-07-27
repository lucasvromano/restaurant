import { createAsyncThunk } from '@reduxjs/toolkit'

export const createEmployee = createAsyncThunk('employee/post', async (payload: any, { rejectWithValue }) => {
  try {
    const baseUrl = 'http://localhost:3001/employees';
    const requestOptions = {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    }

    const fetchResponse = await fetch(baseUrl, requestOptions)
    return fetchResponse.json()
  } catch (err) {
    console.error(err)
    return rejectWithValue(err)
  }
})
