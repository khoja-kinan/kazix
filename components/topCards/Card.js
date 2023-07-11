import React from "react";
import classes from "./style.module.css";
import { Box, Card, CardContent, Stack } from "@mui/material";
import CustomBreadcrumbs from "./breadcrumbs";
import TeamNamesAndNumbers from "./middleContent";
import BottomContent from "./bottomContent";

const CustomCard = () => {
  return (
    <Card
      className={`${classes.bg}`}
      sx={{
        "& .MuiCardContent-root:last-child": {
          padding: "10px",
        },
      }}
    >
      <Box className={classes.blur_filter} />
      <CardContent className={classes.content}>
        <Stack height={"100%"} justifyContent={"space-between"}>
          <CustomBreadcrumbs />
          <TeamNamesAndNumbers />
          <BottomContent />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
