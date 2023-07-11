import { Stack } from "@mui/material";
import React from "react";
import TeamName from "./teamName";
import team1Image from "../../../../public/images/team1.png";
import team2Image from "../../../../public/images/team2.png";
const SoccerCardTeams = () => {
  return (
    <Stack alignItems={"flex-start"} justifyContent={"center"} marginTop={0.5}>
      <TeamName image={team1Image} />
      <TeamName image={team2Image} />
    </Stack>
  );
};

export default SoccerCardTeams;
