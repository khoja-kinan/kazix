import React, { useContext } from "react";
import { Stack, Typography } from "@mui/material";
import classes from "../style.module.css";

const TeamNamesAndNumbers = () => {
  return (
    <Stack spacing={1}>
      <Stack
        justifySelf={"center"}
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <h3>Tottenham</h3> <span className={classes.dashSpan}>-</span>{" "}
        <h3>Leicester City</h3>
      </Stack>

      <Stack
        justifySelf={"center"}
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        spacing={2}
      >
        <Typography variant="h4" component="p" className={classes.Cardnumbers}>
          4
        </Typography>
        <Typography variant="h4" component="p" className={classes.Cardnumbers}>
          2
        </Typography>
      </Stack>
    </Stack>
  );
};

export default TeamNamesAndNumbers;
