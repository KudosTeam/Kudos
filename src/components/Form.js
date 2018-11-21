import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCompliments, sendCompliment } from "../actions/complimentActions";
import "./Form.css";
import { SelectField } from "material-ui";

class Form extends Component {
  onChange = e => {
    // this.setState({ [e.target.name]: e.target.value });
  };
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
        <form>
          <div>
            <label>Language:</label>
            <br />
            <input
              type="text"
              name="language"
              onChange={this.onChange}
              value={this}
            />
          </div>
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
              value={this}
            />
          </div>
          <br />
          <button type="submit">Send Compliment</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  compliments: state.compliments
});
export default connect(
  mapStateToProps,
  { fetchCompliments, sendCompliment }
)(Form);
