import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";
// import { Provider } from "react-redux";
import Navbar from "./components/Navbar";
import { FormContainer } from "./containers/Form";
import { FlowerContainer } from "./containers/Flower";
import "./App.css";
import { Typography } from '@material-ui/core';
import 'typeface-roboto';

class App extends Component {
  render() {
    const props = this.props;
    return (
      <div className="App">
        <Navbar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Typography variant="body1">Tell one compliment per day to someone special!</Typography>
        </header>
        {props.isCalled ? <FlowerContainer /> : <FormContainer />}
      </div>
    );
  }
}

export default App;
