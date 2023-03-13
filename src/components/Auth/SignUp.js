import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Navbar from "../Navbar";

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
    <div id="home-container">
      <Navbar />

      <div id="home-icon-container4">
        <div>
          <h1>Registration:</h1>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
            onSubmit={signUp}
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
              Signup
            </Button>
            <>{signUpMsg}</>
          </Box>
        </div>
      </div>
    </div>
  );
}
