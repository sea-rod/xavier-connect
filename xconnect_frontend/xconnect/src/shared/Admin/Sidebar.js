import { motion } from "framer-motion";
import "./Sidebar.css";
import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import usericon from "../../modules/canteen/Ascets/usericon.png";
import { useState } from "react";

// const routes = [
//   {
//     path: "dashboard/",
//     name: "Dashboard",
//     icon: <FaHome />,
//   },
//   {
//     path: "neworders/",
//     name: "NEW ORDERS",
//     icon: <FaHome />,
//   },
//   {
//     path: "ongoingorders/",
//     name: "ONGING ORDERS",
//     icon: <FaHome />,
//   },
//   {
//     path: "cancelledorders/",
//     name: "CANCELLED ORDERS",
//     icon: <FaHome />,
//   },
//   {
//     path: "additems/",
//     name: "ADD ITEMS",
//     icon: <FaHome />,
//   },
//   {
//     path: "inventory/",
//     name: "INVENTORY",
//     icon: <FaHome />,
//   },
// ];
const Sidebar = ({ children,routes }) => {
  const [toggle, setToggle] = useState(false);
  const btn = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="main-container" id="sidebar">
        {/* <div className="motion-div"></div> */}

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
              <i class="fa fa-caret-right"></i>
            ) : (
              <i class="fa fa-caret-left"></i>
            )}
          </button>
          <div className="user">
            <div className="user-icon">
              <img src={usericon} id="usericon-sidebar" />
            </div>
            <div className="user-name" id="sidebar">
              <h4>ADMIN</h4>
              <h6>James Anderson</h6>
            </div>
          </div>
          <section className="routes">
            {routes.map((route) => (
              <NavLink to={route.path} key={route.name} className="menu">
                <div className="icon">
                  {route.icon}
                </div>
                <div className="link_text">
                  {route.name}
                </div>
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
