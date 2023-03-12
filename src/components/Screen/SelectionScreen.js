import React, { useEffect } from "react";
import { ListGroup } from "react-bootstrap";

export default function Screen() {
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