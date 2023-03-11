import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { auth } from "../../firebase";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUpMsg, setSignUpMsg] = useState("");
  const navigate = useNavigate();

  const signUp = (e) => {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setSignUpMsg("Successful");
        setTimeout(navigate("/"), 6000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        setSignUpMsg(errorMessage);
      });
  };

  return (
    <div>
      <form onSubmit={signUp}>
        <h1>Create an Account </h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Signup</button>
      </form>
      <>{signUpMsg}</>
    </div>
  );
}
