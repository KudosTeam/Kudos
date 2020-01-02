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
  }
});

type ComplimentTypeCardProps = ComplimentTypeCardPropsMappedFromState &
  ComplimentTypeCardPropsMappedFromDispatch &
  WithStyles<typeof styles>;

const ComplimentTypeCard: React.FC<ComplimentTypeCardProps> = ({
  selectCompliment,
  saveCompliment,
  fetchCompliments,
  classes
}) => (
  <Card raised={true} className={classes.card}>
    <Typography variant="h5">Write a Compliment</Typography>
    <Avatar
      src={require("../assets/write.png")}
      alt="choose icon"
      className={classes.avater}
    />
    <br />
    <TextField
      type="text"
      id="complimentText"
      color="primary"
      placeholder="Type in a compliment."
      onChange={selectCompliment}
    />
    <br />
    <Button
      variant="contained"
      onClick={() => {
        saveCompliment();
        fetchCompliments();
      }}
    >
      Save Compliment
    </Button>
  </Card>
);

export default withStyles(styles)(ComplimentTypeCard);
