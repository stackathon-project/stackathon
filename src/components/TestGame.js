import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { UploadScore } from "../store/MathGameSlice";
import { auth } from "../firebase";

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

  const createScore = async (username) => {
    await dispatch(UploadScore({ user: username, game: "Math", score: score }));
  };

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
            <button onClick={createScore}>Test</button>
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
