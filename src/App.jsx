import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";
// import { Provider } from "react-redux";
import Navbar from "./components/Navbar";
import { FormContainer } from "./containers/Form";
import { FlowerContainer } from "./containers/Flower";
// import store from "./store";
import "./App.css";

class App extends Component {
  render() {
    console.log("isCalled?", this.props.isCalled);
    const props = this.props;
    return (
      <div className="App">
        <Navbar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Tell one compliment per day to someone special!</p>
        </header>
        {props.isCalled ? <FlowerContainer /> : <FormContainer />}
      </div>
    );
  }
}

export default App;
