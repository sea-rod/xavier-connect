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
    path: "/admin/canteen/",
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
      <Topbar />
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
        <Sidebar routes={routes} />
        <Dashboardroutes />
      </div>
    </div>
  );
}

export default cdash;
