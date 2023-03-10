import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";

export default function Auth() {
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
          <p>Signed in</p>
          <button onClick={userSignOut}>SignOut</button>
        </>
      ) : (
        <p>Signed Out</p>
      )}{" "}
    </div>
  );
}
