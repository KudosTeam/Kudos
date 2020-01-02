import React from "react";
import {
  withStyles,
  WithStyles,
  Theme,
  Typography,
  Select,
  MenuItem,
  Card,
  Avatar
} from "@material-ui/core";
import { StyleRules } from "@material-ui/core/styles";
import {
  ComplimentsSelectionCardPropsMappedFromState,
  ComplimentsSelectionCardPropsMappedFromDispatch
} from "../containers/ComplimentsSelectionCard";

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

type ComplimentsSelectionCardProps = ComplimentsSelectionCardPropsMappedFromState &
  ComplimentsSelectionCardPropsMappedFromDispatch &
  WithStyles<typeof styles>;

const ComplimentsSelectionCard: React.FC<ComplimentsSelectionCardProps> = ({
  selectCompliment,
  selectedCompliment,
  compliments,
  classes
}) => {
  const renderMenuItems = () => {
    return compliments.map((compliment, index) => (
      <MenuItem key={index} value={compliment}>
        {compliment}
      </MenuItem>
    ));
  };

  return (
    <Card raised={true} className={classes.card}>
      <Typography variant="h5">Choose a Compliment</Typography>
      <Avatar
        src={require("../assets/choose.png")}
        alt="choose icon"
        className={classes.avater}
      />
      <br />
      <br />
      <Select
        style={{ width: "300px" }}
        displayEmpty={true}
        name="compliment"
        onChange={e => selectCompliment(e)}
        value={selectedCompliment}
      >
        {renderMenuItems()}
      </Select>
    </Card>
  );
};

export default withStyles(styles)(ComplimentsSelectionCard);
