import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { State } from "../../reducers";
import { Action } from "../types";

export type KudoThunkAction<R, E = undefined> = ThunkAction<
  R,
  State,
  E,
  Action
>;

export type KudoThunkDispatch<E = undefined> = ThunkDispatch<State, E, Action>;
