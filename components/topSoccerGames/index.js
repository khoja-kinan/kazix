import { Box, Grid } from "@mui/material";
import React from "react";
import classes from "./topSoccerGames.module.css";
import SectionHeader from "./sectionHeader";
import SoccerCards from "./soccerCards";

const TopSoccerGames = () => {
  return (
    <Box marginTop={"2rem"}>
      <SectionHeader />
      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={12} sm={3.3}>
          <SoccerCards />
        </Grid>
        <Grid item xs={12} sm={3.3}>
          <SoccerCards />
        </Grid>
        <Grid item xs={12} sm={3.3}>
          <SoccerCards />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TopSoccerGames;
