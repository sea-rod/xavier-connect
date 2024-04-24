import React from "react";
import "./calsubevents.css";

const subEventsForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); 
  };

  return (
    <div className="calbody">
      <div className="calheading">
      <h2>SUB EVENTS FORM GENERATOR</h2>
      </div>
      <form className="caladdevents" onSubmit={handleSubmit}>
        <div className="Caleventname">
          <input type="text" id="eventName" name="eventName" placeholder="Event ID"/><br />
        </div>
        <div>
          <input type="text" id="eventDate" name="eventDate" placeholder="Subevent 1"/><br />
        </div>
        <div>
          <input type="text" id="startTime" name="startTime"placeholder="No. of Participants" /><br />
        </div>
        <div>
          <input type="text" id="Description" name="Description" placeholder="Subevent 1"/><br />
        </div>
        <div>
          <input type="text" id="subEvents" name="subEvents" placeholder="No. of Participants"/><br />
        </div>
        <div className="calsubmit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default subEventsForm;
