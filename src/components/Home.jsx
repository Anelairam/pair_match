import React, { useEffect, useState } from "react";
import { Start } from "../start";
import { Canvas } from "./Canvas";

export const Home = () => {
  const [numbers, setNumbers] = useState(Start());

  const handleMatch = (idOne, idTwo) => {
    const newNumbers = numbers.map((number) => {
      if (number.id === idOne || number.id === idTwo) {
        return {...number, enabled: false};
      }
      return number;
    });
  
    setNumbers(newNumbers);
  };

  useEffect(() => {
    console.log("Component rerendered, useEffect ran");
  });
  return <Canvas numbers={numbers} handleMatch={handleMatch} />;
};
