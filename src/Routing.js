import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Yao from "./Yao";
import Michelle from "./Michelle";
import Home from "./components/Yao/Home";

export default function Routing() {
  return (
    <Routes>
      <Route path="/yao" element={<Yao />}></Route>
      <Route path="/michelle" element={<Michelle />}></Route>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
}
