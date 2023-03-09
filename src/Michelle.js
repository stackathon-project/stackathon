import React, { useRef } from "react";
import anime from "animejs/lib/anime.es.js";
import { useState } from "react";
import "../public/Michelle.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Michelle() {
  const animation = useRef(null);
  const navigate = useNavigate();
  let count = 0.75;

  useEffect(() => {
    animation.current = anime({
      targets: '.gameboy',
      scale: count
    })
  }, [])

  const handleClick = () => {
    count += 0.25;
    console.log("count in increasing is:", count)
    animation.current = anime({
      targets: '.gameboy',
      scale: count
    })
  }


  const homeClick = () => {
    console.log("ive been clicked!")
    navigate('/')
  }

  const revertClick = () => {
    if (count > 0.5) {
      count -= 0.25;
      console.log("count in decreasing is:", count)
      animation.current = anime({
        targets: '.gameboy',
        scale: count
      })
    }
  }
  const selectClick = () => {
    console.log("ive been selected!")
  }


  return (
    <div className="container">
      <div className="gameboy">
        <link href="https://fonts.googleapis.com/css?family=PT+Sans&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap" rel="stylesheet" />
        <div className="gameboy-body">
          <div className="gameboy-b-cont" >
            <div className="gameboy-b-contBUTTON" onClick={homeClick}> </div>
            <div className="gameboy-screen">
            </div>
            <div className="gameboy-screen-curve"></div>
          </div>
          <div className="gameboy-center-main">
            <div className="gameboy-center-brand">STACKATHON</div>
            <div className="gameboy-center-controllers">
              <div className="gb-up"></div>
              <div className="gb-down"></div>
              <div className="gb-left"></div>
              {/* <div className="gb-right"></div> */}

              <div className="gb-btn-A" onClick={selectClick}>
                <p className="gb-letter">A</p>
              </div>
              <div className="gb-btn-B">
                <p className="gb-letter">B</p>
              </div>
              <div className="gb-btn-content">
                <div className="gb-btn-center">
                  <div onClick={revertClick} className="gb-btn-on"></div>
                  <div onClick={handleClick} className="gb-btn-on"></div>
                </div>
                <div className="gb-btn-center">
                  <p>REDUCE</p>
                  <p>MAGNIFY </p>
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

  )
}
