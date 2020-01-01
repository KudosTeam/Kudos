import { actionTypes } from "../actions/creators";
import { Action } from "../actions/types";

export type SelectedGiphy = string;

const selectedGiphy = (state = "", action: Action): SelectedGiphy => {
  switch (action.type) {
    case actionTypes.SET_SELECTED_GIPHY:
      return action.selectedGiphy;
    default:
      return state;
  }
};

export default selectedGiphy;
