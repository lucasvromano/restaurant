import { createAsyncThunk } from '@reduxjs/toolkit'
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { firebaseApp } from '../../../../firebase/firebaseApp';

export const createUser = createAsyncThunk('users/post', async (payload: any, { rejectWithValue }) => {
  try {
    const db = getFirestore(firebaseApp);
    const userCollectionRef = collection(db, 'users');

    await addDoc(userCollectionRef, {
      userName: payload.userName,
      password: payload.password,
      employee: {
        id: payload.employee.id,
        name: payload.employee.name,
      }
    });

  } catch (err) {
    console.error(err)
    return rejectWithValue(err)
  }
})
