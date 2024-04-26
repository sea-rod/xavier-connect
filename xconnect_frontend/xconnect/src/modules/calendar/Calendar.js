import React from "react";
import "./Calendar.css";

export default function Calendar() {
  return (
    <>
      <div className="container">
        <div
          className="mt-3 d-flex justify-content-center align-items-center calendar-hero-font"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/Calendar/image33.png)`,
            height: "200px",
          }}
        >
          March 2021
        </div>
        <div style={{ display: "inline", color: "#55C1A3" }}>
          THU{" "}
          <span style={{ fontSize: "25px" }}>
            <strong>08</strong>
          </span>
        </div>
        <div
          className="mt-3 announcement-font"
          style={{
            backgroundColor: "#5CC1A3",
            height: "auto",
            padding: "10px",
            borderRadius: "12px",
            display: "inline-block",
            width: "80%",
            marginLeft: "10px",
          }}
        >
          CHEMFEST
        </div>
      </div>
    </>
  );
}
