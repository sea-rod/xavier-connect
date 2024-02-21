import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.css";
import "../../../modules/events/Events";

export default function Navbar() {
  const [auth, setAuth] = useState(null);
  function handleTokenUpdate() {
    console.log("k");
    setAuth(localStorage.getItem("access_token") ? true : false);
  }
  useEffect(() => {
    console.log(auth);
    setAuth(localStorage.getItem("access_token") ? true : false);
    window.addEventListener("addedToken", handleTokenUpdate);
  }, []);
  const logout = () => {
    localStorage.clear();
    setAuth(false);
  };
  return (
    <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand navbar-xconnect" to="/">
          XConnect
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <ul className="navbar-nav ml-auto">
            <Link className="nav-link active" aria-current="page" to="/Events">
              Events
            </Link>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Time Table
              </a>
            </li>
            <Link className="nav-link active" aria-current="page" to="/Canteen">
              Canteen
            </Link>

            {auth ? (
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  onClick={logout}
                >
                  Logout
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Login"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
