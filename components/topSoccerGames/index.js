import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
// import classes from "./topSoccerGames.module.css";
import SectionHeader from "./sectionHeader";
import SoccerCards from "./soccerCards";
import { data } from "../../constants/data";
import { SelectedContext } from "../../context/SelectedContext";

const TopSoccerGames = () => {
  const { selected } = useContext(SelectedContext);

  return (
    <Box marginTop={"2rem"}>
      <SectionHeader />
      {selected.length > 0 ? (
        <Stack
          spacing={1}
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {selected.map((item, index) => (
            <Typography key={index} variant="caption" fontWeight={700}>
              {item.teams.map(
                (team, index) => team.teamName + (index !== 0 ? "" : " / ")
              )}{" "}
              :{" "}
              <span style={{ color: "#fbff20" }}>
                {!isNaN(
                  parseFloat(item.buttons.min) * parseFloat(item.buttons.top)
                )
                  ? parseFloat(item.buttons.min) * parseFloat(item.buttons.top)
                  : item.buttons.min + "/" + item.buttons.top}
              </span>
            </Typography>
          ))}
        </Stack>
      ) : null}
      <Grid container spacing={2} marginTop={2}>
        {data.length > 0 &&
          data.map((item, index) => (
            <Grid key={index} item xs={12} sm={7} md={4.8} lg={3.6}>
              <SoccerCards item={item} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default TopSoccerGames;
