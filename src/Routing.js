import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Michelle from "./Michelle";
import Home from "./components/Landing/Home";
import GameRoutes from "./components/GameRoutes";

export default function Routing() {
  return (
    <Routes>
      <Route path="/michelle" element={<Michelle />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/gameroutes" element={<GameRoutes />}></Route>
    </Routes>
  );
}
