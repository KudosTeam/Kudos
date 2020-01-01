import { actionTypes } from "../actions/creators";
import { Action } from "../actions/types";

export type Schedule = string;

const schedule = (state = "", action: Action): Schedule => {
  switch (action.type) {
    case actionTypes.SET_TIME:
      return action.schedule;
    default:
      return state;
  }
};

export default schedule;
