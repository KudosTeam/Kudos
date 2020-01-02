import { connect } from "react-redux";
import { KudoThunkDispatch, KudoThunkAction } from "../actions/thunks/types";
import { State } from "../reducers";
import PhoneCard from "../components/PhoneCard";
import { makeCallThunk } from "../actions/index";
import { setPhone } from "../actions/creators";

const makeCall = (): KudoThunkAction<void> => dispatch => {
  dispatch(makeCallThunk());
};

const mapStateToProps = (state: State) => ({
  compliments: state.compliments,
  selectedCompliment: state.selectedCompliment,
  schedule: state.schedule
});

const mapDispatchToProps = (dispatch: KudoThunkDispatch) => ({
  makeCall: () => dispatch(makeCall()),
  storePhone: (event: GenericChangeEvent<string>) =>
    dispatch(setPhone(event.target.value))
});

export type PhoneCardPropsMappedFromState = ReturnType<typeof mapStateToProps>;
export type PhoneCardPropsMappedFromDispatch = ReturnType<
  typeof mapDispatchToProps
>;

export const PhoneCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PhoneCard);
