import React from "react";
import "./Popular.css";
import Item from "../Item/Item";
import axiosInstance from "../../../../services/axios";
import { useEffect, useState } from "react";

const Popular = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axiosInstance.get("canteen/menu/").then((res) => {
      console.log(res.data);
      setdata(res.data);
    });
  }, []);
  return (
    <div className="popular" id="canteen">
      <h1>SUPER DELICIOUS DEALS</h1>
      <hr />
      <div className="popular-item">
        {data.map((item) => {
          return (
            <Item
              id={item.id}
              name={item.item_name}
              image={item.image}
              new_price={item.price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
