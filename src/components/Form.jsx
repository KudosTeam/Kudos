import React, { Component } from "react";
import { Typography } from '@material-ui/core';
import 'typeface-roboto';

import { PullDownContainer } from "../containers/PullDown";
import { TypeSaveContainer } from "../containers/TypeSave";
import { PhoneContainer } from "../containers/Phone";

class Form extends Component {
  componentDidMount() {
    this.props.fetchCompliments();
  }
  render() {
    const props = this.props;
    return (
      <div className="form" style={{ backgroundColor: "#E75B76" }}>
        <div className="compliments">
          <TypeSaveContainer />
          <Typography variant="h5" style={{ 'margin-top': '250px', 'color': 'ghostwhite' }}>or</Typography>
          <PullDownContainer />
        </div>
        <PhoneContainer />
      </div>
    );
  }
}

export default Form;
