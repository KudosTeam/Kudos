import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

const RapidAPI = new require("rapidapi-connect");

class Flower extends Component {
  render() {
    return (
      <div className="Flower">
        <CardMedia image />
      </div>
    );
  }
}

export default Flower;
