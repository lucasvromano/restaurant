import { createAsyncThunk } from '@reduxjs/toolkit'
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import { firebaseApp } from '../../../../firebase/firebaseApp';

export const updateUser = createAsyncThunk('users/put', async (payload: any, { rejectWithValue }) => {
  try {
    const db = getFirestore(firebaseApp);
    const docRef = doc(db, 'users', payload.id);
    setDoc(docRef, {
      id: payload.id,
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
