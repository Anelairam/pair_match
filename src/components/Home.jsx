import React, { useEffect, useState } from "react";
import { Start } from "../start";
import { Canvas } from "./Canvas";
import { Badge, Container, IconButton, Stack, Typography } from "@mui/material";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import AddIcon from "@mui/icons-material/Add";
import { AddNumbers } from "../addNumbers";
import { CanvasCheck } from "../canvasCheck";
import { LinesCheck } from "../linesCheck";

export const Home = () => {
  const [numbers, setNumbers] = useState(Start());
  const [score, setScore] = useState(0);
  const [addNumbers, setAddNumbers] = useState(5);
  const [tips, setTips] = useState(5);

  // The function handles the pairs choosen by the player, it returns the unmatched numbers. And refresehes their id
  const handleMatch = (idOne, idTwo) => {
    const refinedNumbers = numbers.map((number) => {
      if (number.id === idOne || number.id === idTwo) {
        return { ...number, enabled: false };
      }
      return number;
    });

    let counter = 0;
    refinedNumbers.forEach((number) => {
      number.id = counter;
      counter++;
    });

    setNumbers(refinedNumbers);
  };

  const handleAddClick = () => {
    if (addNumbers !== 0) {
      const additionalNumbers = AddNumbers(numbers);
      let counter = 0;
      additionalNumbers.forEach((number) => {
        number.id = counter;
        counter++;
      });
      setNumbers(additionalNumbers);
      setAddNumbers(addNumbers - 1);
    }
  };

  const handleTipsClick = () => {
    if (tips !== 0) {
      setTips(tips - 1);
    }
  };

  useEffect(() => {
  let matches = CanvasCheck(numbers);
  // let line = LinesCheck(numbers);
  if (numbers.length !== 0) {
    if (matches.result === false && addNumbers === 0) {
      console.log("Game over");
    }
  } else {
    setNumbers(Start());
  }
  });

  return (
    <>
      <Container>
        <Typography variant="h1" align="center">
          Number Match
        </Typography>
        <Typography
          variant="h4"
          align="center"
          sx={{ backgroundColor: "lightblue" }}
        >
          Your Score : {score}
        </Typography>
        <Canvas
          numbers={numbers}
          handleMatch={handleMatch}
          setScore={setScore}
          score={score}
        />
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ backgroundColor: "lightgrey" }}
        >
          <IconButton onClick={handleAddClick} aria-label="Add numbers">
            <Badge badgeContent={addNumbers} color="primary">
              <AddIcon />
            </Badge>
          </IconButton>
          <IconButton onClick={handleTipsClick} aria-label="Show me hint">
            <Badge badgeContent={tips} color="primary">
              <TipsAndUpdatesIcon fontSize="medium" color="primary" />
            </Badge>
          </IconButton>
        </Stack>
      </Container>
    </>
  );
};
