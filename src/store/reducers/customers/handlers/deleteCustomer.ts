import { createAsyncThunk } from '@reduxjs/toolkit'
import { deleteDoc, getFirestore, doc } from 'firebase/firestore';
import { firebaseApp } from '../../../../firebase/firebaseApp';

export const deleteCustomer = createAsyncThunk('customers/delete', async (payload: any, { rejectWithValue }) => {
  try {
    const db = getFirestore(firebaseApp);
    // const userCollectionRef = collection(db, 'customers');
    const deleteItem = doc(db, 'customers', payload)
    await deleteDoc(deleteItem);

  } catch (err) {
    console.error(err)
    return rejectWithValue(err)
  }
})
