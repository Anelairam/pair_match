import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { NumberCheck } from "../numberCheck";

export const Canvas = ({ numbers, handleMatch, setScore, score }) => {
  const playersChoice = [];
  let res;
  const handleClick = (number, e) => {
    playersChoice.push({ number });
    if (playersChoice.length === 2) {
      res = NumberCheck(playersChoice);
      if (res.res) {
        setScore(score + res.reward);
        handleMatch(playersChoice[0].number.id, playersChoice[1].number.id);
      } else {
        if (score >= 5) {
          setScore(score + res.reward);
        }
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
            <Typography>ID : {number.id}</Typography>
            <Typography variant="h2">{number.num}</Typography>
          </Grid>
        );
      })}
    </Grid>
  );
};
