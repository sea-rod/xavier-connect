import React from "react";
import "./Pagehead.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Pagehead({ names }) {
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
    <>
    <div id="pagehead" >

      <h1 id="pageheadpage-name" style={{border:`solid 2px ${getColor(currentPage)}`}} >{names}</h1>

    </div>
    </>
  )
}

export default Pagehead;
