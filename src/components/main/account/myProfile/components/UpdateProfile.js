import React from "react";
import { Button, FormHelperText, Grid, TextField, Typography } from "@material-ui/core";
import UseInput from "../../../../comman/customeHooks/UseInput";

const UpdateProfile = () => {
    const [firstName, handleFirstName, resetFirstName] = UseInput('');
    const [lastName, handleLastName, resetLastName] = UseInput('');
    const [mobileNumber, handleMobileNumber, resetMobileNumber] = UseInput('');
    const [email, handleEmail, resetEmail] = UseInput('');

    const handleUpdateProfile = () => {}
    
  return (
    <Grid item xs={12}>
      <Grid item xs={12}>
        <Typography className="profile-main-title">My Profile</Typography>
        <Typography className="profile-update-title">Update Profile</Typography>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
          <FormHelperText>First Name</FormHelperText>
          <TextField variant="outlined" fullWidth {...handleFirstName} />
        </Grid>
        <Grid item xs={6} md={4}>
          <FormHelperText>Last Name</FormHelperText>
          <TextField variant="outlined" fullWidth {...handleLastName} />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
          <FormHelperText>Mobile Number</FormHelperText>
          <TextField variant="outlined" fullWidth {...handleMobileNumber} />
        </Grid>
        <Grid item xs={6} md={4}>
          <FormHelperText>Email</FormHelperText>
          <TextField variant="outlined" fullWidth {...handleEmail} />
        </Grid>
      </Grid>
      <Button variant="outlined" className="update-btn" onClick={handleUpdateProfile}>Update</Button>
    </Grid>
  );
};

export default UpdateProfile;
