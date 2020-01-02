import { connect } from "react-redux";
import { KudoThunkDispatch, KudoThunkAction } from "../actions/thunks/types";
import { State } from "../reducers";

import Flower from "../components/Flower";
import { getGiphyThunk } from "../actions";
import { goHome } from "../actions/creators";

const getGiphy = (): KudoThunkAction<void> => dispatch => {
  dispatch(getGiphyThunk());
};

const mapStateToProps = (state: State) => ({
  selectedGiphy: state.selectedGiphy,
  isCalled: state.isCalled
});

const mapDispatchToProps = (dispatch: KudoThunkDispatch) => ({
  getGiphy: () => dispatch(getGiphy()),
  goHome: () => dispatch(goHome())
});

export type FlowerPropsMappedFromState = ReturnType<typeof mapStateToProps>;
export type FlowerPropsMappedFromDispatch = ReturnType<
  typeof mapDispatchToProps
>;

export const FlowerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Flower);
