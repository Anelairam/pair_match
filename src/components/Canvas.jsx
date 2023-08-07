import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { NumberCheck } from "../numberCheck";

export const Canvas = ({ numbers }) => {
  const playersChoice = [];
  const handleClick = (num, index,e) => {
    e.currentTarget.style.backgroundColor = "lightblue";
    playersChoice.push({ number: num, index: index });
    if (playersChoice.length === 2) {
      console.log("Player made his choices");
      NumberCheck(playersChoice);
      playersChoice.length = 0;
    }
  };

  return (
    <Grid container columns={9} sx={{ backgroundColor: "pink" }}>
      {numbers.map((num, index) => {
        return (
          <Grid item xs={1} onClick={(e) => handleClick(num, index,e)}>
            <Typography>index : {index}</Typography>
            <Typography variant="h2">{num}</Typography>
          </Grid>
        );
      })}
    </Grid>
  );
};
