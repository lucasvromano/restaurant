import { createAsyncThunk } from '@reduxjs/toolkit'
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { firebaseApp } from '../../../../firebase/firebaseApp';

export const createService = createAsyncThunk('services/post', async (payload: any, { rejectWithValue }) => {
  try {
    const db = getFirestore(firebaseApp);
    const userCollectionRef = collection(db, 'services');

    await addDoc(userCollectionRef, {
      service: payload.service,
      price: payload.price
    });

  } catch (err) {
    console.error(err)
    return rejectWithValue(err)
  }
})
