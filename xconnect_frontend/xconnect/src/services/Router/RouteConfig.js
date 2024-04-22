import { Routes, Route } from "react-router-dom";
import Client from "../../Client";
import AdminRoutes from "./RouterAdminConfig";
export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Client />} />
        <Route path="admin/*" element={<AdminRoutes />} />
      </Routes>
    </>
  );
}
