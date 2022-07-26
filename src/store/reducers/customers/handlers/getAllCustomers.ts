import { createAsyncThunk } from '@reduxjs/toolkit'

export const getAllCustomers = createAsyncThunk('customers', async (payload, { rejectWithValue }) => {
  try {
    const baseUrl = 'http://localhost:3001/customers';
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
