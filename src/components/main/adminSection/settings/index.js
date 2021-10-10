import React from "react";
import { Grid } from "@material-ui/core";
import AdminAccountTab from "../components/AdminAccountTab";
const Settings = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid item xs={3}>
          <AdminAccountTab />
        </Grid>
        <Grid item xs={9}></Grid>
      </Grid>
    </Grid>
  );
};

export default Settings;
