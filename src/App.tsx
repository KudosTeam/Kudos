import React from "react";
import { withStyles, WithStyles, Theme, CssBaseline } from "@material-ui/core";
import { StyleRules } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MainContainer } from "./containers/Main";
import { FlowerContainer } from "./containers/Flower";
import Navbar from "./components/Navbar";
import {
  AppPropsMappedFromState,
  AppPropsMappedFromDispatch
} from "./containers/App";

const styles = (theme: Theme): StyleRules => ({
  app: {
    textAlign: "center"
  }
});

type AppProps = AppPropsMappedFromState &
  AppPropsMappedFromDispatch &
  WithStyles<typeof styles>;

const App: React.FC<AppProps> = ({ classes }) => (
  <div className={classes.app}>
    <CssBaseline />
    <Navbar />
    <Router>
      <Switch>
        <Route path="/reward">
          <FlowerContainer />
        </Route>
        <Route path="/">
          <MainContainer />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default withStyles(styles)(App);
