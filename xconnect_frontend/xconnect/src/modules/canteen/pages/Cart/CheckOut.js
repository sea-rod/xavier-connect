import React from "react";
import Cartitem from "../../components/Cartitem/Cartitem";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axiosInstance from "../../../../services/axios";

export default function CheckOut() {
  const [itemData, setItemData] = useState([]);
  const [cartData, setCartData] = useState({});

  const fetchData = () => {
    axiosInstance.get("canteen/cart/").then((res) => {
      console.log(res.data);
      setCartData(res.data);
      setItemData(res.data.menu_items);
    });
  };

  useEffect(() => {
    fetchData();
    window.addEventListener("cart_updated", (e) => {
      fetchData();
      console.log("event triggred");
    });
  }, []);

  

  return (
    <div
      className="container vh-100 d-flex flex-column justify-content-between"
      id="canteen-cart"
    >
      <div>
        <h1 className="text-center">Your Order</h1>
        <div className="py-2">
          {itemData.map((item) => (
            <Cartitem
              quantity={item.quantity}
              key={item.menu.id}
              id={item.menu.id}
              name={item.menu.item_name}
              image={item.menu.image}
              price={item.menu.price}
              item_id={item.id}
              status={item.status}
              callback={fetchData}
            />
          ))}

          <hr className="my-2 " />
          <div className="px-3 d-flex">
            <p className="m-0">Add More Items</p>
            <Link className="ms-auto" to="/Canteen">
              <i className="fa fa-plus"></i>
            </Link>
          </div>
        </div>
      </div>
      <Link className="order-btn m-0 p-0" to="/Order">
        <button className="order-btn col-12">Pay | Rs {cartData.total}/-</button>
      </Link>
    </div>
  );
}
