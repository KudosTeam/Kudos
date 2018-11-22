import React, { Component } from "react";
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
      <div className="form">
        <TypeSaveContainer />
        <PullDownContainer />
        <PhoneContainer />
      </div>
    );
  }
}

export default Form;
