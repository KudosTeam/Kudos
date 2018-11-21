import { combineReducers } from "redux";
import complimentReducer from "./complimentReducer";

export default combineReducers({
  compliments: complimentReducer
});
