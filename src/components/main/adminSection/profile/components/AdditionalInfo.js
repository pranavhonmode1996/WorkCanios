import React from "react";
import {
  Button,
  FormHelperText,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import UseInput from "../../../../comman/customeHooks/UseInput";
import { toast } from "react-toastify";
import CustomeDropdown from "../../components/CustomeDropdown";

const AdditionalInfo = () => {
  const [firstName, handleFirstName, resetFirstName] = UseInput("");
  const [lastName, handleLastName, resetLastName] = UseInput("");
  const [mobileNumber, handleMobileNumber, resetMobileNumber] = UseInput("");
  const [email, handleEmail, resetEmail] = UseInput("");

  const handleUpdateProfile = () => {
    toast.success("done");
  };

  return (
    <Grid item xs={12}>
      <Grid item xs={12}>
        <Typography className="admin-profile-main-title">Admin Profile</Typography>
        <Typography className="admin-profile-update-title">
          {false ? `Update Profile` : `Add Profile Info`}
        </Typography>
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

      <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
          <FormHelperText>Designation</FormHelperText>
          <CustomeDropdown />
        </Grid>
        <Grid item xs={6} md={4}>
          <FormHelperText>Age</FormHelperText>
          <TextField variant="outlined" fullWidth {...handleEmail} />
        </Grid>
      </Grid>

      <Button
        variant="outlined"
        className="admin-update-btn"
        onClick={handleUpdateProfile}
      >
        Publish
      </Button>
    </Grid>
  );
};

export default AdditionalInfo;
