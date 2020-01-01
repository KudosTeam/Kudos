import { actionTypes } from "../actions/creators";
import { Action } from "../actions/types";

export type PhoneNO = string;

const phoneNO = (state = "", action: Action): PhoneNO => {
  switch (action.type) {
    case actionTypes.SET_PHONE:
      return action.phoneNO;
    default:
      return state;
  }
};

export default phoneNO;
