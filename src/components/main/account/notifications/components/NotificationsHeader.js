import React from "react";
import { Grid } from "@material-ui/core";

const NotificationsHeader = () => {
  return (
    <Grid item xs={12} className="flex">
      <Grid item xs={6}>hello</Grid>
      <Grid item xs={2}>how are you</Grid>
      <Grid item xs={2}>i am fine</Grid>
      <Grid item xs={2}>thank you</Grid>
    </Grid>
  );
};

export default NotificationsHeader;
