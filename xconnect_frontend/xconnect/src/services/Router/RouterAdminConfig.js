import { Routes, Route } from "react-router-dom";
import Cdash from "../../modules/canteen/CDashboard/cdash";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="canteen/*" element={<Cdash />} />
    </Routes>
  );
};

export default AdminRoutes;
