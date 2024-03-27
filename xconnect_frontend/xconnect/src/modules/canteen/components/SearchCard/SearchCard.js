import { useState, useEffect } from "react";
import React from "react";
import axiosInstance from "../../../../services/axios";
import "./SearchCard.css";
import { useNavigate } from "react-router-dom";

const SearchCard = (props) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState("Add");
  const [itemId, setItemId] = useState(null);
  //search card UI
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
      });
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

  return (
    <div className="container">
      <div className="mt-5 col-12">
        <div className="col-12 d-flex bg-dark ps-2 row">
          <div className="d-flex justify-content-between my-3 flex-column col-6">
            <div className="d-flex flex-column">
              <p className="item m-0">{props.name}</p>
              <p className="price">Rs {props.price}/-</p>
            </div>
            {quantity === "Add" ? (
              <button
                className=" col-7 add"
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
          <div className="col-6 p-0">
            <img src={props.image} alt="Product image" className="col-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
