import { createAction, createReducer } from "@reduxjs/toolkit";

interface IUser {
  id: string,
  employee: string,
  user: string,
  password: string,
}

// const INITIAL_STATE = [
//   {
//     id: '1',
//     employee: 'João da Silva',
//     user: 'joao.silva',
//     password: '123456',
//   },
//   {
//     id: '2',
//     employee: 'Cleiton Soares',
//     user: 'cleiton.soares',
//     password: '123456',
//   },
// ]

const INITIAL_STATE: IUser[] | (() => IUser[]) = []

export const addUser = createAction<IUser | []>('ADD_USER');

export default createReducer(INITIAL_STATE, {
  [addUser.type]: (state, action) => ([...state, action.payload])
});

