/* tslint:disable */
import { setIsCalled } from "../creators";
import axios from "axios";
import domain from "../../utils/domain";

export const makeCallThunk = isCalled => (dispatch, getState) => {
  const { selectedCompliment, phoneNO, schedule } = getState();

  if (!selectedCompliment || selectedCompliment === "Enter a compliment.") {
    console.error("error: no compliment selected.");
  } else if (!phoneNO) {
    console.error("error: no phone number entered.");
  } else {
    return axios
      .post(`${domain}/twillio`, {
        params: {
          phoneNO,
          selectedCompliment,
          schedule
        }
      })
      .then(() => {
        dispatch(setIsCalled(!isCalled));
        return Promise.resolve();
      });
  }
};
