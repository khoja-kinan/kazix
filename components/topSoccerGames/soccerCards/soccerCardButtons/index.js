import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import classes from "./soccerCardButtons.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const SoccerCardButtons = () => {
  return (
    <Grid container spacing={1} wrap="wrap" alignItems={"center"}>
      {/* frist element */}
      <Grid item xs={3.5}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          className={classes.buttonsContainer}
        >
          <Typography
            variant="body2"
            component="p"
            className={classes.buttomNumbers}
          >
            1
          </Typography>
          <Typography
            variant="body2"
            component="p"
            className={classes.buttomNumbers}
          >
            1.05
          </Typography>
        </Stack>
      </Grid>
      {/* Second Element */}
      <Grid item xs={3.5}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          className={classes.buttonsContainer}
        >
          <Typography
            variant="body2"
            component="p"
            className={classes.buttomNumbers}
          >
            1
          </Typography>
          <Typography
            variant="body2"
            component="p"
            className={classes.buttomNumbers}
          >
            1.05
          </Typography>
        </Stack>
      </Grid>
      {/* Third Element */}
      <Grid item xs={3.5}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          className={classes.buttonsContainer}
        >
          <Typography
            variant="body2"
            component="p"
            className={classes.buttomNumbers}
          >
            1
          </Typography>
          <Typography
            variant="body2"
            component="p"
            className={classes.buttomNumbers}
          >
            1.05
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={0.5}>
        {/*  <KeyboardArrowDownIcon
          className={`${classes.arrowButton} ${classes.NavigationButtons}`}
        /> */}

        <svg
          width="30"
          height="30"
          viewBox="0 0 15 14"
          fill="none"
          className={` ${classes.NavigationButtons}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Chevron">
            <path
              id="Icon"
              d="M4.33325 5.25L7.83325 8.75L11.3333 5.25"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
      </Grid>
    </Grid>
  );
};

export default SoccerCardButtons;
