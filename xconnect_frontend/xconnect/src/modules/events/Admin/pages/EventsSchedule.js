import React from "react";
import Pagehead from "../../../canteen/CDashboard/Components/pagehead/Pagehead";
import "./EventsSchedule.css";

export default function EventsSchedule(){
    const names = [
        {
            name:"EVENTS SCHEDULE"
        }
    ];
    return (
        <>
            <Pagehead names={names}/>
            <div id="eventschedule">
                <h1 id="eventschedule-name">
                    <span className="entry">TECHLIPSE</span>
                    <span className="entry">BCA Dept</span>
                    <span className="entry">24-01-24</span>
                </h1>
                <h1 id="eventschedule-name">
                    <span className="entry">TECHLIPSE</span>
                    <span className="entry">BCA Dept</span>
                    <span className="entry">24-01-24</span>
                </h1>
            </div>
        </>
    );
}
