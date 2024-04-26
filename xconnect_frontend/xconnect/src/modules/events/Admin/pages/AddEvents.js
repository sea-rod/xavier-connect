import React from "react";
import Pagehead from "../../../canteen/CDashboard/Components/pagehead/Pagehead";
import QuillEditor from "../../components/quill";
import "./AddEvents.css";

export default function AddEvents() {
  const names = [
    {
      name: "ADD EVENTS",
    },
  ];
  return (
    <>
      <Pagehead names={names} />
      <form>
        <div id="maineventform" class="mb-3 container">
          <input type="text" id="addeventsform" placeholder="Event Name" />
          <input type="text" id="addeventsform" placeholder="Date" />
          <input type="text" id="addeventsform" placeholder="Start Time" />
          <div className="p-0 bg-white ">
          <QuillEditor />

          </div>
        </div>
        <button id="addevent-btn" type="submit" className="btn">
          ADD EVENT
        </button>
      </form>
    </>
  );
}
