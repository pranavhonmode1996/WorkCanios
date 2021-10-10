import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import AdminAccountTab from "../../adminSection/components/AdminAccountTab";
import AdditionalInfo from "./components/AdditionalInfo";
import UpdatePassword from "./components/UpdatePassword";
const Profile = () => {
  return (
    <Grid container>
      <Grid item xs={12} className="flex admin-section">
        <Hidden only={["xs", "sm"]}>
          <Grid item xs={3}>
            <AdminAccountTab />
          </Grid>
        </Hidden>
        <Grid item xs={12} md={9} lg={9} className="admin-cnt">
          <AdditionalInfo />
          <hr />
          <UpdatePassword />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Profile;
