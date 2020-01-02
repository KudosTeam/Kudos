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
  flowerContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  },
  flowerImage: {
    margin: theme.spacing(8)
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
  }, [getGiphy]);

  return (
    <div className={classes.flowerContainer}>
      <img src={selectedGiphy} alt="Flowers" className={classes.flowerImage} />
      <CardActions>
        <Button size="small" color="primary" onClick={goHome}>
          Back
        </Button>
      </CardActions>
    </div>
  );
};

export default withStyles(styles)(Flower);
