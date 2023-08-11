import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { NumberCheck } from "../numberCheck";

export const Canvas = ({ numbers, handleMatch }) => {
  const playersChoice = [];
  const handleClick = (number, e) => {
    playersChoice.push({ number });
    if (playersChoice.length === 2) {
      if (NumberCheck(playersChoice)) {
        handleMatch(playersChoice[0].number.id, playersChoice[1].number.id);
      }
      playersChoice.length = 0;
    }
  };

  return (
    <Grid container columns={9} sx={{ backgroundColor: "pink" }}>
      {numbers.map((number) => {
        return (
          <Grid
            item
            key={number.id}
            xs={1}
            onClick={(e) => handleClick(number, e)}
          >
            <Typography>index : {number.id}</Typography>
            <Typography variant="h2">{number.num}</Typography>
          </Grid>
        );
      })}
    </Grid>
  );
};
