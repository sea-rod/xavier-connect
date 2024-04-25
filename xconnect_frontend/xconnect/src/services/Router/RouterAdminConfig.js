import { Routes, Route } from "react-router-dom";
import Cdash from "../../modules/canteen/CDashboard/cdash";
import EventsDash from "../../modules/events/Admin/eventsDashBoard";
import LibraryDashboard from "../../modules/Library_Page/library_dashboard";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="canteen/*" element={<Cdash />} />
      <Route path="events/*" element={<EventsDash />} />
      <Route path="library/*" element={<LibraryDashboard />} />
    </Routes>
  );
};

export default AdminRoutes;
