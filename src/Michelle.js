import React, { useRef } from "react";
import anime from "animejs/lib/anime.es.js";
import { useState } from "react";
import "../public/Michelle.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Snake from "./components/Game/Snake";
import SelectionScreen from "./components/Screen/SelectionScreen"

export default function Michelle() {
  const [on, setIsOn] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [selected, setSelected] = useState(null);

  const animation = useRef(null);
  const navigate = useNavigate();
  let size = 0.75;

  useEffect(() => {
    animation.current = anime({
      targets: '.gameboy',
      scale: size
    });
  }, [hovered]);

  const homeClick = () => {
    navigate('/')
  }

  let list = {
    0: "snake",
    1: "pacman",
    2: "game"
  };
  const lastGame = Object.keys(list).length;

  const handleStart = () => {
    setIsOn(true);
    setHovered(0);
  }
  // const [snake, setSnake] = useState(null) null, hovered or selected
  // const [pacman, setPacman] = useState(null) null, hovered, or selected
  // const [game, setGame] = useState(null) null, hovered, or selected

  const handleMenuDown = () => {
    if (hovered !== lastGame) {
      setHovered(hovered + 1);
      document.getElementById(list[hovered]).style.backgroundColor = "grey";
    } else {
      setHovered(1);
    }
  }

  console.log("what is hovered right now,", hovered)

  const handleMenuUp = () => {
    if (selected > 0) {
      setHovered(hovered - 1);
      document.getElementById(list[hovered]).style.backgroundColor = "grey";
    } else {
      setHovered(lastGame)
    }

  }

  const handleSubmit = () => {
    setSelected(hovered);
  }

  const handleBClick = () => {
    setSelected(null);
    setHovered(0);
  }


  return (
    <div>
      <div className="gameboy-container">
        <div className="gameboy">
          <link href="https://fonts.googleapis.com/css?family=PT+Sans&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap" rel="stylesheet" />
          <div className="gameboy-body">
            <div className="gameboy-b-cont" >
              <div className="gameboy-b-contBUTTON" onClick={homeClick}> </div>
              {!on ?
                <div id="gameboyscreenoff"></div>
                : <SelectionScreen selected={selected} list={list} />
              }
              <div className="gameboy-screen-curve"></div>
            </div>
            <div className="gameboy-center-main">
              <div className="gameboy-center-brand">STACKATHON</div>
              <div className="gameboy-center-controllers">
                <div className="gb-up" onClick={handleMenuUp}></div>
                <div className="gb-down" onClick={handleMenuDown}></div>
                <div className="gb-left"></div>
                <div className="gb-right"></div>

                <div className="gb-btn-A" >
                  <p className="gb-letter">A</p>
                </div>
                <div className="gb-btn-B" onClick={handleBClick}>
                  <p className="gb-letter">B</p>
                </div>
                <div className="gb-btn-content">
                  <div className="gb-btn-center">
                    <div onClick={handleSubmit} className="gb-btn-on"></div>
                    <div onClick={handleStart} className="gb-btn-on"></div>
                  </div>
                  <div className="gb-btn-center">
                    <p>SELECT</p>
                    <p>START</p>
                  </div>
                </div>
              </div>
              <div className="gameboy-center-dotted">
                <div className="gb-dotted"></div>
                <div className="gb-dotted"></div>
                <div className="gb-dotted"></div>
                <div className="gb-dotted"></div>
                <div className="gb-dotted"></div>
              </div>
            </div>
            <div className="gameboy-curve"></div>
          </div>
        </div>
      </div>

    </div>

  )
}

// const handleClick = () => {
  //   count += 0.25;
  //   console.log("count in increasing is:", count)
  //   animation.current = anime({
  //     targets: '.gameboy',
  //     scale: count
  //   })
  // }

    // const revertClick = () => {
  //   if (count > 0.5) {
  //     count -= 0.25;
  //     console.log("count in decreasing is:", count)
  //     animation.current = anime({
  //       targets: '.gameboy',
  //       scale: count
  //     })
  //   }
  // }

    // const handleClick = () => {
  //   size += 0.25;
  //   animation.current = anime({
  //     targets: '.gameboy',
  //     scale: size
  //   })
  // }

  //garbage pile:
    // const enlargeScreen = () => {
  //   setCount(1.25);
  //   console.log("what is click?", count)
  //   animation.current = anime({
  //     targets: '.babyscreen',
  //     scale: count
  //   })
  // }