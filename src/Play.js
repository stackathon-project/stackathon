import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import anime from "animejs/lib/anime.es.js";
import Michelle from "./Michelle";
import { useState } from "react";


export default function Play() {
    const [isMichelle, setMichelle] = useState(false)
    const animation = useRef(null);

    const handlePlay = () => {
        animation.current = anime({
            targets: "#playbutton",
            top: '1500px',
            duration: 500,
            easing: "easeInOutSine"
        });
        animation.current = anime({
            targets: "#text",
            top: '-1500px',
            duration: 500,
            easing: "easeInOutSine"
        });
        setMichelle(true);
    }

    return (
        <>
            <section>
                <h3 id="text">Load Your Console Here: </h3>
                <Button id="playbutton" onClick={handlePlay}>Play</Button>
                {isMichelle ? <Michelle /> : <></>}
            </section>
        </>
    )
}