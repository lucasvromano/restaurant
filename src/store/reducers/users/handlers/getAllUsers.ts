import { createAsyncThunk } from '@reduxjs/toolkit'
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { firebaseApp } from '../../../../firebase/firebaseApp';

export const getAllUsers = createAsyncThunk('users/get', async (payload, { rejectWithValue }) => {
  try {
    const db = getFirestore(firebaseApp);
    const userCollectionRef = collection(db, 'users');
    const dataDocs = await getDocs(userCollectionRef)
    const data = dataDocs.docs.map((doc) => ({
      id: doc.id,
      userName: doc.data().userName,
      password: doc.data().password,
      employee: doc.data().employee,
    }));

    return data;

  } catch (err) {
    console.error(err)
    return rejectWithValue(err)
  }
})
