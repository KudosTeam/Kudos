import React from "react";
import {
  withStyles,
  WithStyles,
  Theme,
  Button,
  TextField,
  Card,
  Avatar,
  Typography
} from "@material-ui/core";
import { StyleRules } from "@material-ui/core/styles";
import {
  ComplimentTypeCardPropsMappedFromState,
  ComplimentTypeCardPropsMappedFromDispatch
} from "../containers/ComplimentTypeCard";

const styles = (theme: Theme): StyleRules => ({
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avater: {
    width: 150,
    height: 150,
    margin: theme.spacing(2)
  },
  textfield: {
    margin: theme.spacing(3),
    width: 200
  }
});

type ComplimentTypeCardProps = ComplimentTypeCardPropsMappedFromState &
  ComplimentTypeCardPropsMappedFromDispatch &
  WithStyles<typeof styles>;

const ComplimentTypeCard: React.FC<ComplimentTypeCardProps> = ({
  selectCompliment,
  saveCompliment,
  classes
}) => (
  <Card raised={true} className={classes.card}>
    <Typography variant="h5">Write a Compliment</Typography>
    <Avatar
      src={require("../assets/write.png")}
      alt="choose icon"
      className={classes.avater}
    />
    <TextField
      type="text"
      id="complimentText"
      color="primary"
      placeholder="Type in a compliment."
      onChange={selectCompliment}
      className={classes.textfield}
    />
    <Button variant="contained" onClick={saveCompliment}>
      Save Compliment
    </Button>
  </Card>
);

export default withStyles(styles)(ComplimentTypeCard);
