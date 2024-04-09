import React from "react";
import Topbar from "../../../shared/Admin/Topbar";
import Sidebar from "../../../shared/Admin/Sidebar";
import Dashboardroutes from "./Router/Dashboardroutes";
import "./cdindex.css";

function Cdash(props) {
  return (
    <div>
      <Topbar />
      <div className="app">
        <Sidebar/>
        <Dashboardroutes />
      </div>
    </div>
  );
}

export default Cdash;
