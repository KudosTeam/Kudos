import axios from "axios";
import { KudoThunkAction } from "./types";
import domain from "../../utils/domain";

export const postComplimentThunk = (): KudoThunkAction<Promise<void>> => (
  dispatch,
  getState
) => {
  const compliments = getState()
    .selectedCompliment.split("+")
    .join(" ");
  if (!compliments)
    console.error("Please enter a compliment in the type field.");

  const toSend = { compliments };
  return axios.post(`${domain}/compliments`, toSend).then(() => {
    return Promise.resolve();
  });
};
