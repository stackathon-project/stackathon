import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import Auth from "./Auth";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUpMsg, setSignUpMsg] = useState("");
  const navigate = useNavigate();
  const signIn = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
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

  const signOut = () => {};

  return (
    <div>
      <form onSubmit={signIn}>
        <h1>Log In </h1>
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
        <button type="submit">Login</button>
      </form>
      <>{signUpMsg}</>

      <Auth />
    </div>
  );
}
