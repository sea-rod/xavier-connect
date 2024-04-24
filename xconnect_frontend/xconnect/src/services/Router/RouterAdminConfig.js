import { Routes, Route } from "react-router-dom";
import Cdash from "../../modules/canteen/CDashboard/Cdash";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="canteen/*" element={<Cdash />} />
    </Routes>
  );
};

export default AdminRoutes;
