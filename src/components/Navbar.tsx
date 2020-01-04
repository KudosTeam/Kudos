import React from "react";
import { withStyles, WithStyles, Theme, Typography } from "@material-ui/core";
import { StyleRules } from "@material-ui/core/styles";
import logo from "../assets/logo.png";
import heart from "../assets/heart-exclamation.png";

const styles = (theme: Theme): StyleRules => ({
  header: {
    backgroundColor: "white",
    padding: theme.spacing(2)
  },
  logo: {
    height: 100
  },
  subtitleContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing()
  },
  heart: {
    height: "2%",
    width: "2%"
  }
});

type NavbarProps = WithStyles<typeof styles>;

const Navbar: React.FC<NavbarProps> = ({ classes }) => (
  <header className={classes.header}>
    <img src={logo} className={classes.logo} alt="logo" data-cy="logo" />
    <div className={classes.subtitleContainer}>
      <img src={heart} className={classes.heart} alt="leftLoveLogo" />
      <Typography variant="h5">Bring back the Love{"  "}</Typography>
      <img src={heart} className={classes.heart} alt="rightLoveLogo" />
    </div>
  </header>
);

export default withStyles(styles)(Navbar);
