import React, { Component } from "react";
import { SelectField, MenuItem } from "material-ui";

class Form extends Component {
  // onChange = e => {
  //   // this.setState({ [e.target.name]: e.target.value });
  // };
  componentWillMount() {
    // this.props.fetchCompliments();
  }
  render() {
    console.log(this.props);
    // const complimentsPullDown = this.props.compliments.compliments.map(
    //   compliment => (
    //     <option key={compliment.id} value={compliment.text}>
    //       {compliment.text}
    //     </option>
    //   )
    // );

    const complimentsPullDown = [
      {payload: '0', text: 'Yo momma so poor that ducks throw bread at her'},
      {payload: '1', text: 'Yo momma so dumb that she went to an L.A. Clippers game to get a hair cut'}
    ];

    return (
      <div className="form">
        <h1>Send Compliment!</h1>
        <div>
          <div>
            <label>Compliment:</label>
            <br />
            <SelectField name="compliment" onChange={this.props.storeCompliment} menuItems={complimentsPullDown}>
            <MenuItem payload='0' value='Yo mama so poor that ducks throw bread at her'>Yo mama so poor that ducks throw bread at her</MenuItem>
   <MenuItem payload='1' value='Yo momma so dumb that she went to an L.A. Clippers game to get a hair cut'>Yo momma so dumb that she went to an L.A. Clippers game to get a hair cut</MenuItem>
            </SelectField>
          </div>
          <div>
            <label>Phone Number:</label>
            <br />
            <input type="text" name="phone" onChange={this.onChange} />
            <input
              type="text"
              name="phone"
              onChange={this.props.storePhone}
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
