import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Flames from "./Icons/Flames";
import Gameboy from "./Icons/GameboyIcon";
import Technology from "./Icons/Technology";
import Title from "./Icons/Title";
import "./Landing.css";

export default function Home() {
  return (
    <div id="home-container">
      <nav id="home-nav-bar">
        <div id="nav_intro">Kimetsu no Yaiba</div>
        <div id="nav_intro">👺鬼き殺さつ隊た👺</div>

        <div className="navbar">
          <div className="dropdown">
            <button className="dropbtn">
              ☁️☁️☁️☁️☁️☁️
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <Link to="/">⛩️Home⛩️</Link>
              <Link to="/michelle">Michelle</Link>
              <Link to="/signup">Sign Up</Link>
              <Link to="/signin">Sign In</Link>
            </div>
          </div>
        </div>
      </nav>
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
