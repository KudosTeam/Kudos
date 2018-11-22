import React from "react";
import ReactDOM from "react-dom";

import { AppContainer } from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import {
  MuiThemeProvider,
  getMuiTheme,
} from "material-ui/styles";
import store from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <MuiThemeProvider
    muiTheme={getMuiTheme({ palette: { primary: { main: "#E75B76" } }, typography: { useNextVariants: true } })}
  >
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
