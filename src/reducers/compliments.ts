import { actionTypes } from "../actions/creators";
import { Action } from "../actions/types";

export type Compliments = string[];

const compliments = (state = [], action: Action): Compliments => {
  switch (action.type) {
    case actionTypes.SET_COMPLIMENTS:
      return action.compliments;
    default:
      return state;
  }
};

export default compliments;
