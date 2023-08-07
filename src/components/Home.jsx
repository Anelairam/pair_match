import React from 'react'
import { Start } from "../start";
import { Canvas } from './Canvas'

export const Home = () => {
  const numbers = Start();
  return (
    <Canvas numbers = {numbers}/>
  )
}
