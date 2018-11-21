import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";
import { Provider } from "react-redux";

import Form from "./components/Form";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Tell one compliment per day to someone special!</p>
          </header>
          <hr />
          <Form />
        </div>
      </Provider>
    );
  }
}

export default App;
