import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import classes from "../style.module.css";

const BottomContent = () => {
  return (
    <Grid container spacing={1}>
      {/* frist element */}
      <Grid item xs={4}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          className={classes.bottomNumbersContainer}
        >
          <Typography
            variant="h6"
            component="p"
            className={classes.buttomNumbers}
          >
            1
          </Typography>{" "}
          <Typography
            variant="h6"
            component="p"
            className={classes.buttomNumbers}
          >
            1.05
          </Typography>
        </Stack>
      </Grid>
      {/* Second Element */}
      <Grid item xs={4}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          className={classes.bottomNumbersContainer}
        >
          <Typography
            variant="h6"
            component="p"
            className={classes.buttomNumbers}
          >
            Draw
          </Typography>{" "}
          <Typography
            variant="h6"
            component="p"
            className={classes.buttomNumbers}
          >
            2.40
          </Typography>
        </Stack>
      </Grid>
      {/* Third Element */}
      <Grid item xs={4}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          className={classes.bottomNumbersContainer}
        >
          <Typography
            variant="h6"
            component="p"
            className={classes.buttomNumbers}
          >
            2
          </Typography>{" "}
          <Typography
            variant="h6"
            component="p"
            className={classes.buttomNumbers}
          >
            5.13
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default BottomContent;
