import React, { Component } from "react";
import { RaisedButton } from "material-ui";
import { Typography, TextField } from "@material-ui/core";
import "typeface-roboto";

import { SchedulerContainer } from "../containers/Scheduler";

class Phone extends Component {
  render() {
    const props = this.props;
    return (
      <div className="phone">
        <Typography variant="body1" />
        <br />
        <TextField
          type="text"
          id="phone"
          label="phone number"
          placeholder="81 90 0000 0000"
          style={{ margin: 8 }}
          onChange={props.storePhone}
        />
        <br />
        <SchedulerContainer />
        <RaisedButton
          label="Send Compliment"
          onClick={() => props.makeCall(props.isCalled)}
        />
      </div>
    );
  }
}

export default Phone;
