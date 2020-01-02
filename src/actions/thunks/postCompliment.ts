import axios from "axios";
import { KudoThunkAction } from "./types";

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
  return axios.post("/compliments", toSend).then(() => {
    return Promise.resolve();
  });
};
