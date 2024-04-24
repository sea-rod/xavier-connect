import { Routes, Route } from "react-router-dom";
import Cdash from "../../modules/canteen/CDashboard/Cdash.js";
import Caldash from "../../modules/calendar/calendaradmin/Caldash.js";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="canteen/*" element={<Cdash />} />
      <Route path="calendar/*" element={<Caldash />} />
    </Routes>
  );
};

export default AdminRoutes;
