import React from "react";
import {
  Badge,
  Grid,
  Hidden,
  Typography,
  FormHelperText,
} from "@material-ui/core";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillBellFill } from "react-icons/bs";
import { MdBusinessCenter } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const history = useHistory();

  const handleProfileNavigation = () => {
    true ? history.push("/primary-actions") : history.push("/my-profile");
  };

  const adminProfileNavigation = () => {
    false ? history.push("/primary-actions") : history.push("/admin-profile");
  };

  const handleNotificationsNavigation = () => {
    history.push("/notifications");
  };

  return (
    <Grid container xs={12}>
      <Grid item xs={12} className="nav-bar-cnt flex align-items-center">
        <Hidden only={["md", "lg", "xl"]}>
          <GiHamburgerMenu className="menu-icon" />
        </Hidden>
        <Grid item xs={12}>
          <Typography className="nav-logo">workcanios</Typography>
        </Grid>
        <Grid item xs={3}>
          <div className="nav-icons-cnt-1">
            <Hidden only={["xs", "sm"]}>
              <Link to="/wlp">
                <FormHelperText className="nav-all-workers">
                  All workers
                </FormHelperText>
              </Link>
            </Hidden>
          </div>
        </Grid>
        <Grid item xs={9} className="flex nav-icons-cnt">
          <div className="nav-icons-cnt-1" onClick={handleProfileNavigation}>
            <FaUserAlt className="nav-icons" />
            <Hidden only={["xs", "sm"]}>
              <FormHelperText className="nav-icons-cnt-1-text">
                Hi Pranav!
              </FormHelperText>
            </Hidden>
          </div>
          <div
            className="nav-icons-cnt-1"
            onClick={handleNotificationsNavigation}
          >
            <Badge badgeContent={6} color="secondary">
              <BsFillBellFill className="nav-icons" />
            </Badge>
            <Hidden only={["xs", "sm"]}>
              <FormHelperText className="nav-icons-cnt-1-text">
                notifications
              </FormHelperText>
            </Hidden>
          </div>
          <Hidden only={["xs", "sm"]}>
            <div className="nav-icons-cnt-1" onClick={adminProfileNavigation}>
              <MdBusinessCenter className="nav-icons" />
              <Hidden only={["xs", "sm"]}>
                <FormHelperText className="nav-icons-cnt-1-text">
                  business
                </FormHelperText>
              </Hidden>
            </div>
          </Hidden>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NavigationBar;
