import { Routes, Route } from "react-router-dom";
import EventsDash from "../eventsDashBoard";

export default function EventsRoutes(){
    return(
        <>
            <Routes>
                <Route path="eventsdashboard/" element={<EventsDash />}/>
            </Routes>
        </>
    );
}