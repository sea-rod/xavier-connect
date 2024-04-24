import { Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Books from "../Pages/Books";
import Reservations from "../Pages/Reservations";
import Addbooks from "../Pages/Addbooks";


function library_router() {
  return (
    <div className="d-flex mx-auto flex-column justify-content-center">
      <Routes>
        <Route path="dashboard/" element={<Dashboard />} />
        <Route path="books/" element={<Books />} />
        <Route path="reservations/" element={<Reservations />} />
        <Route path="addbooks/" element={<Addbooks />} />
      </Routes>
    </div>
  )
}

export default library_router
