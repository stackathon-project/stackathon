import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Flames from "../Landing/Icons/Flames";
import Gameboy from "./Gameboy";
import Ranking from "./Ranking";
import "../Landing/Landing.css";
import Navbar from "../../components/Navbar"

export default function Home() {
  return (
    <>
      <Navbar />
      <Ranking />
    </>
  );
}
