import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import "../components/Landing/Landing.css";
import { Link } from "react-router-dom";

export default function Home() {
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

    return (
        <nav id="home-nav-bar">
            <div id="nav_intro">
                {authUser ? <p>Welcome {authUser.email}</p> : null}
            </div>
            <div className="navbar">
                <div className="dropdown">
                    <button className="dropbtn">
                        🔥🔥🔥
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <Link to="/signup">Sign Up</Link>
                        {!authUser ? (
                            <Link to="/signin">Sign In</Link>
                        ) : (
                            <Link to="/signout">Sign Out</Link>
                        )}

                        <Link to="https://animejs.com/">Anime.js</Link>
                        <Link to="https://firebase.google.com/docs?gclid=Cj0KCQiA6rCgBhDVARIsAK1kGPJB-M0NGR9hZ8jICZf-LwVHXvx_tFCFM_ggK_RZgkiVTX82btat2v4aAnlcEALw_wcB&gclsrc=aw.ds">
                            Firebase
                        </Link>
                        <Link to="https://mui.com/">Mui</Link>
                        <Link to="/">Back to Home</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
