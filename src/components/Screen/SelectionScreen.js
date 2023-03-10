import React, { useEffect } from "react";
import { useState } from "react";
import { ListGroup } from "react-bootstrap";
import Pacman from "../Game/Pacman";
import Game from "../Game/Game"
import Snake from "../Game/Snake";

export default function Screen(props) {
    const [loadGame, setLoadGame] = useState();
    const gameList = {
        1: "snake",
        2: "pacman",
        3: "game"
    };

    let selected = props.selected;
    console.log("this was selected :", selected);

    useEffect(() => {
        setLoadGame(gameList[selected]);
    }, [selected])
    // const handleSelect = () => {
    //     console.log("im a game and ive been selected!!!!")
    // }

    console.log("this is loaded", loadGame)

    if (!loadGame) {
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
    } else if (loadGame === "snake") {
        return (<Snake />)
    } else if (loadGame === "pacman") {
        return <Pacman />
    } else if (loadGame === "game") {
        return <Game />
    }

}