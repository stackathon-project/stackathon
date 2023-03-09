import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Flames from "./Icons/Flames";
import Gameboy from "./Icons/GameboyIcon";
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
              <Link to="/yao">Yao</Link>
              <Link to="/michelle">Michelle</Link>
            </div>
          </div>
        </div>
      </nav>
      <div id="home-icon-container">
        <Flames />
        <Gameboy />
      </div>
    </div>
  );
}
