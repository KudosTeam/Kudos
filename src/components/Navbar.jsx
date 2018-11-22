import React, { Component } from "react";
import { AppBar, } from "material-ui";

// const avatarStyle = { margin: 20 };

class Navbar extends Component {
  render() {
    return (
      <div className="App-header">
        <AppBar color="#E75B76">
          {/* <Avatar src="../logo.png" style={avatarStyle} /> */}
        </AppBar>
      </div>
    );
  }
}

export default Navbar;
