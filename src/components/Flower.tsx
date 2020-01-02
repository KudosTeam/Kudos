import React, { useEffect } from "react";
import { withStyles, WithStyles, Theme } from "@material-ui/core";
import { StyleRules } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {
  FlowerPropsMappedFromState,
  FlowerPropsMappedFromDispatch
} from "../containers/Flower";

const styles = (theme: Theme): StyleRules => ({
  card: {
    backgroundColor: "#E75B76"
  }
});

type FlowerProps = FlowerPropsMappedFromState &
  FlowerPropsMappedFromDispatch &
  WithStyles<typeof styles>;

const Flower: React.FC<FlowerProps> = ({
  selectedGiphy,
  getGiphy,
  goHome,
  classes
}) => {
  useEffect(() => {
    getGiphy();
  });

  return (
    <div>
      <Card className={classes.card}>
        <img src={selectedGiphy} alt="Flowers" />
        <CardActions>
          <Button size="small" color="primary" onClick={goHome}>
            Back
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default withStyles(styles)(Flower);
