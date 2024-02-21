import React from "react";
import "./Item.css";
import axiosInstance from "../../../../services/axios";
import { useState } from "react";

const Item = (props) => {
  const [quantity, setQuantity] = useState(0);
  const incItem = () => {
    setQuantity(quantity + 1);
  };
  const descItem = () => {
    setQuantity(quantity - 1);
  };
  const addToCart = (i) => {
    axiosInstance
      .post("canteen/item/", {
        menu_id: i,
        quantity: "1",
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="item" id="canteen-item">
      <div class="card">
        <div class="card-img">
          <img src={props.image} alt="" />
        </div>
        <div class="card-info">
          <p class="text-title">{props.name} </p>
          <p class="text-body">Product description and details</p>
        </div>
        <div class="card-footer">
          <span className="text-title">₹{props.new_price}</span>
          {/* <div className="d-fle justify-content-between"> */}
          <div className="card-button text-black" onClick={descItem}>
            <i className="fa fa-minus"></i>
          </div>
          <div className="d-flex">
            <p className="my-auto" style={{ fontSize: "18px" }}>
              {quantity}
            </p>
          </div>
          <div className="card-button text-black" onClick={incItem}>
            <i className="fa fa-plus"></i>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Item;
