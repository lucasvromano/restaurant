import { createAction, createReducer } from "@reduxjs/toolkit";

interface ISchedules {
  id: string,
  customer: string,
  employee: string,
  services: string
  price: string,
  date: string
}

const INITIAL_STATE: ISchedules[] | (() => ISchedules[]) = []

export const addSchedules = createAction<ISchedules | []>('ADD_SCHEDULES');

export default createReducer(INITIAL_STATE, {
  [addSchedules.type]: (state, action) => ([...state, action.payload])
});

