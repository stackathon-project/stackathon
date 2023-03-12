import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import "./Title.css";

export default function Title() {
  function AnimeTitle() {
    anime({
      targets: ".home-title-letters",
      translateY: 75,
      delay: anime.stagger(100), // increase delay by 100ms for each elements.
      loop: true,
    });
  }

  useEffect(() => {
    AnimeTitle();
  }, []);

  return (
    <div className="home-title">
      <div className="home-title-letters">【</div>
      <div className="home-title-letters">Ｓ</div>
      <div className="home-title-letters">ｔ</div>
      <div className="home-title-letters">ａ</div>
      <div className="home-title-letters">ｃ</div>
      <div className="home-title-letters">ｋ</div>
      <div className="home-title-letters">－</div>
      <div className="home-title-letters">ａ</div>
      <div className="home-title-letters">－</div>
      <div className="home-title-letters">ｔ</div>
      <div className="home-title-letters">ｈ</div>
      <div className="home-title-letters">ｏ</div>
      <div className="home-title-letters">ｎ</div>
      <div className="home-title-letters">】</div>
    </div>
  );
}
