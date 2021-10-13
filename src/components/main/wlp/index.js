import React from "react";
import { Grid, Typography } from "@material-ui/core";

const WLP = () => {
  return (
    <Grid container className="wlp-cnt">
      <Grid item xs={12}>
        <Typography className="wlp-main-title">Hire Workers</Typography>
        <div className="black-line" />
      </Grid>
      <Grid item xs={12}>
          <Grid item xs={12} style={{padding: '0.6rem 0 0 0'}}>
              <Typography className="total-count">10000 workers</Typography>
          </Grid>
          <Grid item xs={12}>
              
          </Grid>
      </Grid>
    </Grid>
  );
};

export default WLP;
