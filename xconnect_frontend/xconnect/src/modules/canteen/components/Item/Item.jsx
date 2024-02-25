import React, { useState, useEffect } from "react";
import "./Item.css";
import axiosInstance from "../../../../services/axios";

const Item = (props) => {
  const [quantity, setQuantity] = useState("Add");
  const [itemId, setItemId] = useState(null);

  useEffect(() => {
    setQuantity(props.quantity);
    setItemId(props.item_id);
  }, [props.quantity]);

  useEffect(() => {
    console.log("Quantity changed:", quantity);
    // Call addToCart only when quantity changes
    if (quantity !== "Add") {
      const timerId = setTimeout(addToCart, 1000);
      return () => clearTimeout(timerId);
    }
  }, [quantity, props.quantity]);

  // increase item quantity
  const incItem = () => {
    if (quantity === "Add") {
      setQuantity(1);
    } else {
      setQuantity((prevQuantity) => prevQuantity + 1); // Functional update
    }
  };

  // decrease item quantity
  const descItem = () => {
    if (quantity !== "Add") {
      setQuantity((prevQuantity) => prevQuantity - 1); // Functional update
    }
    if (quantity - 1 <= 0) {
      setQuantity("Add");
      deleteItem();
    }
  };

  // makes api call to delete item from cart
  const deleteItem = () => {
    axiosInstance
      .delete("canteen/" + itemId + "/item/")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // makes api call to add item to cart
  const addToCart = () => {
    console.log("Adding to cart:", quantity);
    axiosInstance
      .post("canteen/item/", {
        menu_id: props.id,
        quantity: quantity,
      })
      .then((res) => {
        console.log(res);
        setItemId(res.data.id);
      })
      .catch((err) => {
        console.log(err);
      });;
  };

  return (
    <div className="item" id="canteen-item">
      <div className="card">
        <div className="card-img">
          <img src={props.image} alt="" />
        </div>
        <div className="card-info">
          <p className="text-title">{props.name} </p>
          <p className="text-body">Product description and details</p>
        </div>
        {props.status ? (
          <div className="card-footer">
            <span className="text-title">₹{props.new_price}</span>
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
          </div>
        ) : (
          <div className="card-footer">
            <div className="d-flex w-100">
              <p className="m-auto align-center" style={{ fontSize: "18px" }}>
                Out of Stock
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Item;
