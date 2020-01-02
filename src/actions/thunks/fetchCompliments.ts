import axios from "axios";
import { KudoThunkAction } from "./types";
import { setCompliments } from "../creators";

export const fetchComplimentsThunk = (): KudoThunkAction<Promise<void>> => (
  dispatch,
  getState
) => {
  return axios.get("/compliments").then(data => {
    const compliments = data.data.map(
      (compliment: Compliment) => compliment.compliments
    );
    dispatch(setCompliments(compliments));
  });
};

export type Compliment = {
  id: number;
  compliments: string;
  created_at: string;
};

export type Compliments = Compliment[];
