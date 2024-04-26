import { Routes, Route } from "react-router-dom";
import Cdash from "../../modules/canteen/CDashboard/CDash";
import EventsDash from "../../modules/events/Admin/eventsDashBoard";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axios";

const AdminRoutes = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      navigate("/login");
    }
    axiosInstance.get("accounts/user-group/").then((res) => {
      if (
        !(
          res.data.is_superuser ||
          res.data.group == "canteen_staff" ||
          res.data.group == "library_staff" ||
          res.data.group == "teacher"
        )
      ) {
        navigate("/login");
      }
    });
  }, []);
  return (
    <Routes>
      <Route path="canteen/*" element={<Cdash />} />
      <Route path="events/*" element={<EventsDash />} />
      <Route path="library/*" element={<LibraryDashboard />} />
    </Routes>
  );
};

export default AdminRoutes;
