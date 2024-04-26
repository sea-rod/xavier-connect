import React from "react";
import Sidebar from "./calsidebar";
import DashRoutes from "./Dashroutes";
import Topbar from "../../../shared/Admin/Topbar";
import { ToastContainer } from "react-toastify";



function Caldash() {
  return (
    <div>
      <ToastContainer
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
        progress={undefined}
        theme="dark"
      />
      <Topbar/>
      <Sidebar />
      <DashRoutes />
    </div>
  );
}

export default Caldash;
