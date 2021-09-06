import React from "react";
import { Grid } from "@material-ui/core";
import MyProfile from "./myProfile";

const Account = () => {
  return (
    <Grid container>
      <Grid item xs={12} className="flex account-cnt">
        <MyProfile />
      </Grid>
    </Grid>
  );
};

export default Account;
