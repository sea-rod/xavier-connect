import { Routes, Route } from "react-router-dom";
import Dashboard from "../../modules/canteen/CDashboard/pages/Dashboard";
import Cdash from "../../modules/canteen/CDashboard/cdash";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<Cdash />} />
      {/* <Route path="dashboard/" element={<Dashboard />} /> */}
    </Routes>
  );
};

export default AdminRoutes;
