import React, { Component } from "react";
import { SelectField, MenuItem, RaisedButton, TextField } from "material-ui";
import { Typography } from '@material-ui/core';
import 'typeface-roboto';
import { SchedulerContainer } from "../containers/Scheduler";

class Form extends Component {
  componentDidMount() {
    this.props.fetchCompliments();
  }
  render() {
    let complimentsPullDown = [];
    let complimentsJSX = <MenuItem></MenuItem>
    const props = this.props;
    if (this.props.compliments) {
      console.log(this.props.compliments)
      complimentsPullDown = this.props.compliments.map((compliment, index) => {
        return {
          'payload': index,
          'text': compliment
        }
      });
      complimentsJSX = complimentsPullDown.map(item =>
        <MenuItem key={item.payload} payload={item.payload} value={item.text}>{item.text}</MenuItem>
      );
    }
    return (
      <div className="form">
        <Typography variant="h2">Send Compliment!</Typography>
        <div id="save" className="child">
          <Typography variant="h5">Write it yourself with love</Typography>
          <TextField
            type="text"
            id="complimentText"
            onChange={props.selectCompliment}
          />
          <br />
          <RaisedButton label="Save Compliment" onClick={() => { props.saveCompliment(); props.fetchCompliments(); }} />
          <br />
        </div>
        <div id="select" className="child">
          <Typography variant="h5">Choose a pre-made compliment</Typography>
          <SelectField
            name="compliment"
            onChange={props.selectCompliment}
            value={this.props.selectedCompliment.split('+').join(' ')}
          >
            {complimentsJSX}
          </SelectField>
        </div>
        <div id="phone" className="child">
          <Typography variant="h5">Phone Number</Typography>
          <br />
          <TextField type="text" id="phone" onChange={props.storePhone} />
          <br />
          <SchedulerContainer />
          <RaisedButton
            label="Send Compliment"
            onClick={() => props.makeCall(props.isCalled)}
          />
        </div>
      </div>
    );
  }
}

export default Form;
