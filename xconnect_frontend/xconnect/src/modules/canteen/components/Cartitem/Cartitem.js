import React from "react";
import "./Cartitem.css";
import AddBtn from "../AddBtn/AddBtn";
import { useEffect, useState } from "react";
import { addToCartAPICall, inc_qauntity, desc_qauntity } from "../Item/utils";
import { useNavigate } from "react-router-dom";

function Cartitem(props) {
  const navigate = useNavigate();

  useEffect(() => {
    console.log(props.item_id);
  }, []);
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

  useEffect(() => {
    console.log(itemId, "itemId");
  }, [itemId]);

  // increase item quantity
  const incItem = () => {
    setQuantity((prevQuantity) => inc_qauntity(prevQuantity)); // Functional update
  };

  // decrease item quantity
  const descItem = () => {
    setQuantity((prevQuantity) =>
      desc_qauntity(props.id, itemId, prevQuantity)
    );
  };
  // makes api call to delete item from cart

  // makes api call to add item to cart
  const addToCart = () => {
    console.log("Adding to cart:", quantity);
    try {
      addToCartAPICall(props.id, quantity).then((id) => {
        setItemId(id);
      });
      // props.callback();
    } catch (err) {
      console.log(err.response);
      if (err.response.status === 400) {
        setQuantity((prevQuantity) => prevQuantity - 1);
        alert(err.response.data);
      } else if (err.response.data) {
        setQuantity("Add");
      }
      if (
        err.response.status === 403 &&
        !localStorage.getItem("access_token")
      ) {
        navigate("/Login");
      }
    }
  };

  return (
    <div className="d-flex px-2 pt-1 mb-0 justify-content-between">
      <div className="d-flex col-5">
        <img src={props.image} alt="" className="col-2 my-auto me-1" />
        <p className="my-auto item-name">{props.name}</p>
      </div>
      <div className="d-flex col-6 justify-content-end m-0">
        <AddBtn
          quantity={quantity}
          status={props.status}
          incItem={incItem}
          descItem={descItem}
        />
        <p className="my-auto price">Rs {props.price}/-</p>
      </div>
    </div>
  );
}

export default Cartitem;
