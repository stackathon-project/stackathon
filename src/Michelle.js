import React, { useRef } from "react";
import anime from "animejs/lib/anime.es.js";
import { useState } from "react";

export default function Michelle() {
  const animation = useRef(null);
  const [isBig, setIsBig] = useState(true);

  if (!isBig) {
    animation.current = anime({
      targets: '.gameboy',
      scale: 0.5,
    });
  } else {
    animation.current = anime({
      targets: '.gameboy',
      scale: 1,
    });
  }

  const handleClick = () => {
    !isBig ? setIsBig(true) : setIsBig(false);
    console.log("isBig", isBig)
  }

  return (
    <div className="gameboy-container">
      <img className="gameboy" src="https://cdn-icons-png.flaticon.com/512/1135/1135231.png"></img>
      <button onClick={handleClick}> Click here to make small!</button>
    </div>

  )
}
