import { createAction, createReducer } from "@reduxjs/toolkit";

interface ICustomer {
  id: string,
  name: string,
  document: string,
  phone: string
  email: string,
  birthday: string
}

const INITIAL_STATE: ICustomer[] | (() => ICustomer[]) = []

export const addCustomer = createAction<ICustomer | []>('ADD_CUSTOMER');

export default createReducer(INITIAL_STATE, {
  [addCustomer.type]: (state, action) => ([...state, action.payload])
});

