import React from "react";
import { withStyles, WithStyles, Theme, TextField } from "@material-ui/core";
import { StyleRules } from "@material-ui/core/styles";
import {
  SchedulerPropsMappedFromState,
  SchedulerPropsMappedFromDispatch
} from "../containers/Scheduler";

const styles = (theme: Theme): StyleRules => ({
  textfield: {
    margin: theme.spacing(3),
    width: 200
  }
});

type SchedulerProps = SchedulerPropsMappedFromState &
  SchedulerPropsMappedFromDispatch &
  WithStyles<typeof styles>;

const Scheduler: React.FC<SchedulerProps> = ({ setSchedule, classes }) => (
  <form noValidate>
    <TextField
      id="datetime-local"
      label="Set Scheduler"
      type="datetime-local"
      defaultValue="YYYY-MM-DDTHH:SS"
      onChange={setSchedule}
      InputLabelProps={{
        shrink: true
      }}
      className={classes.textfield}
    />
  </form>
);

export default withStyles(styles)(Scheduler);
