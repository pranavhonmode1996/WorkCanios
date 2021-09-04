import React from "react";
import { Grid } from "@material-ui/core";
import AccountTab from "./components/AccountTab";

const Account = () => {
  return (
    <Grid container>
      <Grid item xs={12} className="flex account-cnt">
        <Grid item xs={3}>
          <AccountTab />
        </Grid>
        <Grid item xs={9}>
          how are you
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Account;
