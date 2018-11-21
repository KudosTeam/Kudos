import { connect } from "react-redux";
import App from "../App";

const mapStateToProps = state => ({
  isCalled: state.isCalled
});

const mapDispatchToProps = dispatch => {
  return {};
};

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
