import React, { useEffect, useState } from "react";
import { Start } from "../start";
import { Canvas } from "./Canvas";
import { Badge, IconButton, Typography } from "@mui/material";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import AddIcon from "@mui/icons-material/Add";
import { AddNumbers } from "../addNumbers";
import { CanvasCheck } from "../canvasCheck";

export const Home = () => {
  const [numbers, setNumbers] = useState(Start());
  const [score, setScore] = useState(0);
  const [addNumbers, setAddNumbers] = useState(5);
  const [tips, setTips] = useState(5);

  // The function handles the pairs choosen by the player, it returns the unmatched numbers. And refresehes their id
  const handleMatch = (idOne, idTwo) => {
    // const refinedNumbers = numbers.map((number) => {
    //   if (number.id === idOne || number.id === idTwo) {
    //     return {...number, enabled: false};
    //   }
    //   return number;
    // });

    const refinedNumbers = numbers.filter((number) => {
      if (number.id !== idOne && number.id !== idTwo) {
        return number;
      }
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
      setNumbers(AddNumbers(numbers));
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
    if (numbers.length !== 0) {
      if (!matches && addNumbers === 0) {
        console.log("Game over");
      }
    } else {
      setNumbers(Start());
    }
  });

  return (
    <>
      <Typography variant="h2" sx={{ backgroundColor: "lightblue" }}>
        {score}
      </Typography>
      <Canvas
        numbers={numbers}
        handleMatch={handleMatch}
        setScore={setScore}
        score={score}
      />
      <IconButton onClick={handleAddClick}>
        <Badge badgeContent={addNumbers} color="primary">
          <AddIcon />
        </Badge>
      </IconButton>
      <IconButton onClick={handleTipsClick}>
        <Badge badgeContent={tips} color="primary">
          <TipsAndUpdatesIcon fontSize="medium" color="primary" />
        </Badge>
      </IconButton>
    </>
  );
};
