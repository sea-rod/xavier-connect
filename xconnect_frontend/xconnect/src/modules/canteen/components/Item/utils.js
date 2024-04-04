import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../../services/axios";

const inc_qauntity = (quantity) => {
  console.log(quantity);
  if (quantity === "Add") {
    console.log("inc");
    return 1;
  } else {
    return quantity + 1;
  }
};

// makes api call to add item to cart
const addToCartAPICall = async (id, quantity) => {
  console.log("Adding to cart:", quantity);
  const res = await axiosInstance
    .post("canteen/item/", {
      menu_id: id,
      quantity: quantity,
    });
  console.log(res.data, "added api call");
  //   setItemId(res.data?.id);
  let cartdata = [id, true];
  let event = new CustomEvent("cart_updated", { detail: cartdata });
  window.dispatchEvent(event);
  console.log("kkllllsdknfnsfdnjksndfjkldn");
  return res.data.id;
};

const desc_qauntity = (id, item_id, quantity) => {
  console.log("desc", quantity);
  if (quantity - 1 <= 0) {
    console.log("desc 2", item_id);
    deleteItem(id, item_id);
    return "Add";
  }
  if (quantity !== "Add") {
    console.log("desc 1");
    return quantity - 1; // Functional update
  }
};

const deleteItem = (id, itemId) => {
  axiosInstance
    .delete("canteen/" + itemId + "/item/")
    .then((res) => {
      console.log(res);
      let cartdata = [id, false];
      let event = new CustomEvent("cart_updated", { detail: cartdata });
      window.dispatchEvent(event);
    })
    .catch((err) => {
      console.log(err);
    });
};
export { inc_qauntity, addToCartAPICall, desc_qauntity };
