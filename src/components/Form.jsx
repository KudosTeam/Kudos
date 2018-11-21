import React, { Component } from "react";
import { SelectField } from "material-ui";

class Form extends Component {
  // onChange = e => {
  //   // this.setState({ [e.target.name]: e.target.value });
  // };
  componentWillMount() {
    this.props.fetchCompliments();
  }
  render() {
    console.log(this.props);
    const complimentsPullDown = this.props.compliments.compliments.map(
      compliment => (
        <option key={compliment.id} value={compliment.text}>
          {compliment.text}
        </option>
      )
    );
    return (
      <div className="form">
        <h1>Send Compliment!</h1>
        <div>
          <div>
            <label>Compliment:</label>
            <br />
            <SelectField name="compliment" onChange={this.onChange}>
              {complimentsPullDown}
            </SelectField>
          </div>
          <div>
            <label>Phone Number:</label>
            <br />
            <input
              type="text"
              name="phone"
              onChange={this.onChange}
            />
          </div>
          <br />
          <button onClick={this.props.makeCall}>Send Compliment</button>
        </div>
      </div>
    );
  }
}

export default Form;