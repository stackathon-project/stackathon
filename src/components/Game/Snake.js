import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
// import { UploadScore } from "../../store/MathGameSlice";
import { auth } from "../../firebase";
// import { useNavigate } from "react-router-dom";
import Michelle from "../../Michelle";
import { Button } from "react-bootstrap";

export default function TestGame() {
    const [authUser, setAuthUser] = useState(null);
    const dispatch = useDispatch();
    const [bButton, setBButton] = useState(false);
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

    const handleBClick = () => {
        setBButton(true);
    };

    const handleStart = () => {
        let snake = document.querySelector('.holder');
        snake.removeChild(snake.firstChild); // remove button
        if (!snake) {
            return <div>Loading!</div>
        } else {
            setNextPhoto(snake)
        }
    };

    const handleClick = () => {
        let snake = document.querySelector('.holder');
        setNextPhoto(snake);
        snake.removeChild(snake.firstChild); // remove button
    };

    function setNextPhoto(snake) {
        let randomSnake = Math.floor(Math.random() * 4);
        if (randomSnake === 0) {
            snake.classList.toggle('snakeone')
        } else if (randomSnake === 1) {
            snake.classList.toggle('snaketwo')
        } else if (randomSnake === 2) {
            snake.classList.toggle('snakethree')
        } else if (randomSnake === 3) {
            snake.classList.toggle('snakefour')
        }
    }

    // const createScore = async (username) => {
    //     await dispatch(UploadScore({ user: username, game: "Snake", score: score }));
    // };

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
                                <div id="gamescreen">
                                    <div className="holder"><Button onClick={handleStart} className="startButton">Start</Button></div>
                                </div>
                                <div className="gameboy-screen-curve"></div>
                            </div>
                            <div className="gameboy-center-main">
                                <div className="gameboy-center-brand">STACKATHON</div>
                                <div className="gameboy-center-controllers">
                                    <div className="gb-up"></div>
                                    <div className="gb-down"></div>
                                    <div className="gb-left"></div>
                                    <div className="gb-right"></div>
                                    <div className="gb-btn-A" onClick={handleClick}>
                                        <p className="gb-letter">A</p>
                                    </div>
                                    <div className="gb-btn-B" onClick={handleBClick}>
                                        <p className="gb-letter">B</p>
                                    </div>
                                    <div className="gb-btn-content">
                                        <div className="gb-btn-center">
                                            <div className="gb-btn-on"></div>
                                            <div className="gb-btn-on"></div>
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
        );
    } else {
        return <Michelle />
    }

}
