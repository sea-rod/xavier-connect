import React, { useState, useEffect } from "react";
import Card from "../card/card";
import { useNavigate } from "react-router-dom";
import SearchCard from "../SearchCard/SearchCard";
import "./Item.css";
import { addToCartAPICall, inc_qauntity, desc_qauntity } from "./utils";

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
      addToCartAPICall(props.id, quantity)
        .then((id) => {
          setItemId(id);
        })
        .catch((err) => {
          console.log(err);
          if (
            err.response.status === 403 &&
            !localStorage.getItem("access_token")
          ) {
            navigate("/Login");
          }
        });
    } catch (err) {
      console.log(err.response.status, "jjj");
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
