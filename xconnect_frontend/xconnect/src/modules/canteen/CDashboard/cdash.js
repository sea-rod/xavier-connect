import React from "react";
import Topbar from "./shared/Topbar";
import Sidebar from "./shared/Sidebar";
import Dashboardroutes from "./Router/Dashboardroutes";
import "./cdindex.css";

function Cdash() {
  return (
    <div>
      <Topbar />
      <div className="app">
        <Sidebar />
        <Dashboardroutes />
      </div>
    </div>
  );
}

export default Cdash;
