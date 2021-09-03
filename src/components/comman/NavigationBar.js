import React from "react";
import { Grid, Hidden, Typography } from "@material-ui/core";
import { GiHamburgerMenu } from "react-icons/gi";

const NavigationBar = () => {
  return (
    <Grid container xs={12}>
      <Grid item xs={12} className="nav-bar-cnt flex align-items-center">
        <Hidden only={['md', 'lg', 'xl']}>
          <GiHamburgerMenu className="menu-icon" />
        </Hidden>
        <Grid item xs={3}>
          <Typography className="nav-logo">workcanios</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NavigationBar;
