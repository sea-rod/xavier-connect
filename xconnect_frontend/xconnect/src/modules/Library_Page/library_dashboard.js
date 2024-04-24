import React from "react";
import { ToastContainer } from "react-toastify";
import Topbar from "../../shared/Admin/Topbar";
import { FaHome } from "react-icons/fa";
import Sidebar from "../../shared/Admin/Sidebar";
import "../canteen/CDashboard/Cdindex.css";
import LibraryRouter from "./Router/library_router";

const routes = [
  {
    path: "ldashboard/",
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

function LibraryDashboard(props) {
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
        <LibraryRouter/>
      </div>
    </div>
  );
}

export default LibraryDashboard;
