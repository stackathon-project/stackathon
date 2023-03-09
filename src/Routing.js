import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Michelle from "./Michelle";
import Home from "./components/Landing/Home";
import GameRoutes from "./components/GameRoutes";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";

export default function Routing() {
  return (
    <Routes>
      <Route path="/michelle" element={<Michelle />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/gameroutes" element={<GameRoutes />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
    </Routes>
  );
}
