import {motion} from "framer-motion";
import "./Sidebar.css";
import {FaHome} from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import usericon from "../../Ascets/usericon.png";

const routes = [
    {
        path:"/d/dashboard",
        name:"Dashboard",
        icon: <FaHome/>,
    },
    {
        path:"/d/neworders",
        name:"NEW ORDERS",
        icon: <FaHome/>,
    },
    {
        path:"/ongoingorders",
        name:"ONGING ORDERS",
        icon: <FaHome/>,
    },
    {
        path:"/d/cancelledorders",
        name:"CANCELLED ORDERS",
        icon: <FaHome/>,
    },
    {
        path:"/d/additems",
        name:"ADD ITEMS",
        icon: <FaHome/>,
    },
    {
        path:"/d/inventory",
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
            <div className="user-icon" id="sidebar" >
                <img src={usericon} id="usericon-sidebar"/>    
            </div>
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
