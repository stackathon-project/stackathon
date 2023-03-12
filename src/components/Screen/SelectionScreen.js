import React, { useEffect } from "react";
import { ListGroup } from "react-bootstrap";

export default function Screen() {
    return (
        <>
            <div id="gameboyscreenon">
                <div id="arcade" style={{ fontSize: '22px' }}><strong>Arcade Games:</strong></div>
                <div id="babyscreen">
                    <ListGroup className="listoption">
                        <ListGroup.Item id="snake" style={{ backgroundColor: 'gray' }}>
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