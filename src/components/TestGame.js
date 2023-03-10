import { random } from "animejs";
import React, { useState } from "react";

export default function TestGame() {
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState("");
  const [Panswer, setPAnswer] = useState(0);
  const [answer, setAnswer] = useState(0);
  const [grade, setGrade] = useState("starting");
  const [gameOver, setGameOver] = useState(false);

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

  function checkAnswer() {
    let ans = parseInt(Panswer);
    console.log("grading");
    if (ans === answer) {
      setGrade("CORRECT");
      setScore(score + 1);
    } else {
      setGrade("WRONG");
      setGameOver(true);
    }
  }

  return (
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
  );
}
