import React from "react";
import Pagehead from "../../../canteen/CDashboard/Components/Pagehead";
import "./AddEvents.css"

export default function AddEvents() {
    const names = [
        {
            name: "ADD EVENTS"
        }
    ];
    return (
        <>
            <Pagehead names={names} />
            <form>
                <div id="maineventform" class="mb-3">
                    <input type="text" id="addeventsform" placeholder="Event Name" />
                    <input type="text" id="addeventsform" placeholder="Date" />
                    <input type="text" id="addeventsform" placeholder="Start Time" />
                    <textarea id="addeventsform" rows="3" placeholder="Description"></textarea>
                </div>
                <button id="addevent-btn" type="submit" className="btn">ADD EVENT</button>
            </form>
        </>
    );
}