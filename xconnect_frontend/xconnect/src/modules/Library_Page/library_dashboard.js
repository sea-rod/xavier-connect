import React from "react";
//import Topbar from "../../../shared/Admin/Topbar";

import Topbar from "../../shared/Admin/Topbar";
import { FaHome } from "react-icons/fa";
import Sidebar from "../../shared/Admin/Sidebar";
import library_router from "./Router/library_router";
import "./cdindex.css";
const routes = [
  {
    path: "dashboard/",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "books/",
    name: "BOOKS",
    icon: <FaHome />,
  },
  {
    path: "reservations/",
    name: "RESERVATIONS",
    icon: <FaHome />,
  },
  {
    path: "addbooks/",
    name: "ADDBOOKS",
    icon: <FaHome />,
  },
];

function library_dashboard(props) {
  return (
    <div>
      <Topbar />
      <div className="app">
        <Sidebar routes={routes}/>
        <library_router />
      </div>
    </div>
  );
}

export default library_dashboard;
