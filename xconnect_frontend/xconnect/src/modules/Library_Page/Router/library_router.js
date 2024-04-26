import { Routes, Route } from "react-router-dom";
import Books from "../Pages/Books";
import Reservations from "../Pages/Reservations";
import Addbooks from "../Pages/Addbooks";
import LibraryDashboard from "../library_dashboard";
import LDashboard from "../Pages/LDashboard";
const LibraryRouter=()=> {
  return (
    <div className="d-flex mx-auto flex-column justify-content-center">
      <Routes>
        <Route path="ldashboard/" element={<LDashboard />} />
        <Route path="books/" element={<Books />} />
        <Route path="reservations/" element={<Reservations />} />
        <Route path="addbooks/" element={<Addbooks />} />
      </Routes>
    </div>
  )
}

export default LibraryRouter;
