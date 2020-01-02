import { connect } from "react-redux";
import { KudoThunkDispatch, KudoThunkAction } from "../actions/thunks/types";
import { State } from "../reducers";
import ComplimentTypeCard from "../components/ComplimentTypeCard";
import { fetchComplimentsThunk } from "../actions/thunks/fetchCompliments";
import { postComplimentThunk } from "../actions/thunks/postCompliment";
import { setSelectedCompliment } from "../actions/creators";

const saveCompliment = (): KudoThunkAction<void> => dispatch => {
  dispatch(postComplimentThunk()).then(() => {
    dispatch(fetchComplimentsThunk());
  });
};

const mapStateToProps = (state: State) => ({
  compliments: state.compliments,
  selectedCompliment: state.selectedCompliment
});

const mapDispatchToProps = (dispatch: KudoThunkDispatch) => ({
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
