import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Flames from "../Landing/Icons/Flames";
import Gameboy from "./Gameboy";
import Ranking from "./Ranking";
import "../Landing/Landing.css";

export default function Home() {
  return (
    <div id="home-container">
      <div id="home-icon-container">
        <Gameboy />
        <Ranking />
      </div>
    </div>
  );
}
