import { Routes, Route } from "react-router-dom";
import Cdash from "../../modules/canteen/CDashboard/CDash";
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
    </Routes>
  );
};

export default AdminRoutes;
