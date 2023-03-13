import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { UploadScore } from "../store/MathGameSlice";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Michelle from "../Michelle";

export default function TestGame() {
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

  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState("");
  const [Panswer, setPAnswer] = useState(0);
  const [answer, setAnswer] = useState(0);
  const [grade, setGrade] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [bButton, setBButton] = useState(false);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function startGame() {
    setGameOver(false);
    generateMathQuestion();
  }

  function generateMathQuestion() {
    const operatorsKeys = ["+", "-", "*", "^"];
    let number1 = getRandomInt(200);
    let number2 = getRandomInt(200);
    let randomExpression = operatorsKeys[getRandomInt(3)];

    if (randomExpression === "+") {
      let a = number1 + number2;
      setAnswer(a);
    } else if (randomExpression === "-") {
      let a = number1 - number2;
      setAnswer(a);
    } else if (randomExpression === "*") {
      let a = number1 * number2;
      setAnswer(a);
    } else if (randomExpression === "^") {
      let a = number1 ^ number2;
      setAnswer(a);
    }
    setQuestion(`${number1} ${randomExpression} ${number2}`);
  }

  const checkAnswer = async () => {
    let ans = parseInt(Panswer);
    console.log("grading");
    if (ans === answer) {
      setGrade("CORRECT");
      setScore(score + 1);
    } else {
      setGrade("WRONG");
      if (authUser) {
        createScore(authUser.email);
      } else {
        createScore("guest");
      }
      setGameOver(true);
    }
  };

  const handleBClick = () => {
    setBButton(true);
  }

  const createScore = async (username) => {
    await dispatch(UploadScore({ user: username, game: "Math", score: score }));
  };

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
                  <div>
                    <button
                      onClick={() => {
                        startGame();
                      }}
                    >
                      Start game
                    </button>
                    {!gameOver ? (
                      <div>
                        {" "}
                        <h4>Your total points: {score}</h4>
                        <div id="gameover">
                          {question}{" "}
                          <form>
                            <input
                              placeholder="answer"
                              name="answer"
                              value={Panswer}
                              onChange={(e) => setPAnswer(e.target.value)}
                            ></input>
                          </form>
                          <button
                            onClick={() => {
                              checkAnswer();
                              generateMathQuestion();
                            }}
                          >
                            Submit
                          </button>
                          <>{grade}</>
                        </div>
                        <div className="redline"></div>
                      </div>
                    ) : (
                      <p>Gameover</p>
                    )}
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
                  <div className="gb-btn-A" onClick={() => {
                    checkAnswer();
                    generateMathQuestion();
                  }}  >
                    <p className="gb-letter">A</p>
                  </div>
                  <div className="gb-btn-B" onClick={handleBClick}>
                    <p className="gb-letter">B</p>
                  </div>
                  <div className="gb-btn-content">
                    <div className="gb-btn-center">
                      <div className="gb-btn-on"></div>
                      <div onClick={() => {
                        startGame();
                      }} className="gb-btn-on"></div>
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
