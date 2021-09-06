import React from "react";
import { Grid, Hidden, Typography } from "@material-ui/core";
import AccountTab from "../components/AccountTab";
import HiredHeaders from "./components/HiredHeaders";
import Image from '../../../../assets/images/user.jpg';
import { Rating } from "@material-ui/lab";

const YourHired = () => {
  return (
    <Grid container>
      <Grid item xs={12} className="flex account-cnt">
        <Hidden only={["xs", "sm"]}>
          <Grid item xs={3}>
            <AccountTab />
          </Grid>
        </Hidden>
        <Grid item xs={12} md={9} className="hired-cnt">
          <Grid item xs={12}>
            <Typography className="hired-main-title">Your Hired</Typography>
            <Typography className="hired-subtitle">All Workers</Typography>
          </Grid>
          <Grid item xs={12}>
            <HiredHeaders />
            <Grid item xs={12} className="flex" style={{margin: '1rem 0'}}>
              <Grid item xs={6} className="flex">
                  <Grid item xs={3} className="hired-image-cnt">
                      <img src={Image} alt="" />
                  </Grid>
                  <Grid item xs={9} style={{padding: '0 0.6rem'}}>
                      <Typography>Pranav Honmode</Typography>
                      <span className="flex align-items-center">
                      Given Rating: <Rating className="rating" name="size-large" value={5} size="small" />
                      </span>
                  </Grid>
              </Grid>
              <Grid item xs={2}>
                  <Typography style={{textAlign: 'center'}}>200$</Typography>
              </Grid>
              <Grid item xs={2}>
                  <Typography style={{textAlign: 'center'}}>Shrirampur</Typography>
              </Grid>
              <Grid item xs={2}>
                  <Typography style={{textAlign: 'end'}}>Payment Confirmed</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default YourHired;
