import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import UseInput from "../../comman/customeHooks/UseInput";
const SearchBar = () => {
  const [search, handleSearch] = UseInput("");

  return (
    <Grid container>
      <Grid item xs={12} className="search-bar-cnt flex justify-center">
        <input className="search-box" placeholder="Search" {...handleSearch} />
      </Grid>
    </Grid>
  );
};

export default SearchBar;
