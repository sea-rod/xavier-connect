import { Routes, Route } from "react-router-dom";
import Additems from "../pages/Additems";
import Cancelledorders from "../pages/Cancelledorders";
import Dashboard from "../pages/Dashboard";
import Inventory from "../pages/Inventory";
import Neworders from "../pages/Neworders";
import Ongoingorders from "../pages/Ongoingorders";

export default function Dashboardroutes() {
    return (
        <>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/neworders" element={<Neworders />} />
                <Route path="/ongoingorders" element={<Ongoingorders />} />
                <Route path="/cancelledorders" element={<Cancelledorders />} />
                <Route path="/additems" element={<Additems />} />
                <Route path="/inventory" element={<Inventory />} />
            </Routes>
        </>
    );
}