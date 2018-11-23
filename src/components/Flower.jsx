import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

class Flower extends Component {
  componentDidMount() {
    this.props.getGiphy();
  }
  render() {
    return (
      <div className="flower">
        <Card style={{ backgroundColor: "#E75B76" }}>
          <img src={this.props.selectedGiphy} alt="Flowers" style={{'margin-top': '50px'}} />
          <CardActions>
            <Button size="small" color="primary" onClick={this.props.goHome}>
              Back
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default Flower;
