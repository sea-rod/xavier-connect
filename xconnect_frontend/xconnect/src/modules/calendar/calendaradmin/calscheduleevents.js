import React from "react";
import "./calscheduleevents.css";

const ScheduleEventForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); 
  };

  return (
    <div className="calbody">
      <div className="calheading">
      <h2>EVENT SCHEDULE</h2>
      </div>
      <div className="calscheduleevents">
        <div className="SEB">
        <p>TECHLIPSE</p>
        <p>BCA Department</p>
        <p>29-03-2024</p>
        </div>
        <div className="SEB">
        <p>MEDIASCOPE</p>
        <p>Mass Comm. Department</p>
        <p>20-11-2023</p>
        </div>
        <div className="SEB">
        <p>PROTEUS</p>
        <p>Bsc. Department</p>
        <p>14-02-2024</p>
        </div>
        <div className="SEB">
        <p>ARENA</p>
        <p>BCom. Department</p>
        <p>11-12-2023</p>
        </div>
      </div>
    </div>
  );
};

export default ScheduleEventForm;
