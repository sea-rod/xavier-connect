import React from "react";
import "./Cartitem.css";
import trashbin from "../../Ascets/trash-bin.png";
import { useEffect } from "react";

function Cartitem(props) {
  useEffect(() => {
    console.log(props.item_id);
  }, []);
  
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
        <div className="trashbin" onClick={()=>props.delete_item(props.item_id)}>
          <img src={trashbin} alt="trashbin" />
        </div>
      </div>
    </>
  );
}

export default Cartitem;
