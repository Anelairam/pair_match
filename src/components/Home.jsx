import React, { useEffect, useState } from "react";
import { Start } from "../start";
import { Canvas } from "./Canvas";
import { Badge, IconButton } from "@mui/material";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import AddIcon from "@mui/icons-material/Add";
import { AddNumbers } from "../addNumbers";

export const Home = () => {
  const [numbers, setNumbers] = useState(Start());
  const [addNumbers, setAddNumbers] = useState(5);
  const [tips, setTips] = useState(5);

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

  // useEffect(() => {
  //   console.log("Component rerendered, useEffect ran");
  // });
  return (
    <>
      <Canvas numbers={numbers} handleMatch={handleMatch} />
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
