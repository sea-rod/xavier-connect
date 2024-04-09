import { Routes, Route } from "react-router-dom";
import Dashboard from "../../modules/canteen/CDashboard/pages/Dashboard";
import Cdash from "../../modules/canteen/CDashboard/Cdash";
import { FaHome } from "react-icons/fa";

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

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="canteen/*" element={<Cdash  k={routes}/>} />
      {/* <Route path="dashboard/" element={<Dashboard />} /> */}
    </Routes>
  );
};

export default AdminRoutes;
