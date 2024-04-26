import React, { useEffect } from "react";
import Topbar from "../../../shared/Admin/Topbar";
import { FaHome } from "react-icons/fa";
import Sidebar from "../../../shared/Admin/Sidebar";
import Dashboardroutes from "./Router/Dashboardroutes";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./cdindex.css";
import axiosInstance from "../../../services/axios";
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
function Cdash(props) {
  const navigate = useNavigate();
  useEffect(() => {
    axiosInstance.get("accounts/user-group/").then((res) => {
      if (!(res.data.is_superuser || res.data.group == "canteen_staff")) {
        navigate("/login");
      }
    });
  }, []);

  return (
    <div>
      <Topbar color={"#0000"}/>
      <div className="app">
        <ToastContainer
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick={true}
          pauseOnHover={true}
          draggable={true}
          progress={undefined}
          theme="dark"
        />
        <Sidebar color={"#0000"} routes={routes} />
        <Dashboardroutes />
      </div>
    </div>
  );
}

export default Cdash;
