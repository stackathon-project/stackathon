import React, { useRef } from "react";
import anime from "animejs/lib/anime.es.js";
import { useState } from "react";
import "../public/Michelle.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Snake from "./components/Game/Snake";
import Pacman from "./components/Game/Pacman";
import MainLoading from "./components/Loading/MainLoading";
import MathLoading from "./components/Loading/MathLoading";
import TestGame from "./components/TestGame"
import SelectionScreen from "./components/Screen/SelectionScreen";
import ArrowLoading from "./components/Loading/ArrowLoading";
import SnakeLoading from "./components/Loading/SnakeLoading"

export default function Michelle(props) {
  const [on, setIsOn] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [selected, setSelected] = useState(null);
  const [loadGame, setLoadGame] = useState(null);

  const animation = useRef(null);
  const navigate = useNavigate();
  let size = 0.75;

  useEffect(() => {
    // animation.current = anime({
    //   targets: '.gameboy',
    //   scale: size
    // });
  }, [hovered]);

  const homeClick = () => {
    navigate('/')
  }

  let list = {
    0: "snake",
    1: "pacman",
    2: "game"
  };
  const lastGame = Object.keys(list).length - 1;

  const handleStart = () => {
    setIsOn(true);
    setHovered(0);
  }

  const handleMenuDown = () => {
    if (hovered < lastGame) {
      document.getElementById(list[hovered]).style.backgroundColor = "";
      let newHovered = hovered + 1;
      setHovered(newHovered);
      document.getElementById(list[newHovered]).style.backgroundColor = "grey";
    } else {
      document.getElementById(list[hovered]).style.backgroundColor = "";
      setHovered(0);
      document.getElementById(list[0]).style.backgroundColor = "grey";
    }
  }

  const handleMenuUp = () => {
    if (hovered > 0) {
      document.getElementById(list[hovered]).style.backgroundColor = "";
      let newHovered = hovered - 1;
      setHovered(newHovered);
      document.getElementById(list[newHovered]).style.backgroundColor = "grey";
    } else {
      document.getElementById(list[hovered]).style.backgroundColor = "";
      setHovered(lastGame)
      document.getElementById(list[lastGame]).style.backgroundColor = "grey";
    }
  }

  const handleSubmit = () => {
    setSelected(hovered);
  }

  const handleBClick = () => {
    setSelected(null);
    setHovered(0);
  }

  useEffect(() => {
    setLoadGame(list[selected]);
  }, [selected])

  console.log("loadGame is :", loadGame)

  if (!loadGame) {
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
                  : <MainLoading />
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
  } else if (loadGame === 'snake') {
    return (<SnakeLoading />)
  } else if (loadGame === 'pacman') {
    return <ArrowLoading />
  } else if (loadGame === "game") {
    return <MathLoading />
  }
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