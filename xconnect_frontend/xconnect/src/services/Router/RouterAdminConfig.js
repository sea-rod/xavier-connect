import { Routes, Route } from "react-router-dom";
import Cdash from "../../modules/canteen/CDashboard/cdash";
import EventsDash from "../../modules/events/Admin/eventsDashBoard";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="canteen/*" element={<Cdash />} />
      <Route path="events/*" element={<EventsDash />} />
    </Routes>
  );
};

export default AdminRoutes;
