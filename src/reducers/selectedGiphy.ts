import { actionTypes, Action } from "../actions/creators";

export type SelectedGiphy = string;
const initialState: SelectedGiphy = "";

const selectedGiphy = (state = initialState, action: Action): SelectedGiphy => {
  switch (action.type) {
    case actionTypes.SET_SELECTED_GIPHY:
      return action.selectedGiphy;
    default:
      return state;
  }
};

export default selectedGiphy;
