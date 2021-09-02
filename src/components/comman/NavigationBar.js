import React from "react";
import { Grid, Typography } from "@material-ui/core";

const NavigationBar = () => {
  return (
    <Grid container xs={12}>
      <Grid item xs={12} className="nav-bar-cnt flex align-items-center">
        <Grid item xs={3}>
          <Typography className="nav-logo">workcanios</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NavigationBar;
