import { createAsyncThunk } from '@reduxjs/toolkit'
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { firebaseApp } from '../../../../firebase/firebaseApp';

export const getAllServices = createAsyncThunk('services/get', async (payload, { rejectWithValue }) => {
  try {
    const db = getFirestore(firebaseApp);
    const userCollectionRef = collection(db, 'services');
    const dataDocs = await getDocs(userCollectionRef)
    const data = dataDocs.docs.map((doc) => ({
      id: doc.id,
      service: doc.data().service,
      price: doc.data().price
    }));

    return data

  } catch (err) {
    console.error(err)
    return rejectWithValue(err)
  }
})
