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
import Snake from "./components/RankingTable/Snake";
import Pacman from "./components/Game/Pacman";
import Auth from "./components/Auth/Auth";
import AboutUs from "./components/Landing/AboutUs";
import MainLoading from "./components/Loading/MainLoading";
import Snakes from "./components/Game/Snake"

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
      <Route path="/games/ranking" element={<Snake />}>
        {" "}
      </Route>
      <Route path="/arrows" element={<Pacman />}></Route>
      <Route path="/signout" element={<Auth />}></Route>
      <Route path="/aboutus" element={<AboutUs />}></Route>
      <Route path="/loading" element={<MainLoading />}></Route>
      <Route path="/loading" element={<MainLoading />}></Route>
      <Route path="/snake" element={<Snakes />}></Route>

    </Routes>
  );
}
