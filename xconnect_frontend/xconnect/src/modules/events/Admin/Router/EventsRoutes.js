import { Routes, Route } from "react-router-dom";
import EventsDash from "../eventsDashBoard";
import EventsSchedule from "../pages/EventsSchedule";
import AddEvents from "../pages/AddEvents";
import ManageSubEvents from "../pages/ManageSubevents";

export default function EventsRoutes(){
    return(
        <>
            <Routes>
                <Route path="eventsdashboard/" element={<EventsDash />}/>
                <Route path="eventsdash/" element={<EventsSchedule />}/>
                <Route path="addevents/" element={<AddEvents />}/>
                <Route path="managesubevents/" element={<ManageSubEvents />}/>
            </Routes>
        </>
    );
}