import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./Sidebar.css";
import usericon from "../../modules/canteen/Ascets/usericon.png";

const Sidebar = ({ children, routes }) => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const btn = () => {
    setToggle(!toggle);
  };

  const getColor = (path) => {
    const colorMap = {
      "/admin/canteen": "#FF7D34",
      "/admin/events": "#A800C2",
      "/admin/library": "#1768E3",
    };
    return colorMap[path] || "#5D9AF8";
  };

  return (
    <>
      <div className="main-container" id="sidebar">
        <motion.div
          animate={toggle ? { width: "0px" } : { width: "250px" }}
          className="sidebar"
        >
          <button
            onClick={btn}
            className="me-auto"
            id="togle"
            style={toggle ? { left: "0px" } : { left: "250px" }}
          >
            {toggle ? (
              <i className="fa fa-caret-right"></i>
            ) : (
              <i className="fa fa-caret-left"></i>
            )}
          </button>
          <div className="user">
            <div className="user-icon">
              <img src={usericon} id="usericon-sidebar" />
            </div>
            <div className="user-name" id="sidebar">
              <h4>ADMIN</h4>
              <h6><strong>James Anderson</strong></h6>
            </div>
          </div>
          <section className="routes">
            {routes.map((route) => (
              <NavLink
                to={route.path}
                key={route.name}
                className="menu"
                style={{
                  backgroundColor:
                    location.pathname === route.path  
                      ? getColor(location.pathname.split('/').slice(0,3).join("/")) // Set background color dynamically for active link
                      : "transparent", // Set background color to transparent for inactive links
                  color: "#ffff",
                  transition: "1s",
                }}
              >
                <div className="icon">{route.icon}</div>
                <div className="link_text">{route.name}</div>
              </NavLink>

            ))}
          </section>
        </motion.div>
      </div>
      <main className="main-box" id="sidebar">
        {children}
      </main>
    </>
  );
};
export default Sidebar;