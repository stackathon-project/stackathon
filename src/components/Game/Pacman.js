import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

export default function Pacman() {
    const [start, setStart] = useState(false)
    const [score, setScore] = useState(0);
    const scoreValue = document.getElementById("scoreValue");
    // const [death, setDeath] = useState(0);
    // const [select, setSelect] = useState();

    const handleStart = () => {
        setStart(true);
        let holderList = document.getElementsByClassName('holder');
        let count = 0;
        setInterval(function () {
            let randomArrowIndex = Math.floor(Math.random() * 4);
            holderList[0].classList.remove('arrowup');
            holderList[0].classList.remove('arrowdown');
            holderList[0].classList.remove('arrowleft');
            holderList[0].classList.remove('arrowright');

            if (randomArrowIndex === 0) {
                holderList[0].classList.toggle('arrowup');
                count++;
            } else if (randomArrowIndex === 1) {
                holderList[0].classList.toggle('arrowdown');
                count++;
            } else if (randomArrowIndex === 2) {
                holderList[0].classList.toggle('arrowleft');
                count++;
            } else if (randomArrowIndex === 3) {
                holderList[0].classList.toggle('arrowright');
                count++;
            };
        }, 300)

    }

    return (
        <>
            <div id="pacmanscreen">
                <div id="pacmangame">
                    {!start ? <Button onClick={handleStart}>  Start </Button> :
                        <div>
                            <div className="scoreBoard">Score: {score}</div>
                            <div className="holder"></div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}


      // console.log("what is count :", count)
        // if (count % 4 === 1) {
        //     document.getElementsByClassName("holder").backgroundColor = "red"
        // } else if (count % 4 === 3) {
        //     document.getElementsByClassName("holder").backgroundColor = "orange"
        // } else if (count % 4 === 2) {
        //     document.getElementsByClassName("holder").backgroundColor = "yellow"
        // } else {
        //     document.getElementsByClassName("holder").backgroundColor = "blue"
        // }