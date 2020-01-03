import axios from "axios";
import domain from "../../utils/domain";

export const makeCallThunk = () => (dispatch, getState) => {
  const { selectedCompliment, phoneNO, schedule } = getState();

  if (!selectedCompliment || selectedCompliment === "Enter a compliment.") {
    console.error("error: no compliment selected.");
    return Promise.reject();
  } else if (!phoneNO) {
    console.error("error: no phone number entered.");
    return Promise.reject();
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
        return Promise.resolve();
      })
      .catch(() => Promise.reject());
  }
};
