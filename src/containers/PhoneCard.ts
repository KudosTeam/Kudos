import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { KudoThunkDispatch, KudoThunkAction } from "../actions/thunks/types";
import { State } from "../reducers";
import PhoneCard from "../components/PhoneCard";
import { makeCallThunk } from "../actions/thunks/makeCall";
import { setPhone } from "../actions/creators";
import { History } from "history";

const makeCall = (history: History): KudoThunkAction<void> => (
  dispatch,
  getState
) => {
  dispatch(makeCallThunk()).then(() => {
    history.push("/reward");
  });
};

const mapStateToProps = (state: State) => ({
  compliments: state.compliments,
  selectedCompliment: state.selectedCompliment,
  schedule: state.schedule
});

const mapDispatchToProps = (dispatch: KudoThunkDispatch) => ({
  makeCall: (history: History) => dispatch(makeCall(history)),
  storePhone: (event: GenericChangeEvent<string>) =>
    dispatch(setPhone(event.target.value))
});

export type PhoneCardPropsMappedFromState = ReturnType<typeof mapStateToProps>;
export type PhoneCardPropsMappedFromDispatch = ReturnType<
  typeof mapDispatchToProps
>;

export const PhoneCardContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PhoneCard)
);
