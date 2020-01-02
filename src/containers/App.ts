import { connect } from "react-redux";
import { KudoThunkDispatch } from "../actions/thunks/types";
import { State } from "../reducers";
import App from "../App";

const mapStateToProps = (state: State) => ({
  isCalled: state.isCalled
});

const mapDispatchToProps = (dispatch: KudoThunkDispatch) => ({});

export type AppPropsMappedFromState = ReturnType<typeof mapStateToProps>;
export type AppPropsMappedFromDispatch = ReturnType<typeof mapDispatchToProps>;

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
