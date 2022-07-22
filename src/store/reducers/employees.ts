import { createAction, createReducer } from "@reduxjs/toolkit";

interface IEmployees {
  id: string,
  name: string,
  document: string,
  phone: string
  email: string,
  salary: string,
  birthday: string
}

const INITIAL_STATE: IEmployees[] | (() => IEmployees[]) = []

export const addEmployee = createAction<IEmployees | []>('ADD_EMPLOYEE');

export default createReducer(INITIAL_STATE, {
  [addEmployee.type]: (state, action) => ([...state, action.payload])
});

