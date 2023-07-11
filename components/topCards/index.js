import React from "react";
import { Grid } from "@mui/material";
import CustomCard from "./Card";
const TopCards = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <CustomCard />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CustomCard />
      </Grid>
    </Grid>
  );
};

export default TopCards;
