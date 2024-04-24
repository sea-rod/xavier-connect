import React from "react";
import "./calsubevents.css";

const subEventsdescForm = () => {
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
          <input type="text" id="eventName" name="Subevent Description" placeholder="Add Subevent Description"/><br />
        </div>
        <div className="calsubmit">
          <button type="submit">Submit</button> 
        </div>
      </form>
    </div>
  );
};

export default subEventsdescForm;
