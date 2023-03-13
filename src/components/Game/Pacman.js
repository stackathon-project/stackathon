import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { Button } from "react-bootstrap";
import { UploadScore } from "../../store/MathGameSlice";
import Michelle from "../../Michelle";

export default function Pacman() {
    const [score, setScore] = useState(0);
    const [death, setDeath] = useState(0);
    const [intervalId, setIntervalId] = useState(-1);
    const [gameOver, setGameOver] = useState(false)
    const [authUser, setAuthUser] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
                console.log(user.email);
            } else {
                setAuthUser(null);
            }
        });
        return () => {
            listen();
        };
    }, []);

    const handleUp = () => {
        handleArrow('arrowup');
    };
    const handleDown = () => {
        handleArrow('arrowdown');
    };
    const handleLeft = () => {
        handleArrow('arrowleft');
    };
    const handleRight = () => {
        handleArrow('arrowright');
    };

    function handleArrow(arrowDirection) {
        let holder = document.querySelector('.holder')
        if (holder && !gameOver) {
            if (death < 3) {
                if (holder.classList.contains(arrowDirection)) {
                    setScore(score + 1)
                } else {
                    let newDeath = death + 1;
                    setDeath(newDeath);
                    if (newDeath === 3) {
                        clearInterval(intervalId);
                        setGameOver(true);
                        holder.classList.toggle('gameover');
                    }
                }
            } else {
                clearInterval(intervalId);
                setGameOver(true);
                holder.classList.toggle('gameover');
            }
        }
    }


    const [arrow, setArrow] = useState();
    const handleStart = () => {
        let holder = document.querySelector('.holder');
        holder.removeChild(holder.firstChild); // remove button
        if (!holder) {
            return <div>Loading!</div>
        } else {
            setIntervalId(
                setInterval(function () {
                    setNextArrow(holder);
                }, 500)
            );
        }
    };

    function setNextArrow(holder) {
        let randomArrowIndex = Math.floor(Math.random() * 4);
        if (randomArrowIndex === 0) {
            holder.classList.toggle('arrowup');
            setArrow("up")
        } else if (randomArrowIndex === 1) {
            holder.classList.toggle('arrowdown');
            setArrow("down")
        } else if (randomArrowIndex === 2) {
            holder.classList.toggle('arrowleft');
            setArrow("left")
        } else if (randomArrowIndex === 3) {
            holder.classList.toggle('arrowright');
            setArrow("right")
        };
    }

    //fill for creating the score
    const createScore = async (username) => {
        await dispatch(UploadScore({ user: username, game: "Arrows", score: score }));
    };

    if (gameOver) {
        if (authUser) {
            createScore(authUser.email);
        } else {
            createScore("guest");
        }
    }

    const [bButton, setBButton] = useState(false);


    const handleBClick = () => {
        setBButton(true);
    }


    if (bButton === false) {
        return (
            <div>
                <div className="gameboy-container">
                    <div className="gameboy">
                        <link href="https://fonts.googleapis.com/css?family=PT+Sans&display=swap" rel="stylesheet" />
                        <link href="https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap" rel="stylesheet" />
                        <div className="gameboy-body">
                            <div className="gameboy-b-cont" >
                                <div className="gameboy-b-contBUTTON"> </div>
                                <div id="pacmanscreen">
                                    <div id="pacmangame">
                                        <div>
                                            <div className="scoreBoard">Score: {score} Death: {death}</div>
                                            <div className="holder"><Button onClick={handleStart} className="startButton">Start</Button></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="gameboy-screen-curve"></div>
                            </div>
                            <div className="gameboy-center-main">
                                <div className="gameboy-center-brand">STACKATHON</div>
                                <div className="gameboy-center-controllers">
                                    <div className="gb-up" onClick={handleUp}></div>
                                    <div className="gb-down" onClick={handleDown}></div>
                                    <div className="gb-left" onClick={handleLeft}></div>
                                    <div className="gb-right" onClick={handleRight}></div>
                                    <div className="gb-btn-A" onClick={handleStart}>
                                        <p className="gb-letter">A</p>
                                    </div>
                                    <div className="gb-btn-B" onClick={handleBClick}>
                                        <p className="gb-letter">B</p>
                                    </div>
                                    <div className="gb-btn-content">
                                        <div className="gb-btn-center">
                                            <div className="gb-btn-on" ></div>
                                            <div className="gb-btn-on" onClick={handleStart} ></div>
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
    } else {
        return <Michelle />
    }

}
