import React, { Component } from "react";
import { MenuItem, Card, Avatar } from "material-ui";
import { Typography, Select } from "@material-ui/core";
import "typeface-roboto";

class PullDown extends Component {
  render() {
    let complimentsPullDown = [];
    let menuItems = <MenuItem />;
    if (this.props.compliments) {
      complimentsPullDown = this.props.compliments.map((compliment, index) => {
        return {
          payload: index,
          text: compliment
        };
      });
      menuItems = complimentsPullDown.map(item => (
        <MenuItem key={item.payload} payload={item.payload} value={item.text}>
          {item.text}
        </MenuItem>
      ));
    }
    return (
      <Card
        raised={true}
        style={{
          backgroundColor: "ghostwhite",
          width: "450px",
          height: "400px",
          padding: "50px",
          "margin-top": "100px",
          "margin-left": "50px"
        }}
      >
        <Typography variant="h5">Choose a Compliment</Typography>
        <br />
        <Avatar
          src={require("../assets/choose.png")}
          alt="choose icon"
          style={{ width: "150px", height: "150px" }}
        />
        <br />
        <br />
        <Select
          style={{ width: "300px" }}
          displayEmpty={true}
          name="compliment"
          onChange={this.props.selectCompliment}
          value={this.props.selectedCompliment}
        >
          {menuItems}
        </Select>
      </Card>
    );
  }
}

export default PullDown;
