import React, { useEffect } from "react";
import "./Flame.css";
import anime from "animejs/lib/anime.es.js";
import { Link, Routes, Route } from "react-router-dom";

export default function Flames() {
  function animateBaseFire() {
    anime({
      targets: "#base-fire .cf-flame",
      delay: anime.stagger(300),
      translateY: function () {
        return anime.random(0, -10);
      },
      keyframes: [
        { scale: 0.8 },
        { scale: 0.825 },
        { scale: 0.9 },
        { scale: 0.925 },
        { scale: 1 },
      ],
      duration: 300,
      easing: "easeInOutSine",
      loop: true,
    });
  }

  function animateFlame1() {
    anime({
      targets: "#fireNodes1 .cf-flame",
      delay: anime.stagger(100),
      translateY: function () {
        return anime.random(0, 300);
      },
      rotate: 30,
      opacity: function () {
        return anime.random(0.5, 1);
      },
      translateX: function () {
        return anime.random(0, -60);
      },
      scale: 0,
      skew: function () {
        return anime.random(0, 10);
      },
      loop: true,
      easing: "easeInOutSine",
    });
  }

  function animateFlame2() {
    anime({
      targets: "#fireNodes2 .cf-flame",
      delay: anime.stagger(400),
      translateX: function () {
        return anime.random(-30, 0);
      },
      translateY: function () {
        return anime.random(0, -260);
      },
      translateY: function () {
        return anime.random(-260, -160);
      },
      translateX: function () {
        return anime.random(0, -30);
      },
      scale: 0,
      rotate: function () {
        return anime.random(0, 60);
      },
      skew: function () {
        return anime.random(0, 30);
      },
      loop: true,
      easing: "easeInOutSine",
    });
  }

  function animateFlame3() {
    anime({
      targets: "#fireNodes1 .cf-flame",
      delay: anime.stagger(500),
      translateY: function () {
        return anime.random(-300, -200);
      },
      opacity: function () {
        return anime.random(0, 1);
      },
      translateX: function () {
        return anime.random(-50, 50);
      },
      scale: 0,
      rotate: function () {
        return anime.random(0, -30);
      },
      skew: function () {
        return anime.random(0, 20);
      },
      loop: true,
      easing: "easeInOutSine",
    });
  }

  const handleAnime = () => {
    animateFlame1();
    animateFlame2();
    animateFlame3();
    animateBaseFire();
  };

  useEffect(() => {
    handleAnime();
  }, []);

  return (
    <div id="yao">
      {" "}
      <div className="cf-container">
        <div className="cf-flame-container" id="fireNodes1">
          <div className="cf-flame"></div>
          <div className="cf-flame"></div>
          <div className="cf-flame"></div>
          <div className="cf-flame"></div>
          <div className="cf-flame"></div>
          <div className="cf-flame"></div>
          <div className="cf-flame"></div>
        </div>
        <div className="cf-flame-container" id="fireNodes2">
          <div className="cf-flame"></div>
          <div className="cf-flame"></div>
          <div className="cf-flame"></div>
          <div className="cf-flame"></div>
          <div className="cf-flame"></div>
          <div className="cf-flame"></div>
          <div className="cf-flame"></div>
        </div>
        <div className="cf-flame-container" id="base-fire">
          <div className="cf-flame"></div>
          <div className="cf-flame"></div>
          <div className="cf-flame"></div>
        </div>
        <Link to="/michelle">
          <div className="cf-log-container">
            <div className="cf-log"></div>
            <div className="cf-log"></div>
          </div>
        </Link>
      </div>
    </div>
  );
}
