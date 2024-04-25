import React from "react";
import { ToastContainer } from "react-toastify";
import Topbar from "../../shared/Admin/Topbar";
import { AiOutlineDashboard } from "react-icons/ai";
import { PiBooks } from "react-icons/pi";
import { LuBookLock } from "react-icons/lu";
import { BiBookAdd } from "react-icons/bi";
import Sidebar from "../../shared/Admin/Sidebar";
import "../canteen/CDashboard/Cdindex.css";
import LibraryRouter from "./Router/library_router";

const routes = [
  {
    path: "ldashboard/",
    name: "Dashboard",
    icon: <AiOutlineDashboard />,
  },
  {
    path: "books/",
    name: "BOOKS",
    icon: <PiBooks />,
  },
  {
    path: "reservations/",
    name: "RESERVATIONS",
    icon: <LuBookLock />,
  },
  {
    path: "addbooks/",
    name: "ADDBOOKS",
    icon: <BiBookAdd />,
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
