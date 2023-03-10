import React, { useEffect } from "react";
import "./Technology.css";
import anime from "animejs/lib/anime.es.js";
import { Link, Routes, Route } from "react-router-dom";

export default function Technology() {
  function animeTechnology() {
    anime({
      targets: ".technology-icon",
      scale: [0.1, 1],
      opacity: [0.1, 1],
      rotate: "2turn",
      duration: 4000,
      loop: true,
    });
  }
  const handleAnimation = () => {
    animeTechnology();
  };

  useEffect(() => {
    handleAnimation();
  }, []);

  return (
    <div id="GameBoyIcon">
      <div className="icon-block">
        <div className="icon technology-icon" id="technology-icon-pic">
          <Link to="/gameroutes">
            {" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/2881/2881031.png"
              width="150px"
              height="150px"
            ></img>
          </Link>
        </div>
      </div>
    </div>
  );
}
