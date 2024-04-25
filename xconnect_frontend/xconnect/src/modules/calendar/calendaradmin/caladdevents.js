import React from "react";
import "./caladdevents.css";

const AddEventForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); 
  };

  return (
    <div className="calbody">
      <div className="calheading">
      <h2>ADD NEW EVENT</h2> 
      </div>
      <form className="caladdevents" onSubmit={handleSubmit}>
        <div className="Caleventname">
          <input type="text" id="eventName" name="eventName" placeholder="Event Name"/><br />
        </div>
        <div>
          <input type="text" id="eventDate" name="eventDate" placeholder="Event"/><br />
        </div>
        <div>
          <input type="text" id="startTime" name="startTime"placeholder="Start Time" /><br />
        </div>
        <div>
          <input type="text" id="Description" name="Description" placeholder="Description"/><br />
        </div>
        <div>
          <input type="text" id="subEvents" name="subEvents" placeholder="No. of Sub-Events"/><br />
        </div>
        <div className="calsubmit">
          <button type="submit">SUBMIT</button> 
        </div>
      </form>
    </div>
  );
};

export default AddEventForm;
