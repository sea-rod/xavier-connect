import React from "react";
import Topbar from "../../shared/Admin/Topbar";
import Sidebar from "../../shared/Admin/Sidebar";
import { FaHome } from "react-icons/fa";
import EventsRoutes from "./Router/EventsRoutes";
export default function EventsDash() {
    const routes = [
        {
            path: "/admin/events/eventsdash/",
            name: "Events Schedule",
            icon: <FaHome />,
        },
        {
            path: "/admin/events/addevents/",
            name: "Add New Event",
            icon: <FaHome />,
        },
        {
            path: "/admin/events/addsubevents/",
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