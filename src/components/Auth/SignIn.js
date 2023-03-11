import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import Auth from "./Auth";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
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
      <h1>Login</h1>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={signIn}
      >
        <div>
          <TextField
            required
            id="standard-required"
            label="Email"
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="standard"
          />
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            defaultValue={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="standard"
          />
        </div>
        <Button type="submit" variant="text">
          Login
        </Button>
        <>{signUpMsg}</>
      </Box>
    </div>
  );
}
