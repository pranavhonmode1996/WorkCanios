import React from "react";
import { Typography } from "@material-ui/core";
import TabData from "../TabData";
import { Link } from "react-router-dom";

const AccountTab = () => {
  return (
    <div className="tab-cnt">
      {TabData &&
        TabData.map((data) => {
          return (
            <Link to={`${data.link}`} style={{textDecoration: 'none'}}>
              <div className="flex align-items-center td-c">
                {data.icon}
                <Typography className="tab-cnt-title">{data.title}</Typography>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default AccountTab;
