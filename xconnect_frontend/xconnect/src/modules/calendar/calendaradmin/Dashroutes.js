import { Routes, Route } from "react-router-dom";
import Calscheduleevents from "../calendaradmin/calscheduleevents";
import Caladdevents from "../calendaradmin/caladdevents";
import Calsidebar from "../calendaradmin/calsidebar";
import Calsubevents from "../calendaradmin/calsubevents";
import Subeventsdesc from "../calendaradmin/subeventsdesc"; 

export default function DashRoutes() {
  return (
    <div className="d-flex mx-auto flex-column justify-content-center">
      <Routes>
        <Route path="/calsidebar" element={<Calsidebar />} />
        <Route path="/caladdevents" element={<Caladdevents />} />
        <Route path="/calscheduleevents" element={<Calscheduleevents />} />
        <Route path="/calsubevents" element={<Calsubevents />} />
        <Route path="/subeventsdesc" element={<Subeventsdesc />} /> 
      </Routes>
    </div>
  );
}
