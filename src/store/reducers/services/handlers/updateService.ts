import { createAsyncThunk } from '@reduxjs/toolkit'
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import { firebaseApp } from '../../../../firebase/firebaseApp';

export const updateService = createAsyncThunk('services/put', async (payload: any, { rejectWithValue }) => {
  try {
    const db = getFirestore(firebaseApp);
    const docRef = doc(db, 'services', payload.id);
    setDoc(docRef, {
      id: payload.id,
      service: payload.service,
      price: payload.price
    });

  } catch (err) {
    console.error(err)
    return rejectWithValue(err)
  }
})
