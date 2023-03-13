import React, { useRef } from "react";
import anime from "animejs/lib/anime.es.js";
import { useState, useEffect } from "react";
import SelectionScreen from "../Screen/SelectionScreen";
import TestGame from "../TestGame";

export default function MathLoading() {
    const [loaded, setIsLoaded] = useState(false);
    const animation = useRef(null);

    useEffect(() => {
        anime({
            targets: '.loading',
            translateX: 105,
            direction: 'alternate',
            loop: true,
            easing: 'steps(8)'
        })
    }, [])

    setTimeout(() => {
        setIsLoaded(true)
    }, 3500)

    if (!loaded) {
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
                                    <div className="loading">
                                        <img className="imgholder" src="https://cdn-icons-png.flaticon.com/512/546/546743.png" />
                                    </div>
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
                                    <div className="gb-btn-A" >
                                        <p className="gb-letter">A</p>
                                    </div>
                                    <div className="gb-btn-B">
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
        )
    } else {
        return <TestGame />
    }
}