import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const TeamName = (props) => {
  return (
    <Stack
      direction={"row"}
      spacing={1}
      alignItems={"flex-start"}
      justifyContent={"center"}
    >
      <Image src={props.image} alt="team1" width={15} height={15} />
      <Typography variant="subtitle2" className="wieght400 white-color">
        Barracas Central
      </Typography>
    </Stack>
  );
};

export default TeamName;
