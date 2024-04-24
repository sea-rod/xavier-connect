import React from "react";
import Topbar from "../../../shared/Admin/Topbar";
import { FaHome } from "react-icons/fa";
import Sidebar from "../../../shared/Admin/Sidebar";
import Dashboardroutes from "./Router/Dashboardroutes";
import "./cdindex.css";
const routes = [
  {
    path: "/admin/canteen/dashboard/",
    name: "DASHBOARD",
    icon: <FaHome />,
  },
  {
    path: "/admin/canteen/neworders/",
    name: "NEW ORDERS",
    icon: <FaHome />,
  },
  {
    path: "/admin/canteen/ongoingorders/",
    name: "ONGING ORDERS",
    icon: <FaHome />,
  },
  {
    path: "/admin/canteen/cancelledorders/",
    name: "CANCELLED ORDERS",
    icon: <FaHome />,
  },
  {
    path: "/admin/canteen/additems/",
    name: "ADD ITEMS",
    icon: <FaHome />,
  },
  {
    path: "/admin/canteen/inventory/",
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
