import React, { useState } from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import { isEmail } from "../../utils";
import { useDispatch } from "react-redux";
import {actions as signupAction} from '../redux/actions';

const Register = () => {
  const dispatch = useDispatch();
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isValidate, setIsValidate] = useState(false);

  const handleChange = (name, event) => {
    setRegisterData({ ...registerData, [name]: event.target.value });
  };

  const handleRegistration = () => {
    if (
      !registerData.firstName ||
      registerData.firstName === "" ||
      !registerData.lastName ||
      registerData.lastName === "" ||
      !registerData.email ||
      registerData.email === "" ||
      !isEmail ||
      !registerData.password ||
      registerData.password === "" ||
      !registerData.confirmPassword ||
      registerData.confirmPassword === ""
    ) {
      setIsValidate(false);
    } else {
      setIsValidate(true);
      dispatch(
        signupAction.userSignupReq({
          reqData: {
            firstName: registerData.firstName,
            lastName: registerData.lastName,
            email: registerData.email,
            password: registerData.password,
            confirmPassword: registerData.confirmPassword,
          }
        })
      )
    }
  };

  return (
    <Grid container xs={12} className="collapsible-cnt">
      <Grid item xs={6} md={6}>
        <TextField
          fullWidth
          variant="outlined"
          value={registerData.firstName}
          onChange={(e) => handleChange("firstName", e)}
          className="textfield"
          label="First Name"
        />
      </Grid>
      <Grid item xs={6} md={6}>
        <TextField
          fullWidth
          variant="outlined"
          value={registerData.lastName}
          onChange={(e) => handleChange("lastName", e)}
          className="textfield"
          label="Last Name"
        />
      </Grid>
      <Grid item xs={12} md={12}>
        <TextField
          fullWidth
          variant="outlined"
          value={registerData.email}
          onChange={(e) => handleChange("email", e)}
          className="textfield"
          label="Email Address"
        />
      </Grid>
      <Grid item xs={6} md={6}>
        <TextField
          fullWidth
          variant="outlined"
          value={registerData.password}
          onChange={(e) => handleChange("password", e)}
          className="textfield"
          label="Password"
        />
      </Grid>
      <Grid item xs={6} md={6}>
        <TextField
          fullWidth
          variant="outlined"
          value={registerData.confirmPassword}
          onChange={(e) => handleChange("confirmPassword", e)}
          className="textfield"
          label="Confirm Password"
        />
      </Grid>
      <Grid item xs={12} md={12}>
        <Button
          variant="outlined"
          className="register-btn"
          onClick={handleRegistration}
        >
          Register
        </Button>
      </Grid>
    </Grid>
  );
};

export default Register;
