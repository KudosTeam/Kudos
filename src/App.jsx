import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";
import { FormContainer } from "./containers/Form";
import { FlowerContainer } from "./containers/Flower";
import "./App.css";
import { Typography } from "@material-ui/core";
import "typeface-roboto";
import heart from "./heart-exclamation.png";

class App extends Component {
  render() {
    const props = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="subtitleHeader">
            <img src={heart} className="heart" />
            <Typography variant="h5" className="subtitle">
              {"  "}
              Bring back the Love{"  "}
            </Typography>
            <img src={heart} className="heart" />
          </div>
        </header>
        {props.isCalled ? <FlowerContainer /> : <FormContainer />}
      </div>
    );
  }
}

export default App;
