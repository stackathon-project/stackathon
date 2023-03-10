import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Yao from "./Yao";
import Michelle from "./Michelle";
import Home from "./components/Landing/Home";
import Play from "./Play";

export default function Routing() {
  return (
    <Routes>
      <Route path="/yao" element={<Yao />}></Route>
      <Route path="/michelle" element={<Michelle />}></Route>
      <Route path="/play" element={<Play />}></Route>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
}
