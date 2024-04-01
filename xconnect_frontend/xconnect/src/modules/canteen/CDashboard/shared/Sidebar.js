import {motion} from "framer-motion";
import "./Sidebar.css";
import {FaHome} from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import { LiaUserCircleSolid } from "react-icons/lia";

const routes = [
    {
        path:"/dashboard",
        name:"Dashboard",
        icon: <FaHome/>,
    },
    {
        path:"/neworders",
        name:"NEW ORDERS",
        icon: <FaHome/>,
    },
    {
        path:"/ongoingorders",
        name:"OONGING ORDERS",
        icon: <FaHome/>,
    },
    {
        path:"/cancelledorders",
        name:"CANCELLED ORDERS",
        icon: <FaHome/>,
    },
    {
        path:"/additems",
        name:"ADD ITEMS",
        icon: <FaHome/>,
    },
    {
        path:"/inventory",
        name:"INVENTORY",
        icon: <FaHome/>,
    },
    
]   
const Sidebar = ({children}) => {
  return <>
  <div className="main-container" id="sidebar">
    {/* <div className="motion-div"></div> */}

    <motion.div animate={{ width: "250px"}} className="sidebar" id="sidebar">

        <div className="user" id="sidebar">
            <div className="user-icon d-flex justify-content-center" id="sidebar" ><LiaUserCircleSolid className="my-auto" /></div>
            <div className="user-name" id="sidebar">
            <h4>ADMIN</h4>
            <h6>James Anderson</h6>
            </div>
        </div>

        <section className="routes">
            {routes.map((route) => (
                <NavLink to={route.path} key={route.name} className="menu" id="sidebar">
                    <div className="icon" id="sidebar">{route.icon}</div>
                    <div className="link_text" id="sidebar">{route.name}</div>
                </NavLink>
            ))}
        </section>
    </motion.div>
  </div>
    <main className="main-box" id="sidebar">{children}</main>
</>;
};

export default Sidebar;
