import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const TeamName = ({ team }) => {
  return (
    <Stack
      direction={"row"}
      spacing={1}
      alignItems={"flex-start"}
      justifyContent={"center"}
    >
      <Image src={team.teamFlag} alt="team1" width={15} height={15} />
      <Typography variant="subtitle2" className="wieght400 white-color">
        {team.teamName}
      </Typography>
    </Stack>
  );
};

export default TeamName;
