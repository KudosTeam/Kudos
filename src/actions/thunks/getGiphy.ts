import axios from "axios";
import { KudoThunkAction } from "./types";
import { setSelectedGiphy } from "../creators";

export const getGiphyThunk = (): KudoThunkAction<Promise<void>> => (
  dispatch,
  getState
) => {
  return axios.get("/giphy").then(data => {
    const giphyURL = data.data;
    dispatch(setSelectedGiphy(giphyURL));
  });
};

export type Compliment = {
  id: number;
  compliments: string;
  created_at: string;
};

export type Compliments = Compliment[];
