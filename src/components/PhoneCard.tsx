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

const styles = (theme: Theme): StyleRules => ({
  app: {
    textAlign: "center"
  }
});

type PhoneCardProps = PhoneCardPropsMappedFromState &
  PhoneCardPropsMappedFromDispatch &
  WithStyles<typeof styles>;

const PhoneCard: React.FC<PhoneCardProps> = ({
  storePhone,
  makeCall,
  classes
}) => (
  <Card raised={true}>
    <Typography variant="h5">Choose a number to call</Typography>
    <br />
    <TextField
      type="text"
      id="phone"
      label="Phone Number"
      placeholder="81 90 0000 0000"
      style={{ margin: 8 }}
      onChange={storePhone}
    />
    <br />
    <br />
    <SchedulerContainer />
    <br />
    <Button variant="contained" onClick={() => makeCall()}>
      Send Compliment
    </Button>
  </Card>
);

export default withStyles(styles)(PhoneCard);
