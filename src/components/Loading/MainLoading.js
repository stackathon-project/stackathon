import React, { useRef } from "react";
import anime from "animejs/lib/anime.es.js";
import { useState, useEffect } from "react";
import SelectionScreen from "../Screen/SelectionScreen";

export default function MainLoading() {
    const [loaded, setIsLoaded] = useState(false);
    const animation = useRef(null);

    useEffect(() => {
        anime({
            targets: '.loading',
            translateX: 110,
            direction: 'alternate',
            loop: true,
            easing: 'steps(8)'
        })
    }, [])

    setTimeout(() => {
        setIsLoaded(true)
    }, 1500)

    if (!loaded) {
        return (
            <>
                <div id="gameboyscreenon">
                    <div className="loading">
                        <img className="imgholder" src="https://cdn-icons-png.flaticon.com/512/2993/2993012.png" />
                    </div>
                </div>
            </>
        )
    } else {
        return <SelectionScreen />
    }
}