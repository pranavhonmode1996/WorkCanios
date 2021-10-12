import React, { useEffect } from "react";
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
import { DesktopTimePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { dropdownData } from "../../../../comman/DropdownData";
import { isEmail } from "../../../../comman/utils";
import { useDispatch } from "react-redux";
import { actions as adminProfileActions } from "../redux/actions";

const AdditionalInfo = () => {
  const dispatch = useDispatch();
  const [firstName, handleFirstName] = UseInput("");
  const [lastName, handleLastName] = UseInput("");
  const [mobileNumber, handleMobileNumber] = UseInput("");
  const [email, handleEmail] = UseInput("");
  const [desig, handleDesig] = React.useState("");
  const [age, handleAge] = UseInput("");
  const [genderr, handleGenderr] = React.useState("");
  const [exp, handleExp] = UseInput("");
  const [WrokingHars, handleWorkingHrs] = UseInput("");
  const [timeFrom, setTimeFrom] = React.useState(new Date());
  const [timeTo, setTimeTo] = React.useState(new Date());
  const [baseAmount, handleBaseAmountCharges] = UseInput("");
  const [currentLocation, handleLocation] = React.useState("");
  const [designations, setDesignations] = React.useState([]);
  const [gender, setGender] = React.useState([]);
  const [currentLocations, setCurrentLocations] = React.useState([]);
  const [isValidate, setIsValidate] = React.useState(false);

  const formHelperTextStyle = {
    fontWeight: "bold",
    color: "#000000",
  };

  const handleUpdateProfile = () => {
    if (
      !firstName ||
      firstName === "" ||
      !lastName ||
      lastName === "" ||
      !isEmail(email)
    ) {
      setIsValidate(false);
    } else {
      setIsValidate(true);
      dispatch(
        adminProfileActions.addAdminProfileInfoReq({
          reqData: {
            firstName: firstName,
            lastName: lastName,
            mobileNumber: mobileNumber,
            email: email,
            desig: desig,
            age: age,
            gender: genderr,
            exp: exp,
            WrokingHars: WrokingHars,
            timeFrom: timeFrom,
            timeTo: timeTo,
            baseAmount: baseAmount,
            currentLocation: currentLocation,
          },
        })
      );
    }
  };

  useEffect(() => {
    setDesignations(dropdownData.designations);
    setGender(dropdownData.gender);
    setCurrentLocations(dropdownData.currentLocation);
  }, []);

  return (
    <Grid item xs={12}>
      <Grid item xs={12}>
        <Typography className="admin-profile-main-title">
          Admin Profile
        </Typography>
        <Typography className="admin-profile-update-title">
          {false ? `Update Profile` : `Add Profile Info`}
        </Typography>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
          <FormHelperText style={formHelperTextStyle}>
            First Name
          </FormHelperText>
          <TextField variant="outlined" fullWidth {...handleFirstName} />
        </Grid>
        <Grid item xs={6} md={4}>
          <FormHelperText style={formHelperTextStyle}>Last Name</FormHelperText>
          <TextField variant="outlined" fullWidth {...handleLastName} />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
          <FormHelperText style={formHelperTextStyle}>
            Mobile Number
          </FormHelperText>
          <TextField variant="outlined" fullWidth {...handleMobileNumber} />
        </Grid>
        <Grid item xs={6} md={4}>
          <FormHelperText style={formHelperTextStyle}>Email</FormHelperText>
          <TextField variant="outlined" fullWidth {...handleEmail} />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
          <FormHelperText style={formHelperTextStyle}>
            Designation
          </FormHelperText>
          <CustomeDropdown
            data={designations}
            handleEvent={handleDesig}
            eventValue={desig}
          />
        </Grid>
        <Grid item xs={6} md={4}>
          <FormHelperText style={formHelperTextStyle}>Age</FormHelperText>
          <TextField variant="outlined" fullWidth {...handleAge} />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
          <FormHelperText style={formHelperTextStyle}>Gender</FormHelperText>
          <CustomeDropdown
            data={gender}
            handleEvent={handleGenderr}
            eventValue={genderr}
          />
        </Grid>
        <Grid item xs={6} md={4}>
          <FormHelperText style={formHelperTextStyle}>
            Total Experience (In year)
          </FormHelperText>
          <TextField variant="outlined" fullWidth {...handleExp} />
        </Grid>
      </Grid>

      <Grid item>
        <Grid container xs={12} md={8} spacing={2}>
          <Grid item xs={12} md={4}>
            <FormHelperText style={formHelperTextStyle}>
              Working Hrs
            </FormHelperText>
            <TextField variant="outlined" fullWidth {...handleWorkingHrs} />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormHelperText style={formHelperTextStyle}>From</FormHelperText>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopTimePicker
                value={timeFrom}
                onChange={(newValue) => {
                  setTimeFrom(newValue);
                }}
                renderInput={(params) => (
                  <TextField variant="outlined" fullWidth {...params} />
                )}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} md={4}>
            <FormHelperText style={formHelperTextStyle}>To</FormHelperText>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopTimePicker
                value={timeTo}
                onChange={(newValue) => {
                  setTimeTo(newValue);
                }}
                renderInput={(params) => (
                  <TextField variant="outlined" fullWidth {...params} />
                )}
              />
            </LocalizationProvider>
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
          <FormHelperText style={formHelperTextStyle}>
            Base Amount Charges
          </FormHelperText>
          <TextField
            variant="outlined"
            fullWidth
            {...handleBaseAmountCharges}
          />
        </Grid>
        <Grid item xs={6} md={4}>
          <FormHelperText style={formHelperTextStyle}>
            Your Current Location
          </FormHelperText>
          <CustomeDropdown
            data={currentLocations}
            handleEvent={handleLocation}
            eventValue={currentLocation}
          />
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
