import React from "react";
import classes from "./styles.module.css";
import { Button, Stack, Typography } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const SectionHeader = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Typography variant="h6" fontWeight={700}>
        Top Soccer Games
      </Typography>

      <Stack direction={"row"} alignItems={"center"} spacing={2}>
        <Button
          variant="contained"
          className={`${classes.NavigationButtons} ${classes.viewAllBtn}`}
        >
          View All
        </Button>

        <KeyboardArrowLeftIcon
          className={`${classes.NavigationButtons} ${classes.arrowButton}`}
        />

        <KeyboardArrowRightIcon
          className={`${classes.NavigationButtons} ${classes.arrowButton}`}
        />
      </Stack>
    </Stack>
  );
};

export default SectionHeader;
