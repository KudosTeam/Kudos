import React from "react";
import { connect } from "react-redux";

import App from "../component/App";
import { callnow } from "../action/app";

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    handleClick: () => {
      dispatch(callnow());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
