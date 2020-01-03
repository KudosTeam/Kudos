import React from "react";
import {
  withStyles,
  WithStyles,
  Theme,
  Button,
  TextField,
  Card,
  Typography
} from "@material-ui/core";
import { StyleRules } from "@material-ui/core/styles";
import { SchedulerContainer } from "../containers/Scheduler";
import {
  PhoneCardPropsMappedFromState,
  PhoneCardPropsMappedFromDispatch
} from "../containers/PhoneCard";
import { RouteComponentProps } from "react-router";

const styles = (theme: Theme): StyleRules => ({
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  textfield: {
    margin: theme.spacing(3),
    width: 200
  },
  send: {
    margin: "auto 0"
  }
});

type PhoneCardProps = PhoneCardPropsMappedFromState &
  PhoneCardPropsMappedFromDispatch &
  RouteComponentProps<{}> &
  WithStyles<typeof styles>;

const PhoneCard: React.FC<PhoneCardProps> = ({
  storePhone,
  makeCall,
  classes,
  history
}) => (
  <Card raised={true} className={classes.card}>
    <Typography variant="h5">Choose a number to call</Typography>
    <TextField
      type="tel"
      id="phone"
      label="Phone Number"
      placeholder="81 90 0000 0000"
      onChange={storePhone}
      className={classes.textfield}
    />
    <SchedulerContainer />
    <Button
      variant="contained"
      onClick={() => makeCall(history)}
      className={classes.send}
    >
      Send Compliment
    </Button>
  </Card>
);

export default withStyles(styles)(PhoneCard);
