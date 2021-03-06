import { combineReducers } from "redux";
import compliments from "./compliments";
import isCalled from "./isCalled";
import phoneNO from "./phoneNO";
import schedule from "./schedule";
import selectedCompliment from "./selectedCompliment";
import selectedGiphy from "./selectedGiphy";

const reducer = combineReducers({
  compliments,
  isCalled,
  phoneNO,
  schedule,
  selectedCompliment,
  selectedGiphy
});

export default reducer;

export type State = ReturnType<typeof reducer>;
