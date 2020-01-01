import { actionTypes } from "../actions/creators";
import { Action } from "../actions/types";

export type SelectedCompliment = string;
const initialState = "Enter a compliment.";

const selectedCompliment = (
  state = initialState,
  action: Action
): SelectedCompliment => {
  switch (action.type) {
    case actionTypes.SET_SELECTED_COMPLIMENT:
      return action.selectedCompliment;
    default:
      return state;
  }
};

export default selectedCompliment;
