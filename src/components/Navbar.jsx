import React, { Component } from "react";
import { AppBar, Avatar } from "material-ui";

const avatarStyle = { margin: 10 };

class Navbar extends Component {
  render() {
    return (
      <div className="App-header">
        <AppBar title="Kudos">
          <Avatar src="../logo.png" style={avatarStyle} />
        </AppBar>
      </div>
    );
  }
}

export default Navbar;
