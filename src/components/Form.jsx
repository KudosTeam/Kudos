import React, { Component } from "react";
import { SelectField, MenuItem } from "material-ui";

class Form extends Component {
  render() {
    const complimentsPullDown = [
      { payload: "0", text: "I like your face" },
      { payload: "1", text: "She sells seashells by the seashore"}
    ];

    return (
      <div className="form">
        <h1>Send Compliment!</h1>
        <div>
          <div>
            <label>Compliment:</label>
            <br />
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
          <button onClick={this.props.makeCall}>Send Compliment</button>
        </div>
      </div>
    );
  }
}

export default Form;
