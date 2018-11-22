import React, { Component } from "react";
import { RaisedButton, TextField } from "material-ui";
import { Typography } from '@material-ui/core';
import 'typeface-roboto';

import { SchedulerContainer } from "../containers/Scheduler";

class Phone extends Component {
    render() {
        const props = this.props;
        return (
            <div className="phone">
                <Typography variant="body1">Phone Number</Typography>
                <br />
                <TextField type="text" id="phone" onChange={props.storePhone} />
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
