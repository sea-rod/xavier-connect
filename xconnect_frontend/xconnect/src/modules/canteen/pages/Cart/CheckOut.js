import React from "react";
import Cartitem from "../../components/Cartitem/Cartitem";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axiosInstance from "../../../../services/axios";

export default function CheckOut() {
  const [itemData, setItemData] = useState([]);
  const [cartData, setCartData] = useState({});
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    axiosInstance.get("canteen/cart/").then((res) => {
      console.log(res.data);
      setCartData(res.data);
      setItemData(res.data.menu_items);
      let sum = 0;
      res.data.menu_items.forEach((item) => {
        sum += item.quantity;
      });
      setTotalItems(sum);
      console.log("res:", sum);
    });
  }, []);
  return (
    <div>
      <div className="cartpage">
        <h2>
          Shopping Cart <span>({totalItems} item in your cart)</span>
        </h2>
        {itemData.map((item) => (
          <Cartitem
            key={item.id}
            id={item.menu.id}
            name={item.menu.item_name}
            image={item.menu.image}
            price={item.menu.price}
            quantity={item.quantity}
          />
        ))}
      </div>
      <div className="cartpage" id="cartpage-sub">
        <div className="total">
          <div className="label">Order total:</div>
          <div className="value">Rs {cartData.total}</div>
        </div>
        <Link to="/Canteen">
          <button className="backtocanteen">Continue shopping</button>
        </Link>
        <button className="reserve">Reserve</button>
      </div>
    </div>
  );
}
