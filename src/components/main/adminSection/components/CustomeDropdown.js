import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { Grid, Select } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function CustomeDropdown({ data, handleEvent, eventValue }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    handleEvent(event.target.value);
  };

  const handleOpenClose = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <Grid item xs={12}>
      <FormControl className={classes.formControl} variant="outlined" fullWidth>
        <Select
          id="demo-controlled-open-select"
          open={open}
          onClose={handleOpenClose}
          onOpen={handleOpenClose}
          value={eventValue}
          onChange={handleChange}
        >
          {data &&
            data.map((value) => {
              return (
                <MenuItem value={value.title}>
                  {value.title}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
    </Grid>
  );
}
