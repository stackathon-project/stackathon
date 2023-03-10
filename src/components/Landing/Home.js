import React, { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Flames from "./Icons/Flames";
import Gameboy from "./Icons/GameboyIcon";
import Technology from "./Icons/Technology";
import Title from "./Icons/Title";
import "./Landing.css";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";

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

  const userSignOut = () => {
    signOut(auth)
      .then(() => console.log("signedout"))
      .catch((error) => console.log(error));
  };

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
              {!authUser ? (
                <Link to="/signin">Sign In</Link>
              ) : (
                <Link to="/signin">Sign Out</Link>
              )}
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
