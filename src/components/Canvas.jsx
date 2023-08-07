import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { NumberCheck } from "../numberCheck";

export const Canvas = ({ numbers }) => {
  const playersChoice = [];
  const handleClick = (num, index, e) => {
    e.currentTarget.style.backgroundColor = "lightblue";
    playersChoice.push({ number: num, index: index });
    if (playersChoice.length === 2) {
      console.log("Player made his choices");
      if (NumberCheck(playersChoice)) {
        numbers.splice(playersChoice[0].index, 1);
        numbers.splice(playersChoice[1].index, 1);
      }
      console.log("Numbers array after check : ", numbers);
      playersChoice.length = 0;
    }
    
  };

  return (
    <Grid container columns={9} sx={{ backgroundColor: "pink" }}>
      {numbers.map((number) => {
        return (
          <Grid item key={number.id} xs={1} onClick={(e) => handleClick(number.num, number.index, e)}>
            <Typography>index : {number.index}</Typography>
            <Typography variant="h2">{number.num}</Typography>
          </Grid>
        );
      })}
    </Grid>
  );
};
