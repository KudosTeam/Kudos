import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {
  MuiThemeProvider,
  getMuiTheme,
  lightBaseTheme
} from "material-ui/styles";

ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme({lightBaseTheme, appBar: {color: '#E75B76'}})}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
