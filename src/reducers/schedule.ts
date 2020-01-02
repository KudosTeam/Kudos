import { actionTypes, Action } from "../actions/creators";

export type Schedule = {
  year: number;
  month: number;
  day: number;
  hour: number;
  min: number;
};

const date = new Date();

const initialState: Schedule = {
  year: date.getFullYear(),
  month: date.getMonth(),
  day: date.getDate(),
  hour: date.getHours(),
  min: date.getMinutes()
};

const schedule = (state = initialState, action: Action): Schedule => {
  switch (action.type) {
    case actionTypes.SET_TIME:
      return action.schedule;
    default:
      return state;
  }
};

export default schedule;
