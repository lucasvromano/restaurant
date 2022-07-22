import { createAction, createReducer } from "@reduxjs/toolkit";

interface ISchedules {
  id: string,
  customer: string,
  employee: string,
  services: string
  price: string,
  date: string
}

// const INITIAL_STATE = [
//   {
//     id: '1',
//     customer: 'João da Silva',
//     employee: 'José de Oliveira',
//     services: [
//       'Corte de cabelo',
//       'Corte de barba',
//     ],
//     price: 'R$ 60,00',
//     date: '22/07/2022 - 09:00h'
//   },
//   {
//     id: '2',
//     customer: 'Edson de Alencar',
//     employee: 'José de Oliveira',
//     services: [
//       'Corte de cabelo'
//     ],
//     price: 'R$ 40,00',
//     date: '22/07/2022 - 10:15h'
//   }
// ]

const INITIAL_STATE: ISchedules[] | (() => ISchedules[]) = []

export const addSchedules = createAction<ISchedules | []>('ADD_SCHEDULES');

export default createReducer(INITIAL_STATE, {
  [addSchedules.type]: (state, action) => ([...state, action.payload])
});

