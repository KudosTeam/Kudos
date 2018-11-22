import React, { Component } from "react";
import { SelectField, MenuItem, RaisedButton } from "material-ui";

class Form extends Component {
  componentDidMount() {
    this.props.fetchCompliments();
  }
  render() {
    let complimentsPullDown = [];
    let complimentsJSX = <MenuItem></MenuItem>
    const props = this.props;
    if (this.props.compliments) {
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
        <h2>Send Compliment!</h2>
        <div>
          <div>
            <label>Compliment:</label>
            <h2>Write it yourself with love</h2>
            <input
              type="text"
              name="complimentText"
              onChange={props.selectCompliment}
              ref="complimentText"
            />
            <br />
            <RaisedButton label="Save Compliment" onClick={() => { props.saveCompliment(); props.fetchCompliments(); }} />
            <br />
            <h2>Choose a pre-made compliment</h2>
            <SelectField
              name="compliment"
              onChange={props.selectCompliment}
              menuItems={complimentsPullDown}
              value="TESTING THIS STUFF"
            >
              {complimentsJSX}
            </SelectField>
          </div>
          <div>
            <label>Phone Number:</label>
            <br />
            <input type="text" name="phone" onChange={props.storePhone} />
          </div>
          <br />
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
