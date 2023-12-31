import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import { NumberCheck } from "../numberCheck";

const boxHover = {
  border: "1px solid #9c27b0",
  textAlign: "center",
  "&:hover": {
    cursor: "pointer",
  },
};

export const Canvas = ({ numbers, handleMatch, setScore, score }) => {
  const playersChoice = [];
  let res;
  const handleClick = (number) => {
    playersChoice.push({ number });
    if (playersChoice.length === 2) {
      res = NumberCheck(playersChoice, numbers);
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
    <Container>
      <Grid container alignSelf={"center"} columns={9} spacing={1}>
        {numbers.map((number) => {
          return number.enabled ? (
            <Grid
              item
              xs={1}
              key={number.id}
              onClick={(e) => handleClick(number, e)}
              sx={boxHover}
            >
              <Typography variant="body">{number.id}</Typography>
              <Typography variant="h3">{number.num}</Typography>
            </Grid>
          ) : (
            <Grid
              item
              xs={1}
              key={number.id}
              sx={{
                backgroundColor: "lightgrey",
                color: "white",
                border: "1px solid black",
                textAlign: "center",
              }}
            >
              <Typography variant="body">{number.id}</Typography>
              <Typography variant="h3">{number.num}</Typography>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};
