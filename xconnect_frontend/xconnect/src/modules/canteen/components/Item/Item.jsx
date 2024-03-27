import React, { useState, useEffect } from "react";
import axiosInstance from "../../../../services/axios";
import Card from "../card/card";
import { useNavigate } from "react-router-dom";
import SearchCard from "../SearchCard/SearchCard";
import "./Item.css";

const Item = (props) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState("Add");
  const [itemId, setItemId] = useState(null);
  const [searchFlag, setSearchFlag] = useState(false);

  useEffect(() => {
    setSearchFlag(props.search);
  }, []);

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

  return (
    <>
      {searchFlag ? (
        <SearchCard
          id={props.id}
          key={props.id}
          name={props.name}
          image={props.image}
          price={props.price}
          quantity={quantity}
          status={props.status}
          incItem={incItem}
          descItem={descItem}
        />
      ) : (
        <Card
          id={props.id}
          key={props.id}
          name={props.name}
          image={props.image}
          price={props.price}
          quantity={quantity}
          status={props.status}
          incItem={incItem}
          descItem={descItem}
        />
      )}
    </>
  );
};
export default Item;
