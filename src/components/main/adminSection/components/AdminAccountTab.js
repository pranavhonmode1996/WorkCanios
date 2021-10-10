import React from "react";
import { Typography } from "@material-ui/core";
import AdminTabData from "../../adminSection/AdminTabData";
import { Link } from "react-router-dom";

const AdminAccountTab = () => {
  return (
    <div className="admin-tab-cnt">
      {AdminTabData &&
        AdminTabData.map((data) => {
          return (
            <Link to={`${data.link}`} style={{textDecoration: 'none'}}>
              <div className="flex align-items-center td-c">
                {data.icon}
                <Typography className="admin-tab-cnt-title">{data.title}</Typography>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default AdminAccountTab;