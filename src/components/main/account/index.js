import React from "react";
import { Grid, Typography } from "@material-ui/core";
import TabData from "./TabData";

const Account = () => {
  return (
    <Grid container>
      <Grid item xs={12} className="flex account-cnt">
        <Grid item xs={3}>
          <div className="tab-cnt">
            {TabData &&
              TabData.map((data) => {
                return (
                    <div className="flex align-items-center td-c">
                        {data.icon}
                        <Typography className="tab-cnt-title">{data.title}</Typography>
                    </div>
                );
              })}
          </div>
        </Grid>
        <Grid item xs={9}>
          how are you
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Account;
