import React, { useEffect } from "react";
import { withStyles, WithStyles, Theme } from "@material-ui/core";
import { StyleRules } from "@material-ui/core/styles";

import { Typography } from "@material-ui/core";
import { ComplimentsSelectionCardContainer } from "../containers/ComplimentsSelectionCard";
import { ComplimentTypeCardContainer } from "../containers/ComplimentTypeCard";
import { PhoneCardContainer } from "../containers/PhoneCard";
import {
  MainPropsMappedFromState,
  MainPropsMappedFromDispatch
} from "../containers/Main";

const styles = (theme: Theme): StyleRules => ({
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space",
    paddingTop: theme.spacing(5)
  },
  compliments: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

type MainProps = MainPropsMappedFromState &
  MainPropsMappedFromDispatch &
  WithStyles<typeof styles>;

const Main: React.FC<MainProps> = ({ fetchCompliments, classes }) => {
  useEffect(() => {
    fetchCompliments();
  });
  return (
    <div className={classes.main}>
      <div className={classes.compliments}>
        <ComplimentTypeCardContainer />
        <Typography variant="h5">or</Typography>
        <ComplimentsSelectionCardContainer />
      </div>
      <PhoneCardContainer />
    </div>
  );
};

export default withStyles(styles)(Main);
