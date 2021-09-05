import React from "react";
import { Button, FormHelperText, Grid, TextField, Typography } from "@material-ui/core";
import UseInput from "../../../../comman/customeHooks/UseInput";
import { toast } from "react-toastify";

const UpdatePassword = () => {
    const [oldPassword, handleOldPassword, resetOldPassword] = UseInput('');
    const [NewPAssword, handleNewPassword, resetNewPassword] = UseInput('');

    const handleUpdatePassword = () => {
        toast.success('done')
    }
    
  return (
    <Grid item xs={12}>
      <Grid item xs={12}>
        <Typography className="profile-update-title">Update Password</Typography>
      </Grid>
        <Grid item xs={12} md={4}>
          <FormHelperText>Old Password</FormHelperText>
          <TextField variant="outlined" fullWidth {...handleOldPassword} />
        </Grid>
        <Grid item xs={12} md={4}>
          <FormHelperText>New Password</FormHelperText>
          <TextField variant="outlined" fullWidth {...handleNewPassword} />
        </Grid>
      <Button variant="outlined" className="update-btn" onClick={handleUpdatePassword}>Change Password</Button>
    </Grid>
  );
};

export default UpdatePassword;
