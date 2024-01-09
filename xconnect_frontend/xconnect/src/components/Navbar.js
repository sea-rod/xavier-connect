import React from "react";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import "./Navbar.css";

export default function Navbar() {
   const [auth, setAuth] = useState(null);
  useEffect(() => {
    function handleTokenUpdate() {
      setAuth(localStorage.getItem("access_token") ? true : false);
    }
    window.addEventListener("addedToken", handleTokenUpdate);
  }, []);
  const logout = (h) => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setAuth(null);
  };
  return (
    <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand navbar-xconnect" to="/Home">
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
            <a className="nav-link active" aria-current="page" href="/">
              About
            </a>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle active"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Quick Links
              </a>
              <ul className="dropdown-menu bg-transparent">
                <li>
                  <a className="dropdown-item hover-fix" href="/">
                    Guidelines
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item hover-fix" href="/">
                    Bachelors
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item hover-fix" href="/">
                    Masters
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Academics
              </a>
            </li>
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
