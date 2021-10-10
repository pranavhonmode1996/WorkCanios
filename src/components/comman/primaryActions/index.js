import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Collapsible from "react-collapsible";
import { ImRadioChecked2, ImRadioUnchecked } from "react-icons/im";
import Login from "./login";
import Register from "./register";

const PrimaryActions = () => {
  const [isOpen, setIsOpen] = React.useState("login");

  const handleCollapsibles = () => {
    isOpen === "login" ? setIsOpen("register") : setIsOpen("login");
  };

  return (
    <Grid container className="login-cnt flex justify-center">
      <Grid item xs={12} md={5}>
        {/* For Login */}
        <div className="login-cnt-inner">
          <Collapsible
            trigger={
              <div onClick={handleCollapsibles}>
                <Typography className="flex align-items-center login-title">
                  <ImRadioUnchecked className="icon" /> Login
                </Typography>
              </div>
            }
            triggerWhenOpen={
              <div onClick={handleCollapsibles}>
                <Typography className="flex align-items-center login-title">
                  <ImRadioChecked2 className="icon" /> Login
                </Typography>
              </div>
            }
            open={isOpen === 'login'}
          >
            {Login()}
          </Collapsible>
        </div>

        {/* For Registration */}
        <div className="login-cnt-inner">
          <Collapsible
            trigger={
              <div onClick={handleCollapsibles}>
                <Typography className="flex align-items-center login-title">
                  <ImRadioUnchecked className="icon" /> Register
                </Typography>
              </div>
            }
            triggerWhenOpen={
              <div onClick={handleCollapsibles}>
                <Typography className="flex align-items-center login-title">
                  <ImRadioChecked2 className="icon" /> Register
                </Typography>
              </div>
            }
            open={isOpen === 'register'}
          >
            {Register()}
          </Collapsible>
        </div>
      </Grid>
    </Grid>
  );
};

export default PrimaryActions;
