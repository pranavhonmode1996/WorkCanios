import React from "react";
import { Grid } from "@material-ui/core";
import AdminAccountTab from "../../adminSection/components/AdminAccountTab";
import AdditionalInfo from "./components/AdditionalInfo";
const Profile = () => {
  return (
    <Grid container>
      <Grid item xs={12} className="flex admin-section">
        <Grid item xs={3}>
          <AdminAccountTab />
        </Grid>
        <Grid item xs={9} className="admin-cnt">
          <AdditionalInfo />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Profile;
