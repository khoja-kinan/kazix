import { Stack } from "@mui/material";
import React from "react";
import TeamName from "./teamName";
import team1Image from "../../../../public/images/team1.png";
import team2Image from "../../../../public/images/team2.png";
const SoccerCardTeams = ({ teams }) => {
  return (
    <Stack alignItems={"flex-start"} justifyContent={"center"} marginTop={0.5}>
      {teams.length > 0 &&
        teams.map((team, index) => <TeamName key={index} team={team} />)}
    </Stack>
  );
};

export default SoccerCardTeams;
