import { createAsyncThunk } from '@reduxjs/toolkit'
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { firebaseApp } from '../../../../firebase/firebaseApp';

export const getCustomerById = createAsyncThunk('customers/get/id', async (payload: any, { rejectWithValue }) => {
  try {
    const db = getFirestore(firebaseApp);
    const docRef = doc(db, "customers", payload);
    const docCurrent = await getDoc(docRef);

    if (!docCurrent.exists()) {
      console.log(`ID: ${payload} not found`)
    }

    return docCurrent.data()


  } catch (err) {
    console.error(err)
    return rejectWithValue(err)
  }
})