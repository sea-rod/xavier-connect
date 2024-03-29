import React from "react";
import "./Cartitem.css";
import trashbin from "../../Ascets/trash-bin.png";
import { useEffect } from "react";

function Cartitem(props) {
  useEffect(() => {
    console.log(props.item_id);
  }, []);

  return (
    <div className="d-flex px-2 pt-1 mb-0 justify-content-between">
      <div className="d-flex col-5">
        <img src={trashbin} alt="" className="col-2 my-auto me-1" />
        <p className="my-auto item-name">item name</p>
      </div>
      <div className="d-flex col-6 justify-content-end m-0">
        <button className="my-auto me-1 ">Add</button>
        <p className="my-auto price">Rs 20/-</p>
      </div>
    </div>
  );
}

export default Cartitem;
