import React from "react";

const Topbar = () => {
  return (
    <div
      style={{
        display: "flex",
        position: "fixed",
        top: 0,
        left: 0,
        justifyContent: "space-around",
        backgroundColor: "#FF7D34",
        width:"100%",
        height: "50px",
        zIndex: "10",
      }}
    >
      <div>
        <h1 style={{ fontSize: "4vh", padding: "1vh" }}>XConnect</h1>
      </div>
    </div>
  );
};

export default Topbar;
