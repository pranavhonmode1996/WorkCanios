import React from "react";
import { Button, FormHelperText, Grid, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Grid container xs={12} className="collapsible-cnt">
      <Grid item xs={12} md={12}>
        <TextField
          className="textfield"
          fullWidth
          variant="outlined"
          label="Email Address"
        />
      </Grid>
      <Grid item xs={12} md={12}>
        <TextField
          className="textfield"
          fullWidth
          variant="outlined"
          label="Password"
        />
      </Grid>
      <Grid item xs={12}>
        <Link to="#" style={{ textDecoration: "none" }}>
          <FormHelperText className="fp">Forgot Password</FormHelperText>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Button variant="outlined" className="login-bnt">
          Login
        </Button>
      </Grid>
    </Grid>
  );
};

export default Login;
