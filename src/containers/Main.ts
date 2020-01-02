import { connect } from "react-redux";
import { KudoThunkDispatch, KudoThunkAction } from "../actions/thunks/types";
import { State } from "../reducers";
import Main from "../components/Main";
import { fetchComplimentsThunk } from "../actions/index";

const fetchCompliments = (): KudoThunkAction<void> => dispatch => {
  dispatch(fetchComplimentsThunk());
};

const mapStateToProps = (state: State) => ({
  compliments: state.compliments,
  selectedCompliment: state.selectedCompliment
});

const mapDispatchToProps = (dispatch: KudoThunkDispatch) => ({
  fetchCompliments: () => dispatch(fetchCompliments())
});

export type MainPropsMappedFromState = ReturnType<typeof mapStateToProps>;
export type MainPropsMappedFromDispatch = ReturnType<typeof mapDispatchToProps>;

export const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);
