import React, { useEffect, useState } from "react";
import "./Popular.css";
import Item from "../Item/Item";
import axiosInstance from "../../../../services/axios";

const Popular = () => {
  const [data, setData] = useState([]);
  const [cartData, setCartData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Function to fetch menu data
    const fetchMenuData = async () => {
      try {
        const response = await axiosInstance.get("canteen/menu/");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };

    // Function to fetch cart data
    const fetchCartData = async () => {
      try {
        const response = await axiosInstance.get("canteen/cart/");
        const d = {};
        response.data.menu_items.forEach((item) => {
          d[item.menu.id] = item.quantity;
        });
        setCartData(d);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      } finally {
        setIsLoading(false); // Set isLoading to false after cartData is fetched
      }
    };

    // Call both functions to fetch data
    fetchMenuData();
    fetchCartData();
  }, []);

  return (
    <div className="popular" id="canteen">
      <h1>SUPER DELICIOUS DEALS</h1>
      <hr />
      <div className="popular-item">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          data.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              name={item.item_name}
              image={item.image}
              new_price={item.price}
              quantity={cartData[item.id] || "Add"}
              status = {item.status}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Popular;
