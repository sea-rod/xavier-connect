import React from "react";
import Topbar from "../../shared/Admin/Topbar";
import Sidebar from "../../shared/Admin/Sidebar";
import { FaHome } from "react-icons/fa";
import EventsRoutes from "./Router/EventsRoutes";
export default function EventsDash() {
    const routes = [
        {
            path: "eventsdash/",
            name: "Events Schedule",
            icon: <FaHome />,
        },
        {
            path: "addevents/",
            name: "Add New Event",
            icon: <FaHome />,
        },
        {
            path: "addsubevents/",
            name: "Subevents Description",
            icon: <FaHome />,
        },
    ];
    return (
        <>
            <Topbar />
            <div className="app">
                <Sidebar routes={routes} />
                <EventsRoutes />
            </div>
        </>
    );
}