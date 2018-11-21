import React, { Component } from "react";
import Card from "@material-ui/core/Card";

class Flower extends Component {
  componentDidMount() {
    this.props.getGiphy();
  }
  render() {
    return (
      <div className="Flower">
        <Card>
          {this.props.selectedGiphy ? (
            <img src={this.props.selectedGiphy} />
          ) : (
            <div />
          )}
        </Card>
      </div>
    );
  }
}

export default Flower;
