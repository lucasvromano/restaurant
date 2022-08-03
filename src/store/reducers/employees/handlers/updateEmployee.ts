import { createAsyncThunk } from '@reduxjs/toolkit'
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import { firebaseApp } from '../../../../firebase/firebaseApp';

export const updateEmployee = createAsyncThunk('employees/put', async (payload: any, { rejectWithValue }) => {
  try {
    const db = getFirestore(firebaseApp);
    const docRef = doc(db, 'employees', payload.id);
    setDoc(docRef, {
      id: payload.id,
      name: payload.name,
      document: payload.document,
      phone: payload.phone,
      email: payload.email,
      salary: payload.salary,
      birthday: payload.birthday,
    });

  } catch (err) {
    console.error(err)
    return rejectWithValue(err)
  }
})
