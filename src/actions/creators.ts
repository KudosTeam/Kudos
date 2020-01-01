import { Compliments } from "../reducers/compliments";
import { SelectedGiphy } from "../reducers/selectedGiphy";
import { SelectedCompliment } from "../reducers/selectedCompliment";
import { PhoneNO } from "../reducers/phoneNO";
import { IsCalled } from "../reducers/isCalled";
import { Schedule } from "../reducers/schedule";

export enum actionTypes {
  SET_COMPLIMENTS = "SET_COMPLIMENTS",
  SET_SELECTED_GIPHY = "SET_SELECTED_GIPHY",
  SET_SELECTED_COMPLIMENT = "SET_SELECTED_COMPLIMENT",
  SET_PHONE = "SET_PHONE",
  SET_IS_CALLED = "SET_IS_CALLED",
  GO_HOME = "GO_HOME",
  SET_TIME = "SET_TIME"
}

export const setCompliments = (compliments: Compliments) =>
  ({
    type: actionTypes.SET_COMPLIMENTS,
    compliments
  } as const);

export const setSelectedGiphy = (giphyURL: SelectedGiphy) =>
  ({
    type: actionTypes.SET_SELECTED_GIPHY,
    selectedGiphy: giphyURL
  } as const);

export const setSelectedCompliment = (selectedCompliment: SelectedCompliment) =>
  ({
    type: actionTypes.SET_SELECTED_COMPLIMENT,
    selectedCompliment
  } as const);

export const setPhone = (phoneNO: PhoneNO) =>
  ({
    type: actionTypes.SET_PHONE,
    phoneNO
  } as const);

export const setIsCalled = (isCalled: IsCalled) =>
  ({
    type: actionTypes.SET_IS_CALLED,
    isCalled
  } as const);

export const goHome = () =>
  ({
    type: actionTypes.GO_HOME,
    isCalled: false
  } as const);

export const setTime = (schedule: Schedule) =>
  ({
    type: actionTypes.SET_TIME,
    schedule
  } as const);
