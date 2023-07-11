import { Button, Grid, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import classes from "./soccerCardButtons.module.css";
import { SelectedContext } from "../../../../context/SelectedContext";

const SoccerCardButtons = ({ item }) => {
  const { setSelected } = useContext(SelectedContext);

  const [isClicked, setIsClicked] = useState("");

  return (
    <Grid container spacing={1} wrap="wrap" alignItems={"center"}>
      {item.buttons.length > 0 &&
        item.buttons.map((button, index) => (
          <Grid key={index} item xs={3.5}>
            <Button
              className={`${classes.buttonContainer} ${
                isClicked === button.id ? classes.hovered : ""
              }`}
              onClick={() => {
                setIsClicked((prev) => (prev === button.id ? "" : button.id));
                let selectedbtn = { ...item, buttons: button };

                setSelected((prevData) => {
                  const updatedData = [...prevData];
                  const index = updatedData.findIndex(
                    (itm) => itm.id === item.id
                  );

                  if (index !== -1) {
                    if (updatedData[index].buttons === button) {
                      updatedData.splice(index, 1);
                    } else {
                      updatedData[index] = {
                        ...updatedData[index],
                        buttons: button,
                      };
                    }
                  } else {
                    updatedData.push(selectedbtn);
                  }

                  return updatedData;
                });
              }}
              // [...prev, (prev[id] = selectedbtn)]
              disabled={button.min === null || button.top === null}
            >
              {button.min === null || button.top === null ? (
                <Typography
                  variant="caption"
                  sx={{
                    fontSize: "0.65rem",
                    color: "#7E8DA9",
                  }}
                >
                  Not Available
                </Typography>
              ) : (
                <>
                  <Typography
                    variant="body2"
                    component="p"
                    className={classes.buttomNumbers}
                  >
                    {button.min}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className={classes.buttomNumbers}
                  >
                    {button.top}
                  </Typography>
                </>
              )}
            </Button>
          </Grid>
        ))}

      <Grid item xs={0.5}>
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </Grid>
    </Grid>
  );
};

export default SoccerCardButtons;
