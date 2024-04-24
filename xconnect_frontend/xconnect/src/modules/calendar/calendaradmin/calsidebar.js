import React from "react";
import { Link } from "react-router-dom"; 
import "./calsidebar.css"; 
import profileImage from "./profile.png"; 

const Calsidebar = () => {
  return (
    <div>
      <div className="calsidebar">
        <div className="profile">
          <a href="#profile" style={{ display: "flex", alignItems: "center" }}>
            <img src={profileImage} alt="Profile Picture" style={{ width: '75px' }} />
            <p style={{ padding: "12px" }}>JOE MENEZES</p>
          </a>
        </div>

        <Link to="calscheduleevents">
          <i className="fa fa-fw fa-calendar-alt"></i> EVENT SCHEDULE
        </Link>
        <Link to="caladdevents">
          <i className="fa fa-fw fa-calendar-plus"></i> ADD EVENTS
        </Link>
        <Link to="calsubevents">
          <i className="fa fa-fw fa-calendar-plus"></i> CREATE SUB-EVENTS FORM
       </Link>
        <a href="subeventsdesc">
          <i className="fa fa-fw fa-calendar-check"></i> SUB-EVENTS DESCRIPTION
        </a>
      </div>
    </div>
  );
};

export default Calsidebar;
