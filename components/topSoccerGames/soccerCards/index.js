import React from "react";
import classes from "./styles.module.css";
import { Card, CardContent, Stack, Typography } from "@mui/material";
import SoccerCardHeader from "./soccerCardHeader";
import SoccerCardTime from "./soccerCardTime";
import SoccerCardTeams from "./soccerCardTeams";
import SoccerCardButtons from "./soccerCardButtons";

const SoccerCards = ({ item }) => {
  return (
    <Card
      className={`${classes.bg}`}
      sx={{
        "& .MuiCardContent-root": {
          padding: "10px",
        },
        "& .MuiCardContent-root:last-child": {
          padding: "10px",
        },
      }}
    >
      <CardContent>
        <Stack height={"100%"} justifyContent={"space-between"} rowGap={1}>
          <SoccerCardHeader legaName={item.legaName} />
          <SoccerCardTime time={item.time} />
          <SoccerCardTeams teams={item.teams} />
          <Typography variant="caption" className="white-color wieght700">
            {item.score}
          </Typography>
          <SoccerCardButtons item={item} />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default SoccerCards;
