import React from 'react';
import { Typography } from "@material-ui/core";
import TabData from "../TabData";

const AccountTab = () => {
    return(
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
    )
}

export default AccountTab;