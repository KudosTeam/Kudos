import React, { Component } from "react";
import { SelectField, MenuItem, RaisedButton } from "material-ui";

class Form extends Component {
  render() {
    const complimentsPullDown = [
      { payload: "0", text: "I like your face" },
      { payload: "1", text: "She sells seashells by the seashore"}
    ];

    return (
      <div className="form">
        <h2>Send Compliment!</h2>
        <div>
          <div>
            <label>Compliment:</label>
            <h2>Write it yourself with love</h2>
            <input type="text" name="complimentText" onChange={this.props.selectCompliment} />
            <br />
            <h2>Choose a pre-made compliment</h2>
            <SelectField name="compliment" onChange={this.props.selectCompliment} menuItems={complimentsPullDown} value="TESTING THIS STUFF" >
              <MenuItem payload="0" value="I like your face">
              I like your face
              </MenuItem>
              <MenuItem payload="1" value="She sells seashells by the seashore">
              She sells seashells by the seashore
              </MenuItem>
            </SelectField>
          </div>
          <div>
            <label>Phone Number:</label>
            <br />
            <input type="text" name="phone" onChange={this.props.storePhone} />
          </div>
          <br />
          <RaisedButton label="Send Compliment" onClick={this.props.makeCall} />
        </div>
      </div>
    );
  }
}

export default Form;
