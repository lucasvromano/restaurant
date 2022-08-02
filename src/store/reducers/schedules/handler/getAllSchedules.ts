import { createAsyncThunk } from '@reduxjs/toolkit'
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { firebaseApp } from '../../../../firebase/firebaseApp';

export const getAllSchedules = createAsyncThunk('schedules/get', async (payload, { rejectWithValue }) => {
  try {
    const db = getFirestore(firebaseApp);
    const userCollectionRef = collection(db, 'schedules');
    const dataDocs = await getDocs(userCollectionRef)
    const data = dataDocs.docs.map((doc) => ({
      id: doc.id,
      customer: doc.data().customer,
      employee: doc.data().employee,
      services: doc.data().services,
      date: doc.data().date
    }));

    return data;

  } catch (err) {
    console.error(err)
    return rejectWithValue(err)
  }
})
