import { actionTypes, Action } from "../actions/creators";

export type PhoneNO = string;
const initialState: PhoneNO = "";

const phoneNO = (state = initialState, action: Action): PhoneNO => {
  switch (action.type) {
    case actionTypes.SET_PHONE:
      return action.phoneNO;
    default:
      return state;
  }
};

export default phoneNO;
