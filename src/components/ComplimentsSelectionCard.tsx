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
  app: {
    textAlign: "center"
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
    <Card raised={true}>
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
        onChange={e => selectCompliment(e)}
        value={selectedCompliment}
      >
        {renderMenuItems()}
      </Select>
    </Card>
  );
};

export default withStyles(styles)(ComplimentsSelectionCard);
