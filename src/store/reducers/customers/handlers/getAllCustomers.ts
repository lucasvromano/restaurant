import { createAsyncThunk } from '@reduxjs/toolkit'
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { firebaseApp } from '../../../../firebase/firebaseApp';

export const getAllCustomers = createAsyncThunk('customers/get', async (payload, { rejectWithValue }) => {
  try {
    const db = getFirestore(firebaseApp);
    const userCollectionRef = collection(db, 'customers');
    const dataDocs = await getDocs(userCollectionRef)
    const data = dataDocs.docs.map((doc) => ({
      id: doc.id,
      name: doc.data().name,
      document: doc.data().document,
      phone: doc.data().phone,
      email: doc.data().email,
      birthday: doc.data().birthday,
    }));

    return data

  } catch (err) {
    console.error(err)
    return rejectWithValue(err)
  }
})
