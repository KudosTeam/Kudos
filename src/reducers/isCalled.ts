import { actionTypes } from "../actions/creators";
import { Action } from "../actions/types";

export type IsCalled = boolean;

const isCalled = (state = false, action: Action): IsCalled => {
  switch (action.type) {
    case actionTypes.SET_IS_CALLED:
    case actionTypes.GO_HOME:
      return action.isCalled;
    default:
      return state;
  }
};

export default isCalled;
