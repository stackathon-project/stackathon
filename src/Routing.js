import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Michelle from "./Michelle";
import Home from "./components/Landing/Home";
import Play from "./Play";
import GameRoutes from "./components/GameRoutes";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import TestPage from "./components/TestPage";
import TestGame from "./components/TestGame";

export default function Routing() {
  return (
    <Routes>
      <Route path="/michelle" element={<Michelle />}></Route>
      <Route path="/play" element={<Play />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/gameroutes" element={<GameRoutes />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/testing" element={<TestPage />}>
        {" "}
      </Route>
      <Route path="/testing/game" element={<TestGame />}>
        {" "}
      </Route>
    </Routes>
  );
}
