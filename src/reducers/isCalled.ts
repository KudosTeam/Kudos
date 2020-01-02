import { actionTypes, Action } from "../actions/creators";

export type IsCalled = boolean;
const initialState: IsCalled = false;

const isCalled = (state = initialState, action: Action): IsCalled => {
  switch (action.type) {
    case actionTypes.SET_IS_CALLED:
    case actionTypes.GO_HOME:
      return action.isCalled;
    default:
      return state;
  }
};

export default isCalled;
