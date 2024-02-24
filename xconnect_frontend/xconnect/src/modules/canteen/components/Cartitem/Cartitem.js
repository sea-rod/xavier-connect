import React from "react";
import "./Cartitem.css";
import trashbin from "../../Ascets/trash-bin.png";

function Cartitem(props) {
  return (
    <>
      <div className="orderitem">
        <div className="image">
          <img src={props.image} alt="text" />
        </div>
        <div className="details">
          <div className="name">{props.name}</div>
          <div className="quantity">quantity:{props.quantity}</div>
          <div className="price">Rs {props.price}</div>
          <hr />
        </div>
        <div className="trashbin">
          <img src={trashbin} alt="trashbin" />
        </div>
      </div>
    </>
  );
}

export default Cartitem;
