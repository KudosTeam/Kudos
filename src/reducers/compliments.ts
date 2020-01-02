import { actionTypes, Action } from "../actions/creators";

export type Compliments = string[];
const initialState: Compliments = [];

const compliments = (state = initialState, action: Action): Compliments => {
  switch (action.type) {
    case actionTypes.SET_COMPLIMENTS:
      return action.compliments;
    default:
      return state;
  }
};

export default compliments;
