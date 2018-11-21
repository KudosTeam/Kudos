import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

class Flower extends Component {
  componentDidMount() {
    this.props.getGiphy();
    console.log("IN FLOWER", this.props);
  }
  render() {
    console.log("IN FLOWER", this.props);
    return (
      <div className="Flower">
        <input type="button" />
        <Card>
          {this.props.selectedGiphy ? (
            <CardMedia image={this.props.selectedGiphy} />
          ) : (
            <div />
          )}
        </Card>
      </div>
    );
  }
}

export default Flower;
