import { connect } from "react-redux";
import { KudoThunkDispatch, KudoThunkAction } from "../actions/thunks/types";
import { State } from "../reducers";
import ComplimentTypeCard from "../components/ComplimentTypeCard";
import { fetchComplimentsThunk, saveComplimentThunk } from "../actions/index";
import { setSelectedCompliment } from "../actions/creators";

const fetchCompliments = (): KudoThunkAction<void> => dispatch => {
  dispatch(fetchComplimentsThunk());
};

const saveCompliment = (): KudoThunkAction<void> => dispatch => {
  dispatch(saveComplimentThunk());
};

const mapStateToProps = (state: State) => ({
  compliments: state.compliments,
  selectedCompliment: state.selectedCompliment
});

const mapDispatchToProps = (dispatch: KudoThunkDispatch) => ({
  fetchCompliments: () => dispatch(fetchCompliments()),
  selectCompliment: (event: GenericChangeEvent<unknown>) =>
    dispatch(setSelectedCompliment(event.target.value as string)),
  saveCompliment: () => dispatch(saveCompliment())
});

export type ComplimentTypeCardPropsMappedFromState = ReturnType<
  typeof mapStateToProps
>;
export type ComplimentTypeCardPropsMappedFromDispatch = ReturnType<
  typeof mapDispatchToProps
>;

export const ComplimentTypeCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ComplimentTypeCard);
