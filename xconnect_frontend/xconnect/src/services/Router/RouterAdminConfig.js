import { Routes, Route } from "react-router-dom";
import Dashboard from "../../modules/canteen/CDashboard/pages/Dashboard";
import Cdash from "../../modules/canteen/CDashboard/Cdash";
import { FaHome } from "react-icons/fa";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="canteen/*" element={<Cdash />} />
      {/* <Route path="dashboard/" element={<Dashboard />} /> */}
    </Routes>
  );
};

export default AdminRoutes;
