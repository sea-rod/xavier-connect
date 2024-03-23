import React, { useState, useEffect } from "react";
import axiosInstance from "../../../../services/axios";
import { useNavigate } from "react-router-dom";
import "./Item.css";

const Item = (props) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState("Add");
  const [itemId, setItemId] = useState(null);

  useEffect(() => {
    setQuantity(props.quantity);
    console.log(props.status);
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
        let cartdata = [props.id, false];
        let event = new CustomEvent("cart_updated", { detail: cartdata });
        window.dispatchEvent(event);
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
        console.log(res.status);
        setItemId(res.data?.id);
        let cartdata = [props.id, true];
        let event = new CustomEvent("cart_updated", { detail: cartdata });
        window.dispatchEvent(event);
      })
      .catch((err) => {
        console.log(err.response);
        if (err.response.data) {
          alert(err.response.data);
          setQuantity("Add");
        }
        if (
          err.response.status === 403 &&
          !localStorage.getItem("access_token")
        ) {
          navigate("/Login");
          setQuantity((prevQuantity) => prevQuantity - 1);
        }
      });
  };

  return (
    <div className="d-flex flex-column bg-dark col-5 col-md-2 py-2 px-0 justify-content-be mx-1">
      <div className="m-0 p-0">
        <img src={props.image} alt="" className="col-12 m-0" />
      </div>
      <div className="bg-dark text-white  mt-2 d-flex flex-column justify-content-start">
        <p className="m-0 item">{props.name}</p>
        <p className="m-0 price">Rs {props.price}/-</p>
        {quantity === "Add" ? (
          <button
            className=" col-7 mt-1"
            onClick={incItem}
            disabled={!props.status}
          >
            {quantity}
          </button>
        ) : (
          <button className="d-flex justify-content-between mt-1">
            <i className="fa fa-minus my-auto" onClick={descItem}></i>
            <p>{quantity}</p>
            <i className="fa fa-plus my-auto" onClick={incItem}></i>
          </button>
        )}
      </div>
    </div>
  );
};
export default Item;
