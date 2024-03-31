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
      
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container" id="canteen-cart">
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
  );
}
