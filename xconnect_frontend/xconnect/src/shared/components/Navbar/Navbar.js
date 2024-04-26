import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [auth, setAuth] = useState(null);
  const location = useLocation();
  const [navbarColor, setNavbarColor] = useState(""); //Dynamically Change Navbar Color
  const [navbarTextColor, setNavbarTextColor] = useState(""); //Dynamically change text color in Navbar

  useEffect(() => {
    setAuth(localStorage.getItem("access_token") ? true : false);
    window.addEventListener("addedToken", handleTokenUpdate);

    return () => {
      window.removeEventListener("addedToken", handleTokenUpdate);
    };
  }, []);

  // To change Navbar color dynamically
  useEffect(() => {
    console.log(location.pathname);
    switch (location.pathname) {
      case "/":
        setNavbarColor("#5D9AF8");
        break;
      case "/canteen":
      case "/order":
      case "/cart":
        setNavbarColor("#FEAC04");
        break;
      case "/studentHelp":
        setNavbarColor("#AED6F1");
        break;
      case "/login":
      case "/signUp":
      case "/timeTable":
      case "/reset-password/":
      case "/reset-form":
        setNavbarColor("#EE3A57");
        break;
      case "/events":
      case "/subEvents":
        setNavbarColor("#FFF500");
        break;
      case "/helpLine":
        setNavbarColor("#ADD8E6");
        break;
      case "/calendar":
        setNavbarColor("#5CC1A3");
        break;
      case "/library":
      case "/reserveBook":
      case "/newpage":
        setNavbarColor("#1768E3");
        break;
      default:
        setNavbarColor("#5D9AF8");
    }
  }, [location]);

  // To change Navbar Text Color dynamimcally.
  // useEffect(() => {
  //   switch (location.pathname) {
  //     case "/events":
  //     case "/subEvents":
  //     case "/helpLine":
  //     case "/calendar":
  //       setNavbarTextColor("black");
  //       break;
  //     default:
  //       setNavbarTextColor("");
  //   }
  // }, [location]);

  // Collapsing Navbar
  const collapseNavbar = () => {
    const navbarToggler = document.querySelector(".navbar-toggler");
    if (navbarToggler) {
      navbarToggler.classList.add("collapsed");
      navbarToggler.setAttribute("aria-expanded", false);
      const navbarCollapse = document.querySelector(".navbar-collapse");
      if (navbarCollapse) {
        navbarCollapse.classList.remove("show");
      }
    }
  };
  const handleTokenUpdate = () => {
    setAuth(localStorage.getItem("access_token") ? true : false);
  };

  const logout = () => {
    localStorage.clear();
    setAuth(false);
  };

  return (
    <nav
      key={location.pathname}
      className="navbar navbar-expand-lg"
      style={{
        backgroundImage: `linear-gradient(to right, ${navbarColor}, ${navbarColor})`,
        backgroundSize: "0% 100%",
        backgroundRepeat: "no-repeat",
        animation: "fill 2s forwards",
        color: navbarTextColor,
      }}
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand navbar-xconnect"
          to="/"
          style={{ color: navbarTextColor }}
          onClick={collapseNavbar}
        >
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
            <Link
              className="nav-link active"
              aria-current="page"
              to="/events"
              style={{ color: navbarTextColor }}
              onClick={collapseNavbar}
            >
              Events
            </Link>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="/timeTable"
                style={{ color: navbarTextColor }}
                onClick={collapseNavbar}
              >
                Time Table
              </a>
            </li>
            <Link
              className="nav-link active"
              aria-current="page"
              to="/canteen"
              style={{ color: navbarTextColor }}
              onClick={collapseNavbar}
            >
              Canteen
            </Link>

            {auth ? (
              <li className="nav-item">
                <Link
                  style={{ color: navbarTextColor }}
                  className="nav-link active"
                  aria-current="page"
                  onClick={() => {
                    logout();
                    collapseNavbar();
                  }}
                >
                  Logout
                </Link>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/signUp"
                    style={{ color: navbarTextColor }}
                    onClick={collapseNavbar}
                  >
                    SignUp
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    style={{ color: navbarTextColor }}
                    className="nav-link active"
                    aria-current="page"
                    to="/login"
                    onClick={collapseNavbar}
                  >
                    SignIn
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
