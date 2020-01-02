import { actionTypes, Action } from "../actions/creators";

export type Schedule = string;
const initialState: Schedule = "";

const schedule = (state = initialState, action: Action): Schedule => {
  switch (action.type) {
    case actionTypes.SET_TIME:
      return action.schedule;
    default:
      return state;
  }
};

export default schedule;
