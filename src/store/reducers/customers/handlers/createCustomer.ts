import { createAsyncThunk } from '@reduxjs/toolkit'
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { firebaseApp } from '../../../../firebase/firebaseApp';

export const createCustomer = createAsyncThunk('customers/post', async (payload: any, { rejectWithValue }) => {
  try {
    const db = getFirestore(firebaseApp);
    const userCollectionRef = collection(db, 'customers');
    
    await addDoc(userCollectionRef, {
      name: payload.name,
      document: payload.document,
      phone: payload.phone,
      email: payload.email,
      birthday: payload.birthday,
    });

  } catch (err) {
    console.error(err)
    return rejectWithValue(err)
  }
})
