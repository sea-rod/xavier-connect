import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import CartBar from "../CartBar/CartBar";
import { Link } from "react-router-dom";
import axiosInstance from "../../../../services/axios";
import "./Menu.css";

const Menu = () => {
  const [data, setData] = useState([]);
  const [popularData, setPopularData] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(new Set());
  const [IsEmpty, setIsEmpty] = useState(true);
  const [cartData, setCartData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (cartData) {
      console.log("inside", cartData);
      setIsLoading(false);
    }
  }, [cartData]);

  useEffect(() => {
    // Function to fetch menu data
    const fetchMenuData = async () => {
      console.log("request send");
      try {
        const response = await axiosInstance.get("canteen/menu/");
        const popdata = await axiosInstance.get("canteen/menu/", {
          params: { popular: "True" },
        });
        setData(response.data);
        setPopularData(popdata.data);
      } catch (error) {
        console.log("Error fetching menu data:", error);
      }
    };

    // Function to fetch cart data
    const fetchCartData = async () => {
      try {
        const response = await axiosInstance.get("canteen/cart/");
        console.log(response.data.menu_items);
        setIsEmpty(response.data.menu_items.length === 0);

        const d = {};
        response.data.menu_items.forEach((item) => {
          d[item.menu.id] = { quantity: item.quantity, item_id: item.id };
        });
        setCartData(d);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    // Call both functions to fetch data
    fetchMenuData();
    fetchCartData();

    window.addEventListener("cart_updated", function (event) {
      console.log("CartUpdated", event.detail);
      if (event.detail[1]) {
        setCartItemCount((prevItemCount) => {
          const updatedCartItems = new Set(prevItemCount);
          updatedCartItems.add(event.detail[0]);
          return updatedCartItems;
        });
        setIsEmpty(false);
      } else {
        setCartItemCount((prevItemCount) => {
          const updatedCartItems = new Set(prevItemCount);
          updatedCartItems.delete(event.detail[0]);
          return updatedCartItems;
        });
      }
    });
  }, []);

  useEffect(() => {
    console.log(cartItemCount, "kk");
    if (!cartItemCount.size) {
      setIsEmpty(true);
    }
  }, [cartItemCount]);

  return (
    <div class="row mt-2 mx-5 d-flex justify-content-between">
      <h1 style={{textAlign:'center'}}>TRENDING ORDERS.</h1>
      <div id="menu" className="mb-2"></div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        popularData.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.item_name}
            image={item.image}
            price={item.price}
            quantity={cartData[item.id]?.quantity || "Add"}
            item_id={cartData[item.id]?.item_id}
            status={item.status}
          />
        ))
      )}
      <hr />
      <Link to="/order-list" style={{textDecoration:"none"}}>
      <button className="mx-auto mt-3" style={{ display: "block" }}>
        View Orders
      </button>
      </Link>
      <h1>Menu</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        data.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.item_name}
            image={item.image}
            price={item.price}
            quantity={cartData[item.id]?.quantity || "Add"}
            item_id={cartData[item.id]?.item_id}
            status={item.status}
          />
        ))
      )}
      <CartBar item_count={cartItemCount.size} display={!IsEmpty} />
    </div>
  );
};

export default Menu;
