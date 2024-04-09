import React, { useState,useEffect } from "react";
import "./inventorycard.css";

const Inventorycard = ({ name, avail_quantity }) => {
  return (
    <div
      id="inventorycard"
      className="mx-5 my-0 border border-bottom-1 align-content-center"
    >
      <p className="my-auto">{name}</p>
      <p className="my-auto">{avail_quantity  }</p>
    </div>
  );
};

export default Inventorycard;
