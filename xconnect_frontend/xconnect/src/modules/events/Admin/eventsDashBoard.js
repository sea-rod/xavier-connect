import React from "react";
import Topbar from "../../../shared/Admin/Topbar";
import Sidebar from "../../../shared/Admin/Sidebar";
import { FaHome } from "react-icons/fa";
import EventsRoutes from "./Router/EventsRoutes";
export default function EventsDash() {
    const routes = [
        {
            path: "/admin/events/eventsdash/",
            name: "EVENTS SCHEDULE",
            icon: <FaHome />,
        },
        {
            path: "/admin/events/addevents/",
            name: "ADD NEW EVENT",
            icon: <FaHome />,
        },
        {
            path: "/admin/events/managesubevents/",
            name: "MANAGE SUBEVENTS",
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