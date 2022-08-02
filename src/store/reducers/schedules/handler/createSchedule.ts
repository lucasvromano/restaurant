import { createAsyncThunk } from '@reduxjs/toolkit'
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { firebaseApp } from '../../../../firebase/firebaseApp';

export const createSchedule = createAsyncThunk('schedules/post', async (payload: any, { rejectWithValue }) => {
  try {
    const db = getFirestore(firebaseApp);
    const userCollectionRef = collection(db, 'schedules');

    await addDoc(userCollectionRef, {
      customer: payload.customer,
      employee: payload.employee,
      services: payload.services,
      date: payload.date
    });

  } catch (err) {
    console.error(err)
    return rejectWithValue(err)
  }
})
