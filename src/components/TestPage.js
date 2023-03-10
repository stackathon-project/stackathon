import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import SignIn from "./Auth/SignIn";
import Michelle from "../Michelle";

export default function TestPage() {
  const [authUser, setAuthUser] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => console.log("signedout"))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {authUser ? (
        <>
          {" "}
          <Michelle />
          <button onClick={userSignOut}>SignOut</button>
        </>
      ) : (
        <SignIn />
      )}{" "}
    </div>
  );
}
