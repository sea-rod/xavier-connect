import { Routes, Route } from "react-router-dom";
import Cdash from "../../modules/canteen/CDashboard/CDash";
import EventsDash from "../../modules/events/Admin/eventsDashBoard";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminRoutes = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      navigate("/login");
    }
  }, []);
  return (
    <Routes>
      <Route path="canteen/*" element={<Cdash />} />
      <Route path="events/*" element={<EventsDash />} />
    </Routes>
  );
};

export default AdminRoutes;
