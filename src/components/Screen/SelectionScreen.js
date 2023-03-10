import React, { useEffect } from "react";
import { useState } from "react";
import { ListGroup } from "react-bootstrap";

export default function Screen(props) {

    // const handleSelect = () => {
    //     console.log("im a game and ive been selected!!!!")
    // }

    let hovered = props.hovered;

    return (
        <>
            <div id="gameboyscreenon">
                <div id="arcade"> Arcade Games: </div>
                <div id="babyscreen">
                    <ListGroup className="listoption">
                        <ListGroup.Item id="snake">
                            Snakes
                        </ListGroup.Item>
                        <ListGroup.Item id="pacman">
                            Pacman
                        </ListGroup.Item>
                        <ListGroup.Item id="game">
                            Game
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
        </>
    )
}