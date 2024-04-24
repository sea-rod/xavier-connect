import React from "react";
import Topbar from "../../../shared/Admin/Topbar";
import { FaHome } from "react-icons/fa";
import Sidebar from "../../../shared/Admin/Sidebar";
import Dashboardroutes from "./Router/Dashboardroutes";
import "./cdindex.css";
const routes = [
  {
    path: "dashboard/",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "neworders/",
    name: "NEW ORDERS",
    icon: <FaHome />,
  },
  {
    path: "ongoingorders/",
    name: "ONGING ORDERS",
    icon: <FaHome />,
  },
  {
    path: "cancelledorders/",
    name: "CANCELLED ORDERS",
    icon: <FaHome />,
  },
  {
    path: "additems/",
    name: "ADD ITEMS",
    icon: <FaHome />,
  },
  {
    path: "inventory/",
    name: "INVENTORY",
    icon: <FaHome />,
  },
];
function Cdash() {
  return (
    <div>
      <Topbar color={"#0000"}/>
      <div className="app">
        <Sidebar color={"#0000"} routes={routes}/>
        <Dashboardroutes />
      </div>
    </div>
  );
}

export default Cdash;
