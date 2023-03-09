import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import "./Title.css";

export default function Title() {
  function AnimeTitle() {
    anime({
      targets: ".home-title-letters",
      translateY: 75,
      delay: anime.stagger(100), // increase delay by 100ms for each elements.
    });
  }

  useEffect(() => {
    AnimeTitle();
  }, []);

  return (
    <div className="home-title">
      <div className="home-title-letters">S</div>
      <div className="home-title-letters">t</div>
      <div className="home-title-letters">a</div>
      <div className="home-title-letters">c</div>
      <div className="home-title-letters">k</div>
      <div className="home-title-letters">a</div>
      <div className="home-title-letters">t</div>
      <div className="home-title-letters">h</div>
      <div className="home-title-letters">o</div>
      <div className="home-title-letters">n</div>
    </div>
  );
}
