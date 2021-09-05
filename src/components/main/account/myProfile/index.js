import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import AccountTab from "../components/AccountTab";
import UpdateProfile from "./components/UpdateProfile";

const MyProfile = () => {
  return (
    <Grid container>
      <Grid item xs={12} className="flex account-cnt">
        <Hidden only={['xs', 'sm']}>
          <Grid item xs={3}>
            <AccountTab />
          </Grid>
        </Hidden>
        <Grid item xs={12} md={9} className="profile-cnt">
          <UpdateProfile />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MyProfile;
