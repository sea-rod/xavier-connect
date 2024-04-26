import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Topbar = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname);

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  const color = {
    "/admin/canteen": "#FF7D34",
    "/admin/events": "#A800C2",
    "/admin/library": "#1768E3",
  };

  const getColor = (path) => {
    for (let key in color) {
      if (path.startsWith(key)) {
        return color[key];
      }
    }
    return "#5D9AF8"; // return a default color if no match is found
  };

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
        zIndex: "2",
        width: "100%",
        backgroundColor: getColor(currentPage),
      }}
    >
      <div>
        <h1 style={{ fontSize: "4vh", padding: "1vh" }}>XConnect</h1>
      </div>
    </div>
  );
};

export default Topbar;
