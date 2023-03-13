import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import YaoIcon from "./YaoIcon.js";
import MichelleIcon from "./MichelleIcon";

import Gameboy from "../../GameRoutes/Gameboy.js";
import Ranking from "../../GameRoutes/Ranking.js";
import "../Landing.css";

export default function Home() {
  return (
    <div id="home-container">
      <div id="home-icon-container">
        <YaoIcon />
        <MichelleIcon />
      </div>
    </div>
  );
}
