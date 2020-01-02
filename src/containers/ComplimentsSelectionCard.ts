import { connect } from "react-redux";
import { KudoThunkDispatch } from "../actions/thunks/types";
import { State } from "../reducers";

import ComplimentsSelectionCard from "../components/ComplimentsSelectionCard";
import { setSelectedCompliment } from "../actions/creators";

const mapStateToProps = (state: State) => ({
  compliments: state.compliments,
  selectedCompliment: state.selectedCompliment
});

const mapDispatchToProps = (dispatch: KudoThunkDispatch) => ({
  selectCompliment: (event: GenericChangeEvent<unknown>) =>
    dispatch(setSelectedCompliment(event.target.value as string))
});

export type ComplimentsSelectionCardPropsMappedFromState = ReturnType<
  typeof mapStateToProps
>;
export type ComplimentsSelectionCardPropsMappedFromDispatch = ReturnType<
  typeof mapDispatchToProps
>;

export const ComplimentsSelectionCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ComplimentsSelectionCard);
