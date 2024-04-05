import React from "react";

const Topbar = () => {
  return (
    <div
      style={{
        display: "flex",
        position: "sticky",
        top: 0,
        left: 0,
        justifyContent: "space-around",
        backgroundColor: "#FF7D34",
        height: "50px",
        zIndex:"1",
      }}
    >
      <div>
        <h1 style={{ fontSize: "4vh", padding: "1vh" }}>XConnect</h1>
      </div>
    </div>
  );
};

export default Topbar;
