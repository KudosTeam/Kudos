import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { MuiThemeProvider } from "@material-ui/core/styles";

import store from "./store";
import theme from "./utils/theme";
import { AppContainer } from "./containers/App";

const renderKudos = () => {
  render(
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </MuiThemeProvider>,
    document.getElementById("root")
  );
};

renderKudos();
