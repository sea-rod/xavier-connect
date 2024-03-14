import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import axiosInstance from "../../../../services/axios";

const Popular = () => {
  const [data, setData] = useState([]);
  const [cartData, setCartData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(cartData, "ll");
    if (cartData) {
      console.log("inside", cartData);
      setIsLoading(false);
    }
  }, [cartData]);

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
          d[item.menu.id] = { quantity: item.quantity, item_id: item.id };
        });
        setCartData(d);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      } //finally {
      //   setIsLoading(false); // Set isLoading to false after cartData is fetched
      // }
    };

    // Call both functions to fetch data
    fetchMenuData();
    fetchCartData();
  }, []);

  return (
    <div class="row mt-2 mx-5 d-flex justify-content-between">
      <h1>Trending orders</h1>
      <hr />
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
    </div>
  );
};

export default Popular;
