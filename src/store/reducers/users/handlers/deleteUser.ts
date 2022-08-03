import { createAsyncThunk } from '@reduxjs/toolkit'
import { deleteDoc, getFirestore, doc } from 'firebase/firestore';
import { firebaseApp } from '../../../../firebase/firebaseApp';

export const deleteUser = createAsyncThunk('users/delete', async (payload: any, { rejectWithValue }) => {
  try {
    const db = getFirestore(firebaseApp);
    const deleteItem = doc(db, 'users', payload)
    await deleteDoc(deleteItem);
  } catch (err) {
    console.error(err)
    return rejectWithValue(err)
  }
})
