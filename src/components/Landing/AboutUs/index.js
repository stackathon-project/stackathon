import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import Gameboy from "../../GameRoutes/Gameboy.js";
import Ranking from "../../GameRoutes/Ranking.js";
import "../Landing.css";

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
