import React from "react";
import "./calendar.css";

export default function Calendar() {
  const calendarImg = process.env.PUBLIC_URL + "/calendarImages/calendar.png";

  return (
    <>
      <div className="row flex-lg-row-reverse">
        <div className="text-center">
          <div style={{ position: "relative", maxHeight: "170px" }}>
            <img
              src={calendarImg}
              className="img-fluid"
              alt="Bootstrap Themes"
              loading="lazy"
              style={{ width: "100%" }}
            />
            <div className="calendar col-lg-6">
              <h1 className="display-3 fw-bold month-text">JUNE 2024</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 container" style={{ position: "relative" }}>
        <div className="calendar-custom-container textStyle">
          <p>THU 08</p>
          <h1 className="boxStyle">CHEMIFEST</h1>
        </div>
        <div className="calendar-custom-container textStyle">
          <p>WED 24</p>
          <h1 className="boxStyle">SPORTS DAY</h1>
        </div>
        <div className="calendar-custom-container textStyle">
          <p>MON 26</p>
          <h1 className="boxStyle">CANTEEN DAY</h1>
        </div>
      </div>
    </>
  );
}
