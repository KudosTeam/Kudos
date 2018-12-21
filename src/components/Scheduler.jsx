import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
});

class Scheduler extends Component {
  render() {
    return (
      <form noValidate>
        <TextField
          id="datetime-local"
          label="Set Scheduler"
          type="datetime-local"
          defaultValue="YYYY-MM-DDTHH:SS"
          onChange={this.props.setSchedule}
          InputLabelProps={{
            shrink: true
          }}
        />
      </form>
    );
  }
}

Scheduler.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Scheduler);
