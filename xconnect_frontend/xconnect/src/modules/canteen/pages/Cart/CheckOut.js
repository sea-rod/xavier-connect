import React from "react";
import Cartitem from "../../components/Cartitem/Cartitem";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axiosInstance from "../../../../services/axios";

export default function CheckOut() {
  const [itemData, setItemData] = useState([]);
  const [cartData, setCartData] = useState({});
  const [totalItems, setTotalItems] = useState(0);

  const fetchData = () => {
    axiosInstance.get("canteen/cart/").then((res) => {
      console.log(res.data);
      setCartData(res.data);
      setItemData(res.data.menu_items);
      // console.log(itemData[0].id);
      let sum = 0;
      res.data.menu_items.forEach((item) => {
        sum += item.quantity;
      });
      setTotalItems(sum);
      console.log("res:", sum);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container" id="canteen-cart">
      <h1 className="text-center">Your Order</h1>
      <div className="py-2">
        <Cartitem />
        <hr className="my-2 " />
        <div className="px-3 d-flex">
          <p className="m-0">Add More Items</p>
          <Link className="ms-auto" to="/Canteen">
            <i className="fa fa-plus"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
