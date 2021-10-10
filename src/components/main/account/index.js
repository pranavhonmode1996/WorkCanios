import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import MyProfile from "./myProfile";

const Account = () => {
  return (
    <Grid container>
      <Grid item xs={12} className="flex account-cnt">
        <Hidden only={["xs", "sm"]}>
          <MyProfile />
        </Hidden>
      </Grid>
    </Grid>
  );
};

export default Account;
