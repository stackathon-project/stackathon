import React, { useEffect } from "react";
import { ListGroup } from "react-bootstrap";

export default function Screen() {
    return (
        <>
            <div id="gameboyscreenon">
                <div id="arcade" style={{ fontSize: '19px' }}><strong>Arcade Games:</strong></div>
                <div id="babyscreen">
                    <ListGroup className="listoption">
                        <ListGroup.Item id="snake" style={{ backgroundColor: 'gray', fontSize: '12px' }}>
                            Snakes
                        </ListGroup.Item>
                        <ListGroup.Item id="pacman" style={{ fontSize: '12px' }}>
                            Arrows
                        </ListGroup.Item>
                        <ListGroup.Item id="game" style={{ fontSize: '12px' }}>
                            Game
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
        </>
    )
}