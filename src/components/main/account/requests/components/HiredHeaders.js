import React from "react";
import { Grid } from "@material-ui/core";

const HiredHeaders = () => {
  return (
      <Grid item xs={12}>
        <Grid item xs={12} className="flex">
          <Grid item xs={6} className="hired-header-name">Workers</Grid>
          <Grid item xs={2} className="hired-header-name" style={{textAlign: 'center'}}>Requested For</Grid>
          <Grid item xs={2} className="hired-header-name" style={{textAlign: 'center'}}>From</Grid>
          <Grid item xs={2} className="hired-header-name" style={{textAlign: 'end'}}>Status</Grid>
        </Grid>
        <Grid item xs={12} className="black-line"></Grid>
    </Grid>
  );
};

export default HiredHeaders;
