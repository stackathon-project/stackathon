import React, { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Flames from "./Icons/Flames";
import Gameboy from "./Icons/GameboyIcon";
import Technology from "./Icons/Technology";
import Title from "./Icons/Title";
import "./Landing.css";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import Navbar from "../Navbar";

export default function Home() {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  return (
    <div id="home-container">
      <Navbar />
      <div className="home-title">
        <Title />
      </div>
      <div id="home-icon-container">
        <Flames />
        <Gameboy />
        <Technology />
      </div>
    </div>
  );
}
